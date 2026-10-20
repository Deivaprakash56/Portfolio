import { ArrowUpRight } from 'lucide-react'
import { links, writing } from '../data/content'
import { isReady } from '../lib/links'
import { Section } from './Section'

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes from the field."
      description="Published on Medium—reflections on deployment, learning, and the path into AMR engineering."
      className="bg-bg-alt"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((post) => (
          <a key={post.id} href={post.href} target="_blank" rel="noopener noreferrer" className="group border border-line bg-bg p-5 transition-colors hover:border-accent md:p-6">
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Medium · {post.date}</p>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight group-hover:text-accent-deep">{post.title}</h3>
            <p className="mt-1 text-sm font-medium text-ink-muted">{post.subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{post.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink">
              Read on Medium
              <ArrowUpRight size={16} aria-hidden />
            </span>
          </a>
        ))}
      </div>
      {isReady(links.medium) && (
        <div className="mt-8">
          <a href={links.medium.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-deep transition-colors hover:text-accent">
            View all on Medium
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      )}
    </Section>
  )
}
