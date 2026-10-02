interface FKLogoProps {
  className?: string
}

function FKLogo({ className = "w-10 h-10" }: FKLogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-label="FK logo"
      role="img"
    >
      <defs>
        <linearGradient id="fk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="60%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="url(#fk)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* F */}
        <path d="M18 12V52" />
        <path d="M18 12H42" />
        <path d="M18 32H36" />

        {/* K */}
        <path d="M42 12L30 32L50 52" />
      </g>
    </svg>
  )
}

export default FKLogo