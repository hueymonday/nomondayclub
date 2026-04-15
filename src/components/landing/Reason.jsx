import React from "react";

const Reason = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-end px-22 pt-32 pb-24 gap-14">
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
            src="https://framerusercontent.com/images/DOKNSZ9eBsnOzN4j5ECRs4berKE.png"
            alt="reason picture :)"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* bottom part */}
      <div className="w-full h-fit flex justify-between items-start gap-24 ">
        {/* members */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <span className="text-6xl leading-14 font-bold">
            90<span>+</span>
          </span>
          <span>Members</span>
        </div>

        {/* Weekly escapes */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <span className="text-6xl leading-14 font-bold">
            7<span>+</span>
          </span>
          <span>Weekly escapes</span>
        </div>

        {/* AM meetup */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <span className="text-6xl leading-14 font-bold">4:30</span>
          <span>AM meetup</span>
        </div>

        {/* Rule — no Mondays */}
        <div className="w-full h-fit pt-12 border-t-2 border-[#E1E1E1] flex flex-col gap-2 font-Manrope text-left">
          <span className="text-6xl leading-14 font-bold">1</span>
          <span>Rule — no Mondays</span>
        </div>
      </div>
    </section>
  );
};

export default Reason;
