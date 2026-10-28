import { Cpu, Handshake, Users } from 'lucide-react'
import { hero, skills } from '../data/content'
import { Section } from './Section'

type Node = { label: string; side: 'customer' | 'technical'; x: number; y: number }

// Customer skills fan out on the left, technical skills on the right, all around one hub.
const spread = (count: number, from: number, to: number) =>
  Array.from({ length: count }, (_, i) => from + ((to - from) * i) / Math.max(count - 1, 1))

const toNode = (label: string, deg: number, side: Node['side']): Node => {
  const rad = (deg * Math.PI) / 180
  return { label, side, x: 50 + 37 * Math.cos(rad), y: 50 + 40 * Math.sin(rad) }
}

const nodes: Node[] = [
  ...skills.customer.items.map((label, i) => toNode(label, spread(skills.customer.items.length, 250, 110)[i], 'customer')),
  ...skills.technical.items.map((label, i) => toNode(label, spread(skills.technical.items.length, -70, 70)[i], 'technical')),
]

const pill = {
  customer: 'bg-accent text-white shadow-[0_10px_24px_-12px_var(--accent)]',
  technical: 'bg-dark text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.6)]',
}

function Hub({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="relative flex h-28 w-28 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/20 [animation-duration:2.6s] motion-reduce:animate-none" aria-hidden />
        <span className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-bg-alt ring-2 ring-accent">
          <img src={hero.portrait.src} alt="" className="h-full w-full object-cover object-[50%_25%]" />
        </span>
      </span>
      <p className="mt-3 font-display text-xl font-bold tracking-tight">Customer Success</p>
      <p className="text-sm text-ink-muted">backed by hands-on engineering</p>
    </div>
  )
}

export function Skills() {
  const { customer, technical, team } = skills
  return (
    <Section id="skills" eyebrow="Skills" title="Customer-facing. Engineer at heart." className="bg-bg-alt">
      {/* Desktop: hub-and-spoke diagram */}
      <div className="relative hidden h-[520px] lg:block" role="list" aria-label="Skills">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          {nodes.map((n) => (
            <line
              key={n.label}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              className={`flow-line ${n.side === 'customer' ? 'stroke-accent' : 'stroke-ink-faint'}`}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-line bg-bg-elevated px-8 py-6 shadow-[0_24px_60px_-24px_color-mix(in_srgb,var(--accent)_45%,transparent)]">
          <Hub />
        </div>

        {nodes.map((n, i) => (
          <span
            key={n.label}
            role="listitem"
            className={`skill-item absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition hover:scale-105 ${pill[n.side]}`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${200 + i * 70}ms` }}
          >
            {n.label}
          </span>
        ))}

        <div className="absolute bottom-0 left-0 flex items-center gap-2 text-xs font-medium text-ink-muted">
          <Handshake size={14} className="text-accent" aria-hidden /> Customer
          <Cpu size={14} className="ml-3 text-ink" aria-hidden /> Technical
        </div>
      </div>

      {/* Phones: hub on top, skills as chips below */}
      <div className="lg:hidden">
        <Hub />
        {[customer, technical].map((group, g) => (
          <div key={group.title} className="mt-8">
            <p className="flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">
              {g === 0 ? <Handshake size={14} className="text-accent" aria-hidden /> : <Cpu size={14} aria-hidden />}
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${pill[g === 0 ? 'customer' : 'technical']}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-line bg-bg-elevated px-5 py-2.5 text-sm font-semibold text-ink shadow-sm">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Users size={15} aria-hidden />
        </span>
        {team}
      </p>
    </Section>
  )
}
