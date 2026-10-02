import { Link, useLocation, useNavigate } from "react-router-dom"

import ContactMe from "./ContactMe"
import Container from "./Container"
import FKLogo from "./FKLogo"

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const closeToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`)
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-(--color-border)">
      <Container>
        {/* Main footer */}
        <div className="grid gap-[clamp(2.5rem,4vw,4rem)] py-[clamp(3rem,5vw,5rem)] sm:py-[clamp(4rem,5vw,5rem)] lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Brand */}
          <div className="max-w-2xl">
            <Link
              to="/"
              className="group inline-flex items-baseline font-heading text-[clamp(1.5rem,1.8vw,2rem)] font-bold tracking-[-0.07em]"
              aria-label="FK. Home"
            >
              <FKLogo className="h-10 w-10" />

              <span className="ml-0.5 text-(--color-accent) transition-transform duration-300 group-hover:translate-x-0.5">
                .
              </span>
            </Link>

            <p className="mt-5 max-w-xl text-[clamp(0.9rem,0.9vw,1.125rem)] leading-relaxed text-(--color-text-secondary)">
              Fullstack developer building reliable and modern digital
              products from idea to deployment.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[clamp(0.7rem,0.7vw,0.875rem)] text-(--color-text-muted)">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-green-light) opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-green-light)" />
              </span>

              Available for selected projects
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[clamp(1.5rem,2vw,2.5rem)]">
            <button
              type="button"
              onClick={() => closeToSection("work")}
              className="text-left text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
            >
              Work
            </button>

            <Link
              to="/about"
              className="text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => closeToSection("contact")}
              className="text-left text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
            >
              Contact
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full border border-(--color-border) px-[clamp(1rem,1.2vw,1.5rem)] py-[clamp(0.5rem,0.6vw,0.75rem)] text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-all duration-300 hover:!border-(--color-accent) hover:!bg-(--color-accent) hover:!text-white"
            >
              Resume ↗
            </a>
          </nav>
        </div>

        {/* Social links */}
        <div className="border-t border-(--color-border)">
          <ContactMe compact />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-(--color-border) py-[clamp(1.25rem,1.5vw,1.75rem)] text-[clamp(0.7rem,0.7vw,0.875rem)] text-(--color-text-muted) sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} FK. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

