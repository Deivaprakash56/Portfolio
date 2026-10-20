import { customerSuccessSteps } from '../data/content'
import { Section } from './Section'

export function CustomerSuccess() {
  return (
    <Section
      id="customer-success"
      eyebrow="Customer success in robotics"
      title="More than tickets. Technical judgment in the customer’s workflow."
      description="Customer success in robotics means understanding whether the robot is suitable, coordinating hardware and software teams, managing expectations, identifying deployment risks, and ensuring the system can be used effectively in the operating environment."
      className="bg-bg-alt"
    >
      <div className="mb-10 max-w-3xl border-l-2 border-accent pl-5">
        <p className="text-lg leading-relaxed text-ink md:text-xl">
          Product capability only becomes customer value when someone can translate an operational problem into engineering constraints—and stay with the work through validation and handover.
        </p>
      </div>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customerSuccessSteps.map((item) => (
          <li key={item.step} className="group border border-line bg-bg p-5 transition-colors hover:border-accent md:p-6">
            <span className="font-mono text-xs tracking-[0.16em] text-accent-deep">{String(item.step).padStart(2, '0')}</span>
            <h3 className="mt-3 font-display text-lg font-bold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint uppercase">
        No commercial renewal, ARR, NPS, or retention claims are published without evidence.
      </p>
    </Section>
  )
}
