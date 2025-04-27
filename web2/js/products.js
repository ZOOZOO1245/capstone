// 제품 데이터
const products = {
    cream: [
        {
            id: 'cream1',
            name: '수분 크림',
            price: 38000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '풍부한 수분 공급, 건성 피부용 크림',
            category: '크림',
            isNew: true,
            details: {
                description: `
                    건성 피부를 위한 집중 수분 공급 크림입니다. 
                    72시간 지속되는 수분 보습막이 피부를 촉촉하게 감싸줍니다.
                    가볍고 산뜻한 제형으로 끈적임 없이 흡수됩니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '건성, 중성',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'cream2',
            name: '영양 크림',
            price: 45000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '영양가득 고보습 크림',
            category: '크림',
            isNew: false,
            details: {
                description: `
                    영양가득 고보습 크림입니다. 
                    피부를 촉촉하게 감싸주며, 영양을 공급해줍니다.
                    가볍고 산뜻한 제형으로 끈적임 없이 흡수됩니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'cream3',
            name: '진정 크림',
            price: 32000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?w=500',
            description: '민감성 피부를 위한 진정 케어',
            category: '크림',
            isNew: false,
            details: {
                description: `
                    민감성 피부를 위한 진정 케어 크림입니다. 
                    민감한 피부를 진정시켜주며, 피부를 보호해줍니다.
                    가볍고 산뜻한 제형으로 끈적임 없이 흡수됩니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'cream4',
            name: '미백 크림',
            price: 52000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?w=500',
            description: '미백 기능성 화장품',
            category: '크림',
            isNew: true,
            details: {
                description: `
                    미백 기능성 화장품입니다. 
                    피부를 건강하게 유지시켜주며, 미백 효과를 제공합니다.
                    가볍고 산뜻한 제형으로 끈적임 없이 흡수됩니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'cream5',
            name: '안티에이징 크림',
            price: 68000,
            discount: 5,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '주름 개선 기능성 크림',
            category: '크림',
            isNew: false,
            details: {
                description: `
                    주름 개선 기능성 크림입니다. 
                    주름을 개선하고 피부를 촉촉하게 감싸줍니다.
                    가볍고 산뜻한 제형으로 끈적임 없이 흡수됩니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        }
    ],
    toner: [
        {
            id: 'toner1',
            name: '진정 토너',
            price: 25000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbf2b6?w=500',
            description: '민감한 피부를 위한 진정 토너',
            category: '토너'
        },
        {
            id: 'toner2',
            name: '수분 토너',
            price: 28000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            details: {
                description: `
                    피부 속 깊은 곳까지 수분을 전달하는 고보습 토너입니다.
                    피부 진정 효과가 있는 캐모마일 추출물이 함유되어 있습니다.
                `,
                volume: '150ml',
                howToUse: '세안 후 화장솜에 적당량을 덜어 피부결을 따라 부드럽게 닦아내듯 발라줍니다.',
                ingredients: [
                    '캐모마일 추출물: 진정 효과',
                    '히알루론산: 수분 공급',
                    '알로에베라잎 추출물: 진정, 보습',
                    '판테놀: 진정 효과'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 30개월'
            }
        },
        {
            id: 'toner3',
            name: '약산성 토너',
            price: 25000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '피부 밸런스 케어 토너',
            category: '토너',
            isNew: true,
            details: {
                description: `
                    피부 밸런스를 유지시켜주는 토너입니다.
                    피부 밸런스 케어 효과가 있는 캐모마일 추출물이 함유되어 있습니다.
                `,
                volume: '150ml',
                howToUse: '세안 후 화장솜에 적당량을 덜어 피부결을 따라 부드럽게 닦아내듯 발라줍니다.',
                ingredients: [
                    '캐모마일 추출물: 진정 효과',
                    '히알루론산: 수분 공급',
                    '알로에베라잎 추출물: 진정, 보습',
                    '판테놀: 진정 효과'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 30개월'
            }
        },
        {
            id: 'toner4',
            name: '미백 토너',
            price: 35000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '미백 기능성 토너',
            category: '토너',
            isNew: false,
            details: {
                description: `
                    미백 기능성 토너입니다. 
                    피부를 건강하게 유지시켜주며, 미백 효과를 제공합니다.
                `,
                volume: '150ml',
                howToUse: '세안 후 화장솜에 적당량을 덜어 피부결을 따라 부드럽게 닦아내듯 발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 30개월'
            }
        },
        {
            id: 'toner5',
            name: '보습 토너',
            price: 30000,
            discount: 5,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '보습 강화 토너',
            category: '토너',
            isNew: true,
            details: {
                description: `
                    보습 강화 토너입니다. 
                    피부를 촉촉하게 감싸주며, 보습 강화 효과를 제공합니다.
                `,
                volume: '150ml',
                howToUse: '세안 후 화장솜에 적당량을 덜어 피부결을 따라 부드럽게 닦아내듯 발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 30개월'
            }
        }
    ],
    serum: [
        {
            id: 'serum1',
            name: '비타민 세럼',
            price: 45000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '비타민이 풍부한 미백 세럼',
            category: '세럼'
        },
        {
            id: 'serum2',
            name: '히알루론산 세럼',
            price: 52000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '수분 충전 세럼',
            category: '세럼',
            isNew: false,
            details: {
                description: `
                    수분 충전 세럼입니다. 
                    피부를 촉촉하게 감싸주며, 수분을 충전해줍니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'serum3',
            name: '펩타이드 세럼',
            price: 58000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            description: '탄력 개선 세럼',
            category: '세럼',
            isNew: true,
            details: {
                description: `
                    탄력 개선 세럼입니다. 
                    피부를 탄력 있게 유지시켜주며, 탄력 개선 효과를 제공합니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'serum4',
            name: '나이아신아마이드 세럼',
            price: 48000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?w=500',
            description: '모공 케어 세럼',
            category: '세럼',
            isNew: false,
            details: {
                description: `
                    모공 케어 세럼입니다. 
                    모공을 케어해주며, 모공 케어 효과를 제공합니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '나이아신아마이드: 모공 케어',
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'serum5',
            name: '콜라겐 세럼',
            price: 55000,
            discount: 25,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '탄력 강화 세럼',
            category: '세럼',
            isNew: true,
            details: {
                description: `
                    탄력 강화 세럼입니다. 
                    피부를 탄력 있게 유지시켜주며, 탄력 강화 효과를 제공합니다.
                `,
                volume: '50ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '콜라겐: 탄력 강화',
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        }
    ],
    lotion: [
        {
            id: 'lotion1',
            name: '보습 로션',
            price: 32000,
            discount: 5,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '깊은 보습을 위한 로션',
            category: '로션'
        },
        {
            id: 'lotion2',
            name: '진정 로션',
            price: 35000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '민감 피부 진정 로션',
            category: '로션',
            isNew: true,
            details: {
                description: `
                    민감한 피부를 진정시켜주는 로션입니다. 
                    피부를 진정시켜주며, 민감 케어 효과를 제공합니다.
                `,
                volume: '100ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'lotion3',
            name: '수분 로션',
            price: 28000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            description: '수분 보습 로션',
            category: '로션',
            isNew: false,
            details: {
                description: `
                    수분 보습 로션입니다. 
                    피부를 촉촉하게 감싸주며, 수분을 보습해줍니다.
                `,
                volume: '100ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'lotion4',
            name: '미백 로션',
            price: 42000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?w=500',
            description: '미백 기능성 로션',
            category: '로션',
            isNew: true,
            details: {
                description: `
                    미백 기능성 로션입니다. 
                    피부를 건강하게 유지시켜주며, 미백 효과를 제공합니다.
                `,
                volume: '100ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        },
        {
            id: 'lotion5',
            name: '영양 로션',
            price: 38000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '영양 공급 로션',
            category: '로션',
            isNew: false,
            details: {
                description: `
                    영양 공급 로션입니다. 
                    피부를 영양 공급해주며, 영양 공급 효과를 제공합니다.
                `,
                volume: '100ml',
                howToUse: '세안 후 스킨케어 마지막 단계에서 적당량을 덜어 피부결을 따라 부드럽게 펴발라줍니다.',
                ingredients: [
                    '히알루론산: 수분 공급 및 보습',
                    '세라마이드: 피부 장벽 강화',
                    '판테놀: 진정 효과',
                    '글리세린: 보습',
                    '스쿠알란: 피부 보호'
                ],
                skinType: '모든 피부용',
                madeIn: '대한민국',
                expiry: '제조일로부터 24개월'
            }
        }
    ]
};

// 현재 페이지의 카테고리 확인
function getCurrentCategory() {
    const path = window.location.pathname;
    // URL에서 카테고리 추출 (예: /products/cream.html -> cream)
    const category = path.split('/').pop().replace('.html', '');
    return category;
}

// 모든 제품 가져오기 함수 추가
function getAllProducts() {
    return Object.values(products).flat();
}

// 제품 정렬 함수
function sortProducts(productList, sortType) {
    const sorted = [...productList];
    switch(sortType) {
        case 'price-low':
            return sorted.sort((a, b) => {
                const priceA = a.price * (100 - (a.discount || 0)) / 100;
                const priceB = b.price * (100 - (b.discount || 0)) / 100;
                return priceA - priceB;
            });
        case 'price-high':
            return sorted.sort((a, b) => {
                const priceA = a.price * (100 - (a.discount || 0)) / 100;
                const priceB = b.price * (100 - (b.discount || 0)) / 100;
                return priceB - priceA;
            });
        case 'discount':
            return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        default:
            return sorted;
    }
}

// 제품 표시 함수
function displayProducts(productList) {
    const productGrid = document.getElementById('productsGrid') || document.getElementById('productGrid');
    if (!productGrid) return;

    productGrid.innerHTML = productList.map(product => {
        const discountedPrice = product.discount > 0 
            ? Math.round(product.price * (100 - product.discount) / 100) 
            : product.price;

        return `
            <div class="product-card">
                ${product.isNew ? '<span class="new-badge">NEW</span>' : ''}
                <div class="eco-badge">
                    <i class="fas fa-leaf"></i>
                    친환경 포장
                </div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description || ''}</p>
                    <div class="product-price">
                        ${product.discount > 0 
                            ? `<span class="original-price">${product.price.toLocaleString()}원</span>
                               <span class="current-price">${discountedPrice.toLocaleString()}원</span>
                               <span class="discount-tag">${product.discount}% OFF</span>`
                            : `<span class="current-price">${product.price.toLocaleString()}원</span>`
                        }
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">장바구니 담기</button>
                </div>
            </div>
        `;
    }).join('');
}

// 장바구니 관련 함수 추가
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            discount: product.discount,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    alert('장바구니에 추가되었습니다.');
}

// 장바구니 아이콘 업데이트
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    
    // 현재 페이지가 products.html인 경우
    if (window.location.pathname.includes('products.html')) {
        const allProducts = Object.values(products).flat();
        displayProducts(allProducts);

        // 정렬 버튼 이벤트
        const sortButtons = document.querySelectorAll('.sort-btn');
        sortButtons.forEach(button => {
            button.addEventListener('click', () => {
                sortButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const sortType = button.dataset.sort;
                const sortedProducts = sortProducts(allProducts, sortType);
                displayProducts(sortedProducts);
            });
        });
    }
    
    // 카테고리 페이지인 경우
    const currentCategory = getCurrentCategory();
    if (currentCategory && products[currentCategory]) {
        const categoryProducts = products[currentCategory];
        displayProducts(categoryProducts);

        // 정렬 버튼 이벤트
        const sortButtons = document.querySelectorAll('.sort-btn');
        sortButtons.forEach(button => {
            button.addEventListener('click', () => {
                sortButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const sortType = button.dataset.sort;
                const sortedProducts = sortProducts(categoryProducts, sortType);
                displayProducts(sortedProducts);
            });
        });
    }
}); 