# 🎬 Spec: Hero → Reason Scroll Overlay & Parallax

## 📌 Tên hiệu ứng (Industry Standard)

**Scroll-Driven Layered Parallax & Sticky Section Reveal**  
_(Hiệu ứng parallax nhiều lớp + Section sticky chồng lớp khi cuộn)_

## 🖼 Mô tả trực quan

- Khi người dùng scroll xuống:
  1. Thanh `Navbar` di chuyển lên nhanh hơn tốc độ scroll.
  2. Nội dung bên trong `Hero` (text, hình, background) cũng di chuyển lên nhưng **chậm hơn** Navbar → tạo cảm giác chiều sâu (parallax nội bộ).
  3. Section `Reason` từ dưới trượt lên, **đè dần lên** Hero như một lớp phủ, cuối cùng che hoàn toàn Hero → chuyển cảnh mượt kiểu "layer stacking".

## 🛠 Công cụ Framer Motion cần dùng

| Hook / Component                  | Vai trò                                                             |
| --------------------------------- | ------------------------------------------------------------------- |
| `useScroll()`                     | Theo dõi vị trí cuộn (`scrollY` theo px hoặc `scrollYProgress` 0→1) |
| `useTransform()`                  | Ánh xạ giá trị scroll → `y`, `opacity`, `scale`, `rotate`           |
| `motion.div` / `motion.section`   | Áp dụng style động từ `useTransform`                                |
| CSS `position: sticky` + `top: 0` | Giữ section ở viewport để lớp sau tự động đè lên lớp trước          |

## 📐 Cấu trúc Component (JSX)

```jsx
<div className="relative" style={{ height: "200vh" }}>
  <motion.section className="sticky top-0 h-screen z-10">
    {/* Navbar + Hero Content */}
  </motion.section>

  <motion.section className="sticky top-0 h-screen z-20">
    {/* Reason Content */}
  </motion.section>
</div>
```
