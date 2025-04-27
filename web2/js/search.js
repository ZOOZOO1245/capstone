// 모든 제품 데이터를 하나의 배열로 통합
const allProducts = {
    cream: [
        {
            id: 'cream1',
            name: '수분 크림',
            price: 38000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '풍부한 수분 공급, 건성 피부용 크림',
            category: '크림'
        },
        {
            id: 'cream2',
            name: '영양 크림',
            price: 45000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '영양가득 고보습 크림',
            category: '크림'
        },
        {
            id: 'cream3',
            name: '진정 크림',
            price: 32000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?w=500',
            description: '민감성 피부를 위한 진정 케어',
            category: '크림'
        },
        {
            id: 'cream4',
            name: '미백 크림',
            price: 52000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?w=500',
            description: '미백 기능성 화장품',
            category: '크림'
        },
        {
            id: 'cream5',
            name: '안티에이징 크림',
            price: 68000,
            discount: 5,
            image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=500',
            description: '주름 개선 기능성 크림',
            category: '크림'
        }
    ],
    toner: [
        {
            id: 'toner1',
            name: '수분 토너',
            price: 28000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            description: '촉촉한 수분 공급 토너',
            category: '토너'
        },
        {
            id: 'toner2',
            name: '진정 토너',
            price: 32000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7d651?w=500',
            description: '민감 피부 진정 토너',
            category: '토너'
        },
        {
            id: 'toner3',
            name: '약산성 토너',
            price: 25000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '피부 밸런스 케어 토너',
            category: '토너'
        }
    ],
    serum: [
        {
            id: 'serum1',
            name: '비타민C 세럼',
            price: 45000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '미백 기능성 비타민 세럼',
            category: '세럼'
        },
        {
            id: 'serum2',
            name: '히알루론산 세럼',
            price: 52000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '수분 충전 세럼',
            category: '세럼'
        },
        {
            id: 'serum3',
            name: '펩타이드 세럼',
            price: 58000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            description: '탄력 개선 세럼',
            category: '세럼'
        }
    ],
    lotion: [
        {
            id: 'lotion1',
            name: '보습 로션',
            price: 32000,
            discount: 5,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500',
            description: '건성 피부를 위한 보습 로션',
            category: '로션'
        },
        {
            id: 'lotion2',
            name: '진정 로션',
            price: 35000,
            discount: 15,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
            description: '민감 피부 진정 로션',
            category: '로션'
        },
        {
            id: 'lotion3',
            name: '수분 로션',
            price: 28000,
            discount: 0,
            image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500',
            description: '수분 보습 로션',
            category: '로션'
        }
    ]
};

// 검색 함수 개선
function searchProducts(query) {
    const results = [];
    const searchTerms = query.toLowerCase().split(' ');
    
    // 모든 카테고리의 제품을 검색
    Object.keys(allProducts).forEach(category => {
        const categoryResults = allProducts[category].filter(product => {
            // 검색어의 각 단어에 대해 검사
            return searchTerms.some(term => 
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term)
            );
        });
        results.push(...categoryResults);
    });

    return results;
}

// 검색 결과 표시 함수
function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    const searchSummary = document.getElementById('searchSummary');
    
    // 검색 요약 정보 표시
    searchSummary.textContent = `'${query}' 검색 결과 ${results.length}건`;

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <p>검색 결과가 없습니다.</p>
                <p>다른 검색어를 입력해 주세요.</p>
            </div>
        `;
        return;
    }

    // 검색 결과 표시
    searchResults.innerHTML = results.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${product.discount > 0 
                        ? `<span class="original-price">${product.price.toLocaleString()}원</span>
                           <span class="current-price">${(product.price * (100 - product.discount) / 100).toLocaleString()}원</span>
                           <span class="discount-tag">${product.discount}% OFF</span>`
                        : `<span class="current-price">${product.price.toLocaleString()}원</span>`
                    }
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">장바구니 담기</button>
            </div>
        </div>
    `).join('');
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        const results = searchProducts(query);
        displaySearchResults(results, query);
    }
}); 