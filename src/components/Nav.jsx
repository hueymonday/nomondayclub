import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getLenis } from "@/hooks/useSmoothScroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element, { offset: 0, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navButtonClass =
    "relative group bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit text-white";

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-5 md:px-22 font-Manrope leading-[1.5em] text-base">
      <div className="container mx-auto py-5 md:py-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="font-semibold tracking-tighter text-white bg-transparent border-none cursor-pointer p-0"
          >
            NMC
          </button>

          <span className="hidden md:block rotate-90 font-sans text-sm font-bold text-gray-300/60">
            ——
          </span>

          {/* Desktop nav links — ẩn trên mobile */}
          <nav className="hidden md:flex items-center gap-7 text-white">
            <button
              onClick={() => scrollToSection("coaching")}
              className={navButtonClass}
            >
              Coaching
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={navButtonClass}
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100" />
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className={navButtonClass}
            >
              Schedule
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={navButtonClass}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100" />
            </button>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Tọa độ — ẩn trên mobile cho đỡ chật */}
          <span className="hidden sm:block text-white font-mono -tracking-wider">
            16.099°N 108.255°E
          </span>

          {/* Hamburger — chỉ hiện trên mobile */}
          <button
            className="md:hidden text-white bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-start gap-0 px-5 py-4">
          {["coaching", "about", "schedule", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="w-full text-left text-white py-3 border-b border-white/10 bg-transparent border-none cursor-pointer capitalize text-base font-Manrope last:border-b-0"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          {/* Tọa độ — hiện trong menu mobile */}
          <span className="text-white/50 font-mono text-sm pt-4">
            16.099°N 108.255°E
          </span>
        </div>
      )}
    </header>
  );
}
