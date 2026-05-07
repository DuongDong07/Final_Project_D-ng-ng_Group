document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const eventCards = document.querySelectorAll('.event-card');

    categoryFilter.addEventListener('change', () => {
        const selectedValue = categoryFilter.value; // "tech", "music", "all"...

        eventCards.forEach(card => {
            // Đọc trực tiếp giá trị từ data-category chúng ta vừa thêm ở HTML
            const cardCategory = card.getAttribute('data-category');

            if (selectedValue === "all" || cardCategory === selectedValue) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

        // Thanh tìm kiếm 
const searchInput = document.getElementById("eventSearch");

searchInput.addEventListener("input", function () {

    // lấy chữ người dùng nhập
    const keyword = searchInput.value.toLowerCase();

    // lấy tất cả event card
    const events = document.querySelectorAll(".event-card");

    events.forEach(event => {

        // lấy tiêu đề sự kiện
        const title = event.querySelector("h3").textContent.toLowerCase();

        // kiểm tra có chứa từ khóa không
        if (title.includes(keyword)) {

            // hiện event
            event.style.display = "block";

        } else {

            // ẩn event
            event.style.display = "none";

        }

    });

});