import React from 'react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';

export const CapabilitiesLogos: React.FC = () => {
  const logos = CAPABILITIES_DATA.partnerLogos;
  // Duplicate for seamless infinite ticker loop
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
          TRUSTED BY LEADING NORTH AMERICAN RETAILERS &amp; FOODSERVICE NETWORKS
        </span>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max items-center gap-16 sm:gap-24 animate-marquee hover:[animation-play-state:paused]">
          {marqueeLogos.map((item, idx) => (
            <div
              key={idx}
              className="h-12 sm:h-14 w-32 sm:w-44 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.local}
                alt={item.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.url;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
