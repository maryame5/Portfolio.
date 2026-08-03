import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/content/experience";
import { site, education, certifications, languages } from "@/content/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience — ${site.name}` },
      {
        name: "description",
        content: `Internships and production systems delivered by ${site.name}: multi-agent analytics, distributed Java backends and public-service platforms.`,
      },
      { property: "og:title", content: `Experience — ${site.name}` },
      {
        property: "og:description",
        content: "Context, action and measurable result for every role.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Experience"
        title={<>Systems shipped in <span className="serif-accent text-gradient">real conditions</span>.</>}
        lead="Every role below produced software that runs: business users, internal operators or citizens on the other side of the screen."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl space-y-6">
          {experiences.map((e, i) => (
            <Reveal key={e.slug} delay={0.04 * i}>
              <article className="card-surface p-8 md:p-10">
                <div className="flex flex-col justify-between gap-3 border-b border-border pb-7 md:flex-row md:items-baseline">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{e.company}</h2>
                    <p className="mt-1.5 text-sm text-accent">{e.role}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                      {e.companyKind} · {e.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-subtle">{e.period}</span>
                </div>

                <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                  {e.projectName}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {e.description}
                </p>

                <div className="mt-7 rounded-xl border border-border bg-surface/40 p-5">
                  <p className="eyebrow mb-2">Business context</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {e.businessContext}
                  </p>
                </div>

                <div className="mt-10 space-y-5">
                  <p className="eyebrow">What I delivered</p>
                  {e.achievements.map((a, idx) => (
                    <div key={a.title} className="rounded-xl border border-border p-6">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-[11px] text-accent">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-foreground">{a.title}</h3>
                          <dl className="mt-4 space-y-3">
                            {[
                              ["Context", a.context],
                              ["Action", a.action],
                              ["Result", a.result],
                            ].map(([k, v]) => (
                              <div key={k} className="grid gap-1 md:grid-cols-[80px_1fr] md:gap-4">
                                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                                  {k}
                                </dt>
                                <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
                              </div>
                            ))}
                          </dl>
                          {a.tech.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-1.5">
                              {a.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-subtle"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 grid gap-6 border-t border-border pt-7 md:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="eyebrow mb-2">Architecture</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{e.architecture}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-surface/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="rule-fade mx-auto max-w-5xl" />

      <section className="section-aura px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card-surface h-full p-8">
              <p className="eyebrow mb-6">Education</p>
              <ol className="space-y-6">
                {education.map((e) => (
                  <li key={e.institution} className="border-l border-border pl-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      {e.period}
                    </span>
                    <h3 className="mt-2 text-base font-medium text-foreground">{e.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.field}</p>
                    <p className="mt-1 text-sm text-subtle">{e.institution}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="space-y-6">
              <div className="card-surface p-8">
                <p className="eyebrow mb-6">Certifications</p>
                <ul className="space-y-4">
                  {certifications.map((c) => (
                    <li key={c.name} className="border-t border-border pt-4 first:border-0 first:pt-0">
                      <p className="text-sm font-medium text-foreground">{c.name}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                        {c.issuer} · {c.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-surface p-8">
                <p className="eyebrow mb-6">Languages</p>
                <dl className="space-y-3">
                  {languages.map((l) => (
                    <div key={l.language} className="flex items-baseline justify-between border-t border-border pt-3 first:border-0 first:pt-0">
                      <dt className="text-sm text-foreground">{l.language}</dt>
                      <dd className="font-mono text-[11px] text-subtle">{l.level}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

