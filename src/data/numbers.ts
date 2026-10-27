/**
 * Published numbers. Edit these values and redeploy to change them on the site.
 */
export interface SiteNumbers {
  yearsExperience: number
  amrsDeployed: number
  pocs: number
  deploymentDaysBefore: number
  deploymentDaysAfter: number
  internationalProjects: number
  studentsMentored: number
  cgpa: number
}

export const siteNumbers: SiteNumbers = {
  yearsExperience: 3,
  amrsDeployed: 15,
  pocs: 35,
  deploymentDaysBefore: 20,
  deploymentDaysAfter: 7,
  internationalProjects: 2,
  studentsMentored: 400,
  cgpa: 8.84,
}

/** Percentage cut in deployment time, derived from the before/after days so the two never disagree. */
export function deploymentReductionPercent(numbers: SiteNumbers): number {
  return Math.round((1 - numbers.deploymentDaysAfter / numbers.deploymentDaysBefore) * 100)
}

export function fillNumbers(text: string, numbers: SiteNumbers): string {
  const cgpa = Number.isInteger(numbers.cgpa)
    ? String(numbers.cgpa)
    : numbers.cgpa.toFixed(2).replace(/0$/, '').replace(/\.0$/, '')

  const map: Record<string, string> = {
    amrs: String(numbers.amrsDeployed),
    pocs: String(numbers.pocs),
    reduction: String(deploymentReductionPercent(numbers)),
    daysBefore: String(numbers.deploymentDaysBefore),
    daysAfter: String(numbers.deploymentDaysAfter),
    international: String(numbers.internationalProjects),
    students: String(numbers.studentsMentored),
    cgpa,
  }

  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) => map[key] ?? match)
}
