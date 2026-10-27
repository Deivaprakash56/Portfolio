import type { ReactElement } from 'react'

const label = 'font-mono text-[9px] tracking-[0.14em] uppercase'

const Check = ({ x, y }: { x: number; y: number }) => (
  <g>
    <circle cx={x} cy={y} r="8" className="fill-accent" />
    <path d={`M${x - 3.5} ${y} l2.5 2.5 l4.5 -5`} className="stroke-on-accent" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </g>
)

/** Customer on one side, a fleet on the other, me in between. */
function Deployment() {
  return (
    <svg viewBox="0 0 480 140" className="h-full w-full" aria-hidden>
      <circle cx="70" cy="56" r="16" className="fill-ink" />
      <path d="M42 104 c0 -20 12 -30 28 -30 s28 10 28 30" className="fill-ink" />
      <text x="70" y="126" textAnchor="middle" className={`fill-ink-faint ${label}`}>Customer</text>
      <path d="M112 70 H196" className="stroke-accent" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="200" y="44" width="80" height="52" rx="12" className="fill-accent" />
      <text x="240" y="75" textAnchor="middle" className="fill-on-accent font-display text-[12px] font-bold">Me</text>
      <path d="M284 70 H360" className="stroke-accent" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M354 65 l6 5 l-6 5" className="stroke-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => (
          <g key={`${r}-${c}`} transform={`translate(${372 + c * 38} ${34 + r * 26})`}>
            <rect width="30" height="20" rx="5" className="fill-ink" />
            <circle cx="22" cy="10" r="3" className="fill-accent" />
          </g>
        )),
      )}
      <text x="406" y="126" textAnchor="middle" className={`fill-ink-faint ${label}`}>Fleet</text>
      <Check x={268} y={44} />
    </svg>
  )
}

/** LiDAR scan and a planned path to a goal on an occupancy grid. */
function Navigation() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="150" y="20" width="22" height="50" rx="3" className="fill-line-strong" />
      <rect x="60" y="92" width="60" height="18" rx="3" className="fill-line-strong" />
      <path d="M50 70 A40 40 0 0 1 120 42" className="stroke-accent" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M50 70 A58 58 0 0 1 140 30" className="stroke-accent" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M48 70 C 90 70, 120 84, 135 84 S 190 84, 196 48" className="stroke-accent" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
      <rect x="30" y="60" width="22" height="20" rx="5" className="fill-ink" />
      <circle cx="45" cy="70" r="3" className="fill-accent" />
      <path d="M196 48 V20" className="stroke-ink" strokeWidth="2" />
      <path d="M196 20 l18 6 l-18 6 z" className="fill-accent" />
    </svg>
  )
}

/** A terminal with the commands I live in. */
function Terminal() {
  const lines = ['$ ros2 launch nav2_bringup', '$ git pull && colcon build', '$ python3 site_check.py']
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="20" y="16" width="200" height="110" rx="10" className="fill-ink" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={36 + i * 12} cy="30" r="3.5" className={i === 2 ? 'fill-accent' : 'fill-ink-faint'} />
      ))}
      {lines.map((l, i) => (
        <text key={l} x="34" y={58 + i * 20} className="fill-bg font-mono text-[10px]">
          {l}
        </text>
      ))}
      <rect x="34" y="108" width="7" height="10" className="fill-accent" />
    </svg>
  )
}

/** Robot with its sensors, wired to the plant PLC. */
function Systems() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="30" y="56" width="90" height="46" rx="10" className="fill-ink" />
      <circle cx="55" cy="108" r="8" className="fill-line-strong" />
      <circle cx="95" cy="108" r="8" className="fill-line-strong" />
      <rect x="62" y="42" width="26" height="14" rx="4" className="fill-accent" />
      <text x="75" y="34" textAnchor="middle" className={`fill-accent ${label}`}>LiDAR</text>
      <rect x="112" y="68" width="10" height="14" rx="2" className="fill-accent" />
      <path d="M122 75 H170" className="stroke-accent" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="172" y="50" width="46" height="52" rx="6" className="fill-bg-elevated stroke-line-strong" />
      {[62, 74, 86].map((y) => (
        <rect key={y} x="180" y={y} width="30" height="6" rx="2" className="fill-line-strong" />
      ))}
      <text x="195" y="118" textAnchor="middle" className={`fill-ink-faint ${label}`}>PLC</text>
    </svg>
  )
}

/** A cobot arm. */
function Arm() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="70" y="112" width="60" height="12" rx="3" className="fill-ink" />
      <path d="M100 112 L100 80 L150 46 L178 70" className="stroke-ink" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[[100, 80], [150, 46]].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="9" className="fill-accent" />
      ))}
      <path d="M178 70 l10 8 M178 70 l-2 13" className="stroke-ink" strokeWidth="4" strokeLinecap="round" />
      <rect x="176" y="96" width="22" height="16" rx="3" className="fill-accent-soft stroke-accent" />
    </svg>
  )
}

export const skillIllustrations: Record<string, () => ReactElement> = {
  'Deployment and Leadership': Deployment,
  'Robotics and Navigation': Navigation,
  'Programming and Tools': Terminal,
  'Robotics Systems and Integration': Systems,
  'Industrial Robotics': Arm,
}
