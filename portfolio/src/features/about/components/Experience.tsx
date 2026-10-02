import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"
import { experience } from "../data/Experience"

function Experience() {
  return (
    <Section>
      <Container>
        <div className="grid gap-[clamp(3rem,5vw,5rem)] lg:grid-cols-[0.7fr_1.3fr] lg:gap-[clamp(4rem,7vw,7rem)]">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
              Experience
            </p>

            <h2 className="mt-[clamp(1.25rem,1.8vw,1.5rem)] max-w-xl text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              Building through experience.
            </h2>

            <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-2xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
              A journey shaped by real projects, different environments and
              continuous learning.
            </p>
          </div>

          <div>
            {experience.map((item) => (
              <article
                key={item.company}
                className="group border-b border-(--color-border) py-[clamp(2rem,3vw,2.5rem)] first:pt-0"
              >
                <div className="grid gap-[clamp(1rem,1.5vw,1.5rem)] sm:grid-cols-[clamp(120px,10vw,160px)_1fr] sm:gap-[clamp(2rem,3vw,3rem)]">
                  <span className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium text-(--color-text-muted)">
                    {item.period}
                  </span>

                  <div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-[clamp(1.5rem,2vw,2rem)]">
                      <h3 className="text-[clamp(1.25rem,1.5vw,1.75rem)] font-medium tracking-tight transition-colors duration-300 group-hover:text-(--color-accent-light)">
                        {item.company}
                      </h3>

                      <span className="text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-muted)">
                        {item.role}
                      </span>
                    </div>

                    <p className="mt-[clamp(1rem,1.3vw,1.25rem)] max-w-3xl text-[clamp(1rem,1vw,1.125rem)] leading-relaxed text-(--color-text-secondary)">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Experience