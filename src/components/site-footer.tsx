import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">{site.name}</p>
            <p className="max-w-[36ch] text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <p className="eyebrow">Navigation</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                <Link to="/experience" className="text-muted-foreground hover:text-foreground">Experience</Link>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
                <Link to="/architecture" className="text-muted-foreground hover:text-foreground">Architecture</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="eyebrow">Elsewhere</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href={site.resumeUrl} className="text-muted-foreground hover:text-foreground">Resume (PDF)</a>
                <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground">Email</a>
                <a href={site.socials.github} className="text-muted-foreground hover:text-foreground">GitHub</a>
                <a href={site.socials.linkedin} className="text-muted-foreground hover:text-foreground">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-between text-[11px] font-mono text-subtle">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Built for reliability.</span>
        </div>
      </div>
    </footer>
  );
}
