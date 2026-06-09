import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Hàm scroll mượt đến section tương ứng
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full flex flex-col gap-10 max-sm:gap-6">
      {/* navigation links */}
      <div className="w-full h-fit p-5.5 max-sm:p-5 font-semibold flex max-sm:flex-col max-sm:gap-6 justify-between border-b-[1.5px] border-[#BBBBBB]/20">
        {/* nav */}
        <div className="w-fit flex-col text-left text-sm">
          <span>Quick Links</span>
          <div className="text-[#999] [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:text-black/60 [&>button]:transition-colors [&>button]:duration-300 [&>button:hover]:text-black/60">
            <a
              onClick={scrollToTop}
              className="bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit"
            >
              Home,{" "}
            </a>

            <a
              onClick={() => scrollToSection("about")}
              className="bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit"
            >
              About,{" "}
            </a>

            <a
              onClick={() => scrollToSection("schedule")}
              className="bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit"
            >
              Schedule,{" "}
            </a>

            <a
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Networks */}
        <div className="w-fit flex-col text-left max-sm:text-left text-right text-sm">
          <span>Networks</span>
          <div className="text-[#999] [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:text-black/60">
            <a
              href="https://www.instagram.com/nmc.danang"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram,{" "}
            </a>
            <a href="" className="">
              Facebook,{" "}
            </a>
            <a href="" className="">
              Twitter,{" "}
            </a>
            <a href="" className="">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="w-full -mt-1.5 pb-5 h-2/3 max-h-120 min-h-48 max-sm:min-h-32 overflow-hidden">
        <span className="w-full h-full -ml-4 flex items-center justify-center font-['Inter'] font-semibold text-[clamp(8 rem,19vw,12rem)] md:text-[clamp(8rem,31vw,28rem)] leading-[0.8] tracking-[-0.06em] text-center">
          ©2026
        </span>
      </div>
    </footer>
  );
};

export default Footer;
