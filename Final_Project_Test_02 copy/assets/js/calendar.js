document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthDisplay = document.getElementById('monthDisplay');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    // Khởi tạo ngày hiện tại (Tháng 5/2026)
    let currentDate = new Date(2026, 4, 1); 

    const renderCalendar = () => {
        if (!calendarGrid) return;
        
        calendarGrid.innerHTML = ''; 
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // 1. Hiển thị tiêu đề Tháng/Năm
        monthDisplay.innerText = `Tháng ${String(month + 1).padStart(2, '0')}, ${year}`;

        // 2. Thêm hàng tiêu đề Thứ
        const dayNames = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
        dayNames.forEach(name => {
            const div = document.createElement('div');
            div.className = 'day-name';
            div.innerText = name;
            calendarGrid.appendChild(div);
        });

        // 3. Tính toán ngày bắt đầu và số ngày
        const firstDayOfMonth = new Date(year, month, 1).getDay(); 
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const offset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

        // 4. Lấy dữ liệu từ localStorage
        let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

        // 5. Tạo các ô trống tháng trước
        for (let i = 0; i < offset; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'day empty';
            calendarGrid.appendChild(emptyDiv);
        }

        // 6. Tạo các ô ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            
            const span = document.createElement('span');
            span.innerText = day;
            dayDiv.appendChild(span);

            const dateString = `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
            const eventsToday = myEvents.filter(e => e.regDate === dateString);

            if (eventsToday.length > 0) {
                dayDiv.classList.add('has-event');
                
                // HIỂN THỊ TÊN SỰ KIỆN LÊN Ô LỊCH
                eventsToday.forEach(ev => {
                    const eventTag = document.createElement('div');
                    eventTag.className = 'event-name-tag';
                    eventTag.innerText = ev.eventName;
                    dayDiv.appendChild(eventTag);
                });
                
                dayDiv.title = eventsToday.map(e => e.eventName).join(", ");
            }

            calendarGrid.appendChild(dayDiv);
        }
    };

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});