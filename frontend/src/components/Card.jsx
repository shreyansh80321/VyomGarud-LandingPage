import React from "react";
import { getFullMediaUrl } from "../lib/api";
import { Link } from "react-router-dom";
import { Reveal } from "../utils/useScrollReveal"; // ← ADD THIS IMPORT

export default function Card({ item }) {
  const attrs = item;

  const img =
    attrs.cover?.formats?.medium?.url ||
    attrs.cover?.formats?.small?.url ||
    attrs.cover?.formats?.thumbnail?.url ||
    attrs.cover?.url;

  const coverUrl = img
    ? getFullMediaUrl(img)
    : "https://picsum.photos/800/500?random=" + attrs.id;

  return (
    <Reveal
      direction="up" // animation direction
      duration={650} // animation duration in ms
      delay={80} // delay for staggered feel
      className="snap-start flex-shrink-0"
    >
      <div
        className="
          group
          w-[260px] md:w-[300px]
          aspect-square
          relative rounded-2xl overflow-hidden
          transition-all duration-500
        "
        style={{ flex: "0 0 auto" }}
      >
        {/* Image (fills the square) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={coverUrl}
            alt={attrs.title}
            className="
              w-full h-full object-cover
              transition-all duration-500
              group-hover:scale-110
              group-hover:brightness-50
            "
          />
        </div>

        {/* Dark overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/60 via-black/30 to-transparent
            transition-all duration-500
            group-hover:from-black/90 group-hover:via-black/90
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Title (hides on hover) */}
          <h3
            className="
              text-xl md:text-2xl font-bold leading-snug
              transition-all duration-500
              group-hover:opacity-0 group-hover:translate-y-4
            "
          >
            {attrs.title}
          </h3>

          {/* Date (hides on hover) */}
          <div
            className="
              text-sm text-gray-300 mt-2
              transition-all duration-500
              group-hover:opacity-0 group-hover:translate-y-4
            "
          >
            {new Date(
              attrs.publishedAt || attrs.publishedat || attrs.createdAt
            ).toLocaleDateString("en-US")}
          </div>

          {/* Centered Description on Hover */}
          <p
            className="
              absolute inset-0
              flex items-center justify-center
              text-center px-6
              text-gray-200 text-sm leading-relaxed

              opacity-0 translate-y-6
              transition-all duration-500

              group-hover:opacity-100 
              group-hover:translate-y-0
            "
          >
            {attrs.excerpt}
          </p>

          {/* Arrow */}
          <Link
            to={`/articles/${attrs.slug}`}
            aria-label={`Read ${attrs.title}`}
            className="
              absolute top-4 right-4 z-30
              inline-flex items-center justify-center
              w-14 h-14 rounded-full bg-white text-black
              shadow-lg ring-1 ring-white/20
              transform transition-all duration-300
              hover:scale-110 hover:bg-orange-400
              focus:outline-none focus:ring-2 focus:ring-orange-400/50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
