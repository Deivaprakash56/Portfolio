/** "D" drawn as a robot's route: a start node, a path, and a live end point. */
export function LogoMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg]"
      aria-hidden
    >
      <defs>
        <linearGradient id="logo-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#logo-mark-bg)" />
      <path
        d="M10.5 22.5V9.5h5a6.5 6.5 0 0 1 0 13h-2"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="22.5" r="2.1" fill="#fff" />
      <circle cx="13.2" cy="22.5" r="1.4" fill="#a5f3fc" />
    </svg>
  )
}
