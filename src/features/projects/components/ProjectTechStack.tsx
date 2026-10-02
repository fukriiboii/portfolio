import type { Project } from "../data/projects"
import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

interface ProjectTechStackProps {
  project: Project
}

function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
              Technology
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2rem,3vw,3.75rem)] font-semibold leading-tight tracking-tight">
              Built with tools I trust.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2">
            {project.technologies.map((technology, index) => (
              <div
                key={technology}
                className="group flex items-center gap-[clamp(1rem,1.2vw,1.5rem)] border-b border-(--color-border) py-[clamp(1rem,1.2vw,1.5rem)] transition-colors duration-300"
              >
                <span className="w-8 text-[clamp(0.7rem,0.7vw,0.875rem)] text-(--color-text-muted)">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[clamp(1rem,1.05vw,1.25rem)] font-medium text-(--color-text-secondary) transition-colors duration-300 group-hover:text-(--color-text-primary)">
                  {technology}
                </span>

                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-(--color-accent) opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProjectTechStack