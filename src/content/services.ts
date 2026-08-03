import type { LucideIcon } from "lucide-react";
import { Bot, Boxes, Database, LayoutDashboard } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "ai-agents",
    title: "AI agents & LLM products",
    summary:
      "Orchestrated agents that do real work on real data — with deterministic computation and human approval where it matters.",
    deliverables: [
      "LangGraph / LangChain multi-agent orchestration",
      "RAG and natural-language querying over your data",
      "Human-in-the-loop validation flows",
      "Evaluation, guardrails and SQL safety layers",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "RAG", "DuckDB"],
    icon: Bot,
  },
  {
    id: "backends",
    title: "Distributed backends & APIs",
    summary:
      "Java or Python services designed for load, auditability and maintenance — not just for the first demo.",
    deliverables: [
      "Spring Boot / Spring Cloud microservices",
      "Auth: Keycloak, OIDC, OAuth2, JWT",
      "Caching, locking and quota integrity",
      "Documented REST contracts and tests",
    ],
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    icon: Boxes,
  },
  {
    id: "data",
    title: "Data pipelines & analytics",
    summary:
      "From scattered sources to a modelled warehouse and dashboards your team actually reads.",
    deliverables: [
      "Ingestion and ETL orchestration (Airflow, dbt)",
      "Medallion / star-schema modelling",
      "Data quality scoring and cleaning",
      "Dashboards and reporting layers",
    ],
    stack: ["Airflow", "dbt", "PostgreSQL", "Pandas", "DuckDB", "Looker Studio"],
    icon: Database,
  },
  {
    id: "product",
    title: "Full-stack product interfaces",
    summary:
      "React or Angular front-ends built around the workflow, with the same care as the backend behind them.",
    deliverables: [
      "React 18 / TypeScript / Angular 20 applications",
      "Design systems and accessible components",
      "Charts, dashboards and guided workflows",
      "Containerised deployment",
    ],
    stack: ["React 18", "TypeScript", "Angular 20", "Tailwind CSS", "Recharts", "Docker"],
    icon: LayoutDashboard,
  },
];

export const engagement = [
  {
    step: "01",
    title: "Framing call",
    body: "30 minutes to understand the business problem, constraints and what success looks like. No slide deck needed.",
  },
  {
    step: "02",
    title: "Written proposal",
    body: "Scope, architecture sketch, milestones and a fixed estimate. You know what you get before anything is built.",
  },
  {
    step: "03",
    title: "Build in increments",
    body: "Short cycles with a working demo at the end of each one. You steer as it takes shape, not after delivery.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Documented code, containerised deployment, architecture diagrams and a walkthrough session. No black boxes.",
  },
];

export const faqs = [
  {
    q: "How do you work with remote clients?",
    a: "Fully remote and asynchronous by default, with a weekly sync in your time zone. I've worked across French and English-speaking teams.",
  },
  {
    q: "What's your typical project size?",
    a: "From a two-week focused build — an API, a pipeline, an agent prototype — to multi-month platform work. I'll tell you upfront if a scope isn't a good fit.",
  },
  {
    q: "Can you join an existing codebase?",
    a: "Yes. Most of my professional work has been inside existing systems: reading the code, mapping the domain, then shipping inside the team's conventions.",
  },
  {
    q: "Who owns the code?",
    a: "You do — full IP transfer on delivery, in a repository you control, with documentation and deployment scripts included.",
  },
];
