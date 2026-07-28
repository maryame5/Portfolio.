export type TechDomain = {
  id: string;
  name: string;
  description: string;
  items: string[];
};

export const technologyDomains: TechDomain[] = [
  {
    id: "languages",
    name: "Languages",
    description: "What I write day to day.",
    items: ["Python", "Java 21", "TypeScript", "SQL", "JavaScript", "Kotlin", "C/C++"],
  },
  {
    id: "java",
    name: "Java / J2EE",
    description: "Distributed enterprise backends.",
    items: [
      "Spring Boot 3", "Spring Security 6", "Spring Cloud", "Eureka",
      "API Gateway", "Hibernate/JPA", "OpenFeign", "RabbitMQ", "Kafka", "Maven",
    ],
  },
  {
    id: "python",
    name: "Python & Data Science",
    description: "Services, models and analysis.",
    items: ["FastAPI", "Flask", "Pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "MLflow", "spaCy"],
  },
  {
    id: "ai",
    name: "AI Agents",
    description: "Orchestrated, validated, human-supervised.",
    items: ["LangGraph", "LangChain", "MCP", "Azure OpenAI", "RAG", "NLQ", "Human-in-the-Loop", "Prompt Engineering"],
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Product interfaces built for clarity.",
    items: ["React 18", "TypeScript", "Vite", "Angular 20", "Zustand", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Recharts", "Framer Motion"],
  },
  {
    id: "data",
    name: "Data & Storage",
    description: "Pipelines, warehouses and lakes.",
    items: ["PostgreSQL", "PostgreSQL JSONB", "MySQL", "Redis", "MongoDB", "MinIO", "DuckDB", "Airflow", "dbt", "Medallion", "Star Schema"],
  },
  {
    id: "devops",
    name: "DevOps & Security",
    description: "Shipping and keeping it safe.",
    items: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "GitLab CI", "Keycloak 23", "OIDC", "OAuth2", "JWT", "Micrometer"],
  },
  {
    id: "practices",
    name: "Practices",
    description: "How the work gets structured.",
    items: ["Architecture Design", "Code Review", "UML / PlantUML", "BPMN", "Unit & Integration Testing", "API Design", "Agile / Scrum", "Technical Documentation"],
  },
];
