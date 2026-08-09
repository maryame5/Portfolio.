import type { CSSProperties, ReactNode } from "react";

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
 * Pure CSS: the element is painted by the browser's animation with `both` fill,
 * so it becomes visible even if JavaScript never hydrates. No SSR opacity:0
 * inline style is emitted, and `prefers-reduced-motion` collapses it instantly.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  style,
}: RevealProps) {
  return (
    <Tag
      className={className ? `reveal ${className}` : "reveal"}
      style={{ ...style, ["--reveal-delay" as string]: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </Tag>
  );
}
