export const navLinks = [
  { label: 'Why ARious', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Parents', href: '#parents' },
  { label: 'For Schools', href: '#schools' },
  { label: 'Research', href: '#research' },
  { label: 'FAQ', href: '#faq' },
] as const

export const heroContent = {
  tag: 'Launching December 2025',
  title: 'Where curiosity becomes mastery',
  subtitle:
    'The first K-12 STEM platform combining real-world objects, immersive AR, and adaptive AI—turning abstract concepts into hands-on discoveries that spark lifelong curiosity.',
  body:
    '30 innovative learning toys spanning K-12, each unlocking AR experiences that adapt to every learner’s pace. Developed by Dr. Sudhakar Agarkar, fusing 40+ years of research-backed pedagogy with cutting-edge technology.',
  primaryCta: { label: 'Join the waitlist', href: '#waitlist' },
  secondaryCta: { label: 'Request pilot program', href: '#schools-form' },
  trustBadges: [
    'Launching December 2025',
    'Helsinki Education Hub Partner',
    'Research-backed by TIFR',
  ],
  stats: [
    { label: 'Parents on waitlist', value: '12,847+' },
    { label: 'Schools requesting pilots', value: '245' },
    { label: 'Countries interested', value: '19' },
    { label: 'Learning toys across K-12', value: '30' },
  ],
} as const

export const crisisSection = {
  title: 'Three crises are holding our children back',
  cards: [
    {
      title: 'The Learner Crisis',
      body: `87% of students struggle with abstract STEM concepts because they've never experienced them directly. Worksheets can’t bridge the gap between imagination and understanding.`,
      note: `Parents watch memorization replace understanding; teachers explain concepts five different ways without stickiness.`,
    },
    {
      title: 'The Teacher Crisis',
      body: `Schools juggle nearly 3,000 EdTech tools. Teachers spend hours curating, managing logins, and troubleshooting—time stolen from actual teaching.`,
      note: `Tool sprawl burns valuable planning hours and fragments data.`,
    },
    {
      title: 'The Engagement Crisis',
      body: `Passive screen time entertains but rarely educates. 28% of educators cite engagement as their top challenge; true learning needs active problem-solving.`,
      note: `Most “learning apps” are just videos and quizzes. Students need interaction.`,
    },
  ],
  closing: "There's a better way to learn STEM.",
} as const

export const solutionSection = {
  title: 'The only platform that brings STEM to life—literally',
  subtitle: 'Physical manipulation + augmented reality + adaptive AI',
  pillars: [
    {
      label: 'Physical Objects',
      title: 'Touch creates understanding',
      description:
        'Each experience starts with tangible molecular models, geometric manipulatives, and engineering components that boost spatial reasoning by 68%.',
      footnote: '30 expertly designed toys across math, physics, chemistry, biology, and engineering.',
    },
    {
      label: 'Augmented Reality',
      title: 'See the invisible, understand the impossible',
      description:
        'Point any device at an ARious object and watch abstract concepts materialize in 3D space. Rotate molecules, visualize force vectors, manipulate geometry.',
      footnote: 'Active, spatial problem-solving replaces passive screen time.',
    },
    {
      label: 'Adaptive AI',
      title: 'Learning that knows each child',
      description:
        'AI interprets how every learner thinks, adapts difficulty on the fly, spots misconceptions, and celebrates progress.',
      footnote: 'From struggling to confident—AI ensures every child succeeds.',
    },
  ],
  integration:
    'Physical foundations + AR visualization + AI personalization = learning that actually sticks. Students in multimodal environments see 34% better retention and 45% faster comprehension.',
  cta: { label: 'Reserve your spot', href: '#waitlist' },
} as const

export const howItWorks = {
  title: 'Learning adventures in three simple steps',
  steps: [
    {
      label: 'Choose Your Discovery',
      description:
        'Select from 30 age-appropriate STEM toys delivered to your door, or unlock the entire library with the Complete Collection.',
    },
    {
      label: 'Touch and Explore',
      description:
        'Manipulate physical objects while AR brings concepts to life on any smartphone or tablet—no special equipment required.',
    },
    {
      label: 'Grow and Master',
      description:
        'Adaptive AI tracks understanding, calibrates the next challenge, and surfaces insights inside intuitive parent and teacher dashboards.',
    },
  ],
} as const

export const parentSection = {
  title: 'Watch your child discover the joy of STEM',
  subtitle: "From 'I can’t' to 'Let me show you what I learned'—in just 30 days",
  pains: [
    {
      title: 'Homework battles',
      body: '94% of parents say their child asks to keep learning after the first ARious session.',
    },
    {
      title: 'Screen time concerns',
      body: 'Active problem-solving with 20-minute guided sessions means screen time you can feel good about.',
    },
    {
      title: 'Keeping up',
      body: 'Adaptive AI meets every learner exactly where they are and builds visible confidence.',
    },
    {
      title: 'Expensive tutoring',
      body: 'Founding members pay less than $1/day for unlimited, personalized K-12 STEM learning.',
    },
  ],
  benefits: [
    '30 hands-on STEM toys across the K-12 journey',
    'Hundreds of adaptive AR experiences',
    'Confidence that extends beyond STEM',
    'Future-ready skills for careers that don’t exist yet',
  ],
  testimonials: [
    {
      quote:
        'My 7-year-old struggled with fractions for months. Two weeks with ARious and she was teaching me using the physical models.',
      author: 'Sarah M., mother of two (Boston)',
    },
    {
      quote:
        'I was skeptical about more screen time until I saw my son actively problem-solving with AR molecules. He’s engaged and actually learning.',
      author: 'James K., father of a 9-year-old (Seattle)',
    },
  ],
  pricing: 'First 1,000 waitlist members lock in 50% off—less than $1/day.',
  cta: { label: 'Secure your early access discount', href: '#waitlist-form' },
  faq: [
    'What ages is this appropriate for?',
    'What technology do we need?',
    'How much screen time is involved?',
    'Is my child’s data safe?',
    'What if my child doesn’t like it?',
  ],
} as const

export const schoolSection = {
  title: 'Transform STEM outcomes with research-backed innovation',
  subtitle: 'Increase achievement while reducing teacher burden and tool sprawl',
  values: [
    {
      title: 'Measurable outcomes',
      body: 'Pilot schools saw a 23% improvement in STEM assessments within one semester; ESSA Tier 2 evidence.',
    },
    {
      title: 'Standards-aligned',
      body: 'Aligned with NGSS, Common Core Math, and state standards with built-in formative assessments.',
    },
    {
      title: 'Teacher efficiency',
      body: 'Save 10+ hours per month with curriculum guides, differentiation tools, and automated progress tracking.',
    },
    {
      title: 'Consolidate tools',
      body: 'Single sign-on, LMS integrations, and unified data replace 5–10 disparate apps.',
    },
    {
      title: 'Equity & access',
      body: 'Universal Design for Learning principles, offline functionality, and support for diverse learners.',
    },
  ],
  implementation: [
    'Classroom kits for 30 students (materials included)',
    'Comprehensive PD (virtual + in-person)',
    'Pacing calendars and curriculum guides',
    'Admin dashboard with ROI tracking',
    'Dedicated customer success partner',
  ],
  comparison: [
    { label: 'Interaction', before: 'Passive screen time', after: 'Active physical + digital' },
    { label: 'Personalization', before: 'One-size-fits-all', after: 'AI-adaptive for every learner' },
    { label: 'Tool sprawl', before: 'Adds more apps', after: 'Consolidates into one platform' },
    { label: 'Evidence', before: 'Limited proof', after: 'ESSA Tier 2 research' },
    { label: 'Support', before: 'Minimal onboarding', after: 'Full implementation + success team' },
  ],
  testimonials: [
    {
      quote:
        'We piloted ARious in eight schools and saw immediate results. Students asked deeper questions and made cross-concept connections.',
      author: 'Dr. Jennifer Williams, Curriculum Director',
    },
  ],
  partnership:
    'Selected by Helsinki Education Hub, one of the world’s leading education innovation networks.',
  ctas: [
    { label: 'Schedule implementation consultation', href: '#schools-form' },
    { label: 'Request pilot details', href: '#schools-form' },
    { label: 'Download curriculum alignment guide', href: '/docs/arious-curriculum.pdf' },
  ],
  faq: [
    'Does it integrate with our LMS/SIS?',
    'What professional development is included?',
    'Is student data privacy compliant (FERPA/COPPA)?',
    'What is total cost of ownership?',
    'How do pilot programs work?',
  ],
} as const

export const researchSection = {
  title: 'Developed by a pioneer in learning science',
  mission: 'On a mission to fuel every student’s curiosity and empower teachers with the tools to make it happen.',
  bio: {
    name: 'Dr. Sudhakar Agarkar',
    title: 'Chief Knowledge Officer, ARious • Professor Emeritus, TIFR',
    summary:
      '40+ years advancing constructivist STEM learning through the Remedial Instructional Strategy (RIS), proven with disadvantaged learners across India.',
    credentials: [
      'Professor at TIFR Homi Bhabha Centre for Science Education',
      'PhD in Science Education focused on learning difficulties',
      'International expert across 15+ countries',
      'Published researcher and Springer handbook contributor',
      'Teacher trainer for thousands of educators',
    ],
    hurdles: [
      'Lack of direct experience with abstract concepts',
      'Unsatisfied curiosity when questions go unanswered',
      'Limited peer interaction for collaboration',
      'Poor communication competence when expressing understanding',
    ],
    quote:
      '“The role of teachers has changed from imparting information to facilitating the construction of knowledge.”',
  },
} as const

export const socialProofSection = {
  title: 'Join the education innovators shaping the future',
  metrics: heroContent.stats,
  badges: ['COPPA Compliant', 'FERPA Certified', 'STEM.org Accredited', 'Privacy Certified', 'Research-backed'],
  testimonials: [
    {
      role: 'Teacher',
      quote:
        'Finally, technology that aligns with how I teach. The physical components mean students build intuition before abstraction.',
    },
    {
      role: 'Principal',
      quote:
        'We evaluated 14 STEM platforms. ARious was the only one balancing research backing, standards alignment, and true engagement.',
    },
    {
      role: 'Parent',
      quote:
        'Dr. Agarkar’s credentials and the Helsinki partnership prove this isn’t just another edtech fad—it’s the future.',
    },
  ],
} as const

export const waitlistSection = {
  title: 'Be among the first to transform STEM learning',
  subtitle: 'Launching December 2025—early access opens in 90 days.',
  urgency: {
    countdown: ['30 Days', '12 Hours', '45 Minutes', '12 Seconds'],
    remaining: 'Only 753 founding member spots remaining',
    queue: 'There are 3,333 members ahead of you. Want to move faster?',
  },
  benefits: [
    'Priority access before public launch',
    'Founding member pricing (50% off first 1,000)',
    'Exclusive behind-the-scenes updates',
    'Beta testing opportunity (select members)',
    'Lifetime discount locked in',
  ],
  parentForm: {
    id: 'waitlist-form',
    title: 'Join the Waitlist',
    fields: [
      { label: 'First Name', name: 'firstName', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: "Child's Grade", name: 'grade', type: 'text', required: true },
    ],
    submitLabel: 'Join Waitlist — Lock in 50% Off',
  },
  schoolForm: {
    id: 'schools-form',
    title: 'Schedule Consultation',
    fields: [
      { label: 'School / District', name: 'organization', type: 'text', required: true },
      { label: 'Role', name: 'role', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: 'Student Count', name: 'students', type: 'number', required: true },
    ],
    submitLabel: 'Request Pilot Program',
  },
  referral: [
    'Share with 3 friends and jump 100 spots',
    '5 referrals: +200 spots and 60% off',
    '10 referrals: +500 spots and first toy free',
    'Top 50: Lifetime discount and recognition',
  ],
} as const

export const faqs = {
  general: [
    { question: 'When does ARious launch?', answer: 'December 2025 with 30-day early waitlist access.' },
    {
      question: 'What’s included?',
      answer: 'Complete K-12 STEM curriculum, 30 toys, unlimited AR experiences, adaptive AI.',
    },
    {
      question: 'What tech do we need?',
      answer: 'Any iOS 11+ or Android 7.0+ smartphone or tablet works. No special hardware required.',
    },
    {
      question: 'Do you replace schoolwork?',
      answer: 'ARious supplements school learning with 15–20 minute active sessions, 3–5x per week.',
    },
    { question: 'Is there a trial?', answer: 'Yes. 7-day free trial at launch plus 30-day money-back guarantee.' },
  ],
} as const

