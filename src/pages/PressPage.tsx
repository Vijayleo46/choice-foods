import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PressHero } from '../components/press/PressHero';
import { PressFeedSection } from '../components/press/PressFeedSection';
import { PressImpactStories } from '../components/press/PressImpactStories';
import { PressLearnMore } from '../components/press/PressLearnMore';
import { PressPartnershipSection } from '../components/press/PressPartnershipSection';

export const PressPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Press & News — Choice Foods Group';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#FAF9F5] min-h-screen text-[#141413] selection:bg-[#141413] selection:text-white">
      {/* 1. Hero: A Global Thought Leader + 6-Image Archival Strip */}
      <PressHero />

      {/* 2. Press & News Feed with Category Filters & Reading Modal */}
      <PressFeedSection />

      {/* 3. A Purpose-Driven Global Seafood Company (Impact Stories Carousel) */}
      <PressImpactStories />

      {/* 4. Learn More About Us (Cross-Navigation Hubs) */}
      <PressLearnMore />

      {/* 5. Partnerships: A History of Integrity & Reach Out Form */}
      <PressPartnershipSection />
    </div>
  );
};
