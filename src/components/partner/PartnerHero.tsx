import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Handshake } from 'lucide-react';
import { PARTNER_HERO } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const PartnerHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const heading = headingRef.current;
    const eyebrow = eyebrowRef.current;
    const desc = descRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (heading) gsap.set(heading, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' });
        if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
        if (desc) gsap.set(desc, { opacity: 1, y: 0 });
        if (image) gsap.set(image, { opacity: 1, scale: 1 });
        return;
      }

      // Requirement 8: Hero Entrance Timeline
      const tl = gsap.timeline({ delay: 0.2 });

      // Image entrance
      if (image) {
        tl.fromTo(
          image,
          { scale: 1.12, opacity: 0 },
          { scale: 1.0, opacity: 1, duration: 1.6, ease: 'power4.out' },
          0
        );
      }

      // Eyebrow entrance
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.3
        );
      }

      // Heading entrance: clip-path reveal + y: 80 -> 0 + opacity: 0 -> 1
      if (heading) {
        tl.fromTo(
          heading,
          { clipPath: 'inset(100% 0% 0% 0%)', y: 80, opacity: 0 },
          { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1, duration: 1.4, ease: 'power4.out' },
          0.2
        );
      }

      // Supporting text: y: 30 -> 0 + opacity: 0 -> 1
      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
          0.5
        );
      }

      // Subtle Hero Parallax scroll
      if (imageWrapper) {
        gsap.to(imageWrapper, {
          yPercent: 14,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('global-presence');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between bg-[#141413] text-[#FBFBFA] pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden border-b border-neutral-800"
    >
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-900/60 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex-1 flex flex-col justify-between">
        {/* Top Eyebrow & Metric Indicator */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span
              ref={eyebrowRef}
              className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400 font-semibold"
            >
              {PARTNER_HERO.eyebrow}
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase hidden sm:inline-block">
              COMMERCIAL &amp; SUPPLY ALLIANCES
            </span>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
            <Handshake className="w-4 h-4 text-amber-400" />
            <span className="tracking-wider uppercase">GLOBAL OPERATIONS</span>
          </div>
        </div>

        {/* Center Grid: Monumental Typography + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1 my-auto">
          {/* Left Text Col (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h1
              ref={headingRef}
              className="text-5xl sm:text-7xl lg:text-[5.75rem] font-display font-medium tracking-tighter text-white leading-[0.92] will-change-transform"
            >
              PARTNER
              <br />
              <span className="italic font-light text-neutral-200">WITH US.</span>
            </h1>

            <div ref={descRef} className="space-y-6 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-display font-light text-amber-100/90 leading-snug tracking-tight">
                {PARTNER_HERO.subheading}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {PARTNER_HERO.description}
              </p>
            </div>
          </div>

          {/* Right Image Visual Col (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              data-cursor="explore"
              className="relative aspect-[4/5] max-h-[520px] rounded-xs overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group will-change-transform"
            >
              <img
                ref={imageRef}
                src={PARTNER_HERO.image}
                alt={PARTNER_HERO.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-[transform,opacity]"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom Visual Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4 text-xs font-mono">
                <span className="text-neutral-300">TASTEE CHOICE &reg;</span>
                <span className="text-amber-400 uppercase tracking-widest text-[10px]">
                  VALUE-ADDED LEADERSHIP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <div className="pt-10 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-6">
            <span>EST. 1953</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span>3 GENERATIONS OF EXCELLENCE</span>
          </div>

          <button
            onClick={scrollToContent}
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to Global Presence section"
          >
            <span className="uppercase tracking-widest text-[11px]">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 transform group-hover:translate-y-1 transition-transform text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
