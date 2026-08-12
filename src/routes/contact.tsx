import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site, languages } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content: `Maryame El Khalfi — AI & Software Engineer, available from ${site.availability.startDate} for entry-level and junior engineering roles. Based in ${site.location}.`,
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      {
        property: "og:description",
        content: "Availability, contact details, languages and location.",
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
        eyebrow="Contact"
        title={
          <>
            Available from {site.availability.startDate}.{" "}
            <span className="serif-accent text-gradient">Let's talk.</span>
          </>
        }
        lead="Looking for an entry-level / junior engineering role in AI, backend or full-stack development. Based in Rabat, open to remote."
      />

      <section className="px-6 pb-32">
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
                  ["Location", site.location],
                  ["Education", "INSEA — Data & Software Engineering, 2023–2026"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="grid gap-1 border-t border-border pt-3 md:grid-cols-[130px_1fr] md:gap-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                      {k}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="eyebrow mt-10 mb-4">Languages</p>
              <dl className="space-y-3">
                {languages.map((l) => (
                  <div
                    key={l.language}
                    className="grid gap-1 border-t border-border pt-3 md:grid-cols-[130px_1fr] md:gap-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
                      {l.language}
                    </dt>
                    <dd className="text-sm text-muted-foreground">{l.level}</dd>
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
              <p className="eyebrow mb-6">Contact details</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}`}
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
                  {
                    label: "Phone",
                    value: site.phone,
                    href: `tel:${site.phone.replace(/\s/g, "")}`,
                    icon: Phone,
                  },
                  {
                    label: "LinkedIn",
                    value: handle(site.socials.linkedin),
                    href: site.socials.linkedin,
                    icon: ArrowUpRight,
                  },
                  {
                    label: "GitHub",
                    value: handle(site.socials.github),
                    href: site.socials.github,
                    icon: ArrowUpRight,
                  },
                  {
                    label: "CV",
                    value: "Ask me by email",
                    href: site.resumeRequestUrl,
                    icon: Mail,
                  },
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
                The fastest way to reach me is email. I'm happy to walk through any of the
                systems on this site in detail.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
