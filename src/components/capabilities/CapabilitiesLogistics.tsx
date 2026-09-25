import React, { useState } from 'react';
import {
  Ship,
  Truck,
  Building2,
  PackageCheck,
  Store,
  Clock,
  Navigation2,
  ArrowRight,
} from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';

export const CapabilitiesLogistics: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      num: '01',
      title: 'COORDINATED PRODUCTION AND SHIPPING SCHEDULES',
      desc: 'Synchronized weekly harvest windows in coastal Andhra Pradesh aligned directly with ocean carrier liner departures at Krishnapatnam and Chennai ports to eliminate dwell time.',
    },
    {
      num: '02',
      title: 'LONG-TERM CARRIER RELATIONSHIPS',
      desc: 'Multi-year tier-one carrier contracts with Maersk, MSC, and CMA CGM securing guaranteed refrigerated container allocations, genset monitoring, and priority berthing.',
    },
    {
      num: '03',
      title: 'SCALABLE DISTRIBUTION',
      desc: 'Deep-freeze staging hubs in Pennsylvania and New Jersey enabling cross-dock rapid fulfillment across the Eastern seaboard, Midwest retail corridors, and Southern foodservice accounts.',
    },
    {
      num: '04',
      title: 'INVENTORY AND SHIPMENT ALIGNMENT BY PROGRAM',
      desc: 'Dedicated safety-stock modeling by customer SKU and promotion calendar, dampening supply fluctuations and ensuring 99.4%+ on-time in-full (OTIF) fulfillment.',
    },
  ];

  const flowNodes = [
    {
      stage: '01',
      name: 'Production & Blast Freeze',
      location: 'Bapatla, AP, India',
      detail: 'Harvesting, grading, FCC cooking & IQF blast chilling at -40°C.',
      icon: Building2,
      duration: 'Day 1–3',
    },
    {
      stage: '02',
      name: 'Cold-Chain Staging',
      location: 'Chennai / Krishnapatnam',
      detail: 'Smart Reefer pre-tripped container loading with live satellite telemetry.',
      icon: PackageCheck,
      duration: 'Day 4–6',
    },
    {
      stage: '03',
      name: 'Maritime Transit',
      location: 'Direct Ocean Line',
      detail: 'Constant -20°F reefer hold with continuous automated temp logging.',
      icon: Ship,
      duration: 'Day 7–28',
    },
    {
      stage: '04',
      name: 'US Port & Distribution Hubs',
      location: 'Newark / Philadelphia / PA',
      detail: 'Customs release, value-added meal kit staging, and cold cross-docking.',
      icon: Truck,
      duration: 'Day 29–31',
    },
    {
      stage: '05',
      name: 'Partner Delivery',
      location: 'Retail Distribution Centers',
      detail: 'On-time delivery to supermarket distribution centers & foodservice networks.',
      icon: Store,
      duration: 'Scheduled JIT',
    },
  ];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#FBFBFA] text-[#161615] border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-800" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
              GLOBAL SUPPLY CHAIN
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
            LOGISTICS &amp; DISTRIBUTION
          </h2>

          <div className="space-y-4 pt-2 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
            <p className="font-normal text-xl text-[#161615]">
              We coordinate logistics to align production, inventory, and delivery across partner programs.
            </p>
            <p>
              Our model supports consistent supply through long-term shipping relationships and integrated planning.
            </p>
          </div>
        </div>

        {/* Global Logistics Flow Line Visualization */}
        <div className="bg-[#121613] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-neutral-800 relative overflow-hidden">
          {/* Subtle Ambient Industrial Grid */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block mb-1">
                  SUPPLY CHAIN ARCHITECTURE
                </span>
                <h3 className="text-2xl font-display font-bold">
                  Farm Gate to Retail Dock Pipeline
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>UNBROKEN COLD CHAIN: -20°F TARGET</span>
              </div>
            </div>

            {/* Step Nodes Flow Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {flowNodes.map((node, idx) => {
                const isActive = activeStep === idx;
                const IconComp = node.icon;
                return (
                  <div
                    key={node.stage}
                    onClick={() => setActiveStep(idx)}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-800 border-amber-400 shadow-lg scale-[1.02]'
                        : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {/* Top Flow Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-amber-400 text-black'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {node.stage}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{node.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isActive
                            ? 'bg-amber-400/20 text-amber-400'
                            : 'bg-neutral-800 text-neutral-300'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>

                      <h4 className="text-sm font-display font-bold text-white leading-tight">
                        {node.name}
                      </h4>

                      <p className="text-[11px] font-mono text-amber-400/90 truncate">
                        {node.location}
                      </p>

                      <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                        {node.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column: Actual Logistics Image & 4 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: 4 Pillars from Reference Page */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-300">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                STRATEGIC CAPABILITIES
              </span>
              <span className="text-[11px] font-mono text-amber-900 font-bold">
                PARTNER PROGRAM ALIGNMENT
              </span>
            </div>

            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400 transition-all shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-bold px-2 py-1 bg-neutral-100 group-hover:bg-amber-800 group-hover:text-white rounded text-neutral-800 transition-colors">
                    {pillar.num}
                  </span>

                  <div className="space-y-1 flex-1">
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#161615] group-hover:text-amber-900 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Actual Reference Logistics Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200 shadow-2xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src="/assets/capabilities/logistics-06228.jpg"
                  alt="Choice Foods Global Cold-Chain Logistics and Distribution"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06228-copy.jpg';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/75 backdrop-blur-md border border-white/20 rounded-xl text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    CONTAINER LOGISTICS OVERVIEW
                  </span>
                  <h4 className="text-lg font-display font-bold text-white">
                    Integrated Intermodal Reefer Infrastructure
                  </h4>
                  <p className="text-xs text-neutral-300 font-light mt-1">
                    Continuous monitoring of temperature, humidity, and location from origin packing house to domestic distribution docks.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">OTIF Rate</span>
                <span className="text-xs font-mono font-bold text-neutral-900">99.4% On-Time</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Ocean Lanes</span>
                <span className="text-xs font-mono font-bold text-neutral-900">Weekly Scheduled</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">US Warehousing</span>
                <span className="text-xs font-mono font-bold text-neutral-900">East Coast Hubs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
