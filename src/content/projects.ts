export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  context?: string;
  summary: string;
  narrative: string;
  highlights: string[];
  architecture: string;
  stack: string[];
  featured?: boolean;
  repo?: string;
  metrics?: { label: string; value: string }[];
};


export const projects: Project[] = [
  {
    slug: "intelligent-analytics",
    name: "Intelligent Analytics",
    category: "Multi-Agent AI · Data Platform · Full-Stack",
    year: "2026",
    context: "DXC Technology — final-year engineering project",
    featured: true,
    summary:
      "A multi-agent analytics platform that takes a business user from a raw file to sector predictions — profiling, cleaning, dashboards, natural-language questions and ML — without a single line of code.",
    narrative:
      "Business teams at DXC owned their data but not their analyses: every question went through a technical queue. The platform turns that queue into a guided product. Data lands untouched in a Bronze layer, gets profiled and scored on five quality dimensions, and the user validates the cleaning plan action by action. Once the Silver dataset exists, an Insight Agent generates a full dashboard for their sector, computed deterministically on real rows. From there they can ask questions in plain French, and each answer becomes a new dashboard block. Finally, sector agents translate ML outputs into retail or manufacturing decisions.",
    highlights: [
      "Insight Agent: Azure OpenAI GPT-4o generates the dashboard configuration, a deterministic validator checks it, DuckDB computes every KPI on real rows — plus Power BI export of the generated dashboard.",
      "Data Preparation Agent: DAMA-DMBOK quality scoring across 5 dimensions, 7 anomaly types, 9 corrective strategies, and a 7-step Predictive Data Validator, with Human-in-the-Loop approval before any mutation.",
      "NLQ pipeline secured by a sqlglot AST parser — SELECT-only, every mutating statement rejected before execution — with Redis session memory and PostgreSQL conversation history.",
      "Retail Agent (16 use cases) and Manufacturing Agent routed conditionally by a central LangGraph orchestrator; models trained in parallel with joblib and tracked in MLflow; 29 pytest unit tests on the retail contract.",
      "React 18 frontend with four guided workflows, a global Zustand store, and Keycloak 23 OIDC single sign-on with RBAC across services.",
    ],
    architecture:
      "Medallion pipeline (Bronze/Silver on MinIO) → LangGraph orchestrator routing to specialised agents → FastAPI services persisting projects, dashboards and conversations in PostgreSQL JSONB → React 18 rendering dashboards from structured JSON config.",
    metrics: [
      { label: "Components owned", value: "6 of the platform" },
      { label: "Quality dimensions scored", value: "5 (DAMA-DMBOK)" },
      { label: "Sector use cases modelled", value: "16 retail + manufacturing" },
    ],
    stack: [
      "Python", "FastAPI", "LangGraph", "Azure OpenAI GPT-4o", "DuckDB", "sqlglot",
      "MinIO", "PostgreSQL JSONB", "Redis", "MLflow", "joblib", "XGBoost",
      "React 18", "TypeScript", "Zustand", "TanStack Query", "Recharts",
      "Keycloak 23", "Power BI", "pytest", "Docker",
    ],

  },
  {
    slug: "cqos-trading-platform",
    name: "CQOS Trading Platform Services",
    category: "Java · Microservices · FinTech",
    year: "2025",
    context: "Lotus Capital (CAPQUANT)",
    featured: true,
    summary:
      "Identity, subscription and CRM microservices for a distributed trading platform where latency and quota integrity are financial concerns.",
    narrative:
      "A trading platform cannot afford a slow authentication path or a quota that leaks under concurrency. I built the two services that sit on that critical path: a 360° CRM aggregating client data across services, and a user management service handling JWT validation, multi-provider OAuth2 sign-in and subscription quotas protected by database-level locking.",
    highlights: [
      "Two-tier token validation cache (Caffeine local + Redis distributed) holding P95 under 20ms.",
      "Atomic quota enforcement with PostgreSQL SELECT FOR UPDATE and scheduled resets — zero overrun in production.",
      "360° client profile assembled in one request through OpenFeign inter-service calls.",
      "OAuth2 multi-provider sign-in with secure account linking and RabbitMQ support notifications.",
      "AOP-based observability tracing every sensitive operation without polluting business code.",
    ],
    architecture:
      "Spring Cloud topology — Eureka discovery, Config Server, API Gateway — fronting Admin/CRM and User Management services, with Redis, PostgreSQL and RabbitMQ as shared infrastructure.",
    stack: [
      "Java 21", "J2EE", "Spring Boot 3", "Spring Security 6", "Spring Cloud",
      "OpenFeign", "Redis", "Caffeine", "PostgreSQL", "RabbitMQ",
      "Micrometer", "Docker", "Maven",
    ],
  },
  {
    slug: "aos-micepp-portal",
    name: "AOS MICEPP Portal",
    category: "Full-Stack · Public Sector",
    year: "2025",
    context: "Ministry of Investment (MICEPP)",
    featured: true,
    repo: "https://github.com/maryame5/aos_micepp",
    summary:
      "A public-service portal digitising social benefit claims for civil servants, with real-time tracking, complaint auditing and an admin back-office.",
    narrative:
      "Filing a benefits claim meant travelling to an office and calling back for updates. The portal replaces that with an online submission flow, WebSocket-driven status notifications, compressed document attachments stored without extra infrastructure, and a fully audited complaint workflow for managers.",
    highlights: [
      "Real-time claim status notifications over SockJS/STOMP WebSockets.",
      "Supporting documents compressed on write and stored as PostgreSQL BLOBs — no document infrastructure needed.",
      "Complaint module with manual assignment and automatic AOP audit journaling.",
      "Self-service account activation through secure single-use email links.",
      "Full-stack Docker Compose deployment: Angular 20 frontend plus Spring Boot 3 backend.",
    ],
    architecture:
      "Angular 20 public portal and admin back-office over a Spring Boot 3 REST API and a shared PostgreSQL database, with WebSocket notifications and AOP audit logging.",
    stack: [
      "Java", "Spring Boot 3", "Spring Security", "Angular 20", "TypeScript",
      "Angular Material", "Tailwind CSS", "PostgreSQL", "WebSockets",
      "SendGrid", "Docker Compose", "PlantUML",
    ],
  },
  {
    slug: "easyapply",
    name: "EasyApply — Smart Recruitment Platform",
    category: "AI · Microservices · Full-Stack",
    year: "2024",
    repo: "https://github.com/maryame5/Easyapply_project",
    summary:
      "A recruitment platform that replaces manual CV screening with embedding-based semantic matching between candidates and job offers.",
    narrative:
      "Recruiters spent hours sorting hundreds of CVs per offer — slow, subjective and exhausting. EasyApply computes an embedding-based semantic similarity score between each candidate and the offer, extracts skills and education from raw PDF CVs, and surfaces only the most relevant profiles.",
    highlights: [
      "Semantic matching by embeddings, scoring candidate–offer fit automatically.",
      "Skills, education and experience extracted from raw PDF CVs — candidates never retype their profile.",
      "Recruiter and candidate dashboards over semi-structured profiles.",

      "Microservices split so the AI engine and the product UI evolve independently.",
    ],
    architecture:
      "Spring Boot 3 core services and a Python/Flask NLP service exchanging over REST, with PostgreSQL JSONB profiles and Redis caching behind a React 18 interface.",
    stack: [
      "Java", "Spring Boot 3", "J2EE", "React 18", "TypeScript", "Python",
      "Flask", "spaCy", "PostgreSQL JSONB", "Redis", "JWT", "Docker",
    ],
  },
  {
    slug: "airport-intelligence",
    name: "Airport Intelligence Analytics",
    category: "AI · Machine Learning · Analytics",
    year: "2024",
    context: "National hackathon — 3rd place, delivered in 48h",
    summary:
      "A predictive platform surfacing the service factors that drive passenger satisfaction, queryable in natural language.",
    narrative:
      "Airports collect thousands of passenger data points but struggle to identify concrete levers. Delivered in 48 hours with a team, this platform lets any manager ask a question in French and get back the factors driving satisfaction, the geographic hotspots and a projected return on corrective actions.",
    highlights: [
      "Predictive engine ranking 14 service factors with 93% accuracy on real data.",
      "Natural-language querying over the airport database — no SQL required.",
      "Sentiment analysis across 195 geographic regions to expose problem zones.",
      "Insights engine projecting 2.4x ROI on corrective actions — 3rd place nationally.",
    ],
    architecture:
      "FastAPI backend serving a scikit-learn Random Forest model and a VADER sentiment layer, with an LLM translating questions into queries for a React 18 dashboard.",
    stack: [
      "Python", "FastAPI", "scikit-learn", "Random Forest", "VADER",
      "OpenRouter LLM", "SQLite", "Pandas", "React 18", "TypeScript",
    ],
  },
  {
    slug: "bank-review-pipeline",
    name: "Bank Review Pipeline — ETL & NLP",
    category: "Data Engineering · NLP",
    year: "2024",
    summary:
      "An end-to-end Airflow + dbt pipeline collecting and analysing customer reviews for every bank branch in Morocco.",
    narrative:
      "Moroccan banks had no consolidated view of how customers perceive their branches — reviews were scattered and unanalysed. The pipeline scrapes reviews nationwide, extracts sentiment and recurring topics, and models them into a star schema feeding comparison dashboards by branch, region and bank.",
    highlights: [
      "Automated collection across 30 GPS points covering the whole national territory.",
      "Automatic sentiment and topic extraction on each review — no manual reading.",
      "Star-schema warehouse enabling re-runs on new data with zero re-development.",
      "Looker Studio dashboards comparing satisfaction by branch, region and bank.",
    ],
    architecture:
      "Airflow-orchestrated ingestion → NLP enrichment (Gensim LDA, TextBlob) → dbt transformations into a PostgreSQL star schema → Looker Studio reporting.",
    stack: [
      "Python", "Apache Airflow", "dbt", "PostgreSQL", "Star Schema",
      "Google Maps API", "Gensim", "TextBlob", "Looker Studio", "Docker",
    ],
  },
  {
    slug: "distributed-lending",
    name: "Distributed Lending Microservices",
    category: "Backend · Distributed Systems · Java",
    year: "2024",
    summary:
      "A complete Spring Cloud lending system demonstrating a production-shaped distributed Java architecture.",
    narrative:
      "A reference implementation of the patterns a distributed Java platform needs: service discovery, centralised configuration, a routing gateway, database-per-service isolation and asynchronous event-driven notifications.",
    highlights: [
      "Eureka discovery, Config Server and API Gateway with dynamic routing.",
      "Database-per-service isolation across three independent MySQL instances.",
      "Decoupled asynchronous communication over Apache Kafka with an event-driven notification service.",
      "Single-command Docker Compose orchestration of the full topology.",
    ],
    architecture:
      "Spring Cloud service mesh — Gateway → Eureka-registered services → per-service MySQL — with Kafka producers and consumers handling cross-service events.",
    stack: [
      "Java 21", "J2EE", "Spring Boot", "Spring Cloud", "Eureka",
      "Spring Cloud Gateway", "Apache Kafka", "MySQL", "Docker Compose", "Maven",
    ],
  },
  {
    slug: "dental-cabinet",
    name: "Dental Practice Management",
    category: "Backend · Java · Spring MVC",
    year: "2024",
    summary:
      "A Spring Boot application managing patients, appointments, treatments and invoices across three distinct business roles.",
    narrative:
      "A dental practice runs on the same few operations repeated daily. The application models them explicitly — patients, appointments, treatments, invoices — behind role-based access for doctors, secretaries and patients.",
    highlights: [
      "Spring MVC architecture with Spring Security role-based access control.",
      "Full Hibernate/JPA domain model over MySQL.",
      "REST APIs plus a responsive Thymeleaf interface.",
      "Unit and integration tests covering the critical business rules.",
    ],
    architecture:
      "Classic layered Spring MVC application: controllers → services → JPA repositories over MySQL, with Thymeleaf server-rendered views.",
    stack: [
      "Java", "J2EE", "Spring Boot", "Spring MVC", "Spring Security",
      "Hibernate/JPA", "MySQL", "Thymeleaf", "Maven", "JUnit",
    ],
  },
  {
    slug: "text-to-video",
    name: "Text-to-Video Generative Pipeline",
    category: "Generative AI · NLP · Computer Vision",
    year: "2024",
    summary:
      "A generative pipeline turning raw text into a stylised video through syntax analysis, image generation and compilation.",
    narrative:
      "The pipeline parses a text into its grammatical actors and actions, generates a stylised frame for each beat through diffusion models, then compiles the frames into a coherent animated sequence.",
    highlights: [
      "spaCy syntactic parsing (nsubj/dobj) driving scene extraction.",
      "Stable Diffusion and Ghibli Diffusion generation combining txt2img and img2img.",
      "MoviePy compilation into a final stylised video.",
    ],
    architecture: "Sequential Python pipeline: text parsing → prompt construction → diffusion generation → frame compilation.",
    stack: ["Python", "Stable Diffusion", "Ghibli Diffusion", "spaCy", "MoviePy"],
  },
];

export const flagshipProject = projects.find((p) => p.featured) ?? projects[0];
export const featuredProjects = projects.filter((p) => p.featured);
