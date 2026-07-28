import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { architectureCases } from "@/content/architecture";
import { site } from "@/content/site";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: `Architecture — ${site.name}` },
      {
        name: "description",
        content:
          "Architecture decisions, constraints and trade-offs behind multi-agent analytics, distributed Java backends and public-service platforms.",
      },
      { property: "og:title", content: `Architecture — ${site.name}` },
      {
        property: "og:description",
        content: "The reasoning behind the systems: constraints, decisions, trade-offs, outcomes.",
      },
    ],
  }),
  component: ArchitecturePage,
});

function ArchitecturePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Architecture"
        title={<>Decisions, <span className="serif-accent text-gradient">not diagrams</span>.</>}
        lead="Each system below is presented the way an engineering team would review it: the business problem, the constraints it had to respect, the decisions taken and what they cost."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl space-y-6">
          {architectureCases.map((a, i) => (
            <Reveal key={a.slug} delay={0.04 * i}>
              <article className="card-surface p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                  {a.scope}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
                  {a.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {a.businessProblem}
                </p>

                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface/40 p-6">
                    <p className="eyebrow mb-4">Constraints</p>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {a.constraints.map((c) => (
                        <li key={c} className="flex gap-3">
                          <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-surface/40 p-6">
                    <p className="eyebrow mb-4">Layers</p>
                    <div className="space-y-3">
                      {a.layers.map((l) => (
                        <div key={l.name} className="grid gap-1 md:grid-cols-[110px_1fr] md:gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                            {l.name}
                          </span>
                          <span className="text-sm text-muted-foreground">{l.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="eyebrow mb-4">Engineering decisions</p>
                  <div className="space-y-4">
                    {a.decisions.map((d, idx) => (
                      <div key={d.decision} className="rounded-xl border border-border p-6">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-[11px] text-accent">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-base font-medium text-foreground">{d.decision}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {d.rationale}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid gap-6 border-t border-border pt-7 md:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-3">Trade-offs</p>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {a.tradeoffs.map((t) => (
                        <li key={t} className="flex gap-3">
                          <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Outcome</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{a.outcome}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
