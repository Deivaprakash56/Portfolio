import { employers, journey } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'
import { Section } from './Section'

export function Journey() {
  const { fill } = useSiteNumbers()
  return (
    <Section
      id="journey"
      eyebrow="Experience"
      title="Where I’ve worked."
      description="Intern, founding employee, deployment lead, and now owner of fleet-scale deployments."
    >
      <div className="space-y-6">
        {employers.map((employer) => {
          const roles = employer.roleIds.map((id) => journey.find((r) => r.id === id)).filter((r) => r !== undefined)
          return (
            <article key={employer.id} className="overflow-hidden rounded-3xl border border-line bg-bg-elevated">
              <header className="flex flex-wrap items-center gap-4 border-b border-line bg-bg-alt px-6 py-5 md:px-8">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white">
                  {employer.logo ? (
                    <img src={employer.logo} alt={`${employer.name} logo`} width={56} height={56} className="h-11 w-11 object-contain" />
                  ) : (
                    <span className="font-display text-2xl font-bold text-[#0b1220]" aria-hidden>{employer.name[0]}</span>
                  )}
                </span>
                <div className="min-w-0 flex-1 basis-[calc(100%-4.5rem)] sm:basis-0">
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{employer.name}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {employer.note} · {employer.location}
                  </p>
                </div>
                <span className="rounded-full border border-line bg-bg-elevated px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted uppercase">
                  {employer.period}
                </span>
              </header>

              <ol className="relative px-6 py-6 md:px-8 md:py-8">
                {roles.map((role, i) => (
                  <li key={role.id} className="relative pb-8 pl-8 last:pb-0">
                    {i < roles.length - 1 && <span className="absolute top-3 bottom-0 left-[7px] w-px bg-line-strong" aria-hidden />}
                    <span
                      className={`absolute top-1.5 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent ${i === 0 ? 'bg-accent' : 'bg-bg-elevated'}`}
                      aria-hidden
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-lg font-bold tracking-tight md:text-xl">{role.title}</h4>
                      {role.period && <span className="font-mono text-[11px] tracking-wide text-accent uppercase">{role.period}</span>}
                    </div>
                    <p className="mt-2 max-w-3xl leading-relaxed text-ink-muted">{fill(role.summary)}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {role.highlights.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-bg-alt px-3 py-1 text-xs text-ink">
                          {fill(item)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
