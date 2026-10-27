import { links, site } from '../data/content'
import { isReady } from '../lib/links'

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl font-bold">{site.fullName}</p>
          <p className="mt-1 max-w-md text-sm text-ink-muted">{site.positioning}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {isReady(links.linkedin) && (
            <a href={links.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-ink-muted transition-colors hover:text-accent">LinkedIn</a>
          )}
          {isReady(links.email) && (
            <a href={links.email.href} className="text-ink-muted transition-colors hover:text-accent">Email</a>
          )}
          {isReady(links.medium) && (
            <a href={links.medium.href} target="_blank" rel="noopener noreferrer" className="text-ink-muted transition-colors hover:text-accent">Medium</a>
          )}
          {isReady(links.github) && (
            <a href={links.github.href} target="_blank" rel="noopener noreferrer" className="text-ink-muted transition-colors hover:text-accent">GitHub</a>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 font-mono text-[11px] tracking-wide text-ink-faint uppercase md:flex-row md:justify-between md:px-8">
          <p>Robotics that has to work on a real floor.</p>
          <p>© {new Date().getFullYear()} {site.fullName}</p>
        </div>
      </div>
    </footer>
  )
}
