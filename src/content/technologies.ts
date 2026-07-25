export type TechDomain = {
  id: string;
  name: string;
  description: string;
  items: string[];
};

export const technologyDomains: TechDomain[] = [
  {
    id: "software",
    name: "Software Engineering",
    description: "Languages and paradigms I reach for by default.",
    items: ["TypeScript", "Python", "Java", "Go", "SQL"],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Services, APIs and data-intensive systems.",
    items: ["Node.js", "FastAPI", "Spring Boot", "gRPC", "REST", "GraphQL"],
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Product interfaces built for clarity and speed.",
    items: ["React", "TanStack", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    description: "Production LLM systems, retrieval, evaluation.",
    items: ["OpenAI", "Anthropic", "LangChain", "pgvector", "RAG", "Evals"],
  },
  {
    id: "data",
    name: "Data",
    description: "Storage, pipelines and semantic layers.",
    items: ["PostgreSQL", "Redis", "Kafka", "dbt", "Airflow"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Deployment, observability and operations.",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "Patterns that keep systems maintainable at scale.",
    items: [
      "Domain-Driven Design",
      "Event-Driven",
      "Hexagonal",
      "CQRS",
      "Microservices",
    ],
  },
];
