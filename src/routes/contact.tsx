import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { services, engagement, faqs } from "@/content/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Work with me — ${site.name}` },
      {
        name: "description",
        content: `Freelance and full-time engineering: AI agents, distributed backends, data pipelines and full-stack products. Based in ${site.location}, working remotely.`,
      },
      { property: "og:title", content: `Work with me — ${site.name}` },
      {
        property: "og:description",
        content: "Services, how I work, and the fastest ways to reach me.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work with me"
        title={
          <>
            Tell me the problem.{" "}
            <span className="serif-accent text-gradient">I'll design the system.</span>
          </>
        }
        lead="Available for freelance engagements and engineering roles. Remote-first, working across French and English-speaking teams."
      />

      {/* Availability + direct channels */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="card-surface h-full p-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <p className="eyebrow">{site.availability.status}</p>
              </div>
              <p className="mt-5 text-xl leading-snug text-foreground">
                {site.availability.type}
              </p>
              <dl className="mt-8 space-y-4">
                {[
                  ["Available from", site.availability.startDate],
                  ["Engagement", "Freelance · Contract · Full-time"],
                  ["Working mode", "Remote, on-site in Rabat on request"],
                  ["Response time", "Within 2 business days"],
                  ["Languages", "Arabic · French (C1) · English (B2)"],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-t border-border pt-3 md:grid-cols-[130px_1fr] md:gap-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                      {k}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 flex items-center gap-2 text-sm text-subtle">
                <MapPin className="h-3.5 w-3.5" /> {site.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card-surface h-full p-8">
              <p className="eyebrow mb-6">Direct channels</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}?subject=Project%20enquiry`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm text-foreground hover:border-accent hover:text-accent"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>

              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
                {[
                  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
                  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
                  { label: "LinkedIn", value: handle(site.socials.linkedin), href: site.socials.linkedin, icon: ArrowUpRight },
                  { label: "GitHub", value: handle(site.socials.github), href: site.socials.github, icon: ArrowUpRight },
                  { label: "Resume", value: "Download PDF", href: site.resumeUrl, icon: ArrowUpRight },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center justify-between gap-4 bg-canvas/70 px-5 py-4 transition-colors hover:bg-surface"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                      {c.label}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-xs text-foreground">
                      {c.value}
                      <c.icon className="h-3 w-3 text-subtle transition-colors group-hover:text-accent" />
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-subtle">
                Useful in a first message: what the product does, who uses it, the constraint
                that hurts today, and your timeline. That's enough for me to answer with
                something concrete.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="rule-fade mx-auto max-w-5xl" />

      {/* Services */}
      <section className="section-aura px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">What I can build for you</p>
          <h2 className="max-w-[22ch] text-3xl font-semibold text-foreground md:text-4xl">
            Four kinds of work, one engineering standard.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <article className="card-surface hover-lift h-full p-7">
                  <s.icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
                  <h3 className="mt-5 text-lg font-medium text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule-fade mx-auto max-w-5xl" />

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">How an engagement runs</p>
          <h2 className="max-w-[24ch] text-3xl font-semibold text-foreground md:text-4xl">
            No surprises between the first call and the handover.
          </h2>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {engagement.map((e) => (
              <li key={e.step} className="bg-canvas/70 p-7">
                <span className="font-mono text-[11px] text-accent">{e.step}</span>
                <h3 className="mt-4 text-base font-medium text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-aura px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">Questions I usually get</p>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-foreground marker:hidden">
                  {f.q}
                  <span className="font-mono text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div className="card-surface mt-16 grid-backdrop p-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-sm text-muted-foreground">
              One email is enough to start. I read every message.
            </p>
            <a
              href={`mailto:${site.email}?subject=Project%20enquiry`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
