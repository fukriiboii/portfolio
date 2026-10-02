import { Link } from "react-router-dom"
import Container from "./Container"


function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-green-light)">
            404 / Page not found
          </p>

          <h1 className="mt-[clamp(1.5rem,2.5vw,2.5rem)] font-heading text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.9] tracking-tight">
            Lost in
            <br />
            <span className="text-(--color-text-secondary)">
              the void.
            </span>
          </h1>

          <p className="mt-[clamp(1.5rem,2.5vw,2.5rem)] max-w-2xl text-[clamp(1rem,1.1vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            to="/"
            className="mt-[clamp(2rem,3vw,3rem)] inline-flex items-center rounded-full border border-(--color-border) px-[clamp(1.25rem,1.4vw,2rem)] py-[clamp(0.65rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.75vw,1rem)] font-medium text-(--color-green-light) transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white"
          >
            Back to home
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </Container>
    </main>
  )
}

export default NotFound