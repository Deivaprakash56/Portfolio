import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '../data/content'
import { FeasibilityDiagram } from '../components/FeasibilityDiagram'
import { useSiteNumbers } from '../lib/numbers'

export function CaseStudyPage() {
  const { slug } = useParams()
  const { fill } = useSiteNumbers()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center md:px-8">
        <p className="font-mono text-xs tracking-[0.16em] text-accent-deep uppercase">Not found</p>
        <h1 className="mt-3 font-display text-3xl font-bold">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-block text-accent-deep hover:text-accent">Back to case studies</Link>
      </div>
    )
  }

  const sections = [
    ['Context', study.context],
    ['Constraint', study.constraint],
    ['Investigation', study.investigation],
    ['Execution', study.execution],
    ['Outcome', study.outcome],
    ['Learning', study.learning],
  ] as const

  return (
    <article className="pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link to="/#case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent">
          <ArrowLeft size={16} aria-hidden />
          All case studies
        </Link>
        <p className="mt-8 font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">{study.eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">{study.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{fill(study.summary)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-faint uppercase">{tag}</span>
          ))}
        </div>
        <div className="mt-12 space-y-10">
          {sections.map(([label, body]) => (
            <section key={label}>
              <h2 className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">{label}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink md:text-lg">{fill(body)}</p>
            </section>
          ))}
        </div>
        {study.id === 'feasibility' && <div className="mt-12"><FeasibilityDiagram /></div>}
        <aside className="mt-12 rounded-sm border border-dashed border-line-strong bg-bg-alt p-5">
          <h2 className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Attribution & editable fields</h2>
          <p className="mt-3 text-sm text-ink-muted">{study.attributionNote}</p>
          <ul className="mt-4 space-y-3">
            {study.editableFields.map((field) => (
              <li key={field.key} className="border-t border-line pt-3 text-sm">
                <p className="font-medium">{field.label}</p>
                <p className="mt-1 font-mono text-xs text-ink-faint">
                  {field.value ?? '— pending confirmation —'}
                  {field.note ? ` · ${field.note}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  )
}
