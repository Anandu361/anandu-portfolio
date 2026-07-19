export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI" | "DevOps" | "Tools";
  description: string;
}

export const skills: Skill[] = [
  {
    id: "astro",
    name: "Astro",
    category: "Frontend",
    description: "Static-first web framework",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description: "Full-stack React framework",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Component-based UI library",
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    description: "Python web framework",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Backend",
    description: "Java backend framework",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    description: "Relational database",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    description: "Containerization platform",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    description: "Version control",
  },
];