export const navLinks = [
  { label: 'Why ARious', href: '#crisis' },
  { label: 'How it works', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Proof', href: '#social-proof' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join waitlist', href: '#waitlist' },
] as const

export const heroContent = {
  tag: 'Education 3.0 preview • Waitlist opens December 16',
  title: 'Are you curious enough to see ARious in action?',
  subtitle:
    'We pair tactile prompts, augmented reality, and adaptive guidance so families can feel what Education 3.0 looks like—without waiting for the classroom to catch up.',
  body:
    'This beta window is intentionally small. We’re inviting parents who love experimenting to try the teaser experience, share feedback, and influence the launch.',
  bullets: [
    'Built with research from the Healthy Education Hub',
    'Designed by Dr. Sudhakar Agarkar after 40+ years in learning science',
    'Interactive curiosity path that funnels straight into the experience',
  ],
  primaryCta: { label: 'Join the waitlist', href: '#waitlist' },
  secondaryCta: { label: 'See how it works', href: '#experience' },
  prompt:
    'Curiosity unlocks the teaser: unzip the preview when it drops, or tap Join Waitlist now so you don’t miss the moment.',
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

export const experienceSection = {
  title: 'One tactile journey, three simple beats',
  description:
    'We condensed the full ARious platform into a short curiosity path. Parents see the flow in minutes without scrolling through multiple sections.',
  story: [
    {
      title: 'Grounded in research',
      body: 'Every interaction is drawn from the Healthy Education Hub’s findings on multi-sensory learning so exploration always has purpose.',
    },
    {
      title: 'Crafted by Dr. Sudhakar',
      body: 'Four decades of constructivist learning research shape the prompts, pacing, and reflection moments in the teaser.',
    },
    {
      title: 'Built for curiosity',
      body: 'One tactile moment unlocks an AR reveal, which cues a quick adaptive nudge—then loops you back into the waitlist flow.',
    },
  ],
  steps: [
    {
      label: 'Prime',
      body: 'Open the teaser, answer one curiosity prompt, and meet the physical object that kicks off the story.',
    },
    {
      label: 'Reveal',
      body: 'Use your phone to unzip the AR layer and watch the invisible concept appear around the object.',
    },
    {
      label: 'Respond',
      body: 'ARious adapts with a short challenge and routes you straight into the waitlist confirmation.',
    },
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
  metrics: [
    { label: 'Healthy Education Hub', value: 'Research Partner' },
    { label: 'Dr. Sudhakar', value: '40+ yrs in learning science' },
    { label: 'Beta cohort', value: 'Invite-only' },
  ],
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
    queue: 'Curiosity count refreshes daily—secure your invite before the drop.',
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
  referral: [
    'Share with 3 friends and jump 100 spots',
    '5 referrals: +200 spots and 60% off',
    '10 referrals: +500 spots and first toy free',
    'Top 50: Lifetime discount and recognition',
  ],
} as const

export const faqs = {
  general: [
    {
      question: 'How do I get it?',
      answer: 'Add your email to the waitlist. We’ll send the teaser link plus simple steps to unlock the preview on December 16.',
    },
    {
      question: 'Is it safe for my kids?',
      answer:
        'Yes. The AR layer runs on your existing phone or tablet, data is encrypted, and every interaction follows kid-safe design guidelines.',
    },
    {
      question: 'What materials are used?',
      answer: 'We ship recyclable paper prompts for the beta. The production version uses durable plant-based polymers.',
    },
    {
      question: 'What ages is it for?',
      answer: 'The teaser targets curious kids ages 7–13, but the full platform spans K-12. We’ll ask about grade level when you join.',
    },
    {
      question: 'Are you certified?',
      answer: 'Yes. ARious is backed by the Healthy Education Hub and aligns with COPPA/FERPA guidelines. Full certifications roll out at launch.',
    },
  ],
} as const

