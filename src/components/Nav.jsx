import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-22 font-Manrope leading-[1.5em] text-base">
      <div className="container mx-auto py-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <a href="/" className="font-semibold tracking-tighter text-white">
            NMC
          </a>

          <span className="rotate-90 font-sans text-sm font-bold text-gray-300/60">
            ——
          </span>

          <nav className="hidden md:flex items-center gap-7 text-white">
            <a href="#coaching" className="relative group">
              Coaching
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </a>
            <a href="#about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </a>
            <a href="#Schedule" className="relative group">
              Schedule
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </a>
            <a href="#Contact" className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-transform duration-500 ease-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-white font-mono -tracking-wider">
            16.099°N 108.255°E
          </span>

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
