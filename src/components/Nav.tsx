import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/content'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overHero = onHome && !scrolled && !open
  const sectionHref = (href: string) => (onHome ? href : `${import.meta.env.BASE_URL}${href}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-bg/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[4.25rem] md:px-8">
        <Link
          to="/"
          className={`font-display text-lg font-bold tracking-tight transition-colors hover:text-accent ${overHero ? 'text-hero' : 'text-ink'}`}
        >
          {site.fullName}
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              className={`text-sm font-medium transition-colors ${overHero ? 'text-hero-muted hover:text-hero' : 'text-ink-muted hover:text-ink'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className={overHero ? 'border-hero-line text-hero hover:border-accent hover:text-accent' : undefined} />
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-sm border p-2 xl:hidden ${overHero ? 'border-hero-line text-hero' : 'border-line text-ink'}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                className="rounded-sm px-3 py-3 text-base font-medium text-ink hover:bg-bg-alt"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
