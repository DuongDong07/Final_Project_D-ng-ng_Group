/**
 * HỆ THỐNG HIỂN THỊ DỮ LIỆU DASHBOARD
 */

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('eventTableBody');
    
    // 1. Hàm hiển thị danh sách sự kiện
    const renderEvents = () => {
        // Lấy dữ liệu từ LocalStorage
        const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

        // Nếu chưa có sự kiện nào
        if (myEvents.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; padding: 30px; color: #94a3b8;">
                        Bạn chưa đăng ký sự kiện nào. <a href="events.html">Khám phá ngay!</a>
                    </td>
                </tr>
            `;
            return;
        }

        // Tạo chuỗi HTML từ mảng dữ liệu
        tableBody.innerHTML = myEvents.map((event, index) => `
            <tr>
                <td><strong>${event.eventName}</strong></td>
                <td>${event.regDate}</td>
                <td><span class="status-badge success">Đã xác nhận</span></td>
                <td>
                    <button class="action-link danger" onclick="deleteEvent(${index})" 
                            style="background:none; border:none; cursor:pointer; font-family:inherit;">
                        Hủy vé
                    </button>
                </td>
            </tr>
        `).join('');
    };

    // 2. Hàm xóa sự kiện (Hủy vé)
    window.deleteEvent = (index) => {
        if (confirm("Bạn có chắc chắn muốn hủy đăng ký sự kiện này không?")) {
            let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
            
            // Xóa phần tử tại vị trí index
            myEvents.splice(index, 1);
            
            // Lưu lại vào LocalStorage
            localStorage.setItem('myEvents', JSON.stringify(myEvents));
            
            // Cập nhật lại giao diện ngay lập tức
            renderEvents();
            
            // Cập nhật cả phần thống kê (nếu cần)
            updateStats(myEvents.length);
        }
    };

    // 3. Hàm cập nhật con số thống kê trên Dashboard
    const updateStats = (count) => {
        const statCards = document.querySelectorAll('.stat-card h3');
        if (statCards.length > 0) {
            statCards[0].innerText = count.toString().padStart(2, '0');
        }
    };

    // Khởi chạy lần đầu
    renderEvents();
    const initialEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
    updateStats(initialEvents.length);
});