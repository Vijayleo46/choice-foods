import React, { useState } from 'react';
import { MapPin, Navigation, Anchor, Building2, CheckCircle2 } from 'lucide-react';

interface HubDetail {
  id: 'india' | 'usa';
  country: string;
  facilities: string[];
  role: string;
  highlights: string[];
  coordinates: { x: number; y: number }; // percentage on map
}

const HUBS: Record<'india' | 'usa', HubDetail> = {
  india: {
    id: 'india',
    country: 'INDIA (ANDHRA PRADESH & KERALA)',
    facilities: ['Choice Canning Primary Processing Hub', 'Cochin Maritime Distribution', 'Amalapuram Cryogenic Facility'],
    role: 'Pristine Aquaculture Sourcing & Rapid IQF Freezing',
    highlights: [
      'Adjacent to coastal aquaculture ponds (<2 hrs from harvest)',
      'High-capacity IQF freezers with ELISA screening laboratories',
      'End-to-end cold storage & export container staging',
    ],
    coordinates: { x: 71.5, y: 56.5 },
  },
  usa: {
    id: 'usa',
    country: 'UNITED STATES (NEW JERSEY & PENNSYLVANIA)',
    facilities: ['Jersey City Culinary Development Lab', 'Pittston Cold Chain Assembly & Packaging'],
    role: 'Recipe Development, Meal Kit Blending & Continental Fulfillment',
    highlights: [
      'Direct highway & port access serving 70% of US population in 48h',
      'Automated nitrogen-flushed multi-compartment skillet meal packing',
      'Turnkey private-label and branded warehouse replenishment',
    ],
    coordinates: { x: 26.5, y: 39.5 },
  },
};

export const AboutPlacesMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<'india' | 'usa'>('india');
  const hub = HUBS[activeHub];

  return (
    <div className="w-full bg-[#181E19] text-white p-6 sm:p-10 lg:p-12 rounded-none border border-neutral-800 shadow-2xl relative overflow-hidden">
      {/* Editorial Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-8">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 block font-semibold mb-1">
            TRANSATLANTIC SUPPLY ARCHITECTURE
          </span>
          <h4 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white">
            Dual-Continent Operational Hubs
          </h4>
        </div>

        {/* Hub Selector Buttons */}
        <div className="inline-flex rounded-sm bg-neutral-900/80 p-1 border border-neutral-700/80">
          <button
            onClick={() => setActiveHub('india')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeHub === 'india'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            🇮🇳 India Hub
          </button>
          <button
            onClick={() => setActiveHub('usa')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              activeHub === 'usa'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            🇺🇸 USA Hub
          </button>
        </div>
      </div>

      {/* Bespoke Editorial Vector Map Graphic */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#111612] rounded border border-neutral-800/80 overflow-hidden select-none">
        {/* Subtle Latitude / Longitude Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#687B6A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Simplified Continents Silhouette */}
        <svg
          viewBox="0 0 1000 450"
          className="w-full h-full object-cover opacity-35 filter brightness-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* North America */}
          <path
            d="M 120 70 Q 180 50 250 80 Q 280 130 270 190 Q 230 240 180 230 Q 150 270 130 260 Q 110 210 130 160 Z"
            fill="#344337"
          />
          {/* South America */}
          <path
            d="M 230 260 Q 290 280 280 370 Q 240 430 200 380 Q 190 320 230 260 Z"
            fill="#344337"
          />
          {/* Europe */}
          <path
            d="M 460 70 Q 520 60 560 110 Q 520 150 470 140 Q 450 100 460 70 Z"
            fill="#344337"
          />
          {/* Africa */}
          <path
            d="M 470 160 Q 560 170 560 270 Q 520 380 470 340 Q 430 240 470 160 Z"
            fill="#344337"
          />
          {/* Asia / India */}
          <path
            d="M 580 80 Q 750 70 850 140 Q 820 230 750 260 Q 720 240 700 300 Q 660 270 630 210 Q 580 180 580 80 Z"
            fill="#344337"
          />
          {/* Australia */}
          <path
            d="M 800 310 Q 890 300 880 390 Q 810 410 790 350 Z"
            fill="#344337"
          />

          {/* Animated Curved Flight / Shipping Line between USA (265, 178) and India (715, 254) */}
          <path
            d="M 265 178 Q 480 40 715 254"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="animate-pulse"
          />

          {/* Animated pulse dot moving along the path */}
          <circle cx="490" cy="115" r="4.5" fill="#FBBF24" className="animate-ping" />
          <circle cx="490" cy="115" r="3" fill="#FFFFFF" />
        </svg>

        {/* USA Pin Marker */}
        <div
          onClick={() => setActiveHub('usa')}
          className="absolute z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 group"
          style={{ left: `${HUBS.usa.coordinates.x}%`, top: `${HUBS.usa.coordinates.y}%` }}
        >
          <div className="relative">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                activeHub === 'usa' ? 'bg-amber-400 text-black ring-4 ring-amber-400/40' : 'bg-white text-black ring-2 ring-black'
              }`}
            >
              <Building2 className="w-3 h-3" />
            </div>
            <span
              className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded shadow ${
                activeHub === 'usa' ? 'bg-amber-400 text-black' : 'bg-black/90 text-neutral-200'
              }`}
            >
              USA (NJ / PA)
            </span>
          </div>
        </div>

        {/* India Pin Marker */}
        <div
          onClick={() => setActiveHub('india')}
          className="absolute z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 group"
          style={{ left: `${HUBS.india.coordinates.x}%`, top: `${HUBS.india.coordinates.y}%` }}
        >
          <div className="relative">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                activeHub === 'india' ? 'bg-amber-400 text-black ring-4 ring-amber-400/40' : 'bg-white text-black ring-2 ring-black'
              }`}
            >
              <Anchor className="w-3 h-3" />
            </div>
            <span
              className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded shadow ${
                activeHub === 'india' ? 'bg-amber-400 text-black' : 'bg-black/90 text-neutral-200'
              }`}
            >
              INDIA (AP / KERALA)
            </span>
          </div>
        </div>

        {/* Direct Route Data Tag */}
        <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-neutral-700/60 text-[10px] font-mono text-neutral-300">
          <span>CONNECTED SUPPLY CORRIDOR: </span>
          <span className="text-amber-400 font-bold">14,200 KM COLD CHAIN</span>
        </div>
      </div>

      {/* Active Hub Deep Dive Card */}
      <div className="mt-6 pt-6 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <h5 className="font-display font-bold text-lg text-white">{hub.country}</h5>
          </div>
          <p className="text-xs text-amber-300 font-mono">{hub.role}</p>
          <div className="pt-2 space-y-1">
            <p className="text-[11px] font-mono uppercase text-neutral-400">Key Facilities:</p>
            {hub.facilities.map((fac, i) => (
              <p key={i} className="text-xs text-neutral-300 font-light flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-amber-400" />
                {fac}
              </p>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 space-y-3">
          <p className="text-[11px] font-mono uppercase text-neutral-400">Strategic Advantage:</p>
          <ul className="space-y-2">
            {hub.highlights.map((h, i) => (
              <li key={i} className="text-xs sm:text-sm text-neutral-300 font-light flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
