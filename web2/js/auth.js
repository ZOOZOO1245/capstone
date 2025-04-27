// 로그인 폼 처리
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // 여기에 실제 로그인 API 호출 로직이 들어갈 수 있습니다
            const response = await mockLoginAPI(email, password);
            if (response.success) {
                localStorage.setItem('user', JSON.stringify(response.user));
                window.location.href = 'index.html';
            }
        } catch (error) {
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    });
}

// 회원가입 폼 처리
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            // 여기에 실제 회원가입 API 호출 로직이 들어갈 수 있습니다
            const response = await mockSignupAPI({ name, email, password });
            if (response.success) {
                alert('회원가입이 완료되었습니다. 로그인해주세요.');
                window.location.href = 'login.html';
            }
        } catch (error) {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    });
}

// Mock API 함수들 (실제 백엔드 연동 시 대체될 부분)
const mockLoginAPI = async (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                user: { email, name: '테스트 사용자' }
            });
        }, 500);
    });
}

// 이메일 도메인 변경
async function mockSignupAPI(userData) {
    // support@kbeauty.com을 support@perscent.com으로 변경
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
} 