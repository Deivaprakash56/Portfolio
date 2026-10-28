/**
 * EDITABLE SITE CONTENT
 * Update this file to change copy, links, and placeholders.
 * Published numbers live in src/data/numbers.ts.
 */

export type LinkState =
  | { status: 'ready'; href: string; label?: string }
  | { status: 'pending'; note: string }

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
    highlights: ['Fleet-scale projects owned from scratch', 'Leading a team of engineers on fleet deployments', 'Customer’s single point of contact', 'Scoping, rollout and handover'],
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
  { step: 1, title: 'Site Discovery', detail: 'Walk the floor to learn what moves, how often, and what gets in the way.' },
  { step: 2, title: 'Success Metrics', detail: 'Pin down payload, path, cycle time, safety, and site conditions.' },
  { step: 3, title: 'Feasibility Check', detail: 'Confirm the robot can do this job before anyone promises it.' },
  { step: 4, title: 'Stakeholder Alignment', detail: 'Keep hardware, software, and the customer working toward one outcome.' },
  { step: 5, title: 'On-Site Validation', detail: 'Test in the real workflow, not just in a tidy demo.' },
  { step: 6, title: 'Handover & Training', detail: 'Documentation and training so the system runs long after we leave.' },
]

/** Skills, split to show both sides of the role. Keep each list short. */
export const skills = {
  customer: {
    title: 'Customer Success',
    tagline: 'I own the customer outcome',
    items: ['Fleet deployment ownership', 'Site feasibility', 'Demos & PoCs', 'Stakeholder alignment', 'Handover & training', 'Team leadership'],
  },
  technical: {
    title: 'Technical',
    tagline: 'I can build and fix the robot',
    items: ['ROS 2 & Nav2', 'Python & Bash', 'Gazebo · RViz2 · Foxglove', 'LiDAR & sensor integration', 'PLC & Modbus TCP', 'Cobots: FANUC, ABB'],
  },
  team: 'Currently leading a team of engineers handling fleet deployments',
}





export const feasibilityPipeline = [
  'Requirements',
  'Feasibility Assessment',
  'Validation',
  'Deployment',
  'Performance Review',
  'Handover',
]

const photo = (name: string) => `${import.meta.env.BASE_URL}photos/${name}.jpg`

export interface Photo {
  src: string
  alt: string
  caption: string
  /** CSS object-position for the crop, e.g. '50% 30%'. */
  position?: string
}

/** Field impact: one real deployment photo per result, keyed by case study slug. */
export const caseStudyPhotos: Record<string, Photo> = {
  'reducing-amr-deployment-time': { src: photo('production-line'), alt: 'AMR with a conveyor top module on a live production line', caption: 'Commissioned on a live production line' },
  'industrial-amr-proof-of-concepts': { src: photo('forklift-amr'), alt: 'Autonomous forklift being tested in a warehouse with laser floor markings', caption: 'Autonomous forklift trial at a customer warehouse' },
  'production-deployment-and-handover': { src: photo('go-live-ceremony'), alt: 'AMR in a warehouse aisle during a go-live ceremony', caption: 'Go-live day: the customer takes over the fleet', position: '50% 65%' },
  'technical-feasibility-and-performance': { src: photo('goods-lift'), alt: 'AMR carrying a trolley out of a goods lift', caption: 'Checked before promised: AMR riding a goods lift', position: '50% 35%' },
}


/** Field gallery: more robots I have worked on and deployed. */
export const gallery: Photo[] = [
  { src: photo('robot-fleet'), alt: 'A fleet of AMRs lined up before dispatch', caption: 'A fleet ready to ship' },
  { src: photo('warehouse-aisle'), alt: 'AMR initializing in a warehouse aisle', caption: 'Navigating a busy warehouse aisle', position: '50% 28%' },
  { src: photo('teleop-demo'), alt: 'Deivaprakash driving an AMR with a controller', caption: 'Bring-up and teleop testing', position: '50% 82%' },
  { src: photo('docking-station'), alt: 'AMR docked at a charging station with a fiducial marker', caption: 'Marker-based auto-docking to a charger' },
  { src: photo('cobot-on-amr'), alt: 'Collaborative robot arm mounted on an AMR in a factory', caption: 'Cobot mounted on an AMR', position: '50% 38%' },
  { src: photo('pallet-mover'), alt: 'Autonomous pallet mover next to a loaded pallet in a factory', caption: 'Autonomous pallet mover on the factory floor', position: '70% 60%' },
  { src: photo('cobot-expo'), alt: 'Mobile manipulator with a cobot arm on an AMR at an expo', caption: 'Mobile manipulator demo', position: '50% 30%' },
  { src: photo('pre-deployment-test'), alt: 'AMR under test beside a charging dock', caption: 'Pre-deployment testing' },
  { src: photo('gtx1500-expo'), alt: 'Heavy-payload AMR displayed at an industry expo', caption: 'Heavy-payload AMR at an industry expo', position: '50% 70%' },
  { src: photo('eyantra-arena'), alt: 'Warehouse robotics competition arena with an AMR and shelves', caption: 'e-Yantra warehouse arena' },
  { src: photo('security-patrol'), alt: 'Outdoor patrol robot with a camera mast', caption: 'Outdoor patrol robot trial', position: '50% 55%' },
]

const logo = (name: string) => `${import.meta.env.BASE_URL}logos/${name}.png`

/** Customer sites I have personally worked at or deployed robots for. */
export const sites: { name: string; logo: string }[] = [
  { name: 'Toyota', logo: logo('toyota') },
  { name: 'Maruti Suzuki', logo: logo('maruti-suzuki') },
  { name: 'Amazon', logo: logo('amazon') },
  { name: 'GE Vernova', logo: logo('ge-vernova') },
  { name: 'Tata Electronics', logo: logo('tata-electronics') },
  { name: 'Yazaki', logo: logo('yazaki') },
  { name: 'Autoliv', logo: logo('autoliv') },
  { name: 'Lear', logo: logo('lear') },
  { name: 'Legrand', logo: logo('legrand') },
  { name: 'Grundfos', logo: logo('grundfos') },
  { name: 'Timken', logo: logo('timken') },
  { name: 'Poclain Hydraulics', logo: logo('poclain') },
  { name: 'Pricol', logo: logo('pricol') },
  { name: 'Granules', logo: logo('granules') },
  { name: 'Milky Mist', logo: logo('milky-mist') },
  { name: 'Shahi Exports', logo: logo('shahi') },
  { name: 'KK Wind Solutions', logo: logo('kk-wind') },
  { name: 'Lucy Electric', logo: logo('lucy-electric') },
  { name: 'Janatics', logo: logo('janatics') },
  { name: 'Coral Coil', logo: logo('coral-coil') },
  { name: 'SRG Apparels', logo: logo('srg-apparels') },
  { name: 'Maxbyte', logo: logo('maxbyte') },
  { name: 'Ausweg', logo: logo('ausweg') },
  { name: 'Cabra Move (US)', logo: logo('cabra-move') },
  { name: 'ALCA (Australia)', logo: logo('alcarail') },
  { name: 'Stematic', logo: logo('stematic') },
  { name: 'Electronics Devices Worldwide', logo: logo('electronics-devices') },
  { name: 'SUA Automation', logo: logo('sua') },
]

/** Academic and research institutions I have worked with. */
export const institutions: { name: string; logo: string }[] = [
  { name: 'IIT Bombay', logo: logo('iit-bombay') },
  { name: 'IISc Bangalore', logo: logo('iisc') },
  { name: 'Sri Eshwar College of Engineering', logo: logo('sri-eshwar-emblem') },
]

export const nav = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'How I work', href: '#customer-success' },
  { label: 'Experience', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
