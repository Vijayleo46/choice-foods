import React, { useEffect } from 'react';
import { CapabilitiesHero } from '../components/capabilities/CapabilitiesHero';
import { CapabilitiesHowWeWork } from '../components/capabilities/CapabilitiesHowWeWork';
import { CapabilitiesCore } from '../components/capabilities/CapabilitiesCore';
import { CapabilitiesQuality } from '../components/capabilities/CapabilitiesQuality';
import { CapabilitiesProduction } from '../components/capabilities/CapabilitiesProduction';
import { CapabilitiesLogistics } from '../components/capabilities/CapabilitiesLogistics';
import { CapabilitiesLogos } from '../components/capabilities/CapabilitiesLogos';
import { CapabilitiesPackagingGallery } from '../components/capabilities/CapabilitiesPackagingGallery';
import { CapabilitiesGlobalMap } from '../components/capabilities/CapabilitiesGlobalMap';
import { CapabilitiesPartnership } from '../components/capabilities/CapabilitiesPartnership';

export const CapabilitiesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top upon mounting page
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Our Capabilities — Choice Foods Group';
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FBFBFA] selection:bg-amber-900 selection:text-white">
      {/* 1. Full-screen Cinematic Hero */}
      <CapabilitiesHero />

      {/* 2. Editorial "How We Work" & Primary Production Facility Reel */}
      <CapabilitiesHowWeWork />

      {/* 3. Core Capabilities Accordion (01 Value Added · 02 Recipe Development · 03 Private Label) */}
      <CapabilitiesCore />

      {/* 4. Quality Control & Traceability (ELISA, HACCP, CoA Viewer, 05946 image) */}
      <CapabilitiesQuality />

      {/* 5. Production & Processing Systems (FCC, Rapid Chilling, IQF, Automation, 06282 image) */}
      <CapabilitiesProduction />

      {/* 6. Logistics & Distribution (Supply Chain Pipeline, 06228 image) */}
      <CapabilitiesLogistics />

      {/* 7. Retail Partner Logo Marquee */}
      <CapabilitiesLogos />

      {/* 8. Domestic Packaging & Value-Added Showcase (Tasty Choice & Pennsylvania facility) */}
      <CapabilitiesPackagingGallery />

      {/* 9. Choice's Global Presence (Kochi, Bapatla, Newark, Pottstown/Pittston) */}
      <CapabilitiesGlobalMap />

      {/* 10. Learn More About Us Links & Executive Partnership Form */}
      <CapabilitiesPartnership />
    </div>
  );
};
