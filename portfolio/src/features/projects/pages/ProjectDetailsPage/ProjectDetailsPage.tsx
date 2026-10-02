import { useParams } from "react-router-dom"

import NotFound from "../../../../shared/components/NoFound"

import { projects } from "../../data/projects"

import ProjectHero from "../../components/ProjectHero"
import ProjectStory from "../../components/ProjectStory"
import ProjectTechStack from "../../components/ProjectTechStack"
import ProjectFeatures from "../../components/ProjectFeatures"
import ProjectGallerySection from "../../components/ProjectGallerySection"
import NextProject from "../../components/NextProject"


function ProjectDetailsPage() {
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug,
  )

  if (!project) {
    return <NotFound />
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectStory project={project} />
      <ProjectTechStack project={project} />
      <ProjectFeatures project={project} />
      <ProjectGallerySection project={project} />
      <NextProject project={project} />
    </main>
  )
}

export default ProjectDetailsPage