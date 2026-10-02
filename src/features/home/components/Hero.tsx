import Container from "../../../shared/components/Container"
import Section from "../../../shared/components/Section"

function Hero() {
    return (
        <Section className="relative flex min-h-screen items-center overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) opacity-20 blur-[140px]"
            />

            <Container className="relative z-10">
                <div className="max-w-6xl">
                    <p className="mb-[clamp(1.25rem,2vw,2rem)] text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
                        Fullstack Developer
                    </p>

                    <h1 className="text-[clamp(3rem,7vw,10rem)] font-semibold leading-[1.02] tracking-tight">
                        I build digital
                        <br />
                        products that
                        <br />
                        <span className="text-(--color-text-secondary)">
                            matter.
                        </span>
                    </h1>

                    <p className="mt-[clamp(1.5rem,2.5vw,2.5rem)] max-w-3xl text-[clamp(1rem,1.1vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
                        Fullstack developer focused on building reliable,
                        maintainable and user friendly applications from idea
                        to deployment.
                    </p>

                    <div className="mt-[clamp(2rem,3vw,3rem)] flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center rounded-full bg-(--color-text-black) px-[clamp(1.25rem,1.4vw,2rem)] py-[clamp(0.65rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.75vw,1rem)] font-medium text-(--color-background) transition-transform duration-300 hover:-translate-y-1"
                        >
                            View my work
                            <span className="ml-2">↓</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-(--color-border) px-[clamp(1.25rem,1.4vw,2rem)] py-[clamp(0.65rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.75vw,1rem)] font-medium transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent)"
                        >
                            Get in touch
                        </a>
                    </div>

                    <div className="mt-[clamp(3rem,5vw,5rem)] flex items-center gap-3 text-[clamp(0.75rem,0.8vw,1rem)] text-(--color-text-muted)">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-green-light) opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-(--color-green-light)" />
                        </span>

                        Available for selected projects
                    </div>
                </div>
            </Container>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-8">
                <a
                    href="#work"
                    aria-label="Scroll to projects"
                    className="flex flex-col items-center gap-2 text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-text-primary)"
                >
                    <span className="text-[10px] uppercase tracking-[0.25em]">
                        Scroll
                    </span>

                    <span className="h-10 w-px bg-(--color-border)" />
                </a>
            </div>
        </Section>
    )
}

export default Hero