
import React, { useEffect, useRef } from "react";


export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const opts = {
    root: options.root ?? null,
    rootMargin: options.rootMargin ?? "0px 0px -12% 0px",
    threshold: options.threshold ?? 0.12,
    duration: options.duration ?? 600,
    delay: options.delay ?? 0,
    direction: options.direction ?? "up",
    once: options.once ?? true,
    stagger: options.stagger ?? false,
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.dataset.direction = opts.direction;
    if (opts.stagger) el.dataset.stagger = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // set inline styles for duration & delay (ms -> s)
            target.style.transitionDuration = `${opts.duration}ms`;
            target.style.transitionDelay = `${opts.delay}ms`;

            // stagger children if requested
            if (opts.stagger) {
              const children = Array.from(target.children);
              children.forEach((child, i) => {
                const per = 80; // ms per item
                child.style.transitionDelay = `${
                  (opts.delay || 0) + i * per
                }ms`;
              });
            }

            target.classList.add("reveal-visible");

            if (opts.once) {
              observer.unobserve(target);
            }
          } else {
            if (!opts.once) {
              // hide again for repeatable reveal
              target.classList.remove("reveal-visible");
            }
          }
        });
      },
      {
        root: opts.root,
        rootMargin: opts.rootMargin,
        threshold: opts.threshold,
      }
    );

    // add base class
    if (!el.classList.contains("reveal")) el.classList.add("reveal");

    observer.observe(el);

    return () => {
      observer.disconnect();
      // cleanup inline styles if needed
      if (el) {
        el.style.transitionDuration = "";
        el.style.transitionDelay = "";
      }
    };
  }, []);

  return ref;
}


export function Reveal({
  children,
  className = "",
  duration = 600,
  delay = 0,
  direction = "up",
  once = true,
  stagger = false,
  style = {},
  ...rest
}) {
  const ref = useScrollReveal({
    duration,
    delay,
    direction,
    once,
    stagger,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-direction={direction}
      data-stagger={stagger ? "true" : undefined}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
