import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../Nav";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-22 flex items-center font-Manrope">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/DOKNSZ9eBsnOzN4j5ECRs4berKE.png)",
        }}
      />

      <div className="absolute inset-0 z-0 block bg-[radial-gradient(33%_42%_at_69%_59.4%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />

      <Navbar />

      <div className="relative z-10 mt-40 h-fit w-full flex gap-10 text-white">
        {/* top part */}
        <div className="h-full w-1/2 flex flex-col items-start gap-9">
          {/* content */}
          <div className="flex w-full max-w-4xl flex-col items-start">
            <div className="flex items-center gap-3 -mb-1">
              <span className="font-[inter]">——</span>
              <span>No Mondays. Just miles.</span>
            </div>

            <h1 className="-tracking-[0.14rem] font-['Inter'] font-bold ">
              NMC — No Monday Club
            </h1>

            <p className="text-base text-left text-white">
              No Monday Club is Da Nang’s first anti-Monday running crew. We
              meet before the city wakes. We run not because we have to — but
              because it resets everything.
            </p>
          </div>
          {/* button */}
          <Button
            variant="outline"
            className="group flex justify-between gap-2 h-11 text-black rounded-full pl-5 pr-1 hover:bg-gray-200"
          >
            Start now
            <Button className="h-9 w-9 rounded-full">
              <ArrowUpRight className="duration-500 ease-in-out transition-transform group-hover:rotate-45" />
            </Button>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
