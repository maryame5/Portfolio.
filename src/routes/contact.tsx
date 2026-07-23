import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Get in touch with ${site.name}, ${site.role}.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: `Get in touch with ${site.name}.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="px-6 pt-24 pb-32">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            Let's talk about your product.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted-foreground">
            The fastest way to reach me is by email. I read every message and reply within a
            couple of business days.
          </p>

          <div className="mt-16 grid gap-px bg-border">
            <a
              href={`mailto:${site.email}`}
              className="flex items-baseline justify-between bg-canvas py-6 transition-colors hover:text-foreground"
            >
              <span className="eyebrow">Email</span>
              <span className="font-mono text-sm text-foreground">{site.email}</span>
            </a>
            <a
              href={site.socials.linkedin}
              className="flex items-baseline justify-between bg-canvas py-6 transition-colors hover:text-foreground"
            >
              <span className="eyebrow">LinkedIn</span>
              <span className="font-mono text-sm text-foreground">/in/yourhandle</span>
            </a>
            <a
              href={site.socials.github}
              className="flex items-baseline justify-between bg-canvas py-6 transition-colors hover:text-foreground"
            >
              <span className="eyebrow">GitHub</span>
              <span className="font-mono text-sm text-foreground">@yourhandle</span>
            </a>
            <a
              href={site.resumeUrl}
              className="flex items-baseline justify-between bg-canvas py-6 transition-colors hover:text-foreground"
            >
              <span className="eyebrow">Resume</span>
              <span className="font-mono text-sm text-foreground">Download PDF</span>
            </a>
          </div>

          <p className="mt-16 text-sm text-subtle">
            Based in {site.location}. Working across time zones.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
