export interface TechCategory {
  title: string
  technologies: string[]
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Database",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Cloud",
    technologies: [
      "Azure",
      "Docker",
      "CI/CD",
      "Git",
    ],
  },
]