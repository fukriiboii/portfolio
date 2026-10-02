import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

import Container from "./Container"
import FKLogo from "./FKLogo"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSectionClick = (sectionId: string) => {
    closeMenu()

    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`)
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Click outside overlay */}
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/10 md:hidden"
        />
      )}

      <header className="fixed inset-x-0 top-0 z-50">
        <Container className="py-[clamp(1rem,1.5vw,1.5rem)]">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group inline-flex items-baseline font-heading text-[clamp(1.5rem,1.8vw,2rem)] font-bold tracking-[-0.07em]"
              aria-label="FK. Home"
            >
              <FKLogo className="w-10 h-10" />

              <span className="ml-0.5 !text-(--color-accent) transition-transform duration-300 group-hover:translate-x-0.5">
                .
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-[clamp(1.5rem,2vw,2.5rem)] md:flex">
              <button
                type="button"
                onClick={() => handleSectionClick("work")}
                className="!text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
              >
                Work
              </button>

              <Link
                to="/about"
                onClick={closeMenu}
                className="!text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
              >
                About
              </Link>

              <button
                type="button"
                onClick={() => handleSectionClick("contact")}
                className="!text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
              >
                Contact
              </button>

              <a
                href="/portfolio/public/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-(--color-border) px-[clamp(1rem,1.2vw,1.5rem)] py-[clamp(0.5rem,0.6vw,0.75rem)] !text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:!text-white"
              >
                Resume ↗
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group relative flex h-[clamp(2.75rem,3vw,3.25rem)] w-[clamp(2.75rem,3vw,3.25rem)] items-center justify-center overflow-hidden rounded-full border transition-all duration-300 md:hidden ${
                isMenuOpen
                  ? "border-(--color-accent) bg-(--color-accent) text-white"
                  : "border-(--color-border) !text-(--color-green-light) hover:border-(--color-accent) hover:bg-(--color-accent) hover:!text-white"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-(--color-accent) to-(--color-green) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {isMenuOpen ? (
                <X
                  size={20}
                  strokeWidth={1.8}
                  className="transition-transform duration-300"
                />
              ) : (
                <Menu
                  size={20}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </button>
          </nav>

          {/* Mobile navigation */}
          <div
            className={`grid transition-all duration-300 ease-out md:hidden ${
              isMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-2xl border border-(--color-border) bg-(--color-surface)/95 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleSectionClick("work")}
                    className="border-b border-(--color-border) py-4 text-left !text-[clamp(0.9rem,1vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
                  >
                    Work
                  </button>

                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className="border-b border-(--color-border) py-4 !text-[clamp(0.9rem,1vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
                  >
                    About
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleSectionClick("contact")}
                    className="border-b border-(--color-border) py-4 text-left !text-[clamp(0.9rem,1vw,1rem)] !text-(--color-green-light) transition-colors duration-300 hover:!text-(--color-accent-light)"
                  >
                    Contact
                  </button>

                  <a
                    href="/portfolio/public/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="mt-4 inline-flex w-fit rounded-full border border-(--color-border) px-[clamp(1rem,1.2vw,1.5rem)] py-[clamp(0.5rem,0.6vw,0.75rem)] !text-[clamp(0.8rem,0.8vw,1rem)] !text-(--color-green-light) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:!text-white"
                  >
                    Resume ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Navbar