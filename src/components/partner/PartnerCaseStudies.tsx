import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { PARTNER_CASE_STUDIES } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const PartnerCaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cardsRef.current.forEach((card) => {
          if (card) gsap.set(card, { opacity: 1, y: 0 });
        });
        imagesRef.current.forEach((img) => {
          if (img) gsap.set(img, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 });
        });
        linesRef.current.forEach((line) => {
          if (line) gsap.set(line, { width: '100%' });
        });
        return;
      }

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        const img = imagesRef.current[idx];
        const line = linesRef.current[idx];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          },
        });

        // Image clip-path reveal + scale down
        if (img) {
          tl.fromTo(
            img,
            { clipPath: 'inset(12% 0% 12% 0%)', scale: 1.1 },
            { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.4, ease: 'power3.out' },
            0
          );
        }

        // Card content fade & slide
        tl.fromTo(
          card.querySelectorAll('.story-text-element'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          0.2
        );

        // Underline draw
        if (line) {
          tl.fromTo(
            line,
            { width: '0%' },
            { width: '100%', duration: 1.0, ease: 'power2.inOut' },
            0.3
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-40 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="border-b border-[#E7E7E3] pb-8 mb-20">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-800 font-semibold block mb-3">
            STORIES &amp; CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-[#141413]">
            Partnership in Action.
          </h2>
        </div>

        {/* Stories List - Alternating Editorial Rows */}
        <div className="space-y-28 sm:space-y-36">
          {PARTNER_CASE_STUDIES.map((story, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={story.number}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Image Column (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    data-cursor="view"
                    className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xs overflow-hidden border border-[#E7E7E3] bg-neutral-100 shadow-md group"
                  >
                    <img
                      ref={(el) => {
                        imagesRef.current[idx] = el;
                      }}
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Column (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="story-text-element flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-800 font-bold tracking-widest">
                      CASE_0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                      {story.tag}
                    </span>
                  </div>

                  <h3 className="story-text-element text-3xl sm:text-4xl font-display font-medium text-[#141413] leading-snug">
                    {story.title}
                  </h3>

                  <p className="story-text-element text-base sm:text-lg text-[#5A5854] font-light leading-relaxed">
                    {story.description}
                  </p>

                  <div
                    ref={(el) => {
                      linesRef.current[idx] = el;
                    }}
                    className="h-px bg-[#E7E7E3] my-6"
                  />

                  <div className="story-text-element pt-2 flex items-center justify-between text-xs font-mono text-neutral-600">
                    <span className="uppercase tracking-wider">
                      Choice Foods Category Program
                    </span>
                    <div className="flex items-center gap-1.5 text-amber-800 font-semibold group cursor-pointer">
                      <span>READ CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
