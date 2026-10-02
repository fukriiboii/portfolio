import { ArrowUpRight } from "lucide-react"

import type { Project } from "../data/projects"
import { projects } from "../data/projects"
import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

interface NextProjectProps {
  project: Project
}

function NextProject({ project }: NextProjectProps) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  )

  const nextProject =
    projects[(currentIndex + 1) % projects.length]

  if (!nextProject) {
    return null
  }

  return (
    <Section className="border-t border-(--color-border)">
      <Container>
        <div className="mb-[clamp(2rem,3vw,3rem)]">
          <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
            Next project
          </p>
        </div>

        <a
          href={`/projects/${nextProject.slug}`}
          className="group block"
        >
          <div className="flex flex-col gap-8 border-b border-(--color-border) pb-[clamp(2rem,3vw,3rem)] sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            <div>
              <p className="text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-muted)">
                {nextProject.number} / Project
              </p>

              <h2 className="mt-4 font-heading text-[clamp(3rem,6vw,9rem)] font-semibold leading-[0.95] tracking-tight transition-colors duration-300 group-hover:text-(--color-accent-light)">
                {nextProject.title}
              </h2>

              <p className="mt-5 max-w-3xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                {nextProject.description}
              </p>
            </div>

            <div className="flex h-[clamp(3.5rem,4vw,4.5rem)] w-[clamp(3.5rem,4vw,4.5rem)] shrink-0 items-center justify-center rounded-full border border-(--color-border) transition-all duration-300 group-hover:border-(--color-accent) group-hover:bg-(--color-accent)">
              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </a>
      </Container>
    </Section>
  )
}

export default NextProject