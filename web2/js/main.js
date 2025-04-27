// 제품 데이터
const products = [
    {
        id: 1,
        name: "수분 크림",
        category: "cream",
        price: 25000,
        discount: 10,
        image: "images/cream1.jpg"
    },
    // 더 많은 제품 데이터 추가
];

// 제품 정렬 함수
function sortProducts(products, sortType) {
    switch(sortType) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'discount':
            return [...products].sort((a, b) => b.discount - a.discount);
        default:
            return products;
    }
}

// 제품 표시 함수
function displayProducts(products) {
    const productsContainer = document.querySelector('.featured-products');
    productsContainer.innerHTML = '';

    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">
                        ${product.discount > 0 
                            ? `<span class="original-price">${product.price.toLocaleString()}원</span>
                               <span class="discounted-price">${(product.price * (100 - product.discount) / 100).toLocaleString()}원</span>`
                            : `${product.price.toLocaleString()}원`}
                    </p>
                    <button onclick="addToCart(${product.id})">장바구니 담기</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });

    productsContainer.appendChild(productGrid);
}

// 베스트셀러 상품 데이터
const bestSellers = [
    {
        id: 'cream2',
        name: '영양 크림',
        price: 45000,
        discount: 15,
        image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
        category: '크림',
        badge: '인기'
    },
    {
        id: 'serum1',
        name: '비타민C 세럼',
        price: 45000,
        discount: 15,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
        category: '세럼',
        badge: 'BEST'
    },
    {
        id: 'toner1',
        name: '수분 토너',
        price: 28000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
        category: '토너',
        badge: '추천'
    },
    {
        id: 'lotion4',
        name: '미백 로션',
        price: 42000,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500',
        category: '로션',
        badge: 'HOT'
    }
];

// 베스트셀러 표시 함수
function displayBestSellers() {
    const bestGrid = document.querySelector('.best-grid');
    if (!bestGrid) return;

    bestSellers.forEach(product => {
        const discountedPrice = product.discount > 0 
            ? product.price * (100 - product.discount) / 100 
            : product.price;

        const productCard = `
            <div class="best-card">
                <div class="best-badge">${product.badge}</div>
                <img src="${product.image}" alt="${product.name}" class="best-image">
                <div class="best-info">
                    <span class="category-tag">${product.category}</span>
                    <h3 class="best-name">${product.name}</h3>
                    <div class="price-info">
                        ${product.discount > 0 
                            ? `<span class="original-price">${product.price.toLocaleString()}원</span>`
                            : ''
                        }
                        <span class="current-price">${discountedPrice.toLocaleString()}원</span>
                        ${product.discount > 0 
                            ? `<span class="discount-tag">${product.discount}% OFF</span>`
                            : ''
                        }
                    </div>
                    <button onclick="addToCart('${product.id}')" class="add-to-cart-btn">장바구니 담기</button>
                </div>
            </div>
        `;
        bestGrid.innerHTML += productCard;
    });
}

// 장바구니 기능
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('장바구니에 추가되었습니다!');
}

// 페이지 로드 시 제품 표시
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    displayBestSellers();
});

// 검색 처리 함수
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('검색어를 입력해주세요.');
        return;
    }

    // 검색 결과 페이지로 이동
    window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
}

// 검색창 자동완성 기능
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    // 여기에 자동완성 로직 추가 가능
});

// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('active');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // 초기 로드 시 화면에 보이는 요소들 애니메이션 실행
    handleScrollAnimation();
}); 