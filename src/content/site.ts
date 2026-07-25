import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Target,
  Layers,
  Minimize2,
  Rocket,
} from "lucide-react";

export const site = {
  name: "Maryame",
  greeting: "Hello, I'm Maryame.",
  role: "AI & Software Engineer",
  headline: "AI & Software Engineer",
  tagline: "Building intelligent software products from data to impact.",
  intro:
    "I design, build and deliver intelligent software that transforms business challenges into scalable digital products through modern software engineering and artificial intelligence.",
  location: "Europe — Remote",
  availability: "Available for new engagements",
  email: "hello@maryame.dev",
  socials: {
    github: "https://github.com/maryame",
    linkedin: "https://linkedin.com/in/maryame",
  },
  resumeUrl: "/resume.pdf",
};

export type Principle = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const principles: Principle[] = [
  {
    id: "01",
    title: "Design before implementation",
    body: "Constraints, trade-offs and interfaces are decided on paper first. Code follows a considered decision, never the other way around.",
    icon: Compass,
  },
  {
    id: "02",
    title: "Software solves business problems",
    body: "Engineering exists to move outcomes. Every system starts from a business question worth answering.",
    icon: Target,
  },
  {
    id: "03",
    title: "Architecture enables scalability",
    body: "Boundaries, contracts and data flow are chosen so the system can grow without rewriting its foundation.",
    icon: Layers,
  },
  {
    id: "04",
    title: "Keep complexity under control",
    body: "The simplest system that satisfies the constraints wins. Complexity is a cost, paid daily in operations.",
    icon: Minimize2,
  },
  {
    id: "05",
    title: "Ship production-ready software",
    body: "Observability, error handling, security and operations are part of the definition of done — not a follow-up ticket.",
    icon: Rocket,
  },
];
