export interface SiteNumbers {
  amrsDeployed: number
  pocs: number
  deploymentReductionPercent: number
  deploymentDaysBefore: number
  deploymentDaysAfter: number
  internationalProjects: number
  studentsMentored: number
  cgpa: number
}

export const defaultNumbers: SiteNumbers = {
  amrsDeployed: 15,
  pocs: 35,
  deploymentReductionPercent: 60,
  deploymentDaysBefore: 20,
  deploymentDaysAfter: 7,
  internationalProjects: 2,
  studentsMentored: 400,
  cgpa: 8.84,
}

export const numberFields: {
  key: keyof SiteNumbers
  label: string
  step: string
  hint: string
}[] = [
  { key: 'amrsDeployed', label: 'AMRs deployed', step: '1', hint: 'Shown with a plus sign' },
  { key: 'pocs', label: 'Customer-site PoCs and demos', step: '1', hint: 'Shown with a plus sign' },
  { key: 'deploymentReductionPercent', label: 'Deployment time reduction (%)', step: '1', hint: 'Shown with an approximate sign' },
  { key: 'deploymentDaysBefore', label: 'Deployment days before', step: '1', hint: 'Starting cycle length' },
  { key: 'deploymentDaysAfter', label: 'Deployment days after', step: '1', hint: 'Improved cycle length' },
  { key: 'internationalProjects', label: 'International projects', step: '1', hint: 'Virtual support count' },
  { key: 'studentsMentored', label: 'Students mentored', step: '1', hint: 'Shown with a plus sign' },
  { key: 'cgpa', label: 'CGPA', step: '0.01', hint: 'Degree card' },
]

export function fillNumbers(text: string, numbers: SiteNumbers): string {
  const cgpa = Number.isInteger(numbers.cgpa)
    ? String(numbers.cgpa)
    : numbers.cgpa.toFixed(2).replace(/0$/, '').replace(/\.0$/, '')

  const map: Record<string, string> = {
    amrs: String(numbers.amrsDeployed),
    pocs: String(numbers.pocs),
    reduction: String(numbers.deploymentReductionPercent),
    daysBefore: String(numbers.deploymentDaysBefore),
    daysAfter: String(numbers.deploymentDaysAfter),
    international: String(numbers.internationalProjects),
    students: String(numbers.studentsMentored),
    cgpa,
  }

  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => map[key] ?? match)
}
