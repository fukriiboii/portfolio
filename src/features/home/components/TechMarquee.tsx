const backendTechnologies = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
]

const frontendTechnologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Docker",
  "Azure",
  "Git",
]

function TechMarquee() {
  return (
    <div className="relative overflow-hidden space-y-px">
      <div className="relative overflow-hidden border-y border-(--color-border) py-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-(--color-background) to-transparent sm:w-40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-(--color-background) to-transparent sm:w-40"
        />

        <div className="tech-marquee flex w-max gap-8">
          {[...backendTechnologies, ...backendTechnologies, ...backendTechnologies, ...backendTechnologies, ...backendTechnologies, ...backendTechnologies, ...backendTechnologies].map(
            (technology, index) => (
              <div
                key={`${technology}-${index}`}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <span className="text-lg font-medium text-(--color-text-secondary) transition-colors duration-300 hover:text-(--color-text-primary) sm:text-xl">
                  {technology}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
              </div>
            ),
          )}
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-(--color-border) py-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-(--color-background) to-transparent sm:w-40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-(--color-background) to-transparent sm:w-40"
        />

        <div className="tech-marquee-reverse flex w-max gap-8">
          {[...frontendTechnologies, ...frontendTechnologies, ...frontendTechnologies, ...frontendTechnologies, ...frontendTechnologies, ...frontendTechnologies, ...frontendTechnologies].map(
            (technology, index) => (
              <div
                key={`${technology}-${index}`}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <span className="text-lg font-medium text-(--color-text-secondary) transition-colors duration-300 hover:text-(--color-green-light) sm:text-xl">
                  {technology}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-(--color-green)" />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default TechMarquee