import type { ReactElement } from 'react'

const label = 'font-mono text-[9px] tracking-[0.14em] uppercase'

/** 1. Learn the job: what moves, from where, to where. */
function LearnTheJob() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      <rect x="20" y="45" width="56" height="60" rx="6" className="fill-bg-elevated stroke-line-strong" />
      <text x="48" y="120" textAnchor="middle" className={`fill-ink-faint ${label}`}>Line</text>
      <rect x="164" y="45" width="56" height="60" rx="6" className="fill-bg-elevated stroke-line-strong" />
      <text x="192" y="120" textAnchor="middle" className={`fill-ink-faint ${label}`}>Store</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={30 + i * 13} y={68} width="10" height="10" rx="2" className="fill-accent" opacity={1 - i * 0.25} />
      ))}
      <path d="M82 75 H158" className="stroke-accent" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M152 70 l6 5 l-6 5" className="stroke-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
      <g transform="translate(104 22)">
        <rect width="32" height="22" rx="11" className="fill-ink" />
        <text x="16" y="15" textAnchor="middle" className="fill-bg font-display text-[11px] font-bold">?</text>
      </g>
    </svg>
  )
}

/** 2. Make it measurable: the numbers that define the job. */
function Measurable() {
  const rows = [
    ['Payload', 0.7],
    ['Cycle time', 0.5],
    ['Path length', 0.85],
  ] as const
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      {rows.map(([name, v], i) => (
        <g key={name} transform={`translate(30 ${32 + i * 34})`}>
          <text y="0" className={`fill-ink-muted ${label}`}>{name}</text>
          <rect y="7" width="180" height="10" rx="5" className="fill-line" />
          <rect y="7" width={180 * v} height="10" rx="5" className="fill-accent" />
          <line x1={180 * v} x2={180 * v} y1="3" y2="21" className="stroke-ink" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  )
}

/** 3. Check if it fits: robot footprint against the aisle. */
function CheckFit() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      <rect x="20" y="20" width="60" height="110" rx="4" className="fill-bg-alt stroke-line-strong" />
      <rect x="160" y="20" width="60" height="110" rx="4" className="fill-bg-alt stroke-line-strong" />
      <rect x="98" y="58" width="44" height="54" rx="8" className="fill-ink" />
      <circle cx="120" cy="70" r="4" className="fill-accent" />
      <path d="M84 35 H156" className="stroke-accent" strokeWidth="1.5" />
      <path d="M84 30 v10 M156 30 v10" className="stroke-accent" strokeWidth="1.5" />
      <text x="120" y="28" textAnchor="middle" className={`fill-accent ${label}`}>Aisle</text>
      <circle cx="186" cy="120" r="13" className="fill-accent" />
      <path d="M180 120 l4 4 l7 -8" className="stroke-on-accent" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** 4. Keep people aligned: three teams, one outcome. */
function Aligned() {
  const nodes = [
    { x: 45, y: 40, t: 'HW' },
    { x: 195, y: 40, t: 'SW' },
    { x: 120, y: 128, t: 'Client' },
  ]
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      {nodes.map((n) => (
        <line key={n.t} x1={n.x} y1={n.y} x2="120" y2="72" className="stroke-line-strong" strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      {[24, 16, 8].map((r, i) => (
        <circle key={r} cx="120" cy="72" r={r} className={i === 1 ? 'fill-bg-elevated' : 'fill-accent'} />
      ))}
      {nodes.map((n) => (
        <g key={n.t}>
          <rect x={n.x - 24} y={n.y - 12} width="48" height="24" rx="12" className="fill-bg-elevated stroke-line-strong" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" className="fill-ink text-[10px] font-semibold">{n.t}</text>
        </g>
      ))}
    </svg>
  )
}

/** 5. Prove it on site: runs logged on the real workflow. */
function ProveOnSite() {
  const pts = [18, 30, 26, 44, 52, 50, 66, 78]
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${30 + i * 26} ${120 - p}`).join(' ')
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      {[40, 70, 100].map((y) => (
        <line key={y} x1="30" x2="215" y1={y} y2={y} className="stroke-line" />
      ))}
      <line x1="30" x2="215" y1="120" y2="120" className="stroke-line-strong" />
      <path d={`${d} L212 120 L30 120 Z`} className="fill-accent-soft" />
      <path d={d} className="stroke-accent" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={30 + i * 26} cy={120 - p} r="3" className="fill-bg-elevated stroke-accent" strokeWidth="2" />
      ))}
      <text x="30" y="138" className={`fill-ink-faint ${label}`}>Runs on site</text>
    </svg>
  )
}

/** 6. Hand it over: docs and ownership pass to the customer. */
function HandOver() {
  return (
    <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden>
      <rect x="34" y="22" width="76" height="100" rx="8" className="fill-bg-elevated stroke-line-strong" />
      {[44, 62, 80, 98].map((y) => (
        <g key={y}>
          <rect x="46" y={y} width="9" height="9" rx="2" className="fill-accent" />
          <rect x="62" y={y + 2} width="36" height="5" rx="2.5" className="fill-line-strong" />
        </g>
      ))}
      <path d="M118 72 H160" className="stroke-accent" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M154 67 l6 5 l-6 5" className="stroke-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="190" cy="58" r="14" className="fill-ink" />
      <path d="M166 104 c0 -18 11 -28 24 -28 s24 10 24 28" className="fill-ink" />
      <circle cx="206" cy="98" r="11" className="fill-accent" />
      <path d="M201 98 l3 3 l6 -6" className="stroke-on-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export const stepIllustrations: Record<number, () => ReactElement> = {
  1: LearnTheJob,
  2: Measurable,
  3: CheckFit,
  4: Aligned,
  5: ProveOnSite,
  6: HandOver,
}
