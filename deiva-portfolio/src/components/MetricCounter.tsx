import { useEffect, useRef, useState } from 'react'
import type { Metric } from '../data/content'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MetricCounter({ metric }: { metric: Metric }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (prefersReducedMotion()) {
      setDisplay(metric.value)
      return
    }
    const duration = 1100
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(metric.value * eased))
      if (t < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [started, metric.value])

  return (
    <div ref={ref} className="group border-t border-line pt-6 transition-colors hover:border-accent">
      <p className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
        {metric.prefix}
        {display}
        {metric.suffix}
      </p>
      <p className="mt-3 font-display text-lg font-semibold">{metric.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{metric.explanation}</p>
      {metric.note && (
        <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint uppercase">Note: {metric.note}</p>
      )}
    </div>
  )
}
