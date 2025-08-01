# Ứng dụng Quản lý Nhiệm vụ Cá nhân - Nhóm 8

## Giải thích chức năng, cấu trúc và cách hoạt động

### 1. Chức năng chính
- Thêm nhiệm vụ: Người dùng nhập tên, ngày, độ ưu tiên, mô tả và nhấn "Thêm nhiệm vụ" để lưu nhiệm vụ mới.
- Sửa nhiệm vụ: Nhấn nút "Sửa" trên bảng để chỉnh sửa thông tin nhiệm vụ.
- Xóa nhiệm vụ: Nhấn nút "Xóa" để loại bỏ nhiệm vụ khỏi danh sách.
- Đổi trạng thái: Nhấn "Đổi trạng thái" để chuyển nhiệm vụ qua các trạng thái: Chưa bắt đầu → Đang thực hiện → Đã hoàn thành.
- Lọc nhiệm vụ: Chọn trạng thái ở menu bên trái để lọc danh sách nhiệm vụ theo trạng thái.

### 2. Cấu trúc thư mục
```
├── index.html         # Giao diện chính, chứa form nhập và bảng nhiệm vụ
├── style.css          # Định dạng giao diện, bố cục, màu sắc
├── script.js          # Xử lý logic giao diện, render bảng, sự kiện form
└── js/
    ├── Priority.js        # Quản lý giá trị độ ưu tiên (High, Medium, Low)
    ├── TaskValidator.js   # Kiểm tra hợp lệ dữ liệu nhiệm vụ
    ├── TaskRepository.js  # Lưu trữ và truy xuất danh sách nhiệm vụ
    └── TaskManager.js     # Quản lý nghiệp vụ, điều phối các lớp trên
```

### 3. Cách hoạt động tổng thể
- Khi người dùng nhập thông tin và nhấn "Thêm nhiệm vụ":
  - script.js lấy dữ liệu từ form, gọi TaskManager để xử lý.
  - TaskManager kiểm tra hợp lệ qua TaskValidator, nếu hợp lệ thì lưu vào TaskRepository.
  - TaskRepository gán id cho nhiệm vụ và lưu vào mảng nội bộ.
  - script.js gọi hàm renderTasks để cập nhật lại bảng nhiệm vụ trên giao diện.
- Khi người dùng sửa, xóa hoặc đổi trạng thái nhiệm vụ:
  - script.js gọi các phương thức tương ứng của TaskManager để cập nhật dữ liệu.
  - Sau mỗi thao tác, renderTasks được gọi lại để hiển thị dữ liệu mới nhất.
- Khi lọc trạng thái:
  - script.js lọc danh sách nhiệm vụ theo trạng thái đã chọn và hiển thị lên bảng.

### 4. Luồng dữ liệu
- Người dùng nhập → script.js → TaskManager → TaskValidator → TaskRepository → script.js render lại bảng
- Các thao tác sửa, xóa, đổi trạng thái cũng đi qua TaskManager để đảm bảo kiểm tra và cập nhật đúng chuẩn.

### 5. Ưu điểm
- Tách biệt rõ ràng các lớp: giao diện, nghiệp vụ, kiểm tra dữ liệu, lưu trữ.
- Dễ mở rộng, bảo trì, kiểm thử từng phần riêng biệt.
- Giao diện tiếng Việt, dễ sử dụng cho mọi đối tượng.

---

## Giới thiệu
Đây là ứng dụng web quản lý nhiệm vụ cá nhân với giao diện hiện đại, đơn giản và dễ sử dụng. Ứng dụng cho phép người dùng thêm, sửa, xóa và theo dõi trạng thái các nhiệm vụ của mình.

## Tính năng chính
- **Quản lý nhiệm vụ:**
  - Thêm nhiệm vụ mới (tên, deadline, độ ưu tiên, mô tả)
  - Chỉnh sửa thông tin nhiệm vụ
  - Xóa nhiệm vụ
  - Đổi trạng thái nhiệm vụ (Chưa bắt đầu → Đang thực hiện → Đã hoàn thành)

- **Lọc và hiển thị:**
  - Lọc theo trạng thái (Tất cả, Đã hoàn thành, Chưa hoàn thành)
  - Hiển thị dạng bảng với đầy đủ thông tin
  - Sắp xếp theo STT

## Công nghệ sử dụng
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (Vanilla JS)
- Google Fonts (Prompt)

## Cấu trúc dự án
```
project/
│
├── index.html      # Giao diện người dùng
├── style.css       # Định dạng và styling
├── script.js       # Xử lý logic
└── README.md       # Tài liệu dự án
```

## Cài đặt và sử dụng
1. Clone repository về máy local
2. Mở file `index.html` bằng trình duyệt web
3. Bắt đầu thêm và quản lý nhiệm vụ

## Giao diện
- Header với tên ứng dụng
- Form thêm nhiệm vụ với các trường:
  - Tên nhiệm vụ
  - Deadline
  - Độ ưu tiên (Cao, Trung bình, Thấp)
  - Mô tả (không bắt buộc)
- Bảng hiển thị nhiệm vụ với các cột:
  - STT
  - Tên công việc
  - Mô tả
  - Deadline
  - Độ ưu tiên
  - Trạng thái
  - Thay đổi
  - Xóa

## Thành viên nhóm 8
- [Điền tên các thành viên]

## Lưu ý
- Dữ liệu được lưu trữ local, sẽ mất khi refresh trang
- Giao diện responsive, tối ưu cho desktop
- Có thể phát triển thêm tính năng lưu trữ với backend trong tương lai

## Bản quyền
© 2025 Nhóm 8 - Môn Công nghệ phần mềm
