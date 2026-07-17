export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "educose-crm",
    number: "01",
    title: "EduCose CRM",
    description:
      "A multi-tenant CRM platform for educational institutions.",
    technologies: [
      "Django",
      "Next.js",
      "PostgreSQL",
    ],
    href: "/projects/educose-crm",
    featured: true,
  },
];