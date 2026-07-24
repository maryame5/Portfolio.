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
      "An analytics product that turns raw operational data into decision-ready insights, combining a modern data pipeline with LLM-driven interpretation.",
    outcome:
      "Reduced time-to-insight from days to minutes for business teams, with fully traceable, auditable answers.",
    businessContext:
      "Business teams needed to reason over large volumes of operational data without waiting on analysts for every question.",
    problem:
      "Existing dashboards answered known questions well but could not handle open-ended, exploratory ones. Ad-hoc SQL was slow, error-prone and inaccessible to non-technical users.",
    solution:
      "A layered analytics platform: a typed semantic layer over the warehouse, a query planner that decomposes natural-language questions into safe, deterministic queries, and an LLM interpretation layer that produces explanations with citations back to the underlying data.",
    architecture:
      "Ingestion into a versioned warehouse, a semantic model expressed as typed metrics and dimensions, a planner that generates SQL against the semantic layer only, and a generation service that narrates results with source rows attached to every claim.",
    keyDecisions: [
      "LLMs never write raw SQL — they compose against a typed semantic layer, which eliminates entire classes of hallucinations.",
      "Every answer is traceable to the exact rows that produced it, in one click.",
      "Query planning, execution and narration are separate services with strict interfaces.",
    ],
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
      "OpenAI / Anthropic APIs",
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
    slug: "intelligent-workflow-engine",
    name: "Intelligent Workflow Engine",
    summary:
      "A configurable engine that combines rule-based logic and language models to automate multi-step business workflows.",
    outcome:
      "Cut turnaround time on repetitive operational tasks while keeping human control on high-risk decisions.",
    businessContext:
      "Internal operations teams spent significant time on repetitive, semi-structured tasks that were hard to automate with pure rule engines.",
    problem:
      "Rules alone could not handle unstructured inputs; pure LLM calls were unreliable, expensive and non-auditable at scale.",
    solution:
      "A workflow engine where each step is a typed contract — rules, LLM calls, or human checkpoints — composed into deterministic, resumable pipelines.",
    architecture:
      "Event-driven backend with a durable state store, an orchestrator scheduling steps, and adapters isolating model providers behind a stable interface.",
    keyDecisions: [
      "Model calls treated as replaceable adapters, never called directly from business logic.",
      "Every workflow run is fully replayable from persisted events for audit and debugging.",
      "Human-in-the-loop is a first-class step type, not an escape hatch.",
    ],
    features: [
      "Declarative workflow definition",
      "Durable, resumable execution",
      "Provider-agnostic model adapters",
      "Structured audit trail",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "OpenAI / Anthropic APIs"],
    lessons: [
      "Isolating model providers behind adapters made evaluation and cost tuning tractable.",
      "Treating audit and replay as core requirements shaped every architectural choice.",
    ],
    futureWork: [
      "Cost- and latency-aware routing across models.",
      "Offline evaluation harness for step-level regression testing.",
    ],
  },
  {
    slug: "domain-aware-assistant",
    name: "Domain-Aware Assistant",
    summary:
      "A retrieval-augmented assistant grounded in a curated knowledge base for a specific business domain.",
    outcome:
      "Reduced time to reliable answers for internal specialists without exposing raw model outputs to end users.",
    businessContext:
      "Domain experts needed fast, grounded answers from a large body of internal documentation and structured data.",
    problem:
      "Generic assistants hallucinated on domain-specific questions; static search returned documents but not answers.",
    solution:
      "A retrieval layer over curated sources feeding a constrained generation step, with citations and confidence signals surfaced to the user.",
    architecture:
      "Ingestion pipeline building typed chunks, a vector store with metadata filtering, and a generation service enforcing citation and refusal patterns.",
    keyDecisions: [
      "Retrieval quality prioritized over model choice.",
      "Refuse-when-unsure was a product requirement, not an afterthought.",
      "Every answer carries traceable sources.",
    ],
    features: [
      "Metadata-scoped retrieval",
      "Citations on every answer",
      "Explicit refusal on low confidence",
    ],
    stack: ["Python", "FastAPI", "pgvector", "TypeScript", "React"],
    lessons: [
      "Most quality gains came from ingestion and retrieval, not from the generation model.",
      "Small evaluation sets, run often, beat large ones run rarely.",
    ],
    futureWork: [
      "Feedback loop to promote and demote sources based on usage.",
      "Structured extraction to complement free-text answers.",
    ],
  },
];

export const flagshipProject = projects.find((p) => p.flagship) ?? projects[0];
