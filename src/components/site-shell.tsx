import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-canvas text-muted-foreground">
      {/* Ambient depth layers — grain + vignette keep the ink canvas from reading flat */}
      <div className="grain fixed z-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(120%_80%_at_50%_0%,transparent_40%,oklch(0.1_0.02_264/0.55)_100%)]"
      />
      <div className="relative z-10">
        <SiteNav />
        <main className="pt-14">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
