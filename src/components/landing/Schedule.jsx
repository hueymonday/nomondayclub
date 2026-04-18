import React from "react";

const Schedule = () => {
  const schedule = [
    {
      id: 1,
      day: "MON",
      time: "5:30 AM",
      location: "Bach Dang Riverside",
      distance: "6km easy",
    },
    {
      id: 2,
      day: "WED",
      time: "5:30 AM",
      location: "My Khe Beach",
      distance: "8km tempo",
    },
    {
      id: 3,
      day: "SAT",
      time: "6:00 AM",
      location: "Son Tra Peninsula",
      distance: "10km long",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col items-end justify-center gap-20 pt-45 py-10">
      <span className="w-full h-fit text-left px-6 text-7xl tracking-[-0.05em] font-medium leading-[1.2em]">
        Schedule
      </span>

      {/* banner */}
      <div className="w-full h-fit px-10 flex items-center justify-between bg-black text-white font-medium">
        <span>Escape</span>
        <span>No Monday Club</span>
        <span>Freedom</span>
        <span>Reset</span>
      </div>

      {/* schedule content */}
      <div className="w-180 h-fit gap-20">
        {/* content */}
        {schedule.map((item, index) => (
          <div className="font-semibold text-sm flex items-center gap-56 py-10 border-t-2 border-[#bbb]/20">
            {/* left */}
            <div className="w-1fr flex gap-31 justify-between items-center">
              <span>{(index + 1).toString().padStart(2, "0")}</span>
              <span className="font-medium uppercase text-[19px]">
                {item.day}
              </span>
            </div>

            {/* right */}
            <div>
              {item.time} · {item.location} · {item.distance}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
