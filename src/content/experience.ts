export type Achievement = {
  title: string;
  context: string;
  action: string;
  result: string;
  tech: string[];
};

export type Experience = {
  slug: string;
  company: string;
  companyKind: string;
  role: string;
  period: string;
  location: string;
  projectName: string;
  description: string;
  businessContext: string;
  achievements: Achievement[];
  architecture: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    slug: "dxc-technology",
    company: "DXC Technology",
    companyKind: "Global technology consulting",
    role: "AI & Software Engineering Intern (PFE)",
    period: "Feb 2026 — Jun 2026",
    location: "Rabat, Morocco",
    projectName: "Intelligent Analytics — Multi-agent AI analytics platform",
    description:
      "Designed and built six components of a multi-agent analytics platform letting non-technical managers exploit their business data end-to-end — from raw import to sector predictions — without writing code or waiting on a data team.",
    businessContext:
      "Business users had operational and commercial data but depended on technical teams for every analysis. The goal: give them analytical autonomy through a guided, sector-aware system that keeps humans in control of critical data decisions.",
    achievements: [
      {
        title: "A full dashboard generated the moment data is imported",
        context:
          "Business users waited on analysts for every chart, and dashboards had to be configured by hand for each dataset.",
        action:
          "Built the complete Insight Agent: Azure OpenAI GPT-4o generates the analytics configuration, a deterministic validator checks columns, aggregations and visualisation types, KPIs (SUM/AVG/YOY/CAGR/DELTA) are computed on real rows via DuckDB, the frontend renders dynamically, and the resulting dashboard can be exported to Power BI.",
        result:
          "Importing a file produces a sector-adapted dashboard with KPIs, charts and insight blocks — no configuration, no SQL. Indicators are always computed on real rows, never invented by the model.",
        tech: ["Azure OpenAI GPT-4o", "DuckDB", "Power BI export", "Recharts", "React 18", "TanStack Query"],
      },
      {
        title: "Data cleaning validated action by action by the user",
        context:
          "Automated cleaning pipelines silently mutate data — unacceptable when the user is accountable for the numbers.",
        action:
          "Built the Data Preparation Agent: untouched Bronze ingestion, automatic profiling, 5-dimension DAMA-DMBOK quality scoring (completeness 30%, validity 30%, accuracy 20%, uniqueness 10%, consistency 10%), detection of 7 anomaly types, 9 corrective strategies, a 7-step Predictive Data Validator, and an interactive Human-in-the-Loop plan producing Silver artefacts plus before/after reports.",
        result:
          "The user sees a quality score, column-level anomalies and a cleaning plan they approve, refuse or override. No data is modified without explicit consent.",
        tech: ["LangGraph", "YData Profiling", "7-step Predictive Data Validator", "Medallion Bronze/Silver", "MinIO", "HITL checkpoints"],
      },
      {
        title: "Natural-language questions that grow the dashboard",
        context:
          "Exploratory questions never fit a pre-built dashboard, and letting an LLM run free SQL on production data is a security hazard.",
        action:
          "Received NLQ-generated SQL and validated it through a sqlglot AST parser (SELECT-only; DROP/DELETE/UPDATE/INSERT/ALTER rejected before execution), executed it on the active dataset, turned results into visual components injected into the live dashboard, and kept context through Redis session memory with PostgreSQL conversation history.",
        result:
          "Users ask questions in plain French; the answer — KPI, chart or table — is added to their dashboard, which enriches itself across the conversation and survives between sessions.",
        tech: ["sqlglot AST validation", "DuckDB", "Redis session memory", "PostgreSQL history", "React 18", "Zustand"],
      },
      {
        title: "Sector prediction flow with actionable business explanations",
        context:
          "ML metrics like RMSE or AUC mean nothing to a retail manager deciding what to do on Monday morning.",
        action:
          "Built the Retail Agent (16 use cases: churn, demand forecasting, segmentation, stock, fraud, customer value) and Manufacturing Agent (scrap, predictive maintenance, defects, downtime), resolved business configuration through a Shared Config Registry, trained candidate models in parallel with joblib and tracked runs in MLflow, produced sector-worded explanations, validated 29 Retail unit tests with pytest, and integrated both agents into the central LangGraph orchestrator with conditional routing and a standardised contract to the Training Agent.",
        result:
          "A user launches a prediction and receives both ML metrics and what to do about them, phrased in their own industry vocabulary.",
        tech: ["LangGraph StateGraph", "Shared Config Registry", "scikit-learn", "XGBoost", "LightGBM", "joblib", "MLflow", "pytest"],
      },
      {
        title: "One coherent interface, one session, four workflows",
        context:
          "Six backend components mean nothing if the non-technical user cannot cross them without losing context or logging in again.",
        action:
          "Built the complete React 18 frontend (onboarding, descriptive analysis, NLQ, prediction), a global Zustand store with local persistence, centralised TanStack Query API access, and the FastAPI backend persisting projects, metadata, conversations and dashboard configs, secured by Keycloak 23 OIDC SSO with RBAC.",
        result:
          "A non-technical user goes from creating a project to predicting outcomes in one guided flow, with a single sign-on and role-based access across all services.",
        tech: ["React 18", "TypeScript", "Vite", "Zustand", "FastAPI", "SQLAlchemy", "Alembic", "Keycloak 23 OIDC + RBAC"],
      },
    ],
    architecture:
      "Six components delivered inside a team platform, as named in the project: Frontend (React 18), API Backend (FastAPI/PostgreSQL), SSO Keycloak, Data Preparation Agent, Insight Agent, and the Sector Agents (Retail, Manufacturing) — the latter wired into the central LangGraph orchestrator with conditional routing into the predictive workflow.",
    stack: [
      "Python", "FastAPI", "LangGraph", "Azure OpenAI GPT-4o", "sqlglot", "PostgreSQL JSONB", "Redis",
      "MinIO", "DuckDB", "MLflow", "joblib", "scikit-learn", "XGBoost", "React 18",
      "TypeScript", "Zustand", "TanStack Query", "Power BI", "pytest", "Docker", "Keycloak 23",
    ],
  },
  {
    slug: "lotus-capital",
    company: "Lotus Capital (CAPQUANT)",
    companyKind: "FinTech · trading platform",
    role: "Java Backend Engineering Intern",
    period: "Oct 2025 — Jan 2026",
    location: "Rabat, Morocco",
    projectName: "CQOS — distributed trading platform",
    description:
      "Built Java 21 / Spring Boot 3 microservices for the CQOS trading platform: identity, subscriptions (FREE/PRO/ELITE), 360° CRM and hardening of financially critical operations.",
    businessContext:
      "On a trading platform every millisecond counts and every quota overrun costs money. Sales teams juggled several tools for a single client view, token validation slowed transactions down, and usage quotas were unprotected against concurrent access.",
    achievements: [
      {
        title: "One request for a complete client view",
        context: "Sales teams queried several separate systems to assemble a client profile — slow and inconsistent.",
        action: "Built a unified CRM service aggregating identity, active subscription, payment history and activity through inter-service calls.",
        result: "Every team reaches the full 360° client profile in a single request.",
        tech: ["Spring Boot 3", "OpenFeign", "Spring Cloud"],
      },
      {
        title: "Sub-20ms token validation under load",
        context: "Validating an auth token on every request added visible latency — unacceptable for traders.",
        action: "Implemented a two-tier token validation cache: an ultra-fast local cache per instance and a distributed cache for cross-server coherence.",
        result: "Token validation under 20ms at P95 even under load.",
        tech: ["Spring Security 6", "Caffeine Cache", "Redis"],
      },
      {
        title: "Zero quota overruns under concurrency",
        context: "Subscription quotas were unprotected against simultaneous access — a race condition meant free usage.",
        action: "Secured quota checks with database-level row locking and scheduled automatic resets.",
        result: "No quota overrun in production even under high concurrent access.",
        tech: ["PostgreSQL SELECT FOR UPDATE", "Spring @Scheduled", "Spring AOP"],
      },
      {
        title: "One-click sign-up through external identity providers",
        context: "Creating yet another account was friction at registration.",
        action: "Integrated external OAuth2 identity providers with secure account linking and automatic support notifications.",
        result: "Users register in one click from an existing account, and support is notified automatically.",
        tech: ["OAuth2 multi-provider", "Spring Security", "RabbitMQ"],
      },
      {
        title: "Auditable by design",
        context: "Sensitive operations were untraced — no audit, no anomaly detection.",
        action: "Added full observability tracing every sensitive operation without touching business code.",
        result: "Complete traceability of critical actions, queryable at any time.",
        tech: ["Micrometer", "Spring Sleuth", "AOP logging"],
      },
    ],
    architecture:
      "Two Spring Boot 3 microservices: Admin/CRM Service (360° profile via OpenFeign) and User Management/Subscription Service (JWT under 20ms P95, Caffeine + Redis dual cache, multi-provider OAuth2, atomic quotas via SELECT FOR UPDATE, granular RBAC, scheduled workers, Micrometer/Sleuth observability).",
    stack: [
      "Java 21", "J2EE", "Spring Boot 3", "Spring Security 6", "Spring Cloud",
      "Eureka", "API Gateway", "OpenFeign", "JWT", "OAuth2", "Caffeine",
      "Redis", "PostgreSQL", "RabbitMQ", "Micrometer", "Docker", "Maven",
    ],
  },
  {
    slug: "micepp",
    company: "Ministry of Investment (MICEPP)",
    companyKind: "Public sector",
    role: "Full-Stack Engineering Intern",
    period: "Jul 2025 — Sep 2025",
    location: "Rabat, Morocco",
    projectName: "AOS MICEPP Portal — civil servant social benefits",
    description:
      "Built a full-stack portal letting civil servants file social benefit claims online and follow their progress in real time, with an admin back-office and automatic notifications.",
    businessContext:
      "Civil servants had to travel or call to file a claim and learn its status. Processing was manual, slow and untraceable — no consolidated view for managers, no history on complaints.",
    achievements: [
      {
        title: "Real-time claim tracking",
        context: "Agents called or travelled just to know where their file stood.",
        action: "Built the filing and tracking portal with automatic notifications pushed on every status change.",
        result: "Civil servants follow their file in real time from their desk.",
        tech: ["Spring Boot 3", "WebSockets SockJS/STOMP", "Angular 20"],
      },
      {
        title: "Document attachments with zero extra infrastructure",
        context: "Supporting documents had to be attached, but there was no budget for document infrastructure.",
        action: "Stored documents directly in the database with automatic compression on write and decompression on read.",
        result: "Agents attach PDFs and photos like on any online form — no extra infrastructure, no extra cost.",
        tech: ["PostgreSQL BLOB", "On-the-fly compression"],
      },
      {
        title: "Traceable complaint handling",
        context: "Complaints were untraced — no record of who handled what, or when.",
        action: "Built the complaints module with manual assignment to managers and automatic audit journaling of every action.",
        result: "Every complaint is traceable from opening to closure with a full consultable history.",
        tech: ["Spring AOP audit logging", "PostgreSQL"],
      },
      {
        title: "Self-service account activation",
        context: "Every new account required manual admin validation — a bottleneck at each intake wave.",
        action: "Automated activation through a secure single-use email link.",
        result: "100% autonomous onboarding: new agents reach the portal within minutes.",
        tech: ["SendGrid API", "Spring Security", "Short-lived JWT"],
      },
      {
        title: "Reproducible deployment",
        context: "Coordinating frontend and backend deployment in the ministry environment was manual and error-prone.",
        action: "Containerised the whole application for a single-command, synchronised deployment.",
        result: "Identical deployment every time — no environment drift.",
        tech: ["Docker Compose", "Angular 20", "Spring Boot 3"],
      },
    ],
    architecture:
      "Dual platform — Angular 20 + Spring Boot 3 sharing one PostgreSQL database: public agent portal plus admin back-office, SockJS/STOMP WebSockets for real-time notifications, compressed BLOB attachments, JWT auth, AOP audit logging, full-stack Docker Compose.",
    stack: [
      "Java", "Spring Boot 3", "Spring Security", "Spring MVC", "JWT",
      "Spring AOP", "Angular 20", "TypeScript", "Angular Material",
      "Tailwind CSS", "PostgreSQL", "WebSockets", "SendGrid", "Docker Compose", "PlantUML",
    ],
  },
];
