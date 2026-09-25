import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_STATS } from '../../data/impactData';

gsap.registerPlugin(ScrollTrigger);

export const ImpactStatCounters: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numberElementsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Counter animation triggered once when entering viewport (Requirements 10 & 11)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      // Card Stagger entrance
      tl.fromTo(
        cardElementsRef.current.filter(Boolean),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      if (prefersReducedMotion) {
        // Just render final values directly without motion blur
        numberElementsRef.current.forEach((el, index) => {
          if (!el) return;
          const stat = IMPACT_STATS[index];
          el.innerText = `${stat.value.toLocaleString()}${stat.suffix || ''}`;
        });
        return;
      }

      // Count up from 0 -> target with power2.out and subtle blur during count
      numberElementsRef.current.forEach((el, index) => {
        if (!el) return;
        const stat = IMPACT_STATS[index];
        const targetValue = stat.value;
        const suffix = stat.suffix || '';
        const counterObj = { count: 0 };

        tl.to(
          counterObj,
          {
            count: targetValue,
            duration: 2.2,
            ease: 'power2.out',
            onStart: () => {
              gsap.fromTo(
                el,
                { filter: 'blur(3px)' },
                { filter: 'blur(0px)', duration: 1.8, ease: 'power2.out' }
              );
            },
            onUpdate: () => {
              const formattedNumber = Math.floor(counterObj.count).toLocaleString();
              el.innerText = `${formattedNumber}${suffix}`;
            },
            onComplete: () => {
              el.innerText = `${targetValue.toLocaleString()}${suffix}`;
            },
          },
          0.2
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-statistics"
      className="py-20 lg:py-28 bg-[#141413] text-white border-b border-neutral-800 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              ref={(el) => {
                cardElementsRef.current[idx] = el;
              }}
              className="pt-8 md:pt-0 md:px-8 first:px-0 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-neutral-300 block mb-4">
                  METRIC 0{idx + 1}
                </span>

                {/* Oversized Number Counter */}
                <div className="mb-4">
                  <span
                    ref={(el) => {
                      numberElementsRef.current[idx] = el;
                    }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight tabular-nums block will-change-[filter]"
                  >
                    0{stat.suffix || ''}
                  </span>
                </div>

                {/* Exact Label */}
                <h3 className="text-sm sm:text-base font-semibold text-neutral-100 tracking-wide uppercase font-mono mb-3">
                  {stat.label}
                </h3>
              </div>

              {/* Supporting context */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-2">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
