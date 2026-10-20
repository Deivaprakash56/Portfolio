/**
 * EDITABLE SITE CONTENT
 * Update this file to change copy, links, and placeholders.
 * Published numbers are edited at /admin and stored in this browser.
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

export interface CaseStudyEditableField {
  key: string
  label: string
  value: string | null
  note?: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  eyebrow: string
  summary: string
  context: string
  constraint: string
  investigation: string
  execution: string
  outcome: string
  learning: string
  attributionNote: string
  editableFields: CaseStudyEditableField[]
  tags: string[]
}

export const site = {
  name: 'Deivaprakash',
  lastName: '',
  fullName: 'Deivaprakash',
  shortName: 'Deivaprakash',
  role: 'AMR Deployments · Customer Success',
  positioning:
    'Robotics Engineer & Operator | AMR Deployments | Customer Success | Startup Execution',
  location: 'India',
  experienceCompany: 'Goat Robotics',
  statusLine: 'Currently building and deploying robotics solutions.',
  coreMessage:
    'I work at the intersection of robotics engineering, customer success, and startup execution. I have worked hands-on with autonomous mobile robots, taken them into real industrial environments, solved deployment challenges, and helped bridge the gap between engineering teams and customer expectations.',
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
    status: 'pending',
    note: 'Optional — add GitHub profile URL when available',
  } as LinkState,
  medium: {
    status: 'ready',
    href: 'https://medium.com/@deivaprakash2003',
    label: 'Medium',
  } as LinkState,
}

export const writing = [
  {
    id: 'deployment-vs-rd',
    title: 'Deployment vs R&D: Two Very Different Ways to Learn.',
    subtitle: 'What the Real World Taught Me About Learning',
    date: 'Jan 4, 2026',
    href: 'https://medium.com/@deivaprakash2003/deployment-vs-r-d-two-very-different-ways-to-learn-eec0fde4f72d',
    summary:
      'A reflection on why deployment teaches judgment that controlled R&D alone cannot—and why the two paths are complementary.',
  },
  {
    id: 'journey-robotics',
    title: 'Story of My Journey in Robotics',
    subtitle: 'From College Intern to Real-World AMR Engineering',
    date: 'Dec 18, 2025',
    href: 'https://medium.com/@deivaprakash2003/story-of-my-journey-in-robotics-64cc2442a26c',
    summary:
      'From college internship into real-world AMR engineering—what the path looked like in practice.',
  },
]

export const hero = {
  eyebrow: 'ROBOTICS × CUSTOMER SUCCESS × EXECUTION',
  headline: "I'm Deivaprakash",
  subheadline: 'Making robotics work in the real world.',
  supporting:
    "I'm a robotics professional working across AMR deployments, customer-facing engineering, technical problem-solving, and execution—helping bridge the gap between what a robot can do and what a customer needs it to deliver.",
  primaryCta: { label: 'Explore My Work', href: '#impact' },
  tertiaryCta: { label: 'Connect on LinkedIn', action: 'linkedin' as const },
  portrait: {
    src: null as string | null,
    alt: 'Professional portrait of Deivaprakash — replace with approved photo',
    placeholderLabel: 'Portrait slot — add approved professional photo',
  },
}

export const journey: JourneyStage[] = [
  {
    id: 'early',
    stage: 'Stage 1',
    title: 'Early Engineering Experience',
    period: 'Sep 2023 – Jun 2024',
    summary:
      'Started as a ROS Developer Intern at Katomaran Technologies while completing a robotics engineering degree. Built simulation, visualization, and on-robot validation experience as Goat Robotics developed as an in-house AMR product business.',
    highlights: [
      'ROS 2 intern while completing Robotics & Automation degree',
      'Gazebo, RViz2, Foxglove, Nav2 under real conditions',
      'Grew alongside an in-house AMR product from early engineering',
    ],
  },
  {
    id: 'deployment',
    stage: 'Stage 2',
    title: 'Robotics Engineering and Deployment',
    period: 'Jul 2024 – Present',
    summary:
      'Associate Robotics Engineer at Goat Robotics—leading deployment and commissioning of AMRs, supporting navigation and motion validation, and owning live customer technical contact across Indian sites and virtual international projects.',
    highlights: [
      '{{amrs}}+ AMR deployments and commissioning',
      '{{pocs}}+ customer-site technical demonstrations',
      'Deployment cycle compressed from ~{{daysBefore}} days to ~{{daysAfter}} days',
    ],
  },
  {
    id: 'customer-success',
    stage: 'Stage 3',
    title: 'Customer Success Engineering',
    period: 'Alongside deployment work',
    summary:
      'Worked at the intersection of customers and engineering teams—translating operational requirements into technical actions, supporting PoCs and demos, resolving live issues, and helping customers move toward operational handover.',
    highlights: [
      'Primary technical contact for client engagements',
      'Translated customer operations into engineering constraints',
      'Bridged hardware, software, and field execution',
    ],
  },
  {
    id: 'technical-leadership',
    stage: 'Stage 4',
    title: 'Technical leadership',
    period: 'Current',
    summary:
      'Broader ownership of deployment processes, AMR feasibility assessments for suitable higher-volume projects, technical coordination, and building deployment engineering practice.',
    highlights: [
      'Deployment process quality and coordination',
      'AMR feasibility assessment for higher-volume projects',
      'Building deployment engineering capability (headcount not published)',
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'deployment-time',
    slug: 'reducing-amr-deployment-time',
    title: 'Reducing AMR Deployment Time',
    eyebrow: 'Case Study A · Operations',
    summary:
      'Deployment cycles moved from approximately {{daysBefore}} days to approximately {{daysAfter}} days—around a {{reduction}}% reduction—through more repeatable execution.',
    context:
      'AMR deployment activities were taking roughly {{daysBefore}} days end to end. Longer cycles slowed customer time-to-value and limited how many sites the team could support.',
    constraint:
      'Without standardized handoffs, documentation, and coordination, each deployment absorbed avoidable friction—rework, unclear ownership, and site-specific surprises.',
    investigation:
      'The work focused on understanding where time was actually spent: site readiness, configuration, validation, documentation, and stakeholder coordination. Gaps between engineering capability and field execution were treated as process problems, not just technical ones.',
    execution:
      'Emphasis was placed on deployment standardization, clearer documentation, tighter coordination across stakeholders, and repeatable execution patterns. Exact personal contribution and process changes introduced should be confirmed before publication—see editable fields below.',
    outcome:
      'Deployment time was reduced to approximately {{daysAfter}} days (~{{reduction}}% reduction). This is presented as an operational achievement of the deployment practice, not as a claim of exclusive individual ownership.',
    learning:
      'In robotics, speed comes from repeatability. A faster deployment is usually the result of clearer process, better preparation, and shared ownership—not heroics on a single site visit.',
    attributionNote:
      'Do not attribute the entire improvement exclusively to Deivaprakash without confirmation. Confirm measurement period, number of deployments measured, and methodology.',
    editableFields: [
      { key: 'contribution', label: 'My exact contribution', value: null, note: 'Describe specific ownership before publishing' },
      { key: 'processChanges', label: 'Process changes introduced', value: null },
      { key: 'deploymentsMeasured', label: 'Number of deployments measured', value: null },
      { key: 'measurementPeriod', label: 'Measurement period', value: null, note: 'Confirm exact period and calculation methodology' },
      { key: 'evidence', label: 'Supporting evidence', value: null },
    ],
    tags: ['Deployment', 'Process', 'Operations'],
  },
  {
    id: 'pocs',
    slug: 'industrial-amr-proof-of-concepts',
    title: 'Industrial AMR Proof of Concepts',
    eyebrow: 'Case Study B · Customer Engineering',
    summary:
      'Supported {{pocs}}+ customer-site AMR proof-of-concept activities and technical demonstrations across industrial environments.',
    context:
      'Industrial customers need to see whether an AMR can fit their real workflow—not a lab demo. PoCs and technical demonstrations are where feasibility becomes visible.',
    constraint:
      'Each site brings different layouts, traffic patterns, payloads, safety expectations, and stakeholder maps. A successful PoC requires translating those realities into testable engineering conditions.',
    investigation:
      'The engineering lifecycle typically included understanding workflows, assessing feasibility, identifying environmental constraints, validating robot capabilities, coordinating technical stakeholders, and documenting outcomes.',
    execution:
      'Personal responsibilities centered on customer-facing technical work: clarifying requirements, supporting demonstrations, coordinating with engineering, and capturing what the site taught the team. Broader product decisions and hardware changes remained team activities.',
    outcome:
      '{{pocs}}+ customer-site PoCs and technical demonstrations supported. Outcomes varied by site; the consistent value was clearer feasibility signals and better-informed next steps for customers and the engineering team.',
    learning:
      'A PoC is not a sales theater exercise. It is a structured investigation into whether the robot can serve the workflow under real constraints—and what must change if it cannot.',
    attributionNote:
      'Distinguish personal responsibilities (customer-facing engineering, demos, coordination, documentation) from broader team activities (product roadmap, hardware design).',
    editableFields: [
      { key: 'personalScope', label: 'Confirmed personal responsibilities', value: null },
      { key: 'teamScope', label: 'Team activities (not personal claims)', value: null },
      { key: 'photos', label: 'Approved photographs', value: null, note: 'Only publish authorized, non-confidential imagery' },
    ],
    tags: ['PoC', 'Feasibility', 'Customer Sites'],
  },
  {
    id: 'handover',
    slug: 'production-deployment-and-handover',
    title: 'Production Deployment and Customer Handover',
    eyebrow: 'Case Study C · Delivery',
    summary:
      'Supported AMR deployment at Indian industrial sites and provided virtual technical support for projects involving Australia and the United States.',
    context:
      'Deploying a robot is only halfway. Customers need confidence that the system can be operated, maintained, and trusted in production—supported by documentation, issue tracking, and clear handover.',
    constraint:
      'Distance, time zones, and site variability make handover fragile. Virtual support for international projects adds communication and visibility challenges on top of technical ones.',
    investigation:
      'Focus stayed on connecting engineering execution to customer confidence: what does operational readiness look like, what documentation closes gaps, and how issues are tracked through resolution.',
    execution:
      'Work included deployment support, production readiness conversations, and documentation practices such as deployment reports, user guides, handover materials, and issue tracking—where relevant to the engagement. Specific site challenges and verified results should be filled in once approved for public use.',
    outcome:
      'Hands-on support for Indian industrial deployments plus virtual technical support spanning Australia- and US-related projects. Public claims stop at verified scope; confidential customer details remain private.',
    learning:
      'Customer confidence is an engineering deliverable. Clear documentation and ownership during handover often matter as much as the robot’s nominal capability.',
    attributionNote:
      'Keep customer names, facility photos, and internal metrics private unless authorized.',
    editableFields: [
      { key: 'challenges', label: 'Specific deployment challenges (approved)', value: null },
      { key: 'results', label: 'Verified results', value: null },
      { key: 'photos', label: 'Approved photographs', value: null },
      { key: 'docs', label: 'Public-safe documentation examples', value: null },
    ],
    tags: ['Deployment', 'Handover', 'International'],
  },
  {
    id: 'feasibility',
    slug: 'technical-feasibility-and-performance',
    title: 'Technical Feasibility and Operational Performance',
    eyebrow: 'Case Study D · Engineering Judgment',
    summary:
      'AMR feasibility depends on workflow, payload and trolley geometry, navigation, safety, cycle time, facility constraints, and operating conditions—not brochure specs alone.',
    context:
      'Customers often ask whether a robot “can do the job.” The real question is whether it can do this workflow, in this facility, under these constraints, at an acceptable cycle time and safety posture.',
    constraint:
      'Promising outcomes before feasibility is established creates deployment risk. Not every project will hit its target; the job is to investigate honestly and surface blockers early.',
    investigation:
      'Structured engineering investigation across requirements, feasibility assessment, validation, deployment readiness, performance review, and handover—treating each stage as a decision gate rather than a formality.',
    execution:
      'Assessments considered payload and trolley geometry, navigation conditions, safety requirements, cycle-time expectations, facility constraints, and operating conditions. Findings informed go / no-go and scope decisions with customers and internal teams.',
    outcome:
      'Presented as a disciplined feasibility process rather than a claim that every project achieved its target. Public materials exclude confidential customer details and commercially sensitive performance data.',
    learning:
      'Feasibility is customer success. Saying “not yet” or “not with these constraints” early protects trust and prevents expensive false starts.',
    attributionNote:
      'Do not publish proprietary system diagrams or sensitive performance numbers.',
    editableFields: [
      { key: 'exampleConstraints', label: 'Sanitized example constraints', value: null },
      { key: 'decisionExamples', label: 'Go / no-go examples (non-confidential)', value: null },
    ],
    tags: ['Feasibility', 'Performance', 'Risk'],
  },
]

export const customerSuccessSteps = [
  { step: 1, title: 'Understand the operational problem', detail: 'Start with the customer’s actual workflow—what moves, how often, under what constraints—not with a product feature list.' },
  { step: 2, title: 'Translate into measurable constraints', detail: 'Turn operational needs into engineering inputs: payload, path, cycle time, safety, interfaces, and site conditions.' },
  { step: 3, title: 'Assess feasibility and surface risks', detail: 'Determine whether the AMR is technically suitable—and name the risks before commitments harden.' },
  { step: 4, title: 'Coordinate stakeholders and execution', detail: 'Connect hardware, software, and customer stakeholders so technical work stays aligned with the intended outcome.' },
  { step: 5, title: 'Validate against the workflow', detail: 'Prove performance in the operating environment, not only in a controlled demonstration setup.' },
  { step: 6, title: 'Document, hand over, improve', detail: 'Support documentation, operational handover, and continuous improvement so the system remains usable after the team leaves the site.' },
]

export const skillCategories: { title: string; description: string; skills: Skill[] }[] = [
  {
    title: 'Robotics and Navigation',
    description: 'Hands-on stack used in AMR work',
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
    description: 'Day-to-day engineering tools',
    skills: [
      { name: 'Python', level: 'hands-on' },
      { name: 'Bash', level: 'hands-on' },
      { name: 'Git & Linux workflows', level: 'hands-on' },
      { name: 'Markdown & technical documentation', level: 'hands-on' },
    ],
  },
  {
    title: 'Robotics Systems and Integration',
    description: 'Systems work spanning robot, sensors, and plant interfaces',
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
    description: 'Exposure depth — not claimed as primary expertise',
    skills: [
      { name: 'FANUC ecosystem', level: 'familiar' },
      { name: 'ABB ecosystem', level: 'familiar' },
      { name: 'Techman', level: 'familiar' },
      { name: 'Fairino', level: 'familiar' },
    ],
  },
  {
    title: 'Deployment and Leadership',
    description: 'How technical work meets customers and teams',
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
]

export const recognition = [
  { id: 'rising-star', type: 'award' as const, title: 'Rising Star Award', detail: "Goat Robotics' 7th Foundation Day", note: null as string | null },
  { id: 'eyantra', type: 'award' as const, title: 'First Prize — e-Yantra 2024', detail: 'IIT Bombay, Cosmo Logistic theme', note: null },
  { id: 'degree', type: 'education' as const, title: 'B.E. Robotics and Automation', detail: 'CGPA: {{cgpa}}', note: 'Institution name / graduation year TBD' },
  {
    id: 'mentoring',
    type: 'contribution' as const,
    title: 'Mentoring & Curriculum',
    detail:
      'Robotics & AI/ML Mentor at MyEquation, Ahmedabad (Apr 2025 – Present). Mentored {{students}}+ students and early-career engineers; ROS 2 Nanodegree mentoring; major role designing RoboAI syllabus and workshops.',
    note: null,
  },
]

export const philosophy = [
  'A robot is only valuable when it solves a real operational problem.',
  'A successful demo is not the same as a reliable deployment.',
  'Feasibility must be established before making promises.',
  'Customer feedback is a technical input, not merely a support concern.',
  'Repeatable processes matter as much as individual engineering effort.',
  'Clear ownership and communication make complex deployments easier to execute.',
]

export const leadership = {
  title: 'Leadership and startup execution',
  intro:
    'Technical leadership means owning the loop—not just how a single robot behaves on a good day. Field experience taught me how deployment quality, customer trust, and product decisions stay connected.',
  focuses: [
    'Connecting customer requirements with engineering execution',
    'Following deployment processes end to end',
    'Assessing suitability of AMR projects before overcommitting',
    'Identifying risks before they become deployment problems',
    'Developing repeatable deployment practices',
    'Building teams and technical culture that scale with quality',
  ],
  challenge:
    'The hard part of scaling robotics products is protecting technical quality while increasing throughput. Process, judgment, and team capability have to grow together—especially when software has to survive real robots and real sites.',
  hiringNote:
    'Team-building is part of the current responsibility. Specific headcount is not published until verified.',
}

export const about = {
  title: 'Why I build at the intersection of robots and customers',
  paragraphs: [
    'I have worked close to the product, the customer, and the operational realities of deploying robotics systems. That combination—engineering depth plus customer-facing execution—is what early-stage deep-tech needs when technology has to survive outside the lab.',
    'My path has been progressive ownership: learning the stack as an intern, taking robots into industrial sites, translating customer workflows into technical constraints, and taking broader responsibility for how deployment engineering gets done.',
    'I enjoy ambiguous problems, cross-disciplinary coordination, and converting technical capability into outcomes customers can trust.',
  ],
}

export const feasibilityPipeline = [
  'Requirements',
  'Feasibility Assessment',
  'Validation',
  'Deployment',
  'Performance Review',
  'Handover',
]

export const nav = [
  { label: 'Impact', href: '#impact' },
  { label: 'Journey', href: '#journey' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Approach', href: '#customer-success' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const contentAudit = {
  missingBeforePublish: [
    'Optional GitHub URL',
    'Institution name / graduation year for B.E.',
    'Exact measurement methodology for the deployment-time reduction (sample size / period)',
    'Approved photographs for case studies',
    'Portrait photo (optional but recommended)',
  ],
}
