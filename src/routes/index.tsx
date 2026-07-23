import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/content/site";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { architectureCases } from "@/content/architecture";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.role}` },
      { name: "description", content: site.tagline },
      { property: "og:title", content: `${site.name} — ${site.role}` },
      { property: "og:description", content: site.tagline },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-2.5 py-0.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
              {site.availability}
            </span>
          </div>
          <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {site.role}
          </h1>
          <p className="mx-auto mb-10 max-w-[46ch] text-pretty text-lg text-muted-foreground md:text-xl">
            {site.tagline}
          </p>
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-border-strong transition-colors hover:opacity-90"
            >
              View engineering case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="eyebrow">Career trajectory</h2>
            <Link to="/experience" className="text-xs text-muted-foreground hover:text-foreground">
              All experience →
            </Link>
          </div>
          <div className="grid gap-px bg-border">
            {experiences.map((e) => (
              <div
                key={e.slug}
                className="flex flex-col justify-between gap-4 bg-canvas py-8 md:flex-row md:items-baseline"
              >
                <div>
                  <h3 className="font-medium text-foreground">
                    {e.role} at {e.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.context}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-subtle">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-surface/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="eyebrow">Case studies</h2>
            <Link to="/projects" className="text-xs text-muted-foreground hover:text-foreground">
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.slug}
                className="rounded-xl bg-surface p-6 ring-1 ring-border transition-colors hover:ring-border-strong"
              >
                <h3 className="mb-3 font-medium text-foreground">{p.name}</h3>
                <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <p className="text-xs font-mono text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="eyebrow">System thinking</h2>
            <Link to="/architecture" className="text-xs text-muted-foreground hover:text-foreground">
              All case studies →
            </Link>
          </div>
          <div className="space-y-12">
            {architectureCases.map((c) => (
              <div key={c.slug} className="max-w-[62ch]">
                <h3 className="mb-4 text-xl font-medium text-foreground">{c.title}</h3>
                <p className="mb-6 text-muted-foreground">{c.businessProblem}</p>
                <div className="border-l-2 border-accent/40 bg-accent-soft/40 p-5">
                  <p className="text-sm italic text-foreground/90">
                    Decision: {c.decisions[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
