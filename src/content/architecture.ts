export type ArchitectureCase = {
  slug: string;
  title: string;
  businessProblem: string;
  constraints: string[];
  decisions: string[];
  technologyChoices: string[];
  tradeoffs: string[];
  lessons: string[];
  outcome: string;
};

export const architectureCases: ArchitectureCase[] = [
  {
    slug: "model-routing-layer",
    title: "Model Routing Layer",
    businessProblem:
      "A growing portion of product traffic was flowing through a single frontier model, driving cost and latency without a proportional quality gain.",
    constraints: [
      "No degradation of user-perceived quality.",
      "Full observability of routing decisions.",
      "No vendor lock-in on model providers.",
    ],
    decisions: [
      "Introduce a routing layer between the product and any model provider.",
      "Route based on task type, expected complexity and required guarantees.",
      "Fall back to stronger models only when the router's confidence is low.",
    ],
    technologyChoices: [
      "Lightweight classifier for task typing.",
      "Provider adapters with a common typed interface.",
      "Structured logs for every routing decision.",
    ],
    tradeoffs: [
      "Added a service on the hot path — mitigated with strict latency budgets.",
      "More components to operate, in exchange for cost and flexibility gains.",
    ],
    lessons: [
      "The routing layer became the single most valuable piece of infrastructure for cost control.",
      "Treating models as replaceable adapters unlocked continuous evaluation.",
    ],
    outcome:
      "Meaningful reduction in per-request cost with no measurable quality regression on tracked task types.",
  },
  {
    slug: "event-sourced-workflows",
    title: "Event-Sourced Workflow State",
    businessProblem:
      "Long-running, multi-step workflows needed to be auditable, resumable and safe to retry after partial failures.",
    constraints: [
      "Regulated environment — every state change must be traceable.",
      "Steps could take seconds or hours.",
      "Operators needed to inspect and replay individual runs.",
    ],
    decisions: [
      "Model workflow state as an append-only event log.",
      "Derive current state via deterministic reducers.",
      "Make each step idempotent and side-effect-isolated.",
    ],
    technologyChoices: [
      "PostgreSQL as event store for operational simplicity.",
      "A thin orchestrator instead of a heavyweight workflow engine.",
    ],
    tradeoffs: [
      "More discipline required around event schema evolution.",
      "Slightly more storage in exchange for full replayability.",
    ],
    lessons: [
      "Choosing the simplest system that satisfies the constraints paid off in operations.",
      "Replay is a debugging superpower when it's built in from day one.",
    ],
    outcome:
      "Incidents that previously required manual reconstruction became one-command replays.",
  },
];
