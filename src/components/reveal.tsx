import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  style?: CSSProperties;
};

/**
 * Progressive-enhancement reveal.
 *
 * SSR / no-JS: the CSS animation runs immediately with `both` fill, so content
 * is always painted. With JS, the animation is paused on mount and resumed the
 * first time the element enters the viewport — a scroll-triggered reveal that
 * can never leave content invisible.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.9;
    if (alreadyVisible) return; // above the fold: let it play on load

    el.style.animationPlayState = "paused";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.animationPlayState = "running";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className ? `reveal ${className}` : "reveal"}
      style={{ ...style, ["--reveal-delay" as string]: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </Tag>
  );
}
