import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QUALITY_WITH_PURPOSE_SECTION } from '../../data/impactData';

gsap.registerPlugin(ScrollTrigger);

export const QualityWithPurposeHeadline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const line1 = headlineLine1Ref.current;
    const line2 = headlineLine2Ref.current;
    const rule = ruleRef.current;
    const subtext = subtextRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        [line1, line2, subtext].forEach((el) => {
          if (el) gsap.set(el, { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' });
        });
        if (rule) gsap.set(rule, { width: '100%' });
        return;
      }

      // Requirement 15: Major Typography Section Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Line 1 and Line 2 clip reveal
      const lines = [line1, line2].filter(Boolean);
      tl.fromTo(
        lines,
        { opacity: 0, y: 100, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.3,
          stagger: 0.18,
          ease: 'power4.out',
        }
      );

      // Expanding line rule: width 0 -> 100%
      if (rule) {
        tl.fromTo(
          rule,
          { width: '0%' },
          { width: '100%', duration: 1.2, ease: 'power3.inOut' },
          '-=0.6'
        );
      }

      // Subtext fade in underneath
      if (subtext) {
        tl.fromTo(
          subtext,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="quality-with-purpose"
      className="py-24 sm:py-32 lg:py-44 bg-[#141413] text-white overflow-hidden border-b border-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-300 font-medium">
              {QUALITY_WITH_PURPOSE_SECTION.eyebrow}
            </span>
          </div>

          {/* Monumental Display Typography: clamp(5rem, 11vw, 12rem) */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-display font-medium tracking-tight text-white leading-[0.92] select-none">
            <span className="block overflow-hidden">
              <span
                ref={headlineLine1Ref}
                className="block will-change-[transform,clip-path]"
              >
                QUALITY WITH
              </span>
            </span>
            <span className="block overflow-hidden text-neutral-400">
              <span
                ref={headlineLine2Ref}
                className="block will-change-[transform,clip-path]"
              >
                PURPOSE.
              </span>
            </span>
          </h2>

          {/* Animated Editorial Rule Line */}
          <div className="pt-6 pb-4">
            <div
              ref={ruleRef}
              className="h-[1px] bg-neutral-700 w-0 will-change-[width]"
            />
          </div>

          {/* Subtext underneath */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
            <p
              ref={subtextRef}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl"
            >
              {QUALITY_WITH_PURPOSE_SECTION.subtext}
            </p>

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 shrink-0">
              EST. 1953 · GLOBAL SEAFOOD ENTERPRISE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
