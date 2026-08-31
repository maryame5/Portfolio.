import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { MouseSpotlight } from "./mouse-spotlight";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-canvas text-muted-foreground">
      <MouseSpotlight />

      {/* Top glowing scroll progress line */}
      <div
        className="fixed top-0 left-0 z-50 h-[2px] bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Ambient depth stack: drifting aurora → blueprint mesh → grain → vignette */}
      <div className="aurora-field z-0" aria-hidden />
      <div
        aria-hidden
        className="blueprint pointer-events-none fixed inset-0 z-0 opacity-90 [mask-image:radial-gradient(120%_90%_at_50%_0%,black_10%,transparent_75%)]"
      />
      <div className="grain fixed z-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(120%_80%_at_50%_0%,transparent_45%,oklch(0.12_0.02_268/0.42)_100%)]"
      />
      <div className="relative z-10">
        <SiteNav />
        <main key={pathname} className="route-enter pt-14">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
