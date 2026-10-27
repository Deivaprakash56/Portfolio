import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { deploymentReductionPercent, fillNumbers, siteNumbers, type SiteNumbers } from '../data/numbers'
import type { Metric } from '../data/content'

type NumbersContextValue = {
  numbers: SiteNumbers
  metrics: Metric[]
  fill: (text: string) => string
}

const NumbersContext = createContext<NumbersContextValue | null>(null)

function buildMetrics(numbers: SiteNumbers): Metric[] {
  return [
    {
      id: 'years-experience',
      value: numbers.yearsExperience,
      label: 'Years of experience',
      explanation: 'In robotics, from ROS 2 internship to owning fleet deployments.',
    },
    {
      id: 'amrs-deployed',
      value: numbers.amrsDeployed,
      suffix: '+',
      label: 'Robots deployed',
      explanation: 'Commissioned at industrial sites in India.',
    },
    {
      id: 'pocs',
      value: numbers.pocs,
      suffix: '+',
      label: 'Customer-site PoCs',
      explanation: 'Proofs of concept and technical demos on real floors.',
    },
    {
      id: 'deployment-time',
      value: deploymentReductionPercent(numbers),
      suffix: '%',
      label: 'Faster deployments',
      explanation: `From about ${numbers.deploymentDaysBefore} days to about ${numbers.deploymentDaysAfter}. A repeatable process, so the next site is faster than the last.`,
    },
    {
      id: 'international',
      value: numbers.internationalProjects,
      label: 'International projects',
      explanation: 'Virtual support for work in Australia and the United States.',
    },
  ]
}

export function NumbersProvider({ children }: { children: ReactNode }) {
  const value = useMemo<NumbersContextValue>(
    () => ({
      numbers: siteNumbers,
      metrics: buildMetrics(siteNumbers),
      fill: (text: string) => fillNumbers(text, siteNumbers),
    }),
    [],
  )

  return <NumbersContext.Provider value={value}>{children}</NumbersContext.Provider>
}

export function useSiteNumbers() {
  const ctx = useContext(NumbersContext)
  if (!ctx) throw new Error('useSiteNumbers must be used within NumbersProvider')
  return ctx
}
