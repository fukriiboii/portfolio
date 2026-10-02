interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[clamp(5rem,8vw,10rem)] ${className}`}
    >
      {children}
    </section>
  )
}

export default Section