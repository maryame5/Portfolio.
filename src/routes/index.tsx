import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { site, principles } from "@/content/site";
import { experiences } from "@/content/experience";
import { projects, flagshipProject } from "@/content/projects";
import { technologyDomains } from "@/content/technologies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.role}` },
      { name: "description", content: site.intro },
      { property: "og:title", content: `${site.name} — ${site.role}` },
      { property: "og:description", content: site.intro },
    ],
  }),
  component: Home,
});

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-accent">{index}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Home() {
  const caseStudies = projects.slice(0, 3);

  return (
    <SiteShell>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pt-28 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
                {site.availability}
              </span>
            </div>

            <p className="font-mono text-sm text-muted-foreground">
              {site.greeting}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-[4.25rem]">
              {site.headline}.
            </h1>

            <p className="mt-6 max-w-[46ch] text-pretty text-xl leading-snug text-foreground/80">
              {site.tagline}
            </p>

            <p className="mt-6 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground">
              {site.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-px hover:opacity-95"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                Download Resume
                <span className="font-mono text-[10px] text-subtle">PDF</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center md:justify-end">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="border-t border-border bg-surface/50 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel index="01">Featured project</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14">
            <Reveal>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {flagshipProject.name}
                </h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {flagshipProject.summary}
                </p>

                <div className="mt-6 border-l-2 border-accent pl-5">
                  <p className="eyebrow mb-2 text-accent">Business impact</p>
                  <p className="text-pretty text-foreground/90">
                    {flagshipProject.outcome}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-1.5">
                  {flagshipProject.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-canvas px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Architecture preview */}
              <div className="rounded-xl border border-border bg-canvas p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                    architecture.preview
                  </span>
                  <span className="font-mono text-[10px] text-subtle">v1.0</span>
                </div>

                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-border ring-1 ring-border">
                  {[
                    "Ingest",
                    "Warehouse",
                    "dbt",
                    "Semantic",
                    "Planner",
                    "SQL",
                    "Executor",
                    "Narrator",
                    "Audit",
                  ].map((label, i) => (
                    <div
                      key={label}
                      className={`bg-canvas p-4 text-center ${
                        i === 4 ? "bg-accent-soft" : ""
                      }`}
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-sm font-medium text-foreground">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {flagshipProject.metrics && (
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {flagshipProject.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="eyebrow">{m.label}</p>
                        <p className="mt-2 font-mono text-sm text-foreground">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel index="02">Professional experience</SectionLabel>
            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Engineering roles across enterprise, finance and public services.
              </h2>
              <Link
                to="/experience"
                className="hidden shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1.5"
              >
                All experience <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {experiences.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_rgba(24,24,32,0.18)]">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] text-accent">
                      {e.period.split(" ")[0]}
                    </p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {e.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {e.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {e.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <Link
                      to="/experience"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 group-hover:text-accent"
                    >
                      View details
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING PRINCIPLES ================= */}
      <section className="border-t border-border bg-surface/50 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel index="03">Engineering principles</SectionLabel>
            <div className="mt-6 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                How I approach software.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A short set of commitments that shape every decision — from architecture
                to the last shipped commit.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.id} delay={i * 0.06}>
                  <div className="flex h-full flex-col bg-canvas p-7">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[11px] text-subtle">
                        {p.id}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel index="04">Selected case studies</SectionLabel>
            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Products shipped, decisions I would defend.
              </h2>
              <Link
                to="/projects"
                className="hidden shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1.5"
              >
                All projects <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-canvas transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_rgba(24,24,32,0.18)]">
                  {/* Screenshot placeholder */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-gradient-to-br from-surface to-canvas">
                    <div className="absolute inset-0 opacity-40" style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }} />
                    <div className="absolute left-4 top-4 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-lg border border-border bg-canvas/95 px-4 py-2 font-mono text-[11px] text-muted-foreground shadow-sm">
                        {p.slug}.app
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.problem}
                    </p>
                    <div className="mt-5 rounded-md border border-border bg-surface p-4">
                      <p className="eyebrow mb-2">Engineering highlight</p>
                      <p className="text-sm text-foreground/90">
                        {p.engineeringHighlight}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-1 items-end">
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent"
                      >
                        View case study
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY PHILOSOPHY ================= */}
      <section className="border-t border-border bg-surface/50 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel index="05">Technology philosophy</SectionLabel>
            <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Technology is a means, not the goal.
              </h2>
              <p className="max-w-[54ch] text-pretty text-muted-foreground">
                Every stack choice serves a business objective — reliability, speed to
                insight, cost of change. The list below reflects what I reach for by
                default, not what I could add to a résumé.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border md:grid-cols-2 lg:grid-cols-3">
            {technologyDomains.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.05}>
                <div className="flex h-full flex-col bg-canvas p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {d.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {d.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="border-t border-border py-28 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionLabel index="06">
              <>Get in touch</>
            </SectionLabel>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Let's build something impactful.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-muted-foreground">
              I'm open to engineering roles and consulting engagements where thoughtful
              architecture and AI-driven products create real leverage.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.socials.linkedin}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={site.socials.github}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-canvas px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-canvas px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-canvas px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
