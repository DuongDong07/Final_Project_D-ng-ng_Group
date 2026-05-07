/**
 * HỆ THỐNG QUẢN LÝ ĐĂNG KÝ SỰ KIỆN NÂNG CAO
 */

document.addEventListener('DOMContentLoaded', () => {
    // === TRƯỜNG HỢP 1: FORM ĐĂNG KÝ Ở SIDEBAR (TRANG CHI TIẾT) ===
    const registrationForm = document.querySelector('.sidebar-form');
    if (registrationForm) {
        const nameInput = registrationForm.querySelector('input[type="text"]');
        const emailInput = registrationForm.querySelector('input[type="email"]');

        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Lấy thông tin từ trang Detail
            const eventTitle = document.querySelector('.detail-hero h1')?.innerText || "Sự kiện không tên";
            
            // QUAN TRỌNG: Lấy ngày sự kiện từ trang detail (Bạn hãy kiểm tra class chứa ngày ở trang detail nhé)
            // Giả sử ngày nằm trong thẻ có class .event-date-text
            const eventDateRaw = document.querySelector('.event-date-text')?.innerText || "25/05/2026"; 
            const cleanDate = eventDateRaw.replace(/[^\d/]/g, ''); // Chỉ giữ lại số và dấu /

            if (nameInput.value.trim().length >= 3 && emailInput.value.includes('@')) {
                saveToLocalStorage({
                    eventName: eventTitle,
                    regDate: cleanDate // Lưu ngày diễn ra sự kiện
                });
                alert("Đăng ký thành công! Hãy kiểm tra trong Lịch của bạn.");
                registrationForm.reset();
            }
        });
    }

    // === TRƯỜNG HỢP 2: NÚT ĐĂNG KÝ NHANH (TRANG DANH SÁCH) ===
    const fastRegButtons = document.querySelectorAll('.btn-register-fast');
    fastRegButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.event-card');
            const title = card.querySelector('h3').innerText;
            
            // Bóc tách ngày từ dòng: 📅 25/05/2026 | 📍 Hà Nội
            const infoText = card.querySelector('.event-info').innerText;
            const dateOnly = infoText.split('|')[0].replace(/[^\d/]/g, '').trim();

            saveToLocalStorage({
                eventName: title,
                regDate: dateOnly
            });

            // Hiệu ứng phản hồi
            this.innerText = "Đã đăng ký ✓";
            this.style.backgroundColor = "#10b981";
            alert(`Đã thêm "${title}" vào lịch trình của bạn!`);
        });
    });
});

/**
 * Hàm lưu trữ dùng chung
 */
function saveToLocalStorage(data) {
    let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
    
    // Kiểm tra trùng lặp trước khi lưu
    const isExisted = myEvents.some(e => e.eventName === data.eventName && e.regDate === data.regDate);
    
    if (!isExisted) {
        myEvents.push(data);
        localStorage.setItem('myEvents', JSON.stringify(myEvents));
    }
}
