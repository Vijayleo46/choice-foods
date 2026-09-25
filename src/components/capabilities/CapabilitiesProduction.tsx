import React, { useState } from 'react';
import { Flame, Snowflake, Wind, Cpu, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';

export const CapabilitiesProduction: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      num: '01',
      name: 'Force Convection Cooking (FCC)',
      tagline: 'Controlled uniform thermal processing',
      desc: 'Engineered steam and convection airflow circulates continuously within the cooking tunnel, guaranteeing strict core temperature attainment without scorching or overcooking delicate seafood protein.',
      parameters: [
        { label: 'Thermal Accuracy', value: '±0.5°C' },
        { label: 'Yield Preservation', value: '98.4%' },
        { label: 'Profile Control', value: 'Multi-zone steam modulation' },
      ],
      icon: Flame,
    },
    {
      num: '02',
      name: 'Rapid Chilling',
      tagline: 'Immediate core temperature stabilization',
      desc: 'Immediately following the cooking chamber, products undergo sub-zero glycol immersion and high-velocity brine chilling, locking in texture, preventing post-cook moisture loss, and halting carryover cooking.',
      parameters: [
        { label: 'Core Temp Drop', value: '82°C → 2°C in <90 sec' },
        { label: 'Moisture Retention', value: 'Optimal cell wall integrity' },
        { label: 'Bacterial Inhibition', value: 'Instant cold-shock barrier' },
      ],
      icon: Wind,
    },
    {
      num: '03',
      name: 'IQF (Individually Quick Frozen)',
      tagline: 'Ultra-fast fluidization freezing',
      desc: 'Continuous fluidized bed IQF freezers circulate -40°C cryogenic air currents beneath each piece, freezing items individually in minutes and eliminating clumping or drip-loss upon consumer thaw.',
      parameters: [
        { label: 'Freezing Cycle', value: '< 7 minutes' },
        { label: 'Core Temperature', value: '≤ -22°C guaranteed' },
        { label: 'Particle Separation', value: '100% free-flowing IQF' },
      ],
      icon: Snowflake,
    },
    {
      num: '04',
      name: 'High-Volume Automated Production',
      tagline: 'Robotic weighing, bagging & inline inspection',
      desc: 'State-of-the-art Ishida multi-head computerized weighers, automated high-speed form-fill-seal pouching, and integrated Smiths Detection inline X-ray and metal detection for consumer safety.',
      parameters: [
        { label: 'Packaging Speed', value: 'Up to 90 pouches/min' },
        { label: 'Weight Precision', value: '±0.1% target weight' },
        { label: 'Inline Foreign Body', value: '0.8mm SS / Bone detection' },
      ],
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-white text-[#161615] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-800" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
              ADVANCED PROCESSING
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
            PRODUCTION &amp; PROCESSING SYSTEMS
          </h2>

          <div className="space-y-4 pt-2 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
            <p className="font-normal text-xl text-[#161615]">
              Our production model is built for repeatability at scale, using innovative processing methods to maintain consistency across formats and volumes.
            </p>
            <p>
              We apply advanced cooking, chilling, and freezing techniques to preserve product quality throughout production.
            </p>
          </div>
        </div>

        {/* Technical Interactive System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Actual Production Facility Image with Animated HUD Callouts */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200 shadow-2xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/assets/capabilities/production-systems-06282.jpg"
                  alt="Choice Foods Automated Production and Processing Systems"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-06282-copy.jpg';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 pointer-events-none" />

                {/* Top Status HUD */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 rounded text-[11px] font-mono text-neutral-200">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  <span>PROCESS TELEMETRY ACTIVE</span>
                </div>

                {/* Four Technology Status Pills overlaid on image */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex flex-col gap-1.5 items-end">
                  {technologies.map((t, idx) => (
                    <button
                      key={t.num}
                      onClick={() => setActiveTech(idx)}
                      className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded transition-all ${
                        activeTech === idx
                          ? 'bg-amber-400 text-black font-bold shadow-md'
                          : 'bg-black/50 text-neutral-300 hover:bg-black/80'
                      }`}
                    >
                      {t.num} · {t.name.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Bottom Active Technology Detail Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl text-white">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-400 text-black rounded">
                        {technologies[activeTech].num}
                      </span>
                      <h4 className="text-lg sm:text-xl font-display font-bold">
                        {technologies[activeTech].name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-amber-400 hidden sm:inline">
                      INLINE STAGE 0{activeTech + 1}
                    </span>
                  </div>

                  {/* Active Tech Parameters Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/15 text-[11px] font-mono">
                    {technologies[activeTech].parameters.map((p, pIdx) => (
                      <div key={pIdx}>
                        <span className="text-neutral-400 block uppercase text-[9px]">
                          {p.label}
                        </span>
                        <span className="font-bold text-white block truncate">
                          {p.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar Indicator */}
            <div className="mt-4 flex items-center justify-between gap-2 px-1">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold">
                SYSTEM PROGRESSION
              </span>
              <div className="flex-1 flex gap-1.5 h-1.5 bg-neutral-100 rounded-full overflow-hidden mx-4">
                {technologies.map((_, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 transition-all duration-300 ${
                      idx <= activeTech ? 'bg-amber-800' : 'bg-neutral-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-neutral-700 font-bold">
                STAGE {activeTech + 1} OF 4
              </span>
            </div>
          </div>

          {/* Right: Four Interactive Technology Steppers */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-300">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                INLINE PROCESSING PHASES
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                CLICK TO INSPECT
              </span>
            </div>

            {technologies.map((tech, idx) => {
              const isActive = activeTech === idx;
              const IconComp = tech.icon;
              return (
                <div
                  key={tech.num}
                  onClick={() => setActiveTech(idx)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-50 border-neutral-900 shadow-md ring-1 ring-neutral-900'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-amber-800 text-white'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-mono font-bold text-amber-800">
                          PHASE {tech.num}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? 'text-amber-800 translate-x-1' : 'text-neutral-300'
                          }`}
                        />
                      </div>

                      <h3 className="text-base sm:text-lg font-display font-bold text-[#161615]">
                        {tech.name}
                      </h3>

                      <p className="text-xs font-mono text-neutral-500">
                        {tech.tagline}
                      </p>

                      <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                        {tech.desc}
                      </p>

                      {isActive && (
                        <div className="mt-4 pt-3 border-t border-neutral-200 grid grid-cols-2 gap-2 text-[11px] font-mono">
                          {tech.parameters.slice(0, 2).map((param, pIdx) => (
                            <div key={pIdx} className="bg-white p-2 rounded border border-neutral-200">
                              <span className="text-[10px] text-neutral-500 block uppercase">
                                {param.label}
                              </span>
                              <span className="font-bold text-neutral-900 block truncate">
                                {param.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
