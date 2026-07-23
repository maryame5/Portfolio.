import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { architectureCases } from "@/content/architecture";
import { site } from "@/content/site";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: `Architecture — ${site.name}` },
      { name: "description", content: "System-thinking case studies: business problem, constraints, decisions, trade-offs, outcomes." },
      { property: "og:title", content: `Architecture — ${site.name}` },
      { property: "og:description", content: "How I think about designing production software systems." },
    ],
  }),
  component: ArchitecturePage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-3">{title}</h4>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function ArchitecturePage() {
  return (
    <SiteShell>
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-6">Architecture</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            How I think about systems.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted-foreground">
            Architecture-first case studies. Each one starts from a real business problem,
            names the constraints and the trade-offs, and explains the decision that shipped.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-3xl space-y-24 px-6">
          {architectureCases.map((c) => (
            <article key={c.slug} className="border-t border-border pt-12">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                {c.title}
              </h2>

              <div className="mt-10 grid gap-10">
                <Block title="Business problem">{c.businessProblem}</Block>
                <Block title="Constraints"><List items={c.constraints} /></Block>
                <Block title="Architecture decisions"><List items={c.decisions} /></Block>
                <Block title="Technology choices"><List items={c.technologyChoices} /></Block>
                <Block title="Trade-offs considered"><List items={c.tradeoffs} /></Block>
                <Block title="Lessons learned"><List items={c.lessons} /></Block>
                <Block title="Outcome">
                  <div className="border-l-2 border-accent/40 bg-accent-soft/40 p-5">
                    <p className="text-sm italic text-foreground/90">{c.outcome}</p>
                  </div>
                </Block>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
