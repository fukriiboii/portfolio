interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-[clamp(3rem,5vw,5rem)] max-w-3xl">
      <p className="mb-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.7rem,0.7vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-(--color-accent-light)">
        {eyebrow}
      </p>

      <h2 className="text-[clamp(2rem,3.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-[clamp(1.25rem,1.8vw,2rem)] max-w-2xl text-[clamp(1rem,1.05vw,1.25rem)] leading-relaxed text-(--color-text-secondary)">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader