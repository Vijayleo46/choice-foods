import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_HERO } from '../../data/impactData';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ImpactHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const lineIndicatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const image = imageRef.current;
    const imageWrapper = imageWrapperRef.current;
    const eyebrow = eyebrowRef.current;
    const line1 = titleLine1Ref.current;
    const line2 = titleLine2Ref.current;
    const desc = descRef.current;
    const indicator = indicatorRef.current;
    const lineIndicator = lineIndicatorRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (image) gsap.set(image, { opacity: 1, scale: 1 });
        return;
      }

      // Initial Intro Timeline (Requirements 7 & 8)
      const tl = gsap.timeline({ delay: 0.2 });

      // Image reveal: scale 1.12 -> 1.0, opacity 0 -> 1
      if (image) {
        tl.fromTo(
          image,
          { scale: 1.12, opacity: 0 },
          { scale: 1.0, opacity: 1, duration: 1.6, ease: 'power4.out' },
          0
        );
      }

      // Eyebrow reveal
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.3
        );
      }

      // Main Heading Line-by-Line Clip-Path Reveal (clip-path: inset(100% 0 0 0) -> inset(0% 0 0 0), y: 80 -> 0)
      const titleLines = [line1, line2].filter(Boolean);
      if (titleLines.length > 0) {
        tl.fromTo(
          titleLines,
          { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
          },
          0.4
        );
      }

      // Supporting Copy reveal
      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
          0.8
        );
      }

      // Scroll Indicator entrance
      if (indicator) {
        tl.fromTo(
          indicator,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          1.1
        );
      }

      // Indicator vertical line loop (0 -> 50px height) (Requirement 9)
      if (lineIndicator) {
        gsap.fromTo(
          lineIndicator,
          { height: 0, opacity: 0.2 },
          {
            height: 48,
            opacity: 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
          }
        );
      }

      // Parallax scroll effect (Requirement 8 & 36)
      if (imageWrapper) {
        gsap.to(imageWrapper, {
          yPercent: 12,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax for text at differential speed
      if (desc && titleLines.length > 0) {
        gsap.to([titleLines, desc, eyebrow], {
          y: -40,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Fade out scroll indicator on scroll (Requirement 9)
      if (indicator) {
        gsap.to(indicator, {
          opacity: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '20% top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('impact-statistics');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="impact-hero"
      className="relative w-full min-h-[92vh] lg:min-h-[100vh] flex flex-col justify-end bg-[#141413] text-white px-6 sm:px-10 lg:px-16 pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-neutral-800"
    >
      {/* Background Hero Media with Subtle Parallax Layer */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        <img
          ref={imageRef}
          src={IMPACT_HERO.heroImage}
          alt={IMPACT_HERO.heroImageAlt}
          className="w-full h-full object-cover object-center will-change-[transform,opacity]"
          fetchPriority="high"
          loading="eager"
        />
        {/* Cinematic Film Vignette & Neutral Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/65 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[#141413]/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span
            ref={eyebrowRef}
            className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-neutral-300 font-medium"
          >
            {IMPACT_HERO.eyebrow}
          </span>
        </div>

        {/* Main Display Headline with Line-by-Line Clip Masks */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-display font-medium tracking-tight text-white leading-[0.95] mb-8">
          <span className="block overflow-hidden">
            <span
              ref={titleLine1Ref}
              className="block will-change-[transform,clip-path]"
            >
              OUR IMPACT.
            </span>
          </span>
          <span className="block overflow-hidden text-neutral-400 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2">
            <span
              ref={titleLine2Ref}
              className="block will-change-[transform,clip-path]"
            >
              A legacy of integrity
            </span>
          </span>
        </h1>

        {/* Supporting Narrative - Exact source copy */}
        <div className="max-w-2xl sm:max-w-3xl">
          <p
            ref={descRef}
            className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed sm:leading-relaxed"
          >
            {IMPACT_HERO.description}
          </p>
        </div>
      </div>

      {/* Requirement 9: Minimal Bottom Scroll Indicator */}
      <div
        ref={indicatorRef}
        onClick={scrollToNext}
        data-cursor="explore"
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 hidden sm:flex flex-col items-center gap-3 cursor-pointer group select-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 group-hover:text-white transition-colors">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <span
            ref={lineIndicatorRef}
            className="block w-full bg-amber-400 will-change-[height]"
          />
        </div>
        <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-colors animate-bounce" />
      </div>
    </section>
  );
};
