import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { images } from "../../config/media";

const Counter = ({ to, suffix = "", duration = 1.2, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, duration, inView, to]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
};

const Reason = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -540]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y: parallaxY }}
      className="-mb-135 relative z-30 w-full h-fit flex flex-col justify-end px-22 max-sm:px-5 pt-32 max-sm:pt-16 pb-24 max-sm:pb-12 gap-14 max-sm:gap-8 bg-white will-change-transform"
    >
      {/* top part */}
      <div className="w-full h-fit flex max-sm:flex-col justify-between items-center gap-24 max-sm:gap-6">
        {/* content */}
        <div className="flex flex-col w-full font-Manrope">
          <span className="text-3xl max-sm:text-xl font-medium pr-32 max-sm:pr-0 -tracking-[0.03em] leading-[1.3em]">
            (Why we run)
          </span>
          <span className="text-left text-[#888] text-3xl max-sm:text-lg font-medium -tracking-[0.03em] leading-[1.3em]">
            Running is escape. NMC is not about the finish line—it's about
            freedom from routine. We run to reset ourselves, to claim the
            morning before the world takes it. One pace, one reason: break
            loose.
          </span>
        </div>

        {/* pic */}
        <div className="w-93.75 max-sm:w-full h-55.75 max-sm:h-40 rounded-[16px] max-sm:rounded-[12px] overflow-hidden shrink-0">
          <img
            src={images.reason.rpic}
            alt="reason picture :)"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* bottom part */}
      <div className="w-full h-fit flex max-sm:flex-wrap justify-between items-start gap-24 max-sm:gap-6">
        {/* members */}
        <div className="w-full max-sm:w-[calc(50%-12px)] h-fit pt-12 max-sm:pt-6 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={90}
            suffix="+"
            className="text-6xl max-sm:text-4xl leading-14 max-sm:leading-10 font-bold"
          />
          <span className="text-base max-sm:text-sm">Members</span>
        </div>

        {/* Weekly escapes */}
        <div className="w-full max-sm:w-[calc(50%-12px)] h-fit pt-12 max-sm:pt-6 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={7}
            suffix="+"
            className="text-6xl max-sm:text-4xl leading-14 max-sm:leading-10 font-bold"
          />
          <span className="text-base max-sm:text-sm">Weekly escapes</span>
        </div>

        {/* AM meetup */}
        <div className="w-full max-sm:w-[calc(50%-12px)] h-fit pt-12 max-sm:pt-6 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={4}
            suffix=":30"
            className="text-6xl max-sm:text-4xl leading-14 max-sm:leading-10 font-bold"
          />
          <span className="text-base max-sm:text-sm">AM meetup</span>
        </div>

        {/* Rule — no Mondays */}
        <div className="w-full max-sm:w-[calc(50%-12px)] h-fit pt-12 max-sm:pt-6 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={1}
            className="text-6xl max-sm:text-4xl leading-14 max-sm:leading-10 font-bold"
          />
          <span className="text-base max-sm:text-sm">Rule — no Mondays</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Reason;
