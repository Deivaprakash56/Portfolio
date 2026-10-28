import { caseStudies, caseStudyPhotos } from '../data/content'
import { useSiteNumbers } from '../lib/numbers'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function CaseStudies() {
  const { fill } = useSiteNumbers()
  return (
    <Section
      id="case-studies"
      eyebrow="Field impact"
      title="Results I’ve delivered on the floor."
      description="Four outcomes, each with what I did and what changed."
    >
      <div className="space-y-16 md:space-y-24">
        {caseStudies.map((study, i) => {
          const shot = caseStudyPhotos[study.slug]
          const flip = i % 2 === 1
          return (
            <Reveal key={study.id}>
              <div className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-bg-alt transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-[0_24px_48px_-24px_color-mix(in_srgb,var(--accent)_45%,transparent)] ${flip ? 'md:order-2' : ''}`}
                >
                  {shot && (
                    <>
                      <img
                        src={shot.src}
                        alt={shot.alt}
                    style={{ objectPosition: shot.position }}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pt-12 pb-4 text-sm font-medium text-white">
                        {shot.caption}
                      </p>
                    </>
                  )}
                </div>
                <div className={flip ? 'md:order-1' : ''}>
                  <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
                    {String(i + 1).padStart(2, '0')} <span className="text-ink-faint">/ {study.eyebrow}</span>
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{fill(study.summary)}</p>
                  <p className="mt-5 border-l-2 border-accent pl-4 font-medium leading-relaxed text-ink">{fill(study.result)}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
