export interface PressHeroGalleryItem {
  id: string;
  image: string;
  alt: string;
  caption: string;
  location: string;
  year: string;
}

export interface PressArticle {
  id: string;
  title: string;
  slug: string;
  source: string;
  sourceType: 'Audio Podcast' | 'Keynote Talk' | 'Industry Announcement' | 'Field Report';
  date: string;
  isoDate?: string;
  readTime: string;
  category: 'all' | 'capabilities' | 'partnerships' | 'thought-leadership';
  categoryLabel: string;
  excerpt: string;
  fullContent: string[];
  pullQuote?: {
    text: string;
    speaker: string;
    role: string;
  };
  image: string;
  imageAlt: string;
  link: string;
  externalUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface ImpactStory {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  imageAlt: string;
  targetPath: string;
  metrics: string;
}

export interface LearnMoreLink {
  title: string;
  subtitle: string;
  path: string;
  eyebrow: string;
}

export const PRESS_HERO = {
  eyebrow: 'EDITORIAL JOURNAL',
  headline: 'A Global Thought Leader',
  subtitle: 'The Choice Foods story, in the world.',
  description:
    'Choice is an internationally-recognized organization building systems that support worker wellbeing, expanding access to education, and strengthening how it manages complex operations over time.',
  gallery: [
    {
      id: 'gallery-01',
      image: '/assets/press/DSC00071.-copy.jpg-copy.jpg',
      alt: 'Choice Foods team member inspecting harvest sorting line',
      caption: 'Harvester inspection & quality classification',
      location: 'Andhra Pradesh, India',
      year: '2026',
    },
    {
      id: 'gallery-02',
      image: '/assets/press/DSCF9890-1.jpg',
      alt: 'Culinary test kitchen trial and seafood plating',
      caption: 'Chef-led recipe formulation & flavor testing',
      location: 'Newark, NJ',
      year: '2026',
    },
    {
      id: 'gallery-03',
      image: '/assets/press/6-768x512.avif',
      alt: 'Educational campus supported by Choice Foundation',
      caption: 'Choice School campus & creative laboratories',
      location: 'Kochi, Kerala',
      year: '2026',
    },
    {
      id: 'gallery-04',
      image: '/assets/press/choice-foods2-768x1151.avif',
      alt: 'Cold chain processing and automated cryogenic blast freezing',
      caption: 'Continuous IQF freezer tunnels & cold chain control',
      location: 'Pottstown, PA',
      year: '2026',
    },
    {
      id: 'gallery-05',
      image: '/assets/press/DSC_6795-768x513.avif',
      alt: 'Choice corporate leaders in dialogue with international partners',
      caption: 'Collaborative program design & retail partner review',
      location: 'Jersey City, NJ',
      year: '2026',
    },
    {
      id: 'gallery-06',
      image: '/assets/press/choice-foods5-768x1154.avif',
      alt: 'Community welfare and vocational pathway development',
      caption: 'Worker wellbeing, healthcare & vocational pathway',
      location: 'Bapatla, AP',
      year: '2026',
    },
  ] as PressHeroGalleryItem[],
};

export const PRESS_CATEGORIES = [
  { id: 'all', label: 'All', count: 4 },
  { id: 'capabilities', label: 'Capabilities', count: 1 },
  { id: 'partnerships', label: 'Partnerships', count: 1 },
  { id: 'thought-leadership', label: 'Thought Leadership', count: 3 },
] as const;

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 'career-pathways',
    title: 'Career Pathways – Jose Thomas of Choice Foods',
    slug: 'career-pathways-jose-thomas-of-choice-foods',
    source: 'Global Seafood Alliance',
    sourceType: 'Audio Podcast',
    date: 'August 4th, 2026',
    isoDate: '2026-08-04',
    readTime: '24 min listen',
    category: 'thought-leadership',
    categoryLabel: 'Thought Leadership',
    excerpt:
      'Entrepreneur Jose Thomas of Choice Canning Co. joined the Aquademia crew to share the story of his career, building integrated aquaculture systems, and elevating operational integrity across three decades.',
    fullContent: [
      'In this in-depth conversation with the Global Seafood Alliance on the Aquademia podcast, Jose Thomas, founder and leader of Choice Foods Group, recounts the journey from early artisanal processing in Southern India to orchestrating one of the world’s most sophisticated, vertically-integrated value-added seafood ecosystems.',
      'Thomas reflects on the early decision to build cold chain infrastructure directly adjacent to aquaculture clusters in Andhra Pradesh, eliminating intermediary delays and setting unprecedented benchmarks for freshness, microbiological purity, and transparency.',
      '“True sustainability is not a checklist item or an annual public relations exercise,” explains Thomas during the episode. “It is an operational discipline woven into how every technician is trained, how fair wages are paid, and how community schools are funded for the next generation.”',
      'The episode examines the technological leap into computerized IQF freezing, real-time ELISA allergen testing, and the ongoing investment in value-added processing facilities in the United States that allow retail partners to shorten delivery lead times to under 48 hours.',
    ],
    pullQuote: {
      text: 'True sustainability is an operational discipline woven into how every technician is trained, how fair wages are paid, and how schools are funded.',
      speaker: 'Jose Thomas',
      role: 'CEO & Founder, Choice Foods Group',
    },
    image: '/assets/press/Aquademia_Website-2048x1704-1-1024x852.avif',
    imageAlt: 'Aquademia Podcast cover featuring Jose Thomas of Choice Foods',
    link: 'https://choicefoodsgroup.com/career-pathways-jose-thomas-of-choice-foods/',
    externalUrl: 'https://www.globalseafood.org/aquademia-podcast/',
    stats: [
      { label: 'Ecosystem Experience', value: '35+ Years' },
      { label: 'Facility Cold Chain', value: '-22°F Continuous' },
      { label: 'Direct Employment', value: '3,800+ Professionals' },
    ],
  },
  {
    id: 'masterclass-fearless-educator',
    title: 'Masterclass with Fearless Educator',
    slug: '924-2',
    source: 'Apple Podcasts',
    sourceType: 'Audio Podcast',
    date: 'August 4th, 2026',
    readTime: '38 min episode',
    category: 'thought-leadership',
    categoryLabel: 'Thought Leadership',
    excerpt:
      'Mr. Jose Thomas is a rare visionary and personality who continues to prove his mettle both as an entrepreneur and educator par excellence.',
    fullContent: [
      'Recorded for the flagship Masterclass series, this conversation looks closely at the intersection of private industry and civic leadership. Rather than operating purely as a commercial seafood exporter, Jose Thomas made educational philanthropy the foundational pillar of the Choice Group.',
      'Under his direction, the Choice School was founded in Kochi in 1990 to provide holistic, progressive, world-class education rooted in critical thinking and social empathy. The school has since expanded to multiple campuses, nurturing thousands of students into global universities and leadership roles.',
      'The masterclass covers the architectural and philosophical alignment between running high-stakes food manufacturing lines and designing progressive educational curricula: both require relentless curiosity, disciplined feedback loops, and human-centric empathy.',
    ],
    pullQuote: {
      text: 'Education is the ultimate form of long-term stewardship. When you empower a child to think fearlessly, you uplift entire regional communities.',
      speaker: 'Jose Thomas',
      role: 'Founder, The Choice Foundation',
    },
    image: '/assets/press/JoseThomas2.avif',
    imageAlt: 'Jose Thomas portrait during the educational masterclass session',
    link: 'https://choicefoodsgroup.com/924-2/',
    externalUrl: 'https://podcasts.apple.com',
    stats: [
      { label: 'Learners Empowered', value: '3,800+' },
      { label: 'Educators & Staff', value: '500+' },
      { label: 'Campuses Founded', value: '3 Modern Sites' },
    ],
  },
  {
    id: 'from-43-students-to-3800-dreams',
    title: 'From 43 Students to 3,800 Dreams',
    slug: 'from-43-students-to-3800-dreams',
    source: 'TEDx',
    sourceType: 'Keynote Talk',
    date: 'June 8th, 2026',
    readTime: '18 min keynote',
    category: 'thought-leadership',
    categoryLabel: 'Thought Leadership',
    excerpt:
      'Beginning with just 43 students, a bold educational vision grew into a thriving community of nearly 3,800 learners and 500 educators across three campuses — despite early financial struggles, public skepticism, and business challenges.',
    fullContent: [
      'Delivered before a live audience at TEDx, this landmark keynote chronicles the origins of Choice School. What began as a daring experiment with just forty-three students in an old rented bungalow blossomed into one of South India’s most celebrated educational ecosystems.',
      'Jose Thomas describes confronting deep skepticism from conventional rote-learning institutions when Choice introduced theatre, hands-on robotics, environmental ecology, and social equity directly into primary curricula.',
      'Today, Choice alumni lead groundbreaking scientific research, creative arts institutions, and social ventures across the Americas, Europe, and Asia, proving that commercial businesses thrive most when deeply anchored in their civic communities.',
    ],
    pullQuote: {
      text: 'We did not build schools to produce test scores; we built schools to ignite imagination, foster kindness, and give young minds wings.',
      speaker: 'Jose Thomas',
      role: 'TEDx Keynote Speaker',
    },
    image: '/assets/press/Screenshot-2026-06-09-at-2.37.34-PM-1024x554.avif',
    imageAlt: 'TEDx stage presentation: From 43 Students to 3,800 Dreams',
    link: 'https://choicefoodsgroup.com/from-43-students-to-3800-dreams/',
    externalUrl: 'https://www.ted.com/tedx',
    stats: [
      { label: 'Initial Cohort', value: '43 Students' },
      { label: 'Current Student Body', value: '3,800 Learners' },
      { label: 'Academic Accreditations', value: 'CBSE & IB World' },
    ],
  },
  {
    id: 'choice-canning-gsa-corporate-member',
    title: 'Choice Canning Becomes First India-based Corporate Member of GSA',
    slug: 'choice-canning-becomes-first-india-based-corporate-member-of-gsa',
    source: 'Global Seafood Alliance',
    sourceType: 'Industry Announcement',
    date: 'May 11th, 2026',
    readTime: '6 min read',
    category: 'partnerships',
    categoryLabel: 'Partnerships & Capabilities',
    excerpt:
      'From its inception, Choice Canning Company has had a tradition of being first in the seafood industry. Becoming the first India-based corporate member of the Global Seafood Alliance underscores this lifelong commitment.',
    fullContent: [
      'The Global Seafood Alliance (GSA) officially recognized Choice Canning Company as the very first India-based corporate member in the history of the international body. This distinction affirms Choice Foods’ pioneering role in seafood safety, environmental stewardship, and social accountability.',
      'GSA’s corporate membership program brings together global leaders across retail, processing, and harvesting who commit to audited Best Aquaculture Practices (BAP) standards and rigorous third-party traceability protocols.',
      'For Choice Foods, this milestone represents decades of patient capital: constructing climate-controlled processing halls, installing automated metal detectors and X-ray sorters, and pioneering worker healthcare clinics that exceed national statutory mandates.',
      'Retailers in North America and Europe rely on this corporate GSA membership as documented validation that every ounce of seafood sourced through Choice Foods meets the highest international sustainability thresholds.',
    ],
    pullQuote: {
      text: 'Choice Canning has consistently set the standard for seafood excellence in South Asia. Their membership demonstrates what forward-looking leadership looks like.',
      speaker: 'GSA Executive Leadership',
      role: 'Global Seafood Alliance',
    },
    image: '/assets/press/74056dc48cdfbc2bae83086e849b0883a8ff9238-1024x529.avif',
    imageAlt: 'Choice Canning facility inspection and Global Seafood Alliance certification',
    link: 'https://www.globalseafood.org/blog/choice-canning-becomes-first-india-based-corporate-member-of-gsa/',
    externalUrl: 'https://www.globalseafood.org',
    stats: [
      { label: 'BAP Certification', value: '4-Star Certified' },
      { label: 'Global Audit Rating', value: 'Grade AA BRC' },
      { label: 'Traceability Index', value: '100% Pond-to-Plate' },
    ],
  },
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'value-added-facility',
    number: '01',
    title: 'Inside the Value-Added Facility',
    description:
      'A look inside the Choice Foods value-added facility transforming the global frozen seafood category.',
    tag: 'Advanced Manufacturing',
    image: '/assets/press/f47032434dbebcc0275d2624cb3c646d8f62bea8-1024x529.avif',
    imageAlt: 'High-speed automated packaging line at Choice Foods processing plant',
    targetPath: '/capabilities',
    metrics: 'Pottstown, PA · 120,000 sq ft IQF Line',
  },
  {
    id: 'recipes-modern-family',
    number: '02',
    title: 'Recipes for the Modern Family',
    description:
      'Reimagining shrimp for the at-home cook with the Choice Foods chefs’ team.',
    tag: 'Culinary Development',
    image: '/assets/press/b7482f30a7822868d2ce3f35f305c89691a2608c.avif',
    imageAlt: 'Gourmet shrimp skillet recipe prepared by Choice Foods culinary team',
    targetPath: '/capabilities',
    metrics: 'R&D Test Kitchen · Clean-Label Formulas',
  },
  {
    id: 'retailer-private-label',
    number: '03',
    title: 'Designing a Retailer’s Private Label',
    description:
      'A national grocer wanted a frozen seafood line under their own brand. Here is how the team brought it to shelf in nine months.',
    tag: 'Private Label Co-Manufacturing',
    image: '/assets/press/kevin-mccutcheon-APDMfLHZiRA-unsplash-776x1024.avif',
    imageAlt: 'Consumer holding premium private-label seafood package in grocery aisle',
    targetPath: '/partner',
    metrics: '9-Month Launch Cycle · Custom Packaging Die',
  },
];

export const LEARN_MORE_LINKS: LearnMoreLink[] = [
  {
    eyebrow: 'ORGANIZATION',
    title: 'About Choice',
    subtitle: 'Our People, Places, & Process',
    path: '/about',
  },
  {
    eyebrow: 'OPERATIONS',
    title: 'Capabilities',
    subtitle: 'Value Added Products',
    path: '/capabilities',
  },
  {
    eyebrow: 'GROWTH',
    title: 'Partnerships',
    subtitle: 'A history of integrity & thoughtful investment',
    path: '/partner',
  },
];

export const PRESS_PARTNERSHIP_CONTENT = {
  eyebrow: 'PARTNERSHIPS',
  headline: 'A history of integrity and thoughtful investment.',
  description:
    'We partner with retailers, distributors, and foodservice operators to develop and deliver thoughtful seafood programs. Whether you’re exploring private label, new product development, or long-term supply, our seasoned team of professionals works closely to understand your goals and build the right approach.',
};
