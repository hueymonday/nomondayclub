import React, { useRef, useEffect } from "react";
import { images } from "../../config/media";

const About = () => {
  const spanNmcRef = useRef(null);
  const imageDivRef = useRef(null);

  // Refs để thao tác trực tiếp lên DOM (không dùng state để tránh re-render)
  const titleAnimRef = useRef(null);
  const imgAnimRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;
    let targetProgress = 0;
    let rafId;

    const handleScroll = () => {
      const spanEl = spanNmcRef.current;
      const imgEl = imageDivRef.current;
      if (!spanEl || !imgEl) return;

      const spanBottom = spanEl.getBoundingClientRect().bottom;
      const imgTop = imgEl.getBoundingClientRect().top;

      const overlapWindow = 100;
      const overlap = spanBottom - imgTop;
      targetProgress = Math.min(Math.max(overlap / overlapWindow, 0), 1);
    };

    // Vòng lặp animation mượt mà (Lerp)
    const animate = () => {
      // Hệ số 0.08 tạo độ trễ nhẹ, mượt mà giống Spring physics của Framer
      // Tăng lên 0.15 nếu muốn bám scroll nhanh hơn, giảm xuống 0.05 nếu muốn mượt/lì hơn
      currentProgress += (targetProgress - currentProgress) * 0.08;

      // Chống rung lắc vi mô (micro-jitter) khi dừng scroll
      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      // Update trực tiếp lên DOM (Cực nhanh, không qua React Virtual DOM)
      if (titleAnimRef.current) {
        const scale = 1 - 0.2 * currentProgress;
        const opacity = 1 - 0.2 * currentProgress;
        titleAnimRef.current.style.transform = `scale(${scale})`;
        titleAnimRef.current.style.opacity = opacity;
      }

      if (imgAnimRef.current) {
        const imgScale = 2 - currentProgress; // 2 -> 1
        imgAnimRef.current.style.transform = `scale(${imgScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" className="w-full h-fit relative max-sm:pt-32">
      <div className="w-full relative">
        {/* top — STICKY TITLE */}
        <div className="w-full pt-20 max-sm:pt-16 sticky top-0 z-0">
          <div
            ref={titleAnimRef}
            className="w-full h-75vh pb-28 max-sm:pb-16 pt-10 max-sm:pt-8 flex flex-col items-center font-semibold font-clash uppercase"
            style={{
              transformOrigin: "top center",
              willChange: "transform, opacity",
            }}
          >
            <span className="text-[88px] max-sm:text-[48px] leading-17.5 max-sm:leading-12">
              more about
            </span>
            <span
              ref={spanNmcRef}
              className="text-[120px] max-sm:text-[72px] tracking-[-1.6px] max-sm:tracking-[-1px] leading-18 max-sm:leading-14"
            >
              NMC©
            </span>
          </div>
        </div>

        {/* image wrapper */}
        <div
          ref={imageDivRef}
          className="w-110 max-sm:w-[85%] h-180 max-sm:h-[60vh] pt-16 max-sm:pt-12 pb-25 max-sm:pb-16 flex items-center justify-center relative z-10 mx-auto"
        >
          <div className="w-full h-full overflow-hidden rounded-[20px] max-sm:rounded-[16px] isolate transform-gpu">
            <img
              ref={imgAnimRef}
              src={images.about.abt}
              alt="more about NMC"
              className="object-cover w-full h-full rounded-[20px] max-sm:rounded-[16px] backface-hidden"
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div className="w-full h-fit pb-25 max-sm:pb-16">
        <div className="size-full flex flex-col gap-7.5 max-sm:gap-5 text-center px-12 max-sm:px-6 pb-25 max-sm:pb-16">
          <span className="font-clash text-2xl max-sm:text-xl font-black uppercase leading-6 max-sm:leading-5">
            I'M A FINAL-YEAR STUDENT FROM da NaNG WHO BUILDS THINGS FOR PEOPLE
            WHO PREFER FEWER WORDS AND MORE MILES. <br /> MY BELIEF IN QUIET
            COMMUNITY, HONEST DESIGN, AND THE IDEA THAT SOMETIMES YOU JUST NEED
            SOMEONE RUNNING IN THE SAME DIRECTION, SHAPES EVERYTHING I CREATE.
          </span>
          <span className="font-sans font-medium text-[#808080] px-20 max-sm:px-4 leading-[23.4px] max-sm:leading-5">
            NMC was built on a simple idea. Not everyone needs a big crew,
            sometimes all you need is a few people running in the same
            direction. Here, you don't have to say anything at all. Just run.
            Let your feet tell your story to the wind, the road, the early
            morning. And if one day you want to share it with the person running
            beside you, we'll be here.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
