import type { ReactNode } from 'react'
import { BookOpen, Linkedin, Mail, Github } from 'lucide-react'
import { contentAudit, links } from '../data/content'
import { isReady } from '../lib/links'
import { Section } from './Section'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about robotics that has to work."
      description="Prefer email or LinkedIn. No fake contact form that silently drops messages."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-3">
          {isReady(links.email) ? (
            <a href={links.email.href} className="inline-flex items-center gap-3 border border-line bg-bg-elevated px-5 py-4 text-ink transition-colors hover:border-accent">
              <Mail size={18} className="text-accent" aria-hidden />
              <span className="font-medium">Email</span>
              <span className="ml-auto text-sm text-ink-muted">{links.email.href.replace(/^mailto:/, '')}</span>
            </a>
          ) : (
            <PendingRow icon={<Mail size={18} />} label="Email" note={links.email.note} />
          )}
          {isReady(links.linkedin) ? (
            <a href={links.linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-line bg-bg-elevated px-5 py-4 text-ink transition-colors hover:border-accent">
              <Linkedin size={18} className="text-accent" aria-hidden />
              <span className="font-medium">LinkedIn</span>
              <span className="ml-auto text-sm text-ink-muted">Profile</span>
            </a>
          ) : (
            <PendingRow icon={<Linkedin size={18} />} label="LinkedIn" note={links.linkedin.note} />
          )}
          {isReady(links.medium) ? (
            <a href={links.medium.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-line bg-bg-elevated px-5 py-4 text-ink transition-colors hover:border-accent">
              <BookOpen size={18} className="text-accent" aria-hidden />
              <span className="font-medium">Medium</span>
              <span className="ml-auto text-sm text-ink-muted">@deivaprakash2003</span>
            </a>
          ) : (
            <PendingRow icon={<BookOpen size={18} />} label="Medium" note={links.medium.status === 'pending' ? links.medium.note : ''} />
          )}
          {isReady(links.github) ? (
            <a href={links.github.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-line bg-bg-elevated px-5 py-4 text-ink transition-colors hover:border-accent">
              <Github size={18} className="text-accent" aria-hidden />
              <span className="font-medium">GitHub</span>
            </a>
          ) : (
            <PendingRow icon={<Github size={18} />} label="GitHub (optional)" note={links.github.note} />
          )}
        </div>
        <aside className="border border-dashed border-line-strong bg-bg-alt p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Content audit — missing before publish</p>
          <p className="mt-3 text-sm text-ink-muted">
            This site ships with honest placeholders. Fill these in <code className="font-mono text-xs text-ink">src/data/content.ts</code> and <code className="font-mono text-xs text-ink">/public</code>:
          </p>
          <ul className="mt-4 space-y-2">
            {contentAudit.missingBeforePublish.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink">
                <span className="text-accent" aria-hidden>–</span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}

function PendingRow({ icon, label, note }: { icon: ReactNode; label: string; note: string }) {
  return (
    <div className="inline-flex items-start gap-3 border border-dashed border-line bg-bg px-5 py-4" title={note}>
      <span className="mt-0.5 text-ink-faint">{icon}</span>
      <div>
        <p className="font-medium text-ink">{label}</p>
        <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink-faint">{note}</p>
      </div>
    </div>
  )
}
