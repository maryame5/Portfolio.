import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  PlayCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { MockVisual } from "@/components/case-study/mock-visual";
import { ReadingProgress } from "@/components/case-study/reading-progress";
import { getNeighbours, type CaseStudy } from "@/content/case-studies";

/* ---------------------------------------------------------------- layout */

function Section({
  index,
  eyebrow,
  title,
  lead,
  children,
  bordered = true,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      aria-label={title}
      className={`px-6 py-20 md:py-28 ${bordered ? "border-t border-border" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 max-w-[62ch] md:mb-16">
            <p className="eyebrow mb-5">
              {index} — {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              {title}
            </h2>
            {lead && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {lead}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- template */

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  const { prev, next, others } = getNeighbours(study.slug);

  return (
    <article>
      <ReadingProgress />

      {/* 1 — HERO */}
      <header className="px-6 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-subtle transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              All projects
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.heroEmphasis.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {e}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {study.name}
            </h1>
            <p className="mt-4 text-xl text-foreground/70 md:text-2xl">
              {study.tagline}
            </p>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
              {study.oneLiner}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={study.demoUrl ?? "#demo"}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <PlayCircle className="h-4 w-4" strokeWidth={2} />
                Watch demo
              </a>
              {study.sourceUrl && (
                <a
                  href={study.sourceUrl}
                  className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  <Github className="h-4 w-4" strokeWidth={2} />
                  View source
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Discuss this project
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-4">
              {[
                ["Status", study.status],
                ["Duration", study.duration],
                ["Role", study.role],
                ["Primary stack", study.primaryTech.join(" · ")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow mb-2">{k}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14">
              <MockVisual
                kind={study.heroMock}
                label={`${study.name} — product overview`}
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* 2 — BUSINESS CONTEXT */}
      <Section
        index="01"
        eyebrow="Business context"
        title="Why this product existed."
        lead={study.businessContext.lead}
      >
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-6">
            {study.businessContext.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="eyebrow mb-5">Who needed it</h3>
            <ul className="space-y-6">
              {study.businessContext.stakeholders.map((s) => (
                <li key={s.who} className="border-l border-border-strong pl-4">
                  <p className="text-sm font-medium text-foreground">{s.who}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.need}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 3 — CHALLENGE */}
      <Section
        index="02"
        eyebrow="The challenge"
        title="What made this difficult."
        lead={study.challenge.lead}
      >
        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {study.challenge.items.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.04} className="bg-canvas p-7">
              <p className="font-mono text-[11px] text-subtle">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 4 — SOLUTION OVERVIEW */}
      <Section index="03" eyebrow="Solution" title="How the product answers it.">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              {study.solution.paragraph}
            </p>
            <ul className="mt-9 space-y-6">
              {study.solution.pillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-2.5 h-px w-5 shrink-0 bg-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{p.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="space-y-6">
            <MockVisual
              kind={study.solution.mock}
              label={`${study.name} — solution overview`}
            />
            <MockVisual
              kind="architecture"
              label={`${study.name} — architecture illustration`}
            />
          </Reveal>
        </div>
      </Section>

      {/* 5 — ARCHITECTURE */}
      <Section
        index="04"
        eyebrow="Architecture"
        title="The system, and the reasoning behind it."
        lead={study.architecture.overview}
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h3 className="eyebrow mb-5">System composition</h3>
            <ol className="overflow-hidden rounded-xl border border-border">
              {study.architecture.layers.map((l) => (
                <li
                  key={l.id}
                  className="border-b border-border p-6 last:border-b-0 transition-colors hover:bg-surface"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">
                      <span className="mr-3 font-mono text-[11px] text-subtle">
                        {l.id}
                      </span>
                      {l.name}
                    </p>
                    <span className="font-mono text-[10px] text-accent">
                      {l.tech}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l.role}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="eyebrow mb-5">Data & control flow</h3>
            <ol className="relative space-y-4 border-l border-border pl-6">
              {study.architecture.flow.map((f, i) => (
                <li key={f} className="relative">
                  <span className="absolute -left-[27px] top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="mr-2 font-mono text-[11px] text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {study.architecture.reasoning.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04} className="bg-canvas p-7">
              <h3 className="text-base font-medium text-foreground">{r.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — ENGINEERING DECISIONS */}
      <Section
        index="05"
        eyebrow="Engineering decisions"
        title="Every choice, with its cost."
        lead="Decisions are recorded the way they were made: a question, the option taken, the reason, the trade-off accepted and the benefit gained."
      >
        <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
          {study.decisions.map((d, i) => (
            <Reveal key={d.question} delay={Math.min(i, 4) * 0.03} className="bg-canvas p-7 md:p-9">
              <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
                <div>
                  <p className="font-mono text-[11px] text-subtle">
                    D{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-medium text-foreground">
                    {d.question}
                  </h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-accent">
                    {d.decision}
                  </p>
                </div>
                <dl className="grid gap-5 sm:grid-cols-3">
                  {[
                    ["Reason", d.reason],
                    ["Trade-off", d.tradeoff],
                    ["Benefit", d.benefit],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="eyebrow mb-2">{k}</dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7 — KEY FEATURES */}
      <Section
        index="06"
        eyebrow="Key features"
        title="What each capability actually changes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {study.features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={Math.min(i, 4) * 0.04}
              className="rounded-xl border border-border bg-canvas p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface"
            >
              <h3 className="text-lg font-medium text-foreground">{f.title}</h3>
              <dl className="mt-5 space-y-4">
                {[
                  ["Problem", f.problem],
                  ["Solution", f.solution],
                  ["User value", f.userValue],
                  ["Business impact", f.businessImpact],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8 — TECHNOLOGY STACK */}
      <Section
        index="07"
        eyebrow="Technology stack"
        title="Chosen last, in service of the above."
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {study.stack.map((g, i) => (
            <Reveal key={g.group} delay={Math.min(i, 4) * 0.03}>
              <h3 className="eyebrow mb-4">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9 — GALLERY */}
      <Section index="08" eyebrow="Gallery" title="The product, screen by screen.">
        <div className="grid gap-6 md:grid-cols-2">
          {study.gallery.map((g, i) => (
            <Reveal
              key={g.title}
              delay={Math.min(i, 4) * 0.04}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <figure className="group">
                <div className="overflow-hidden rounded-xl">
                  <MockVisual
                    kind={g.kind}
                    label={`${study.name} — ${g.title}`}
                    className="transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3">
                  <span className="text-sm font-medium text-foreground">
                    {g.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{g.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10 — DEMO */}
      <section id="demo" className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow mb-5">09 — Demo</p>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              {study.demo.title}
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
              {study.demo.description}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            {study.demo.videoUrl ? (
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                <iframe
                  src={study.demo.videoUrl}
                  title={`${study.name} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-border bg-surface text-center">
                <PlayCircle
                  className="h-10 w-10 text-subtle"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  Walkthrough recording available on request.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 font-mono text-xs text-accent underline underline-offset-4"
                >
                  Request access
                </Link>
              </div>
            )}
          </Reveal>

          {study.demo.transcript && (
            <Reveal delay={0.12}>
              <details className="mt-8 rounded-xl border border-border p-6">
                <summary className="cursor-pointer text-sm font-medium text-foreground">
                  Transcript
                </summary>
                <ol className="mt-5 space-y-3">
                  {study.demo.transcript.map((t, i) => (
                    <li
                      key={t}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mr-3 font-mono text-[11px] text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t}
                    </li>
                  ))}
                </ol>
              </details>
            </Reveal>
          )}
        </div>
      </section>

      {/* 11 — CHALLENGES & LESSONS */}
      <Section
        index="10"
        eyebrow="Challenges & lessons learned"
        title="What the project taught."
      >
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ul className="space-y-9">
              {study.lessons.technical.map((l) => (
                <li key={l.title} className="border-l border-border-strong pl-5">
                  <h3 className="text-base font-medium text-foreground">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-xl border border-border bg-surface p-7">
            <h3 className="eyebrow mb-5">What I'd do differently today</h3>
            <ul className="space-y-4">
              {study.lessons.differentToday.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 12 — BUSINESS IMPACT */}
      <Section
        index="11"
        eyebrow="Business impact"
        title="The value created."
        lead={study.impact.statement}
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {study.impact.metrics.map((m) => (
            <Reveal key={m.label} className="bg-canvas p-8">
              <p className="eyebrow mb-3">{m.label}</p>
              <p className="text-2xl font-semibold text-foreground">{m.value}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {study.impact.beneficiaries.map((b) => (
            <Reveal key={b.who}>
              <p className="text-sm font-medium text-foreground">{b.who}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.value}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 13 — RELATED PROJECTS + PREV/NEXT */}
      <Section index="12" eyebrow="Related projects" title="Continue reading.">
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((o) => (
            <Reveal key={o.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: o.slug }}
                className="block rounded-xl border border-border p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface"
              >
                <p className="eyebrow mb-3">{o.status}</p>
                <h3 className="text-xl font-medium text-foreground">{o.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.tagline}</p>
                <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-accent">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <nav
          aria-label="Case study navigation"
          className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev && (
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              <span>
                <span className="eyebrow block">Previous</span>
                {prev.name}
              </span>
            </Link>
          )}
          <Link
            to="/projects"
            className="font-mono text-xs text-subtle transition-colors hover:text-foreground"
          >
            All projects
          </Link>
          {next && (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-3 text-right text-sm text-muted-foreground transition-colors hover:text-foreground sm:justify-end"
            >
              <span>
                <span className="eyebrow block">Next</span>
                {next.name}
              </span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          )}
        </nav>
      </Section>
    </article>
  );
}
