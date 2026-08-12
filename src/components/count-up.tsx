import { useEffect, useRef, useState } from "react";

/**
 * One-time count-up on real values. Renders the final value on the server and
 * for reduced-motion users; animates 0 → value once when scrolled into view.
 * Accepts "29", "3rd", "30+", "09" — prefix digits animate, suffix is kept.
 */
export function CountUp({ value, duration = 600 }: { value: string; duration?: number }) {
  const match = /^(\d+)(.*)$/.exec(value.trim());
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const pad = match ? match[1].length : 0;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const n = Math.round(target * eased);
        setDisplay(String(n).padStart(pad, "0") + suffix);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    setDisplay(String(0).padStart(pad, "0") + suffix);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            run();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
