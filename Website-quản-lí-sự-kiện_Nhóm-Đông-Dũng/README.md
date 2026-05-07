# 🎉 EventHub — Nền tảng Quản lý Sự kiện

> **EventHub** là một ứng dụng web front-end được xây dựng bằng HTML, CSS và JavaScript thuần, cho phép người dùng khám phá, đăng ký và quản lý các sự kiện một cách trực quan và tiện lợi.

---

## 📸 Tổng quan

EventHub cung cấp giao diện hiện đại, responsive, giúp người dùng:

- 🔍 **Khám phá sự kiện** — Duyệt danh sách sự kiện đa dạng theo nhiều danh mục
- 📝 **Đăng ký nhanh** — Đăng ký tham gia sự kiện chỉ với vài bước đơn giản
- 📅 **Xem lịch trình** — Theo dõi sự kiện theo dạng lịch tháng trực quan
- 📊 **Bảng điều khiển** — Quản lý các sự kiện đã đăng ký và thống kê cá nhân

---

## 🗂️ Cấu trúc dự án

```
Final_Project_Test_02/
│
├── index.html              # Trang chủ — Hero section & sự kiện nổi bật
├── events.html             # Danh sách sự kiện — Tìm kiếm, lọc & đăng ký
├── detail.html             # Chi tiết sự kiện — Thông tin & form đăng ký
├── calendar.html           # Lịch sự kiện — Hiển thị dạng lịch tháng
├── dashboard.html          # Bảng điều khiển — Thống kê & quản lý cá nhân
├── README.md               # Tài liệu hướng dẫn dự án
│
└── assets/
    ├── css/
    │   ├── style.css       # Stylesheet chính
    │   ├── responsive.css  # Media queries cho responsive design
    │   └── style_back.css  # Bản sao lưu stylesheet
    │
    ├── js/
    │   ├── filter.js       # Tìm kiếm & lọc sự kiện theo danh mục
    │   ├── registration.js # Xử lý form đăng ký & lưu localStorage
    │   ├── calendar.js     # Render lịch tháng & đánh dấu sự kiện
    │   └── dashboard.js    # Hiển thị thống kê & danh sách đã đăng ký
    │
    └── images/             # Hình ảnh sự kiện (16 ảnh)
```

---

## 📄 Mô tả các trang

### 🏠 Trang chủ (`index.html`)
- **Hero Section** với ảnh nền và lời chào ấn tượng
- Hiển thị 3 sự kiện nổi bật sắp tới dạng card grid
- Thanh điều hướng (navbar) thống nhất trên toàn bộ website

### 📋 Danh sách Sự kiện (`events.html`)
- **Tìm kiếm** sự kiện theo tên
- **Lọc** theo danh mục: Công nghệ, Giáo dục, Thể thao, Thể thao điện tử, Âm nhạc, Du lịch
- **Đăng ký nhanh** qua modal popup với validation form
- **Lịch sử đăng ký** hiển thị dưới dạng bảng
- **Toast notification** thông báo kết quả đăng ký

### 📰 Chi tiết Sự kiện (`detail.html`)
- Banner sự kiện với thông tin ngày, địa điểm
- Nội dung chi tiết: giới thiệu, nội dung chính, diễn giả
- **Sidebar** đăng ký và thông tin bổ sung (thời lượng, ngôn ngữ, tiện ích)

### 📅 Lịch Sự kiện (`calendar.html`)
- Hiển thị lịch theo tháng với khả năng chuyển tháng
- Đánh dấu ngày có sự kiện và ngày hiện tại
- Legend ghi chú trực quan

### 📊 Bảng điều khiển (`dashboard.html`)
- **Thống kê nhanh**: số sự kiện đã đăng ký, sắp diễn ra, đã tham gia
- Bảng danh sách sự kiện cá nhân
- Xuất lịch trình dạng PDF

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|---|---|
| **HTML5** | Cấu trúc ngữ nghĩa (semantic HTML) |
| **CSS3** | Flexbox, Grid, Responsive Design, Animations |
| **JavaScript (ES6+)** | DOM manipulation, LocalStorage, Event handling |
| **Vanilla CSS** | Không sử dụng framework CSS bên ngoài |

---

## 🚀 Hướng dẫn chạy dự án

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Không cần cài đặt thêm bất kỳ dependency nào


## 🎯 Danh mục sự kiện

| Danh mục | Ví dụ sự kiện |
|---|---|
| 💻 Công nghệ | Hội thảo AI & Future 2026, Công nghệ vũ trụ |
| 🎓 Giáo dục | Chuỗi sự kiện quốc tế về giáo dục |
| ⚽ Thể thao | Marathon Vì Cộng Đồng, VnExpress Marathon, World Cup 2026 |
| 🎮 Thể thao điện tử | Esports World Cup, VCT Pacific |
| 🎵 Âm nhạc | Lễ hội Âm nhạc Mùa Hè, Sea Sound Session Hội An |
| ✈️ Du lịch | Năm Du lịch Quốc gia Gia Lai, Lễ hội biển Khánh Hòa |

---

## ✨ Tính năng nổi bật

- ✅ **Responsive Design** — Tương thích mọi kích thước màn hình
- ✅ **LocalStorage** — Lưu trữ thông tin đăng ký trên trình duyệt
- ✅ **Form Validation** — Kiểm tra dữ liệu đầu vào trước khi gửi
- ✅ **Dynamic Filtering** — Tìm kiếm và lọc sự kiện theo thời gian thực
- ✅ **Interactive Calendar** — Lịch tháng tương tác với chuyển tháng
- ✅ **Toast Notifications** — Thông báo popup đẹp mắt
- ✅ **Modal Registration** — Form đăng ký dạng popup hiện đại


