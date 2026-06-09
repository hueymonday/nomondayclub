import React from "react";
import { images } from "../../config/media";

const Schedule = () => {
  const schedule = [
    {
      id: 1,
      day: "MON",
      time: "5:30 AM",
      location: "Bach Dang Riverside",
      distance: "6km easy",
      image: images.schedule.sch1,
    },
    {
      id: 2,
      day: "WED",
      time: "5:30 AM",
      location: "My Khe Beach",
      distance: "8km tempo",
      image: images.schedule.sch2,
    },
    {
      id: 3,
      day: "SAT",
      time: "6:00 AM",
      location: "Son Tra Peninsula",
      distance: "10km long",
      image: images.schedule.sch3,
    },
  ];

  // Cursor effect — chỉ bind trên thiết bị không phải touch và màn hình đủ lớn
  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 768;

  const showCursorImage = (url) => {
    if (isTouchDevice || isSmallScreen) return;
    window.dispatchEvent(
      new CustomEvent("cursor:show-image", { detail: { url } }),
    );
  };

  const hideCursorImage = () => {
    if (isTouchDevice || isSmallScreen) return;
    window.dispatchEvent(new CustomEvent("cursor:hide-image"));
  };

  return (
    <section
      id="schedule"
      className="w-full h-full flex flex-col items-end justify-center gap-10 md:gap-20 pt-24 md:pt-45 py-10"
    >
      {/* Title */}
      <span className="w-full h-fit text-left px-5 md:px-6 text-5xl md:text-7xl tracking-[-0.05em] font-medium leading-[1.2em]">
        Schedule
      </span>

      {/* Banner */}
      <div className="w-full h-fit px-5 md:px-10 py-2 md:py-0 flex items-center justify-between bg-black text-white font-medium text-[12px] md:text-sm">
        <span>Escape</span>
        <span>No Monday Club</span>
        <span>Freedom</span>
        <span>Reset</span>
      </div>

      {/* Schedule list */}
      <div className="w-full md:w-188 h-fit md:gap-20 px-5">
        {schedule.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => showCursorImage(item.image)}
            onMouseLeave={hideCursorImage}
            className="schedule-item border-t-2 border-[#bbb]/20 py-7 md:py-10
                       flex items-center justify-between
                       md:gap-56"
          >
            {/* Left: số thứ tự + DAY */}
            <div className="flex items-center gap-6 md:gap-31">
              <span className="font-semibold text-sm w-6 shrink-0">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="font-semibold uppercase text-sm md:text-[19px] w-12 md:w-auto shrink-0">
                {item.day}
              </span>
            </div>

            {/* Right: time · location · distance */}
            <div className="font-semibold text-[12px] md:text-sm text-right md:text-left leading-snug">
              {item.time} · {item.location} · {item.distance}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
