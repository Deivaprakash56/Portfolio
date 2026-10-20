import { about, site } from '../data/content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title={about.title} description={site.coreMessage} className="bg-bg-alt">
      <div className="max-w-3xl space-y-5">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-ink md:text-lg">{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 max-w-3xl font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint uppercase">
        Deployment figures stay tied to verified field work. Edit published numbers from the admin page.
      </p>
    </Section>
  )
}
