import { institutions, sites } from '../data/content'
import { Reveal } from './Reveal'

type Site = (typeof sites)[number]

const rowSizes = [7, 7, 7, 7]
const rows = rowSizes.map((size, i) => {
  const start = rowSizes.slice(0, i).reduce((a, b) => a + b, 0)
  return sites.slice(start, start + size)
})

function LogoTile({ site, className = '' }: { site: Site; className?: string }) {
  return (
    <li
      title={site.name}
      className={`group flex h-24 items-center justify-center rounded-2xl border border-line bg-white px-3 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_32px_-16px_color-mix(in_srgb,var(--accent)_45%,transparent)] md:h-28 ${className}`}
    >
      <img
        src={site.logo}
        alt={site.name}
        loading="lazy"
        decoding="async"
        className="max-h-12 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105 md:max-h-14"
      />
    </li>
  )
}

export function Sites() {
  return (
    <section aria-label="Customer sites" className="border-b border-line bg-bg">
      <Reveal className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] text-accent-deep uppercase">
              <span className="h-px w-8 bg-current" aria-hidden />
              On the floor at
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">Companies I’ve worked with.</h2>
          </div>
          <p className="font-mono text-xs tracking-wide text-ink-faint uppercase">{sites.length} companies · {institutions.length} institutions · India, US and Australia</p>
        </div>

        {/* Phones and tablets: a simple grid. Desktop: rows of 7, centred. */}
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:hidden">
          {sites.map((site) => (
            <LogoTile key={site.name} site={site} />
          ))}
        </ul>
        <div className="mt-10 hidden space-y-4 lg:block">
          {rows.map((row, r) => (
            <ul key={r} className="flex justify-center gap-4">
              {row.map((site) => (
                <LogoTile key={site.name} site={site} className="w-[141px]" />
              ))}
            </ul>
          ))}
        </div>

        <p className="mt-12 text-center font-mono text-xs font-medium tracking-[0.18em] text-ink-faint uppercase">Academic &amp; research</p>
        <ul className="mt-5 grid gap-3 sm:flex sm:justify-center md:gap-4">
          {institutions.map((site) => (
            <li
              key={site.name}
              className="flex h-24 items-center gap-4 rounded-2xl border border-line bg-white px-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:w-[260px] md:h-28"
            >
              <img src={site.logo} alt="" aria-hidden loading="lazy" decoding="async" className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16" />
              <span className="font-display text-sm leading-snug font-semibold text-[#0b1220]">{site.name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
