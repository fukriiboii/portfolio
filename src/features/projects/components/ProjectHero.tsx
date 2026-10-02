import Section from "../../../shared/components/Section"
import type { Project } from "../data/projects"
import ProjectGallery from "./ProjectGallery"

interface ProjectHeroProps {
    project: Project
}

function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <Section className="relative flex min-h-[100svh] items-center overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-accent) opacity-[0.08] blur-[140px]"
            />

            <div className="relative mx-auto grid w-full max-w-[1800px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
                {/* Left side */}
                <div>
                    <div className="flex items-center gap-3 text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em]">
                        <span className="text-(--color-accent-light)">
                            {project.number} / Project
                        </span>

                        <span className="h-1 w-1 rounded-full bg-(--color-accent)" />

                        <span className="text-(--color-green-light)">
                            {project.status}
                        </span>
                    </div>

                    <h1
                        className="mt-6 max-w-3xl bg-[linear-gradient(90deg,var(--color-accent-light),var(--color-accent),var(--color-green-light),var(--color-accent-light))] bg-[length:300%_100%] bg-clip-text font-heading text-[clamp(3rem,6vw,9rem)] font-semibold leading-[0.95] tracking-tight text-transparent"
                        style={{
                            animation:
                                "project-title-gradient 8s ease-in-out infinite",
                        }}
                    >
                        {project.title}
                    </h1>

                    <p className="mt-8 max-w-xl text-[clamp(1rem,1.1vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                        {project.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full px-[clamp(1.25rem,1.4vw,2rem)] py-[clamp(0.65rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.75vw,1rem)] font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-(--color-accent) hover:shadow-lg"
                            >
                                View live

                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-(--color-border) px-[clamp(1.25rem,1.4vw,2rem)] py-[clamp(0.65rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.75vw,1rem)] font-medium transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:bg-(--color-accent)"
                            >
                                GitHub

                                <span className="ml-2">↗</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Right side */}
                <div>
                    <ProjectGallery project={project} />
                </div>
            </div>
        </Section>
    )
}

export default ProjectHero