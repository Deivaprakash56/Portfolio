export function HeroGraphic() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-dark-elevated grid-tech-dark" aria-hidden="true">
      <svg viewBox="0 0 480 360" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="36" width="400" height="288" stroke="#3a3a3A" strokeWidth="1.5" />
        <path d="M120 36 V324 M200 36 V324 M280 36 V324 M360 36 V324" stroke="#2e2e2e" strokeWidth="1" />
        <path d="M40 120 H440 M40 200 H440 M40 280 H440" stroke="#2e2e2e" strokeWidth="1" />
        <path
          d="M88 280 C120 280, 120 160, 160 160 C210 160, 210 240, 260 240 C310 240, 320 100, 380 100"
          stroke="#E8570A"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="[stroke-dashoffset:240] motion-safe:animate-[draw-line_2.4s_ease-out_forwards]"
        />
        {[
          [88, 280],
          [160, 160],
          [260, 240],
          [380, 100],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="#141414" stroke="#E8570A" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="1.8" fill="#E8570A" />
          </g>
        ))}
        <g transform="translate(248 228)">
          <rect x="-18" y="-12" width="36" height="24" rx="4" fill="#1c1c1c" stroke="#F4F2EE" strokeWidth="1.5" />
          <rect x="-10" y="-6" width="12" height="8" rx="1" fill="#E8570A" opacity="0.85" />
          <circle cx="-12" cy="14" r="3.5" fill="#5c5a56" />
          <circle cx="12" cy="14" r="3.5" fill="#5c5a56" />
        </g>
        <text x="52" y="58" fill="#8a8780" fontFamily="IBM Plex Mono, monospace" fontSize="10">NAV MAP · STYLIZED</text>
        <text x="52" y="312" fill="#5c5a56" fontFamily="IBM Plex Mono, monospace" fontSize="9">NOT A CUSTOMER FACILITY</text>
      </svg>
      <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3">
        <div className="rounded-sm border border-white/10 bg-dark/80 px-3 py-2">
          <p className="font-mono text-[10px] tracking-wider text-dark-muted uppercase">Pose</p>
          <p className="font-mono text-xs text-bg">x: 12.4 · y: 8.1 · θ: 42°</p>
        </div>
        <div className="rounded-sm border border-accent/40 bg-accent/10 px-3 py-2">
          <p className="font-mono text-[10px] tracking-wider text-accent uppercase">Status</p>
          <p className="font-mono text-xs text-bg">Navigating</p>
        </div>
      </div>
    </div>
  )
}
