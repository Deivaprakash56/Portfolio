import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { defaultNumbers, fillNumbers, type SiteNumbers } from '../data/numbers'
import type { Metric } from '../data/content'

const STORAGE_KEY = 'deivaprakash-numbers'

type NumbersContextValue = {
  numbers: SiteNumbers
  metrics: Metric[]
  save: (next: SiteNumbers) => void
  reset: () => void
  fill: (text: string) => string
}

const NumbersContext = createContext<NumbersContextValue | null>(null)

function sanitize(value: unknown, fallback: number): number {
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function loadNumbers(): SiteNumbers {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultNumbers
    const parsed = JSON.parse(raw) as Partial<SiteNumbers>
    return {
      amrsDeployed: sanitize(parsed.amrsDeployed, defaultNumbers.amrsDeployed),
      pocs: sanitize(parsed.pocs, defaultNumbers.pocs),
      deploymentReductionPercent: sanitize(
        parsed.deploymentReductionPercent,
        defaultNumbers.deploymentReductionPercent,
      ),
      deploymentDaysBefore: sanitize(parsed.deploymentDaysBefore, defaultNumbers.deploymentDaysBefore),
      deploymentDaysAfter: sanitize(parsed.deploymentDaysAfter, defaultNumbers.deploymentDaysAfter),
      internationalProjects: sanitize(parsed.internationalProjects, defaultNumbers.internationalProjects),
      studentsMentored: sanitize(parsed.studentsMentored, defaultNumbers.studentsMentored),
      cgpa: sanitize(parsed.cgpa, defaultNumbers.cgpa),
    }
  } catch {
    return defaultNumbers
  }
}

function buildMetrics(numbers: SiteNumbers): Metric[] {
  return [
    {
      id: 'amrs-deployed',
      value: numbers.amrsDeployed,
      suffix: '+',
      label: 'AMRs deployed',
      explanation: 'Autonomous mobile robots deployed at Indian customer sites.',
    },
    {
      id: 'pocs',
      value: numbers.pocs,
      suffix: '+',
      label: 'Customer-site PoCs',
      explanation: 'Proof-of-concept activities and technical demonstrations with industrial customers.',
    },
    {
      id: 'deployment-time',
      value: numbers.deploymentReductionPercent,
      suffix: '%',
      prefix: '~',
      label: 'Faster deployments',
      explanation: `Operational improvement from ~${numbers.deploymentDaysBefore} days to ~${numbers.deploymentDaysAfter} days. Team achievement — confirm measurement period and methodology before publication.`,
      note: 'Verify exact measurement period, sample size, and calculation methodology before publishing.',
    },
    {
      id: 'international',
      value: numbers.internationalProjects,
      label: 'International projects',
      explanation: 'Virtual technical support for projects involving Australia and the United States.',
    },
  ]
}

export function NumbersProvider({ children }: { children: ReactNode }) {
  const [numbers, setNumbers] = useState<SiteNumbers>(() => loadNumbers())

  const save = useCallback((next: SiteNumbers) => {
    const clean: SiteNumbers = {
      amrsDeployed: sanitize(next.amrsDeployed, defaultNumbers.amrsDeployed),
      pocs: sanitize(next.pocs, defaultNumbers.pocs),
      deploymentReductionPercent: sanitize(
        next.deploymentReductionPercent,
        defaultNumbers.deploymentReductionPercent,
      ),
      deploymentDaysBefore: sanitize(next.deploymentDaysBefore, defaultNumbers.deploymentDaysBefore),
      deploymentDaysAfter: sanitize(next.deploymentDaysAfter, defaultNumbers.deploymentDaysAfter),
      internationalProjects: sanitize(next.internationalProjects, defaultNumbers.internationalProjects),
      studentsMentored: sanitize(next.studentsMentored, defaultNumbers.studentsMentored),
      cgpa: sanitize(next.cgpa, defaultNumbers.cgpa),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clean))
    setNumbers(clean)
  }, [])

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setNumbers(defaultNumbers)
  }, [])

  const value = useMemo<NumbersContextValue>(
    () => ({
      numbers,
      metrics: buildMetrics(numbers),
      save,
      reset,
      fill: (text: string) => fillNumbers(text, numbers),
    }),
    [numbers, save, reset],
  )

  return <NumbersContext.Provider value={value}>{children}</NumbersContext.Provider>
}

export function useSiteNumbers() {
  const ctx = useContext(NumbersContext)
  if (!ctx) throw new Error('useSiteNumbers must be used within NumbersProvider')
  return ctx
}
