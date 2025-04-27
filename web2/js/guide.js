// 가이드 모달 관련 스크립트
const modal = document.getElementById('guideModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementsByClassName('close')[0];

const guideContents = {
    terms: {
        title: '이용약관',
        content: `
            <h2>이용약관</h2>
            <section>
                <h3>제1조 (목적)</h3>
                <p>본 약관은 K-Beauty Shop(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회원과 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.</p>
            </section>
            <section>
                <h3>제2조 (회원가입)</h3>
                <ul>
                    <li>회원가입은 무료이며, 이용자가 본 약관에 동의하고 회원정보를 입력하면 완료됩니다.</li>
                    <li>가입 시 본인의 실명과 실제 정보를 입력해야 합니다.</li>
                    <li>회원은 가입 시 제공한 개인정보가 변경될 경우 즉시 수정해야 합니다.</li>
                </ul>
            </section>
            <section>
                <h3>제3조 (회원혜택)</h3>
                <ul>
                    <li>신규 가입 시 15% 할인 쿠폰 지급</li>
                    <li>구매금액의 2% 포인트 적립</li>
                    <li>회원 전용 특가 상품 구매 가능</li>
                    <li>무료 배송 서비스 (5만원 이상 구매 시)</li>
                </ul>
            </section>
            <section>
                <h3>제4조 (의무사항)</h3>
                <p>회원은 다음 사항을 준수해야 합니다:</p>
                <ul>
                    <li>타인의 정보 도용 금지</li>
                    <li>회사의 저작권 준수</li>
                    <li>서비스 이용 목적에 맞는 사용</li>
                    <li>불법적이거나 부당한 행위 금지</li>
                </ul>
            </section>
        `
    },
    privacy: {
        title: '개인정보처리방침',
        content: `
            <h2>개인정보처리방침</h2>
            <section>
                <h3>1. 개인정보 수집 항목</h3>
                <h4>필수항목</h4>
                <ul>
                    <li>이름: 본인 확인 및 회원제 서비스 제공</li>
                    <li>아이디/비밀번호: 회원제 서비스 이용</li>
                    <li>이메일: 주문 확인 및 공지사항 전달</li>
                    <li>휴대폰 번호: 주문/배송 관련 연락</li>
                    <li>주소: 상품 배송</li>
                </ul>
            </section>
            <section>
                <h3>2. 개인정보의 보유기간</h3>
                <p>회원 탈퇴 시까지 보관하며, 다음의 정보는 법령에 따라 일정기간 보관됩니다:</p>
                <ul>
                    <li>계약/청약철회 기록: 5년</li>
                    <li>대금결제 및 재화 공급 기록: 5년</li>
                    <li>소비자 불만/분쟁처리 기록: 3년</li>
                </ul>
            </section>
        `
    },
    shipping: {
        title: '배송안내',
        content: `
            <h2>배송안내</h2>
            <section>
                <h3>배송 기본 정보</h3>
                <ul>
                    <li>배송비: 3,000원</li>
                    <li>무료배송: 5만원 이상 구매 시</li>
                    <li>배송업체: CJ대한통운</li>
                    <li>평균 배송기간: 1-3일 (주말/공휴일 제외)</li>
                </ul>
            </section>
            <section>
                <h3>배송 시간 안내</h3>
                <ul>
                    <li>오전 12시 이전 주문/결제 완료 → 당일 출고</li>
                    <li>오전 12시 이후 주문/결제 완료 → 익일 출고</li>
                    <li>출고 후 1-2일 이내 수령 (지역별 상이)</li>
                </ul>
            </section>
        `
    },
    returns: {
        title: '반품/교환안내',
        content: `
            <h2>반품/교환안내</h2>
            <section>
                <h3>반품/교환 신청 기간</h3>
                <ul>
                    <li>단순변심: 상품 수령 후 7일 이내</li>
                    <li>상품하자: 상품 수령 후 3개월 이내</li>
                </ul>
            </section>
            <section>
                <h3>반품/교환 배송비</h3>
                <table class="guide-table">
                    <tr>
                        <th>구분</th>
                        <th>반품/교환 배송비</th>
                    </tr>
                    <tr>
                        <td>단순변심</td>
                        <td>왕복 6,000원</td>
                    </tr>
                    <tr>
                        <td>상품하자</td>
                        <td>무료</td>
                    </tr>
                </table>
            </section>
        `
    }
};

function showGuideModal(type) {
    const guide = guideContents[type];
    if (guide) {
        modalContent.innerHTML = guide.content;
        modal.style.display = 'block';
    }
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 