import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PARTNERSHIP_MANIFESTO } from '../../data/partnerData';
import { PartnerContactForm } from './PartnerContactForm';

gsap.registerPlugin(ScrollTrigger);

export const PartnershipManifesto: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const heading = headingRef.current;
    const text = textRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (heading) gsap.set(heading, { opacity: 1, y: 0 });
        if (text) gsap.set(text, { opacity: 1, y: 0 });
        pillarsRef.current.forEach((el) => {
          if (el) gsap.set(el, { opacity: 1, y: 0 });
        });
        return;
      }

      // Heading line reveal
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
            },
          }
        );
      }

      // Text reveal
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 88%',
            },
          }
        );
      }

      // Pillars staggered reveal
      pillarsRef.current.forEach((p, idx) => {
        if (!p) return;
        gsap.fromTo(
          p,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: idx * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 90%',
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Manifesto & Value Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-800 font-semibold block">
                {PARTNERSHIP_MANIFESTO.eyebrow}
              </span>
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#141413] leading-[1.08] tracking-tight"
              >
                {PARTNERSHIP_MANIFESTO.heading}
              </h2>
              <p
                ref={textRef}
                className="text-lg sm:text-xl text-[#5A5854] font-light leading-relaxed max-w-2xl"
              >
                {PARTNERSHIP_MANIFESTO.paragraph}
              </p>
            </div>

            {/* Three Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#E7E7E3]">
              {PARTNERSHIP_MANIFESTO.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  ref={(el) => {
                    pillarsRef.current[idx] = el;
                  }}
                  className="space-y-2.5"
                >
                  <span className="text-xs font-mono text-amber-700 font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-[#141413]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Reach Out To Us Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E7E7E3] p-8 sm:p-10 rounded-xs shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="border-b border-[#E7E7E3] pb-5 mb-8">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-amber-800 font-semibold block mb-1">
                COMMERCIAL INQUIRIES
              </span>
              <h3 className="text-2xl font-display font-medium text-[#141413]">
                Reach Out to Us
              </h3>
            </div>

            <PartnerContactForm formId="manifesto-form" />
          </div>
        </div>
      </div>
    </section>
  );
};
