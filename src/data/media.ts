// Centralized media configuration for Choice Foods Group
// Easily replace images or videos across all pages without touching components

// High-fidelity generated imagery from assets
import heroPosterImg from '../assets/images/choice_hero_seafood_1790164558339.jpg';
import techFacilityImg from '../assets/images/choice_facility_tech_1790164574521.jpg';
import culinaryMealImg from '../assets/images/choice_culinary_dish_1790164587469.jpg';
import peopleCommunityImg from '../assets/images/choice_people_community_1790164599186.jpg';
import logisticsPortImg from '../assets/images/choice_logistics_port_1790164612692.jpg';

export interface VideoMediaItem {
  videoUrl?: string;
  posterUrl: string;
  altText: string;
}

export const MEDIA = {
  // Hero Video & Poster
  hero: {
    // High-resolution looping ocean & water movement
    videoUrl: 'https://assets.mixkit.co/videos/4885/4885-720.mp4',
    posterUrl: heroPosterImg,
    altText: 'Choice Foods - Sustainable pristine ocean waters and aquaculture sourcing',
  },

  // About Hero & Content
  aboutHero: {
    videoUrl: 'https://assets.mixkit.co/videos/1269/1269-720.mp4',
    posterUrl: peopleCommunityImg,
    altText: 'Choice Foods global legacy and multi-generational dedication',
  },
  people: {
    posterUrl: peopleCommunityImg,
    altText: 'Dedicated workforce and educational community of Choice Foundation',
  },
  places: {
    posterUrl: techFacilityImg,
    altText: 'Modern processing plants in Andhra Pradesh and U.S. facilities',
  },
  process: {
    posterUrl: techFacilityImg,
    altText: 'State-of-the-art cold chain, IQF flash freezing, and rigorous ELISA testing',
  },

  // Capabilities
  capabilitiesHero: {
    videoUrl: 'https://assets.mixkit.co/videos/22904/22904-720.mp4',
    posterUrl: techFacilityImg,
    altText: 'Industrial precision food production and culinary manufacturing',
  },
  capabilities: {
    valueAdded: culinaryMealImg,
    recipeDevelopment: culinaryMealImg,
    privateLabel: techFacilityImg,
    qualityControl: techFacilityImg,
    logistics: logisticsPortImg,
  },

  // Impact
  impactHero: {
    videoUrl: 'https://assets.mixkit.co/videos/4885/4885-720.mp4',
    posterUrl: peopleCommunityImg,
    altText: 'Empowering communities through education, healthcare, and sustainability',
  },
  impact: {
    workforce: peopleCommunityImg,
    education: peopleCommunityImg,
    sustainability: heroPosterImg,
    facilities: techFacilityImg,
  },

  // Press
  pressHero: {
    videoUrl: 'https://assets.mixkit.co/videos/1269/1269-720.mp4',
    posterUrl: logisticsPortImg,
    altText: 'Global leadership and thought leadership from Choice Foods',
  },
  press: {
    joseThomas: peopleCommunityImg,
    educationArticle: peopleCommunityImg,
    corporateGsa: heroPosterImg,
    facilityStory: techFacilityImg,
    modernRecipes: culinaryMealImg,
    privateLabelStory: techFacilityImg,
  },

  // Partner
  partnerHero: {
    videoUrl: 'https://assets.mixkit.co/videos/4885/4885-720.mp4',
    posterUrl: logisticsPortImg,
    altText: 'Global partnerships and supply chain infrastructure across India and the United States',
  },
  partner: {
    andhraPradesh: techFacilityImg,
    newJersey: culinaryMealImg,
    pennsylvania: logisticsPortImg,
  },
};
