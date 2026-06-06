import { Menu } from "lucide-react";

export default function Navbar() {
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

  // Style chung cho các button nav (để trông giống hệt thẻ a)
  const navButtonClass =
    "relative group bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit text-white";

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-22 font-Manrope leading-[1.5em] text-base">
      <div className="container mx-auto py-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="font-semibold tracking-tighter text-white bg-transparent border-none cursor-pointer p-0"
          >
            NMC
          </button>

          <span className="rotate-90 font-sans text-sm font-bold text-gray-300/60">
            ——
          </span>

          <nav className="hidden md:flex items-center gap-7 text-white">
            <button
              onClick={() => scrollToSection("coaching")}
              className={navButtonClass}
            >
              Coaching
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={navButtonClass}
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </button>

            <button
              onClick={() => scrollToSection("schedule")}
              className={navButtonClass}
            >
              Schedule
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={navButtonClass}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </button>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-white font-mono -tracking-wider">
            16.099°N 108.255°E
          </span>

          <button className="md:hidden text-white bg-transparent border-none cursor-pointer">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
