// 모달 관련 요소들
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtns = document.getElementsByClassName('close');

// 로그인 모달 표시
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// 회원가입 모달 표시
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// 모달 닫기 버튼
Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    }
});

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}

// 로그인 폼 제출
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    // 여기에 실제 로그인 로직 구현
    console.log('로그인 시도:', { email, password });
    
    // 임시 로그인 성공 처리
    alert('로그인되었습니다!');
    loginModal.style.display = "none";
}

// 회원가입 폼 제출
document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const passwordConfirm = e.target.elements[2].value;
    const name = e.target.elements[3].value;

    // 비밀번호 확인
    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 여기에 실제 회원가입 로직 구현
    console.log('회원가입 시도:', { email, password, name });

    // 임시 회원가입 성공 처리
    alert('회원가입이 완료되었습니다!');
    signupModal.style.display = "none";
}

// 장바구니 기능
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.onclick = function() {
        alert('상품이 장바구니에 추가되었습니다!');
    }
});

// 슬라이더 관련 요소들
const sliderImages = [
    {
        url: 'https://via.placeholder.com/1200x400?text=봄+신상품+특가',
        title: '봄 신상품 특가',
        description: '최대 50% 할인'
    },
    {
        url: 'https://via.placeholder.com/1200x400?text=신규가입+혜택',
        title: '신규가입 혜택',
        description: '첫 구매 30% 할인'
    },
    {
        url: 'https://via.placeholder.com/1200x400?text=브랜드위크',
        title: '브랜드위크',
        description: '인기 브랜드 특가'
    }
];

let currentImageIndex = 0;
const sliderImg = document.querySelector('.slider img');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// 슬라이더 도트 생성
sliderImages.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => showSlide(index);
    sliderDots.appendChild(dot);
});

function showSlide(index) {
    currentImageIndex = index;
    sliderImg.src = sliderImages[index].url;
    
    // 도트 상태 업데이트
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// 이전/다음 버튼 이벤트
prevBtn.onclick = () => {
    currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentImageIndex);
};

nextBtn.onclick = () => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showSlide(currentImageIndex);
};

// 자동 슬라이드
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showSlide(currentImageIndex);
}, 5000);

// 카테고리 탭 기능
const tabButtons = document.querySelectorAll('.tab-btn');
const categoryContent = document.querySelector('.category-content');

const categoryProducts = {
    '스킨케어': [
        { name: '수분 크림', price: '32,000', brand: '브랜드A', discount: '20%' },
        { name: '토너', price: '28,000', brand: '브랜드B', discount: '30%' },
        // 추가 상품...
    ],
    '메이크업': [
        { name: '파운데이션', price: '45,000', brand: '브랜드C', discount: '10%' },
        { name: '립스틱', price: '25,000', brand: '브랜드D', discount: '40%' },
        // 추가 상품...
    ],
    // 추가 카테고리...
};

function showCategoryProducts(category) {
    const products = categoryProducts[category] || [];
    categoryContent.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="https://via.placeholder.com/200x200" alt="${product.name}">
                <div class="product-hover">
                    <button class="quick-view">퀵뷰</button>
                </div>
            </div>
            <div class="product-info">
                <span class="brand">${product.brand}</span>
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="discount">${product.discount}</span>
                    <span class="price">${product.price}원</span>
                </div>
            </div>
            <button class="add-to-cart"><i class="fas fa-shopping-cart"></i> 담기</button>
        </div>
    `).join('');
}

tabButtons.forEach(button => {
    button.onclick = () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        showCategoryProducts(button.textContent);
    };
});

// 초기 카테고리 표시
showCategoryProducts('스킨케어');

// 퀵뷰 기능
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quick-view')) {
        const card = e.target.closest('.product-card');
        const productInfo = {
            name: card.querySelector('h3').textContent,
            price: card.querySelector('.price').textContent,
            brand: card.querySelector('.brand').textContent
        };
        
        alert(`
            상품명: ${productInfo.name}
            브랜드: ${productInfo.brand}
            가격: ${productInfo.price}
        `);
    }
});

// 검색 기능
function initializeSearch() {
    const searchForms = document.querySelectorAll('.search-bar');
    searchForms.forEach(form => {
        const input = form.querySelector('input');
        const button = form.querySelector('button');

        // 검색 실행 함수
        const executeSearch = () => {
            const query = input.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        };

        // 검색 버튼 클릭
        button.addEventListener('click', executeSearch);

        // Enter 키 입력
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSearch();
            }
        });
    });
}

// 검색 결과 페이지 초기화
function initializeSearchResults() {
    if (window.location.pathname.includes('search.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');

        if (searchQuery) {
            // 검색어 표시
            document.getElementById('searchKeyword').textContent = searchQuery;

            // 가상의 검색 결과 데이터 (실제로는 서버에서 받아와야 함)
            const searchResults = [
                {
                    name: '수분 크림',
                    brand: '이니스프리',
                    price: '16,000',
                    originalPrice: '20,000',
                    discount: '20%',
                    image: 'https://via.placeholder.com/200x200',
                    category: '스킨케어',
                    tags: ['무료배송', '신상품']
                },
                {
                    name: '립스틱',
                    brand: '에뛰드',
                    price: '12,000',
                    originalPrice: '15,000',
                    discount: '20%',
                    image: 'https://via.placeholder.com/200x200',
                    category: '메이크업',
                    tags: ['베스트']
                }
                // 추가 검색 결과...
            ];

            // 검색 결과 표시
            displaySearchResults(searchResults);
            updateResultCount(searchResults.length);
            updateCategoryCount(searchResults);
        }
    }
}

// 검색 결과 표시 함수
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (results.length === 0) {
        searchResults.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    searchResults.style.display = 'grid';
    noResults.style.display = 'none';

    searchResults.innerHTML = results.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-hover">
                    <button class="quick-view">퀵뷰</button>
                </div>
            </div>
            <div class="product-info">
                <span class="brand">${product.brand}</span>
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="discount">${product.discount}</span>
                    <span class="price">${product.price}원</span>
                    <span class="original-price">${product.originalPrice}원</span>
                </div>
                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <button class="add-to-cart"><i class="fas fa-shopping-cart"></i> 담기</button>
        </div>
    `).join('');
}

// 검색 결과 수 업데이트
function updateResultCount(count) {
    const countElement = document.querySelector('#searchResultsCount strong');
    if (countElement) {
        countElement.textContent = count;
    }
}

// 카테고리별 결과 수 업데이트
function updateCategoryCount(results) {
    const categories = {};
    results.forEach(item => {
        categories[item.category] = (categories[item.category] || 0) + 1;
    });

    document.querySelectorAll('.category-chips .chip').forEach(chip => {
        const category = chip.textContent.split(' ')[0];
        const count = categories[category] || 0;
        const countSpan = chip.querySelector('.count');
        if (countSpan) {
            countSpan.textContent = `(${count})`;
        }
    });
}

// 리뷰 데이터
const reviews = [
    {
        name: "김지영",
        image: "https://via.placeholder.com/50",
        rating: 5,
        date: "2024-02-15",
        product: "수분 크림",
        content: "피부가 건성인데 수분감이 오래 유지되어서 좋아요. 자극도 없고 순한 느낌이에요.",
        helpful: 24,
        images: ["https://via.placeholder.com/100"]
    },
    {
        name: "이미라",
        image: "https://via.placeholder.com/50",
        rating: 4,
        date: "2024-02-14",
        product: "토너",
        content: "산뜻하게 흡수되고 피부결이 좋아진 것 같아요.",
        helpful: 15,
        images: ["https://via.placeholder.com/100"]
    }
    // 추가 리뷰...
];

// 블로그 포스트 데이터
const blogPosts = {
    '스킨케어 팁': [
        {
            title: '봄철 피부 관리 가이드',
            image: 'https://via.placeholder.com/400x300',
            content: '환절기 피부 관리를 위한 꿀팁을 소개합니다. 수분 공급과 자외선 차단이 중요한 시기입니다.',
            date: '2024.03.15',
            views: 2345,
            likes: 128
        },
        {
            title: '피부 타입별 스킨케어 루틴',
            image: 'https://via.placeholder.com/400x300',
            content: '건성, 지성, 복합성 등 피부 타입별 맞춤 스킨케어 방법을 알아봅니다.',
            date: '2024.03.10',
            views: 1890,
            likes: 95
        }
    ],
    '트렌드': [
        {
            title: '2024 봄 메이크업 트렌드',
            image: 'https://via.placeholder.com/400x300',
            content: '올 봄 유행할 메이크업 트렌드와 연출 방법을 상세히 알아봅니다.',
            date: '2024.03.12',
            views: 2103,
            likes: 156
        },
        {
            title: '글로우 스킨 메이크업',
            image: 'https://via.placeholder.com/400x300',
            content: '촉촉하고 윤기나는 피부 표현을 위한 제품 추천과 메이크업 팁',
            date: '2024.03.08',
            views: 1756,
            likes: 88
        }
    ],
    '제품 리뷰': [
        {
            title: '인기 수분 크림 5종 비교',
            image: 'https://via.placeholder.com/400x300',
            content: '베스트셀러 수분 크림들의 장단점과 사용감을 상세히 비교 분석했습니다.',
            date: '2024.03.14',
            views: 1892,
            likes: 142
        },
        {
            title: '미스트 추천 TOP 3',
            image: 'https://via.placeholder.com/400x300',
            content: '건조한 봄철 수분 충전을 위한 미스트 제품을 소개합니다.',
            date: '2024.03.07',
            views: 1677,
            likes: 93
        }
    ]
};

// 이벤트 데이터
const events = {
    '진행중': [
        {
            title: '2024 봄맞이 뷰티 대축제',
            image: 'https://via.placeholder.com/400x300',
            content: '전 제품 최대 50% 할인 + 사은품 증정',
            period: '2024.03.01 - 2024.03.31'
        },
        {
            title: '신규 가입 특별 혜택',
            image: 'https://via.placeholder.com/400x300',
            content: '신규 회원 가입 시 3만원 할인 쿠폰 즉시 지급',
            period: '2024.03.01 - 2024.12.31'
        }
    ],
    '종료': [
        {
            title: 'SNS 팔로우 이벤트',
            image: 'https://via.placeholder.com/400x300',
            content: '인스타그램 팔로우 및 스토리 공유 이벤트',
            period: '2024.02.01 - 2024.02.28'
        },
        {
            title: '설날 맞이 럭키드로우',
            image: 'https://via.placeholder.com/400x300',
            content: '매일 선착순 100명 럭키박스 증정',
            period: '2024.01.15 - 2024.02.15'
        }
    ],
    '당첨자 발표': [
        {
            title: '2월 포토리뷰 이벤트 당첨자',
            date: '2024.03.05',
            winners: ['김*영', '이*수', '박*희', '최*민', '정*우']
        },
        {
            title: '설날 맞이 럭키드로우 당첨자',
            date: '2024.02.20',
            winners: ['강*진', '윤*서', '임*준', '한*아', '송*우']
        }
    ]
};

// 블로그 카테고리 필터링
function filterBlogPosts(category) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    const posts = category === '전체' ? Object.values(blogPosts).flat() : blogPosts[category] || [];
    
    blogGrid.innerHTML = posts.map(post => `
        <article class="blog-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
                <span class="category">${category}</span>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-eye"></i> ${post.views}</span>
                    <span><i class="far fa-heart"></i> ${post.likes}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// 이벤트 카테고리 필터링
function filterEvents(category) {
    const eventGrid = document.querySelector('.event-grid');
    if (!eventGrid) return;

    const filteredEvents = category === '전체' ? 
        [...events['진행중'], ...events['종료']] : 
        events[category] || [];

    if (category === '당첨자 발표') {
        eventGrid.innerHTML = filteredEvents.map(event => `
            <div class="winner-item">
                <span class="event-title">${event.title}</span>
                <span class="announcement-date">${event.date}</span>
                <div class="winners-list">
                    <p>당첨자: ${event.winners.join(', ')}</p>
                </div>
            </div>
        `).join('');
    } else {
        eventGrid.innerHTML = filteredEvents.map(event => `
            <article class="event-card">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-content">
                    <div class="event-badge">${category}</div>
                    <h3>${event.title}</h3>
                    <p>${event.content}</p>
                    <div class="event-meta">
                        <span class="period"><i class="far fa-calendar"></i> ${event.period}</span>
                        <button class="${category === '진행중' ? 'join-btn' : 'winner-btn'}">
                            ${category === '진행중' ? '참여하기' : '당첨자 확인'}
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }
}

// 페이지 로드 시 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', () => {
    // 블로그 카테고리 버튼 이벤트
    const blogCategoryButtons = document.querySelectorAll('.blog-categories .category-btn');
    blogCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            blogCategoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterBlogPosts(button.textContent);
        });
    });

    // 이벤트 카테고리 버튼 이벤트
    const eventCategoryButtons = document.querySelectorAll('.event-categories .category-btn');
    eventCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            eventCategoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterEvents(button.textContent);
        });
    });

    // 초기 필터링 실행
    filterBlogPosts('전체');
    filterEvents('전체');
});

// 뉴스레터 구독 처리
function handleNewsletterSubscription(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // 실제로는 서버에 구독 요청을 보내야 함
    alert('뉴스레터 구독이 완료되었습니다!');
    e.target.reset();
}

// 장바구니 클래스
class Cart {
    constructor() {
        this.items = [];
        this.loadFromLocalStorage();
        this.updateCartCount();
    }

    // 상품 추가
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.saveToLocalStorage();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    // 상품 제거
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    // 수량 변경
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveToLocalStorage();
            this.updateCartDisplay();
        }
    }

    // 장바구니 카운트 업데이트
    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    // 장바구니 표시 업데이트
    updateCartDisplay() {
        const cartList = document.getElementById('cartList');
        const emptyCart = document.getElementById('emptyCart');
        
        if (!cartList || !emptyCart) return;

        if (this.items.length === 0) {
            cartList.innerHTML = '';
            emptyCart.style.display = 'block';
            document.querySelector('.cart-content').style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        document.querySelector('.cart-content').style.display = 'flex';
        
        cartList.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <span class="cart-item-brand">${item.brand}</span>
                    <h3 class="cart-item-name">${item.name}</h3>
                    <div class="cart-item-price">
                        <span class="cart-item-current-price">${item.price.toLocaleString()}원</span>
                        ${item.originalPrice ? `
                            <span class="cart-item-original-price">${item.originalPrice.toLocaleString()}원</span>
                            <span class="cart-item-discount">${Math.round((1 - item.price/item.originalPrice) * 100)}%</span>
                        ` : ''}
                    </div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           onchange="cart.updateQuantity('${item.id}', this.value)">
                    <button class="quantity-btn plus" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        this.updateSummary();
    }

    // 주문 요약 업데이트
    updateSummary() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= 30000 ? 0 : 3000;
        const discount = this.items.reduce((sum, item) => {
            if (item.originalPrice) {
                return sum + ((item.originalPrice - item.price) * item.quantity);
            }
            return sum;
        }, 0);
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = subtotal.toLocaleString() + '원';
        document.getElementById('shipping').textContent = shipping.toLocaleString() + '원';
        document.getElementById('discount').textContent = discount.toLocaleString() + '원';
        document.getElementById('total').textContent = total.toLocaleString() + '원';
    }

    // 로컬 스토리지에 저장
    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    // 로컬 스토리지에서 불러오기
    loadFromLocalStorage() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }
    }
}

// 장바구니 초기화
const cart = new Cart();

// 페이지 로드 시 장바구니 표시 업데이트
document.addEventListener('DOMContentLoaded', () => {
    displayReviews();
    displayBlogPosts();
    cart.loadFromLocalStorage();

    // 뉴스레터 폼 이벤트 리스너
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubscription);
    }

    // 이벤트 페이지 카테고리 필터링
    initializeEventPage();

    // 제품 정렬 기능 초기화
    initializeProductSorting();

    // 장바구니 페이지인 경우 장바구니 표시 업데이트
    if (window.location.pathname.includes('cart.html')) {
        cart.updateCartDisplay();
    }

    // 장바구니 담기 버튼 이벤트 리스너
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                id: productCard.dataset.id || Math.random().toString(36).substr(2, 9),
                image: productCard.querySelector('img').src,
                brand: productCard.querySelector('.brand').textContent,
                name: productCard.querySelector('.product-title').textContent,
                price: parseInt(productCard.querySelector('.current-price').textContent.replace(/[^0-9]/g, '')),
                originalPrice: productCard.querySelector('.original-price') ? 
                    parseInt(productCard.querySelector('.original-price').textContent.replace(/[^0-9]/g, '')) : null
            };
            cart.addItem(product);
            alert('장바구니에 추가되었습니다.');
        });
    });

    // 스크롤 애니메이션 초기화
    initializeScrollAnimations();
});

// 이벤트 페이지 카테고리 필터링
function initializeEventPage() {
    const eventCategories = document.querySelectorAll('.event-categories .category-btn');
    const eventSections = {
        '전체': ['ongoing-events', 'ended-events', 'winner-announcements'],
        '진행중': ['ongoing-events'],
        '종료': ['ended-events'],
        '당첨자발표': ['winner-announcements']
    };

    function showEventSection(category) {
        // 모든 섹션 숨기기
        document.querySelectorAll('.event-section').forEach(section => {
            section.style.display = 'none';
        });

        // 선택된 카테고리에 해당하는 섹션 보여주기
        const sectionsToShow = eventSections[category];
        sectionsToShow.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'block';
            }
        });
    }

    // 카테고리 버튼 클릭 이벤트 처리
    eventCategories.forEach(button => {
        button.addEventListener('click', () => {
            // 활성화된 버튼 스타일 변경
            eventCategories.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 해당 카테고리의 이벤트 보여주기
            const category = button.dataset.category;
            showEventSection(category);
        });
    });

    // 페이지 로드 시 '전체' 카테고리 표시
    showEventSection('전체');
}

// 제품 정렬 기능
function initializeProductSorting() {
    const sortFilter = document.querySelector('.sort-filter');
    if (!sortFilter) return;

    sortFilter.addEventListener('change', (e) => {
        const products = document.querySelectorAll('.product-card');
        if (products.length === 0) return;
        
        const sortedProducts = sortProducts(Array.from(products), e.target.value);
        const container = document.querySelector('.product-grid');
        
        // 정렬된 제품들을 다시 배치
        container.innerHTML = '';
        sortedProducts.forEach(product => {
            container.appendChild(product);
        });
        
        // 정렬 후 장바구니 버튼 이벤트 리스너 재설정
        addCartEventListeners();
    });
}

function sortProducts(products, sortType) {
    return products.sort((a, b) => {
        switch(sortType) {
            case 'low': {
                const priceA = getPriceValue(a);
                const priceB = getPriceValue(b);
                return priceA - priceB;
            }
            case 'high': {
                const priceA = getPriceValue(a);
                const priceB = getPriceValue(b);
                return priceB - priceA;
            }
            case 'discount': {
                const discountA = getDiscountValue(a);
                const discountB = getDiscountValue(b);
                return discountB - discountA;
            }
            default:
                return 0;
        }
    });
}

function getPriceValue(productCard) {
    // 현재 판매가 추출
    const currentPriceEl = productCard.querySelector('.current-price, .price');
    if (!currentPriceEl) return Infinity;
    
    const priceText = currentPriceEl.textContent;
    return parseInt(priceText.replace(/[^0-9]/g, '')) || Infinity;
}

function getDiscountValue(productCard) {
    // 할인율 추출
    const discountEl = productCard.querySelector('.discount');
    if (!discountEl) return 0;
    
    const discountText = discountEl.textContent;
    return parseInt(discountText.replace(/[^0-9]/g, '')) || 0;
}

// 장바구니 버튼 이벤트 리스너 추가 함수
function addCartEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.removeEventListener('click', handleAddToCart);
        button.addEventListener('click', handleAddToCart);
    });
}

function handleAddToCart(e) {
    const productCard = e.target.closest('.product-card');
    if (!productCard) return;

    const product = {
        id: productCard.dataset.id || Math.random().toString(36).substr(2, 9),
        image: productCard.querySelector('img').src,
        brand: productCard.querySelector('.brand').textContent,
        name: productCard.querySelector('h3').textContent,
        price: extractPrice(productCard.querySelector('.current-price').textContent),
        originalPrice: productCard.querySelector('.original-price') ? 
            extractPrice(productCard.querySelector('.original-price').textContent) : null,
        discount: productCard.querySelector('.discount') ? 
            parseInt(productCard.querySelector('.discount').textContent) : 0
    };

    cart.addItem(product);
    updateCartUI();
    alert('장바구니에 추가되었습니다.');
}

function extractPrice(priceText) {
    return parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// 스크롤 애니메이션 초기화
function initializeScrollAnimations() {
    // 애니메이션 요소에 클래스 추가
    addAnimationClasses();
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
    });

    // 초기 로드 시 화면에 보이는 요소들 애니메이션 실행
    handleScrollAnimations();
}

// 페이지별 애니메이션 클래스 추가
function addAnimationClasses() {
    // 제품 카드 애니메이션
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.classList.add(`delay-${(index % 5) * 100}`);
    });

    // 블로그 카드 애니메이션
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.classList.add(`delay-${(index % 5) * 100}`);
    });

    // 이벤트 카드 애니메이션
    document.querySelectorAll('.event-card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.classList.add(`delay-${(index % 5) * 100}`);
    });

    // 장바구니 아이템 애니메이션
    document.querySelectorAll('.cart-item').forEach((item, index) => {
        item.classList.add('slide-in-right');
        item.classList.add(`delay-${(index % 5) * 100}`);
    });

    // 섹션 헤더 애니메이션
    document.querySelectorAll('section > h1, .section-header').forEach(header => {
        header.classList.add('fade-up');
    });

    // 메인 배너 애니메이션
    document.querySelectorAll('.main-event, .featured-post').forEach(banner => {
        banner.classList.add('fade-in');
    });

    // 카테고리 필터 애니메이션
    document.querySelectorAll('.category-filters, .blog-categories, .event-categories').forEach(filter => {
        filter.classList.add('slide-in-left');
    });

    // 장바구니 요약 애니메이션
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) {
        cartSummary.classList.add('scale-up');
    }
}

// 스크롤 애니메이션 처리
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // 요소가 화면에 보이는지 확인
        if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// 모달 관련 기능
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const closeBtns = document.querySelectorAll('.close');
    
    // 모달 열기
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // 모달 닫기
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === loginModal || e.target === signupModal) {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 전체 동의 체크박스 기능
    const agreeAllCheckbox = document.getElementById('agreeAll');
    const agreementGroup = document.querySelector('.agreement-group');
    const agreementCheckboxes = agreementGroup.querySelectorAll('input[type="checkbox"]:not(#agreeAll)');
    
    agreeAllCheckbox.addEventListener('change', () => {
        agreementCheckboxes.forEach(checkbox => {
            checkbox.checked = agreeAllCheckbox.checked;
        });
    });
    
    agreementCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(agreementCheckboxes).every(cb => cb.checked);
            agreeAllCheckbox.checked = allChecked;
        });
    });
    
    // 로그인 폼 제출
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // 여기에 로그인 처리 로직 추가
        console.log('로그인 시도:', { email, password, rememberMe });
    });
    
    // 회원가입 폼 제출
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const username = document.getElementById('username').value;
        const phone = document.getElementById('phone').value;
        
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        
        // 여기에 회원가입 처리 로직 추가
        console.log('회원가입 시도:', { email, password, username, phone });
    });
}); 