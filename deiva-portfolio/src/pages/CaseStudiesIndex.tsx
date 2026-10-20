import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'

export function CaseStudiesIndex() {
  const { fill } = useSiteNumbers()
  return (
    <div className="pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Case studies</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Field work, documented carefully.</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">
          Expandable summaries live on the home page. Dedicated pages keep the full structure available for sharing.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.slug}`} className="group border border-line bg-bg-elevated p-6 transition-colors hover:border-accent">
              <p className="font-mono text-[11px] tracking-[0.14em] text-accent-deep uppercase">{study.eyebrow}</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight group-hover:text-accent-deep">{study.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{fill(study.summary)}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                Read case study
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
