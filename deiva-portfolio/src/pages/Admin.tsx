import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { defaultNumbers, numberFields, type SiteNumbers } from '../data/numbers'
import { useSiteNumbers } from '../lib/numbers'

const SESSION_KEY = 'deivaprakash-admin'
const ADMIN_PASSWORD = '12345678'

function isUnlocked() {
  return sessionStorage.getItem(SESSION_KEY) === '1'
}

export function Admin() {
  const { numbers, save, reset } = useSiteNumbers()
  const [unlocked, setUnlocked] = useState(isUnlocked)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [draft, setDraft] = useState<SiteNumbers>(numbers)
  const [saved, setSaved] = useState(false)

  const onUnlock = (event: FormEvent) => {
    event.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setUnlocked(true)
      setError('')
      setPassword('')
      return
    }
    setError('Incorrect password.')
  }

  const onSave = (event: FormEvent) => {
    event.preventDefault()
    save(draft)
    setSaved(true)
  }

  const signOut = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setUnlocked(false)
    setSaved(false)
  }

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-28">
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Admin</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight">Site numbers</h1>
        <p className="mt-3 text-sm text-ink-muted">Enter the password to edit published figures.</p>
        <form onSubmit={onUnlock} className="mt-8 flex flex-col gap-3">
          <label className="text-sm font-medium" htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-sm border border-line bg-bg-elevated px-3 py-3 text-ink outline-none focus:border-accent"
          />
          {error && <p className="text-sm text-accent-deep" role="alert">{error}</p>}
          <button type="submit" className="mt-2 rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent">Unlock</button>
        </form>
        <Link to="/" className="mt-6 text-sm text-ink-muted hover:text-accent">Back to site</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-28 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-accent-deep uppercase">Admin</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight">Edit site numbers</h1>
          <p className="mt-3 max-w-xl text-sm text-ink-muted">
            These figures drive the impact metrics, case studies, journey highlights, mentoring count, and CGPA. Saved values stay in this browser.
          </p>
        </div>
        <button type="button" onClick={signOut} className="rounded-sm border border-line px-3 py-2 text-sm text-ink-muted hover:border-accent hover:text-ink">Lock</button>
      </div>
      <form onSubmit={onSave} className="mt-10 grid gap-5 sm:grid-cols-2">
        {numberFields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2 border border-line bg-bg-elevated p-4">
            <span className="text-sm font-medium">{field.label}</span>
            <input
              type="number"
              step={field.step}
              value={draft[field.key]}
              onChange={(event) => {
                setSaved(false)
                setDraft((current) => ({
                  ...current,
                  [field.key]: event.target.value === '' ? 0 : Number(event.target.value),
                }))
              }}
              className="rounded-sm border border-line bg-bg px-3 py-2 font-mono text-ink outline-none focus:border-accent"
            />
            <span className="font-mono text-[11px] tracking-wide text-ink-faint uppercase">{field.hint}</span>
          </label>
        ))}
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button type="submit" className="rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-on-accent hover:bg-accent-deep">Save numbers</button>
          <button
            type="button"
            onClick={() => {
              setDraft(defaultNumbers)
              reset()
              setSaved(true)
            }}
            className="rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink hover:border-accent"
          >
            Reset defaults
          </button>
          {saved && <p className="text-sm text-ink-muted">Saved.</p>}
          <Link to="/" className="ml-auto text-sm text-ink-muted hover:text-accent">View site</Link>
        </div>
      </form>
    </div>
  )
}
