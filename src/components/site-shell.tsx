import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative min-h-screen bg-canvas text-muted-foreground">
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
