export type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  context: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    slug: "company-one",
    company: "Company One",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    context:
      "Enterprise platform serving business-critical operations across multiple regions.",
    responsibilities: [
      "Lead architecture and delivery of intelligent product features end-to-end.",
      "Partner with product and business stakeholders to translate needs into systems.",
      "Mentor engineers on architecture, code quality and production readiness.",
    ],
    achievements: [
      "Designed and shipped an AI-assisted decision layer that reduced manual review workload for internal operators.",
      "Introduced architecture reviews and improved reliability of core services.",
    ],
    stack: ["Python", "TypeScript", "PostgreSQL", "AWS", "Docker", "LLM APIs"],
  },
  {
    slug: "company-two",
    company: "Company Two",
    role: "Software Engineer",
    period: "2019 — 2022",
    context:
      "Product engineering team building data-intensive tools for enterprise customers.",
    responsibilities: [
      "Built backend services and internal APIs powering customer-facing products.",
      "Owned integrations with third-party data providers and internal systems.",
    ],
    achievements: [
      "Rebuilt a data pipeline that shortened processing time and improved traceability.",
      "Contributed to a redesign of the platform's core domain model.",
    ],
    stack: ["Java", "Spring", "Kafka", "PostgreSQL", "Kubernetes"],
  },
];
