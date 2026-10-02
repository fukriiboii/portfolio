import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { Project } from "../data/projects"

interface ProjectGalleryProps {
    project: Project
}

function ProjectGallery({ project }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % project.images.length)
    }

    const previousImage = () => {
        setCurrentIndex(
            (currentIndex - 1 + project.images.length) %
            project.images.length,
        )
    }

    const currentImageNumber = String(currentIndex + 1).padStart(2, "0")
    const totalImageNumber = String(project.images.length).padStart(2, "0")

    return (
        <div className="relative">
            <div className="overflow-hidden bg-(--color-surface)">
                <img
                    src={project.images[currentIndex]}
                    alt={`${project.title} screenshot ${currentIndex + 1}`}
                    className="block h-auto w-full"
                />
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-(--color-text-muted)">
                    Project preview
                </span>

                <div className="flex items-center gap-3">
                    <span className="text-xs text-(--color-text-muted)">
                        {currentImageNumber} / {totalImageNumber}
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Previous image"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) transition-colors duration-300 hover:border-(--color-accent) hover:bg-(--color-accent)"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Next image"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) transition-colors duration-300 hover:border-(--color-accent) hover:bg-(--color-accent)"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGallery