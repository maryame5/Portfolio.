import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-muted-foreground">
      <SiteNav />
      <main className="pt-14">{children}</main>
      <SiteFooter />
    </div>
  );
}
