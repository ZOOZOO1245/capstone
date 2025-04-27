class CartCounter {
    constructor() {
        this.cartCountElement = document.getElementById('cartCount');
        this.updateCartCount();
    }

    updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        
        // 각 아이템의 수량을 합산
        cart.forEach(item => {
            totalItems += item.quantity || 1;
        });

        if (this.cartCountElement) {
            this.cartCountElement.textContent = totalItems;
            this.cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
}

// 장바구니 카운터 초기화
const cartCounter = new CartCounter();

// localStorage 변경 감지
window.addEventListener('storage', () => {
    cartCounter.updateCartCount();
});

// 페이지 로드 시 카운트 업데이트
document.addEventListener('DOMContentLoaded', () => {
    cartCounter.updateCartCount();
}); 