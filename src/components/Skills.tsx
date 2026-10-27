import { skillCategories, type SkillLevel } from '../data/content'
import { Section } from './Section'
import { skillIllustrations } from './SkillIllustrations'

const levelLabel: Record<SkillLevel, string> = {
  'hands-on': 'Hands-on',
  familiar: 'Familiar',
  conceptual: 'Conceptual',
}

const levelStyle: Record<SkillLevel, string> = {
  'hands-on': 'border-accent/40 bg-accent-soft text-ink',
  familiar: 'border-line bg-bg-elevated text-ink',
  conceptual: 'border-dashed border-line-strong bg-transparent text-ink-muted',
}

const levelDot: Record<SkillLevel, string> = {
  'hands-on': 'bg-accent',
  familiar: 'bg-ink-faint',
  conceptual: 'border border-ink-faint bg-transparent',
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I bring to a deployment."
      description="Hands-on means I use it on the job. Familiar means I have worked with it. Conceptual means I know how it fits."
      className="bg-bg-alt"
    >
      <div className="mb-10 flex flex-wrap gap-5 text-xs">
        {(Object.keys(levelLabel) as SkillLevel[]).map((level) => (
          <span key={level} className="inline-flex items-center gap-2 font-mono tracking-wide text-ink-muted uppercase">
            <span className={`h-2 w-2 rounded-full ${levelDot[level]}`} aria-hidden />
            {levelLabel[level]}
          </span>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {skillCategories.map((category, i) => {
          const Illustration = skillIllustrations[category.title]
          return (
            <div
              key={category.title}
              className={`group overflow-hidden rounded-3xl border border-line bg-bg-elevated transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_48px_-24px_color-mix(in_srgb,var(--accent)_45%,transparent)] ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative h-40 border-b border-line bg-bg md:h-44">
                <div className="pointer-events-none absolute inset-0 grid-tech opacity-60" aria-hidden />
                <div className="relative h-full p-4">{Illustration ? <Illustration /> : null}</div>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-xl font-bold tracking-tight">{category.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{category.description}</p>
                <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} title={levelLabel[skill.level]} className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${levelStyle[skill.level]}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${levelDot[skill.level]}`} aria-hidden />
                      {skill.name}
                      <span className="sr-only">({levelLabel[skill.level]})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
