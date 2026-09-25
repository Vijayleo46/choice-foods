// Authentic media and copy extracted directly from https://choicefoodsgroup.com/

export interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  description: string;
  video: string;
  poster: string;
  image: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface PressArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  description: string;
  image: string;
  linkText: string;
}

export const HOME_HERO = {
  videoUrl: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/Sequence-05-web.mp4",
  posterUrl: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg",
  localPoster: "/assets/reference/hero-poster.jpg",
  headline: "Choice Foods is a purpose-driven global food company that creates high-quality, responsibly sourced food products while investing deeply in the people and communities who make our work possible.",
  eyebrow: "GLOBAL FOOD & SEAFOOD ENTERPRISE",
  scrollCta: "SCROLL TO EXPLORE",
  established: "SINCE 1953"
};

export const HOME_FAMILY_OWNED = {
  eyebrow: "FAMILY OWNED & OPERATED",
  lead: "Choice Foods is a global food company producing high-quality frozen shrimp products and meal kits, grounded in three generations of family ownership.",
  body: "We combine innovative processing technologies with a team-focused operational approach — investing in the people and communities who make our work possible. The result is a company built to deliver excellence in products and service.",
  ctaText: "ABOUT CHOICE FOODS",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg",
  stats: [
    { value: "3", label: "GENERATIONS", detail: "Continuous family ownership and hands-on governance" },
    { value: "1953", label: "FOUNDED", detail: "Over seven decades of seafood processing leadership" },
    { value: "100%", label: "CHAIN OF CUSTODY", detail: "Direct traceability from aquaculture harvest to retail table" }
  ]
};

export const HOME_CAPABILITIES: CapabilityItem[] = [
  {
    id: "value-added",
    num: "01",
    title: "VALUE ADDED",
    description: "We produce a wide range of value-added seafood products designed for today’s retail and foodservice environments – from convenient ready-to-cook meals to fully prepared offerings. Our focus is on consistency and quality in products to meet the needs of today’s discerning markets.",
    video: "https://choicefoodsgroup.com/wp-content/uploads/2026/02/15s-cut-1-web.mp4",
    poster: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg"
  },
  {
    id: "recipe-development",
    num: "02",
    title: "RECIPE DEVELOPMENT",
    description: "Our global team works closely with retailers and foodservice distributors to develop products that align with regional customer preferences, achieve pricing targets, and leverage category opportunities. From concept through production, we help bring new products to market with speed and precision.",
    video: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/5065327-hd_1280_720_24fps.mp4",
    poster: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ef01e4d2f9d2b79f9033916feac1408a2edc695e-819x1024.avif",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ef01e4d2f9d2b79f9033916feac1408a2edc695e.avif"
  },
  {
    id: "private-label",
    num: "03",
    title: "PRIVATE LABEL",
    description: "We are a trusted private label partner to retailers across North America, producing customized programs across multiple categories, including co-packing and co-manufacturing. Our integrated approach allows for flexibility in product design and development, competitive pricing, and long-term program growth.",
    video: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/5488002-hd_1280_720_50fps.mp4",
    poster: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/b6580a0acc31478da5d4369e29e26070f510fdf3-683x1024.avif",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/b6580a0acc31478da5d4369e29e26070f510fdf3.avif"
  }
];

export const HOME_GLOBAL_PRESENCE = {
  eyebrow: "STRATEGIC FOOTPRINT",
  title: "GLOBAL PRESENCE. LOCAL IMPACT.",
  description: "Choice Foods operates across an international sourcing, production, and distribution network – supporting partners at scale and staying closely aligned to market needs.",
  ctaText: "LEARN MORE ABOUT OUR NETWORK",
  images: [
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods1-768x1177.avif",
      caption: "Coastal Aquaculture Harvest",
      location: "Andhra Pradesh, India"
    },
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods2-768x1151.avif",
      caption: "Cryogenic IQF Freezing Tunnel",
      location: "Kochi, Kerala"
    },
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods3-768x1092.avif",
      caption: "Pristine Brackish Water Farming",
      location: "East Coast Hub"
    },
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods4-768x1144.avif",
      caption: "Quality Assurance & ELISA Lab",
      location: "Technical Center"
    },
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods5-768x1154.avif",
      caption: "Culinary Formulation & Blending",
      location: "Jersey City, NJ"
    },
    {
      url: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/choice-foods6-768x1156.avif",
      caption: "Automated Skillet Packaging Line",
      location: "Pittston, PA"
    }
  ]
};

export const HOME_IMPACT: {
  eyebrow: string;
  title: string;
  description: string;
  stories: ImpactStory[];
} = {
  eyebrow: "OUR IMPACT",
  title: "A PURPOSE-DRIVEN GLOBAL SEAFOOD COMPANY",
  description: "Beyond producing world-class food, we operate with an enduring commitment to dignity in the workplace, educational philanthropy, and sustainable ecosystems.",
  stories: [
    {
      id: "workplaces",
      title: "BUILDING SAFE, SUPPORTIVE WORKPLACES",
      description: "Our workforce programs focus on safety, access, and day-to-day wellbeing across our facilities. Providing healthcare, clean housing, and stable multi-generational career progression.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/da5ba5f23c8f7fde5c095e0926b2d65873bfcf25-1250x748.avif",
      category: "WORKFORCE WELLBEING"
    },
    {
      id: "education",
      title: "INVESTING IN EDUCATIONAL OPPORTUNITIES IN INDIA",
      description: "Our education initiatives support schooling and foundational learning for youth in Kerala through The Choice School, empowering thousands of students to achieve their potential.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/b7482f30a7822868d2ce3f35f305c89691a2608c.avif",
      category: "THE CHOICE FOUNDATION"
    },
    {
      id: "accountability",
      title: "LONG-TERM ACCOUNTABILITY",
      description: "Maintaining strict adherence to BRCGS Grade AA standards, BAP 4-Star aquaculture certifications, and uncompromised food safety testing at every link in our value chain.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/f47032434dbebcc0275d2624cb3c646d8f62bea8-1024x529.avif",
      category: "CERTIFIED STANDARDS"
    }
  ]
};

export const HOME_PRESS: {
  eyebrow: string;
  title: string;
  articles: PressArticle[];
} = {
  eyebrow: "MEDIA & PERSPECTIVES",
  title: "PRESS & NEWS",
  articles: [
    {
      id: "jose-thomas-aquademia",
      title: "Career Pathways – Jose Thomas of Choice Foods",
      source: "Global Seafood Alliance",
      date: "August 4th, 2026",
      description: "Entrepreneur Jose Thomas of Choice Canning Co. joined the Aquademia crew to share the story of his career, building an international food enterprise, and pioneering IQF processing.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/08/JoseThomas2.avif",
      linkText: "READ PODCAST FEATURE"
    },
    {
      id: "fearless-educator",
      title: "Masterclass with Fearless Educator",
      source: "Choice Foundation & Arts",
      date: "June 2026",
      description: "Choice School leadership hosting global educators and innovators to foster creative learning, performing arts, and progressive child development in southern India.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/Screenshot-2026-06-09-at-2.37.34-PM-1024x554.avif",
      linkText: "EXPLORE THE MASTERCLASS"
    },
    {
      id: "3800-dreams",
      title: "From 43 Students to 3,800 Dreams",
      source: "Community Impact Chronicle",
      date: "May 2026",
      description: "Tracing the historic journey of The Choice School from a modest beginning with 43 pupils to an internationally recognized institution educating over 3,800 children.",
      image: "https://choicefoodsgroup.com/wp-content/uploads/2026/08/Aquademia_Website-2048x1704-1-1024x852.avif",
      linkText: "READ FULL CHRONICLE"
    }
  ]
};

export const HOME_PARTNERSHIPS = {
  eyebrow: "PARTNERSHIPS",
  heading: "A history of integrity and thoughtful investment.",
  body: "We partner with retailers, distributors, and foodservice operators to develop and deliver thoughtful seafood programs. Whether you’re exploring private label, new product development, or direct supply chain optimization, our team is ready.",
  ctaText: "PARTNER WITH US"
};
