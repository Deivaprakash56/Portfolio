import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  dark?: boolean
  className?: string
}

export function Section({ id, eyebrow, title, description, children, dark = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 ${dark ? 'bg-dark text-[var(--ink-on-inverse)]' : 'bg-bg text-ink'} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <header className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && (
              <p className={`mb-4 inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] uppercase ${dark ? 'text-accent' : 'text-accent-deep'}`}>
                <span className="h-px w-8 bg-current" aria-hidden />
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">{title}</h2>
            {description && (
              <p className={`mt-4 text-lg leading-relaxed md:text-xl ${dark ? 'text-[var(--ink-on-inverse-muted)]' : 'text-ink-muted'}`}>
                {description}
              </p>
            )}
          </header>
        </Reveal>
        <Reveal delay={100}>{children}</Reveal>
      </div>
    </section>
  )
}
