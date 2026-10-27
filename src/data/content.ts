/**
 * EDITABLE SITE CONTENT
 * Update this file to change copy, links, and placeholders.
 * Published numbers live in src/data/numbers.ts.
 */

export type LinkState =
  | { status: 'ready'; href: string; label?: string }
  | { status: 'pending'; note: string }

export type SkillLevel = 'hands-on' | 'familiar' | 'conceptual'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface Metric {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  explanation: string
  note?: string
}

export interface JourneyStage {
  id: string
  stage: string
  title: string
  period: string
  summary: string
  highlights: string[]
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  eyebrow: string
  summary: string
  problem: string
  action: string
  result: string
  tags: string[]
}

export const site = {
  name: 'Deivaprakash',
  lastName: '',
  fullName: 'Deivaprakash',
  shortName: 'Deivaprakash',
  role: 'Customer Success Manager – Fleet Deployments',
  positioning: 'Customer Success Manager – Fleet Deployments · India',
  location: 'India',
  experienceCompany: 'Goat Robotics',
  statusLine: 'Scaling robot fleets on factory floors',
  coreMessage:
    'I take autonomous mobile robots out of the lab and make them work in real plants.',
}

export const links = {
  resume: {
    status: 'ready',
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    label: 'Resume',
  } as LinkState,
  linkedin: {
    status: 'ready',
    href: 'https://www.linkedin.com/in/DeivaPrakash',
  } as LinkState,
  email: {
    status: 'ready',
    href: 'mailto:deivaprakash2003@gmail.com',
  } as LinkState,
  github: {
    status: 'ready',
    href: 'https://github.com/Deivaprakash56',
  } as LinkState,
  medium: {
    status: 'ready',
    href: 'https://medium.com/@deivaprakash2003',
    label: 'Medium',
  } as LinkState,
}


export const hero = {
  eyebrow: 'ROBOTICS × CUSTOMER SUCCESS × EXECUTION',
  headline: "I'm Deivaprakash",
  subheadline: 'Making robotics work in the real world.',
  supporting: {
    lead: 'I deploy AMRs, solve problems on the floor, and close the gap between',
    can: 'what a robot can do',
    needs: 'what a customer needs',
  },
  primaryCta: { label: 'See my work', href: '#case-studies' },
  tertiaryCta: { label: 'LinkedIn', action: 'linkedin' as const },
  portrait: {
    src: `${import.meta.env.BASE_URL}portrait.jpg`,
    alt: 'Deivaprakash',
  },
}


export interface Employer {
  id: string
  name: string
  logo: string | null
  location: string
  period: string
  note: string
  roleIds: string[]
}

export const employers: Employer[] = [
  {
    id: 'goat-robotics',
    name: 'GOAT Robotics',
    logo: `${import.meta.env.BASE_URL}goat-logo.png`,
    location: 'Coimbatore',
    period: 'Jul 2024 – Present',
    note: 'Founding employee',
    roleIds: ['customer-success-manager', 'senior-deployment-engineer', 'deployment-engineer', 'associate-robotics-engineer'],
  },
  {
    id: 'katomaran',
    name: 'Katomaran Technologies',
    logo: `${import.meta.env.BASE_URL}katomaran-logo.png`,
    location: 'Coimbatore',
    period: 'Sep 2023 – Jun 2024',
    note: 'Internship',
    roleIds: ['katomaran'],
  },
]

export const journey: JourneyStage[] = [
  {
    id: 'customer-success-manager',
    stage: 'Goat Robotics',
    title: 'Customer Success Manager – Fleet Deployments',
    period: 'Current',
    summary: 'When a customer orders a fleet instead of one or two robots, I own the project end to end, from scoping and site feasibility through rollout and handover, separate from the standard deployment team.',
    highlights: ['Fleet-scale projects owned from scratch', 'Customer’s single point of contact', 'Scoping, rollout and handover'],
  },
  {
    id: 'senior-deployment-engineer',
    stage: 'Goat Robotics',
    title: 'Senior Deployment Engineer',
    period: '',
    summary: 'Led AMR deployments and turned them into a repeatable process, so each new site went faster than the last.',
    highlights: ['~{{daysBefore}} days down to ~{{daysAfter}}', 'Standardized deployment process', 'Virtual support for Australia and the US'],
  },
  {
    id: 'deployment-engineer',
    stage: 'Goat Robotics',
    title: 'Deployment Engineer',
    period: '',
    summary: 'Commissioned AMRs at customer plants and ran proofs of concept on real factory floors.',
    highlights: ['{{amrs}}+ AMRs deployed', '{{pocs}}+ customer PoCs', 'On-site commissioning'],
  },
  {
    id: 'associate-robotics-engineer',
    stage: 'Goat Robotics · Founding employee',
    title: 'Associate Robotics Engineer',
    period: 'From Jul 2024',
    summary: 'Joined Goat Robotics as a founding employee and worked on the robots before they went to customers.',
    highlights: ['Founding team', 'ROS 2 and Nav2 bring-up', 'AMR testing and troubleshooting'],
  },
  {
    id: 'katomaran',
    stage: 'Katomaran',
    title: 'ROS 2 Intern',
    period: '',
    summary: 'Started my career while finishing a robotics degree. Learned the ROS 2 stack on a real AMR product.',
    highlights: ['ROS 2 Humble', 'Gazebo, RViz2, Nav2', 'Early AMR product work'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'deployment-time',
    slug: 'reducing-amr-deployment-time',
    title: 'Faster AMR deployments',
    eyebrow: 'Field operations',
    summary: 'A deployment that took ~{{daysBefore}} days now takes ~{{daysAfter}}.',
    problem: 'Every new site restarted the same work. Handoffs were unclear, so time disappeared into rework.',
    action: 'I standardized the steps, the docs, and who owns each part of the install.',
    result: 'About {{reduction}}% faster. Customers get a working robot in days, not weeks.',
    tags: ['Deployment', 'Process'],
  },
  {
    id: 'pocs',
    slug: 'industrial-amr-proof-of-concepts',
    title: 'Customer-site proofs of concept',
    eyebrow: 'Customer engineering',
    summary: '{{pocs}}+ proofs of concept and technical demos on real factory floors.',
    problem: 'A lab demo does not tell a customer if the robot fits their workflow.',
    action: 'I map the job, run the robot on site, and write down what actually worked.',
    result: 'A clear go or no-go — for the customer and for engineering.',
    tags: ['PoC', 'Customer sites'],
  },
  {
    id: 'handover',
    slug: 'production-deployment-and-handover',
    title: 'Deployments customers can run',
    eyebrow: 'Delivery',
    summary: 'On-site work in India. Virtual support for Australia and the United States.',
    problem: 'A robot on the floor is not finished until the customer can operate it.',
    action: 'I support the install, write the handover, and track issues through to a fix.',
    result: 'Customers leave with a system they can run, not a demo they watched.',
    tags: ['Handover', 'International'],
  },
  {
    id: 'feasibility',
    slug: 'technical-feasibility-and-performance',
    title: 'Honest feasibility',
    eyebrow: 'Engineering judgment',
    summary: 'I check the plant before anyone promises the robot can do the job.',
    problem: 'Brochure specs skip payload, paths, safety, cycle time, and the building itself.',
    action: 'I test those constraints and say go or no-go before the project gets expensive.',
    result: 'Fewer false starts. Customers hear the truth early.',
    tags: ['Feasibility', 'Risk'],
  },
]

export const customerSuccessSteps = [
  { step: 1, title: 'Learn the job', detail: 'Start with what moves, how often, and what gets in the way.' },
  { step: 2, title: 'Make it measurable', detail: 'Payload, path, cycle time, safety, and the site itself.' },
  { step: 3, title: 'Check if it fits', detail: 'Say whether the robot can do this job before anyone promises it.' },
  { step: 4, title: 'Keep people aligned', detail: 'Hardware, software, and the customer stay on the same outcome.' },
  { step: 5, title: 'Prove it on site', detail: 'Test in the real workflow, not only in a tidy demo.' },
  { step: 6, title: 'Hand it over', detail: 'Docs and ownership so the system still works after we leave.' },
]

export const skillCategories: { title: string; description: string; skills: Skill[] }[] = [
  {
    title: 'Deployment and Leadership',
    description: 'Where the work meets the customer',
    skills: [
      { name: 'Customer-facing engineering', level: 'hands-on' },
      { name: 'Technical demonstrations & PoCs', level: 'hands-on' },
      { name: 'AMR feasibility assessment', level: 'hands-on' },
      { name: 'Deployment coordination', level: 'hands-on' },
      { name: 'Customer handover & documentation', level: 'hands-on' },
      { name: 'Cross-functional technical communication', level: 'hands-on' },
      { name: 'Team-building & technical management', level: 'hands-on' },
    ],
  },
  {
    title: 'Robotics and Navigation',
    description: 'What I run on the robot',
    skills: [
      { name: 'ROS 2 Humble', level: 'hands-on' },
      { name: 'Nav2', level: 'hands-on' },
      { name: 'RViz / RViz2', level: 'hands-on' },
      { name: 'Foxglove', level: 'hands-on' },
      { name: 'Gazebo', level: 'hands-on' },
      { name: 'Webots', level: 'hands-on' },
      { name: 'Cartographer', level: 'hands-on' },
      { name: 'MoveIt', level: 'hands-on' },
    ],
  },
  {
    title: 'Programming and Tools',
    description: 'Daily tools',
    skills: [
      { name: 'Python', level: 'hands-on' },
      { name: 'Bash', level: 'hands-on' },
      { name: 'Git & Linux workflows', level: 'hands-on' },
      { name: 'Markdown & technical documentation', level: 'hands-on' },
    ],
  },
  {
    title: 'Robotics Systems and Integration',
    description: 'Robot, sensors, and the plant',
    skills: [
      { name: 'Autonomous mobile robots', level: 'hands-on' },
      { name: '2D and 3D LiDAR', level: 'hands-on' },
      { name: 'Depth cameras & Intel NUC platforms', level: 'hands-on' },
      { name: 'IMU & encoder-based localization concepts', level: 'conceptual' },
      { name: 'ROS 2 control concepts', level: 'familiar' },
      { name: 'PLC & industrial system integration', level: 'familiar' },
      { name: 'Modbus TCP', level: 'familiar' },
      { name: 'Robot commissioning & troubleshooting', level: 'hands-on' },
    ],
  },
  {
    title: 'Industrial Robotics',
    description: 'Arms I have worked with',
    skills: [
      { name: 'FANUC ecosystem', level: 'familiar' },
      { name: 'ABB ecosystem', level: 'familiar' },
      { name: 'Techman', level: 'familiar' },
      { name: 'Fairino', level: 'familiar' },
    ],
  },
]





export const feasibilityPipeline = [
  'Requirements',
  'Feasibility Assessment',
  'Validation',
  'Deployment',
  'Performance Review',
  'Handover',
]

export const nav = [
  { label: 'Work', href: '#case-studies' },
  { label: 'How I work', href: '#customer-success' },
  { label: 'Experience', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
