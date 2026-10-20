import { ArrowDown, Linkedin } from 'lucide-react'
import { hero, links, site } from '../data/content'
import { isReady } from '../lib/links'
import { HeroGraphic } from './HeroGraphic'

export function Hero() {
  const linkedin = links.linkedin

  return (
    <section className="relative overflow-hidden bg-hero text-hero pt-16 md:pt-[4.25rem]">
      <div className="pointer-events-none absolute inset-0 grid-tech-dark opacity-70" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div>
          <p className="animate-fade-up font-mono text-[11px] font-medium tracking-[0.2em] text-accent uppercase md:text-xs">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="animate-fade-up-delay-1 mt-3 font-display text-xl font-semibold text-hero-muted sm:text-2xl">
            {hero.subheadline}
          </p>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-hero-muted md:text-lg">
            {hero.supporting}
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-deep"
            >
              {hero.primaryCta.label}
              <ArrowDown size={16} aria-hidden />
            </a>
            {isReady(linkedin) ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-hero-muted transition-colors hover:text-hero"
              >
                <Linkedin size={16} aria-hidden />
                {hero.tertiaryCta.label}
              </a>
            ) : null}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-hero-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.statusLine}
          </p>
        </div>

        <div className="animate-fade-up-delay-2 flex flex-col gap-4">
          <HeroGraphic />
          <div className="flex gap-4">
            <div className="flex-1 rounded-sm border border-dashed border-hero-line bg-hero-elevated/60 p-4">
              {hero.portrait.src ? (
                <img src={hero.portrait.src} alt={hero.portrait.alt} className="aspect-[4/5] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 text-center">
                  <div className="h-16 w-16 rounded-full border border-hero-line bg-white/5" />
                  <p className="font-mono text-[10px] tracking-wider text-hero-muted uppercase">{hero.portrait.placeholderLabel}</p>
                </div>
              )}
            </div>
            <div className="hidden flex-1 flex-col justify-end sm:flex">
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">Focus</p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">{site.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-hero-muted">{site.positioning}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
