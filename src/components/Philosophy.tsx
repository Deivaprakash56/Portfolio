import { philosophy } from '../data/content'
import { Section } from './Section'

export function Philosophy() {
  return (
    <Section
      id="philosophy"
      eyebrow="Operating philosophy"
      title="What working in robotics has taught me."
      description="Personal reflections from field work—not invented public quotations."
      dark
    >
      <ul className="grid gap-0 border-t border-white/10 md:grid-cols-2">
        {philosophy.map((line, index) => (
          <li key={line} className="border-b border-white/10 py-6 pr-4 md:odd:border-r md:odd:pr-8 md:even:pl-8">
            <span className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">{String(index + 1).padStart(2, '0')}</span>
            <p className="mt-3 font-display text-xl leading-snug font-semibold text-balance md:text-2xl">{line}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
