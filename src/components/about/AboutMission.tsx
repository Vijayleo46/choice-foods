import React, { useRef, useState, useEffect } from 'react';
import { ABOUT_MISSION } from '../../data/aboutData';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const AboutMission: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-mission"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#FBFBFA] text-[#161615] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-3 transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-8 h-[2px] bg-amber-600" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
                {ABOUT_MISSION.eyebrow}
              </span>
            </div>

            {/* Editorial Heading */}
            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615] leading-[1.08] transition-all duration-700 delay-150 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {ABOUT_MISSION.heading}
            </h2>

            {/* Primary Reference Text (verbatim) */}
            <div className="space-y-6 pt-2">
              <p
                className={`text-xl sm:text-2xl md:text-[26px] leading-[1.4] font-serif italic text-neutral-800 transition-all duration-700 delay-300 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                “{ABOUT_MISSION.lead}”
              </p>

              <div
                className={`h-[1px] w-24 bg-neutral-300 transition-all duration-700 delay-400 ease-out ${
                  inView ? 'scale-x-100' : 'scale-x-0 origin-left'
                }`}
              />

              <p
                className={`text-base sm:text-lg leading-relaxed text-neutral-700 font-light max-w-2xl transition-all duration-700 delay-500 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {ABOUT_MISSION.body}
              </p>
            </div>

            {/* Visual Anchor Metrics */}
            <div
              className={`pt-6 grid grid-cols-2 gap-6 border-t border-neutral-200 transition-all duration-700 delay-600 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#161615]">
                    3
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                    Generations
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-snug">
                  Continuous family-owned operational stewardship since 1953.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#161615]">
                    100%
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                    Value Chain
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-snug">
                  Complete custody from harvest ponds to retail plate.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Reference Image with Clip-Path Reveal & Parallax */}
          <div className="lg:col-span-5">
            <div
              className={`relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-200/80 transition-all duration-1000 ease-out ${
                inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <img
                src={ABOUT_MISSION.image}
                alt="Choice Foods team and facility operations"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] hover:scale-105 transition-transform duration-700"
              />

              {/* Editorial Frame Overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs z-10 flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-mono text-amber-300 font-semibold text-[11px] tracking-wider uppercase">
                    INTEGRATED VALUE CHAIN
                  </p>
                  <p className="text-neutral-200 text-[11px] font-light">
                    Farm · Fishermen · Advanced Facilities · Table
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
