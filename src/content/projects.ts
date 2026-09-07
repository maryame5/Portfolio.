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
  demoVideoUrl?: string;
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
    demoVideoUrl: "https://youtu.be/kumoT83Tu64",
    summary:
      "A multi-agent analytics platform that takes a business user from a raw file to sector predictions — profiling, cleaning, dashboards, natural-language questions and ML — without a single line of code.",
    narrative:
      "Business teams at DXC owned their data but not their analyses: every question went through a technical queue. The platform turns that queue into a guided product. Data lands untouched in a Bronze layer, gets profiled and scored on five quality dimensions, and the user validates the cleaning plan action by action. Once the Silver dataset exists, an Insight Agent generates a full dashboard for their sector, computed deterministically on real rows. From there they can ask questions in plain French, and each answer becomes a new dashboard block. Finally, sector agents translate ML outputs into retail or manufacturing decisions.",
    highlights: [
      "Insight Agent: gpt-5.4-mini (Azure OpenAI) generates the dashboard configuration, a deterministic validator checks it, DuckDB computes every KPI on real rows — plus Power BI export of the generated dashboard.",
      "Data Preparation Agent: DAMA-DMBOK quality scoring across 5 dimensions, 7 anomaly types, 9 corrective strategies, and a 7-step Predictive Data Validator (contributed), with Human-in-the-Loop approval before any mutation.",
      "SQL guardrail: a sqlglot AST parser inside the Insight Agent — SELECT-only, every mutating statement rejected before execution — with Redis session memory and PostgreSQL conversation history.",
      "Retail Agent (16 use cases) and Manufacturing Agent routed conditionally by the central LangGraph orchestrator: they supply the sector predictive configuration and explain results in domain vocabulary, with 120 pytest unit tests on the retail contract.",
      "React 18 frontend with four guided workflows, a global Zustand store, and Keycloak 23 OIDC single sign-on with RBAC across services.",
    ],
    architecture:
      "Medallion pipeline (Bronze/Silver on MinIO) → LangGraph orchestrator routing to specialised agents → FastAPI services persisting projects, dashboards and conversations in PostgreSQL JSONB → React 18 rendering dashboards from structured JSON config.",
    metrics: [
      { label: "Components designed and built", value: "6" },
      { label: "Quality dimensions scored", value: "5 (DAMA-DMBOK)" },
      { label: "Sector use cases modelled", value: "16 retail + manufacturing" },
    ],
    stack: [
      "Python", "FastAPI", "LangGraph", "gpt-5.4-mini (Azure OpenAI)", "DuckDB", "sqlglot",
      "MinIO", "PostgreSQL JSONB", "Redis", "Pandas", "YData Profiling",
      "React 18", "TypeScript", "Zustand", "TanStack Query", "Recharts",
      "Keycloak 23", "Power BI", "pytest", "Docker",
    ],
  },
  {
    slug: "intelligent-job-agent",
    name: "Intelligent Job Application Agent",
    category: "AI Agents · Automation · LLM Orchestration",
    year: "2026",
    summary:
      "An autonomous multi-source job search and application agent orchestrated with LangGraph — featuring targeted scraping across 5 job boards, hybrid semantic matching, zero-hallucination document generation with an Evidence Guard, and Human-in-the-Loop email dispatch.",
    narrative:
      "Job hunting across multiple platforms is time-consuming and prone to generic applications. This autonomous agent automates the end-to-end workflow: scraping targeted job boards (LinkedIn, Indeed, Rekrute, Emploi.ma, Bayt), running hybrid semantic-lexical scoring against candidate profiles on an A/B/C/D matrix, generating tailored CVs and cover letters strictly anchored in verified facts via an Evidence Guard validator, and providing an interactive FastAPI dashboard for explicit human review before any application email is dispatched.",
    highlights: [
      "Orchestration of a resilient multi-agent pipeline with LangGraph (StateGraph) — modular sequencing for multi-source scraping, schema normalization, strict hash-based deduplication, and pipeline health monitoring (LangGraph, Python, Playwright, BeautifulSoup).",
      "Hybrid matching engine combining weighted lexical scoring with vector semantic similarity to evaluate candidate-job fit across an actionable A/B/C/D strategic matrix (Scikit-learn, Semantic Embeddings, Google Gemini API).",
      "Dynamic CV and cover letter generation featuring an integrated Evidence Guard and deterministic OutputValidator guaranteeing zero hallucination with targeted self-repair routines (Azure OpenAI GPT-4o, Jinja2, WeasyPrint).",
      "Interactive FastAPI review dashboard for application preview and secure Human-in-the-Loop email dispatch workflow governed by atomic concurrency locks (FastAPI, Tailwind CSS, Threading Locks, SMTP).",
      "Triple-tier output evaluation system (45% Personalization, 35% Factuality, 20% HR Readability) driving continuous application quality feedback loops (OfferEvalScoring, Pandas, CSV Tracking).",
    ],
    architecture:
      "LangGraph StateGraph coordinating Playwright/BS4 scrapers → Scikit-learn & Gemini hybrid semantic matcher → Azure OpenAI GPT-4o generator with Evidence Guard → WeasyPrint PDF renderer → FastAPI Human-in-the-Loop review UI with atomic lock email dispatch.",
    metrics: [
      { label: "Scraping sources supported", value: "5 platforms" },
      { label: "Hallucination tolerance", value: "0% (Evidence Guard)" },
      { label: "Quality evaluation weights", value: "45% Pers. / 35% Fact. / 20% Read." },
    ],
    stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Azure OpenAI (GPT-4o)",
      "Google Gemini API",
      "Playwright",
      "BeautifulSoup",
      "Scikit-learn",
      "Semantic embeddings",
      "WeasyPrint",
      "Docker",
      "Pandas",
      "Tailwind CSS",
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
    demoVideoUrl: "https://youtu.be/6sUTNl_Ztg8",
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
    context: "National hackathon — 3rd place",
    repo: "https://github.com/maryame5/Intelligente-analytics-aeroportuaire",
    demoVideoUrl: "https://youtu.be/NyGqdqOOttY",
    summary:
      "A predictive platform surfacing the service factors that drive passenger satisfaction, queryable in natural language.",
    narrative:
      "Airports collect thousands of passenger data points but struggle to identify concrete levers. Delivered with a team for a national hackathon, this platform lets any manager ask a question in French and get back the factors driving satisfaction, the geographic hotspots and a projected return on corrective actions.",
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
    repo: "https://github.com/maryame5/bank-review-pipeline",
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
    repo: "https://github.com/maryame5/CabinetDentaire",
    summary:
      "A Spring Boot application managing patients, appointments, treatments and invoices across three distinct business roles.",
    narrative:
      "A dental practice runs on the same few operations repeated daily. The application models them explicitly — patients, appointments, treatments, invoices — behind role-based access control for three distinct business roles.",
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
      "The pipeline parses a text with spaCy to extract the scenes it contains, generates a stylised frame for each one with Stable Diffusion, then compiles the frames into a coherent animated sequence with MoviePy.",
    highlights: [
      "spaCy syntactic analysis driving scene extraction.",
      "Stable Diffusion image generation for each extracted scene.",
      "MoviePy compilation into a final stylised video.",
    ],
    architecture: "Sequential Python pipeline: text parsing → prompt construction → diffusion generation → frame compilation.",
    stack: ["Python", "Stable Diffusion", "spaCy", "MoviePy"],
  },
  {
    slug: "public-employment-portal",
    name: "Public Employment Portal — BPMN Workflow",
    category: "Enterprise Systems · Process Automation",
    year: "2024",
    summary:
      "End-to-end BPMN 2.0 modeling and Bonitasoft BPMS automation of national public recruitment workflows.",
    narrative:
      "Public sector recruitment requires transparent, auditable processes from registration to final selection. This system models the entire hiring journey using BPMN 2.0 swimlanes, automates task routing via Bonitasoft BPMS, and persists structured applicant data in PostgreSQL.",
    highlights: [
      "BPMN 2.0 process mapping under IBM Blueworks Live with complex swimlanes and Playback simulation.",
      "Workflow automation under Bonitasoft BPMS with configurable task execution engine.",
      "Business Data Model (BDM) persisted in PostgreSQL with custom relational constraints.",
      "Interactive web task forms, contracts, and automated validation connectors.",
    ],
    architecture:
      "BPMN 2.0 process engine running on Bonitasoft BPMS connected to a PostgreSQL database and web form interface.",
    stack: ["BPMN 2.0", "Bonitasoft", "IBM Blueworks Live", "PostgreSQL", "HTML/CSS"],
  },
  {
    slug: "e-learning-platform",
    name: "E-Learning Platform",
    category: "Full-Stack · Django · Web Development",
    year: "2024",
    summary:
      "Multi-role educational platform managing courses, student progress analytics, and real-time discussion spaces.",
    narrative:
      "Built with Django, this platform supports Students, Instructors, and Admins. Teachers can publish courses, duplicate content with one click, and export CSV analytics, while students track completion metrics and interact in CSRF-secured AJAX discussion threads.",
    highlights: [
      "Django MVC architecture with Custom User Model for multi-role workflows.",
      "Instructor dashboard with one-click course duplication and CSV reporting.",
      "Student progress tracking (completion rate, 7-day history) and recommendation engine.",
      "Real-time AJAX discussion boards secured with CSRF tokens.",
    ],
    architecture:
      "Django MVC application with custom ORM models, SQLite database, Bootstrap 5 UI, and AJAX endpoints.",
    stack: ["Python", "Django", "SQLite", "Bootstrap 5", "JavaScript", "AJAX"],
  },
  {
    slug: "django-auction-site",
    name: "Django Auction Site",
    category: "Backend · Django · Web Development",
    year: "2024",
    summary:
      "Dynamic online auction platform with real-time bidding rules, watchlists, category filters, and admin moderation.",
    narrative:
      "A full-featured auction engine built on Django ORM managing active listings, minimum bid increments, and automated winner notifications upon listing expiration.",
    highlights: [
      "Relational domain model under Django ORM (Listings, Bids, Comments, Watchlist, Categories).",
      "Strict bidding validation rules and user authentication security.",
      "Automated end-of-auction winner notifications for buyers and sellers.",
      "Customized Django Admin dashboard for live moderation of listings and bids.",
    ],
    architecture:
      "Layered Django application with relational ORM model and server-rendered views.",
    stack: ["Python", "Django", "HTML/CSS", "Bootstrap", "SQLite"],
  },
  {
    slug: "chafafiya-portal",
    name: "CHAFafiya — Government Transparency Portal",
    category: "Civic Tech · UI/UX · Design Thinking",
    year: "2024",
    summary:
      "Civic transparency platform for tracking and visualizing Moroccan public infrastructure investments, built using Design Thinking.",
    narrative:
      "Designed to make public expenditure readable for citizens, CHAFafiya features regional investment dashboards, searchable project databases, and high-fidelity Figma prototypes tested with public servants.",
    highlights: [
      "Design Thinking methodology (empathy, ideation, prototyping) informed by 20+ user research interviews.",
      "Interactive regional investment dashboards and filterable public project databases.",
      "High-fidelity Figma prototype with reusable design system tokens and responsive grid.",
      "Public-sector data visualization tailored for non-technical citizens.",
    ],
    architecture:
      "Design Thinking product definition, Figma design system, and responsive front-end prototype.",
    stack: ["Figma", "Design Thinking", "User Research", "Prototyping", "Design Systems"],
  },
  {
    slug: "azure-hybrid-infrastructure",
    name: "Azure Hybrid VNet & Active Directory",
    category: "Cloud Infrastructure · SysOps · Network Security",
    year: "2024",
    summary:
      "Secure hybrid cloud virtual network and domain infrastructure on Azure with Active Directory DS and GPO enforcement.",
    narrative:
      "Designed and deployed an enterprise Azure Virtual Network (10.0.0.0/24) hosting a Windows Server 2022 domain controller. Configured Active Directory DS, DHCP/DNS roles, Organizational Units (OUs), and strict Group Policy Objects (GPOs).",
    highlights: [
      "Azure VNet deployment with Windows Server 2022 DC and Windows 10 client environment.",
      "Active Directory DS forest, local domain, DNS roles, and dynamic DHCP scope.",
      "Organizational Unit (OU) structure separating restricted and privileged accounts.",
      "Strict GPOs enforcing USB blocking, installation restrictions, and network isolation.",
    ],
    architecture:
      "Microsoft Azure VNet hosting Windows Server 2022 AD DS controller and Windows 10 endpoints governed by GPOs.",
    stack: [
      "Microsoft Azure",
      "Windows Server 2022",
      "Active Directory (AD DS)",
      "DHCP/DNS",
      "GPO",
      "Azure VNet",
    ],
  },
  {
    slug: "iot-energy-platform",
    name: "IoT Domestic Energy Consumption Platform",
    category: "IoT · Systems Engineering · Project Management",
    year: "2024",
    summary:
      "IoT platform planning and systems engineering for real-time monitoring of household electricity, water, and gas consumption.",
    narrative:
      "End-to-end systems engineering and project management for a multi-sensor IoT platform. Optimized scheduling using PERT to reduce delivery timeline by 31% (from 45 to 31 days) through task parallelization.",
    highlights: [
      "4-phase WBS project planning under MS Project and Gantter.",
      "PERT schedule optimization achieving 31% timeline reduction (45 → 31 days).",
      "Hardware stack dimensioning: ESP32 microcontrollers, YF-S201 flow sensors, SCT-013 current clamps, and gas sensors.",
      "Financial budget estimation (46,620 MAD) with dynamic human and material resource allocation.",
    ],
    architecture:
      "Distributed ESP32 sensor node architecture delivering telemetry to a central monitoring pipeline.",
    stack: [
      "ESP32",
      "Arduino",
      "C/C++",
      "SCT-013",
      "YF-S201",
      "MS Project",
      "Gantter",
      "WBS/PERT",
    ],
  },
  {
    slug: "smart-home-iot",
    name: "Smart Home IoT Automation System",
    category: "IoT · Embedded Systems · C++",
    year: "2024",
    summary:
      "Automated smart home security, lighting, and climate control system built on Arduino UNO firmware and Tinkercad simulation.",
    narrative:
      "Modeled and programmed an automated home control system utilizing analog/digital sensors (MQ-2 gas, PIR motion, HC-SR04 ultrasonic, LDR light) to trigger alarm buzzers, servo door locks, and climate control motors.",
    highlights: [
      "Multi-sensor circuit design and simulation under Tinkercad using Arduino UNO.",
      "Embedded C/C++ firmware managing hardware interrupts and sensor reading loops.",
      "Actuator mechanisms: alarm buzzer, servo access lock, and DC motors.",
      "Power consumption optimization using hardware sleep modes for non-priority components.",
    ],
    architecture:
      "Embedded C/C++ control loop on Arduino UNO driving sensors, relays, buzzers, and servos.",
    stack: [
      "Arduino UNO",
      "C/C++",
      "Tinkercad",
      "MQ-2",
      "PIR",
      "HC-SR04",
      "LDR",
    ],
  },
  {
    slug: "student-portfolio-app",
    name: "Student Portfolio Mobile App",
    category: "Mobile Development · Java · Android",
    year: "2024",
    summary:
      "Native Android application for managing student academic records, course grades, projects, and contact data.",
    narrative:
      "Developed in Java with Android Studio, this native app provides full CRUD management for student portfolios, persistent local storage with MySQL synchronization, and a responsive mobile interface.",
    highlights: [
      "Native Android MVC architecture built with Android Studio and SDK tools.",
      "Full CRUD operations for academic grades, projects, contact details, and documents.",
      "Local MySQL data persistence and student profile synchronization.",
      "Touch-optimized, responsive mobile XML layout.",
    ],
    architecture:
      "Android MVC application with XML layouts, activity controllers, and MySQL database persistence.",
    stack: ["Java", "Android Studio", "MySQL", "Android SDK", "XML Layouts"],
  },
];

export const flagshipProject = projects.find((p) => p.featured) ?? projects[0];
export const featuredProjects = projects.filter((p) => p.featured);
