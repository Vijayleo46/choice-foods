import React, { useState } from 'react';
import { MapPin, Building, Globe, Navigation, ArrowRight } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';
import { useNavigation } from '../../context/NavigationContext';

export const CapabilitiesGlobalMap: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedLoc, setSelectedLoc] = useState<number>(0);
  const locations = CAPABILITIES_DATA.globalLocations;

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-white text-[#161615] border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold block">
              INTERNATIONAL INFRASTRUCTURE
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
              CHOICE'S GLOBAL PRESENCE
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light max-w-2xl">
              Spanning four strategic centers across southern India and the eastern United States, uniting primary seafood cultivation with domestic co-packing and regional cold-storage distribution.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span>India: 2 Hubs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <span>USA: 2 Hubs</span>
            </span>
          </div>
        </div>

        {/* Interactive World Network Graphic */}
        <div className="relative rounded-3xl bg-[#121613] text-white p-8 sm:p-12 shadow-2xl border border-neutral-800 overflow-hidden">
          {/* Subtle World Map Grid Background SVG */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1000 500"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
            >
              {/* Simplified latitude/longitude grid */}
              <line x1="0" y1="125" x2="1000" y2="125" strokeDasharray="4 4" />
              <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 4" />
              <line x1="0" y1="375" x2="1000" y2="375" strokeDasharray="4 4" />
              <line x1="250" y1="0" x2="250" y2="500" strokeDasharray="4 4" />
              <line x1="500" y1="0" x2="500" y2="500" strokeDasharray="4 4" />
              <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="4 4" />

              {/* Connecting Global Supply Line from India to US East Coast */}
              <path
                d="M 680 310 Q 450 180 280 200"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Location Pin Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
                SELECT FACILITY / REGIONAL HUB
              </span>

              {locations.map((loc, idx) => {
                const isSelected = selectedLoc === idx;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-neutral-800 border-amber-400 shadow-lg translate-x-2 ring-1 ring-amber-400'
                        : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-amber-400 text-black font-bold'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-display font-bold text-white truncate">
                          {loc.title}
                        </h4>
                        <span className="text-[10px] font-mono text-amber-400 ml-2 shrink-0">
                          {loc.coords[0].toFixed(2)}°N
                        </span>
                      </div>

                      <p className="text-xs font-mono text-neutral-400">
                        {loc.location}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Inspector for Selected Hub */}
            <div className="lg:col-span-7 bg-neutral-900/95 border border-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-mono uppercase tracking-wider font-bold rounded">
                    {locations[selectedLoc].type}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {locations[selectedLoc].title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{locations[selectedLoc].location}</span>
                  </p>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-neutral-400">
                  <span className="block text-neutral-500 uppercase text-[9px]">Coordinates</span>
                  <span className="text-white">
                    {locations[selectedLoc].coords[0]}° N, {locations[selectedLoc].coords[1]}° E
                  </span>
                </div>
              </div>

              {/* Functional Role */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block font-semibold">
                  Facility Role &amp; Operations
                </span>
                <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                  {locations[selectedLoc].role}
                </p>
              </div>

              {/* Bottom Quick Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800 text-[11px] font-mono">
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 uppercase text-[9px] block">Certifications</span>
                  <span className="text-white font-bold">BRCGS · BAP 4★</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <span className="text-neutral-500 uppercase text-[9px] block">Audit Regime</span>
                  <span className="text-white font-bold">Continuous Inline</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 uppercase text-[9px] block">Telemetry</span>
                  <span className="text-emerald-400 font-bold">Active 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
