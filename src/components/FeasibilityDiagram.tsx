import { feasibilityPipeline } from '../data/content'

export function FeasibilityDiagram() {
  return (
    <div className="overflow-x-auto rounded-sm border border-line bg-bg-elevated p-5 md:p-6">
      <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Feasibility workflow</p>
      <ol className="mt-5 flex min-w-[640px] items-stretch gap-0 md:min-w-0 md:flex-wrap">
        {feasibilityPipeline.map((step, index) => (
          <li key={step} className="flex flex-1 items-center">
            <div className="flex w-full flex-col items-start gap-2 border border-line bg-bg px-3 py-3 md:min-w-[7.5rem]">
              <span className="font-mono text-[10px] text-ink-faint">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-display text-sm leading-snug font-semibold">{step}</span>
            </div>
            {index < feasibilityPipeline.length - 1 && (
              <span className="mx-1 hidden shrink-0 text-accent md:inline" aria-hidden>→</span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-ink-muted">
        Each stage is a decision gate. Not every project proceeds; the goal is honest feasibility before commitment.
      </p>
    </div>
  )
}
