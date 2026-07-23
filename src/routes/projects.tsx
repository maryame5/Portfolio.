import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: "Engineering case studies: problem, architecture, decisions, outcomes." },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: "Engineering case studies with architecture and decisions in focus." },
    ],
  }),
  component: ProjectsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-3">{title}</h4>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <SiteShell>
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Projects</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            Engineering case studies.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted-foreground">
            Products I've built, framed by the business problem, the architecture and the
            engineering decisions behind them — not the technology stack.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-3xl space-y-24 px-6">
          {projects.map((p) => (
            <article key={p.slug} className="border-t border-border pt-12">
              <header className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {p.name}
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">{p.summary}</p>
                <p className="mt-4 font-mono text-xs text-accent">{p.outcome}</p>
              </header>

              <div className="grid gap-10">
                <Section title="Business context">{p.businessContext}</Section>
                <Section title="Problem">{p.problem}</Section>
                <Section title="Solution">{p.solution}</Section>
                <Section title="Architecture">{p.architecture}</Section>

                <Section title="Key engineering decisions">
                  <ul className="space-y-2">
                    {p.keyDecisions.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Features">
                  <ul className="grid gap-2 md:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Technology stack">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Section>

                {p.demoUrl && (
                  <Section title="Demo">
                    <a href={p.demoUrl} className="text-foreground underline underline-offset-4">
                      {p.demoUrl}
                    </a>
                  </Section>
                )}

                <Section title="Lessons learned">
                  <ul className="space-y-2">
                    {p.lessons.map((l) => (
                      <li key={l} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title="Future improvements">
                  <ul className="space-y-2">
                    {p.futureWork.map((l) => (
                      <li key={l} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
