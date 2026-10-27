import type { ReactElement } from 'react'
import type { SiteNumbers } from '../data/numbers'

const label = 'font-mono text-[10px] tracking-[0.14em] uppercase'

/** Before/after bars: deployment days. */
function DeploymentTime({ n }: { n: SiteNumbers }) {
  const max = n.deploymentDaysBefore
  const w = (d: number) => (d / max) * 300
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={`Deployment time cut from ${n.deploymentDaysBefore} to ${n.deploymentDaysAfter} days`}>
      {Array.from({ length: max + 1 }, (_, d) => (
        <line key={d} x1={50 + w(d)} x2={50 + w(d)} y1={70} y2={230} className={d % 5 === 0 ? 'stroke-line-strong' : 'stroke-line'} strokeWidth="1" />
      ))}
      <text x="50" y="98" className={`fill-ink-faint ${label}`}>Before</text>
      <rect x="50" y="106" width={w(n.deploymentDaysBefore)} height="34" rx="8" className="fill-line-strong" />
      <text x={56 + w(n.deploymentDaysBefore)} y="129" textAnchor="end" className="fill-ink font-display text-[15px] font-bold" dx="-14">
        {n.deploymentDaysBefore} days
      </text>
      <text x="50" y="172" className={`fill-accent ${label}`}>Now</text>
      <rect x="50" y="180" width={w(n.deploymentDaysAfter)} height="34" rx="8" className="fill-accent" />
      <text x={64 + w(n.deploymentDaysAfter)} y="203" className="fill-accent font-display text-[15px] font-bold">
        {n.deploymentDaysAfter} days
      </text>
      <path d={`M${50 + w(n.deploymentDaysBefore)} 150 C ${50 + w(n.deploymentDaysBefore)} 175, ${120 + w(n.deploymentDaysAfter)} 160, ${100 + w(n.deploymentDaysAfter)} 190`} className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <text x="350" y="262" textAnchor="end" className={`fill-ink-faint ${label}`}>days on site →</text>
    </svg>
  )
}

/** Top-down factory floor with racks, an AMR route and passed checkpoints. */
function ProofOfConcept({ n }: { n: SiteNumbers }) {
  const racks = [70, 150, 230]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Robot route across a factory floor during a proof of concept">
      <rect x="30" y="40" width="340" height="220" rx="14" className="fill-bg-elevated stroke-line-strong" strokeWidth="1.5" />
      {racks.map((x) => (
        <g key={x}>
          <rect x={x} y="70" width="50" height="70" rx="4" className="fill-bg-alt stroke-line-strong" />
          <rect x={x} y="170" width="50" height="60" rx="4" className="fill-bg-alt stroke-line-strong" />
        </g>
      ))}
      <rect x="305" y="70" width="45" height="160" rx="6" className="fill-accent-soft stroke-accent" strokeDasharray="4 3" />
      <text x="327" y="155" textAnchor="middle" className={`fill-accent ${label}`} transform="rotate(-90 327 155)">Dock</text>
      <path d="M50 155 H130 V60 H210 V155 H290 V245 H327 V230" className="stroke-accent" strokeWidth="2.5" strokeDasharray="6 6" fill="none" strokeLinecap="round" />
      {[[130, 155], [210, 60], [290, 155]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="10" className="fill-accent" />
          <path d={`M${x - 4} ${y} l3 3 l5 -6`} className="stroke-on-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <g transform="translate(36 141)">
        <rect width="28" height="28" rx="7" className="fill-ink" />
        <circle cx="20" cy="14" r="3.5" className="fill-accent" />
      </g>
      <g transform="translate(262 14)">
        <rect width="110" height="34" rx="17" className="fill-ink" />
        <text x="55" y="22" textAnchor="middle" className="fill-bg font-display text-[13px] font-bold">{n.pocs}+ PoCs</text>
      </g>
    </svg>
  )
}

/** Hub-and-spoke: on-site India, virtual support abroad. */
function Handover({ n }: { n: SiteNumbers }) {
  const remote = [
    { x: 330, y: 80, name: 'United States' },
    { x: 320, y: 230, name: 'Australia' },
  ]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={`On-site deployments in India and ${n.internationalProjects} international projects supported remotely`}>
      {[60, 95, 130].map((r) => (
        <circle key={r} cx="120" cy="155" r={r} className="stroke-line" fill="none" />
      ))}
      {remote.map((p) => (
        <g key={p.name}>
          <path d={`M120 155 Q ${(120 + p.x) / 2} ${p.y < 155 ? 60 : 270}, ${p.x} ${p.y}`} className="stroke-accent" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <circle cx={p.x} cy={p.y} r="16" className="fill-bg-elevated stroke-accent" strokeWidth="2" />
          <rect x={p.x - 6} y={p.y - 6} width="12" height="9" rx="1.5" className="stroke-accent" strokeWidth="1.6" fill="none" />
          <path d={`M${p.x - 4} ${p.y + 6} h8`} className="stroke-accent" strokeWidth="1.6" />
          <text x={p.x} y={p.y + 34} textAnchor="middle" className={`fill-ink-muted ${label}`}>{p.name}</text>
        </g>
      ))}
      <circle cx="120" cy="155" r="34" className="fill-accent" />
      <path d="M120 137 c-8 0 -13 6 -13 13 c0 9 13 21 13 21 s13 -12 13 -21 c0 -7 -5 -13 -13 -13z" className="fill-on-accent" />
      <circle cx="120" cy="150" r="4.5" className="fill-accent" />
      <text x="120" y="212" textAnchor="middle" className="fill-ink font-display text-[14px] font-bold">India</text>
      <text x="120" y="228" textAnchor="middle" className={`fill-ink-faint ${label}`}>On site</text>
      <text x="250" y="160" textAnchor="middle" className={`fill-accent ${label}`}>Virtual</text>
    </svg>
  )
}

/** Feasibility checks feeding a go / no-go decision. */
function Feasibility() {
  const checks = ['Floor & ramps', 'Aisle width', 'Wi-Fi coverage', 'Payload & cycle']
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Site checks leading to a go or no-go decision">
      {checks.map((c, i) => {
        const y = 60 + i * 52
        return (
          <g key={c}>
            <rect x="30" y={y} width="170" height="36" rx="10" className="fill-bg-elevated stroke-line-strong" />
            <circle cx="52" cy={y + 18} r="9" className="fill-accent" />
            <path d={`M48 ${y + 18} l3 3 l5 -6`} className="stroke-on-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="70" y={y + 23} className="fill-ink text-[13px] font-medium">{c}</text>
            <path d={`M200 ${y + 18} C 240 ${y + 18}, 240 150, 268 150`} className="stroke-line-strong" strokeWidth="1.5" fill="none" />
          </g>
        )
      })}
      <g transform="translate(318 150)">
        <rect x="-44" y="-44" width="88" height="88" rx="12" transform="rotate(45)" className="fill-accent" />
        <text y="-2" textAnchor="middle" className="fill-on-accent font-display text-[15px] font-bold">GO</text>
        <text y="16" textAnchor="middle" className="fill-on-accent font-mono text-[9px] tracking-[0.14em] opacity-80">/ NO-GO</text>
      </g>
    </svg>
  )
}

export const caseIllustrations: Record<string, (p: { n: SiteNumbers }) => ReactElement> = {
  'reducing-amr-deployment-time': DeploymentTime,
  'industrial-amr-proof-of-concepts': ProofOfConcept,
  'production-deployment-and-handover': Handover,
  'technical-feasibility-and-performance': Feasibility,
}
