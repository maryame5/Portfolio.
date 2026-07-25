export type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  context: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    slug: "dxc-technology",
    company: "DXC Technology",
    role: "Software Engineer",
    period: "2023 — Present",
    context:
      "Global technology services firm delivering mission-critical platforms for enterprise clients.",
    summary:
      "Engineered intelligent product features on an enterprise platform serving business-critical operations across multiple regions.",
    responsibilities: [
      "Lead architecture and delivery of AI-assisted product features end-to-end.",
      "Partner with product and business stakeholders to translate needs into systems.",
      "Mentor engineers on architecture, code quality and production readiness.",
    ],
    achievements: [
      "Designed an AI-assisted decision layer that meaningfully reduced manual review workload.",
      "Introduced architecture reviews and improved reliability of core services.",
    ],
    stack: ["Python", "TypeScript", "PostgreSQL", "AWS", "Docker", "LLM APIs"],
  },
  {
    slug: "lotus-capital",
    company: "Lotus Capital",
    role: "Full-Stack Engineer",
    period: "2021 — 2023",
    context:
      "Investment firm building internal tooling and client-facing digital services.",
    summary:
      "Built the internal Admin & CRM service unifying client, portfolio and operational data across the firm.",
    responsibilities: [
      "Designed backend services and internal APIs for regulated financial workflows.",
      "Owned integrations with third-party market-data and compliance providers.",
    ],
    achievements: [
      "Rebuilt a data pipeline that shortened processing time and improved traceability.",
      "Contributed to a redesign of the platform's core domain model.",
    ],
    stack: ["Java", "Spring", "React", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    slug: "micepp",
    company: "MICEPP",
    role: "Software Engineer",
    period: "2019 — 2021",
    context:
      "Public-sector organization delivering digital services to citizens and administrators.",
    summary:
      "Delivered the AOS MICEPP Portal — a full-stack service platform used across multiple regional offices.",
    responsibilities: [
      "Implemented service workflows, role-based access and administrative back-office.",
      "Worked with domain experts to model regulated processes into software.",
    ],
    achievements: [
      "Shipped the first production version of the portal within a tight regulatory window.",
      "Established the front-end and API conventions the team still uses today.",
    ],
    stack: ["Spring Boot", "Angular", "PostgreSQL", "Docker"],
  },
];
