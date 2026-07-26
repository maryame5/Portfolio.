import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { MockVisual } from "@/components/case-study/mock-visual";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: `Case studies — ${site.name}` },
      {
        name: "description",
        content:
          "Three flagship engineering case studies: business problem, architecture, decisions, trade-offs and outcomes.",
      },
      { property: "og:title", content: `Case studies — ${site.name}` },
      {
        property: "og:description",
        content:
          "Product-first engineering case studies with architecture and decision-making in focus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-6">Projects</p>
          <h1 className="max-w-[18ch] text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Engineering case studies.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
            Three flagship products, each documented the way an engineering team
            documents its own work: the business problem first, the architecture and
            decisions next, the technology last.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: c.slug }}
                className="group block rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface md:p-9"
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
      </section>
    </SiteShell>
  );
}
