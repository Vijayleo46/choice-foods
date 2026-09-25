import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Globe2, ArrowUpRight } from 'lucide-react';
import { GLOBAL_PRESENCE_LOCATIONS, GlobalPresenceLocation } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const GlobalPresenceSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const [activeLocation, setActiveLocation] = useState<GlobalPresenceLocation>(
    GLOBAL_PRESENCE_LOCATIONS[0]
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const heading = headingRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (heading) gsap.set(heading, { opacity: 1, y: 0 });
        rowsRef.current.forEach((row) => {
          if (row) gsap.set(row, { opacity: 1, x: 0 });
        });
        linesRef.current.forEach((line) => {
          if (line) gsap.set(line, { width: '100%' });
        });
        numbersRef.current.forEach((num) => {
          if (num) gsap.set(num, { opacity: 1 });
        });
        return;
      }

      // Heading animation
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
            },
          }
        );
      }

      // Location rows sequential entrance
      rowsRef.current.forEach((row, idx) => {
        if (!row) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
          },
        });

        const num = numbersRef.current[idx];
        const line = linesRef.current[idx];

        if (num) {
          tl.fromTo(num, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0);
        }

        tl.fromTo(
          row,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' },
          0.1
        );

        if (line) {
          tl.fromTo(
            line,
            { width: '0%' },
            { width: '100%', duration: 1.1, ease: 'power2.inOut' },
            0.15
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="global-presence"
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#161615] text-[#FBFBFA] border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Subtle world grid SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-[140%] h-[140%] object-cover stroke-white stroke-[0.5] fill-none"
        >
          <path d="M 150,150 Q 250,50 350,150 T 550,150 T 750,150 T 950,150" />
          <path d="M 50,250 Q 250,150 450,250 T 850,250" />
          <path d="M 150,350 Q 350,250 550,350 T 950,350" />
          <circle cx="280" cy="190" r="4" className="fill-amber-400 stroke-none" />
          <circle cx="295" cy="205" r="4" className="fill-amber-400 stroke-none" />
          <circle cx="735" cy="260" r="4" className="fill-amber-400 stroke-none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-neutral-800 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400">
                GEOGRAPHIC INFRASTRUCTURE
              </span>
            </div>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white"
            >
              CHOICE&apos;S GLOBAL PRESENCE.
            </h2>
          </div>

          <p className="text-sm font-mono text-neutral-400 max-w-xs leading-relaxed">
            Directly owned and operated value-added manufacturing facilities across India and North
            America.
          </p>
        </div>

        {/* Typographic Locations List & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Sequential Locations List (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {GLOBAL_PRESENCE_LOCATIONS.map((loc, idx) => {
              const isActive = activeLocation.number === loc.number;

              return (
                <div
                  key={loc.number}
                  className="group cursor-pointer"
                  onClick={() => setActiveLocation(loc)}
                  onMouseEnter={() => setActiveLocation(loc)}
                >
                  <div
                    ref={(el) => {
                      rowsRef.current[idx] = el;
                    }}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-6 transition-all duration-300 group-hover:translate-x-2"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span
                        ref={(el) => {
                          numbersRef.current[idx] = el;
                        }}
                        className={`text-sm sm:text-base font-mono transition-colors duration-300 ${
                          isActive ? 'text-amber-400 font-bold' : 'text-neutral-500'
                        }`}
                      >
                        {loc.number}
                      </span>
                      <div>
                        <h3
                          className={`text-2xl sm:text-4xl font-display transition-colors duration-300 ${
                            isActive
                              ? 'text-white font-medium'
                              : 'text-neutral-400 group-hover:text-neutral-200'
                          }`}
                        >
                          {loc.location}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-wider mt-1.5">
                          {loc.facility}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex items-center gap-3">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest transition-opacity duration-300 ${
                          isActive ? 'opacity-100 text-amber-400' : 'opacity-0 sm:group-hover:opacity-60 text-neutral-500'
                        }`}
                      >
                        ACTIVE HUB
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? 'text-amber-400 translate-x-0.5 -translate-y-0.5'
                            : 'text-neutral-600 group-hover:text-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanding line indicator */}
                  <div
                    ref={(el) => {
                      linesRef.current[idx] = el;
                    }}
                    className={`h-px transition-colors duration-300 ${
                      isActive ? 'bg-amber-400/80' : 'bg-neutral-800 group-hover:bg-neutral-700'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Location Specifications Card (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-800 p-8 rounded-xs relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                HUB SPECIFICATIONS [{activeLocation.number}]
              </span>
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono uppercase text-neutral-500">Facility Type</p>
                <p className="text-lg font-display text-white font-medium mt-0.5">
                  {activeLocation.facility}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase text-neutral-500">Geographic Territory</p>
                <p className="text-base font-display text-neutral-200 mt-0.5">
                  {activeLocation.location}
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-mono uppercase text-neutral-500 mb-1">Operational Scope</p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {activeLocation.details}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>GPS Coordinates</span>
                <span className="text-amber-400">
                  {activeLocation.coordinates.lat.toFixed(4)}&deg; N,{' '}
                  {Math.abs(activeLocation.coordinates.lng).toFixed(4)}&deg;{' '}
                  {activeLocation.coordinates.lng >= 0 ? 'E' : 'W'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
