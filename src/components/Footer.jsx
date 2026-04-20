import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-10">
      {/* navigation links */}
      <div className="w-full h-fit p-5.5 font-semibold flex justify-between border-b-[1.5px] border-[#BBBBBB]/20">
        {/* nav */}
        <div className="w-fit flex-col text-left text-sm">
          <span>Quick Links</span>
          <div className="text-[#999] [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:text-black/60">
            <Link to="/">Home, </Link>
            <Link to="/">About, </Link>
            <Link to="/">Schedule, </Link>
            <Link to="/">Contact</Link>
          </div>
        </div>

        {/* Networks */}
        <div className="w-fit flex-col text-right text-sm">
          <span>Networks</span>
          <div className="text-[#999] [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:text-black/60">
            <Link to="/">Instagram, </Link>
            <Link to="/">Facebook, </Link>
            <Link to="/">Twitter, </Link>
            <Link to="/">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="w-full -mt-1.5 pb-5 h-2/3 max-h-120 min-h-48 overflow-hidden">
        <span className="w-full h-full -ml-4 flex items-center justify-center font-['Inter'] font-semibold text-[clamp(8rem,31vw,28rem)] leading-[0.8] tracking-[-0.06em] text-center">
          ©2026
        </span>
      </div>
    </footer>
  );
};

export default Footer;
