import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_PILLARS } from '../../data/impactData';

gsap.registerPlugin(ScrollTrigger);

export const ImpactPillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;
    const section = sectionRef.current;
    const heading = headingRef.current;
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        [c1, c2, c3].forEach((c) => {
          if (c) {
            gsap.set(c, { opacity: 1, x: 0, y: 0 });
            const wrap = c.querySelector('.pillar-img-wrapper');
            const img = c.querySelector('.pillar-img');
            if (wrap) gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
            if (img) gsap.set(img, { scale: 1, opacity: 1 });
          }
        });
        return;
      }

      // Heading entrance
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Requirement 14 & Premium Image Reveal: Desktop Staggered Cards & Image Reveals
      if (isDesktop && c1 && c2 && c3) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });

        // Cards multi-axis entrance
        tl.fromTo(
          c1,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out' },
          0
        )
          .fromTo(
            c2,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
            0.15
          )
          .fromTo(
            c3,
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out' },
            0.3
          );

        // Images clip-path and scale reveal staggered
        [c1, c2, c3].forEach((c, i) => {
          const wrap = c.querySelector('.pillar-img-wrapper');
          const img = c.querySelector('.pillar-img');
          if (wrap) {
            tl.fromTo(
              wrap,
              { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
              { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.2, ease: 'power3.out' },
              i * 0.15 + 0.1
            );
          }
          if (img) {
            tl.fromTo(
              img,
              { scale: 1.08, opacity: 0 },
              { scale: 1.0, opacity: 1, duration: 1.4, ease: 'power3.out' },
              i * 0.15 + 0.1
            );
          }
        });
      } else {
        // Mobile / Tablet clean stagger with image reveals
        const cards = [c1, c2, c3].filter(Boolean) as HTMLDivElement[];
        cards.forEach((card, i) => {
          const wrap = card.querySelector('.pillar-img-wrapper');
          const img = card.querySelector('.pillar-img');
          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });

          cardTl.fromTo(
            card,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );

          if (wrap) {
            cardTl.fromTo(
              wrap,
              { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
              { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.0, ease: 'power3.out' },
              0.1
            );
          }
          if (img) {
            cardTl.fromTo(
              img,
              { scale: 1.08, opacity: 0 },
              { scale: 1.0, opacity: 1, duration: 1.2, ease: 'power3.out' },
              0.1
            );
          }
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-pillars"
      className="py-24 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 lg:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8C827A] font-medium">
              CORE PILLARS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#141413] tracking-tight">
            Our Impact
          </h2>
          <p className="text-base sm:text-lg text-[#5A5854] font-light mt-4 leading-relaxed">
            Three foundational commitments guide our daily operations, capital allocations, and community engagements.
          </p>
        </div>

        {/* Three Editorial Cards (Requirement 13 & 14) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {IMPACT_PILLARS.map((pillar, idx) => {
            const cardRef = idx === 0 ? card1Ref : idx === 1 ? card2Ref : card3Ref;

            return (
              <div
                key={pillar.id}
                ref={cardRef}
                className="group relative flex flex-col justify-between bg-white rounded-xs border border-[#E7E7E3] hover:border-neutral-400 p-6 sm:p-8 transition-colors duration-300 shadow-xs hover:shadow-md will-change-transform"
              >
                <div>
                  {/* Image container with subtle hover scale (1 -> 1.06) & subtle translation */}
                  <div
                    data-cursor="view"
                    className="pillar-img-wrapper relative aspect-[16/10] overflow-hidden rounded-xs bg-neutral-200 mb-6 border border-neutral-200 will-change-[clip-path]"
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="pillar-img w-full h-full object-cover object-center group-hover:scale-106 group-hover:translate-y-[-2%] transition-transform duration-700 ease-out will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-xs text-[10px] font-mono text-amber-400 px-2.5 py-1 rounded-xs uppercase tracking-wider">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#141413] tracking-tight leading-snug mb-3">
                    {pillar.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="text-sm sm:text-base text-[#5A5854] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subdued Bottom Index Marker */}
                <div className="pt-6 mt-6 border-t border-[#E7E7E3] flex items-center justify-between text-xs font-mono text-[#8C827A]">
                  <span>FRAMEWORK 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
