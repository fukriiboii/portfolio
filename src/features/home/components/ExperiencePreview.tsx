import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"
import SectionHeader from "../../../shared/components/SectionHeader"

const experiences = [
  {
    period: "2026 — Present",
    company: "Excetra",
    role: "Founder / Fullstack Developer",
  },
  {
    period: "2024 — 2025",
    company: "The Knowledge Formula",
    role: "Frontend Developer",
  },
  {
    period: "2023 — 2024",
    company: "NTNT",
    role: "Junior IT Consultant",
  },
]

function ExperiencePreview() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked."
        />

        <div className="border-t border-(--color-border)">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="grid gap-[clamp(0.75rem,1.2vw,1.5rem)] border-b border-(--color-border) py-[clamp(1.5rem,2vw,2rem)] sm:grid-cols-[clamp(140px,12vw,180px)_1fr] sm:gap-[clamp(2rem,3vw,3rem)]"
            >
              <p className="text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-muted)">
                {experience.period}
              </p>

              <div>
                <h3 className="text-[clamp(1rem,1.2vw,1.375rem)] font-medium tracking-tight">
                  {experience.company}
                </h3>

                <p className="mt-1 text-[clamp(0.8rem,0.8vw,1rem)] text-(--color-text-secondary)">
                  {experience.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ExperiencePreview