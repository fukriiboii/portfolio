import type { Project } from "../data/projects"
import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

interface ProjectFeaturesProps {
  project: Project
}

function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
              Features
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2rem,3vw,3.75rem)] font-semibold leading-tight tracking-tight">
              What the product does.
            </h2>

            <p className="mt-6 max-w-xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
              The main functionality was designed around the real needs of
              the business and its users.
            </p>
          </div>

          <div className="grid border-l border-t border-(--color-border) sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <article
                key={feature.title}
                className="group border-b border-r border-(--color-border) p-[clamp(1.25rem,1.5vw,2rem)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium text-(--color-text-muted)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-(--color-accent) transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h3 className="mt-10 text-[clamp(1.125rem,1.4vw,1.5rem)] font-medium tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[clamp(0.9rem,0.9vw,1.125rem)] leading-relaxed text-(--color-text-secondary)">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProjectFeatures