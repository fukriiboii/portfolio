import Container from "../../../shared/components/Container"
import ProjectCard from "../../../shared/components/ProjectCard"
import Section from "../../../shared/components/Section"
import SectionHeader from "../../../shared/components/SectionHeader"
import { projects } from "../../projects/data/projects"

function SelectedProjects() {
  return (
    <Section id="work">
      <Container>
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've built."
          description="A selection of real world applications I've designed and developed from idea to deployment."
        />

        <div className="space-y-[clamp(4rem,8vw,10rem)]">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block"
            >
              <ProjectCard
                number={project.number}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.images[0]}
              />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default SelectedProjects