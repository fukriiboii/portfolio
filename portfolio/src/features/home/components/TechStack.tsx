import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"
import SectionHeader from "../../../shared/components/SectionHeader"
import { techStack } from "../../../shared/data/techStack"

function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Technology"
          title="Tools I work with."
          description="A practical stack built around modern development, clean architecture and reliable deployment."
        />

        <div className="grid gap-x-[clamp(2rem,3vw,3rem)] gap-y-[clamp(2.5rem,4vw,4rem)] sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((category) => (
            <div
              key={category.title}
              className="group border-t border-(--color-border) pt-[clamp(1.25rem,1.5vw,1.5rem)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(1rem,1.1vw,1.25rem)] font-medium tracking-tight">
                  {category.title}
                </h3>

                <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent) opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
              </div>

              <ul className="mt-[clamp(1.25rem,1.5vw,1.5rem)] space-y-[clamp(0.6rem,0.8vw,0.75rem)]">
                {category.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-secondary) transition-colors duration-300 group-hover:text-(--color-text-primary)"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default TechStack