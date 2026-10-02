import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

function PersonalPhilosophy() {
  return (
    <Section>
      <Container>
        <div className="border-t border-(--color-border) pt-[clamp(3rem,5vw,5rem)]">
          <div className="grid gap-[clamp(2.5rem,4vw,4rem)] lg:grid-cols-[0.7fr_1.3fr] lg:gap-[clamp(4rem,7vw,7rem)]">
            <div>
              <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
                Philosophy
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
                Good software is built with both people and technology in mind.
              </h2>

              <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-3xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                I believe the best solutions are not necessarily the most
                complex ones. They are the ones that solve the right problem,
                are easy to understand and can grow with the people using
                them.
              </p>

              <p className="mt-[clamp(1rem,1.5vw,1.5rem)] max-w-3xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-muted)">
                That's why I care about both the technical foundation and the
                experience around it. Clean code, thoughtful architecture and
                a clear understanding of the problem should work together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default PersonalPhilosophy