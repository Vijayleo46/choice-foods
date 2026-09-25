import React, { useRef } from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { HomeFamilyOwned } from '../components/home/HomeFamilyOwned';
import { HomeCapabilities } from '../components/home/HomeCapabilities';
import { HomeGlobalPresence } from '../components/home/HomeGlobalPresence';
import { HomeImpact } from '../components/home/HomeImpact';
import { HomePress } from '../components/home/HomePress';
import { HomePartnership } from '../components/home/HomePartnership';

export const HomePage: React.FC = () => {
  const familyOwnedRef = useRef<HTMLDivElement>(null);

  const handleScrollToExplore = () => {
    if (familyOwnedRef.current) {
      familyOwnedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FBFBFA]">
      {/* 1. CINEMATIC HERO (100svh, live video, pause/play, verbatim statement, split reveals) */}
      <HomeHero onScrollToExplore={handleScrollToExplore} />

      {/* 2. FAMILY OWNED & OPERATED (Three generations stewardship, verbatim copy, authentic asset) */}
      <div ref={familyOwnedRef}>
        <HomeFamilyOwned />
      </div>

      {/* 3. CAPABILITIES MEDIA (01 Value Added, 02 Recipe Development, 03 Private Label) */}
      <HomeCapabilities />

      {/* 4. GLOBAL PRESENCE. LOCAL IMPACT. (The 6 authentic assets in editorial mosaic) */}
      <HomeGlobalPresence />

      {/* 5. IMPACT SECTION (A purpose-driven global seafood company, 3 real story cards) */}
      <HomeImpact />

      {/* 6. PRESS & NEWS (Jose Thomas, Fearless Educator, From 43 Students to 3,800 Dreams) */}
      <HomePress />

      {/* 7. PARTNERSHIP SECTION (A history of integrity and thoughtful investment + quick inquiry) */}
      <HomePartnership />
    </div>
  );
};
