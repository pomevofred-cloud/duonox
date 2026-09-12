"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/* Respect prefers-reduced-motion — motion off, content shown immediately. */
function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setR(m.matches);
    on();
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return r;
}

/* Fire once when the element scrolls into view. */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Count a number up from 0 to `value` when in view. */
export function CountUp({
  value,
  decimals = 0,
  duration = 1500,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReduced();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) raf = requestAnimationFrame(loop);
      else setN(value);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* Fade + slide up when in view. Polymorphic via `as`. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
  threshold = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const reduced = useReduced();
  const show = inView || reduced;
  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : `translateY(${y}px)`,
        transition: `opacity 0.7s ${EASE} ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/* Word-by-word editorial reveal. `segments` keep per-part styling (e.g. muted tail). */
export function RevealWords({
  segments,
  className = "",
  stagger = 42,
  y = 26,
  threshold = 0.2,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
  stagger?: number;
  y?: number;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLParagraphElement>(threshold);
  const reduced = useReduced();
  const show = inView || reduced;
  let i = -1;
  return (
    <p ref={ref} className={className}>
      {segments.map((seg, si) =>
        seg.text.split(" ").map((w, wi) => {
          i += 1;
          return (
            <span
              key={`${si}-${wi}`}
              className={seg.className}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                opacity: show ? 1 : 0,
                transform: show ? "none" : `translateY(${y}px)`,
                transition: `opacity 0.6s ease ${i * stagger}ms, transform 0.6s ${EASE} ${i * stagger}ms`,
              }}
            >
              {w}
              {" "}
            </span>
          );
        })
      )}
    </p>
  );
}

/* A progress bar that fills from 0 to `width` when in view. */
export function BarFill({
  width,
  className = "",
  trackClassName = "",
  duration = 1100,
  delay = 0,
}: {
  width: string;
  className?: string;
  trackClassName?: string;
  duration?: number;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const reduced = useReduced();
  const show = inView || reduced;
  return (
    <div ref={ref} className={`overflow-hidden ${trackClassName}`}>
      <div
        className={className}
        style={{
          width: show ? width : "0%",
          transition: `width ${duration}ms ${EASE} ${delay}ms`,
        }}
      />
    </div>
  );
}

/* Segmented bar whose filled segments light up left-to-right. */
export function SegmentBar({
  total,
  filled,
  activeClass,
  inactiveClass,
  className = "",
  gap = 3,
  height = 24,
  stagger = 34,
}: {
  total: number;
  filled: number;
  activeClass: string;
  inactiveClass: string;
  className?: string;
  gap?: number;
  height?: number;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const reduced = useReduced();
  const show = inView || reduced;
  return (
    <div ref={ref} className={className} style={{ display: "flex", gap }}>
      {Array.from({ length: total }).map((_, i) => {
        const on = i < filled;
        return (
          <span
            key={i}
            className={on ? activeClass : inactiveClass}
            style={{
              flex: 1,
              height,
              transformOrigin: "bottom",
              opacity: on ? (show ? 1 : 0) : 1,
              transform: on ? (show ? "scaleY(1)" : "scaleY(0.5)") : "scaleY(1)",
              transition: `opacity 0.4s ease ${on ? i * stagger : 0}ms, transform 0.4s ${EASE} ${on ? i * stagger : 0}ms`,
            }}
          />
        );
      })}
    </div>
  );
}
