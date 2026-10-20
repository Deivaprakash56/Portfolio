import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'
import { FeasibilityDiagram } from './FeasibilityDiagram'
import { Section } from './Section'

function CaseStudyCard({
  study,
  expanded,
  onToggle,
}: {
  study: (typeof caseStudies)[number]
  expanded: boolean
  onToggle: () => void
}) {
  const { fill } = useSiteNumbers()

  return (
    <article className="border border-line bg-bg-elevated transition-colors hover:border-line-strong">
      <button type="button" onClick={onToggle} aria-expanded={expanded} className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">{study.eyebrow}</p>
          <h3 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">{study.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">{fill(study.summary)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-faint uppercase">{tag}</span>
            ))}
          </div>
        </div>
        <ChevronDown className={`mt-1 shrink-0 text-ink-muted transition-transform ${expanded ? 'rotate-180' : ''}`} size={20} aria-hidden />
      </button>
      {expanded && (
        <div className="border-t border-line px-5 py-6 md:px-6">
          <dl className="grid gap-6 md:grid-cols-2">
            {([
              ['Context', study.context],
              ['Constraint', study.constraint],
              ['Investigation', study.investigation],
              ['Execution', study.execution],
              ['Outcome', study.outcome],
              ['Learning', study.learning],
            ] as const).map(([label, body]) => (
              <div key={label}>
                <dt className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">{label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink md:text-[0.95rem]">{fill(body)}</dd>
              </div>
            ))}
          </dl>
          {study.id === 'feasibility' && <div className="mt-8"><FeasibilityDiagram /></div>}
          <div className="mt-8 rounded-sm border border-dashed border-line-strong bg-bg-alt/60 p-4">
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-deep uppercase">Editable before publish</p>
            <p className="mt-2 text-sm text-ink-muted">{study.attributionNote}</p>
            <ul className="mt-4 space-y-2">
              {study.editableFields.map((field) => (
                <li key={field.key} className="flex flex-col gap-0.5 border-t border-line pt-2 text-sm sm:flex-row sm:justify-between">
                  <span className="font-medium text-ink">{field.label}</span>
                  <span className="font-mono text-xs text-ink-faint sm:text-right">
                    {field.value ?? '— pending confirmation —'}
                    {field.note ? ` · ${field.note}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Link to={`/case-studies/${study.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep transition-colors hover:text-accent">
              Open full case study page
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </article>
  )
}

export function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id ?? null)
  return (
    <Section
      id="case-studies"
      eyebrow="Featured case studies"
      title="How robotics work gets done under real constraints."
      description="Each study follows context → constraint → investigation → execution → outcome → learning. Editable fields mark anything that still needs confirmation before public claims harden."
    >
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} expanded={openId === study.id} onToggle={() => setOpenId((id) => (id === study.id ? null : study.id))} />
        ))}
      </div>
    </Section>
  )
}
