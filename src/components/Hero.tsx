import { ArrowDown, Download, Linkedin, MapPin } from 'lucide-react'
import { hero, links, site } from '../data/content'
import { isReady } from '../lib/links'
import { useSiteNumbers } from '../lib/numbers'

export function Hero() {
  const { metrics } = useSiteNumbers()
  const linkedin = links.linkedin

  return (
    <section className="relative overflow-hidden bg-hero text-hero pt-16 md:pt-[4.25rem]">
      <div className="pointer-events-none absolute inset-0 grid-tech opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="min-w-0">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-hero-line bg-hero-elevated px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.16em] text-accent uppercase md:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-6 font-display text-[min(2.75rem,calc((100vw_-_2.5rem)/7.6))] leading-[1.02] font-bold tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.25rem]">
            {hero.headline}
          </h1>
          <p className="animate-fade-up-delay-1 mt-4 font-display text-xl font-semibold text-balance sm:text-2xl">
            <span className="bg-gradient-to-r from-accent to-[#06b6d4] bg-clip-text text-transparent">{hero.subheadline}</span>
          </p>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-hero-muted md:text-lg">
            {hero.supporting.lead} <strong className="font-semibold text-hero">{hero.supporting.can}</strong> and{' '}
            <strong className="font-semibold text-hero">{hero.supporting.needs}</strong>.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              {hero.primaryCta.label}
              <ArrowDown size={16} aria-hidden />
            </a>
            {isReady(linkedin) ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hero-line px-5 py-3 text-sm font-medium text-hero transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} aria-hidden />
                {hero.tertiaryCta.label}
              </a>
            ) : null}
            {isReady(links.resume) ? (
              <a
                href={links.resume.href}
                download="Deivaprakash-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-hero-line px-5 py-3 text-sm font-medium text-hero transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={16} aria-hidden />
                Download resume
              </a>
            ) : null}
          </div>

        </div>

        <div className="animate-fade-up-delay-2 relative mx-auto w-full max-w-sm min-w-0 lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-transparent opacity-70 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-hero-line bg-hero-elevated">
            <img
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={512}
              height={512}
              className="aspect-[4/5] w-full object-cover object-[50%_30%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold text-white">{site.role}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/70">
                <MapPin size={14} aria-hidden />
                {site.location}
              </p>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 hidden rounded-2xl border border-hero-line bg-hero-elevated px-4 py-3 shadow-xl sm:block">
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-emerald-500 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live now
            </p>
            <p className="mt-1 text-sm font-semibold">{site.statusLine}</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-hero-line bg-hero-elevated">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:px-8 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <div
              key={m.id}
              className={`py-6 md:py-8 lg:border-t-0 ${
                i === 0 ? 'col-span-2 lg:col-span-1' : `border-t border-hero-line ${i % 2 === 0 ? 'border-l pl-5 md:pl-8' : 'pr-5 md:pr-8'}`
              } ${i > 0 ? 'lg:border-l lg:pl-8' : ''}`}
            >
              <dd className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                {m.value}
                <span className="text-accent">{m.suffix}</span>
              </dd>
              <dt className="mt-1 text-sm text-hero-muted">{m.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
