interface ProjectCardProps {
  number: string
  title: string
  description: string
  technologies: string[]
  image: string
}

function ProjectCard({
  number,
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) {
  return (
    <article className="group">
      <div className="flex flex-col gap-[clamp(2.5rem,4vw,4rem)] lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-[clamp(3rem,5vw,6rem)]">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium tracking-[0.2em] text-(--color-accent-light)">
              {number}
            </span>

            <span className="flex h-[clamp(2.5rem,3vw,3.5rem)] w-[clamp(2.5rem,3vw,3.5rem)] items-center justify-center rounded-full border border-(--color-border) text-[clamp(1rem,1.1vw,1.25rem)] text-(--color-text-muted) transition-all duration-300 group-hover:border-(--color-accent) group-hover:bg-(--color-accent) group-hover:text-white">
              ↗
            </span>
          </div>

          <h3 className="mt-[clamp(1.75rem,2.5vw,2.5rem)] max-w-3xl font-heading text-[clamp(2.25rem,4vw,5rem)] font-semibold leading-[1] tracking-tight transition-colors duration-300 group-hover:text-(--color-accent-light)">
            {title}
          </h3>

          <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-2xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
            {description}
          </p>

          <div className="mt-[clamp(1.5rem,2vw,2rem)] flex max-w-2xl flex-wrap items-center gap-x-[clamp(0.75rem,1vw,1rem)] gap-y-2">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                className="flex items-center gap-[clamp(0.75rem,1vw,1rem)]"
              >
                <span className="text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-muted) transition-colors duration-300 group-hover:text-(--color-text-secondary)">
                  {technology}
                </span>

                {index < technologies.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-(--color-accent) opacity-60"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden bg-(--color-surface)">
          <img
            src={image}
            alt={`${title} project preview`}
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard