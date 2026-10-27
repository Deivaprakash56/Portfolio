import { BookOpen, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { links } from '../data/content'
import { isReady } from '../lib/links'

export function QuickActions() {
  // Stay out of the way until the visitor has scrolled past the hero.
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const items = [
    isReady(links.linkedin)
      ? { key: 'linkedin', href: links.linkedin.href, label: 'LinkedIn', icon: Linkedin, external: true }
      : null,
    isReady(links.medium)
      ? { key: 'medium', href: links.medium.href, label: 'Medium', icon: BookOpen, external: true }
      : null,
    isReady(links.email)
      ? { key: 'email', href: links.email.href, label: 'Email', icon: Mail, external: false }
      : null,
  ].filter((item) => item !== null)

  if (items.length === 0) return null

  return (
    <div aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-300 md:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
      }`}>
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-line bg-bg-elevated/95 p-1.5 shadow-lg backdrop-blur-md">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-bg-alt hover:text-ink"
            >
              <Icon size={15} aria-hidden />
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sr-only sm:hidden">{item.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
