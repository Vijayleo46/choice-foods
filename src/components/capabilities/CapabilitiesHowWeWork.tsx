import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';

export const CapabilitiesHowWeWork: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = CAPABILITIES_DATA.slider1;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="how-we-work" className="w-full bg-[#FBFBFA] text-[#161615] overflow-hidden">
      {/* Editorial Text Statement */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-700" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
                END-TO-END EXECUTION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615] leading-[1.08]">
              HOW WE WORK
            </h2>
            <div className="pt-4 hidden lg:block">
              <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block">
                  PARTNERSHIP MANDATE
                </span>
                <p className="text-xs text-neutral-700 font-light leading-relaxed">
                  Collaborative joint-development programs that bridge raw aquaculture harvesting in coastal India with ready-to-cook packaging across North American distribution hubs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Reference Copy */}
          <div className="lg:col-span-7 space-y-8 text-lg sm:text-xl font-light text-neutral-700 leading-relaxed">
            <p className="font-normal text-xl sm:text-2xl text-[#161615] leading-snug">
              Choice Foods supports business partners across the full spectrum of seafood product development and production — from concept through delivery.
            </p>

            <p className="leading-relaxed">
              Our capabilities are built around disciplined production, strong quality control systems, and the ability to build programs efficiently across categories and markets.
            </p>

            <p className="leading-relaxed">
              We work closely with each business partner to align on key product attributes, target price points, and operational needs — building programs designed for consistency and long-term performance.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200">
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-amber-900 block">BAP 4★</span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Certified Processing</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-amber-900 block">&lt; 0.1 ppb</span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">ELISA Antibiotic Limit</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-amber-900 block">7 Min</span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Cryogenic IQF Core</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-amber-900 block">100%</span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Lot Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Bleed Processing & Aquaculture Gallery Reel (Slider 1) */}
      <section className="bg-[#121613] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
              FACILITIES &amp; PRIMARY PRODUCTION
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Integrated Coastal Infrastructure
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-neutral-700 hover:border-white flex items-center justify-center text-white transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-neutral-400 px-1">
              0{currentSlide + 1} / 0{slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-neutral-700 hover:border-white flex items-center justify-center text-white transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.local}
                  alt={slide.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = slide.url;
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Caption Bar */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block">
                      PROCESSING PROTOCOL 0{idx + 1}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {slide.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="hidden sm:block">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                      BAP 4★ HARVEST READY
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
