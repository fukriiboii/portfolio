import { Mail } from "lucide-react"

interface ContactMeProps {
  compact?: boolean
}

function ContactMe({ compact = false }: ContactMeProps) {
  return (
    <section
      id="contact"
      className={
        compact
          ? "py-[clamp(2rem,3vw,2.5rem)]"
          : "py-[clamp(4rem,6vw,6rem)]"
      }
    >
      <div className="flex justify-center">
        <div className="flex items-center gap-[clamp(0.75rem,1vw,1rem)]">
          {/* Email */}
          <a
            href="mailto:Fahrikuzey@hotmail.com"
            aria-label="Email"
            className="group flex h-[clamp(2.75rem,3vw,3.25rem)] w-[clamp(2.75rem,3vw,3.25rem)] items-center justify-center rounded-full border border-(--color-border) text-(--color-text-secondary) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white"
          >
            <Mail
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/fukriiboii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group flex h-[clamp(2.75rem,3vw,3.25rem)] w-[clamp(2.75rem,3vw,3.25rem)] items-center justify-center rounded-full border border-(--color-border) text-(--color-text-secondary) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[clamp(1rem,1.1vw,1.25rem)] w-[clamp(1rem,1.1vw,1.25rem)] transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.25 9.25 0 0 1 12 6.94c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fahri-kuzey-3540a7177/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group flex h-[clamp(2.75rem,3vw,3.25rem)] w-[clamp(2.75rem,3vw,3.25rem)] items-center justify-center rounded-full border border-(--color-border) text-(--color-text-secondary) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[clamp(1rem,1.1vw,1.25rem)] w-[clamp(1rem,1.1vw,1.25rem)] transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3v9H5v-9Zm4.75 0h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73h-3v-4.2c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.2v4.28h-3v-9Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactMe