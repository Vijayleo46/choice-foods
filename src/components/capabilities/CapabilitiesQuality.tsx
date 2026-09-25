import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Activity,
  Layers,
  Search,
  X,
  ExternalLink,
  Download,
} from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';

export const CapabilitiesQuality: React.FC = () => {
  const [activeSpec, setActiveSpec] = useState(0);
  const [showCoAModal, setShowCoAModal] = useState(false);

  const specs = [
    {
      id: '01',
      title: 'LOT-LEVEL TRACEABILITY',
      subtitle: 'Input → Finished Product',
      detail:
        'Continuous end-to-end chain of custody tracking from broodstock origin and hatchery feed through grow-out pond harvesting, transport chillers, cold storage, and final dockside container manifest.',
      telemetry: 'Lot ID: BAP-2026-0842 · Farm ID: AP-COAST-P4 · Vessel Reefer: CMA-CGM #8419',
      icon: Layers,
    },
    {
      id: '02',
      title: 'IN-HOUSE LAB TESTING',
      subtitle: 'ELISA Screening & Antibiotic Residue Panels',
      detail:
        'State-of-the-art diagnostic screening for chloramphenicol, nitrofurans, fluoroquinolones, tetracyclines, and malachite green with sensitivity below 0.1 ppb prior to processing clearance.',
      telemetry: 'Screening Limit: <0.1 ppb · 0% Tolerance · Double-blind Duplicate Testing',
      icon: Activity,
    },
    {
      id: '03',
      title: 'HACCP-BASED QUALITY CONTROL',
      subtitle: 'Structured Critical Control Points (CCP)',
      detail:
        'Rigorous automated temperature telemetry, sanitized water filtration, metal detection (ferrous/non-ferrous/stainless), and micro-biological surveillance audited under BRCGS and BAP standards.',
      telemetry: 'CCP-1: Core Temp ≤ -18°C · CCP-2: X-Ray 0.8mm SS Sensitivity · CCP-3: Chlorine Residual <0.5 ppm',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'CONTAINER & PO-LEVEL REPORTING',
      subtitle: 'Comprehensive Analytical Certificates of Analysis (CoA)',
      detail:
        'Every master container and retail PO is accompanied by complete microbiological, chemical, and organoleptic test certificates indexed directly to purchasing orders and bill-of-lading numbers.',
      telemetry: 'Digital CoA: PO-94821-CF · E-Sign Verified · 7-Year Secure Archive',
      icon: FileCheck,
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
              VERIFIED INTEGRITY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
            QUALITY CONTROL &amp; TRACEABILITY
          </h2>

          <div className="space-y-4 pt-2 text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
            <p className="font-normal text-xl text-[#161615]">
              Quality is managed through structured QA/QC systems across production, with controls designed to ensure consistency and product integrity.
            </p>
            <p>
              We maintain full traceability from raw material through finished goods, supported by in-house lab testing and continuous monitoring.
            </p>
          </div>
        </div>

        {/* Industrial / Editorial Visual System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Specification Blocks */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-300">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                SPECIFICATION PROTOCOLS
              </span>
              <span className="text-[11px] font-mono text-amber-900 font-semibold">
                SYSTEM VERIFIED · AUDITED
              </span>
            </div>

            {specs.map((spec, idx) => {
              const isActive = activeSpec === idx;
              const IconComp = spec.icon;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveSpec(idx)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-neutral-900 shadow-md translate-x-2'
                      : 'bg-neutral-100/70 border-neutral-200 hover:bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        isActive ? 'bg-amber-800 text-white' : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {spec.id}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-display font-bold text-[#161615]">
                          {spec.title}
                        </h3>
                        <IconComp
                          className={`w-4 h-4 ${isActive ? 'text-amber-800' : 'text-neutral-400'}`}
                        />
                      </div>

                      <p className="text-xs font-mono text-amber-900 font-medium">
                        {spec.subtitle}
                      </p>

                      <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                        {spec.detail}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-2.5 border-t border-neutral-200">
                          <span className="text-[10px] font-mono text-neutral-500 block truncate">
                            {spec.telemetry}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Authentic Production Lab Image with Precision Overlays */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200 shadow-2xl group">
              {/* Actual reference image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src="/assets/capabilities/quality-control-05946.jpg"
                  alt="Choice Foods Quality Control and In-House Testing Laboratory"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://choicefoodsgroup.com/wp-content/uploads/2026/07/choice-foods-group-05946-copy.jpg';
                  }}
                />

                {/* Technical HUD Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

                {/* Precision Floating Coordinates */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 rounded text-[11px] font-mono text-neutral-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>QC STATUS: LIVE SURVEILLANCE</span>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <button
                    onClick={() => setShowCoAModal(true)}
                    className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-mono font-bold uppercase tracking-wider rounded shadow-md transition-colors inline-flex items-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Inspect Sample CoA</span>
                  </button>
                </div>

                {/* Live Sensor Callout Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-black/75 backdrop-blur-md border border-white/20 rounded-xl text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block">
                        LAB TESTING SPECIFICATION 0{activeSpec + 1}
                      </span>
                      <h4 className="text-lg sm:text-xl font-display font-bold">
                        {specs[activeSpec].title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-mono">
                        {specs[activeSpec].subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <div className="text-right sm:text-right">
                        <span className="text-[10px] font-mono text-neutral-400 block uppercase">
                          COMPLIANCE LEVEL
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          100% ZERO-DEFECT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-bar Quality Pillars */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Antibiotic Residue</span>
                <span className="text-xs font-mono font-bold text-neutral-900">&lt; 0.1 ppb Limit</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Pathogen Screening</span>
                <span className="text-xs font-mono font-bold text-neutral-900">0 CFU Salmonella</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Cold Chain</span>
                <span className="text-xs font-mono font-bold text-neutral-900">-18°C Continuous</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-neutral-200 shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Global Audit</span>
                <span className="text-xs font-mono font-bold text-neutral-900">BRCGS Grade AA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Certificate of Analysis (CoA) Modal */}
      {showCoAModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white text-[#161615] rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-neutral-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="text-base font-display font-bold">Certificate of Analysis (CoA)</h4>
                  <span className="text-[10px] font-mono text-neutral-400">
                    PO-94821-CF · Batch #AP-2026-0842 · Certified In-House Lab
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowCoAModal(false)}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Table Content */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto font-mono text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-[11px]">
                <div>
                  <span className="text-neutral-500 block">Product:</span>
                  <span className="font-bold text-neutral-900">Vannamei Tail-On</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Count / Size:</span>
                  <span className="font-bold text-neutral-900">16/20 per lb</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Harvest Date:</span>
                  <span className="font-bold text-neutral-900">Aug 2026</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Origin:</span>
                  <span className="font-bold text-neutral-900">Bapatla, AP, India</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                  1. Chemical &amp; Antibiotic Residue Panel (ELISA / LC-MS/MS)
                </span>
                <table className="w-full border-collapse border border-neutral-200 text-left text-[11px]">
                  <thead className="bg-neutral-100 text-neutral-700 font-bold">
                    <tr>
                      <th className="p-2 border border-neutral-200">Parameter</th>
                      <th className="p-2 border border-neutral-200">Test Method</th>
                      <th className="p-2 border border-neutral-200">Action Limit</th>
                      <th className="p-2 border border-neutral-200">Result</th>
                      <th className="p-2 border border-neutral-200">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-2 border border-neutral-200">Chloramphenicol</td>
                      <td className="p-2 border border-neutral-200">LC-MS/MS</td>
                      <td className="p-2 border border-neutral-200">&lt; 0.1 ppb</td>
                      <td className="p-2 border border-neutral-200 font-bold text-emerald-700">Not Detected</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-neutral-200">Nitrofuran Metabolites (AOZ/AMOZ/SEM)</td>
                      <td className="p-2 border border-neutral-200">LC-MS/MS</td>
                      <td className="p-2 border border-neutral-200">&lt; 0.2 ppb</td>
                      <td className="p-2 border border-neutral-200 font-bold text-emerald-700">Not Detected</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-neutral-200">Fluoroquinolones (Ciprofloxacin/Enrofloxacin)</td>
                      <td className="p-2 border border-neutral-200">ELISA</td>
                      <td className="p-2 border border-neutral-200">&lt; 1.0 ppb</td>
                      <td className="p-2 border border-neutral-200 font-bold text-emerald-700">Not Detected</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-neutral-200">Sulfonamides</td>
                      <td className="p-2 border border-neutral-200">ELISA</td>
                      <td className="p-2 border border-neutral-200">&lt; 10 ppb</td>
                      <td className="p-2 border border-neutral-200 font-bold text-emerald-700">Not Detected</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">PASS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                  2. Microbiological &amp; Physical Analysis
                </span>
                <table className="w-full border-collapse border border-neutral-200 text-left text-[11px]">
                  <thead className="bg-neutral-100 text-neutral-700 font-bold">
                    <tr>
                      <th className="p-2 border border-neutral-200">Test</th>
                      <th className="p-2 border border-neutral-200">Standard Spec</th>
                      <th className="p-2 border border-neutral-200">Observed Value</th>
                      <th className="p-2 border border-neutral-200">Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-2 border border-neutral-200">Total Plate Count (TPC)</td>
                      <td className="p-2 border border-neutral-200">&lt; 5.0 x 10^5 CFU/g</td>
                      <td className="p-2 border border-neutral-200">1.2 x 10^3 CFU/g</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">CONFORMS</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-neutral-200">Salmonella spp. (in 25g)</td>
                      <td className="p-2 border border-neutral-200">Absent in 25g</td>
                      <td className="p-2 border border-neutral-200 font-bold text-emerald-700">Absent</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">CONFORMS</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-neutral-200">Core Frozen Temp</td>
                      <td className="p-2 border border-neutral-200">≤ -18.0°C</td>
                      <td className="p-2 border border-neutral-200 font-bold text-neutral-900">-22.4°C</td>
                      <td className="p-2 border border-neutral-200 text-emerald-600 font-bold">CONFORMS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Verified QA Release: Approved for U.S. FDA &amp; BRCGS Import Clearance</span>
                </div>
                <button
                  onClick={() => setShowCoAModal(false)}
                  className="px-3 py-1.5 bg-neutral-900 text-white rounded hover:bg-black font-sans text-xs"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
