export interface GlobalPresenceLocation {
  number: string;
  location: string;
  facility: string;
  details: string;
  coordinates: { lat: number; lng: number };
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface PartnerStoryItem {
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
}

export interface LearnMoreItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  path: string;
}

export const PARTNER_HERO = {
  eyebrow: 'PARTNERSHIPS',
  headline: 'PARTNER WITH US',
  subheading: 'A history of integrity and thoughtful investment.',
  description:
    'We partner with retailers, distributors, and foodservice operators to develop and deliver high-performing seafood programs. Whether you’re exploring private label, product development, or long-term supply, our team works closely to understand your goals and build the right approach.',
  image: '/assets/partner/tastee-choice-40-683x1024.avif',
  alt: 'Choice Foods seafood culinary preparation and premium packaging',
};

export const GLOBAL_PRESENCE_LOCATIONS: GlobalPresenceLocation[] = [
  {
    number: '01',
    location: 'Andhra Pradesh, India',
    facility: 'Raw & Cooked Facilities',
    details: 'Bapatla, AP & Cochin Innovation Hub — Integrated automated shrimp processing, ELISA lab testing, and cold storage.',
    coordinates: { lat: 15.9039, lng: 80.4671 },
  },
  {
    number: '02',
    location: 'New Jersey, USA',
    facility: 'U.S. Company Headquarters',
    details: 'Newark & Jersey City, NJ — Commercial executive headquarters, culinary R&D test kitchen, and national distribution management.',
    coordinates: { lat: 40.7357, lng: -74.1724 },
  },
  {
    number: '03',
    location: 'Pennsylvania, USA',
    facility: 'Value-Added Production Facility',
    details: 'Pottstown, PA — Domestic value-added processing, meal kit packaging, frozen storage, and East Coast logistics fulfillment.',
    coordinates: { lat: 40.2454, lng: -75.6496 },
  },
];

export const PARTNERSHIP_MANIFESTO = {
  eyebrow: 'PARTNERSHIPS',
  heading: 'A history of integrity and thoughtful investment.',
  paragraph:
    'We partner with retailers, distributors, and foodservice operators to develop and deliver high-performing seafood programs. Whether you’re exploring private label, product development, or long-term supply, our team works closely to understand your goals and build the right approach.',
  pillars: [
    {
      title: 'Contract Certainty',
      description: 'Guaranteed seasonal allocations and fixed-rate pricing structures protecting retail and foodservice margins.',
    },
    {
      title: 'Co-Investment',
      description: 'Shared capital in custom pouching tooling, thermoforming dies, and automated packing lines tailored to customer specs.',
    },
    {
      title: 'Culinary Agility',
      description: 'Direct access to our executive test kitchens in New Jersey for rapid seasonal line expansions and formulation trials.',
    },
  ],
};

export const CORE_CAPABILITIES = {
  heading: 'OUR CORE CAPABILITIES',
  image: '/assets/partner/tastee-choice-40-683x1024.avif',
  alt: 'Tastee Choice seafood culinary value-added packaging and skillet meals',
  items: [
    {
      number: '01',
      title: 'Value Added',
      description:
        'We produce a wide range of value-added seafood products designed for today’s retail and foodservice environments – from ready-to-cook meals to fully prepared offerings. Our focus is on consistency, efficiency, and products that perform on shelf and in-market.',
    },
    {
      number: '02',
      title: 'Recipe Development',
      description:
        'Our team works closely with partners to develop products that align with customer preferences, pricing targets, and category opportunities. From concept through production, we help bring ideas to market with speed and precision.',
    },
    {
      number: '03',
      title: 'Private Label',
      description:
        'We are a trusted private label partner to retailers across North America, producing customized programs at scale across multiple categories, including co-packing and co-manufacturing. Our integrated approach allows for flexibility, competitive pricing, and long-term program growth.',
    },
  ],
};

export const PURPOSE_DRIVEN_COMPANY = {
  heading: 'A purpose-driven global seafood company.',
  image: '/assets/partner/da5ba5f23c8f7fde5c095e0926b2d65873bfcf25-1-1250x748.avif',
  alt: 'Pristine coastal aquaculture farms and sustainable seafood sourcing',
  ctaText: 'OUR IMPACT',
  ctaLink: '/impact',
};

export const PARTNER_CASE_STUDIES: PartnerStoryItem[] = [
  {
    number: '01',
    title: 'Inside the Value-Added Facility',
    description:
      'A look inside the Choice Foods value-added facility transforming the global frozen seafood category.',
    tag: 'FACILITY SPOTLIGHT',
    image: '/assets/partner/f47032434dbebcc0275d2624cb3c646d8f62bea8-1024x529.avif',
    alt: 'High-tech seafood cleanrooms and automated sorting line inside Choice Foods facility',
  },
  {
    number: '02',
    title: 'Recipes for the Modern Family',
    description:
      'Reimagining shrimp for the at-home cook with the Choice Foods chefs\' team.',
    tag: 'CULINARY R&D',
    image: '/assets/partner/b7482f30a7822868d2ce3f35f305c89691a2608c.avif',
    alt: 'Choice Foods executive chef testing recipe formulations and pan-seared skillet sauces',
  },
  {
    number: '03',
    title: 'Designing a Retailer’s Private Label',
    description:
      'A national grocer wanted a frozen seafood line under their own brand. Here is how the team brought it to shelf in nine months.',
    tag: 'PRIVATE LABEL',
    image: '/assets/partner/kevin-mccutcheon-APDMfLHZiRA-unsplash-776x1024.avif',
    alt: 'Retail grocery freezer aisle featuring private label Choice Foods frozen seafood products',
  },
];

export const TYPOGRAPHIC_BREAK = {
  quote: 'A HISTORY OF INTEGRITY AND THOUGHTFUL INVESTMENT.',
  subline: 'Over five decades of reliable vertical integration, culinary leadership, and quiet accountability.',
};

export const FINAL_PARTNERSHIP_CTA = {
  eyebrow: 'PARTNERSHIPS',
  heading: 'A history of integrity and thoughtful investment.',
  paragraph:
    'We partner with retailers, distributors, and foodservice operators to develop and deliver thoughtful seafood programs. Whether you’re exploring private label, new product development, or long-term supply, our seasoned team of professionals works closely to understand your goals and build the right approach.',
};

export const PARTNER_INQUIRY_OPTIONS = [
  'Private Label Programs',
  'Value-Added Seafood Offerings',
  'Recipe & Product Development',
  'Long-Term Supply & Co-Packing',
  'Retail & Foodservice Distribution',
];

export const LEARN_MORE_PARTNER: LearnMoreItem[] = [
  {
    id: 'about',
    eyebrow: 'ABOUT CHOICE',
    title: 'Our People, Places, & Process',
    description: 'Explore our multi-generational family leadership, global manufacturing footprint, and world-class testing standards.',
    cta: 'Learn About Us',
    path: '/about',
  },
  {
    id: 'capabilities',
    eyebrow: 'CAPABILITIES',
    title: 'Value Added Products',
    description: 'Inspect our complete processing capabilities, IQF blast freezing lines, and private label co-packing operations.',
    cta: 'Explore Capabilities',
    path: '/capabilities',
  },
  {
    id: 'press',
    eyebrow: 'PRESS & NEWS',
    title: 'Read Our Latest',
    description: 'Read media features on our executive team, aquaculture milestones, and international category growth.',
    cta: 'Read Coverage',
    path: '/press',
  },
];
