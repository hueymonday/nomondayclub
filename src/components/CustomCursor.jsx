import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

function CustomCursor() {
  const cursorX = useMotionValue(100);
  const cursorY = useMotionValue(-100);
  const [imageUrl, setImageUrl] = useState(null); // ảnh hiện tại cần hiển thị, null = không hiện

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Lắng nghe event từ bất kỳ component nào muốn trigger ảnh
  useEffect(() => {
    const onShow = (e) => setImageUrl(e.detail.url); // nhận url ảnh
    const onHide = () => setImageUrl(null); // xóa ảnh

    window.addEventListener("cursor:show-image", onShow);
    window.addEventListener("cursor:hide-image", onHide);
    return () => {
      window.removeEventListener("cursor:show-image", onShow);
      window.removeEventListener("cursor:hide-image", onHide);
    };
  }, []);

  return (
    <>
      {/* Cursor tròn blend-difference — ẩn khi đang hiện ảnh */}
      <motion.div
        style={{ x, y }}
        className="custom-cursor"
        animate={{ opacity: imageUrl ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor ảnh — chỉ hiện khi imageUrl có giá trị */}
      <AnimatePresence>
        {imageUrl && (
          <motion.div
            style={{ x, y }}
            className="cursor-image"
            initial={{ opacity: 0, scale: 0.8 }} // lúc xuất hiện: mờ + nhỏ
            animate={{ opacity: 1, scale: 1 }} // animate vào: rõ + đúng kích thước
            exit={{ opacity: 0, scale: 0.8 }} // lúc biến mất: mờ + nhỏ lại
            transition={{ duration: 0.2 }}
          >
            <img src={imageUrl} alt="" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CustomCursor;
