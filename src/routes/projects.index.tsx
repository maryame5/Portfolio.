import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { MockVisual } from "@/components/case-study/mock-visual";
import { caseStudies } from "@/content/case-studies";
import { projects, type Project } from "@/content/projects";
import { site } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: `Projects & case studies — ${site.name}` },
      {
        name: "description",
        content:
          "Nine engineering projects and three in-depth case studies: business problem, architecture, decisions, trade-offs and measurable outcomes.",
      },
      { property: "og:title", content: `Projects & case studies — ${site.name}` },
      {
        property: "og:description",
        content:
          "Product-first engineering work: multi-agent AI, distributed Java backends, data pipelines and full-stack platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

/** Projects that have a long-form case study page. */
const caseStudyBySlug: Record<string, string> = {
  "intelligent-analytics": "intelligent-analytics",
  "cqos-trading-platform": "admin-crm-service",
  "aos-micepp-portal": "aos-micepp",
};

function domainOf(p: Project) {
  const c = p.category.toLowerCase();
  if (c.includes("ai") || c.includes("agent") || c.includes("machine learning") || c.includes("nlp"))
    return "AI & Data";
  if (c.includes("data")) return "AI & Data";
  if (c.includes("java") || c.includes("backend") || c.includes("microservices")) return "Backend";
  return "Full-Stack";
}

const filters = ["All", "AI & Data", "Backend", "Full-Stack"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => domainOf(p) === filter)),
    [filter],
  );

  return (
    <SiteShell>
      <section className="section-aura px-6 pt-24 pb-14">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-6">Projects</p>
          <h1 className="max-w-[20ch] text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Nine engagements, three{" "}
            <span className="serif-accent text-gradient">deep dives</span>.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
            The three flagship systems are documented the way an engineering team documents
            its own work — business problem first, architecture and decisions next, technology
            last. The rest of the catalogue is below.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {[
              ["09", "Projects & internships"],
              ["03", "Deep-dive case studies"],
              ["04", "Domains covered"],
              ["30+", "Technologies used"],
            ].map(([v, k]) => (
              <div key={k} className="bg-canvas/80 p-5">
                <dt className="num-display text-2xl font-semibold"><CountUp value={v} /></dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-baseline justify-between">
            <p className="eyebrow">Flagship case studies</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              full write-up
            </span>
          </div>
          <div className="space-y-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: c.slug }}
                  className="card-surface hover-lift hover-glow group block p-7 md:p-9"
                >
                  <div className="grid gap-9 md:grid-cols-[1.15fr_1fr] md:items-center">
                    <div>
                      <p className="eyebrow mb-4">
                        {String(i + 1).padStart(2, "0")} — {c.status} · {c.duration}
                      </p>
                      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                        {c.name}
                      </h2>
                      <p className="mt-2 text-lg text-foreground/70">{c.tagline}</p>
                      <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                        {c.oneLiner}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {c.primaryTech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-7 inline-flex items-center gap-2 font-mono text-xs text-accent">
                        Read case study
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2}
                        />
                      </p>
                    </div>
                    <MockVisual kind={c.heroMock} label={`${c.name} preview`} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule-fade mx-auto max-w-5xl" />

      <section className="section-aura px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Full catalogue</p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Everything else I've built.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    filter === f
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-subtle hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-10 space-y-3">
            {visible.map((p, i) => {
              const isOpen = open === p.slug;
              const study = caseStudyBySlug[p.slug];
              return (
                <Reveal as="li" key={p.slug} delay={Math.min(i, 6) * 0.03}>
                  <div className="card-surface hover-glow overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpen(isOpen ? null : p.slug)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-5 p-6 text-left md:p-7"
                    >
                      <span className="mt-1 font-mono text-[11px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-lg font-medium text-foreground">{p.name}</span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                            {p.year} · {domainOf(p)}
                          </span>
                        </span>
                        <span className="mt-2 block max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
                          {p.summary}
                        </span>
                      </span>
                      <ChevronDown
                        className={`mt-1 h-4 w-4 shrink-0 text-subtle transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="animate-fade-in border-t border-border px-6 pb-7 pt-6 md:px-7">
                        {p.context && (
                          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                            {p.context}
                          </p>
                        )}
                        <p className="max-w-[72ch] text-sm leading-relaxed text-muted-foreground">
                          {p.narrative}
                        </p>

                        <div className="mt-7 grid gap-7 md:grid-cols-[1.2fr_1fr]">
                          <div>
                            <p className="eyebrow mb-3">Engineering highlights</p>
                            <ul className="space-y-2.5">
                              {p.highlights.map((h) => (
                                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="eyebrow mb-3">Architecture</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {p.architecture}
                            </p>
                            {p.metrics && (
                              <dl className="mt-5 space-y-2">
                                {p.metrics.map((m) => (
                                  <div key={m.label} className="flex justify-between gap-4 border-t border-border pt-2">
                                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                                      {m.label}
                                    </dt>
                                    <dd className="text-xs text-foreground">{m.value}</dd>
                                  </div>
                                ))}
                              </dl>
                            )}
                          </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-border bg-surface/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 flex flex-wrap items-center gap-6">
                          {study && (
                            <Link
                              to="/projects/$slug"
                              params={{ slug: study }}
                              className="group inline-flex items-center gap-2 font-mono text-xs text-accent"
                            >
                              Read the full case study
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          )}
                          {p.repo && (
                            <a
                              href={p.repo}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent"
                            >
                              View source on GitHub
                              <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-1" />
                            </a>
                          )}
                        </div>

                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl card-surface grid-backdrop p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Have a system that needs building?
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-muted-foreground">
            Tell me the business problem. I'll come back with an architecture and an honest
            estimate.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
