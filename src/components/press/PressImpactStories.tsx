import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IMPACT_STORIES } from '../../data/pressData';
import { useNavigation } from '../../context/NavigationContext';

gsap.registerPlugin(ScrollTrigger);

export const PressImpactStories: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const total = IMPACT_STORIES.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Animate slide change
  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0.2, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, [activeIndex]);

  const currentStory = IMPACT_STORIES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#141413] text-[#FAF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background full-bleed archival imagery with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/press/da5ba5f23c8f7fde5c095e0926b2d65873bfcf25-1-1250x748.avif"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/80 to-[#141413]/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Section Top Header & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/15">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D97706] font-semibold">
              FIELD CAPABILITIES & ARCHIVAL STORIES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-[-0.02em] leading-tight">
              A purpose-driven global seafood company.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/impact')}
              className="px-6 py-3 bg-white text-[#141413] hover:bg-[#FAF9F5] text-xs font-mono uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>Our Impact</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Interactive Media Card (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={slideRef}
              className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#262626] border border-white/10 group shadow-2xl"
            >
              <img
                src={currentStory.image}
                alt={currentStory.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag & index badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-xs text-[10px] font-mono uppercase tracking-widest text-[#D97706] border border-white/10">
                STORY {currentStory.number} / 03 · {currentStory.tag}
              </div>

              {/* Bottom location metrics bar */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-[#D6D3D1]">
                <span>{currentStory.metrics}</span>
                <button
                  onClick={() => navigate(currentStory.targetPath)}
                  className="inline-flex items-center gap-1.5 text-[#F59E0B] hover:text-white transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-wider">Explore Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Narrative Details & Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A8A29E]">
                <span className="text-[#D97706] font-bold">CASE STUDY {currentStory.number}</span>
                <span>/</span>
                <span>03</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white leading-tight">
                {currentStory.title}
              </h3>

              <p className="text-base sm:text-lg text-[#D6D3D1] font-light leading-relaxed">
                {currentStory.description}
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 border-t border-white/15 flex items-center justify-between">
              {/* Stepper indicators */}
              <div className="flex items-center gap-2">
                {IMPACT_STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      activeIndex === i ? 'w-8 bg-[#D97706]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 border border-white/20 text-white hover:bg-white hover:text-[#141413] transition-colors"
                  aria-label="Previous story"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 border border-white/20 text-white hover:bg-white hover:text-[#141413] transition-colors"
                  aria-label="Next story"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
