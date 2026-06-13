import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "../../config/media";
import Navbar from "../Nav";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const navY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen md:min-h-160 overflow-hidden px-5 md:px-22 flex items-center font-Manrope"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero.bg})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 block bg-[radial-gradient(33%_42%_at_69%_59.4%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Navbar */}
      <motion.div className="absolute inset-x-0 top-0 z-50" style={{ y: navY }}>
        <Navbar />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 mt-28 md:mt-25 h-fit w-full flex gap-10 text-white">
        <div className="h-full w-full md:w-1/2 flex flex-col items-start gap-7 md:gap-9">
          {/* Text block */}
          <div className="flex w-full max-w-4xl flex-col items-start gap-1">
            <div className="flex items-center gap-3 -mb-1">
              <span className="font-[inter]">——</span>
              <span className="text-sm md:text-base">
                No Mondays. Just miles.
              </span>
            </div>

            <h1 className="-tracking-[0.14rem] font-['Inter'] font-bold text-4xl text-white md:text-inherit leading-tight">
              NMC — No Monday Club
            </h1>

            <p className="text-sm md:text-base text-left text-white leading-relaxed">
              No Monday Club is Da Nang's first anti-Monday running crew. We
              meet before the city wakes. We run not because we have to — but
              because it resets everything.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="group flex justify-between gap-2 h-11 text-black rounded-full pl-5 pr-1 hover:bg-gray-200"
          >
            <Link to="/signup">Start now</Link>
            <Button className="h-9 w-9 rounded-full">
              <ArrowUpRight className="duration-500 ease-in-out transition-transform group-hover:rotate-45" />
            </Button>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
