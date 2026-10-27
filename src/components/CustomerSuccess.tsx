import { customerSuccessSteps } from '../data/content'
import { Section } from './Section'
import { stepIllustrations } from './StepIllustrations'

export function CustomerSuccess() {
  return (
    <Section
      id="customer-success"
      eyebrow="How I work"
      title="From first visit to a robot they run."
      description="Six steps I take with every customer."
      className="bg-bg-alt"
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {customerSuccessSteps.map((item) => {
          const Illustration = stepIllustrations[item.step]
          return (
            <li
              key={item.step}
              className="group overflow-hidden rounded-3xl border border-line bg-bg-elevated transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_48px_-24px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
            >
              <div className="relative aspect-[16/10] border-b border-line bg-bg">
                <div className="pointer-events-none absolute inset-0 grid-tech opacity-60" aria-hidden />
                <div className="relative h-full p-3">{Illustration ? <Illustration /> : null}</div>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">Step {String(item.step).padStart(2, '0')}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
