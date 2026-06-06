import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { images } from "../../config/media";

const LINE1_WORDS = "4:30AM. Before the noise.".split(" ");
const LINE2_WORDS = "Before the week owns you.".split(" ");

const wordVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const MyVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="w-full p-5 pt-14 relative">
      {/* content — sticky: pins to top of viewport until image section scrolls past */}
      <section className="w-full h-screen flex items-center justify-center overflow-hidden sticky top-0 z-0">
        <motion.p
          ref={ref}
          className="font-clash text-5xl font-semibold uppercase leading-[42.8px] tracking-tight"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Line 1 */}
          <span className="block">
            {LINE1_WORDS.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                className="inline-block mr-[0.25em]"
                variants={wordVariant}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Line 2 */}
          <span className="block">
            {LINE2_WORDS.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                className="inline-block mr-[0.25em]"
                variants={wordVariant}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </section>

      {/* images — higher z-index so it slides up and overlaps the pinned content */}
      <section className="w-full h-fit flex flex-col gap-24 relative z-10">
        {/* 1 & 2 */}
        <div className="w-full h-full pr-8 pl-24 flex items-end justify-between">
          <img
            src={images.myVision.v1}
            alt="My Vision"
            className="w-57.5 h-43 object-cover rounded-[10px]"
          />

          <img
            src={images.myVision.v2}
            alt="My Vision"
            className="w-53.75 h-66.75 object-cover rounded-[10px]"
          />
        </div>

        {/* 3 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={images.myVision.v3}
            alt="My Vision"
            className="w-75 h-56 object-cover rounded-[10px] bg-red-200/40"
          />
        </div>

        {/* 4 & 5 */}
        <div className="w-full h-full pr-8 pl-24 flex items-end justify-between">
          <img
            src={images.myVision.v4}
            alt="My Vision"
            className="w-67.5 h-50 object-cover rounded-[10px] bg-red-200/40"
          />

          <img
            src={images.myVision.v5}
            alt="My Vision"
            className="w-62.5 h-72.25 object-cover rounded-[10px] bg-red-200/40"
          />
        </div>

        {/* 6 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={images.myVision.v6}
            alt="My Vision"
            className="w-50 h-85.25 object-cover rounded-[10px] bg-red-200/40"
          />
        </div>
      </section>
    </section>
  );
};

export default MyVision;
