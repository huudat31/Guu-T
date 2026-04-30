# Guu & T - Luxury Architectural & Interior Design

Guu & T là một nền tảng website cao cấp dành cho thương hiệu thiết kế kiến trúc và nội thất, kết hợp giữa phong cách Mid-century Modern và Contemporary. Website được xây dựng trên nền tảng Next.js 15 và quản lý nội dung linh hoạt qua Sanity CMS.

## 🚀 Tính Năng Nổi Bật

- **Next.js 15 (App Router)**: Tận dụng tối đa hiệu năng của Server Components và Client Components.
- **Sanity CMS Integration**: Toàn bộ dữ liệu Dự án (Projects), Tin tức (Blog), và Đội ngũ (Team) được quản lý tập trung qua CMS.
- **Rich Aesthetics**: Giao diện sang trọng với tông màu tối (Dark Mode), điểm xuyết sắc vàng Gold của thương hiệu.
- **Framer Motion Animations**: Các hiệu ứng chuyển động mượt mà, chuyên nghiệp.
- **Responsive Design**: Tối ưu hóa trải nghiệm trên mọi thiết bị (Mobile, Tablet, Desktop).
- **Loading Skeletons**: Trải nghiệm người dùng không bị ngắt quãng với hệ thống skeleton loader hiện đại.

## 🛠 Công Nghệ Sử Dụng

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: @sanity/client

## 📦 Cài Đặt

### 1. Yêu cầu hệ thống
- Node.js 18.x trở lên
- Tài khoản Sanity (nếu muốn quản lý nội dung riêng)

### 2. Clone dự án
```bash
git clone https://github.com/huudat31/Guu-T.git
cd Guu-T
```

### 3. Cài đặt thư viện
```bash
npm install
```

### 4. Cấu hình Sanity CORS (Quan trọng)
Để website có thể lấy dữ liệu từ Sanity API khi chạy ở môi trường local, bạn cần thêm địa chỉ local vào danh sách cho phép của Sanity:
1. Truy cập [sanity.io/manage](https://www.sanity.io/manage)
2. Chọn dự án của bạn (`08k96exq`)
3. Vào mục **API** > **CORS Origins**
4. Nhấn **Add CORS origin** và nhập `http://localhost:3000`
5. Tích chọn **Allow credentials** và nhấn **Save**.

## 🚀 Chạy Ứng Dụng

Chạy môi trường phát triển (Development mode):
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## 📂 Cấu Trúc Thư Mục

- `src/app/`: Chứa các routes chính (Projects, Blog, Team, About, Services).
- `src/components/`: Các component dùng chung và Sanity Client config.
- `src/app/[page]/lib/`: Logic truy vấn dữ liệu (GROQ query) cho từng trang.

## 📝 Quản Lý Nội Dung (Sanity)

Dữ liệu được lấy từ các Schema chính:
- `project`: Danh sách các công trình kiến trúc/nội thất.
- `post`: Bài viết tin tức và sự kiện.
- `teamMember`: Thông tin đội ngũ sáng tạo.

---
Phát triển bởi **Guu & T Team**.
