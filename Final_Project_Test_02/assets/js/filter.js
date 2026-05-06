document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const eventCards = document.querySelectorAll('.event-card');

    categoryFilter.addEventListener('change', () => {
        const selectedValue = categoryFilter.value; // Lấy giá trị tech, music, v.v.

        eventCards.forEach(card => {
            // Tìm thẻ tag bên trong card để lấy chủ đề của card đó
            const cardTag = card.querySelector('.card-tag').innerText.toLowerCase();
            
            // Chuyển đổi tên hiển thị sang giá trị value để so sánh
            // Ví dụ: "Công nghệ" -> "tech"
            let category = "";
            if (cardTag.includes("nghệ")) category = "tech";
            if (cardTag.includes("nhạc")) category = "music";
            if (cardTag.includes("dục")) category = "education";
            if (cardTag.includes("thao")) category = "sport";

            // LOGIC LỌC SỐ 2:
            if (selectedValue === "all" || category === selectedValue) {
                card.style.display = "block"; // Hiện nếu khớp hoặc chọn "Tất cả"
            } else {
                card.style.display = "none";  // Ẩn hoàn toàn nếu không liên quan
            }
        });
    });
});