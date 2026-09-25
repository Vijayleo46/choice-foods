import React, { useState } from 'react';
import { GLOBAL_LOCATIONS, LocationDetail } from '../../data/content';
import { MapPin, Building2, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const GlobalPresenceMap: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeLocationId, setActiveLocationId] = useState<string>('andhra-pradesh');

  const activeLocation =
    GLOBAL_LOCATIONS.find((loc) => loc.id === activeLocationId) || GLOBAL_LOCATIONS[0];

  return (
    <div className="bg-[#141413] text-white py-24 sm:py-32 relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="editorial-kicker text-amber-400">OPERATIONAL SCALE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mt-2">
              Global Presence.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Seamlessly bridging premier aquaculture deltas in South Asia with automated value-added
            manufacturing and rapid nationwide distribution hubs across the United States.
          </p>
        </div>

        {/* Map & Inspector Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Editorial Map Canvas */}
          <div className="lg:col-span-7 bg-[#1A1A19] border border-neutral-800 p-6 sm:p-10 relative flex flex-col justify-between min-h-[460px]">
            {/* Ambient Map Grid Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Stylized Minimal World Map SVG */}
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full max-h-[340px] text-neutral-800 fill-current opacity-40 transition-opacity"
              >
                {/* Simplified Continents Contours */}
                <path d="M 150 120 Q 200 100 280 130 T 320 220 Q 260 260 210 230 Z" />
                <path d="M 230 250 Q 290 280 270 380 Q 220 420 200 350 Z" />
                <path d="M 450 110 Q 520 90 560 140 T 490 220 Z" />
                <path d="M 470 230 Q 560 260 540 370 Q 480 390 450 310 Z" />
                <path d="M 600 120 Q 750 100 850 180 T 780 300 Q 680 250 630 190 Z" />
                <path d="M 750 320 Q 840 340 820 420 Q 740 430 730 360 Z" />

                {/* Connecting Shipping & Data Routes */}
                <path
                  d="M 280 190 Q 500 80 700 280"
                  fill="none"
                  stroke="#C19A6B"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  className="animate-pulse"
                />
                <path
                  d="M 290 195 Q 520 260 700 280"
                  fill="none"
                  stroke="#525252"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
              </svg>

              {/* Interactive Markers */}
              {GLOBAL_LOCATIONS.map((loc) => {
                const isSelected = loc.id === activeLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    style={{
                      left: `${loc.coordinates.x}%`,
                      top: `${loc.coordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={`Select ${loc.name}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulse ring on active */}
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-amber-400/30 animate-ping" />
                      )}
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-amber-400 text-[#141413] ring-4 ring-amber-400/20 scale-125'
                            : 'bg-neutral-700 text-neutral-300 group-hover:bg-neutral-500'
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      </div>

                      {/* Tooltip Label */}
                      <span
                        className={`absolute top-7 whitespace-nowrap text-[11px] font-mono tracking-wider px-2 py-0.5 rounded transition-all duration-300 ${
                          isSelected
                            ? 'bg-white text-[#141413] font-bold shadow-md'
                            : 'bg-neutral-900/90 text-neutral-400 group-hover:text-white'
                        }`}
                      >
                        {loc.name.split(',')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Tabs for Quick Selector */}
            <div className="relative z-10 pt-6 border-t border-neutral-800/80 flex flex-wrap gap-2">
              {GLOBAL_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                    loc.id === activeLocationId
                      ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                      : 'text-neutral-400 hover:text-white border border-transparent'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Location Detail Panel */}
          <div className="lg:col-span-5 bg-[#181817] border border-neutral-800 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="editorial-kicker text-amber-400">FACILITY PROFILE</span>
                <span className="text-xs font-mono text-neutral-500">
                  {activeLocation.country.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {activeLocation.name}
                </h3>
                <p className="text-xs text-amber-300/90 font-medium mb-4">
                  {activeLocation.type}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeLocation.description}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Workforce</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {activeLocation.specs.workforce}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Audits</span>
                  </div>
                  <p className="text-xs font-semibold text-white truncate" title={activeLocation.specs.certifications}>
                    {activeLocation.specs.certifications.split('·')[0]}
                  </p>
                </div>
              </div>

              {/* Core Capabilities Checklist */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Specialized Infrastructure
                </p>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {activeLocation.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => navigate('/partner')}
                className="w-full bg-white text-[#141413] hover:bg-neutral-200 py-3 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Facility Audit & Capacity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
