export type Project = {
  slug: string;
  name: string;
  summary: string;
  outcome: string;
  businessContext: string;
  problem: string;
  solution: string;
  architecture: string;
  keyDecisions: string[];
  engineeringHighlight: string;
  features: string[];
  stack: string[];
  demoUrl?: string;
  lessons: string[];
  futureWork: string[];
  flagship?: boolean;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "intelligent-analytics",
    name: "Intelligent Analytics",
    flagship: true,
    summary:
      "Enterprise AI-powered analytics platform that turns raw operational data into decision-ready insights with fully cited, auditable answers.",
    outcome:
      "Reduced time-to-insight from days to minutes for business teams, with fully traceable answers.",
    businessContext:
      "Business teams needed to reason over large volumes of operational data without waiting on analysts for every question.",
    problem:
      "Existing dashboards answered known questions well but could not handle open-ended, exploratory ones. Ad-hoc SQL was slow, error-prone and inaccessible to non-technical users.",
    solution:
      "A layered analytics platform: a typed semantic layer over the warehouse, a query planner that decomposes natural-language questions into safe deterministic queries, and an LLM interpretation layer that produces explanations with citations back to the underlying data.",
    architecture:
      "Ingestion into a versioned warehouse, a semantic model expressed as typed metrics and dimensions, a planner that generates SQL against the semantic layer only, and a generation service that narrates results with source rows attached to every claim.",
    keyDecisions: [
      "LLMs never write raw SQL — they compose against a typed semantic layer, eliminating entire classes of hallucinations.",
      "Every answer is traceable to the exact rows that produced it, in one click.",
      "Query planning, execution and narration are separate services with strict interfaces.",
    ],
    engineeringHighlight:
      "A typed semantic layer that lets language models reason over the warehouse without ever writing raw SQL.",
    features: [
      "Natural-language analytics with cited sources",
      "Typed semantic layer over the warehouse",
      "Deterministic, cacheable query plans",
      "Role-aware row-level access",
      "Full audit trail per question",
    ],
    stack: [
      "TypeScript",
      "Python",
      "PostgreSQL",
      "dbt",
      "OpenAI / Anthropic",
      "Redis",
    ],
    metrics: [
      { label: "Time to insight", value: "Days → Minutes" },
      { label: "Traceability", value: "100% cited answers" },
      { label: "Semantic coverage", value: "80+ typed metrics" },
    ],
    lessons: [
      "The semantic layer, not the model, was the single biggest quality lever.",
      "Treating narration as a rendering step over structured results made evaluation tractable.",
    ],
    futureWork: [
      "Automated anomaly narratives on scheduled runs.",
      "Feedback loop to promote frequently-asked questions into first-class metrics.",
    ],
  },
  {
    slug: "admin-crm-service",
    name: "Admin & CRM Service",
    summary:
      "Internal admin and CRM platform unifying client, portfolio and operational data for a regulated investment firm.",
    outcome:
      "Consolidated three legacy tools into one product, cutting operational handoffs and improving auditability.",
    businessContext:
      "Operators were juggling disconnected internal tools to serve clients under tight regulatory constraints.",
    problem:
      "Fragmented systems produced duplicated records, inconsistent state and slow audits.",
    solution:
      "A domain-modeled service exposing a unified API and back-office UI, with event-sourced state changes for full traceability.",
    architecture:
      "Modular monolith with clear bounded contexts, PostgreSQL as event store, background workers for integrations, and a React admin front-end.",
    keyDecisions: [
      "Started as a modular monolith to keep operations simple until domain boundaries were proven.",
      "Made every state change an append-only event to satisfy audit requirements natively.",
    ],
    engineeringHighlight:
      "Event-sourced core that turned regulatory audits from a reconstruction project into a query.",
    features: [
      "Unified client and portfolio view",
      "Role-based access and approval flows",
      "Fully audited state changes",
      "Integrations with market-data providers",
    ],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Kafka"],
    lessons: [
      "Bounded contexts modeled with the business early paid off every quarter after.",
      "Audit-by-design is cheaper than audit-by-retrofit.",
    ],
    futureWork: [
      "Extract high-throughput contexts into dedicated services.",
      "Introduce a read-model store optimized for operator dashboards.",
    ],
  },
  {
    slug: "aos-micepp-portal",
    name: "AOS MICEPP Portal",
    summary:
      "Full-stack service portal delivering digital public services across multiple regional offices.",
    outcome:
      "Enabled citizens and administrators to complete regulated workflows online, replacing paper-based processes.",
    businessContext:
      "A public-sector organization needed to digitize regulated services under a strict delivery window.",
    problem:
      "Manual, paper-driven workflows were slow, hard to audit and inaccessible outside office hours.",
    solution:
      "A service portal with role-based access, workflow engine and administrative back-office, deployed across regional offices with a shared data model.",
    architecture:
      "Spring Boot backend exposing a REST API, Angular front-end, PostgreSQL persistence, containerized deployment per region.",
    keyDecisions: [
      "Modeled regulated workflows explicitly instead of embedding them in UI code.",
      "Standardized API and UI conventions upfront so the team could scale contributions.",
    ],
    engineeringHighlight:
      "A workflow model that let non-developers reason about regulated processes with the engineering team.",
    features: [
      "Citizen-facing service requests",
      "Administrative back-office",
      "Role-based access control",
      "Multi-office deployment",
    ],
    stack: ["Spring Boot", "Angular", "PostgreSQL", "Docker"],
    lessons: [
      "Investing in shared conventions early made every subsequent feature faster.",
      "Explicit workflow modeling out-performed clever ad-hoc code.",
    ],
    futureWork: [
      "Introduce a shared design system across public-sector services.",
      "Add analytics on workflow bottlenecks.",
    ],
  },
];

export const flagshipProject = projects.find((p) => p.flagship) ?? projects[0];
