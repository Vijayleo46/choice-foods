// Authentic data for Choice Foods Group - Impact Page
// Source of truth: Official Choice Foods Group Impact Page & corporate records

export interface ImpactStat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

export interface ImpactPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ResponsibilityItem {
  id: string;
  number: string;
  tabKey: 'workplace' | 'education' | 'sustainability';
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  bullets: string[];
}

export interface MetricItem {
  id: string;
  category: string;
  label: string;
  value: string;
  badge?: string;
}

export interface SchoolChapter {
  id: string;
  chapterNumber: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ImpactArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  description: string;
  image: string;
  linkText: string;
}

export const IMPACT_HERO = {
  eyebrow: 'A LEGACY OF INTEGRITY',
  title: 'OUR IMPACT',
  description:
    'Our impact is shaped by decades of steady growth - built through our people, our operations, and the communities around them. We focus on building systems that support worker wellbeing, expanding access to education, and strengthening how we manage our operations over time.',
  heroImage: '/assets/impact/choice-foods-group-06308-copy-1250x792.avif',
  heroImageAlt: 'Choice Foods team member inspecting shrimp in state-of-the-art facility',
};

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'workforce',
    value: 3000,
    suffix: '',
    label: 'Total Workforce in India + U.S. Facilities',
    sublabel: 'Skilled professionals dedicated to food safety and operational integrity across Kochi, Andhra, and North American centers.',
  },
  {
    id: 'students',
    value: 4000,
    suffix: '',
    label: 'Students Supported at Choice Schools',
    sublabel: 'Empowered through holistic education across three world-class campuses in Kerala, India.',
  },
  {
    id: 'solar',
    value: 100,
    suffix: ' MW',
    label: 'Planned Solar Capacity Under Development',
    sublabel: 'Transitioning processing infrastructure toward clean, renewable, self-generated energy.',
  },
];

export const PURPOSE_TRANSITION = {
  eyebrow: 'FOUNDATIONAL COMMITMENT',
  title: 'A purpose driven global seafood company',
  image: '/assets/impact/da5ba5f23c8f7fde5c095e0926b2d65873bfcf25-1-1250x748.avif',
  imageAlt: 'Choice Foods coastal aquaculture facility and pristine marine environment',
  description:
    'For more than seven decades, our family enterprise has believed that commerce and conscience must operate in concert. We invest directly in the communities where our harvest begins, building durable infrastructure that outlasts market cycles.',
};

export const IMPACT_PILLARS: ImpactPillar[] = [
  {
    id: 'workplace-safety',
    number: '01',
    title: 'Building Safe, Supportive Workplaces',
    description: 'Our workforce programs focus on safety, access, and day-to-day wellbeing across our facilities.',
    image: '/assets/impact/f47032434dbebcc0275d2624cb3c646d8f62bea8-1024x529.avif',
    alt: 'Quality technicians and processing workforce in hygienic clean-room environment',
  },
  {
    id: 'education-india',
    number: '02',
    title: 'Investing in Educational Opportunities in India',
    description: 'Our education initiatives support both employees and surrounding communities.',
    image: '/assets/impact/b7482f30a7822868d2ce3f35f305c89691a2608c.avif',
    alt: 'Choice School students engaged in collaborative scientific learning in Kerala',
  },
  {
    id: 'accountability',
    number: '03',
    title: 'Long-Term Accountability',
    description: 'Our approach focuses on strengthening operations through recognized industry frameworks and third-party standards.',
    image: '/assets/impact/Screenshot-2026-06-09-at-2.45.05-PM-1024x1014.avif',
    alt: 'Rigorous third-party certification and cold chain verification processes',
  },
];

export const QUALITY_WITH_PURPOSE_SECTION = {
  eyebrow: 'SYSTEMIC RIGOR',
  headline: 'QUALITY WITH PURPOSE.',
  subtext:
    'Our social and environmental responsibility is not an add-on; it is hard-coded into daily standard operating procedures across every pond, peeling table, freezer tunnel, and distribution hub.',
};

export const RESPONSIBILITY_STORIES: ResponsibilityItem[] = [
  {
    id: 'worker-engagement',
    number: '01',
    tabKey: 'workplace',
    title: 'Worker and Community Engagement',
    tagline: 'Supporting UN Sustainable Development Goals across plants & communities',
    description:
      'The Choice Corporate Responsibility Initiative and Women’s Empowerment Principles Action Teams focus on implementing initiatives to support the United Nations (UN) Sustainable Development Goals (SDGs) at the processing plants and in the surrounding communities. Our workforce initiatives focus on safety, access, and day-to-day wellbeing across our facilities.',
    image: '/assets/impact/74056dc48cdfbc2bae83086e849b0883a8ff9238-1024x529.avif',
    alt: 'Choice Foods team member smiling in facility with comprehensive PPE',
    bullets: [
      'On-site medical facility with 24/7 nursing support',
      'Worker housing with free meals, sanitation, and laundry access',
      'Financial literacy and health education programs',
    ],
  },
  {
    id: 'education-development',
    number: '02',
    tabKey: 'education',
    title: 'Supporting Education & Development',
    tagline: 'Structured development built on knowledge, character, and health',
    description:
      'Our education initiatives support both employees and surrounding communities. Through the Choice Foundation and Choice Schools, we provide structured education programs built on knowledge, character, and health, alongside internal training and guidance programs.',
    image: '/assets/impact/1H9A7629-1024x610.avif',
    alt: 'Young Choice School students in classroom uniform raising their hands eagerly',
    bullets: [
      'Choice Foundation community programs',
      'Choice Schools (Kerala) serving 4,000+ students',
      'Career guidance and counseling initiatives',
      'Literacy and life-skills training',
    ],
  },
  {
    id: 'sustainability-standards',
    number: '03',
    tabKey: 'sustainability',
    title: 'Sustainability',
    tagline: 'Recognized industry frameworks and verified third-party standards',
    description:
      'Our approach focuses on strengthening operations through recognized industry frameworks and third-party standards. We operate within certification frameworks including BAP, ASC, and BRCGS.',
    image: '/assets/impact/Thiruvall_ext1-1024x583.avif',
    alt: 'Modern Thiruvalla campus architecture integrated with green coastal landscape',
    bullets: [
      'BAP (Best Aquaculture Practices) certification',
      'ASC (Aquaculture Stewardship Council) alignment',
      'BRCGS (Brand Reputation Compliance Global Standards)',
      'Third-party audits and compliance reviews',
    ],
  },
];

export const IMPACT_METRICS_STRIP: MetricItem[] = [
  {
    id: 'medical-support',
    category: "Worker's Empowerment",
    label: 'On-site Medical Support',
    value: '24/7',
  },
  {
    id: 'schools-supported',
    category: 'Development & Education',
    label: 'Students supported through Choice Schools',
    value: '4K+',
  },
  {
    id: 'frameworks-in-place',
    category: 'Sustainability',
    label: 'BAP / ASC / BRCGS Certification frameworks in place',
    value: '3+',
  },
  {
    id: 'freedom-of-movement',
    category: "Worker's Empowerment",
    label: 'STF-Aligned Freedom of Movement policy',
    value: 'STF',
    badge: 'Verified',
  },
];

export const CHOICE_SCHOOL_CHAPTERS: SchoolChapter[] = [
  {
    id: 'chapter-01',
    chapterNumber: 'CHAPTER 01',
    title: 'Holistic Learning',
    description:
      'The Choice School believes that each child is unique and learns differently. We ensure our students have a well-rounded education with a focus on spiritual, mental, social, natural, emotional, creative and physical well-being.',
    image: '/assets/impact/choice-school-1250x833.avif',
    alt: 'Choice School campus grounds with students in open air courtyard',
  },
  {
    id: 'chapter-02',
    chapterNumber: 'CHAPTER 02',
    title: 'Creativity & Critical Thinking',
    description:
      'The curriculum focusses on developing a child’s imagination and giving room for critical thinking and creativity to flourish by offering platforms for free expression of their thoughts and opinions.',
    image: '/assets/impact/choice-schools-india-1H9A8637-1250x667.avif',
    alt: 'Choice School students performing in creative arts and theatrical production',
  },
  {
    id: 'chapter-03',
    chapterNumber: 'CHAPTER 03',
    title: 'Health & Wholeness',
    description:
      'The school follows the core concepts of KCH (Knowledge, Character and Health) and gives equal importance to mental as well as physical health. Healthy children and teachers create a good learning environment.',
    image: '/assets/impact/choice-schools-india-DSC_8091-1250x835.avif',
    alt: 'Choice School student focused during athletics and physical development training',
  },
];

export const IMPACT_PRESS_ARTICLES: ImpactArticle[] = [
  {
    id: 'career-pathways-jose-thomas',
    title: 'Career Pathways – Jose Thomas of Choice Foods',
    source: 'Global Seafood Alliance',
    date: 'August 4th, 2026',
    description:
      'Entrepreneur Jose Thomas of Choice Canning Co. joined the Aquademia crew to share the story of his career, navigating international trade, investing in cold chain innovation, and building an enduring family enterprise.',
    image: '/assets/impact/Aquademia_Website-2048x1704-1-1024x852.avif',
    linkText: 'Read Full Feature',
  },
  {
    id: 'masterclass-fearless-educator',
    title: 'Masterclass with Fearless Educator',
    source: 'Apple Podcasts',
    date: 'August 4th, 2026',
    description:
      'Mr. Jose Thomas is a rare visionary and personality who continues to prove his mettle both as an entrepreneur and educator par excellence. An in-depth conversation on transforming regional schooling into world-class pedagogy.',
    image: '/assets/impact/JoseThomas2.avif',
    linkText: 'Listen to Episode',
  },
  {
    id: '43-students-to-3800-dreams',
    title: 'From 43 Students to 3,800 Dreams',
    source: 'TEDx',
    date: 'June 8th, 2026',
    description:
      'Beginning with just 43 students, a bold educational vision grew into a thriving community of nearly 3,800 learners and 500 educators across three campuses — despite early financial struggles, public skepticism, and business challenges.',
    image: '/assets/impact/Screenshot-2026-06-09-at-2.37.34-PM-1024x554.avif',
    linkText: 'Watch Keynote Presentation',
  },
];

export const LEARN_MORE_HUBS = [
  {
    id: 'about-choice',
    eyebrow: 'ABOUT CHOICE',
    title: 'Our People, Places, & Process',
    description: 'Explore our multi-generational story, three state-of-the-art facilities, and end-to-end cold-chain traceability.',
    path: '/about/',
    cta: 'Learn About Our History',
  },
  {
    id: 'capabilities',
    eyebrow: 'CAPABILITIES',
    title: 'Value Added Products & Private Label',
    description: 'Specializing in customized meal kits, seasoned skewers, IQF shrimp, and proprietary sauce blends for major grocers.',
    path: '/capabilities',
    cta: 'Explore Our Capabilities',
  },
  {
    id: 'press-news',
    eyebrow: 'PRESS & NEWS',
    title: 'Read Our Latest Industry Insights',
    description: 'Latest news, podcast appearances, and educational breakthroughs from Choice Foods Group leadership.',
    path: '/press',
    cta: 'View Media Archive',
  },
];

export const IMPACT_PARTNERSHIP = {
  eyebrow: 'PARTNERSHIPS',
  headline: 'A history of integrity and thoughtful investment.',
  body:
    'We partner with retailers, distributors, and foodservice operators to develop and deliver thoughtful seafood programs. Whether you’re exploring private label, new product development, or long-term supply, our seasoned team of professionals works closely to understand your goals and build the right approach.',
  contactSubtext: 'Reach out to us',
};
