import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

function AboutPreview() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-[clamp(2.5rem,4vw,4rem)] lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-[clamp(4rem,7vw,7rem)]">
          <div>
            <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
              About me
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              I build digital products from idea to deployment.
            </h2>

            <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-3xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
              I'm a fullstack developer with a focus on building reliable,
              maintainable and user-friendly applications. I enjoy turning
              real business needs into thoughtful technical solutions.
            </p>

            <a
              href="/portfolio/about"
              className="group mt-[clamp(1.75rem,2.5vw,2.5rem)] inline-flex items-center text-[clamp(0.8rem,0.8vw,1rem)] font-medium text-(--color-text-primary)"
            >
              More about me

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AboutPreview