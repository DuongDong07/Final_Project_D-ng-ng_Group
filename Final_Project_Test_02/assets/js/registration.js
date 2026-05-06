/**
 * HỆ THỐNG QUẢN LÝ ĐĂNG KÝ SỰ KIỆN
 * Chức năng: Validation form & Lưu trữ LocalStorage
 */

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.sidebar-form');
    
    if (!registrationForm) return;

    // 1. Lấy các trường dữ liệu
    const nameInput = registrationForm.querySelector('input[type="text"]');
    const emailInput = registrationForm.querySelector('input[type="email"]');
    const submitBtn = registrationForm.querySelector('button');

    // 2. Hàm hiển thị lỗi chuyên nghiệp
    const showError = (input, message) => {
        const parent = input.parentElement;
        let errorSpan = parent.querySelector('.error-msg');
        
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-msg';
            errorSpan.style.color = '#ef4444';
            errorSpan.style.fontSize = '0.8rem';
            errorSpan.style.marginTop = '5px';
            parent.appendChild(errorSpan);
        }
        errorSpan.innerText = message;
        input.style.borderColor = '#ef4444';
    };

    const clearError = (input) => {
        const parent = input.parentElement;
        const errorSpan = parent.querySelector('.error-msg');
        if (errorSpan) errorSpan.remove();
        input.style.borderColor = '#ddd';
    };

    // 3. Logic Validation thời gian thực
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length < 3) {
            showError(nameInput, "Họ tên phải có ít nhất 3 ký tự.");
        } else {
            clearError(nameInput);
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, "Vui lòng nhập đúng định dạng Email.");
        } else {
            clearError(emailInput);
        }
    });

    // 4. Xử lý khi nhấn nút Đăng ký
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn trang web tải lại

        // Kiểm tra lại lần cuối trước khi gửi
        const isNameValid = nameInput.value.trim().length >= 3;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(emailInput.value.trim());

        if (isNameValid && isEmailValid) {
            // Lấy thông tin sự kiện từ tiêu đề trang (Demo)
            const eventTitle = document.querySelector('.detail-hero h1').innerText;
            
            const registrationData = {
                userName: nameInput.value.trim(),
                userEmail: emailInput.value.trim(),
                eventName: eventTitle,
                regDate: new Date().toLocaleDateString('vi-VN')
            };

            // GỌI HÀM LƯU TRỮ
            saveToLocalStorage(registrationData);

            alert("Chúc mừng! Bạn đã đăng ký thành công.");
            registrationForm.reset();
        } else {
            alert("Vui lòng kiểm tra lại thông tin đăng ký.");
        }
    });
});

/**
 * Hàm lưu trữ dữ liệu vào LocalStorage
 * Giúp trang Dashboard có thể đọc được dữ liệu này
 */
function saveToLocalStorage(data) {
    let registrations = JSON.parse(localStorage.getItem('myEvents')) || [];
    registrations.push(data);
    localStorage.setItem('myEvents', JSON.stringify(registrations));
}