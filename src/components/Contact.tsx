import { ArrowUpRight, BookOpen, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { links, site } from '../data/content'
import { isReady } from '../lib/links'
import { Reveal } from './Reveal'

export function Contact() {
  const email = isReady(links.email) ? links.email : null
  const secondary = [
    isReady(links.linkedin) && { key: 'linkedin', href: links.linkedin.href, label: 'LinkedIn', icon: Linkedin },
    isReady(links.github) && { key: 'github', href: links.github.href, label: 'GitHub', icon: Github },
    isReady(links.medium) && { key: 'medium', href: links.medium.href, label: 'Medium', icon: BookOpen },
    isReady(links.resume) && { key: 'resume', href: links.resume.href, label: 'Resume', icon: FileText },
  ].filter((item) => !!item)

  return (
    <section id="contact" className="scroll-mt-20 bg-bg px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-dark px-6 py-14 text-white md:px-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-50" aria-hidden />
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
              <span className="h-px w-8 bg-current" aria-hidden />
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
              Bringing robots to your floor? Let’s talk.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-dark-muted">
              Based in {site.location}. Email or LinkedIn is the fastest way to reach me.
            </p>
            {email && (
              <a
                href={email.href}
                className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-accent-deep md:text-base"
              >
                <Mail size={18} aria-hidden />
                <span className="truncate">{email.href.replace(/^mailto:/, '')}</span>
              </a>
            )}
          </div>
          <ul className="relative mt-10 flex flex-wrap gap-3">
            {secondary.map(({ key, href, label, icon: Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} aria-hidden />
                  {label}
                  <ArrowUpRight size={14} className="opacity-60" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
