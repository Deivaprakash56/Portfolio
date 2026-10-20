import { skillCategories, type SkillLevel } from '../data/content'
import { Section } from './Section'

const levelLabel: Record<SkillLevel, string> = {
  'hands-on': 'Hands-on',
  familiar: 'Familiar',
  conceptual: 'Conceptual',
}

const levelStyle: Record<SkillLevel, string> = {
  'hands-on': 'border-accent/40 bg-accent-soft text-accent-deep',
  familiar: 'border-line bg-bg text-ink-muted',
  conceptual: 'border-dashed border-line-strong bg-transparent text-ink-faint',
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical capabilities"
      title="Skills by category—not arbitrary percentages."
      description="Levels distinguish hands-on expertise from familiarity or conceptual knowledge. Only technologies that reflect real experience are listed."
    >
      <div className="mb-8 flex flex-wrap gap-3 text-xs">
        {(Object.keys(levelLabel) as SkillLevel[]).map((level) => (
          <span key={level} className={`rounded-sm border px-2.5 py-1 font-mono tracking-wide uppercase ${levelStyle[level]}`}>
            {levelLabel[level]}
          </span>
        ))}
      </div>
      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="border-t border-line pt-8">
            <div className="mb-5 max-w-2xl">
              <h3 className="font-display text-xl font-bold tracking-tight">{category.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{category.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm ${levelStyle[skill.level]}`}>
                  <span className="font-medium text-ink">{skill.name}</span>
                  <span className="font-mono text-[10px] tracking-wide uppercase opacity-80">{levelLabel[skill.level]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
