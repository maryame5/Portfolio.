import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-foreground">{site.name}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Designed and engineered with attention to detail.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <p className="eyebrow">Navigation</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/experience" className="text-muted-foreground hover:text-foreground">Experience</Link>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
                <Link to="/architecture" className="text-muted-foreground hover:text-foreground">Architecture</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="eyebrow">Elsewhere</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href={site.socials.linkedin} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href={site.socials.github} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
                <a href={site.resumeUrl} className="text-muted-foreground hover:text-foreground">Resume (PDF)</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col-reverse justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-subtle md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
