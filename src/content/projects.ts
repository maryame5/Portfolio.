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
};

export const projects: Project[] = [
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
