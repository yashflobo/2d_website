export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Register', href: '#waitlist' },
] as const

export const heroContent = {
  tag: 'Launching December 2025',
  title: 'Where Curiosity Becomes Mastery',
  subtitle:
    'The first K-12 STEM platform that combines real-world objects, immersive AR, and adaptive AI — transforming abstract concepts into hands-on discoveries that spark lifelong curiosity.',
  stats: {
    toyDescription: 'Unlocking augmented reality experiences that adapt to your child\'s pace.',
    developer: 'Developed by renowned education researcher Dr. Sudhakar Agarkar',
    experience: 'combining 40+ years of learning science with cutting-edge technology.',
  },
  metrics: {
    parents: '12,847+ parents',
    schools: '245 schools',
    waitlistText: 'on the waitlist',
  },
  urgency: {
    remaining: 'Only 753 founding member spots remaining',
    queue: 'There are 3333 members ahead of you. Want to move up faster?',
  },
  primaryCta: { label: 'Join the Waitlist for Early Access', href: '#waitlist' },
  secondaryCta: null,
} as const

export const crisisSection = {
  title: 'Abstract concepts stay abstract',
  cards: [
    {
      title: 'Passive screen time isn\'t learning',
      body: `Educational apps too often mean passive watching—just edutainment that entertains but doesn\'t educate.`,
      note: `28% of educators cite engagement as their top challenge, knowing that true learning requires active problem-solving, not just clicking through content.`,
      quote: `You\'ve watched your child memorize formulas without truly grasping what they mean.`,
    },
    {
      title: 'Teachers are drowning in tool sprawl',
      body: `The average school uses 2,982 different EdTech tools, forcing teachers to spend hours curating content, managing logins, and troubleshooting technology instead of teaching.`,
      note: `What should enhance learning has become a burden.`,
      quote: `You\'ve explained the same concept five different ways, yet students still can\'t apply it.`,
    },
    {
      title: 'Abstract concepts stay abstract',
      body: `Traditional methods expect children to visualize molecules, geometric transformations, and physics forces in their minds. But 87% of students struggle with abstract STEM concepts because they\'ve never experienced them directly.`,
      note: `Worksheets and diagrams can\'t bridge the gap between imagination and understanding.`,
      quote: `You\'ve watched your child memorize formulas without truly grasping what they mean.`,
    },
  ],
  closing: "There's a better way to learn STEM.",
} as const

export const solutionSection = {
  title: 'The only platform that brings STEM to life—literally',
  subtitle: 'We combine what no one else can',
  tagline: 'This is the breakthrough:',
  formula: 'Physical foundations + AR visualization + AI personalization = Learning that actually sticks',
  features: [
    {
      title: 'Physical manipulation',
      tagline: 'Touch creates understanding',
      body: 'Every CodexAR experience begins with a tangible object—molecular models, geometric manipulatives, engineering components.',
      stat: 'Research shows physical manipulation improves spatial reasoning by 68% and creates neural pathways that screen-only learning cannot.',
      benefit: 'Expertly designed experiences spanning K-12 mathematics, physics, chemistry, biology, and engineering.',
    },
    {
      title: 'Augmented reality',
      tagline: 'See the invisible, understand the impossible',
      body: 'Point your device at any CodexAR toy and watch abstract concepts materialize in 3D space. Rotate molecules to understand bonding. Visualize force vectors in real-time. Manipulate geometric transformations with your hands.',
      stat: 'AR makes the invisible visible, transforming imagination into interaction.',
      benefit: 'Not passive watching—active problem-solving through spatial interaction.',
    },
    {
      title: 'Adaptive AI',
      tagline: 'Learning that knows your child',
      body: 'Our AI doesn\'t just deliver content—it understands how each learner thinks. CodexAR adapts difficulty in real-time, identifies misconceptions, suggests alternative approaches, and celebrates progress.',
      stat: 'Every child moves at their own pace, building genuine mastery instead of just moving forward.',
      benefit: 'From struggling to confident—AI ensures every child succeeds.',
    },
  ],
} as const

export const howItWorksSection = {
  title: 'How it Works?',
  subtitle: 'Learning adventures in three simple steps',
  steps: [
    {
      title: 'Choose Your Discovery',
      body: 'Select from age-appropriate STEM experiences delivered to your door, or access the full library with our Complete Collection. Each experience unlocks multiple learning opportunities.',
    },
    {
      title: 'Touch and Explore',
      body: 'Students manipulate physical objects while AR brings concepts to life on any device. No special equipment needed—works with smartphones and tablets you already have.',
    },
    {
      title: 'Grow and Master',
      body: 'AI tracks understanding, adapts challenges, and celebrates milestones. Parents and teachers see exactly what students are learning through intuitive dashboards.',
    },
  ],
} as const

export const researchSection = {
  title: 'Developed by a pioneer in learning science',
  subtitle: 'Dr. Sudhakar Agarkar',
  tagline: 'Four decades transforming education',
  mission: 'On a mission to fuel every student\'s curiosity and empower teachers with tools to make it happen.',
  bio: {
    name: 'Dr. Sudhakar Agarkar',
    title: 'Chief Knowledge Officer at CodexAR and Professor Emeritus at the Tata Institute of Fundamental Research (TIFR)',
    intro: 'one of India\'s most prestigious research institutions.',
    summary:
      'For over 40 years, he\'s dedicated his career to a singular mission: Making STEM education accessible and effective for every student, regardless of background.',
    credentials: [
      'Professor at TIFR Homi Bhabha Centre for Science Education',
      'PhD in Science Education focused on learning difficulties',
      'Published Researcher and Springer handbook contributor',
      'Teacher Trainer for thousands of educators across 4 continents',
      'International Expert presented in 15+ countries',
    ],
    hurdlesTitle: 'Dr. Agarkar\'s research revealed four fundamental learning hurdles:',
    hurdles: [
      'Lack of direct experience with abstract concepts',
      'Unsatisfied curiosity when questions go unanswered',
      'Limited peer interaction reducing collaborative learning',
      'Poor communication competence expressing understanding',
    ],
    quote:
      '"The role of teachers has changed from the person imparting information to a person facilitating the construction of knowledge."',
    quoteAuthor: '— Dr. Sudhakar Agarkar',
    provenTitle: 'Proven with the students who need it most',
    provenText:
      'Dr. Agarkar developed his Remedial Instructional Strategy (RIS) working with disadvantaged communities—slumdwellers in Mumbai and tribal students in rural India. His methods significantly enhanced student performance where traditional approaches failed.',
  },
} as const

export const socialProofSection = {
  title: 'Join the education innovators shaping the future',
  metrics: [
    { label: 'parents', value: '12,847+', subtext: 'on the waitlist' },
    { label: 'schools', value: '245', subtext: 'requesting pilots' },
    { label: 'countries', value: '19', subtext: 'expressing interest' },
  ],
  badges: ['COPPA Compliant', 'FERPA Certified', 'STEM.org Accredited', 'Privacy Certified', 'Research-Backed'],
  testimonials: [
    {
      role: 'Teacher',
      quote:
        'Finally, technology that aligns with how I teach. The physical components mean students build intuition before abstraction—exactly what learning science tells us works.',
    },
    {
      role: 'Principal',
      quote:
        'We evaluated 14 STEM platforms. CodexAR was the only one combining research backing, standards alignment, and genuine student engagement. Easy choice.',
    },
    {
      role: 'Parent',
      quote:
        'I researched everything before committing. Dr. Agarkar\'s credentials and the Helsinki partnership convinced me this isn\'t just another edtech fad — it\'s the real deal.',
    },
  ],
} as const

export const waitlistSection = {
  title: 'Be among the first to transform STEM learning',
  subtitle: 'Launching December 2025 — early access opens in 90 days',
  benefits: [
    'Priority access before public launch',
    'Founding member pricing (50% off for first 1,000)',
    'Exclusive behind-the-scenes updates',
    'Beta testing opportunity (select members)',
    'Lifetime discount locked-in',
    '30-day money-back guarantee once launched',
  ],
  parentForm: {
    id: 'waitlist-form',
    title: 'Join Waitlist',
    submitLabel: 'Lock in 50% Off',
    fields: [
      { label: 'Email', name: 'email', type: 'email', placeholder: 'example@email.com', required: true },
      { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'John', required: true },
      { label: "Child's Grade", name: 'grade', type: 'text', placeholder: 'John Carter', required: true },
    ],
    successMessage: "You're on the list! Check your email for next steps and your unique referral link.",
  },
  note: 'Parent specific registration form will be used as a separate webpage after clicking on \'CTA Button\' by a user.',
} as const

export const faqs = {
  general: [
    {
      question: 'How do I get it?',
      answer: "Add your email to the waitlist. We\'ll send you access information and next steps when we launch in December 2025.",
    },
    {
      question: 'Is it safe for my kids?',
      answer:
        'Yes. The AR layer runs on your existing phone or tablet, data is encrypted, and every interaction follows kid-safe design guidelines.',
    },
    {
      question: 'What materials are used?',
      answer: 'We use durable, child-safe materials for all physical toys. The production version uses recyclable and plant-based polymers where possible.',
    },
    {
      question: 'What age group is appropriate?',
      answer: "CodexAR spans K-12 (ages 5-18) with age-appropriate content for each grade level. We\'ll ask about your child\'s grade when you join the waitlist.",
    },
    {
      question: 'Are you certified?',
      answer: 'Yes. CodexAR is backed by renowned learning science research and aligns with COPPA/FERPA guidelines. We hold STEM.org accreditation and maintain privacy certifications.',
    },
    {
      question: 'Can I try this for Free?',
      answer: 'We offer a 30-day money-back guarantee once launched. Beta testing opportunities are available for select waitlist members.',
    },
  ],
} as const

