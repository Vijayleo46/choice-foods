import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';
import { useNavigation } from '../../context/NavigationContext';

export const CapabilitiesCore: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeItem, setActiveItem] = useState<'valueAdded' | 'recipeDevelopment' | 'privateLabel'>('valueAdded');

  const capabilities = [
    {
      key: 'valueAdded' as const,
      data: CAPABILITIES_DATA.coreCapabilities.valueAdded,
      specs: [
        'Ready-to-cook skillet meals & meal kits',
        'Pre-seasoned, marinated & glazed shrimp formats',
        'Custom retail packaging: stand-up pouches, tray-packs & club bags',
        'Single-serving to multi-portion consumer units'
      ]
    },
    {
      key: 'recipeDevelopment' as const,
      data: CAPABILITIES_DATA.coreCapabilities.recipeDevelopment,
      specs: [
        'Dedicated corporate chef & test kitchen R&D (Kochi & USA)',
        'Custom seasoning blends, compound butters & marinades',
        'Rapid bench-top prototyping to full-scale plant trials',
        'Cost-engineered SKU formulations matched to target retail price points'
      ]
    },
    {
      key: 'privateLabel' as const,
      data: CAPABILITIES_DATA.coreCapabilities.privateLabel,
      specs: [
        'Tier-1 North American supermarket brand execution',
        'Turnkey co-packing & co-manufacturing capabilities',
        'Strict ingredient integrity & non-GMO/clean label options',
        'Direct-store-delivery (DSD) & central distribution center logistics'
      ]
    }
  ];

  const activeCapability = capabilities.find((c) => c.key === activeItem) || capabilities[0];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-white text-[#161615] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Authentic Insignia */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold block">
              THREE CORE PILLARS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
              OUR CORE CAPABILITIES
            </h2>
          </div>

          {/* Authentic Insignia SVG from Reference Site */}
          <div className="hidden md:flex flex-col items-end">
            <svg
              className="w-24 text-neutral-800"
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="45"
              fill="none"
              viewBox="0 0 82 45"
            >
              <path
                fill="currentColor"
                d="M77.64 22.5c0-4.39-3.374-8.965-10.167-12.594-6.683-3.57-16.093-5.858-26.629-5.858s-19.946 2.287-26.63 5.858C7.423 13.535 4.05 18.109 4.05 22.5c0 4.39 3.373 8.965 10.166 12.594 6.683 3.57 16.093 5.857 26.629 5.857v2.59c-21.752 0-39.385-9.42-39.385-21.041S19.092 1.459 40.844 1.459s39.385 9.42 39.385 21.04c0 11.622-17.633 21.042-39.385 21.042v-2.59c10.536 0 19.946-2.287 26.63-5.857 6.792-3.629 10.165-8.204 10.165-12.594"
              />
              <path
                fill="currentColor"
                d="M69.007 22.5c0-4.717-2.767-9.267-7.81-12.747-5.031-3.474-12.124-5.705-20.083-5.705-7.96 0-15.052 2.231-20.084 5.705-5.042 3.48-7.81 8.03-7.81 12.747s2.768 9.266 7.81 12.747c5.032 3.473 12.125 5.704 20.084 5.704v2.59h-.197C24.172 43.468 10.63 34.075 10.63 22.5c0-11.621 13.648-21.041 30.483-21.041h.197c16.744.073 30.286 9.465 30.286 21.04l-.001.137C71.49 34.194 57.883 43.54 41.114 43.54v-2.59c7.959 0 15.052-2.23 20.083-5.704 5.043-3.48 7.81-8.03 7.81-12.747"
              />
              <path
                fill="currentColor"
                d="M49.584 22.5c0-5.468-1.199-10.29-3.01-13.65-1.42-2.64-3.002-4.043-4.436-4.563v36.425c1.434-.52 3.016-1.922 4.437-4.562 1.81-3.361 3.009-8.183 3.009-13.65m-17.48 0c0 5.467 1.198 10.289 3.008 13.65 1.421 2.64 3.004 4.043 4.437 4.562V4.287c-1.433.52-3.016 1.923-4.437 4.562-1.81 3.361-3.009 8.183-3.009 13.65m20.07 0c0 11.62-5.073 21.041-11.33 21.041h-.074c-6.223-.073-11.256-9.466-11.256-21.041 0-11.621 5.072-21.041 11.33-21.041 6.257 0 11.33 9.42 11.33 21.04"
              />
              <path fill="currentColor" d="M79.099 21.205v2.59H2.258v-2.59z" />
              <circle cx="57.611" cy="31.344" r="2.836" stroke="currentColor" strokeWidth="1.891" />
              <circle cx="23.822" cy="14.474" r="2.836" stroke="currentColor" strokeWidth="1.891" />
            </svg>
            <span className="text-[10px] font-mono text-neutral-400 mt-2 uppercase tracking-widest">
              PRECISION HARVEST &amp; VALUE CO-PACKING
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Visual Left + Interactive Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Dynamic High-Resolution Media Viewer */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200">
              {capabilities.map((c) => {
                const isCurrent = c.key === activeItem;
                return (
                  <div
                    key={c.key}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={c.data.local}
                      alt={c.data.title}
                      className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = c.data.url;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Floating Info Overlay on Media */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="px-2.5 py-1 bg-amber-500/90 text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                          {c.data.tag}
                        </span>
                        <h4 className="text-2xl font-display font-bold text-white">
                          {c.data.title}
                        </h4>
                      </div>
                      <span className="text-4xl font-display font-extrabold text-white/40">
                        {c.data.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick action under image */}
            <div className="mt-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-medium">Interested in {activeCapability.data.title}?</span>
              <button
                onClick={() => navigate('/partner')}
                className="font-mono text-amber-800 font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
              >
                <span>Request Spec Sheet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Interactive Accordion Rows */}
          <div className="lg:col-span-6 space-y-4">
            {capabilities.map((cap) => {
              const isOpen = activeItem === cap.key;
              return (
                <div
                  key={cap.key}
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                    isOpen
                      ? 'border-neutral-900 bg-neutral-50/70 shadow-sm'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  {/* Row Header / Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setActiveItem(cap.key)}
                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-mono font-bold text-amber-800">
                        {cap.data.id}
                      </span>
                      <span className="text-2xl sm:text-3xl font-display font-bold text-[#161615]">
                        {cap.data.title}
                      </span>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-neutral-900 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 space-y-6 animate-fade-in">
                      {/* Verbatim Reference Copy */}
                      <div className="space-y-4 text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
                        <p>{cap.data.p1}</p>
                        <p>{cap.data.p2}</p>
                      </div>

                      {/* Technical Specs Checklist */}
                      <div className="pt-4 border-t border-neutral-200 space-y-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold block">
                          PROGRAM CAPABILITIES
                        </span>
                        <div className="space-y-2">
                          {cap.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="pt-2">
                        <button
                          onClick={() => navigate('/partner')}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white hover:bg-black text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors"
                        >
                          <span>Develop Program</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
