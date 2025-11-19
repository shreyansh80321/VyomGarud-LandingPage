import React from "react";

export default function Hero({ search, setSearch }) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[70%] h-[400px] bg-gradient-to-br from-blue-900/30 via-indigo-800/20 to-purple-900/30 rounded-full blur-[140px] opacity-60"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center px-6 animate-fadeIn">
        <div className="text-sm text-gray-400 mb-6 tracking-wide opacity-80">
          Home · Blog
        </div>

        <h1
          className="
          text-5xl md:text-7xl 
          font-extrabold tracking-tight 
          mb-6 text-white drop-shadow
        "
        >
          Explore Insightful Stories
        </h1>

        <p
          className="
          text-lg md:text-2xl 
          font-medium text-gray-300 
          max-w-3xl mx-auto 
          leading-relaxed opacity-90
        "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi dolorem consequuntur laborum, culpa vel voluptate, obcaecati voluptas, voluptatem provident assumenda iure at.
        </p>
        <div className="mt-12 max-w-xl mx-auto">
          <div className="relative group">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         text-gray-400 group-focus-within:text-blue-300
                         transition-all duration-300"
            >
              🔍
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="
                w-full py-4 pl-12 pr-4
                bg-white/10
                border border-white/20
                rounded-xl
                text-gray-100
                focus:outline-none
                placeholder:text-gray-400
                backdrop-blur-xl

                transition-all duration-300
                focus:border-blue-400/50
                focus:ring-2 focus:ring-blue-500/30
                hover:bg-white/15
              "
            />
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
