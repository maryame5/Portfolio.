import type { LucideIcon } from "lucide-react";
import { Compass, Target, Layers, ShieldCheck, Rocket } from "lucide-react";

export const site = {
  name: "Maryame El Khalfi",
  shortName: "Maryame",
  initials: "ME",
  role: "AI & Software Engineer",
  title: "I build the guardrails that separate what an LLM proposes from what a system can guarantee.",
  headline:
    "AI & Software Engineer — Data & Software Engineering @ INSEA",
  intro:
    "At DXC Technology, I delivered the Frontend, the application Backend, the Data Preparation Agent, the Insight Agent, and the Retail/Manufacturing sector agents of a multi-agent analytics platform — plus their integration with the Orchestrator and shared services. Every SQL query the model generates passes through an AST validator (sqlglot) before running on DuckDB. No number ever comes straight from the LLM.",

  location: "Rabat, Morocco",
  email: "elkhalfimaryame@gmail.com",
  phone: "+212 641 929 689",
  availability: {
    status: "Available",
    type: "Entry-level / Junior engineering roles",
    startDate: "June 2026",
  },
  socials: {
    github: "https://github.com/maryame5",
    linkedin: "https://linkedin.com/in/maryame-el-khalfi",
  },
  // No generic CV published yet — every "resume" CTA asks for it by email
  // instead of pointing at a file that does not exist.
  resumeRequestUrl:
    "mailto:elkhalfimaryame@gmail.com?subject=CV%20request%20—%20Maryame%20El%20Khalfi",

};

export const stats = [
  { value: "3", label: "Engineering internships", detail: "Consulting · FinTech · Public sector" },
  { value: "6", label: "Components shipped on one AI platform", detail: "Agents, backend, frontend" },
  { value: "9+", label: "Products built end-to-end", detail: "From data pipeline to UI" },
  { value: "3rd", label: "National hackathon", detail: "Airport analytics, 48h" },
];

export const differentiators = [
  "Hybrid profile: Java/J2EE microservices, React/TypeScript product work and Python/AI agents.",
  "Three systems delivered in real production conditions — fintech, public sector, tech consulting.",
  "Quality is part of the build: API contracts, code reviews, AOP audit trails, row locking, observability.",
  "Fast ramp-up: every internship meant a new technical environment, owned end-to-end.",
];

export type Principle = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const principles: Principle[] = [
  {
    id: "01",
    title: "Start from the business problem",
    body: "Every system I built started with a person losing time. The architecture is an answer to that, not a showcase.",
    icon: Target,
  },
  {
    id: "02",
    title: "Design before implementation",
    body: "Boundaries, contracts and data flow decided on paper — UML, BPMN, sequence diagrams — before a single endpoint exists.",
    icon: Compass,
  },
  {
    id: "03",
    title: "Keep the human in the loop",
    body: "On data and AI systems, nothing irreversible happens without explicit user validation. Trust is a feature.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Build for scale and maintenance",
    body: "Database-per-service, typed configs, deterministic computation over model guessing, tests on critical rules.",
    icon: Layers,
  },
  {
    id: "05",
    title: "Ship production-ready",
    body: "Observability, security, containerised deployment and documentation are part of done — never a follow-up ticket.",
    icon: Rocket,
  },
];

export const education = [
  {
    institution: "INSEA — Institut National de Statistique et d'Économie Appliquée",
    degree: "Engineering Degree (Bac+5, Master equivalent)",
    field: "Data & Software Engineering",
    period: "2023 — 2026",
  },
  {
    institution: "Lycée Omar Ibn Al-Khattab, Casablanca",
    degree: "CPGE — French preparatory classes",
    field: "Mathematics & Physics (MP)",
    period: "2021 — 2023",
  },
  {
    institution: "Lycée Azzaitoune",
    degree: "Baccalauréat",
    field: "Mathematical Sciences",
    period: "2021",
  },
];

export const certifications = [
  { name: "CS50 Web Programming with Python and JavaScript", issuer: "Harvard University (edX)", year: "2025" },
  { name: "REST API Certification", issuer: "HackerRank", year: "2025" },
  { name: "Database Programming with SQL", issuer: "Oracle Academy", year: "2024" },
];

export const languages = [
  { language: "Arabic", level: "Native" },
  { language: "French", level: "Fluent — C1" },
  { language: "English", level: "Professional — B2" },
];
