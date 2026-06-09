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
      {/* Sticky text — giữ nguyên effect */}
      <section className="w-full h-screen flex items-center justify-center overflow-hidden sticky top-0 z-0">
        <motion.p
          ref={ref}
          className="font-clash font-semibold uppercase tracking-tight
                     text-2xl leading-[1.2em]
                     md:text-5xl md:leading-[42.8px]"
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

      {/* Images */}
      <section
        className="w-full h-fit flex flex-col relative z-10
                          gap-8 md:gap-24"
      >
        {/* Row 1 & 2 */}
        <div className="w-full h-full flex pr-4 pl-8 md:pr-8 md:pl-24 items-end justify-between">
          <img
            src={images.myVision.v1}
            alt="My Vision"
            className="w-[38%] h-36 md:w-57.5 md:h-43 object-cover rounded-[10px]"
          />
          <img
            src={images.myVision.v2}
            alt="My Vision"
            className="w-[32%] h-48 md:w-53.75 md:h-66.75 object-cover rounded-[10px]"
          />
        </div>

        {/* Row 3 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={images.myVision.v3}
            alt="My Vision"
            className="w-[65%] h-44 md:w-75 md:h-56 object-cover rounded-[10px]"
          />
        </div>

        {/* Row 4 & 5 */}
        <div className="w-full h-full flex pr-4 pl-8 md:pr-8 md:pl-24 items-end justify-between">
          <img
            src={images.myVision.v4}
            alt="My Vision"
            className="w-[45%] h-40 md:w-67.5 md:h-50 object-cover rounded-[10px]"
          />
          <img
            src={images.myVision.v5}
            alt="My Vision"
            className="w-[40%] h-52 md:w-62.5 md:h-72.25 object-cover rounded-[10px]"
          />
        </div>

        {/* Row 6 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={images.myVision.v6}
            alt="My Vision"
            className="w-[35%] h-60 md:w-50 md:h-85.25 object-cover rounded-[10px]"
          />
        </div>
      </section>
    </section>
  );
};

export default MyVision;
