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
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -540]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y: parallaxY }}
      className="-mb-135 relative z-30 w-full h-fit flex flex-col justify-end px-22 pt-32 pb-24 gap-14 bg-white will-change-transform"
    >
      {/* top part */}
      <div className="w-full h-fit flex justify-between items-center gap-24">
        {/* content */}
        <div className="flex flex-col w-full font-Manrope">
          <span className="text-3xl font-medium pr-32 -tracking-[0.03em] leading-[1.3em]">
            (Why we run)
          </span>
          <span className="text-left text-[#888] text-3xl font-medium -tracking-[0.03em] leading-[1.3em]">
            Running is escape. NMC is not about the finish line—it’s about
            freedom from routine. We run to reset ourselves, to claim the
            morning before the world takes it. One pace, one reason: break
            loose.
          </span>
        </div>

        {/* pic */}
        <div className="w-2/3 h-52 rounded-[16px] overflow-hidden">
          <img
            src={images.reason.rpic}
            alt="reason picture :)"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* bottom part */}
      <div className="w-full h-fit flex justify-between items-start gap-24 ">
        {/* members */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={90}
            suffix="+"
            className="text-6xl leading-14 font-bold"
          />
          <span>Members</span>
        </div>

        {/* Weekly escapes */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={7}
            suffix="+"
            className="text-6xl leading-14 font-bold"
          />
          <span>Weekly escapes</span>
        </div>

        {/* AM meetup */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter
            to={4}
            suffix=":30"
            className="text-6xl leading-14 font-bold"
          />
          <span>AM meetup</span>
        </div>

        {/* Rule — no Mondays */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <Counter to={1} className="text-6xl leading-14 font-bold" />
          <span>Rule — no Mondays</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Reason;
