/**
 * Case study content model.
 * Every flagship project is driven entirely by this file — adding a new
 * case study requires no layout or component changes.
 */

export type MockKind =
  | "dashboard"
  | "chart"
  | "table"
  | "form"
  | "mobile"
  | "architecture"
  | "console";

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  status: "Enterprise" | "Internship" | "Academic";
  duration: string;
  role: string;
  primaryTech: string[];
  demoUrl?: string;
  sourceUrl?: string;
  heroEmphasis: string[];
  heroMock: MockKind;

  businessContext: {
    lead: string;
    paragraphs: string[];
    stakeholders: { who: string; need: string }[];
  };

  challenge: {
    lead: string;
    items: { title: string; body: string }[];
  };

  solution: {
    paragraph: string;
    pillars: { title: string; body: string }[];
    mock: MockKind;
  };

  architecture: {
    overview: string;
    layers: { id: string; name: string; role: string; tech: string }[];
    flow: string[];
    reasoning: { title: string; body: string }[];
  };

  decisions: {
    question: string;
    decision: string;
    reason: string;
    tradeoff: string;
    benefit: string;
  }[];

  features: {
    title: string;
    problem: string;
    solution: string;
    userValue: string;
    businessImpact: string;
  }[];

  stack: { group: string; items: string[] }[];

  gallery: { title: string; caption: string; kind: MockKind }[];

  demo: {
    title: string;
    description: string;
    videoUrl?: string;
    transcript?: string[];
  };

  lessons: {
    technical: { title: string; body: string }[];
    differentToday: string[];
  };

  impact: {
    statement: string;
    beneficiaries: { who: string; value: string }[];
    metrics: { label: string; value: string }[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-analytics",
    name: "Intelligent Analytics",
    tagline: "Enterprise AI Multi-Agent Analytics Platform",
    oneLiner:
      "A decision-support platform where specialised AI agents collaborate to turn enterprise data into cited, auditable answers business teams can act on.",
    status: "Enterprise",
    duration: "8 months",
    role: "AI & Software Engineer — architecture, backend, agent orchestration",
    primaryTech: ["FastAPI", "LangGraph", "PostgreSQL", "React", "Docker"],
    demoUrl: "#demo",
    heroEmphasis: [
      "Artificial Intelligence",
      "Enterprise",
      "Decision Support",
      "Analytics",
    ],
    heroMock: "dashboard",

    businessContext: {
      lead:
        "Business teams were making decisions on data they could not interrogate themselves.",
      paragraphs: [
        "Every non-trivial question — why did churn move last quarter, which segments drive margin, what happens if we shift pricing — had to be routed through a small analytics team. Requests queued for days, answers arrived as static exports, and follow-up questions restarted the whole cycle.",
        "The organisation did not lack data. It lacked a way for the people accountable for outcomes to reason over that data with confidence, and to trust an answer enough to act on it in a meeting.",
        "The platform was built to close that gap: give business users a conversational way to ask real questions, and give the organisation a guarantee that every answer is traceable to the exact records that produced it.",
      ],
      stakeholders: [
        {
          who: "Business & operations leads",
          need: "Answers to open-ended questions in minutes, in language they already use.",
        },
        {
          who: "Data & analytics team",
          need: "Relief from repetitive ad-hoc requests, without losing control of definitions.",
        },
        {
          who: "Compliance & governance",
          need: "Every number defensible, every access decision enforced and logged.",
        },
      ],
    },

    challenge: {
      lead:
        "The hard part was never generating text. It was guaranteeing that the text was right.",
      items: [
        {
          title: "Language models hallucinate structure",
          body: "Letting a model write raw SQL against a warehouse produces answers that look authoritative and are silently wrong. In a decision-support tool that is worse than no tool at all.",
        },
        {
          title: "Questions are multi-step, not single-shot",
          body: "A real question requires clarification, planning, retrieval, validation and narration. A single prompt cannot own all of those responsibilities and stay debuggable.",
        },
        {
          title: "Data quality is uneven",
          body: "Source systems disagree, dimensions drift and records go missing. An analytics answer that ignores data quality quietly launders bad data into a boardroom slide.",
        },
        {
          title: "Governance is non-negotiable",
          body: "Row-level access rules had to hold regardless of how a question was phrased — a prompt must never become a privilege-escalation path.",
        },
        {
          title: "Latency budgets are human",
          body: "Anything over a handful of seconds breaks the conversational loop and users revert to asking the analytics team.",
        },
      ],
    },

    solution: {
      paragraph:
        "Instead of one model doing everything, the platform runs a small team of specialised agents behind an explicit orchestration graph. A planner decomposes the question, a retrieval agent composes queries against a typed semantic layer — never raw SQL — a data-quality agent validates the result set, a predictive agent extends the answer where forecasting is appropriate, and a narration agent renders the result with citations attached to every claim. A human-in-the-loop checkpoint sits between planning and execution for anything ambiguous or high-impact.",
      pillars: [
        {
          title: "Typed semantic layer",
          body: "Models compose against governed metrics and dimensions, which removes an entire class of hallucination at the source rather than filtering it afterwards.",
        },
        {
          title: "Explicit agent graph",
          body: "Orchestration is a state machine, not a prompt chain. Every transition is observable, replayable and independently testable.",
        },
        {
          title: "Human-in-the-loop by design",
          body: "Ambiguous or high-impact questions pause for confirmation instead of guessing, which is what makes the system usable in regulated conversations.",
        },
        {
          title: "Citations as a first-class output",
          body: "Every sentence in an answer carries the rows that support it, one click away.",
        },
      ],
      mock: "console",
    },

    architecture: {
      overview:
        "The system is organised as four cooperating planes: an interaction plane that owns the conversation, an orchestration plane that runs the agent graph, a data plane that owns governed access to the warehouse, and a platform plane for observability, security and operations. The boundaries were chosen so that the fastest-changing part — agent behaviour — can evolve without touching the parts that carry compliance guarantees.",
      layers: [
        {
          id: "01",
          name: "Interaction plane",
          role: "Conversational UI, streaming responses, citation drill-down, feedback capture.",
          tech: "React · TanStack · SSE",
        },
        {
          id: "02",
          name: "Orchestration plane",
          role: "Agent graph: planner, retriever, data-quality, predictive, narrator, plus human checkpoints.",
          tech: "FastAPI · LangGraph",
        },
        {
          id: "03",
          name: "Data plane",
          role: "Typed semantic layer, deterministic query compilation, row-level policy enforcement, result caching.",
          tech: "PostgreSQL · Redis",
        },
        {
          id: "04",
          name: "Platform plane",
          role: "Structured traces per agent step, evaluation harness, auth, audit log, containerised deploys.",
          tech: "OpenTelemetry · Docker",
        },
      ],
      flow: [
        "User asks a question in natural language",
        "Planner classifies intent and decomposes into steps",
        "Checkpoint: clarify with the user if ambiguous",
        "Retriever compiles governed queries against the semantic layer",
        "Data-quality agent validates coverage, freshness and outliers",
        "Predictive agent extends the result where forecasting applies",
        "Narrator renders the answer with citations attached",
        "Every step is traced, cached and replayable",
      ],
      reasoning: [
        {
          title: "Why a graph instead of a prompt chain",
          body: "A state machine gives explicit transitions, retries scoped to a single node, and the ability to resume a run after a partial failure. Prompt chains hide all three, which makes production incidents unreproducible.",
        },
        {
          title: "Trade-off accepted",
          body: "The graph adds orchestration code and a deployment surface that a single prompt would not need. That cost was accepted in exchange for observability — the ability to answer 'why did it say that' was a launch requirement.",
        },
        {
          title: "Scalability",
          body: "Agents are stateless; state lives in the run log. Horizontal scaling is a matter of adding workers, and expensive nodes are cached on the semantic-query hash rather than the raw question text.",
        },
        {
          title: "Security",
          body: "Row-level policies are enforced in the data plane, below the agents. No prompt, however crafted, can widen a user's access because the model never holds credentials.",
        },
        {
          title: "Performance",
          body: "Planning and narration stream; retrieval is parallelised across independent sub-questions. Cache hits on repeated semantic queries return in well under a second.",
        },
      ],
    },

    decisions: [
      {
        question: "Why FastAPI rather than a JVM service?",
        decision: "FastAPI as the orchestration runtime.",
        reason:
          "The agent and evaluation ecosystem is Python-native; keeping orchestration in the same language as the model tooling removed a serialisation boundary and an entire class of drift between production and evaluation code.",
        tradeoff:
          "Less mature enterprise middleware than Spring Boot, and stricter discipline required around typing.",
        benefit:
          "Async I/O suits fan-out agent workloads, and Pydantic gives typed contracts at the edges for free.",
      },
      {
        question: "Why LangGraph rather than a bespoke orchestrator?",
        decision: "Model the agent workflow as an explicit state graph.",
        reason:
          "Multi-agent behaviour needed checkpoints, conditional branching and resumability. Building that from scratch would have meant reinventing a workflow engine mid-project.",
        tradeoff: "A framework dependency on the critical path.",
        benefit:
          "Human-in-the-loop pauses, per-node retries and run replay came from the model of the system rather than from custom glue.",
      },
      {
        question: "Why a semantic layer instead of text-to-SQL?",
        decision: "Models compose typed metrics; they never emit raw SQL.",
        reason:
          "Correctness had to be structural. If the model cannot express an invalid join, it cannot produce an invalidly joined answer.",
        tradeoff:
          "Every new metric requires modelling work before it becomes askable.",
        benefit:
          "Answer quality became a data-modelling problem — tractable and cumulative — rather than a prompt-tuning problem.",
      },
      {
        question: "Why PostgreSQL for both state and analytics?",
        decision: "One well-understood database, extended rather than replaced.",
        reason:
          "Operational simplicity beats theoretical fit at this data volume; a single backup, security and monitoring story covers run state, semantic metadata and embeddings via pgvector.",
        tradeoff: "A specialised OLAP engine would win on very large scans.",
        benefit:
          "One system to operate, and transactional guarantees across run state and results.",
      },
      {
        question: "Why human-in-the-loop checkpoints?",
        decision: "Pause and ask instead of guessing on ambiguity.",
        reason:
          "Confidently wrong answers destroy adoption faster than slow ones. Ambiguity is a signal, not noise to be resolved silently.",
        tradeoff: "Extra round-trips on a minority of questions.",
        benefit:
          "Trust — the platform became usable in decisions that carry consequences.",
      },
      {
        question: "Why structured traces per agent step?",
        decision: "Emit a typed trace event at every node transition.",
        reason:
          "Non-deterministic systems can only be debugged from evidence. Logs written after an incident are always the wrong logs.",
        tradeoff: "Storage volume and instrumentation discipline.",
        benefit:
          "Regressions are diagnosed by replaying a run rather than reproducing a mood.",
      },
      {
        question: "Why Docker Compose for the delivery unit?",
        decision: "Ship the platform as a composed set of containers.",
        reason:
          "The target environment ranged from a laptop to a managed host; the same composition had to run in all of them without a bespoke setup guide.",
        tradeoff: "Not an orchestration story for very large fleets.",
        benefit:
          "Onboarding, evaluation runs and demos all start from one command.",
      },
    ],

    features: [
      {
        title: "Natural-language analytics",
        problem:
          "Business users could not query the warehouse without an analyst in the loop.",
        solution:
          "A conversational interface backed by planning and governed retrieval.",
        userValue: "Ask a real question, get a defensible answer in minutes.",
        businessImpact:
          "Analytics capacity redirected from ad-hoc requests to modelling work.",
      },
      {
        title: "Cited, auditable answers",
        problem:
          "Numbers circulated in slides with no way to verify their provenance.",
        solution:
          "Every claim links to the exact rows and metric definition behind it.",
        userValue: "Confidence to present a number without hedging.",
        businessImpact: "Audit conversations resolved by a link, not a project.",
      },
      {
        title: "Data-quality guardrails",
        problem:
          "Incomplete or stale source data quietly produced misleading conclusions.",
        solution:
          "A dedicated agent validates coverage, freshness and outliers before narration.",
        userValue: "Warnings surface in the answer rather than after the decision.",
        businessImpact: "Fewer decisions taken on data that was not ready.",
      },
      {
        title: "Predictive extensions",
        problem:
          "Historic reporting answered what happened, never what is likely next.",
        solution:
          "A forecasting agent activates when the question is directional, with intervals shown.",
        userValue: "Forward-looking context inside the same conversation.",
        businessImpact: "Planning discussions start from a shared baseline.",
      },
      {
        title: "Human-in-the-loop review",
        problem:
          "High-impact questions needed oversight before results were trusted.",
        solution: "Explicit checkpoints pause a run for confirmation or correction.",
        userValue: "Control over how a question is interpreted.",
        businessImpact:
          "Adoption in regulated conversations where automation alone was unacceptable.",
      },
      {
        title: "Role-aware access",
        problem:
          "One conversational surface over data with very different sensitivity levels.",
        solution:
          "Row-level policies enforced beneath the agent layer, never in the prompt.",
        userValue: "The same interface for everyone, scoped to what they may see.",
        businessImpact: "A single tool instead of a per-department fork.",
      },
    ],

    stack: [
      { group: "Backend", items: ["Python", "FastAPI", "Pydantic", "Celery"] },
      {
        group: "Artificial Intelligence",
        items: ["LangGraph", "OpenAI", "Anthropic", "pgvector", "RAG", "Evals"],
      },
      { group: "Frontend", items: ["React", "TypeScript", "TanStack", "Tailwind CSS"] },
      { group: "Database", items: ["PostgreSQL", "Redis", "dbt"] },
      { group: "DevOps", items: ["Docker", "Docker Compose", "GitHub Actions"] },
      { group: "Architecture", items: ["Multi-Agent", "Event-Driven", "Hexagonal", "CQRS"] },
      { group: "Testing", items: ["Pytest", "Vitest", "Evaluation harness", "Golden datasets"] },
      { group: "Documentation", items: ["ADRs", "OpenAPI", "Runbooks"] },
    ],

    gallery: [
      {
        title: "Analytics workspace",
        caption: "Conversation, result and citations in one surface.",
        kind: "dashboard",
      },
      {
        title: "Agent run trace",
        caption: "Every node transition, timing and decision, replayable.",
        kind: "console",
      },
      {
        title: "Metric explorer",
        caption: "The typed semantic layer, browsable by business users.",
        kind: "table",
      },
      {
        title: "Forecast view",
        caption: "Predictive extension with intervals rendered inline.",
        kind: "chart",
      },
      {
        title: "System architecture",
        caption: "Interaction, orchestration, data and platform planes.",
        kind: "architecture",
      },
      {
        title: "Mobile review",
        caption: "Approve a checkpoint away from the desk.",
        kind: "mobile",
      },
    ],

    demo: {
      title: "Product walkthrough",
      description:
        "An end-to-end run: an open-ended business question, the planner decomposing it, a human checkpoint, governed retrieval, and a narrated answer with citations.",
      transcript: [
        "A business question is asked in plain language.",
        "The planner decomposes it and surfaces its interpretation for confirmation.",
        "Retrieval composes governed queries against the semantic layer.",
        "The data-quality agent flags a partial period in the source data.",
        "The narrator renders the answer, each claim linked to its rows.",
      ],
    },

    lessons: {
      technical: [
        {
          title: "The semantic layer mattered more than the model",
          body: "Every meaningful quality jump came from better data modelling, not from a stronger model. Once that was clear, effort moved to where it compounded.",
        },
        {
          title: "Non-determinism needs evidence, not intuition",
          body: "Structured traces and a golden-dataset evaluation harness turned 'it feels worse' into a measurable regression with a diff.",
        },
        {
          title: "Orchestration boundaries are product boundaries",
          body: "Splitting planning, retrieval and narration made each independently improvable — and made it obvious which one was failing.",
        },
        {
          title: "Trust is a latency budget of its own",
          body: "Users tolerate a pause for a confirmed interpretation, but not a fast answer they have to double-check.",
        },
      ],
      differentToday: [
        "Build the evaluation harness before the second agent, not after the fifth.",
        "Version the semantic layer from day one — metric definitions drift faster than expected.",
        "Model cost per run as a first-class metric alongside latency and quality.",
      ],
    },

    impact: {
      statement:
        "The platform moved analytics from a queued service to a conversation, without giving up the governance the organisation is held to.",
      beneficiaries: [
        { who: "Business teams", value: "Self-service answers to open-ended questions." },
        { who: "Analysts", value: "Time returned to modelling and deeper work." },
        { who: "Compliance", value: "A traceable answer for every number produced." },
      ],
      metrics: [
        { label: "Time to insight", value: "Days → Minutes" },
        { label: "Answer traceability", value: "100% cited" },
        { label: "Governed metrics", value: "80+ typed" },
      ],
    },
  },

  {
    slug: "admin-crm-service",
    name: "Admin & CRM Service",
    tagline: "Enterprise CRM Microservice",
    oneLiner:
      "A back-office CRM service that unifies client, portfolio and support data behind one governed API for a regulated investment firm.",
    status: "Enterprise",
    duration: "10 months",
    role: "Software Engineer — domain modelling, backend services, integrations",
    primaryTech: ["Spring Boot", "RabbitMQ", "PostgreSQL", "React", "JWT"],
    heroEmphasis: ["Enterprise CRM", "Microservices", "Back-office", "Event-Driven"],
    heroMock: "table",

    businessContext: {
      lead:
        "Operators were serving regulated clients from three systems that disagreed with each other.",
      paragraphs: [
        "Client records lived in one tool, portfolio data in another and support tickets in a third. Each had its own notion of who a client was, and none of them could answer a simple question — what is the complete current state of this relationship — without a human stitching screens together.",
        "The cost was operational and regulatory at once: duplicated records, inconsistent state, and audits that turned into reconstruction projects because no system held the full history of a change.",
        "The service was built to become the single source of truth for the client relationship, with a 360° profile operators could trust and an audit trail the firm could defend.",
      ],
      stakeholders: [
        { who: "Client operations", need: "One screen with the complete relationship state." },
        { who: "Relationship managers", need: "Reliable history before every client conversation." },
        { who: "Risk & compliance", need: "Who changed what, when, and under which approval." },
      ],
    },

    challenge: {
      lead:
        "Replacing three systems in a regulated firm means never losing a record and never blocking an operator.",
      items: [
        {
          title: "Three conflicting domain models",
          body: "Each legacy tool encoded a different definition of client, account and status. A unified model had to be negotiated with the business before a line of code was useful.",
        },
        {
          title: "Audit is a hard requirement",
          body: "Every state change had to be attributable and reconstructable years later — retrofitting that onto mutable rows is not credible to an auditor.",
        },
        {
          title: "Integrations that fail independently",
          body: "Market-data and downstream systems go down. The CRM could not become unavailable because a dependency was.",
        },
        {
          title: "Access control with real consequences",
          body: "Roles map to regulatory responsibilities; an over-permissive default is a reportable incident, not a bug.",
        },
        {
          title: "Migration without downtime",
          body: "Operators had to keep working through the cutover, which ruled out a big-bang replacement.",
        },
      ],
    },

    solution: {
      paragraph:
        "A domain-modelled service exposing one governed REST API and a back-office UI. Bounded contexts — client, portfolio, tickets, access — are separated internally so responsibilities stay clear, while state changes are recorded as append-only events and projected into read models tuned for operator screens. Integrations run asynchronously over RabbitMQ so that a slow or failing downstream never blocks a user action, and every request is authenticated with short-lived JWTs carrying role claims enforced at the service boundary.",
      pillars: [
        {
          title: "360° customer profile",
          body: "One projection assembles identity, portfolio and support history into the view operators actually work from.",
        },
        {
          title: "Event-sourced core",
          body: "Every change is an event, so audit and replay are properties of the design rather than features to build.",
        },
        {
          title: "Asynchronous integration",
          body: "Message-driven boundaries isolate the service from downstream availability and throughput.",
        },
        {
          title: "Role-based access control",
          body: "Permissions are checked at the API boundary against signed claims, never inferred in the UI.",
        },
      ],
      mock: "dashboard",
    },

    architecture: {
      overview:
        "A modular service with explicit bounded contexts, deployed alongside a small set of collaborators rather than fragmented into premature microservices. Write operations append to an event store; asynchronous projectors build read models; integration workers consume and publish domain events over a broker. The boundaries were placed where the business language changes, so the seams for future extraction are already correct.",
      layers: [
        {
          id: "01",
          name: "Back-office UI",
          role: "Operator workspace: 360° profile, ticket queues, approval flows.",
          tech: "React · TypeScript",
        },
        {
          id: "02",
          name: "API & security",
          role: "REST contracts, JWT verification, role enforcement, request audit.",
          tech: "Spring Boot · Spring Security",
        },
        {
          id: "03",
          name: "Domain contexts",
          role: "Client, portfolio, ticketing and access as separated modules with owned invariants.",
          tech: "Java · DDD",
        },
        {
          id: "04",
          name: "Event store & projections",
          role: "Append-only history plus read models tuned per screen.",
          tech: "PostgreSQL",
        },
        {
          id: "05",
          name: "Integration workers",
          role: "Asynchronous consumers and publishers for market data and downstream systems.",
          tech: "RabbitMQ",
        },
      ],
      flow: [
        "Operator acts in the back-office UI",
        "API verifies the JWT and enforces role claims",
        "Domain context validates invariants",
        "A domain event is appended to the store",
        "Projectors update the read models",
        "Integration workers publish to downstream systems",
        "Failures are retried with a dead-letter path",
      ],
      reasoning: [
        {
          title: "Why a modular monolith first",
          body: "Domain boundaries were still being negotiated with the business. Extracting services before the language stabilised would have frozen the wrong seams into a network topology.",
        },
        {
          title: "Trade-off accepted",
          body: "A single deployable limits independent scaling. That was acceptable at the observed load, and the module boundaries keep extraction a refactor rather than a rewrite.",
        },
        {
          title: "Scalability",
          body: "Reads dominate. Projections are cheap to add and can be scaled or rebuilt independently of the write path.",
        },
        {
          title: "Security",
          body: "Short-lived JWTs with role claims, verified at the boundary, plus a per-request audit record. The UI never decides authorisation.",
        },
        {
          title: "Performance",
          body: "Operator screens read from purpose-built projections instead of joining across contexts at request time.",
        },
      ],
    },

    decisions: [
      {
        question: "Why Spring Boot rather than a lighter framework?",
        decision: "Spring Boot as the service platform.",
        reason:
          "The firm's operational and security tooling was JVM-centric, and Spring Security covers regulated auth requirements with reviewed, well-documented primitives.",
        tradeoff: "Heavier runtime and more configuration surface.",
        benefit:
          "Mature transactional, security and observability integration the team could be audited on.",
      },
      {
        question: "Why RabbitMQ rather than synchronous calls?",
        decision: "Message-driven integration with downstream systems.",
        reason:
          "Downstream availability was outside the team's control. Synchronous coupling would have exported every dependency's outage to the operator.",
        tradeoff:
          "Eventual consistency, plus retry and dead-letter handling to design and operate.",
        benefit:
          "The CRM stays responsive during downstream incidents, and backlogs drain automatically.",
      },
      {
        question: "Why event sourcing for the core?",
        decision: "Append-only events as the source of truth.",
        reason:
          "Audit was a hard requirement. Deriving current state from history makes 'what did this record look like in March' a query.",
        tradeoff:
          "Schema evolution discipline and more storage than mutable rows.",
        benefit: "Audits became queries; incident reconstruction became replay.",
      },
      {
        question: "Why PostgreSQL as the event store?",
        decision: "Reuse the relational database rather than adopt a dedicated store.",
        reason:
          "Operational simplicity: one backup, restore and monitoring story the platform team already ran.",
        tradeoff: "Fewer built-in event-store features to lean on.",
        benefit: "No new operational surface for a system under regulatory scrutiny.",
      },
      {
        question: "Why JWT rather than server sessions?",
        decision: "Short-lived signed tokens with role claims.",
        reason:
          "Multiple front-ends and workers needed to verify identity without a shared session store on every hop.",
        tradeoff: "Revocation requires short lifetimes and a refresh flow.",
        benefit: "Stateless verification at every boundary, including async workers.",
      },
      {
        question: "Why a 360° projection instead of UI-side composition?",
        decision: "Assemble the operator view server-side as a read model.",
        reason:
          "Composing five calls in the browser made the screen fragile and slow, and put consistency decisions in the wrong layer.",
        tradeoff: "Another projection to maintain and rebuild.",
        benefit: "One fast, consistent payload for the most-used screen in the product.",
      },
    ],

    features: [
      {
        title: "360° customer profile",
        problem: "Relationship state was spread across three systems.",
        solution: "A single projection assembling identity, portfolio and support history.",
        userValue: "Full context before every client conversation.",
        businessImpact: "Fewer handoffs and materially faster client response.",
      },
      {
        title: "Ticket management",
        problem: "Support requests lived outside the client record entirely.",
        solution: "Ticketing modelled as a first-class context linked to the client.",
        userValue: "History and current issues in one place.",
        businessImpact: "Issues resolved without re-establishing context each time.",
      },
      {
        title: "Role-based access control",
        problem: "Legacy tools granted access far beyond role requirements.",
        solution: "Claims verified at the API boundary against modelled roles.",
        userValue: "Operators see exactly their remit.",
        businessImpact: "Access posture defensible in a regulatory review.",
      },
      {
        title: "Approval workflows",
        problem: "Sensitive changes were approved over email with no record.",
        solution: "Approvals modelled as domain events with explicit states.",
        userValue: "Clear ownership of every pending action.",
        businessImpact: "Controls evidenced by data rather than testimony.",
      },
      {
        title: "Event-driven integrations",
        problem: "Downstream outages froze internal operations.",
        solution: "Asynchronous publish and consume with retry and dead-letter paths.",
        userValue: "Work continues during third-party incidents.",
        businessImpact: "Operational availability decoupled from vendor availability.",
      },
      {
        title: "Full audit history",
        problem: "Audits required manual reconstruction across systems.",
        solution: "Append-only events with point-in-time reconstruction.",
        userValue: "Any past state answered directly.",
        businessImpact: "Audit preparation reduced from a project to a query.",
      },
    ],

    stack: [
      { group: "Backend", items: ["Java", "Spring Boot", "Spring Security", "REST"] },
      { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { group: "Database", items: ["PostgreSQL", "Flyway", "Redis"] },
      { group: "Infrastructure", items: ["RabbitMQ", "Docker", "Nginx"] },
      { group: "DevOps", items: ["GitHub Actions", "Prometheus", "Grafana"] },
      { group: "Architecture", items: ["DDD", "Event Sourcing", "CQRS", "Modular Monolith"] },
      { group: "Testing", items: ["JUnit", "Testcontainers", "Contract tests"] },
      { group: "Documentation", items: ["ADRs", "OpenAPI", "Domain glossary"] },
    ],

    gallery: [
      { title: "Client 360 view", caption: "Identity, portfolio and tickets in one projection.", kind: "dashboard" },
      { title: "Ticket queue", caption: "Operator workload with ownership and SLA state.", kind: "table" },
      { title: "Approval flow", caption: "Pending changes with explicit reviewers.", kind: "form" },
      { title: "Service topology", caption: "Contexts, broker and projections.", kind: "architecture" },
      { title: "Integration monitor", caption: "Queue depth, retries and dead letters.", kind: "chart" },
      { title: "Mobile approvals", caption: "Review and approve away from the desk.", kind: "mobile" },
    ],

    demo: {
      title: "Back-office walkthrough",
      description:
        "From a client record to an approved change: the 360° profile, a ticket resolution, an approval flow, and the resulting audit trail.",
      transcript: [
        "Open a client and review the assembled 360° profile.",
        "Resolve an open ticket linked to the relationship.",
        "Submit a sensitive change that requires approval.",
        "Approve as a second role and observe the emitted events.",
        "Reconstruct the record's state before the change.",
      ],
    },

    lessons: {
      technical: [
        {
          title: "Domain language before architecture",
          body: "The weeks spent agreeing a shared vocabulary with the business produced better boundaries than any diagramming session.",
        },
        {
          title: "Audit-by-design is cheaper than audit-by-retrofit",
          body: "Making history the source of truth removed a whole category of compliance work that would otherwise have recurred every quarter.",
        },
        {
          title: "Asynchrony is a product decision",
          body: "Choosing eventual consistency at integration boundaries was a conversation with operations, not a purely technical call.",
        },
        {
          title: "Projections keep screens honest",
          body: "Once the operator view had an owner, its performance and correctness stopped being everyone's and no one's problem.",
        },
      ],
      differentToday: [
        "Invest in event-schema versioning tooling from the first release.",
        "Give projections an automated rebuild path before the first production incident, not after.",
        "Model the migration as a product with its own milestones rather than a phase at the end.",
      ],
    },

    impact: {
      statement:
        "Three fragmented tools became one governed product, with the audit trail the firm is required to produce built into how the system works.",
      beneficiaries: [
        { who: "Operators", value: "One workspace instead of three, with full context." },
        { who: "Clients", value: "Faster, better-informed responses." },
        { who: "Compliance", value: "Point-in-time answers without reconstruction." },
      ],
      metrics: [
        { label: "Systems consolidated", value: "3 → 1" },
        { label: "State changes audited", value: "100%" },
        { label: "Downstream coupling", value: "Fully async" },
      ],
    },
  },

  {
    slug: "aos-micepp",
    name: "AOS MICEPP",
    tagline: "Digital Social Services Platform",
    oneLiner:
      "A public-sector platform that moves regulated social service requests from paper counters to a tracked, transparent digital workflow.",
    status: "Internship",
    duration: "6 months",
    role: "Full-stack Engineer — Angular front-end, Spring Boot services, workflow modelling",
    primaryTech: ["Angular", "Spring Boot", "PostgreSQL", "WebSockets", "SendGrid"],
    heroEmphasis: [
      "Public Sector",
      "Digital Transformation",
      "Citizen Services",
      "Workflow",
    ],
    heroMock: "form",

    businessContext: {
      lead:
        "Citizens were queuing at counters to submit paper forms nobody could then locate.",
      paragraphs: [
        "Social service requests were submitted in person, on paper, during office hours. Supporting documents were photocopied and filed, and the only way to learn a request's status was to travel back to the office and ask.",
        "For the administration the same process was equally costly: files moved physically between offices, workloads were invisible, and there was no reliable way to report on how long a given service actually took.",
        "The platform digitises the full lifecycle — submission, documents, review, decision and notification — so that citizens can act from anywhere and administrators can see and manage real workload.",
      ],
      stakeholders: [
        { who: "Citizens", need: "Submit and track a request without travelling to an office." },
        { who: "Case agents", need: "A clear queue with the documents already attached." },
        { who: "Regional administration", need: "Visibility on volume, delay and bottlenecks." },
      ],
    },

    challenge: {
      lead:
        "Digitising a regulated public service means encoding rules that were previously carried by people.",
      items: [
        {
          title: "Regulated, multi-step workflows",
          body: "Each service has legally defined steps, eligible actors and outcomes. Encoding them in UI logic would have made every regulatory change a code-wide search.",
        },
        {
          title: "Documents are the process",
          body: "Requests are inseparable from their supporting documents, which must be uploaded, validated, stored securely and retrievable years later.",
        },
        {
          title: "Very wide audience",
          body: "Users range from confident smartphone users to first-time digital-service users on old devices and slow connections.",
        },
        {
          title: "Multi-office deployment",
          body: "Regional offices needed local autonomy over their queues while sharing one data model and one release.",
        },
        {
          title: "Trust in a public service",
          body: "A citizen who submits a request and hears nothing assumes it was lost. Status visibility was a functional requirement, not a nice-to-have.",
        },
      ],
    },

    solution: {
      paragraph:
        "A service portal built around an explicit workflow model rather than hard-coded screens. Each service type declares its steps, required documents, eligible roles and outcomes as data, so the same Angular front-end and Spring Boot backend serve every service and a new one is a configuration exercise. Citizens submit and track requests with live status; agents work from role-scoped queues; WebSockets push status changes to open sessions and SendGrid delivers email notifications for everything that happens while the citizen is away.",
      pillars: [
        {
          title: "Workflow as data",
          body: "Regulated processes are declared, versioned and reviewable by non-developers instead of buried in components.",
        },
        {
          title: "Document management",
          body: "Upload, validation, secure storage and retrieval treated as a core capability of the platform.",
        },
        {
          title: "Real-time tracking",
          body: "Live status over WebSockets, with email as the durable channel for anything asynchronous.",
        },
        {
          title: "Responsive by necessity",
          body: "The interface targets the phone first, because that is the device most citizens actually have.",
        },
      ],
      mock: "mobile",
    },

    architecture: {
      overview:
        "A conventional, deliberately boring three-tier architecture with one opinionated addition: a workflow engine that reads service definitions as data. The value of the system is in the correctness of those definitions and in the reliability of document handling and notification, so the surrounding architecture was kept as simple as possible to deploy and reason about across regional offices.",
      layers: [
        {
          id: "01",
          name: "Citizen & agent front-end",
          role: "Responsive request forms, document upload, tracking, agent queues.",
          tech: "Angular · TypeScript",
        },
        {
          id: "02",
          name: "API & security",
          role: "REST endpoints, JWT authentication, role scoping, validation.",
          tech: "Spring Boot · Spring Security",
        },
        {
          id: "03",
          name: "Workflow engine",
          role: "Service definitions, step transitions, eligibility and outcome rules.",
          tech: "Java · Declarative model",
        },
        {
          id: "04",
          name: "Documents & data",
          role: "Request records, versioned documents, object storage, retention.",
          tech: "PostgreSQL · Object storage",
        },
        {
          id: "05",
          name: "Notification layer",
          role: "Live status push and durable email delivery with templating.",
          tech: "WebSockets · SendGrid",
        },
      ],
      flow: [
        "Citizen authenticates and selects a service",
        "The workflow definition renders the required form and documents",
        "Submission validates eligibility and stores documents",
        "The request enters the correct office queue",
        "An agent reviews, requests changes or decides",
        "Status is pushed live and emailed as a durable record",
        "The full history stays attached to the request",
      ],
      reasoning: [
        {
          title: "Why an explicit workflow model",
          body: "Public services change by regulation, not by sprint. Declaring steps as data let the administration review process changes directly and kept legal updates out of the codebase.",
        },
        {
          title: "Trade-off accepted",
          body: "A declarative engine is more upfront work than coding three services by hand — and it paid for itself the moment the fourth service and the first regulatory change arrived.",
        },
        {
          title: "Scalability",
          body: "Stateless API instances behind a load balancer, documents in object storage rather than the database, and per-office queues that partition naturally.",
        },
        {
          title: "Security",
          body: "JWT authentication, role-scoped queries, signed time-limited document URLs, and validation of every upload's type and size before storage.",
        },
        {
          title: "Performance",
          body: "Lazy-loaded Angular routes and compressed assets for slow connections; documents streamed directly to storage rather than through the application.",
        },
      ],
    },

    decisions: [
      {
        question: "Why Angular for the front-end?",
        decision: "Angular as the client framework.",
        reason:
          "The administration's teams already maintained Angular applications, and its opinionated structure suited a codebase that would be handed over.",
        tradeoff: "Heavier initial bundle than a minimal SPA framework.",
        benefit: "Long-term maintainability by the receiving team, with consistent conventions.",
      },
      {
        question: "Why model workflows as data?",
        decision: "Declarative service definitions interpreted by an engine.",
        reason:
          "Regulated processes change independently of software releases; encoding them in components would have made each change a risky code edit.",
        tradeoff: "An engine to build, test and document.",
        benefit: "New services and legal changes ship as reviewed configuration.",
      },
      {
        question: "Why WebSockets alongside email?",
        decision: "Live push for open sessions, email for everything else.",
        reason:
          "Citizens rarely keep a tab open for days. Real-time alone would have been invisible; email alone would have felt inert while using the site.",
        tradeoff: "Two notification paths to keep consistent.",
        benefit: "Immediate feedback while active, and a durable record afterwards.",
      },
      {
        question: "Why SendGrid rather than an internal mail server?",
        decision: "A managed delivery provider with templating.",
        reason:
          "Deliverability to consumer inboxes is a specialised operational problem, and citizens not receiving mail would have undermined the whole service.",
        tradeoff: "An external dependency and per-message cost.",
        benefit: "Reliable delivery, bounce visibility and templates the administration can edit.",
      },
      {
        question: "Why object storage for documents?",
        decision: "Store files outside the relational database.",
        reason:
          "Scans dominate storage volume; keeping them in the database would have made backups and restores unwieldy for every office.",
        tradeoff: "Two systems to secure and keep consistent.",
        benefit: "Cheap retention, streamed uploads, and signed time-limited access.",
      },
      {
        question: "Why containerised per-office deployment?",
        decision: "One image, per-region configuration.",
        reason:
          "Offices needed operational independence without the codebase forking into regional variants.",
        tradeoff: "Configuration management across environments.",
        benefit: "A single release path with local autonomy over queues and data.",
      },
    ],

    features: [
      {
        title: "Online service requests",
        problem: "Submission required travelling to an office during working hours.",
        solution: "Guided, responsive forms generated from the service definition.",
        userValue: "Submit from any device, at any time.",
        businessImpact: "Counter traffic replaced by digital submissions.",
      },
      {
        title: "Document management",
        problem: "Supporting documents were photocopied and physically filed.",
        solution: "Validated upload with secure storage and signed retrieval.",
        userValue: "Attach once, reuse across the request lifecycle.",
        businessImpact: "Files stop being lost between offices.",
      },
      {
        title: "Request tracking",
        problem: "Status was only obtainable by visiting or calling the office.",
        solution: "A live timeline of every step and decision on the request.",
        userValue: "Certainty that a request is progressing.",
        businessImpact: "A measurable drop in status-chasing contacts.",
      },
      {
        title: "Notifications",
        problem: "Citizens missed requests for additional documents entirely.",
        solution: "Live push while active, templated email as the durable channel.",
        userValue: "Prompted exactly when action is needed.",
        businessImpact: "Fewer requests stalled waiting on the citizen.",
      },
      {
        title: "Agent workflow queues",
        problem: "Workload was invisible and distributed by physical proximity.",
        solution: "Role-scoped queues driven by the workflow state machine.",
        userValue: "A clear, prioritised list of what to handle next.",
        businessImpact: "Bottlenecks became visible and manageable per office.",
      },
      {
        title: "Multi-office administration",
        problem: "Each office improvised its own process and records.",
        solution: "A shared data model with per-office configuration and reporting.",
        userValue: "Consistent service wherever the citizen applies.",
        businessImpact: "Comparable metrics across the region for the first time.",
      },
    ],

    stack: [
      { group: "Frontend", items: ["Angular", "TypeScript", "RxJS", "SCSS"] },
      { group: "Backend", items: ["Java", "Spring Boot", "Spring Security", "REST"] },
      { group: "Database", items: ["PostgreSQL", "Liquibase", "Object storage"] },
      { group: "Infrastructure", items: ["Docker", "Nginx", "WebSockets"] },
      { group: "Tools", items: ["SendGrid", "Swagger UI", "Postman", "Figma"] },
      { group: "Architecture", items: ["Three-tier", "Declarative workflow", "RBAC"] },
      { group: "Testing", items: ["JUnit", "Jasmine", "Karma", "Manual UAT"] },
      { group: "Documentation", items: ["Service catalogue", "OpenAPI", "User guides"] },
    ],

    gallery: [
      { title: "Citizen portal", caption: "Service catalogue and request entry point.", kind: "dashboard" },
      { title: "Request form", caption: "Generated from the service definition.", kind: "form" },
      { title: "Mobile tracking", caption: "Live status timeline on a phone.", kind: "mobile" },
      { title: "Agent queue", caption: "Role-scoped workload per office.", kind: "table" },
      { title: "Workflow model", caption: "Declared steps, actors and outcomes.", kind: "architecture" },
      { title: "Service reporting", caption: "Volume and delay per service and office.", kind: "chart" },
    ],

    demo: {
      title: "Citizen-to-agent walkthrough",
      description:
        "A complete request lifecycle: a citizen submits with documents, an agent reviews and requests a correction, and the citizen is notified and resubmits.",
      transcript: [
        "A citizen selects a service and completes the generated form.",
        "Supporting documents are validated and uploaded.",
        "The request appears in the correct office queue.",
        "An agent requests a correction; the citizen is notified live and by email.",
        "The corrected request is approved and the decision is recorded.",
      ],
    },

    lessons: {
      technical: [
        {
          title: "Explicit process models beat clever code",
          body: "Making workflows readable by non-developers turned requirement discussions into direct reviews of the model itself.",
        },
        {
          title: "Notification is part of the product",
          body: "Users judged the service on whether it told them what was happening far more than on the sophistication of the forms.",
        },
        {
          title: "Design for the worst device on the list",
          body: "Optimising for a mid-range phone on a slow connection improved the experience for everyone else by default.",
        },
        {
          title: "Shared conventions scale a team",
          body: "Agreeing API and UI patterns early meant new contributors shipped features without redesigning the basics.",
        },
      ],
      differentToday: [
        "Version workflow definitions explicitly so in-flight requests keep the rules they started under.",
        "Introduce an accessibility audit at design time rather than before launch.",
        "Add a service-level analytics model from the first release to measure delay per step.",
      ],
    },

    impact: {
      statement:
        "A paper process that required a physical visit became a tracked digital service, with the administration gaining visibility it never previously had.",
      beneficiaries: [
        { who: "Citizens", value: "Apply and track from anywhere, at any hour." },
        { who: "Agents", value: "Complete files in a prioritised queue." },
        { who: "Administration", value: "Measurable service performance per office." },
      ],
      metrics: [
        { label: "Submission channel", value: "Paper → Digital" },
        { label: "Status visibility", value: "Real time" },
        { label: "Regional offices", value: "Multi-office rollout" },
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNeighbours(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined, others: [] };
  return {
    prev: caseStudies[(i - 1 + caseStudies.length) % caseStudies.length],
    next: caseStudies[(i + 1) % caseStudies.length],
    others: caseStudies.filter((c) => c.slug !== slug),
  };
}
