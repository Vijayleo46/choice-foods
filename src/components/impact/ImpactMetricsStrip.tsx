import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_METRICS_STRIP } from '../../data/impactData';

gsap.registerPlugin(ScrollTrigger);

export const ImpactMetricsStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cards.forEach((c) => gsap.set(c, { opacity: 1, scale: 1, y: 0 }));
        return;
      }

      // Requirement 21: Dedicated Premium Metrics Strip
      // Scale 0.85 -> 1, opacity 0 -> 1, y 40 -> 0, staggered 0.12–0.18s
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          scale: 0.85,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-metrics-strip"
      className="py-20 lg:py-28 bg-[#141413] text-white border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-300 block mb-1">
              PERFORMANCE SCORECARD
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              Verified Compliance & Care
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            INDEPENDENTLY AUDITED BENCHMARKS
          </span>
        </div>

        {/* 4 Oversized Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {IMPACT_METRICS_STRIP.map((metric, idx) => (
            <div
              key={metric.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="bg-neutral-900/60 rounded-xs border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors will-change-transform"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block mb-4">
                  {metric.category}
                </span>

                <div className="mb-6">
                  <span className="text-5xl sm:text-6xl font-display font-medium text-white tracking-tight block">
                    {metric.value}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-snug">
                  {metric.label}
                </p>
                {metric.badge && (
                  <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-800/40">
                    {metric.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
