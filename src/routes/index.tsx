import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { site, stats, principles } from "@/content/site";
import { CountUp } from "@/components/count-up";
import { experiences } from "@/content/experience";
import { projects, flagshipProject } from "@/content/projects";
import { technologyDomains } from "@/content/technologies";
import { architectureCases } from "@/content/architecture";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — AI & Software Engineer` },
      {
        name: "description",
        content:
          "Maryame El Khalfi — AI & Software Engineer building multi-agent analytics platforms, distributed Java backends and production full-stack products.",
      },
      { property: "og:title", content: `${site.name} — AI & Software Engineer` },
      {
        property: "og:description",
        content:
          "Multi-agent analytics, distributed Java microservices and full-stack products shipped in real production conditions.",
      },
    ],
  }),
  component: HomePage,
});

const capabilityMarquee = [
  "Multi-agent orchestration",
  "LangGraph",
  "FastAPI",
  "Spring Boot",
  "Event-driven microservices",
  "Data quality · DAMA-DMBOK",
  "DuckDB",
  "PostgreSQL",
  "Kafka · RabbitMQ",
  "React · TypeScript",
  "Angular",
  "Docker · CI/CD",
  "Keycloak OIDC",
  "AST SQL Validation",
];

function selectedProjectLink(slug: string) {
  switch (slug) {
    case "cqos-trading-platform":
      return { to: "/projects/$slug", params: { slug: "admin-crm-service" } as const };
    case "aos-micepp-portal":
      return { to: "/projects/$slug", params: { slug: "aos-micepp" } as const };
    case "easyapply":
    case "airport-intelligence":
    case "bank-review-pipeline":
      return { to: "/projects" as const };
    default:
      return { to: "/projects/$slug", params: { slug } as const };
  }
}

function HomePage() {

  const otherProjects = projects.filter((p) => p.slug !== flagshipProject.slug).slice(0, 5);

  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-32">
        <span className="horizon-beam -top-px opacity-70" aria-hidden />
        <div className="glow-orb -top-24 left-1/4 h-[26rem] w-[26rem] bg-accent/25" />
        <div className="glow-orb right-0 top-40 h-80 w-80 bg-accent-2/20" />


        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {site.availability.status} · {site.availability.startDate}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {site.headline}
              </p>
              <h1 className="mt-4 text-[2.2rem] font-semibold leading-[1.06] tracking-tight text-foreground md:text-[3.4rem]">
                I build the{" "}
                <span className="serif-accent text-gradient">guardrails</span> that separate
                what an LLM proposes from what a system can guarantee.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                {site.intro}
              </p>
            </Reveal>



            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent"
                >
                  <FileText className="h-4 w-4" />
                  View CV
                </a>
              </div>
            </Reveal>


            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                <span className="signature normal-case">{site.shortName}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> {site.location}
                </span>
                <span>INSEA · Data &amp; Software Engineering</span>
              </div>
            </Reveal>

          </div>

          <Reveal delay={0.15}>
            <HeroVisual />
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="relative mx-auto mt-20 max-w-6xl">
            <div className="card-surface grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="group relative p-7">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <p className="num-display text-4xl font-semibold"><CountUp value={s.value} /></p>
                  <p className="mt-3 text-sm text-foreground">{s.label}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CAPABILITY TICKER */}
      <section className="relative overflow-hidden py-6">
        <hr className="rule-fade absolute inset-x-0 top-0" />
        <div className="marquee-mask flex gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="marquee-track flex shrink-0 items-center gap-10" aria-hidden={dup === 1}>
              {capabilityMarquee.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle"
                >
                  <span className="h-1 w-1 rounded-full bg-accent/70" />
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
        <hr className="rule-fade absolute inset-x-0 bottom-0" />
      </section>


      {/* FLAGSHIP */}
      <section className="section-aura relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-4">Flagship work</p>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  {flagshipProject.name}
                </h2>
              </div>
              <Link
                to="/projects/$slug"
                params={{ slug: flagshipProject.slug }}
                className="group inline-flex items-center gap-2 text-sm text-accent"
              >
                Read the case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {flagshipProject.summary}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {flagshipProject.highlights.slice(0, 3).map((h, i) => (
              <Reveal key={h} delay={0.05 * i}>
                <div className="card-surface hover-lift hover-glow h-full p-6">
                  <span className="font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {flagshipProject.metrics && (
            <Reveal delay={0.1}>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {flagshipProject.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-surface/40 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                      {m.label}
                    </p>
                    <p className="mt-2 text-lg font-medium text-foreground">{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <div className="card-surface mt-4 grid gap-px overflow-hidden bg-border md:grid-cols-[1.15fr_0.85fr]">
              <div className="panel p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  System at a glance
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {flagshipProject.architecture}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {flagshipProject.stack.slice(0, 10).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-surface/60 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="panel p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                  Data flow
                </p>
                <ol className="mt-5 space-y-4">
                  {["Bronze — raw landing on MinIO", "Quality scoring + HITL approval", "Silver — validated dataset", "Agent routing via LangGraph", "Dashboards, NLQ and ML outputs"].map(
                    (step, i, arr) => (
                      <li key={step} className="relative flex gap-3 pl-1">
                        <span className="relative mt-1 flex h-2 w-2 shrink-0">
                          <span className="h-2 w-2 rounded-full bg-accent/80" />
                          {i < arr.length - 1 && (
                            <span className="absolute left-1/2 top-2 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 to-transparent" />
                          )}
                        </span>
                        <span className="text-sm leading-snug text-muted-foreground">{step}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">Experience</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Three internships, three industries, three systems in production.
            </h2>
          </Reveal>

          <div className="card-surface mt-14 divide-y divide-border">
            {experiences.map((e, i) => (
              <Reveal key={e.slug} delay={0.05 * i}>
                <Link
                  to="/experience"
                  className="group relative grid gap-4 p-7 transition-colors hover:bg-surface/50 md:grid-cols-[36px_200px_1fr_auto]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-gradient-to-b from-accent via-accent to-accent-2 transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <span className="hidden pt-1 font-mono text-[11px] text-subtle md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base font-medium text-foreground">{e.company}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                      {e.companyKind}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-accent">{e.role}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {e.description}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                    <span className="font-mono text-[11px] text-subtle">{e.period}</span>
                    <ArrowUpRight className="h-4 w-4 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* PRINCIPLES */}
      <section className="section-aura relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">Engineering principles</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              How I decide, <span className="serif-accent text-gradient">before</span> I build.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.id} delay={0.04 * i}>
                <div className="card-surface hover-lift hover-glow h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-border-strong bg-surface text-accent">
                      <p.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[11px] text-subtle">{p.id}</span>
                  </div>
                  <h3 className="mt-5 text-base font-medium text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-4">Selected projects</p>
                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Systems, not repositories.
                </h2>
              </div>
              <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-accent">
                All {projects.length} projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {otherProjects.map((p, i) => (
              <Reveal key={p.slug} delay={0.04 * i}>
                <Link {...selectedProjectLink(p.slug)} className="card-surface hover-lift hover-glow group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-foreground group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-subtle"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-aura relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-4">Architecture</p>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  The decisions behind the systems.
                </h2>
              </div>
              <Link to="/architecture" className="group inline-flex items-center gap-2 text-sm text-accent">
                Read the decisions
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {architectureCases.map((a, i) => (
              <Reveal key={a.slug} delay={0.05 * i}>
                <div className="card-surface h-full p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                    {a.scope}
                  </p>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.decisions[0].decision}
                  </p>
                  <div className="mt-6 space-y-2 border-t border-border pt-5">
                    {a.layers.slice(0, 3).map((l) => (
                      <div key={l.name} className="flex gap-3 text-xs">
                        <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                          {l.name}
                        </span>
                        <span className="text-subtle">{l.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="relative px-6 py-24">
        <hr className="rule-fade absolute inset-x-0 top-0" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-4">Technology</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Tools are a means. <span className="serif-accent text-gradient">Outcomes</span> are the point.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {technologyDomains.map((d, i) => (
              <Reveal key={d.id} delay={0.03 * i}>
                <div className="card-surface h-full p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-medium text-foreground">{d.name}</h3>
                    <p className="text-xs text-subtle">{d.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {d.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-border bg-surface/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
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

      {/* CTA */}
      <section className="section-aura relative overflow-hidden px-6 py-28">
        <hr className="rule-fade absolute inset-x-0 top-0" />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />

        <div className="glow-orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-accent/20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-5">Next step</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Looking for an engineer who ships{" "}
              <span className="serif-accent text-gradient">the whole system</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Available from {site.availability.startDate} for {site.availability.type.toLowerCase()}.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent"
              >
                <FileText className="h-4 w-4" /> View CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
