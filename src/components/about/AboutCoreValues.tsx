import React, { useState } from 'react';
import { CORE_VALUES, CoreValueItem } from '../../data/aboutData';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export const AboutCoreValues: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('promise');

  const activeValue = CORE_VALUES.find((v) => v.id === activeId) || CORE_VALUES[0];

  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-[#FBFBFA] text-[#161615] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-700" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
              OPERATIONAL PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
            CHOICE’S CORE VALUES
          </h2>

          <p className="text-lg sm:text-xl text-neutral-600 font-light leading-relaxed">
            Our values are shaped by how we’ve built the business over time. They guide how we make decisions, how we work with partners, and how we continue to grow.
          </p>
        </div>

        {/* Desktop Split & Mobile Responsive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Accordion List (8 cols on lg) */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-y border-neutral-200">
            {CORE_VALUES.map((item: CoreValueItem) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className={`group transition-all duration-300 ${
                    isOpen ? 'bg-neutral-100/50 -mx-4 px-4 sm:-mx-6 sm:px-6' : ''
                  }`}
                >
                  <button
                    onClick={() => setActiveId(isOpen ? '' : item.id)}
                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6 sm:gap-8">
                      <span
                        className={`text-xl sm:text-2xl font-mono transition-colors duration-300 ${
                          isOpen ? 'text-amber-800 font-bold' : 'text-neutral-400 group-hover:text-neutral-700'
                        }`}
                      >
                        {item.num}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${
                          isOpen ? 'text-[#161615]' : 'text-neutral-700 group-hover:text-[#161615]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Plus / Minus morph button */}
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#161615] text-white border-transparent rotate-180'
                          : 'border-neutral-300 text-neutral-600 group-hover:border-neutral-900 group-hover:text-black'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    <div className="pl-12 sm:pl-16 pr-4 space-y-4">
                      <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 space-y-2">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                          Core Tenets:
                        </p>
                        <div className="space-y-1.5">
                          {item.detailPoints.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Inline Image Preview */}
                      <div className="lg:hidden pt-4">
                        <div className="relative aspect-[16/10] overflow-hidden rounded shadow border border-neutral-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Preview Visual Column (5 cols on lg) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-36">
            <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-neutral-200">
              {/* Dynamic Image with Fade Transition */}
              <img
                key={activeValue.id}
                src={activeValue.image}
                alt={activeValue.title}
                className="w-full h-full object-cover filter contrast-[1.05] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    VALUE {activeValue.num}
                  </span>
                </div>
                <h4 className="text-xl font-display font-bold leading-tight">
                  {activeValue.title}
                </h4>
                <p className="text-xs text-neutral-300 font-light line-clamp-2">
                  {activeValue.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
