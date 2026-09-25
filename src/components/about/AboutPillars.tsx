import React, { useState } from 'react';
import {
  ABOUT_PEOPLE,
  ABOUT_PLACES,
  ABOUT_PROCESS,
} from '../../data/aboutData';
import { AboutPlacesMap } from './AboutPlacesMap';
import { Users, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const AboutPillars: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<'people' | 'places' | 'process'>('people');

  return (
    <div className="w-full bg-[#161615] text-[#FBFBFA]">
      {/* Editorial Navigation Tabs for the Triad */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#161615]/95 backdrop-blur-md border-y border-neutral-800 py-4 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400 font-semibold">
            THE THREE FOUNDATIONS
          </span>
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={() => {
                setActiveTab('people');
                document.getElementById('section-people')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                activeTab === 'people'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              01. Our People
            </button>
            <button
              onClick={() => {
                setActiveTab('places');
                document.getElementById('section-places')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                activeTab === 'places'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              02. Our Places
            </button>
            <button
              onClick={() => {
                setActiveTab('process');
                document.getElementById('section-process')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                activeTab === 'process'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              03. Our Process
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: OUR PEOPLE */}
      {/* ========================================================================= */}
      <section
        id="section-people"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400">
                <Users className="w-4 h-4" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold">
                  {ABOUT_PEOPLE.eyebrow}
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                {ABOUT_PEOPLE.heading}
              </h2>

              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
                {ABOUT_PEOPLE.body}
              </p>

              <div className="pt-4 border-t border-neutral-800 space-y-4">
                <div className="grid grid-cols-2 gap-6 text-xs">
                  <div>
                    <span className="block font-mono text-amber-400 font-bold text-sm">3,000+</span>
                    <span className="text-neutral-400">Skilled team members across continents</span>
                  </div>
                  <div>
                    <span className="block font-mono text-amber-400 font-bold text-sm">30+ YRS</span>
                    <span className="text-neutral-400">Choice Foundation education & healthcare support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate('/impact')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors group"
                  >
                    <span>Read Workforce & Community Impact</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actual Reference Image with Subtle Parallax Effect */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl group border border-neutral-800">
                <img
                  src={ABOUT_PEOPLE.image}
                  alt={ABOUT_PEOPLE.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <div>
                    <p className="font-mono text-amber-400 font-semibold tracking-wider uppercase text-[11px]">
                      {ABOUT_PEOPLE.badge}
                    </p>
                    <p className="text-neutral-300 text-[11px] font-light">
                      Health, dignity, and career ascension at every facility.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono">
                    VERIFIED ASSET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR PLACES */}
      {/* ========================================================================= */}
      <section
        id="section-places"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-neutral-800 bg-[#121613]"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Actual Reference Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl group border border-neutral-800">
                <img
                  src={ABOUT_PLACES.image}
                  alt={ABOUT_PLACES.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <div>
                    <p className="font-mono text-amber-400 font-semibold tracking-wider uppercase text-[11px]">
                      INDIA & UNITED STATES
                    </p>
                    <p className="text-neutral-300 text-[11px] font-light">
                      Sourcing and rapid fulfillment infrastructure.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono">
                    VERIFIED ASSET
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold">
                  {ABOUT_PLACES.eyebrow}
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                {ABOUT_PLACES.heading}
              </h2>

              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
                {ABOUT_PLACES.body}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="bg-neutral-900/60 p-4 border border-neutral-800">
                  <p className="font-mono font-bold text-amber-400 mb-1">INDIA</p>
                  <p className="text-neutral-300 font-medium text-xs">Andhra Pradesh & Kerala</p>
                  <p className="text-[11px] text-neutral-400 mt-1">Coastal aquaculture & cryo-freezing</p>
                </div>
                <div className="bg-neutral-900/60 p-4 border border-neutral-800">
                  <p className="font-mono font-bold text-amber-400 mb-1">UNITED STATES</p>
                  <p className="text-neutral-300 font-medium text-xs">New Jersey & Pennsylvania</p>
                  <p className="text-[11px] text-neutral-400 mt-1">Culinary R&D & continental fulfillment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Transatlantic Location Visual */}
          <AboutPlacesMap />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR PROCESS */}
      {/* ========================================================================= */}
      <section
        id="section-process"
        className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Copy & 4 Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold">
                  {ABOUT_PROCESS.eyebrow}
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                {ABOUT_PROCESS.heading}
              </h2>

              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
                {ABOUT_PROCESS.body}
              </p>

              {/* 4 Core Pillars Required: Quality Control, Traceability, Disciplined Execution, Consistent Production */}
              <div className="pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_PROCESS.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-none space-y-1.5 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/capabilities')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors group"
                >
                  <span>Explore Technical Processing Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Actual Reference Image with Cinematic Reveal */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl group border border-neutral-800">
                <img
                  src={ABOUT_PROCESS.image}
                  alt={ABOUT_PROCESS.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter saturate-[0.9] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <div>
                    <p className="font-mono text-amber-400 font-semibold tracking-wider uppercase text-[11px]">
                      PRECISION QUALITY & TRACEABILITY
                    </p>
                    <p className="text-neutral-300 text-[11px] font-light">
                      BRCGS Grade AA & BAP 4-Star Certified lines.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-mono">
                    VERIFIED ASSET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
