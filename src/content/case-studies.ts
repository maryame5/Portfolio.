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
    tagline: "Multi-Agent Analytics Platform — DXC Technology",
    oneLiner:
      "A multi-agent analytics platform that takes a business user from a raw file to a sector reading of their data, where every sensitive step goes through an explicit human decision rather than a silent automatic one.",
    status: "Internship",
    duration: "Final-year engineering project (PFE) — DXC Technology",
    role:
      "Designed and built the Frontend, the application Backend, the Data Preparation Agent, the Insight Agent, the Retail Agent and the Manufacturing Agent — plus their functional integration with the Orchestrator and the shared services the user journey depends on.",
    primaryTech: ["React 18", "FastAPI", "DuckDB", "PostgreSQL/JSONB", "sqlglot"],
    heroEmphasis: [
      "Multi-Agent",
      "Data Quality",
      "Human-in-the-Loop",
      "Verified Analytics",
    ],
    heroMock: "dashboard",

    businessContext: {
      lead:
        "A business team cannot get a KPI without going through a data analyst.",
      paragraphs: [
        "Raw enterprise data is heterogeneous and riddled with quality anomalies — missing values, duplicates, invalid formats, business rules broken across several columns. Someone technical has to look at it before anyone can read anything from it.",
        "On the other end, predictive model outputs stay opaque to non-technical readers: a probability or a feature importance is not a business decision.",
        "Two sub-questions structure the difficulty. How do you keep consistency between generic processing and sector-specific analysis? And how do you keep the experience accessible despite the diversity of the processing involved — analytical, visual and predictive?",
      ],
      stakeholders: [
        {
          who: "Business users",
          need: "A readable dashboard on their own data, without writing a query or waiting for a queue.",
        },
        {
          who: "Data analysts",
          need: "Data quality made explicit and correctable, instead of discovered late inside a result.",
        },
        {
          who: "Sector teams (retail, manufacturing)",
          need: "Analytical and predictive results phrased in the vocabulary of their domain.",
        },
      ],
    },

    challenge: {
      lead:
        "The non-functional constraints, as defined in the project specification, drove almost every structural decision.",
      items: [
        {
          title: "Modularity and maintainability",
          body: "Processing had to be separated with clear perimeters, so that one agent's behaviour could change without dragging the rest of the platform with it.",
        },
        {
          title: "Extensibility",
          body: "New sectors and new flows had to be added progressively, without rewriting what already worked.",
        },
        {
          title: "Separation of responsibilities",
          body: "Management, analysis, storage and rendering had to stay clearly distinct — no layer quietly doing another layer's job.",
        },
        {
          title: "Data version traceability",
          body: "Bronze, Silver and Gold versions had to be identifiable, and the origin of any result reconstructible after the fact.",
        },
        {
          title: "Interface responsiveness",
          body: "The state of the workflow had to be visible at all times — the user should never wonder what the system is doing.",
        },
        {
          title: "Security and robustness",
          body: "Access restricted to authorised resources, and predictable behaviour when data, configuration or a model response is malformed.",
        },
      ],
    },

    solution: {
      paragraph:
        "The platform is a set of specialised agents behind an orchestrator, not one model doing everything. A Data Preparation Agent ingests the raw file into Bronze, profiles it, scores its quality on five dimensions and proposes a correction plan the user validates before anything is mutated. An Insight Agent then generates the dashboard configuration and verifies every SQL query structurally before executing it on DuckDB, with values recomputed deterministically rather than read from the model's answer. Sector agents — Retail and Manufacturing — turn analytical and predictive results into a business reading of the domain. The Orchestrator suspends the flow whenever a human decision is required and resumes it after validation.",
      pillars: [
        {
          title: "The model proposes, deterministic code computes",
          body: "The model proposes the analytical structure and the SQL; the values are recomputed by deterministic processing. That is design principle nº1 of the Insight Agent, not a late safety net.",
        },
        {
          title: "A structural SQL guardrail",
          body: "Before execution, the query is checked and adapted to the real schema through a sqlglot AST parser and run only on DuckDB. A regex, or a 'do not DELETE' line in a prompt, is not a guarantee — a structural syntactic check is.",
        },
        {
          title: "Quality as five separate dimensions",
          body: "Completeness, Validity, Uniqueness, Accuracy, Consistency — each with its own rules, so the analyst knows precisely what to fix.",
        },
        {
          title: "Human-in-the-Loop as a structure, not an agent",
          body: "The Orchestrator suspends processing, hands the decision to the Frontend, and resumes the flow once the user has ruled on it.",
        },
      ],
      mock: "console",
    },

    architecture: {
      overview:
        "Five layers, each with an explicit responsibility boundary: Presentation, API and security, Orchestration, Specialised agents, and Data. The concrete consequence documented in the report: the application Backend never talks directly to the Orchestrator and carries no preparation, analysis, cleaning or prediction work — it owns only the durable management of resources (users, projects, datasets, metadata, rights).",
      layers: [
        {
          id: "01",
          name: "Presentation",
          role: "User entry point; keeps the journey context, renders dashboards from generated configuration, makes human-decision steps explicit.",
          tech: "React 18 · TypeScript · Zustand · Recharts",
        },
        {
          id: "02",
          name: "API and security",
          role: "Application backend: users, projects, datasets, metadata, storage references, JWT/OIDC token verification and authorisation.",
          tech: "FastAPI · Pydantic · SQLAlchemy · PostgreSQL/JSONB",
        },
        {
          id: "03",
          name: "Orchestration",
          role: "Routes work between agents, suspends the flow on human checkpoints, resumes after validation. A platform component my components integrate with.",
          tech: "LangGraph · MCP",
        },
        {
          id: "04",
          name: "Specialised agents",
          role: "Data Preparation, Insight, Retail and Manufacturing agents, plus the NLQ and predictive flows.",
          tech: "Pandas · DuckDB · sqlglot · YData Profiling",
        },
        {
          id: "05",
          name: "Data",
          role: "Bronze / Silver / Gold versions, object storage and dashboard configuration persistence.",
          tech: "MinIO · PostgreSQL JSONB · dbt",
        },
      ],
      flow: [
        "File imported into the Bronze layer, untouched",
        "Sector detected and confirmed by the user",
        "Descriptive profile and first dashboard generated",
        "Quality scored on 5 dimensions, anomalies detected",
        "Correction plan proposed at 4 levels — user validates before any mutation",
        "Only approved corrections applied, score recomputed, Silver version produced",
        "Dashboard updated on the cleaned version, structure preserved",
        "Sector reading (Retail or Manufacturing) when the use case allows it",
      ],
      reasoning: [
        {
          title: "Why an AST parser rather than trusting the model",
          body: "The model proposes the analytical structure and the SQL, but the values are recomputed by deterministic processing. Before execution the agent checks and adapts the query to the real schema, and it runs only on DuckDB. A prompt instruction is a suggestion; a structural check on the parsed query is a property of the system.",
        },
        {
          title: "Why five layers rather than a monolith",
          body: "Following the modularity principles of multi-agent systems, each layer owns one explicit responsibility boundary. Documented example: the application Backend never communicates directly with the Orchestrator and performs no preparation, analysis, cleaning or prediction — only durable resource management.",
        },
        {
          title: "Why structural Human-in-the-Loop rather than one more autonomous agent",
          body: "HITL is not an agent. The Orchestrator suspends processing, passes the decision to the Frontend and resumes after validation. It fires on precise points: choosing a cleaning strategy, imputing or deleting sensitive data, confirming a prediction target, validating before training, choosing a model. The Data Preparation Agent embodies it with four correction levels — Conservative (flags without modifying), Moderate (automatic low-risk correction), Aggressive (removes invalid or duplicated data), Manual (correction supplied explicitly by the user). The machine proposes, the user rules on the sensitive cases.",
        },
        {
          title: "Why five quality dimensions rather than one global score",
          body: "Completeness, Validity, Uniqueness, Accuracy, Consistency — each with its own rules; Consistency, for instance, covers business constraints across several columns, not just format rules. A single score would have hidden the nature of the problem; five dimensions tell the analyst exactly what to fix.",
        },
        {
          title: "Trade-off accepted",
          body: "Systematically checking KPIs, columns and charts before rendering — design principle nº2 of the Insight Agent, meant to filter out elements that do not exist or cannot be computed — makes dashboard generation slower than simply displaying the model's answer. The choice was deliberate: a longer response time with a verified result beats an instant answer that may be wrong.",
        },
      ],
    },

    decisions: [
      {
        question: "Why a sqlglot AST parser inside the Insight Agent's SQL verification?",
        decision:
          "Every generated query is parsed and checked structurally, adapted to the real schema, and executed only on DuckDB.",
        reason:
          "The model proposes structure and SQL; the values must be recomputed deterministically. A regex or a 'never DELETE' instruction in the prompt is not a guarantee — a structural syntactic control is.",
        tradeoff:
          "Legitimate but exotic queries can be rejected by the parser, and the schema adaptation step adds work before execution.",
        benefit:
          "The boundary between what the model proposes and what the system guarantees is explicit and enforceable.",
      },
      {
        question: "Why five layers rather than a monolith?",
        decision:
          "Presentation, API and security, Orchestration, Specialised agents, Data — each with an explicit responsibility boundary.",
        reason:
          "Modularity principles of multi-agent systems: new sectors and flows had to be added without rewriting the existing platform.",
        tradeoff:
          "More integration surface and more contracts to keep aligned between layers.",
        benefit:
          "The Backend stays a resource manager: no direct communication with the Orchestrator, no preparation, analysis, cleaning or prediction work.",
      },
      {
        question: "Why Human-in-the-Loop as a structure rather than an agent?",
        decision:
          "The Orchestrator suspends the run, the Frontend collects the decision, the flow resumes after validation.",
        reason:
          "Cleaning strategy, imputation or deletion of sensitive data, prediction target, validation before training and model choice are decisions with consequences — not steps to automate silently.",
        tradeoff:
          "Extra round-trips and a longer journey than a fully automatic pipeline.",
        benefit:
          "Four explicit correction levels — Conservative, Moderate, Aggressive, Manual — mean nothing is mutated that the user has not approved.",
      },
      {
        question: "Why a quality score on five dimensions rather than one global figure?",
        decision:
          "Completeness, Validity, Uniqueness, Accuracy and Consistency scored separately, each with its own rules.",
        reason:
          "Consistency covers business constraints across several columns, not just format checks; collapsing it into an average erases the information.",
        tradeoff: "More rules to define, maintain and explain in the interface.",
        benefit:
          "The Data Analyst knows precisely what to correct, and the score can be recomputed after cleaning to show the effect.",
      },
      {
        question: "Why PostgreSQL JSONB for dashboard configuration?",
        decision:
          "Persist generated dashboard configurations as JSONB rather than as a relational schema of indicators.",
        reason:
          "Indicators evolve continuously; a normalised schema would have meant a migration for every new KPI shape.",
        tradeoff: "Less database-level validation of the configuration structure.",
        benefit:
          "Configuration evolves at the pace of the product, with SQLAlchemy/Alembic handling only the stable part of the model.",
      },
      {
        question: "Why an update_dashboard flag rather than regenerating every time?",
        decision:
          "false triggers a full initial generation; true keeps the existing structure and recomputes values on the active data version.",
        reason:
          "After cleaning, the user is comparing the same dashboard on a better dataset — changing the layout would destroy that comparison.",
        tradeoff: "Two code paths to keep consistent in the Insight Agent.",
        benefit:
          "The effect of a correction plan is directly readable, because only the numbers moved.",
      },
    ],

    features: [
      {
        title: "Frontend",
        problem:
          "The diversity of processing — analytical, visual, predictive — risked producing an interface only a technical user could follow.",
        solution:
          "A single entry point that keeps the journey context and interprets Insight Agent configurations to build KPI cards, charts, tables and insight blocks.",
        userValue: "Steps requiring a human decision are made explicit rather than buried.",
        businessImpact: "A business user can run the full journey without technical assistance.",
      },
      {
        title: "Application backend",
        problem:
          "Users, projects, datasets and rights needed durable, secure management without the API layer drifting into analytics work.",
        solution:
          "FastAPI service handling Keycloak-integrated user management, JWT/OIDC token verification and authorisation, projects, datasets, metadata, preferences and storage references — persisted in PostgreSQL through SQLAlchemy/Alembic, with JSONB for dashboard configurations.",
        userValue: "Work is persisted and access is scoped to what each user may see.",
        businessImpact: "A clean boundary: no processing logic leaks into the resource layer.",
      },
      {
        title: "Data Preparation Agent",
        problem:
          "Raw enterprise data arrives heterogeneous and full of anomalies, and cleaning it blindly destroys information.",
        solution:
          "Bronze ingestion, descriptive profile, five-dimension quality scoring, anomaly detection, a four-level correction plan presented before execution, application of approved corrections only, score recomputed after cleaning, Silver version produced.",
        userValue: "The user sees what is wrong and decides how far the correction goes.",
        businessImpact: "Cleaning becomes an auditable step rather than an invisible transformation.",
      },
      {
        title: "Insight Agent",
        problem:
          "A generated dashboard is only useful if its numbers can be trusted and its updates stay comparable.",
        solution:
          "Generation and update driven by the update_dashboard flag, structured SQL queries verified with the sqlglot AST guardrail and executed on DuckDB, robustness against data, configuration and LLM-response errors.",
        userValue: "Numbers computed on real rows, and a dashboard that keeps its shape between versions.",
        businessImpact: "Verified output before rendering, deliberately accepted as slower than a raw model answer.",
      },
      {
        title: "Retail Agent & Manufacturing Agent",
        problem:
          "Analytical and predictive outputs stayed unreadable for the people accountable for the domain.",
        solution:
          "A business reading of results per domain — no computation or training performed — plus a sector predictive configuration (task type, target, recommended variables, metrics, candidate models) passed to the predictive flow, then an explanation of the results after training.",
        userValue: "Retail: churn, segmentation, basket, demand forecasting. Manufacturing: quality, defects, predictive maintenance, downtime.",
        businessImpact: "Sector consistency without duplicating the generic pipeline.",
      },
      {
        title: "NLQ Agent and Predictive Data Validator",
        problem:
          "Ad-hoc questions and pre-training data validation both had to stay inside the same guarantees as the rest of the platform.",
        solution:
          "Contributed to the NLQ Agent code, and to the seven-step validation of the Predictive Data Validator, together with a teammate. Model training itself (Training Agent) was handled by the team — I collaborated with them on its integration.",
        userValue: "Questions answered and prediction inputs checked before any model is trained.",
        businessImpact: "Shared ownership on two components that cross several agents.",
      },
    ],

    stack: [
      {
        group: "Direct contribution — Frontend",
        items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "Zustand", "TanStack Query"],
      },
      {
        group: "Direct contribution — Backend & data",
        items: ["FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "PostgreSQL/JSONB", "Pandas", "DuckDB", "sqlglot", "YData Profiling", "dbt"],
      },
      {
        group: "Wider platform ecosystem — integrated, not built by me",
        items: ["MinIO", "Redis", "Keycloak", "JWT", "OIDC", "LangChain", "LangGraph", "MCP", "Docker", "Docker Compose"],
      },
      {
        group: "Wider platform ecosystem — AI & ML",
        items: ["Azure OpenAI (gpt-5.4-mini)", "scikit-learn", "XGBoost", "LightGBM", "MLflow"],
      },
    ],

    gallery: [
      {
        title: "Generated dashboard",
        caption: "KPI cards, charts and tables built from the Insight Agent configuration.",
        kind: "dashboard",
      },
      {
        title: "Quality report",
        caption: "Five dimensions scored separately, with the anomalies behind each one.",
        kind: "table",
      },
      {
        title: "Correction plan",
        caption: "Four levels — Conservative, Moderate, Aggressive, Manual — validated before execution.",
        kind: "form",
      },
      {
        title: "Agent flow",
        caption: "The Orchestrator suspending the run on a human checkpoint.",
        kind: "console",
      },
      {
        title: "Five-layer architecture",
        caption: "Presentation, API and security, Orchestration, Agents, Data.",
        kind: "architecture",
      },
      {
        title: "Sector reading",
        caption: "Predictive results phrased in retail or manufacturing vocabulary.",
        kind: "chart",
      },
    ],

    demo: {
      title: "End-to-end journey",
      description:
        "From an imported file to a sector reading, with an explicit human validation at every sensitive step rather than a silent automatic decision.",
      transcript: [
        "File imported, sector detected and confirmed by the user.",
        "Data profile and first dashboard generated on the raw version.",
        "Quality checked on five dimensions; a correction plan is proposed.",
        "The user validates the plan; only approved corrections are applied.",
        "Dashboard updated on the cleaned Silver version, structure preserved.",
        "The sector agent turns the results into a business reading of the domain.",
      ],
    },

    lessons: {
      technical: [
        {
          title: "A prompt is not a guarantee",
          body: "Everything that had to hold — SQL safety, KPI existence, computed values — ended up enforced by deterministic code around the model, never by instructions inside it.",
        },
        {
          title: "Model choice is a benchmark, not a preference",
          body: "Azure OpenAI gpt-5.4-mini was selected after comparing it against OpenAI GPT-4 mini as a reference point, plus NVIDIA Nemotron and Gemini Flash, both tested and not retained.",
        },
        {
          title: "Responsibility boundaries survive contact with the product",
          body: "Keeping the Backend out of all processing sounded academic until new agents were added — and none of them required touching the resource layer.",
        },
        {
          title: "Five dimensions beat one number",
          body: "Splitting the quality score changed the conversation from 'the data is bad' to 'these three columns break a business rule'.",
        },
      ],
      differentToday: [
        "Instrument the false-rejection rate of the SQL guardrail, to tune strictness on evidence instead of intuition.",
        "Cache verified dashboard configurations, to recover part of the latency the verification step deliberately costs.",
        "Version the quality rule set alongside the data versions, so a score can be compared across time.",
      ],
    },

    impact: {
      statement:
        "A business user goes from a raw file to a sector reading of their data without writing a query — and every sensitive step passes through an explicit human validation rather than a silent automatic decision.",
      beneficiaries: [
        { who: "Business users", value: "A dashboard on their own data, without a technical intermediary." },
        { who: "Data analysts", value: "Quality problems localised precisely, correction plans they control." },
        { who: "Sector teams", value: "Predictive results explained in the vocabulary of their domain." },
      ],
      metrics: [
        { label: "Components designed and built", value: "6" },
        { label: "Quality dimensions scored", value: "5" },
        { label: "Correction levels", value: "4" },
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
