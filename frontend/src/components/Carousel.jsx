import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Carousel({
  title,
  slug,
  items = [],
  moreButton = true,
}) {
  const sc = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sc.current;
    if (!el) return;
    const onScroll = () => {
      const p = Math.min(
        1,
        el.scrollLeft / (el.scrollWidth - el.clientWidth || 1)
      );
      setProgress(p);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-extrabold">{title}</h2>

          {moreButton && (
            <Link
              to={`/category/${slug}`}
              className="border border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
            >
              More
            </Link>
          )}
        </div>

        <div
          ref={sc}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-hide"
        >
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6">
          <div className="h-1 bg-gray-700 rounded-full w-48 relative">
            <div
              className="absolute left-0 top-0 h-1 bg-white rounded-full"
              style={{
                width: `${Math.round(progress * 100)}%`,
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
