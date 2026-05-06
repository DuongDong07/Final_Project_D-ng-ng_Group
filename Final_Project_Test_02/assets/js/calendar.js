document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthDisplay = document.getElementById('monthDisplay');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    // Khởi tạo ngày hiện tại (Tháng 5/2026 theo mốc thời gian của bạn)
    let currentDate = new Date(2026, 4, 1); // Lưu ý: Tháng trong JS bắt đầu từ 0 (Tháng 5 là index 4)

    const renderCalendar = () => {
        calendarGrid.innerHTML = ''; // Xóa trắng lịch cũ
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // 1. Hiển thị tiêu đề Tháng/Năm
        monthDisplay.innerText = `Tháng ${String(month + 1).padStart(2, '0')}, ${year}`;

        // 2. Thêm hàng tiêu đề Thứ
        const dayNames = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
        dayNames.forEach(name => {
            const div = document.createElement('div');
            div.className = 'day-name';
            div.innerText = name;
            calendarGrid.appendChild(div);
        });

        // 3. Tính toán ngày bắt đầu và số ngày trong tháng
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 (CN) -> 6 (T7)
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Điều chỉnh để Thứ 2 là ngày đầu tuần trong Grid
        // JS: 0=CN, 1=T2... -> Grid của ta: T2 là cột 1
        const offset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

        // 4. Lấy dữ liệu sự kiện đã đăng ký từ localStorage
        const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

        // 5. Tạo các ô trống (ngày của tháng trước)
        for (let i = 0; i < offset; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'day empty';
            calendarGrid.appendChild(emptyDiv);
        }

        // 6. Tạo các ô ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerText = day;

            // Kiểm tra xem ngày này có sự kiện không
            const dateString = `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
            const eventsToday = myEvents.filter(e => e.regDate === dateString);

            if (eventsToday.length > 0) {
                dayDiv.classList.add('has-event');
                eventsToday.forEach(ev => {
                    const brief = document.createElement('div');
                    brief.className = 'event-brief';
                    brief.innerText = ev.eventName;
                    dayDiv.appendChild(brief);
                });
            }

            calendarGrid.appendChild(dayDiv);
        }
    };

    // Nút chuyển tháng
    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar(); // Chạy lần đầu
});