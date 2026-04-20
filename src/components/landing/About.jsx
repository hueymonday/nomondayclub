import React from "react";
import { images } from "../../config/media";

const About = () => {
  return (
    <section className="w-full h-fit">
      {/* top */}
      <div className="w-full h-full pt-30">
        {/* title */}
        <div className="w-full h-75vh pb-28 pt-10 flex flex-col items-center font-semibold font-clash uppercase">
          <span className=" text-[88px] leading-17.5">more about</span>
          <span className="text-[120px] tracking-[-1.6px] leading-18">
            NMC©
          </span>
        </div>
        {/* image */}
        <div className="w-full min-h-180 flex items-center justify-center">
          <img
            src={images.about.abt}
            alt="more about NMC"
            className="object-cover w-110 h-full rounded-[20px]"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="w-full h-fit pb-25">
        <div className="size-full flex flex-col gap-7.5 text-center px-12 pb-25">
          {/* title */}
          <span className="font-clash text-2xl font-black uppercase leading-6">
            I'M A FINAL-YEAR STUDENT FROM da NaNG WHO BUILDS THINGS FOR PEOPLE
            WHO PREFER FEWER WORDS AND MORE MILES. <br /> MY BELIEF IN QUIET
            COMMUNITY, HONEST DESIGN, AND THE IDEA THAT SOMETIMES YOU JUST NEED
            SOMEONE RUNNING IN THE SAME DIRECTION, SHAPES EVERYTHING I CREATE.
          </span>
          {/* body text */}
          <span className="font-sans font-medium text-[#808080] px-20 leading-[23.4px]">
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
