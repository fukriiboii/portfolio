import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

function AboutHero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) opacity-[0.08] blur-[140px]"
      />

      <Container>
        <div className="relative z-10 grid gap-[clamp(3rem,5vw,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-[clamp(4rem,7vw,7rem)]">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
              About me
            </p>

            <h1 className="mt-[clamp(1.5rem,2.5vw,2.5rem)] text-[clamp(3rem,6vw,8rem)] font-semibold leading-[1.02] tracking-tight">
              Building with
              <br />
              <span className="text-(--color-text-secondary)">
                purpose.
              </span>
            </h1>
          </div>

          <div className="max-w-3xl lg:pb-[clamp(0rem,0.5vw,0.5rem)]">
            <p className="text-[clamp(1.125rem,1.3vw,1.5rem)] leading-relaxed text-(--color-text-secondary)">
              I'm a fullstack developer who enjoys turning ideas,
              business needs and complex problems into reliable digital
              products.
            </p>

            <p className="mt-[clamp(1.25rem,1.8vw,2rem)] text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-muted)">
              From architecture and backend systems to frontend
              experiences and deployment, I enjoy being involved in the
              entire process of bringing a product to life.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AboutHero