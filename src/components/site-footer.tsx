import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="glow-orb -bottom-40 left-1/3 h-72 w-72 bg-accent/20" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src={site.logoUrl ?? "/logo.png"}
                alt={site.name}
                className="h-10 w-10 rounded-xl object-cover border border-border-strong"
              />
              <p className="text-lg font-medium text-foreground">{site.name}</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{site.role} — {site.location}</p>
            <p className="mt-6 text-sm text-subtle">
              Frontend, backend, multi-agent analytics &amp; distributed Java microservices — built and integrated end-to-end.
            </p>

          </div>
          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div className="space-y-3">
              <p className="eyebrow">Navigate</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/experience" className="text-muted-foreground hover:text-accent">Experience</Link>
                <Link to="/projects" className="text-muted-foreground hover:text-accent">Projects</Link>
                <Link to="/architecture" className="text-muted-foreground hover:text-accent">Architecture</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-accent">Contact</Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="eyebrow">Reach out</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
                  <Mail className="h-3.5 w-3.5" /> {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
                  <Phone className="h-3.5 w-3.5" /> {site.phone}
                </a>
                <a href={site.socials.linkedin} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href={site.socials.github} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-subtle md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Available {site.availability.startDate} — {site.availability.type}</span>
        </div>
      </div>
    </footer>
  );
}
