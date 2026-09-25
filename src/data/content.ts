// Choice Foods Group - Authentic Reference Data & Editorial Content

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  location: string;
  tag: string;
}

export interface CoreValue {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  commitments: string[];
}

export interface Leader {
  name: string;
  role: string;
  division: string;
  bio: string;
  tenure: string;
  image: string;
}

export interface LocationDetail {
  id: string;
  name: string;
  country: string;
  type: string;
  description: string;
  capabilities: string[];
  coordinates: { x: number; y: number }; // percentage on map
  specs: {
    workforce: string;
    certifications: string;
    focus: string;
  };
}

export interface NewsArticle {
  id: string;
  category: 'Corporate' | 'Education & Community' | 'Industry & Sustainability' | 'Culinary Innovation';
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '1953',
    title: 'Founded in Kerala, India',
    location: 'Kochi, Kerala',
    tag: 'Origins & Heritage',
    description:
      'Choice Group is founded by O.C. Thomas with a commitment to integrity, pioneering cold chain infrastructure and maritime seafood processing in South India.',
  },
  {
    year: '1990s',
    title: 'Early Innovation in Shrimp Processing',
    location: 'Kerala & Coastal Waters',
    tag: 'Engineering',
    description:
      'Under the leadership of Jose Thomas, Choice revolutionized shrimp processing standards by introducing modern blast-freezing, rigorous microbiological testing, and ethical procurement direct from farmers.',
  },
  {
    year: '1995',
    title: 'Expansion Into Logistics & Cold Storage',
    location: 'Cochin & Global Routes',
    tag: 'Infrastructure',
    description:
      'Established proprietary multi-temperature warehousing and deep-sea cold supply chain logistics, guaranteeing uncompromised product freshness across transatlantic transit.',
  },
  {
    year: '2000s',
    title: 'Building Production at Scale',
    location: 'Andhra Pradesh, India',
    tag: 'Scale & Precision',
    description:
      'Engineered one of the largest and most advanced automated seafood processing complexes in Asia, located close to premier aquaculture ponds in Andhra Pradesh.',
  },
  {
    year: '2000s',
    title: 'Entering Value Added Products',
    location: 'Global R&D Hubs',
    tag: 'Culinary Innovation',
    description:
      'Transitioned from raw commodity export to fully prepared, marinated, and skillet-ready formulations developed specifically for modern Western consumers.',
  },
  {
    year: '2007',
    title: 'Launch of Tastee Choice',
    location: 'United States & Worldwide',
    tag: 'Consumer Brand',
    description:
      'Debuted Tastee Choice in leading North American supermarket chains, setting the standard for premium frozen seafood meal kits and restaurant-quality skillet entrees.',
  },
  {
    year: '2020s',
    title: 'U.S. Production Expansion',
    location: 'New Jersey & Pennsylvania, USA',
    tag: 'Domestic Footprint',
    description:
      'Invested in state-of-the-art domestic packaging, culinary formulation, and distribution centers in Jersey City, NJ and Pittston, PA to provide just-in-time fulfillment.',
  },
  {
    year: 'TODAY',
    title: 'A Global Production Partner',
    location: 'Worldwide Operations',
    tag: 'Integrated Ecosystem',
    description:
      'Choice Foods operates an integrated multi-continent food system serving leading retailers, club stores, and foodservice distributors with verified traceability.',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'promise',
    num: '01',
    title: 'DELIVERING WHAT WE PROMISE',
    tagline: 'Reliability that sustains the world’s most demanding supply chains.',
    description:
      'In a global supply chain where weather, biology, and logistics intersect, our word is our bond. From lot-specific yield commitments to seasonal volume guarantees, we maintain 99.4% on-time full fulfillment year after year.',
    commitments: [
      'Unbroken cold-chain integrity from harvest to receiving dock',
      'Container-level batch testing with verified certificates of analysis',
      'Dedicated program managers for every retail and foodservice partner',
    ],
  },
  {
    id: 'partnerships',
    num: '02',
    title: 'DIRECT PARTNERSHIPS',
    tagline: 'Multi-decade relationships built on mutual transparency and respect.',
    description:
      'We do not operate as transactional commodity brokers. We build collaborative, long-term programs directly with aquaculture farmers, commercial retail buyers, and culinary developers.',
    commitments: [
      'Direct contracts ensuring fair, predictable compensation for farmers',
      'Open-book recipe costing and shared packaging innovation',
      'Shared capital investments in specialized production machinery',
    ],
  },
  {
    id: 'quality',
    num: '03',
    title: 'HONEST QUALITY',
    tagline: 'Zero shortcuts in testing, sanitation, and ingredient sourcing.',
    description:
      'Quality at Choice Foods is an exacting science. Every shipment undergoes rigorous ELISA antibiotic residue screening, heavy metal testing, and organoleptic evaluation in accredited laboratories.',
    commitments: [
      'ELISA testing for complete absence of chloramphenicol and nitrofurans',
      'Clean-label spice blends and sauces free of synthetic fillers',
      'Audited by BRCGS Grade AA, IFS, and BAP 4-Star governing bodies',
    ],
  },
  {
    id: 'longterm',
    num: '04',
    title: 'BUILT FOR THE LONG TERM',
    tagline: 'Three generations of steward leadership and community impact.',
    description:
      'Because Choice Foods remains family-owned, our decisions are governed by decade-long horizons rather than quarterly shareholder pressures. We invest in permanent schools, green solar power, and worker housing.',
    commitments: [
      'The Choice School educating over 4,000 students in India',
      '100 MW solar capacity project transitioning plants toward zero-carbon',
      'Safe, dignity-centered workplaces with 24/7 on-site healthcare',
    ],
  },
];

export const LEADERSHIP_TEAM: Leader[] = [
  {
    name: 'Jose Thomas',
    role: 'Managing Director & Group President',
    division: 'Executive Leadership',
    bio: 'Second-generation visionary who transformed Choice from a regional seafood pioneer into a diversified global food corporation. Founder of The Choice Foundation and JTPAC.',
    tenure: '44+ Years Leadership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Thomas Jose',
    role: 'Chief Executive Officer – Choice Foods North America',
    division: 'U.S. Operations & Strategy',
    bio: 'Leading North American retail partnerships, private label development, and our automated domestic value-added processing facilities in the United States.',
    tenure: '18+ Years Leadership',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Anita Menon',
    role: 'Global VP of Quality Assurance & Food Safety',
    division: 'Scientific Quality & HACCP',
    bio: 'Oversees international laboratory testing protocols, ELISA antibiotic screening facilities, and compliance across BAP 4-Star, BRCGS, and FDA standards.',
    tenure: '15+ Years Leadership',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chef Marcus Vance',
    role: 'Executive Director of Culinary & Product Development',
    division: 'R&D Culinary Labs',
    bio: 'Pioneers proprietary sauce formulations, restaurant-grade skillet kits, and custom flavor profiles for America’s leading retail grocery chains.',
    tenure: '12+ Years Leadership',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
];

export const GLOBAL_LOCATIONS: LocationDetail[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh, India',
    country: 'India',
    type: 'Primary Aquaculture & Advanced Processing Complex',
    description:
      'Situated in the heart of India’s prime Vannamei shrimp aquaculture delta. Features high-volume automated IQF lines, ELISA testing laboratories, and force-convection steam cooking.',
    capabilities: [
      'Automated IQF flash freezing with zero dehydration loss',
      'Full ELISA antibiotic and microbiological screening lab',
      'Individual quick freeze capacity over 150 metric tons/day',
      'Direct farm-to-processing transport within 2 hours of harvest',
    ],
    coordinates: { x: 70, y: 56 },
    specs: {
      workforce: '2,200+ Team Members',
      certifications: 'BAP 4-Star · BRCGS AA · IFS · HACCP',
      focus: 'Aquaculture Harvest, Primary Processing & IQF',
    },
  },
  {
    id: 'new-jersey',
    name: 'New Jersey, USA',
    country: 'United States',
    type: 'Commercial Headquarters & Culinary Innovation Center',
    description:
      'Located in the New York metropolitan corridor. Houses our corporate management, commercial sales teams, sensory tasting kitchens, and rapid packaging prototyping suites.',
    capabilities: [
      'Custom culinary sauce & seasoning blending laboratory',
      'Client sensory evaluation & live recipe demonstrations',
      'National retail sales & account executive headquarters',
      'Rapid prototype packaging and nutritional analysis',
    ],
    coordinates: { x: 28, y: 40 },
    specs: {
      workforce: '180+ Specialists',
      certifications: 'USDA Inspected · SQF Level 3 · FDA Registered',
      focus: 'Culinary Formulation, Private Label R&D & Sales',
    },
  },
  {
    id: 'pennsylvania',
    name: 'Pennsylvania, USA',
    country: 'United States',
    type: 'Advanced Value-Added Processing & Cold Distribution Hub',
    description:
      'Modern automated multi-temperature facility in northeastern Pennsylvania. Executes recipe assembly, sauce pouching, skillet meal kit blending, and national logistics distribution.',
    capabilities: [
      'Multi-component automated meal kit assembly conveyors',
      'High-speed nitrogen flush and MAP packaging technology',
      '10,000+ pallet multi-temp cold storage warehouse',
      '48-hour domestic freight coverage to 70% of US population',
    ],
    coordinates: { x: 29, y: 39 },
    specs: {
      workforce: '450+ Technicians',
      certifications: 'BRCGS Food Certified · Organic Handler · FDA',
      focus: 'Value-Added Meal Kits & North American Distribution',
    },
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'career-pathways-jose-thomas',
    category: 'Corporate',
    title: 'Career Pathways – Jose Thomas of Choice Foods',
    date: 'February 18, 2026',
    readTime: '6 min read',
    author: 'Editorial Desk',
    excerpt:
      'A deep exploration of three generations of ethical food entrepreneurship, modernizing seafood aquaculture, and cultivating lifelong career opportunities across India and the United States.',
    content:
      'Jose Thomas reflects on transforming Choice Group into an international food powerhouse while honoring the founding principles established by his father in 1953. "We realized early on that food processing isn’t merely about refrigeration equipment; it is fundamentally about the pride, dignity, and career ascension of the thousands of people who steward each batch."',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'masterclass-fearless-educator',
    category: 'Education & Community',
    title: 'Masterclass with Fearless Educator',
    date: 'January 14, 2026',
    readTime: '5 min read',
    author: 'Choice Foundation',
    excerpt:
      'How The Choice School in Kerala is redefining progressive K-12 education through arts integration, STEM discovery labs, and world-class athletic centers.',
    content:
      'Under the auspices of the Choice Foundation, The Choice School has grown from a humble 43-student schoolhouse into a world-recognized educational ecosystem preparing young minds for premier international universities and civic leadership.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'from-43-students-to-3800-dreams',
    category: 'Education & Community',
    title: 'From 43 Students to 3,800 Dreams: The Choice School Story',
    date: 'November 29, 2025',
    readTime: '8 min read',
    author: 'Community Initiatives',
    excerpt:
      'The story behind Jose Thomas’s lifelong investment in youth development, providing scholarships, digital learning access, and modern boarding facilities.',
    content:
      'When Jose Thomas founded The Choice School in 1991, critics questioned why a seafood exporter would invest millions into school infrastructure. Today, with more than 4,000 alumni across Google, MIT, Oxford, and public medicine, the initiative stands as our proudest social legacy.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'choice-canning-first-india-member-gsa',
    category: 'Industry & Sustainability',
    title: 'Choice Canning Becomes First India-Based Corporate Member of GSA',
    date: 'October 12, 2025',
    readTime: '4 min read',
    author: 'Global Seafood Alliance',
    excerpt:
      'Historic milestone as Choice Foods joins the Global Seafood Alliance as a corporate member, cementing industry leadership in social accountability and environmental metrics.',
    content:
      'The Global Seafood Alliance recognized Choice Canning for pioneering transparent farmer-direct contracts, comprehensive worker welfare audits, and 4-Star BAP certifications across hatcheries, feed mills, farms, and processing facilities.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'next-gen-skillet-meal-kits',
    category: 'Culinary Innovation',
    title: 'Expanding Culinary Innovation: Next-Generation Meal Kit Lines',
    date: 'September 04, 2025',
    readTime: '5 min read',
    author: 'R&D Kitchens',
    excerpt:
      'How our Pennsylvania facility is producing restaurant-quality 10-minute skillet meals meeting surging consumer demand for authentic, high-protein seafood dinners.',
    content:
      'Consumers desire fresh seafood flavors with foolproof ease. Our new automated nitrogen-dosed skillet kits allow retail grocery partners to offer culinary favorites like Garlic Butter Shrimp Scampi and Coconut Curry Prawns with 12-month freezer stability.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sustainable-cold-chain-logistics',
    category: 'Industry & Sustainability',
    title: 'Sustainable Cold Chain Logistics in North America',
    date: 'August 19, 2025',
    readTime: '4 min read',
    author: 'Logistics Division',
    excerpt:
      'Route optimization, multi-temperature rail intermodal partnerships, and 100 MW solar microgrids transforming freight efficiency.',
    content:
      'By linking deepwater port arrivals in Philadelphia and New York directly with our Pittston distribution centers via electrified rail transfer, Choice Foods has reduced supply chain carbon intensity by 28% over the past two years.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
  },
];
