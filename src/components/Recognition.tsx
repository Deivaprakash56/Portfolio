import { recognition } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'
import { Section } from './Section'

export function Recognition() {
  const { fill } = useSiteNumbers()
  return (
    <Section
      id="recognition"
      eyebrow="Recognition and education"
      title="Signals of craft, learning, and contribution."
      description="Awards, education, and mentoring—without fabricated certificates or unverified institutional endorsements."
      className="bg-bg-alt"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {recognition.map((item) => (
          <article key={item.id} className="border border-line bg-bg p-5 transition-colors hover:border-accent md:p-6">
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">{item.type}</p>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{fill(item.detail)}</p>
            {item.note && (
              <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint uppercase">Note: {item.note}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
