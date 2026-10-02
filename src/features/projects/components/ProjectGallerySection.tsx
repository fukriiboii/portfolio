import type { Project } from "../data/projects"
import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

interface ProjectGallerySectionProps {
  project: Project
}

function ProjectGallerySection({
  project,
}: ProjectGallerySectionProps) {
  return (
    <Section>
      <Container>
        <div className="mb-[clamp(3rem,4vw,4rem)] flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
              Screenshots
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3vw,3.75rem)] font-semibold tracking-tight">
              Inside the product.
            </h2>
          </div>

          <p className="max-w-xl text-[clamp(0.9rem,0.9vw,1.125rem)] leading-relaxed text-(--color-text-secondary) sm:text-right">
            A closer look at the interface and the different parts of the
            product.
          </p>
        </div>

        <div className="space-y-[clamp(1.5rem,2vw,2.5rem)]">
          {project.images.map((image, index) => (
            <figure key={image} className="group">
              <div className="overflow-hidden bg-(--color-surface)">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>

              <figcaption className="mt-3 flex items-center justify-between text-[clamp(0.7rem,0.7vw,0.875rem)] text-(--color-text-muted)">
                <span>
                  {project.title} — Screen{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(project.images.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectGallerySection