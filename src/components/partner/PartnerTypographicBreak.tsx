import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TYPOGRAPHIC_BREAK } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const PartnerTypographicBreak: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const text = textRef.current;
    const subline = sublineRef.current;

    if (!container || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
            },
          }
        );
      }

      if (subline) {
        gsap.fromTo(
          subline,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: subline,
              start: 'top 88%',
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-44 lg:py-48 bg-[#141413] text-[#FBFBFA] border-b border-neutral-800 text-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400 font-semibold block">
          THE CHOICE STANDING
        </span>

        <h2
          ref={textRef}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.12]"
        >
          &ldquo;{TYPOGRAPHIC_BREAK.quote}&rdquo;
        </h2>

        <p
          ref={sublineRef}
          className="text-base sm:text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {TYPOGRAPHIC_BREAK.subline}
        </p>
      </div>
    </section>
  );
};
