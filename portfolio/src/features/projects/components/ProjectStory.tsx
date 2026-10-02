import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"
import type { Project } from "../data/projects"

interface ProjectStoryProps {
  project: Project
}

function ProjectStory({ project }: ProjectStoryProps) {
  const sections = [
    {
      number: "01",
      title: "Challenge",
      content: project.story.challenge,
    },
    {
      number: "02",
      title: "Approach",
      content: project.story.approach,
    },
    {
      number: "03",
      title: "Building",
      content: project.story.building,
    },
    {
      number: "04",
      title: "Result",
      content: project.story.result,
    },
  ]

  return (
    <Section>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
              The story
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2rem,3vw,3.75rem)] font-semibold leading-tight tracking-tight">
              From idea to a working product.
            </h2>
          </div>

          <div>
            {sections.map((section) => (
              <article
                key={section.number}
                className="group grid gap-5 border-b border-(--color-border) py-8 first:pt-0 sm:grid-cols-[60px_1fr] sm:gap-8 sm:py-10"
              >
                <span className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium text-(--color-accent-light) transition-colors duration-300 group-hover:text-(--color-green-light)">
                  {section.number}
                </span>

                <div>
                  <h3 className="text-[clamp(1.125rem,1.4vw,1.5rem)] font-medium tracking-tight transition-colors duration-300 group-hover:text-(--color-accent-light)">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                    {section.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProjectStory