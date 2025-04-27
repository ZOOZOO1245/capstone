// 장바구니 관리
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 장바구니 표시
function displayCart() {
    const cartList = document.getElementById('cartList');
    const totalCountEl = document.getElementById('totalCount');
    const plusCountEl = document.getElementById('plusCount');

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart">장바구니가 비어있습니다.</p>';
        updateSummary(0, 0, 0, 0);
        totalCountEl.textContent = '0';
        plusCountEl.textContent = '0';
        return;
    }

    totalCountEl.textContent = cart.length;
    plusCountEl.textContent = cart.length; // PLUS배송 상품 수

    cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-header">
                <label>
                    <input type="checkbox" class="cart-item-checkbox" data-index="${index}" checked>
                </label>
            </div>
            <div class="cart-item-content">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <div class="cart-item-price">
                        ${item.discount > 0 
                            ? `<span class="original-price">${item.price.toLocaleString()}원</span>
                               <span class="current-price">${(item.price * (100 - item.discount) / 100).toLocaleString()}원</span>`
                            : `<span class="current-price">${item.price.toLocaleString()}원</span>`
                        }
                    </div>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeItem(${index})">×</button>
            </div>
        </div>
    `).join('');

    calculateTotal();
    initCheckboxes();
}

// 총 금액 계산
function calculateTotal() {
    let subtotal = 0;
    let totalDiscount = 0;
    let selectedCount = 0;

    const checkboxes = document.querySelectorAll('.cart-item-checkbox');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const item = cart[index];
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            if (item.discount > 0) {
                totalDiscount += itemTotal * (item.discount / 100);
            }
            selectedCount += item.quantity;
        }
    });

    const shipping = subtotal >= 50000 ? 0 : (subtotal > 0 ? 3000 : 0);
    const total = subtotal - totalDiscount + shipping;

    updateSummary(subtotal, totalDiscount, shipping, total);
    document.getElementById('checkoutButton').textContent = `구매하기 (${selectedCount}개)`;
}

// 수량 업데이트
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeItem(index);
    } else {
        saveCart();
        displayCart();
    }
}

// 상품 제거
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// 장바구니 저장
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// 장바구니 카운트 업데이트
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// 금액 요약 업데이트
function updateSummary(subtotal, discount, shipping, total) {
    document.getElementById('subtotal').textContent = subtotal.toLocaleString() + '원';
    document.getElementById('discount').textContent = discount.toLocaleString() + '원';
    document.getElementById('shipping').textContent = shipping.toLocaleString() + '원';
    document.getElementById('total').textContent = total.toLocaleString() + '원';
}

// 체크박스 초기화
function initCheckboxes() {
    const selectAll = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.cart-item-checkbox');

    selectAll.checked = itemCheckboxes.length > 0;
    itemCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
        checkbox.addEventListener('change', calculateTotal);
    });

    selectAll.addEventListener('change', () => {
        itemCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
        calculateTotal();
    });
}

// 선택 삭제
document.querySelector('.select-delete').addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('.cart-item-checkbox:checked');
    if (selectedItems.length === 0) {
        alert('삭제할 상품을 선택해주세요.');
        return;
    }

    if (confirm('선택한 상품을 삭제하시겠습니까?')) {
        const newCart = cart.filter((_, index) => 
            !Array.from(selectedItems).some(checkbox => 
                parseInt(checkbox.dataset.index) === index
            )
        );
        cart = newCart;
        saveCart();
        displayCart();
    }
});

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
}); 