import React from "react";
import { images } from "../../config/media";

const MyVision = () => {
  return (
    <section className="w-full h-fit p-5 pt-14">
      {/* content */}
      <section className="w-full h-screen flex items-center justify-center">
        <span className="font-clash text-5xl font-semibold uppercase leading-[38.8px]">
          4:30AM. Before the noise. <br />
          Before the week owns you.
        </span>
      </section>

      {/* images */}
      <section className="w-full h-fit flex flex-col gap-24">
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
