import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/architecture", label: "Architecture" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground">
            {site.name}
          </Link>
          <div className="hidden items-center gap-6 md:flex">
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
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground ring-1 ring-border-strong transition-colors hover:opacity-90"
        >
          Resume
          <span className="text-[10px] opacity-50">PDF</span>
        </a>
      </div>
    </nav>
  );
}
