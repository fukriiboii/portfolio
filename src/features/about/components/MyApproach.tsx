import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

function MyApproach() {
  const approaches = [
    {
      number: "01",
      title: "Understand",
      description:
        "I start by understanding the problem, the users and the business behind the product. Good solutions begin with knowing what actually needs to be solved.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "I turn requirements into practical technical solutions with a focus on clean architecture, maintainable code and a clear user experience.",
    },
    {
      number: "03",
      title: "Improve",
      description:
        "I test, refine and deploy with the long term in mind. The goal is not just to make something work, but to build something reliable and easy to evolve.",
    },
  ]

  return (
    <Section>
      <Container>
        <div className="grid gap-[clamp(3rem,5vw,5rem)] lg:grid-cols-[0.7fr_1.3fr] lg:gap-[clamp(4rem,7vw,7rem)]">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
              My approach
            </p>

            <h2 className="mt-[clamp(1.25rem,1.8vw,1.5rem)] max-w-xl text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              From problem to product.
            </h2>

            <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-2xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
              I combine technical thinking with an understanding of the
              people and businesses behind the products I build.
            </p>
          </div>

          <div>
            {approaches.map((approach) => (
              <article
                key={approach.number}
                className="group grid gap-[clamp(1.25rem,2vw,2rem)] border-b border-(--color-border) py-[clamp(2rem,3vw,2.5rem)] first:pt-0 sm:grid-cols-[clamp(50px,4vw,60px)_1fr]"
              >
                <span className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium text-(--color-text-muted) transition-colors duration-300 group-hover:text-(--color-accent-light)">
                  {approach.number}
                </span>

                <div>
                  <h3 className="text-[clamp(1.25rem,1.5vw,1.75rem)] font-medium tracking-tight transition-colors duration-300 group-hover:text-(--color-accent-light)">
                    {approach.title}
                  </h3>

                  <p className="mt-[clamp(0.75rem,1vw,1rem)] max-w-3xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                    {approach.description}
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

export default MyApproach