import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImpactHero } from '../components/impact/ImpactHero';
import { ImpactStatCounters } from '../components/impact/ImpactStatCounters';
import { PurposeCompanySection } from '../components/impact/PurposeCompanySection';
import { ImpactPillarsSection } from '../components/impact/ImpactPillarsSection';
import { QualityWithPurposeHeadline } from '../components/impact/QualityWithPurposeHeadline';
import { ResponsibilityStorytelling } from '../components/impact/ResponsibilityStorytelling';
import { ImpactMetricsStrip } from '../components/impact/ImpactMetricsStrip';
import { ChoiceSchoolChapters } from '../components/impact/ChoiceSchoolChapters';
import { ImpactPressNews } from '../components/impact/ImpactPressNews';
import { LearnMoreHubs } from '../components/impact/LearnMoreHubs';
import { ImpactPartnershipForm } from '../components/impact/ImpactPartnershipForm';

gsap.registerPlugin(ScrollTrigger);

export const ImpactPage: React.FC = () => {
  useEffect(() => {
    // Document Title update for Impact page
    document.title = 'Impact & Sustainability - Choice Foods Group';

    // Refresh ScrollTrigger instances once DOM settles and when images finish loading
    const timer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <article className="w-full bg-[#FBFBFA] text-[#141413] min-h-screen">
      {/* 1. Cinematic Hero Section (Requirements 7, 8, 9) */}
      <ImpactHero />

      {/* 2. Editorial Statistics Counter (Requirements 10 & 11) */}
      <ImpactStatCounters />

      {/* 3. "A purpose driven global seafood company" (Requirement 12) */}
      <PurposeCompanySection />

      {/* 4. Three Impact Pillars Cards (Requirements 13 & 14) */}
      <ImpactPillarsSection />

      {/* 5. "QUALITY WITH PURPOSE." Monumental Typography Section (Requirement 15) */}
      <QualityWithPurposeHeadline />

      {/* 6. Responsibility Storytelling Section with Sticky Media (Requirements 16, 17, 18, 19, 20) */}
      <ResponsibilityStorytelling />

      {/* 7. Dedicated Metrics Strip (Requirement 21) */}
      <ImpactMetricsStrip />

      {/* 8. The Choice School Story Chapters with Alternating Layouts (Requirements 22 & 23) */}
      <ChoiceSchoolChapters />

      {/* 9. Press & News Section (Requirement 27) */}
      <ImpactPressNews />

      {/* 10. Learn More About Us Hub (Authentic Cross Navigation) */}
      <LearnMoreHubs />

      {/* 11. Partnerships & Official Inquiry Form (Requirements 28 & 29) */}
      <ImpactPartnershipForm />
    </article>
  );
};
