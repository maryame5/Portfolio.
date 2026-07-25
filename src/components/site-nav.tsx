import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { site } from "@/content/site";

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/architecture", label: "Architecture" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        elevated
          ? "border-b border-border bg-canvas/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "border-b border-transparent bg-canvas/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
            {site.name}
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <a
          href={site.resumeUrl}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground ring-1 ring-border-strong transition-opacity hover:opacity-90"
        >
          <Download className="h-3.5 w-3.5" strokeWidth={2} />
          Resume
        </a>
      </div>
    </nav>
  );
}
