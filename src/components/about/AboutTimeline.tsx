import React, { useState, useRef, useEffect } from 'react';
import { TIMELINE_ITEMS, TimelineItem } from '../../data/aboutData';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

export const AboutTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItem = TIMELINE_ITEMS[activeIndex];

  // Auto-align timeline pill strip on index change
  useEffect(() => {
    const pill = document.getElementById(`timeline-pill-${activeIndex}`);
    if (pill && scrollContainerRef.current) {
      pill.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TIMELINE_ITEMS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_ITEMS.length - 1));
  };

  const progressPercent = ((activeIndex + 1) / TIMELINE_ITEMS.length) * 100;

  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-[#141815] text-[#FBFBFA] border-t border-neutral-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-neutral-800 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold">
                HISTORICAL CHRONICLE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
              MODEST BEGINNINGS,<br />
              <span className="text-amber-400">ENTREPRENEURIAL EXCELLENCE</span>
            </h2>
          </div>

          {/* Desktop Timeline Controls */}
          <div className="hidden lg:flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all active:scale-95 focus:outline-none"
                aria-label="Previous milestone"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all active:scale-95 focus:outline-none"
                aria-label="Next milestone"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              MILESTONE {activeIndex + 1} OF {TIMELINE_ITEMS.length}
            </p>
          </div>
        </div>

        {/* Global Progress Track Line */}
        <div className="hidden lg:block w-full bg-neutral-800 h-[2px] mb-12 relative">
          <div
            className="bg-amber-400 h-[2px] transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Year Pills Strip (Desktop Interactive Scroller) */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex items-center gap-3 overflow-x-auto no-scrollbar pb-8 mb-10 border-b border-neutral-800/60"
        >
          {TIMELINE_ITEMS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                id={`timeline-pill-${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`group relative px-6 py-3 rounded-none text-left transition-all duration-300 shrink-0 border ${
                  isActive
                    ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-lg'
                    : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                }`}
              >
                <div className="text-xs font-mono tracking-wider">{item.year}</div>
                <div className="text-[11px] font-display font-medium truncate max-w-[140px] opacity-80">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP HEROIC STAGE: Large Image + Large Year & Text Reveal */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center bg-[#181E1A] border border-neutral-800 p-10 lg:p-14 shadow-2xl relative">
          {/* Left Column: Huge Year & Editorial Narrative */}
          <div className="col-span-6 space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-7xl xl:text-8xl font-display font-extrabold text-amber-400 tracking-tight transition-all duration-500">
                {activeItem.year}
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 border border-neutral-700 px-2.5 py-1">
                {activeItem.era}
              </span>
            </div>

            <h3 className="text-2xl xl:text-3xl font-display font-bold text-white leading-tight">
              {activeItem.title}
            </h3>

            <p className="text-lg text-neutral-200 font-light leading-relaxed">
              {activeItem.description}
            </p>

            <div className="pt-4 border-t border-neutral-800 text-sm text-neutral-400 font-light leading-relaxed">
              {activeItem.detail}
            </div>

            {/* Sub-controls */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="text-xs font-mono text-neutral-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREVIOUS ERA</span>
              </button>
              <span className="text-neutral-600">|</span>
              <button
                onClick={handleNext}
                className="text-xs font-mono text-neutral-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>NEXT ERA</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Actual Timeline Image with Smooth Transition */}
          <div className="col-span-6">
            <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-neutral-300 flex items-center justify-between">
                <span className="font-mono text-amber-400 text-[11px] uppercase">
                  DOCUMENTED ARCHIVE ASSET
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {activeItem.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE RESPONSIVE VERTICAL TIMELINE */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-12 relative">
          {/* Continuous vertical line */}
          <div className="absolute top-4 bottom-4 left-4 w-[2px] bg-neutral-800" />

          {TIMELINE_ITEMS.map((item: TimelineItem, idx: number) => (
            <div key={idx} className="relative pl-12 space-y-4">
              {/* Year Pin Marker */}
              <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#141815] shadow transform -translate-x-1/2" />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display font-extrabold text-amber-400">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 border border-neutral-800 px-2 py-0.5">
                    {item.era}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
                <p className="text-xs text-neutral-400 font-light pt-1">
                  {item.detail}
                </p>
              </div>

              {/* Real Timeline Image */}
              <div className="relative aspect-[16/10] overflow-hidden border border-neutral-800 rounded bg-neutral-900 shadow">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
