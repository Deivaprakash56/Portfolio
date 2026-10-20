import { leadership } from '../data/content'
import { Section } from './Section'

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title={leadership.title} description={leadership.intro}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {leadership.focuses.map((item) => (
          <li key={item} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed md:text-base">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 max-w-3xl border border-line bg-bg-alt p-5 md:p-6">
        <p className="text-base leading-relaxed text-ink md:text-lg">{leadership.challenge}</p>
        <p className="mt-4 font-mono text-[11px] tracking-wide text-ink-faint uppercase">{leadership.hiringNote}</p>
      </div>
    </Section>
  )
}
