/**
 * HỆ THỐNG DASHBOARD EVENTHUB
 */

document.addEventListener("DOMContentLoaded", () => {

    // Lấy tbody của bảng
    const tableBody = document.getElementById("eventTableBody");

    // Kiểm tra tồn tại
    if (!tableBody) {
        console.error("Không tìm thấy eventTableBody");
        return;
    }

    /**
     * HIỂN THỊ DANH SÁCH EVENT
     */
    const renderEvents = () => {

        // Lấy dữ liệu từ localStorage
        const myEvents =
            JSON.parse(localStorage.getItem("myEvents")) || [];

        // Nếu chưa có dữ liệu
        if (myEvents.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="4"
                        style="
                            text-align:center;
                            padding:30px;
                            color:#94a3b8;
                        ">

                        Bạn chưa đăng ký sự kiện nào.
                        <a href="events.html">
                            Khám phá ngay!
                        </a>

                    </td>
                </tr>
            `;

            return;
        }

        // Render dữ liệu ra bảng
        tableBody.innerHTML = myEvents.map((event, index) => `

            <tr>

                <td>
                    <strong>${event.eventName}</strong>
                </td>

                <td>
                    ${event.regDate}
                </td>

                <td>
                    <span class="status-badge success">
                        Đã xác nhận
                    </span>
                </td>

                <td>

                    <button
                        class="action-link danger"
                        onclick="deleteEvent(${index})"
                        style="
                            background:none;
                            border:none;
                            cursor:pointer;
                            font-family:inherit;
                        ">

                        Hủy vé

                    </button>

                </td>

            </tr>

        `).join("");

    };

    /**
     * CẬP NHẬT THỐNG KÊ
     */
    const updateStats = (count) => {

        const statCards =
            document.querySelectorAll(".stat-card h3");

        if (statCards.length > 0) {

            statCards[0].textContent =
                count.toString().padStart(2, "0");

        }

    };

    /**
     * XÓA EVENT
     */
    window.deleteEvent = (index) => {

        const confirmDelete = confirm(
            "Bạn có chắc chắn muốn hủy đăng ký sự kiện này không?"
        );

        if (!confirmDelete) return;

        // Lấy dữ liệu
        let myEvents =
            JSON.parse(localStorage.getItem("myEvents")) || [];

        // Xóa event
        myEvents.splice(index, 1);

        // Lưu lại
        localStorage.setItem(
            "myEvents",
            JSON.stringify(myEvents)
        );

        // Render lại
        renderEvents();

        // Update stats
        updateStats(myEvents.length);

    };

    /**
     * KHỞI TẠO
     */

    renderEvents();

    const initialEvents =
        JSON.parse(localStorage.getItem("myEvents")) || [];

    updateStats(initialEvents.length);

});