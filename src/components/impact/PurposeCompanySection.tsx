import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PURPOSE_TRANSITION } from '../../data/impactData';

gsap.registerPlugin(ScrollTrigger);

export const PurposeCompanySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const imgWrapper = imageWrapperRef.current;
    const img = imageRef.current;
    const textCol = textColRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (imgWrapper) gsap.set(imgWrapper, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
        if (img) gsap.set(img, { scale: 1, opacity: 1 });
        if (textCol) gsap.set(textCol, { opacity: 1, y: 0 });
        return;
      }

      // Requirement 12 & Premium Animation: Image reveal inset(0 0 100% 0) -> inset(0 0 0% 0), scale 1.08 -> 1, opacity 0 -> 1
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      if (imgWrapper) {
        tl.fromTo(
          imgWrapper,
          { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.4,
            ease: 'power3.out',
          },
          0
        );
      }

      if (img) {
        tl.fromTo(
          img,
          { scale: 1.08, opacity: 0 },
          { scale: 1.0, opacity: 1, duration: 1.5, ease: 'power3.out' },
          0
        );
      }

      // Text reveal: opacity 0 -> 1, y 60 -> 0
      if (textCol) {
        tl.fromTo(
          textCol,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
          0.25
        );
      }

      // Desktop smooth parallax scroll on image
      if (img && window.innerWidth >= 1024) {
        gsap.to(img, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left / Editorial Typography */}
          <div ref={textColRef} className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8C827A] font-medium">
                {PURPOSE_TRANSITION.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#141413] tracking-tight leading-[1.12]">
              {PURPOSE_TRANSITION.title}
            </h2>

            <p className="text-base sm:text-lg text-[#5A5854] font-light leading-relaxed">
              {PURPOSE_TRANSITION.description}
            </p>

            <div className="pt-2 border-t border-[#E7E7E3] grid grid-cols-2 gap-4 text-xs font-mono text-[#8C827A]">
              <div>
                <span className="block text-[#141413] font-semibold mb-0.5">HEADQUARTERS</span>
                <span>Kochi, Kerala, India</span>
              </div>
              <div>
                <span className="block text-[#141413] font-semibold mb-0.5">PROCESSING HUBS</span>
                <span>Andhra Pradesh & U.S.</span>
              </div>
            </div>
          </div>

          {/* Right / Large Immersive Image Frame */}
          <div className="lg:col-span-7">
            <div
              ref={imageWrapperRef}
              data-cursor="view"
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xs overflow-hidden bg-neutral-200 border border-neutral-300 shadow-md will-change-[clip-path]"
            >
              <img
                ref={imageRef}
                src={PURPOSE_TRANSITION.image}
                alt={PURPOSE_TRANSITION.imageAlt}
                className="w-full h-full object-cover object-center will-change-[transform]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
