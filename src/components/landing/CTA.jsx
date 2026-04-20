import React from "react";
import { images } from "../../config/media";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative w-full h-[507.5px]">
      {/* background */}
      <div
        className="absolute inset-0 z-0 bg-cover object-cover bg-position-[52%_69%]"
        style={{
          backgroundImage: `url(${images.cta.track})`,
        }}
      />

      <div className="absolute inset-0 z-0 block bg-[radial-gradient(35%_42%_at_50%_50%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]" />

      {/* container */}
      <div className="absolute inset-0 z-10 my-auto w-full min-w-280 h-fit flex flex-col justify-center items-center gap-8">
        {/* CTA content */}
        <div className="font-Manrope flex flex-col items-center justify-center gap-4 text-center text-white">
          <span className="font-medium text-[52px] tracking-[-0.03em] leading-[1.3em]">
            Ready to Escape Monday?
          </span>
          <span className="text-base leading-[1.5em]">
            Show up once. You might just keep coming back.
          </span>
        </div>
        {/* button */}
        <Button
          variant="outline"
          className="group flex justify-between gap-2 h-11 text-black rounded-full pl-5 pr-1 hover:bg-gray-200"
        >
          <Link to="/join">Join the club</Link>
          <Button className="h-9 w-9 rounded-full">
            <ArrowUpRight className="duration-500 ease-in-out transition-transform group-hover:rotate-45" />
          </Button>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
