// src/utils/useScrollReveal.js
import React, { useEffect, useRef } from "react";

/**
 * useScrollReveal - returns a ref and toggles `reveal-visible` when element is in view.
 *
 * Options:
 *  - root = null
 *  - rootMargin = "0px 0px -10% 0px"
 *  - threshold = 0.12
 *  - duration = 600 (ms)
 *  - delay = 0 (ms)
 *  - direction = "up" | "down" | "left" | "right"
 *  - once = true (reveal only once)
 *  - stagger = false (if true, children will be staggered)
 */
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

    // set data attributes for CSS defaults
    el.dataset.direction = opts.direction;
    if (opts.stagger) el.dataset.stagger = "true";

    // create observer
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/**
 * Reveal component (wrapper)
 * Props:
 *  - children
 *  - className
 *  - duration (ms)
 *  - delay (ms)
 *  - direction
 *  - once
 *  - stagger
 */
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

  // merge style with transition-duration/delay handled in hook
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
