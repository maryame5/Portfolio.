export type ArchitectureCase = {
  slug: string;
  title: string;
  scope: string;
  businessProblem: string;
  constraints: string[];
  decisions: { decision: string; rationale: string }[];
  tradeoffs: string[];
  outcome: string;
  layers: { name: string; detail: string }[];
};

export const architectureCases: ArchitectureCase[] = [
  {
    slug: "multi-agent-analytics",
    title: "Multi-agent analytics orchestration",
    scope:
      "Intelligent Analytics — DXC Technology. Six components: Frontend (React 18), API Backend (FastAPI/PostgreSQL), SSO Keycloak, Data Preparation Agent, Insight Agent, Sector Agents (Retail, Manufacturing).",
    businessProblem:
      "Non-technical users needed to go from a raw file to a sector prediction alone, while the organisation could not accept an AI system silently mutating data or inventing numbers.",
    constraints: [
      "No KPI may be produced by the language model — only computed on real rows.",
      "No irreversible data transformation without explicit user approval.",
      "The system must adapt to the user's industry without a per-client rebuild.",
      "Single sign-on across every service in the platform.",
    ],
    decisions: [
      {
        decision: "LLMs generate configuration, never results.",
        rationale:
          "The model proposes which KPI and chart make sense; a deterministic validator checks columns, aggregations and types, and DuckDB computes the actual values. Entire classes of hallucination disappear.",
      },
      {
        decision: "Human-in-the-Loop checkpoint between Bronze and Silver.",
        rationale:
          "Ingestion never mutates the source. The cleaning plan is proposed with a quality score and per-column anomalies, and the user approves, refuses or overrides each action before Silver artefacts are produced.",
      },
      {
        decision: "Sector knowledge extracted into a Shared Config Registry.",
        rationale:
          "Retail and Manufacturing agents resolve their use cases, target variables and vocabulary from a shared registry instead of hard-coded branches, so a new sector is a configuration, not a release.",
      },
      {
        decision: "Conditional routing through a central LangGraph orchestrator.",
        rationale:
          "Each agent exposes a standardised contract to the Training Agent; the orchestrator routes on the detected sector. Agents stay independently testable — 120 unit tests on the retail contract.",
      },
    ],
    tradeoffs: [
      "Deterministic validation rejects some legitimate exotic queries — accepted in exchange for trustworthy numbers.",
      "HITL adds a step to the flow; it is the step that makes the output defensible.",
      "A shared registry centralises coupling, but keeps sector logic auditable in one place.",
    ],
    outcome:
      "A business user imports a file and reaches a validated dashboard, natural-language exploration and sector predictions without a data team, with every number traceable to real rows.",
    layers: [
      { name: "Ingestion", detail: "Bronze layer on MinIO — source data untouched" },
      { name: "Quality", detail: "Profiling + 5-dimension scoring + HITL plan → Silver" },
      { name: "Orchestration", detail: "LangGraph StateGraph with conditional sector routing" },
      { name: "Computation", detail: "DuckDB deterministic execution, sqlglot AST SELECT-only validation" },
      { name: "Persistence", detail: "PostgreSQL JSONB — projects, dashboards, conversations" },
      { name: "Experience", detail: "React 18 rendering dashboards from structured config" },
    ],
  },
  {
    slug: "low-latency-identity",
    title: "Low-latency identity and quota integrity",
    scope: "CQOS trading platform — Lotus Capital",
    businessProblem:
      "Every request on a trading platform passes through token validation and quota checks. Both were on the critical path: one added latency, the other leaked revenue under concurrency.",
    constraints: [
      "Token validation must stay imperceptible under load.",
      "Quotas must hold exactly, even with simultaneous requests across instances.",
      "Sensitive operations must be auditable without polluting business code.",
    ],
    decisions: [
      {
        decision: "Two-tier cache for token validation.",
        rationale:
          "Caffeine handles same-instance hits in memory; Redis keeps coherence across servers. P95 validation stays under 20ms without weakening revocation.",
      },
      {
        decision: "Quota enforcement at the database, not in application logic.",
        rationale:
          "SELECT FOR UPDATE serialises the check-and-decrement on the row itself, so concurrency cannot produce an overrun regardless of how many instances run.",
      },
      {
        decision: "Cross-cutting concerns through AOP.",
        rationale:
          "Audit logging and observability are woven around sensitive operations, so business services stay readable and instrumentation cannot be forgotten.",
      },
    ],
    tradeoffs: [
      "Row locking serialises hot quota rows — acceptable given quota volume, and far cheaper than a reconciliation process.",
      "Two cache tiers mean two invalidation paths; encapsulated behind a single validation service.",
    ],
    outcome:
      "Sub-20ms P95 token validation, zero quota overruns in production, and complete traceability of critical actions.",
    layers: [
      { name: "Edge", detail: "Spring Cloud Gateway + Eureka discovery" },
      { name: "Identity", detail: "Spring Security 6, JWT, multi-provider OAuth2" },
      { name: "Cache", detail: "Caffeine local + Redis distributed" },
      { name: "Domain", detail: "Subscription quotas with PostgreSQL row locking" },
      { name: "Integration", detail: "OpenFeign service calls, RabbitMQ events" },
      { name: "Observability", detail: "Micrometer + Sleuth via Spring AOP" },
    ],
  },
  {
    slug: "public-service-portal",
    title: "Auditable public-service delivery",
    scope: "AOS MICEPP Portal — Ministry of Investment",
    businessProblem:
      "A regulated public process had to move online with real-time visibility for citizens, full auditability for managers and no budget for additional infrastructure.",
    constraints: [
      "Every action on a claim must be traceable for later dispute resolution.",
      "Document storage had to fit inside the existing database footprint.",
      "Deployment inside the ministry environment must be reproducible.",
    ],
    decisions: [
      {
        decision: "Push status changes instead of polling.",
        rationale:
          "SockJS/STOMP WebSockets deliver claim status changes as they happen, removing the phone calls and office visits the process was built around.",
      },
      {
        decision: "Compressed BLOBs instead of a document store.",
        rationale:
          "Compression on write and decompression on read kept attachments inside PostgreSQL — no new infrastructure, no new cost, one backup story.",
      },
      {
        decision: "Audit journaling as an aspect.",
        rationale:
          "Every complaint action is journaled automatically, so the audit trail cannot drift from the business code.",
      },
    ],
    tradeoffs: [
      "Database-stored documents constrain very large files — bounded by the domain, and revisitable later.",
      "WebSockets add connection state; contained to the notification channel only.",
    ],
    outcome:
      "Civil servants track their claims in real time, managers hold a complete complaint history, and the whole stack deploys with a single command.",
    layers: [
      { name: "Clients", detail: "Angular 20 public portal + admin back-office" },
      { name: "API", detail: "Spring Boot 3 REST, Swagger/OpenAPI contracts" },
      { name: "Realtime", detail: "SockJS / STOMP notification channel" },
      { name: "Security", detail: "Spring Security, JWT, single-use activation links" },
      { name: "Data", detail: "PostgreSQL with compressed BLOB attachments" },
      { name: "Delivery", detail: "Docker Compose full-stack deployment" },
    ],
  },
];
