// Authentic data extracted directly from https://choicefoodsgroup.com/about/ and /people/*

export interface CoreValueItem {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  detailPoints: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  detail: string;
  era: string;
}

export interface LeaderProfile {
  id: string;
  num: string;
  slug: string;
  name: string;
  role: string;
  url: string;
  image: string;
  localImage?: string;
  department: string;
  summary: string;
  paragraphs: string[];
  meta?: {
    location?: string;
    focus?: string;
    experience?: string;
  };
}

export const ABOUT_HERO = {
  eyebrow: "OUR STORY",
  title: "ABOUT CHOICE",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06050-copy-1250x806.avif",
  alt: "Choice Foods Group - Artisanal seafood harvest and processing heritage",
  scrollText: "EXPLORE OUR STORY"
};

export const ABOUT_MISSION = {
  eyebrow: "OUR MISSION",
  heading: "A FAMILY-OWNED GLOBAL FOOD COMPANY",
  lead: "Choice Foods is a family-owned global food company focused on producing high-quality frozen seafood and meal kits.",
  body: "For 3 generations, the company has built its business by actively engaging in each link of the value chain from the farm and fishermen to the plate, investing in facilities, teams and communities.",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/74056dc48cdfbc2bae83086e849b0883a8ff9238-1250x646.avif",
  statNumber: "3",
  statLabel: "GENERATIONS OF STEWARDSHIP"
};

export const ABOUT_PEOPLE = {
  eyebrow: "01 / HUMAN CAPABILITY",
  heading: "OUR PEOPLE",
  body: "Our work is made possible by the people behind it—teams across our facilities worldwide who bring consistency, care, and experience to everything we produce. We invest in creating environments where people are supported, trained, and able to build stable careers and long-term livelihoods.",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/74056dc48cdfbc2bae83086e849b0883a8ff9238-1250x646.avif",
  alt: "Choice Foods production team and staff in modern facilities",
  badge: "3,000+ EMPLOYEES GLOBALLY"
};

export const ABOUT_PLACES = {
  eyebrow: "02 / GLOBAL FOOTPRINT",
  heading: "OUR PLACES",
  body: "Our operations are rooted in key production hubs in India and the United States, allowing us to stay closely connected to both sourcing regions and end markets. These locations give us the ability to operate with consistency, responsiveness, and scale.",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg",
  alt: "Choice Foods modern industrial facility exterior",
  hubs: [
    {
      country: "INDIA",
      locations: "Andhra Pradesh & Kerala",
      role: "Pristine Aquaculture Sourcing & Primary Cold Chain Processing",
      coordinates: { x: 72, y: 55 }
    },
    {
      country: "UNITED STATES",
      locations: "New Jersey & Pennsylvania",
      role: "Rapid-Response Meal Kit Blending, Packaging & National Distribution",
      coordinates: { x: 28, y: 38 }
    }
  ]
};

export const ABOUT_PROCESS = {
  eyebrow: "03 / DISCIPLINE & SCIENCE",
  heading: "OUR PROCESS",
  body: "We take a hands-on approach to production—focused on quality control, traceability, and disciplined execution at every stage. This approach allows us to deliver products our partners can rely on, again and again.",
  pillars: [
    { title: "QUALITY CONTROL", desc: "Rigorous lot-level microbiology and continuous laboratory verification before release." },
    { title: "TRACEABILITY", desc: "Full pond-to-table lineage tracking every container, harvest pond, and ingredient." },
    { title: "DISCIPLINED EXECUTION", desc: "Strict adherence to international food safety regulations, BRCGS and HACCP benchmarks." },
    { title: "CONSISTENT PRODUCTION", desc: "Automated steam cooking and individual quick freezing (IQF) guaranteeing culinary texture." }
  ],
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-05983%EF%80%A1-copy-1250x754.avif",
  alt: "State of the art automated food processing and inspection lines"
};

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: "promise",
    num: "01",
    title: "DELIVERING WHAT WE PROMISE",
    description: "Consistency comes from accountability and experience. Across our facilities and teams, we maintain the standards, checks, and processes needed to deliver quality products reliably and responsibly.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/74056dc48cdfbc2bae83086e849b0883a8ff9238-1250x646.avif",
    detailPoints: [
      "Rigorous adherence to production timelines and fulfillment commitments",
      "Continuous on-site operational oversight and accountability",
      "Transparent partner communications and guaranteed specifications"
    ]
  },
  {
    id: "partnerships",
    num: "02",
    title: "DIRECT PARTNERSHIPS",
    description: "We believe strong partnerships are built through clarity and alignment. By staying closely connected to production and our business partners, we’re able to move faster, solve problems earlier, and build programs that last.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06201-copy.jpg",
    detailPoints: [
      "Direct relationships from coastal aquaculture farmers to retail buyers",
      "Collaborative culinary R&D to tailor regional consumer flavor profiles",
      "Multi-decade vendor commitments that withstand market cycles"
    ]
  },
  {
    id: "quality",
    num: "03",
    title: "HONEST QUALITY",
    description: "Quality is defined by discipline and transparency. We operate with a strong commitment to compliance, regulatory standards, and certification requirements – maintaining systems designed to ensure consistency across every product.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-05983%EF%80%A1-copy-1250x754.avif",
    detailPoints: [
      "Zero-tolerance screening for antibiotics, pathogens, and foreign matter",
      "Third-party audited certifications including BRCGS Grade AA and BAP 4-Star",
      "Total ingredient purity with uncompromised natural seafood freshness"
    ]
  },
  {
    id: "long-term",
    num: "04",
    title: "BUILT FOR THE LONG TERM",
    description: "For more than five decades and 3 generations, we’ve invested in the relationships, infrastructure, and workforce behind our business. We believe responsible growth should create long-term opportunity for the communities connected to our work.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/10-40-1024x773.avif",
    detailPoints: [
      "Sustained reinvestment into clean facilities and employee welfare housing",
      "Enduring community foundations supporting youth education in Kerala",
      "Resilient dual-continent supply chain architecture designed to endure"
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "1953",
    title: "FOUNDED IN KERALA, INDIA",
    description: "Choice begins as a family business focused on seafood processing and export, laying the foundation for decades of growth.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/10-40-1024x773.avif",
    alt: "Archival photograph of Choice Canning operations in Kerala in 1953",
    detail: "Founded by the Thomas family along the Arabian Sea coast, establishing the first cold-storage facilities in southern India.",
    era: "FOUNDATIONAL ROOTS"
  },
  {
    year: "1990s",
    title: "EARLY INNOVATION IN SHRIMP PROCESSING",
    description: "First to implement individually Quick Frozen (IQF) processes, Choice helps set new standards for consistency and scale.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/01-13-1024x665.avif",
    alt: "Industrial IQF freezing technology introduced at Choice facilities",
    detail: "Pioneered cryogenic and mechanical IQF tunnels, preventing ice-crystal damage and preserving peak ocean texture.",
    era: "TECHNOLOGY PIONEERING"
  },
  {
    year: "1995",
    title: "EXPANSION INTO LOGISTICS",
    description: "The launch of internal logistics capabilities strengthens control over distribution and improves reliability for partners.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/DSCF9898-1024x576.avif",
    alt: "Intermodal cold chain transport and logistics operations",
    detail: "Deployed proprietary reefer containers and dedicated maritime logistics corridors connecting Cochin to world ports.",
    era: "CHAIN OF CUSTODY"
  },
  {
    year: "2000s",
    title: "BUILDING PRODUCTION AT SCALE",
    description: "Choice expands its processing footprint across India, investing in facilities designed for high-volume, consistent production.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/32_Choice-Canning-Factory-02.avif",
    alt: "Aerial and interior view of the Choice Canning Factory",
    detail: "Constructed expansive processing campuses in Andhra Pradesh, neighboring major vannamei shrimp farming belts.",
    era: "SCALE & AUTOMATION"
  },
  {
    year: "2000s",
    title: "ENTERING VALUE ADDED PRODUCTS",
    description: "The business evolves beyond raw seafood into prepared and value-added products, supporting broader retail and foodservice needs.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/3e68fff80bae3e2c73a9f4c702b2d763321e79c0-819x1024.avif",
    alt: "Marinated, breaded, and seasoned gourmet seafood lines",
    detail: "Formulated chef-crafted marinades, dry rubs, and skewer products for Tier-1 North American supermarket delis.",
    era: "CULINARY DIVERSIFICATION"
  },
  {
    year: "2007",
    title: "LAUNCH OF TASTEE CHOICE",
    description: "The introduction of Tastee Choice marks a move into branded products, complementing the company’s private label expertise.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/05/tastee-choice-meals-image_3.avif",
    alt: "Tastee Choice frozen skillet meals and gourmet pasta bowls",
    detail: "Created restaurant-quality skillet meals featuring al dente pasta, flash-frozen vegetables, succulent seafood, and savory sauces.",
    era: "BRAND INNOVATION"
  },
  {
    year: "2020s",
    title: "U.S. PRODUCTION EXPANSION",
    description: "Investment in U.S.-based production capabilities brings operations closer to key customers and end markets.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/DSCF9890.jpg",
    alt: "United States advanced packaging and blending facility",
    detail: "Established cold-storage and rapid meal kit assembly lines in New Jersey and Pennsylvania for next-day replenishment.",
    era: "DOMESTIC PRESENCE"
  },
  {
    year: "Today",
    title: "A GLOBAL PRODUCTION PARTNER",
    description: "Now operating across India and the United States, Choice Foods supports leading retailers and business partners with scalable, value-added seafood programs.",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/DSC00071.-copy.jpg-copy.jpg",
    alt: "Choice Foods Group modern global workforce and executive facility",
    detail: "Serving premier national grocers, club stores, and foodservice distributors with trusted private label and branded solutions.",
    era: "GLOBAL LEADERSHIP"
  }
];

export const FAMILY_OWNED_CONTENT = {
  heading: "FAMILY-OWNED AND OPERATED",
  subheading: "Since 1953 · Over 7 Decades",
  body: "Our team combines world-class production capabilities with a human-centered mission, creating products that deliver both value and impact.",
  dataPoint: "3 GENERATIONS",
  dataSubtext: "of direct family stewardship across coastal farms, processing hubs, and international trade.",
  image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/10-40-1024x773.avif"
};

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: "01",
    num: "01",
    slug: "jose-thomas",
    name: "Jose Thomas",
    role: "Chief Executive Officer (CEO)",
    url: "https://choicefoodsgroup.com/people/jose-thomas/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_Jose_001-819x1024.avif",
    localImage: "/assets/people/01-jose-thomas.avif",
    department: "Executive Leadership",
    summary: "Visionary CEO and second-generation steward who pioneered India's first IQF seafood processing and established global private label and branded lines.",
    meta: {
      location: "Kochi, India",
      focus: "Group Vision, Governance & International Trade",
      experience: "47+ Years in Food Enterprise"
    },
    paragraphs: [
      "Jose Thomas began his entrepreneurship at the young age of 17. Born in Cochin, India as the 10th child of O. C. Thomas, partner of Choice Canning Company, he entered the family seafood business on the demise of his father.",
      "In 1979 he commenced operations of Choice from leased premises after his brothers retired from partnership. He not only opened an office in New York but also set up India’s first state-of-the-art shrimp processing plant using IQF technology, exporting ready to eat shrimp for leading US companies. He went on to set up a modern seafood processing plant at Nellore, Andhra Pradesh for Value Added Products.",
      "On the shipping front, he added many a new shipping line to his fold, Maldives Shipping, US lines, Ceylon Shipping Corporation and was appointed the South India Agent of Hyundai Merchant Marine, the Korean shipping giant and is also the South India agent for Jindal Waterways Ltd.",
      "In 1990 he was inspired to promote quality education and thus began Choice School at Tripunithura, Cochin. It is now one of the highest ranked educational institutions in India with alumni that stud the domestic and international arena in all walks of life.",
      "A setback in the failure of launching Choice Airlines, a private airline set him thinking and he decided to use it as a stepping stone to something bigger—‘Tastee Choice’, a retail brand across the United States. Tastee Choice offers Value Added Products as well as Meal Kits and is now one of the most popular brands, overrunning close competitors within a year of operations.",
      "His Choice Constructions introduced the concept of High Rise living and Gated Colonies with prestigious projects like Choice Towers, Choice Park, Choice Village and now Choice Marina and Choice Paradise, which has the distinction of being the tallest building in South India with 40 floors.",
      "An ardent lover of music and the arts, Jose Thomas pays tribute to performers and performances through JTPac—the Jose Thomas Performing Arts Center which saw in its very first year of inception, great names like Pt. Ravi Shankar, A.R. Rehman, Danseuse Shobhana, Osibisa, Ustad Amjad Ali Khan and many other luminaries from all over the world perform. JTPac continues to entertain audiences with sterling performances.",
      "Jose Thomas and his wife Elizabeth are the proud parents of 5 children, Anna, Thomas, Maria, Jacob and Elsa. Not one to rest on his laurels, the effervescent Jose Thomas has much more in store."
    ]
  },
  {
    id: "02",
    num: "02",
    slug: "alok-modani",
    name: "Alok Modani",
    role: "Chief Financial Officer (CFO)",
    url: "https://choicefoodsgroup.com/people/alok-modani/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_ALOK_001-819x1024.avif",
    localImage: "/assets/people/02-alok-modani.avif",
    department: "Finance & Administration",
    summary: "Oversees the Group's operations across the United States, Canada, and Europe, leading finance, accounting, and capital structure.",
    meta: {
      location: "Jersey City, NJ",
      focus: "Financial Strategy, Capital Structure & Global Compliance",
      experience: "20+ Years in Enterprise Finance"
    },
    paragraphs: [
      "Alok Modani is Chief Financial Officer of Choice Canning Co., part of the Choice Group, where he oversees the Group’s operations across the United States, Canada, and Europe and leads its finance, accounting, and administration functions. He is responsible for financial strategy, capital structure, long-term investment planning, and supporting the Group’s continued growth across its verticals. His experience spans more than two decades across enterprise technology, food, and consumer products, with expertise in equipment and facility financing, multi-site investment planning, trade compliance, and supply-chain finance.",
      "Alok is a Chartered Accountant and lawyer qualified in India and holds an MBA and CPA qualification in the United States, along with an undergraduate degree in Accounting. His combined expertise in accounting, law, and finance across India and North America complements Choice’s international operations and its longstanding relationships across global supply chains.",
      "Beyond his professional accomplishments, Alok Modani is a dedicated community leader and active member of the Maheshwari community. He currently serves as National Treasurer and is the Past President of the Maheshwari Mahasabha of North America (MMNA) NE, where he has been instrumental in promoting cultural initiatives, philanthropic activities, and community development.",
      "Based in New Jersey with his wife, Shruti, and their two sons, Alok loves to travel and has a strong passion for sports, particularly cricket, tennis, pickleball, and volleyball. He values staying connected to his community and believes that professional success is most meaningful when accompanied by a commitment to family, relationships, and giving back.",
      "Alok is committed to ensuring that Choice continues to invest thoughtfully in its people, facilities, and business partners while upholding the values, entrepreneurial spirit, and long-term perspective that have guided the family-owned business since 1953."
    ]
  },
  {
    id: "03",
    num: "03",
    slug: "thomas-jose",
    name: "Thomas Jose",
    role: "Director, Global Operations",
    url: "https://choicefoodsgroup.com/people/thomas-jose/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_Thomas_002-819x1024.avif",
    localImage: "/assets/people/03-thomas-jose.avif",
    department: "Global Operations",
    summary: "Oversees large-scale processing facilities, cold-chain operations, and international retail partnerships including Aldi UK.",
    meta: {
      location: "Kochi & Andhra Pradesh, India",
      focus: "Processing Operations, Quality Systems & European Retail",
      experience: "16+ Years in Global Operations"
    },
    paragraphs: [
      "Thomas Jose, the eldest son of Mr. Jose Thomas, earned his Bachelor of Arts (B.A.) from Rutgers, The State University of New Jersey, in 2008.",
      "After graduating, Thomas returned to India and joined the Construction Wing of The Choice Group. He was entrusted with overseeing the administration and sales of Choice Paradise, a landmark residential skyscraper in Tripunithura, Kochi, Kerala.",
      "At the time, Choice Paradise, comprising 40 floors and rising to a height of 137 metres, was the tallest building in Kerala. The landmark project was completed in 2012.",
      "Following his work on Choice Paradise, Thomas was entrusted with overseeing the completion and sales of Choice Marina, a premium residential condominium project situated along the picturesque backwaters of Kochi. Set amid swaying palms and overlooking the region’s tranquil waters, Choice Marina was conceived as an exclusive development offering refined living, luxury, and a distinctive waterfront lifestyle. Thomas played an important role in guiding the project through its completion and supporting its sales operations.",
      "As seafood is one of The Choice Group’s core businesses, Thomas subsequently moved to the Group’s IQF (Individually Quick Frozen) seafood processing facility in Kochi.",
      "Under the guidance of his father, Mr. Jose Thomas, he received comprehensive training across all major functions of the seafood business. His experience encompassed the entire operational cycle, including raw-material procurement, production, quality control, processing operations, and sales.",
      "Thomas is currently responsible for overseeing operations at the newly established seafood processing plant in Bapatla, Andhra Pradesh. In this capacity, he monitors the plant’s performance and ensures that production and related activities are carried out efficiently.",
      "Thomas also played an instrumental role in establishing The Choice Group’s business relationship with Aldi UK. Since its inception, the relationship has continued to grow steadily, contributing to the expansion of the Group’s international seafood business.",
      "His involvement in developing and strengthening this relationship reflects his commitment to international business development, strong customer partnerships, and sustainable growth."
    ]
  },
  {
    id: "04",
    num: "04",
    slug: "jacob-jose",
    name: "Jacob Jose",
    role: "Commercial Director, USA",
    url: "https://choicefoodsgroup.com/people/jacob-jose/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_JACOB_003-819x1024.avif",
    localImage: "/assets/people/04-jacob-jose.avif",
    department: "Commercial & Sales",
    summary: "Leads North American commercial strategy, supermarket grocery retail accounts, club store programs, and national distributor relationships.",
    meta: {
      location: "Jersey City, NJ",
      focus: "U.S. Commercial Growth, Retail Programs & Distribution",
      experience: "Third-Generation Executive Leadership"
    },
    paragraphs: [
      "Jacob Jose serves as Commercial Director, USA for Choice Foods Group, directing commercial strategy, retailer partnerships, and nationwide seafood program distribution across the North American market.",
      "Working directly with leading grocery supermarket chains, club store operators, and national foodservice distributors, Jacob focuses on developing customized private label programs and scaling Choice Foods' branded value-added product lines including skillet meals and artisan shrimp presentations.",
      "His work bridges production capabilities with fast-moving retail category demands, ensuring customer specifications, packaging formats, and delivery timelines consistently exceed industry standards while fostering long-term supply chain partnerships grounded in three generations of family stewardship."
    ]
  },
  {
    id: "05",
    num: "05",
    slug: "anna-jose",
    name: "Anna Jose",
    role: "Sales and Marketing",
    url: "https://choicefoodsgroup.com/people/anna-jose/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_ANNA_002-e1788531067910-813x1024.avif",
    localImage: "/assets/people/05-anna-jose.avif",
    department: "Sales & Marketing",
    summary: "Head of Sales and Marketing, combining over two decades of brand strategy with workforce empowerment initiatives for women.",
    meta: {
      location: "Kochi, India & Global",
      focus: "Brand Strategy, Customer Relations & Women's Empowerment",
      experience: "20+ Years in Seafood Marketing"
    },
    paragraphs: [
      "Anna Jose, the eldest daughter of Mr. Jose Thomas, is the Head of Sales and Marketing. She has built her career from the ground up since joining the company immediately after college. Over more than two decades, she has grown alongside the business and played an integral role in shaping its continued growth and vision.",
      "Working within a family-owned enterprise has given Anna the opportunity to contribute across sales, marketing, business development, and brand strategy. Throughout her career, she has brought creativity, fresh ideas, and new perspectives to the business while strengthening customer relationships and expanding the company’s market presence.",
      "A meaningful part of Anna’s leadership journey has been her commitment to creating opportunities for women within the workforce. Her experience in the seafood industry has given her a firsthand understanding of the importance of empowering women through meaningful employment, financial independence, skills development, and leadership opportunities. She is passionate about fostering an environment where women can build confidence, develop their talents, and contribute to the growth of their families and communities.",
      "Anna believes that business success and social impact can—and should—go hand in hand. She is passionate about combining creativity, entrepreneurship, and purpose to build strong businesses while creating lasting opportunities for the people and communities around them."
    ]
  },
  {
    id: "06",
    num: "06",
    slug: "nithin-poulose",
    name: "Nithin Poulose",
    role: "Vice President of Operations",
    url: "https://choicefoodsgroup.com/people/nithin-poulose/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_NITHIN_003-819x1024.avif",
    localImage: "/assets/people/06-nithin-poulose.avif",
    department: "Operations & Engineering",
    summary: "Accomplished executive with 16+ years across food manufacturing, engineering automation, global supply chain, and regulatory compliance.",
    meta: {
      location: "Kochi & Andhra Pradesh, India",
      focus: "Manufacturing Automation, Supply Chain & ERP Systems",
      experience: "16+ Years in Food Manufacturing"
    },
    paragraphs: [
      "Nithin Poulose is an accomplished business executive with more than 16 years of experience in the food manufacturing industry, combining a strong foundation in finance and business with extensive hands-on operational leadership.",
      "A Bachelor of Commerce graduate, Nithin began his professional career with Ernst & Young, where he gained valuable experience in finance, business processes, and corporate operations. He also holds a Commercial Pilot License, an achievement that reflects the discipline, technical aptitude, and attention to detail that have carried throughout his professional career.",
      "For the past 16 years, Nithin has been an integral part of Choice Canning Company, developing broad expertise across virtually every aspect of the business. His experience spans manufacturing operations, global supply chain and procurement, food safety, quality and regulatory compliance, research and development, new product development, engineering, production automation, ERP systems, and sales.",
      "With a deep understanding of both the technical and commercial sides of food manufacturing, Nithin has played a key role in building scalable operations, improving manufacturing capabilities, developing innovative products, strengthening global sourcing, and implementing systems and automation to support continued growth.",
      "Outside of business, he has a passion for aviation and boxing, a pursuit that has strengthened his discipline, focus, resilience and ability to manage stress – qualities he carries into both his professional and personal life. His multidisciplinary background and hands-on leadership approach allow him to bridge operations, technology, product development, and commercial strategy—turning ideas into products and operational challenges into practical, scalable solutions."
    ]
  },
  {
    id: "07",
    num: "07",
    slug: "tom-domino",
    name: "Tom Domino",
    role: "Chief Operating Officer (COO)",
    url: "https://choicefoodsgroup.com/people/tom-domino/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_TOM_001-819x1024.avif",
    localImage: "/assets/people/07-tom-domino.avif",
    department: "Executive Operations",
    summary: "Oversees strategy, sales, marketing, and operations across the company's North American portfolio of private-label and branded foods.",
    meta: {
      location: "Jersey City, NJ",
      focus: "Executive Operations, Retail Merchandising & Sourcing Strategy",
      experience: "25+ Years in Food Retail & Seafood"
    },
    paragraphs: [
      "Tom Domino is Chief Operating Officer of Choice Foods Group, overseeing strategy, sales, marketing, and operations across the company’s North American portfolio of private-label and branded foods.",
      "Before joining Choice Foods Group, Tom built extensive experience in food retail and seafood through a series of leadership roles at Wakefern Food Corporation. As Global Sourcing Manager for Seafood, he was responsible for category strategy, sales, sourcing, and procurement. He previously served as a Perishable Merchandising Consultant at Wakefern and held store leadership positions with Kings Supermarkets, developing a strong foundation in merchandising and multi-unit retail operations.",
      "Tom holds a Master of Business Administration from Fairleigh Dickinson University and completed Cornell University’s Executive Food Management Program, with a focus on food retail. He has contributed to numerous industry panels, including those hosted by FMI, and has served as an advisory board member for USSEC and the Food Bank of New Jersey.",
      "His expertise in seafood procurement, category management, and retail operations directly supports Choice Foods Group’s vertically integrated business model. Outside of work, his interests include family, food, travel, golf, and history."
    ]
  },
  {
    id: "08",
    num: "08",
    slug: "moe-cheramie",
    name: "Moe Cheramie",
    role: "Vice President of Sales",
    url: "https://choicefoodsgroup.com/people/moe-cheramie/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_Moe_002-819x1024.avif",
    localImage: "/assets/people/08-moe-cheramie.avif",
    department: "Commercial & Sales",
    summary: "Veteran sales executive with 37+ years in seafood and frozen prepared foods, specializing in skillet meal category growth.",
    meta: {
      location: "Jersey City, NJ",
      focus: "Skillet Meals Category, Retail Strategy & National Broker Networks",
      experience: "37+ Years in Frozen Foods Sales"
    },
    paragraphs: [
      "Moe Cheramie is a veteran sales executive with more than 37 years of experience in the seafood and frozen prepared foods industries. He holds a degree in microbiology and served in the U.S. Army at the Walter Reed Army Institute of Research.",
      "Moe began his food-industry career as a part-owner and manager of five retail, wholesale, and catering seafood markets in Las Vegas, Dallas, Houston, New Orleans, and McLean, Virginia. He later specialized in shrimp sales to retailers as a seafood trader with Ocean to Ocean Seafood and spent three years consulting for the National Grocers Association, helping retailers build successful seafood departments.",
      "In 1989, Moe became instrumental in the growth of Chef’s Choice, an early frozen multi-serve dinner brand that helped establish the category. Following the brand’s sale to Aurora Foods in 1999, he served as Aurora’s National Brand Development Manager through 2001. He then became part-owner and Vice President of Sales for International Frozen Foods, home of the Culinary Delights brand, where he remained until the company dissolved in 2014.",
      "Since 2014, Moe has served as Vice President of Sales for Skillet Meals at Choice Foods, Inc., continuing a career defined by category expertise, brand development, retail strategy, and food-industry sales leadership."
    ]
  },
  {
    id: "09",
    num: "09",
    slug: "stephen-choppen",
    name: "Steve Choppen",
    role: "Commercial Director, UK & Europe",
    url: "https://choicefoodsgroup.com/people/stephen-choppen/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/IMG_1204-768x1024.avif",
    localImage: "/assets/people/09-stephen-choppen.avif",
    department: "International Markets",
    summary: "Brings 25+ years of European seafood leadership and retail commercial accomplishments, developing strategic partnerships across the UK and Europe.",
    meta: {
      location: "United Kingdom",
      focus: "UK & European Supermarkets, Own Label & Chilled/Frozen Seafood",
      experience: "25+ Years in UK Seafood Retail"
    },
    paragraphs: [
      "Steve Choppen joined Choice in March 2026 with the aim of developing our strategic relationships and explore new market opportunities across the UK and Europe. He has a successful and proven track record of commercial accomplishments within UK Retail and brings a wealth of Seafood expertise with him, having worked within the industry for over 25 years.",
      "In his role prior to joining Choice, Steve was Sales Director for the UK’s leading Seafood business Young’s Seafood, where he has spent most of his working career. He is a highly experienced Business leader with a verifiable track record of success in an extremely complex and challenging category. Having successfully managed both Branded and Own Label business across all of the UK’s major retailers, we saw Steve as the ideal candidate to build on Choice’s strong reputation in the US and expand our business across Europe. He brings not only commercial experience of dealing with both Frozen & Chilled Seafood, he also has extensive knowledge of the end-to-end supply chains associated with the category and his desire to do things in the right manner, his family values and personal integrity, all align with those of Choice and were mutual denominators in his appointment.",
      "Steve is based in the UK but works very closely with the teams in both India and the US as we strive to expand our breadth within Europe."
    ]
  },
  {
    id: "10",
    num: "10",
    slug: "karan-sood",
    name: "Karan Sood",
    role: "Director of Strategy and Investment",
    url: "https://choicefoodsgroup.com/people/karan-sood/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/06/ChoiceCanning_Headshots_Karan_001-819x1024.avif",
    localImage: "/assets/people/10-karan-sood.avif",
    department: "Strategy & Investment",
    summary: "Directs corporate strategy, capital allocation, facility expansion investments, and long-term joint venture evaluation for the Group.",
    meta: {
      location: "Jersey City, NJ & Global",
      focus: "Corporate Strategy, Growth Capital & Infrastructure Investment",
      experience: "Senior Strategic Leadership"
    },
    paragraphs: [
      "Karan Sood serves as Director of Strategy and Investment for Choice Foods Group, leading strategic planning, corporate development, and capital allocation across the Group’s international portfolio.",
      "He works closely with executive leadership to identify long-term growth opportunities, evaluate advanced facility investments, and optimize supply-chain infrastructure across Indian and North American operating divisions.",
      "Karan’s strategic focus reinforces Choice Foods’ commitment to responsible, multi-generational growth and modern manufacturing excellence."
    ]
  },
  {
    id: "11",
    num: "11",
    slug: "rajeev-menon",
    name: "Rajeev Menon",
    role: "Corporate Chef",
    url: "https://choicefoodsgroup.com/people/rajeev-menon/",
    image: "https://choicefoodsgroup.com/wp-content/uploads/2026/04/ChoiceCanning_Headshots_RAJEEV_001-819x1024.avif",
    localImage: "/assets/people/11-rajeev-menon.avif",
    department: "Culinary & Innovation",
    summary: "Brings over three decades of international culinary leadership, developing restaurant-grade recipes, sauce formulations, and skillet kits.",
    meta: {
      location: "Jersey City, NJ & Kochi, India",
      focus: "Recipe Formulation, Sauce Blending & Ready Meals Scale-Up",
      experience: "30+ Years International Culinary"
    },
    paragraphs: [
      "Rajeev brings over three decades of international culinary and leadership experience across luxury hospitality, food manufacturing, and product development. His career has spanned the UK, US, India, and international markets, with leadership roles across renowned hospitality brands.",
      "With expertise across frozen foods, seafood, ready meals, sauces and value-added products, Rajeev works closely with operations, procurement, and commercial teams to take products from concept through formulation, scale-up and manufacturing. His international experience across the UK, US and India brings a global perspective to Choice Foods’ innovation and growth strategy."
    ]
  }
];
