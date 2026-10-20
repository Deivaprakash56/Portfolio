import { journey } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'
import { Section } from './Section'

export function Journey() {
  const { fill } = useSiteNumbers()
  return (
    <Section
      id="journey"
      eyebrow="My journey"
      title="From learning the stack to owning deployment outcomes."
      description="A progression from early engineering into customer-facing robotics work and broader technical responsibility."
      className="bg-bg-alt"
    >
      <ol className="relative ml-3 space-y-0 border-l border-line-strong md:ml-4">
        {journey.map((stage, index) => (
          <li key={stage.id} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg-alt" aria-hidden />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">{stage.stage}</span>
              <span className="font-mono text-[11px] tracking-wide text-ink-faint uppercase">{stage.period}</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{stage.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{fill(stage.summary)}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {stage.highlights.map((item) => (
                <li key={item} className="border-t border-line pt-3 text-sm leading-snug text-ink">
                  {fill(item)}
                </li>
              ))}
            </ul>
            {index === journey.length - 1 && (
              <p className="mt-6 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint uppercase">
                Timeline dates from published experience
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
