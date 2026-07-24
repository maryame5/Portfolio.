import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { site, principles } from "@/content/site";
import { experiences } from "@/content/experience";
import { projects, flagshipProject } from "@/content/projects";
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
  const otherProjects = projects.filter((p) => !p.flagship);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="px-6 pt-32 pb-28 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
              {site.availability}
            </span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-[4.25rem]">
            {site.role}.
            <br />
            <span className="text-subtle">Engineered for production.</span>
          </h1>

          <p className="mt-8 max-w-[54ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              Download Resume
              <span className="font-mono text-[10px] text-subtle">PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Flagship — Intelligent Analytics */}
      <section className="border-t border-border bg-surface/40 py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <div>
              <p className="eyebrow">Flagship case study</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                {flagshipProject.name}
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1.5"
            >
              Full write-up <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {flagshipProject.summary}
              </p>

              <div className="mt-8 border-l-2 border-accent pl-5">
                <p className="eyebrow mb-2 text-accent">Outcome</p>
                <p className="text-pretty text-foreground">
                  {flagshipProject.outcome}
                </p>
              </div>

              <div className="mt-8">
                <p className="eyebrow mb-4">Key engineering decisions</p>
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {flagshipProject.keyDecisions.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              {flagshipProject.metrics && (
                <div className="grid gap-px overflow-hidden rounded-lg bg-border ring-1 ring-border">
                  {flagshipProject.metrics.map((m) => (
                    <div key={m.label} className="bg-canvas p-5">
                      <p className="eyebrow">{m.label}</p>
                      <p className="mt-2 font-mono text-lg text-foreground">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <p className="eyebrow mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {flagshipProject.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-canvas px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Engineering principles</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
              How I approach software.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A short set of commitments that shape every decision — from architecture to
              the last shipped commit.
            </p>
          </div>

          <ol className="grid gap-px overflow-hidden bg-border ring-1 ring-border md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.id} className="flex gap-5 bg-canvas p-6 md:p-7">
                <span className="font-mono text-xs text-subtle">{p.id}</span>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-baseline justify-between">
            <div>
              <p className="eyebrow">Career trajectory</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Experience.
              </h2>
            </div>
            <Link
              to="/experience"
              className="font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              All experience →
            </Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {experiences.map((e) => (
              <div
                key={e.slug}
                className="flex flex-col justify-between gap-3 py-6 md:flex-row md:items-baseline md:gap-8"
              >
                <div className="flex-1">
                  <h3 className="text-base font-medium text-foreground">
                    {e.role} · {e.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.context}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-subtle">
                  {e.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture — first-class */}
      <section className="border-t border-border bg-surface/40 py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 flex items-baseline justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">System thinking</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Architecture as a product decision.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Case studies grounded in real business constraints — the trade-offs I
                considered and the decisions I would defend in a technical review.
              </p>
            </div>
            <Link
              to="/architecture"
              className="hidden shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1.5"
            >
              All case studies <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {architectureCases.map((c) => (
              <article
                key={c.slug}
                className="flex flex-col rounded-lg border border-border bg-canvas p-7 hover:border-border-strong"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.businessProblem}
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="eyebrow mb-2">Key decision</p>
                  <p className="text-sm text-foreground/90">
                    {c.decisions[0]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-baseline justify-between">
            <div>
              <p className="eyebrow">More work</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                Selected projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              All projects →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {otherProjects.map((p) => (
              <article
                key={p.slug}
                className="rounded-lg border border-border bg-canvas p-6 hover:border-border-strong"
              >
                <h3 className="font-medium text-foreground">{p.name}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <p className="mt-5 font-mono text-[11px] text-accent">
                  {p.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
