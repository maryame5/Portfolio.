import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { CaseStudyTemplate } from "@/components/case-study/case-study-template";
import { getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: `Case study not found — ${site.name}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const title = `${study.name} — ${study.tagline} | ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: study.oneLiner },
        { property: "og:title", content: title },
        { property: "og:description", content: study.oneLiner },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  return (
    <SiteShell>
      <CaseStudyTemplate study={study} />
    </SiteShell>
  );
}

function CaseStudyNotFound() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="eyebrow mb-5">404</p>
        <h1 className="text-4xl font-semibold text-foreground">
          That case study doesn't exist.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          It may have been renamed. Browse the full list of projects instead.
        </p>
      </section>
    </SiteShell>
  );
}
