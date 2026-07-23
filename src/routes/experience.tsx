import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { experiences } from "@/content/experience";
import { site } from "@/content/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience — ${site.name}` },
      { name: "description", content: `Professional experience of ${site.name}, ${site.role}.` },
      { property: "og:title", content: `Experience — ${site.name}` },
      { property: "og:description", content: `Roles, responsibilities and achievements across teams and companies.` },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <SiteShell>
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Experience</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            Where I've built software.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted-foreground">
            Roles focused on designing and shipping production software in enterprise contexts,
            with an increasing focus on integrating AI into real products.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-3xl space-y-16 px-6">
          {experiences.map((e) => (
            <article key={e.slug} className="border-t border-border pt-10">
              <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {e.role} · {e.company}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{e.context}</p>
                </div>
                <span className="font-mono text-xs text-subtle">{e.period}</span>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="eyebrow mb-3">Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {e.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="eyebrow mb-3">Achievements</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="eyebrow mb-3">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
