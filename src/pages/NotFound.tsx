import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-32">
      <div className="pointer-events-none absolute inset-0 grid-tech opacity-60" />
      <div className="relative max-w-lg text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-accent-deep uppercase">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Path not on the map.</h1>
        <p className="mt-4 text-ink-muted">This route doesn&apos;t exist. Head back to the portfolio.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent">Home</Link>
        </div>
      </div>
    </div>
  )
}
