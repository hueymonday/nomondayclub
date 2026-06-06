# Animation Spec: NMC — No Monday Club
## Framer Motion Implementation Guide

---

## Nguyên tắc bắt buộc
- **KHÔNG thay đổi bất kỳ nội dung nào** — text, hình ảnh, layout, màu sắc, font giữ nguyên 100%
- **KHÔNG viết lại component** — chỉ wrap tag HTML thành `motion.tag` và thêm animation props
- **Giữ nguyên toàn bộ** className, style inline, id, href, src
- Mọi hiệu ứng scroll dùng `whileInView` + `viewport={{ once: true }}` — chỉ chạy 1 lần
- Tone animation: **mượt, chậm, tối giản** — phù hợp aesthetic dark/minimal/athletic của trang
- Stack: **React + Tailwind CSS + Framer Motion** (`framer-motion` package)

---

## Setup

```bash
npm install framer-motion
```

```js
// Import dùng chung
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
```

---

## File Shared Variants — tạo `src/utils/animations.js`

```js
// Tất cả component import từ đây, không định nghĩa lại

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export const maskReveal = {
  // Dùng cho text reveal Hero — parent overflow:hidden
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

---

## 1. SMOOTH SCROLL — Global

Cài Lenis cho toàn trang (smooth scroll chuẩn):

```bash
npm install @studio-freight/lenis
```

```js
// src/app/layout.jsx hoặc _app.jsx — wrap toàn bộ app
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

---

## 2. NAVBAR / HEADER

**Hiệu ứng:** Fade-in + slide-down stagger khi load trang.
**Hover menu links:** Opacity 0.5 → 1 mượt.

```jsx
import { fadeIn, staggerContainer, fadeUp } from '@/utils/animations'

// Wrap toàn bộ header tag
<motion.header
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {/* Logo */}
  <motion.a variants={fadeUp} href="#hero">NMC</motion.a>

  {/* Nav links — wrap từng link */}
  {['Coaching', 'About', 'Schedule', 'Contact'].map((item) => (
    <motion.a
      key={item}
      variants={fadeUp}
      href={`/${item.toLowerCase()}`}
      // className giữ nguyên
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0.55 }}
      animate={{ opacity: 0.55 }}
      // Không dùng whileHover scale để tránh layout shift trên nav
    >
      {item}
    </motion.a>
  ))}

  {/* Tọa độ */}
  <motion.span variants={fadeUp}>16.099°N 108.255°E</motion.span>
</motion.header>
```

---

## 3. HERO SECTION

### 3a. Sub-heading — Masked Text Reveal
**"No Mondays. Just miles."** — text trượt lên từ dưới, parent overflow hidden tạo hiệu ứng mask.

```jsx
// Parent container PHẢI có overflow: hidden (thêm vào className hoặc style)
<div style={{ overflow: 'hidden' }}>
  <motion.p
    variants={maskReveal}
    initial="hidden"
    animate="visible"
    // className giữ nguyên
  >
    No Mondays. Just miles.
  </motion.p>
</div>
```

### 3b. Main Heading — Fade-in + Slide-up

```jsx
<motion.h1
  initial={{ opacity: 0, y: 48 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
  // className giữ nguyên
>
  NMC — No Monday Club
</motion.h1>
```

### 3c. Paragraph + Button — Fade-up với delay

```jsx
<motion.p
  initial={{ opacity: 0, y: 32 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, ease: 'easeOut', delay: 0.5 }}
  // className giữ nguyên
>
  {/* text giữ nguyên */}
</motion.p>

{/* Button "Start now ↗" */}
<motion.a
  href="/contact"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.65 }}
  whileHover="hover"
  // className giữ nguyên
>
  <span>Start now</span>
  {/* Arrow — wrap riêng để di chuyển chéo khi hover */}
  <motion.span
    variants={{ hover: { x: 4, y: -4 } }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    ↗
  </motion.span>
</motion.a>
```

### 3d. Hero Image — Ken Burns Effect

```jsx
<motion.div
  initial={{ scale: 1.08, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
  // className giữ nguyên — wrapper của img
>
  <img src="..." alt="..." /> {/* giữ nguyên */}
</motion.div>
```

---

## 4. SECTION "WHY WE RUN"

### 4a. Heading "(Why we run)"

```jsx
<motion.h3
  variants={slideLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  // className giữ nguyên
>
  (Why we run)
</motion.h3>
```

### 4b. Paragraph dài

```jsx
<motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  // className giữ nguyên
>
  {/* text giữ nguyên */}
</motion.p>
```

### 4c. Ảnh bên cạnh

```jsx
<motion.div
  variants={scaleIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
>
  <img src="..." alt="..." />
</motion.div>
```

---

## 5. STATS / COUNTERS

**Hiệu ứng:** Số đếm từ 0 lên số thực khi scroll đến. Dùng custom hook `useCountUp`.

### Hook `useCountUp`

```js
// src/hooks/useCountUp.js
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1.5) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: 'easeOut' })
    }
  }, [isInView])

  return { ref, rounded }
}
```

### Dùng trong component Stats

```jsx
import { useCountUp } from '@/hooks/useCountUp'

// "90+ Members"
function StatMembers() {
  const { ref, rounded } = useCountUp(90)
  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>+
      <p>Members</p>
    </div>
  )
}

// "0+ Weekly escapes" — nếu là 0 thì giữ nguyên text, không cần count
// "4:30 AM" — không dùng counter vì là time format, dùng fadeUp thay thế
// "1 Rule" — dùng counter với target=1

// Wrap toàn bộ stats container
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.div variants={fadeUp}> <StatMembers /> </motion.div>
  <motion.div variants={fadeUp}> {/* Weekly escapes */} </motion.div>
  <motion.div variants={fadeUp}> {/* 4:30 AM */} </motion.div>
  <motion.div variants={fadeUp}> {/* 1 Rule */} </motion.div>
</motion.div>
```

---

## 6. TEXT LỚN "4:30AM. BEFORE THE NOISE."

**Hiệu ứng:** Opacity và scale thay đổi theo scroll — text "sống" theo tốc độ cuộn chuột.

```jsx
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

function SignatureText() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']  // bắt đầu khi section vào viewport, kết thúc khi ra
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95])

  return (
    <motion.section ref={ref} style={{ opacity, scale }}>
      {/* text "4:30AM. Before the noise. Before the week owns you." giữ nguyên */}
    </motion.section>
  )
}
```

---

## 7. GALLERY — 6 ảnh

**Hiệu ứng:** Stagger scale-in + fade-in, mỗi ảnh delay lệch nhau.

```jsx
<motion.div
  variants={staggerContainerSlow}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  // className grid/masonry giữ nguyên
>
  {/* Lặp cho từng ảnh — giữ nguyên src, alt, className */}
  {images.map((img, i) => (
    <motion.div
      key={i}
      variants={scaleIn}
      // className giữ nguyên
    >
      <img src={img.src} alt={img.alt} />
    </motion.div>
  ))}
</motion.div>
```

---

## 8. SCHEDULE SECTION

### 8a. Marquee / Ticker — "Escape • No Monday Club • Freedom • Reset"

**Hiệu ứng:** Chạy vô tận sang trái — dùng CSS duplicate trick.

```jsx
// Giữ nguyên CSS hiện có nếu đang dùng @keyframes marquee
// Nếu chưa có, dùng Framer Motion:

function Marquee({ children }) {
  return (
    <div style={{ overflow: 'hidden', display: 'flex' }}>
      {/* Duplicate content để tạo loop liền mạch */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}

// Dùng:
<Marquee>
  <span>Escape</span>
  <span>•</span>
  <span>No Monday Club</span>
  <span>•</span>
  <span>Freedom</span>
  <span>•</span>
  <span>Reset</span>
  <span>•</span>
</Marquee>
```

### 8b. Schedule Heading

```jsx
<motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Schedule
</motion.h2>
```

### 8c. Schedule Rows (01 MON / 02 WED / 03 SAT) — Hover highlight

```jsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {scheduleItems.map((item, i) => (
    <motion.div
      key={i}
      variants={slideLeft}
      whileHover={{
        backgroundColor: 'rgba(255,255,255,0.04)', // nhẹ, giữ dark tone
        transition: { duration: 0.2 }
      }}
      // className của row giữ nguyên
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'default' }}
    >
      {/* Số thứ tự + ngày + chi tiết — giữ nguyên */}
      <motion.span
        // Chi tiết địa điểm — sáng lên khi hover row cha
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.6 }}
        // className giữ nguyên
      >
        {item.detail} {/* "5:30 AM · Bach Dang Riverside · 6km easy" */}
      </motion.span>
    </motion.div>
  ))}
</motion.div>
```

---

## 9. ABOUT / NMC© SECTION

```jsx
// Heading
<motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  More About NMC©
</motion.h2>

// Ảnh — slide từ trái
<motion.div
  variants={slideLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <img src="..." alt="Woman" />
</motion.div>

// Text bio — slide từ phải (đối xứng với ảnh)
<motion.div
  variants={slideRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <p>{/* bio text giữ nguyên */}</p>
</motion.div>
```

---

## 10. FAQ — Accordion

```jsx
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Heading
<motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Everything you need to know
</motion.h2>

// FAQ Item component
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      // className giữ nguyên
    >
      {/* Header row — question + icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0' }}>
        <h3 /* className giữ nguyên */>{question}</h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ display: 'inline-block', fontSize: '1.5rem', lineHeight: 1 }}
        >
          +
        </motion.span>
      </div>

      {/* Answer — AnimatePresence để exit animation hoạt động */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '1.25rem' }} /* className giữ nguyên */>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

## 11. CTA "READY TO ESCAPE MONDAY?" + FOOTER

```jsx
// CTA Section
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
>
  <motion.h2 variants={fadeUp}>Ready to Escape Monday?</motion.h2>
  <motion.p variants={fadeUp}>Show up once. You might just keep coming back.</motion.p>

  {/* Button — cùng pattern Hero button */}
  <motion.a
    href="/contact#hero"
    variants={fadeUp}
    whileHover="hover"
    // className giữ nguyên
  >
    <span>Join the club</span>
    <motion.span
      variants={{ hover: { x: 4, y: -4 } }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      ↗
    </motion.span>
  </motion.a>
</motion.div>

{/* Ảnh background CTA — Ken Burns nhẹ khi scroll đến */}
<motion.div
  initial={{ scale: 1.06 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
  viewport={{ once: true }}
>
  <img src="..." alt="Drone shot running track" />
</motion.div>

{/* Footer links */}
<motion.footer
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Mỗi nhóm link */}
  <motion.div variants={fadeUp}>{/* Quick Links */}</motion.div>
  <motion.div variants={fadeUp}>{/* Networks */}</motion.div>
  <motion.div variants={fadeUp}>{/* ©2026 */}</motion.div>
</motion.footer>
```

---

## Lưu ý triển khai

| Vấn đề | Giải pháp |
|---|---|
| Marquee bị giật/nhảy | Đảm bảo duplicate content đủ rộng hơn viewport; kiểm tra `gap` đồng đều |
| Counter chạy nhiều lần | Đảm bảo `useInView` có `once: true` |
| FAQ height:auto không animate | `AnimatePresence` phải bọc ngoài, `overflow: hidden` phải ở đúng motion.div |
| Parallax bị lag trên mobile | Thêm `style={{ willChange: 'transform' }}` vào element có parallax |
| Animation chạy trước khi scroll | Kiểm tra `whileInView` thay vì `animate` cho scroll-triggered elements |
| `motion.a` conflict với Next.js Link | Dùng `motion(Link)` thay vì `motion.a` nếu dùng Next.js router |
