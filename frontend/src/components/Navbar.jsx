import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setHidden(true); // hide on scroll down
      } else {
        setHidden(false); // show on scroll up
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`
        sticky top-0 z-50
        backdrop-blur-xl

        /* UPDATED COLOR — dark blue glass */
        bg-[rgba(20,26,40,0.55)]
        border-b border-[rgba(255,255,255,0.08)]
        shadow-[0_1px_15px_rgba(10,14,24,0.45)]

        transition-all duration-500
        ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 md:py-6 px-5">
        
        <div className="flex items-center gap-3">
          <div
            className="
                w-12 h-12 rounded-lg
                bg-gradient-to-br from-blue-700 to-indigo-800
                flex items-center justify-center
                text-white text-xl font-extrabold shadow-lg
              "
          >
            V
          </div>

          <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow">
            VyomGarud
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-blue-100/60">
          <button className="hover:text-white transition-colors duration-200">
            Home
          </button>
          <button className="hover:text-white transition-colors duration-200">
            Explore
          </button>
          <button className="hover:text-white transition-colors duration-200">
            Blog
          </button>
          <button className="hover:text-white transition-colors duration-200">
            Help
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            className="
              text-blue-100/60 hover:text-white 
              text-sm transition-colors duration-200
            "
          >
            Accessibility
          </button>
        </div>
      </div>
    </header>
  );
}
