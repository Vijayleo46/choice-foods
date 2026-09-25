import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { PURPOSE_DRIVEN_COMPANY } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const PurposeDrivenSection: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !imageWrapper || !image) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(imageWrapper, { clipPath: 'inset(0% 0% 0% 0%)' });
        gsap.set(image, { scale: 1 });
        if (content) gsap.set(content, { opacity: 1, y: 0 });
        return;
      }

      // Requirement: scale 1.12 -> 1, clip-path inset(0 12% 0 12%) -> inset(0 0% 0 0)
      gsap.fromTo(
        imageWrapper,
        { clipPath: 'inset(0% 10% 0% 10%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        image,
        { scale: 1.14 },
        {
          scale: 1,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 1,
          },
        }
      );

      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: content,
              start: 'top 85%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#141413] text-[#FBFBFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400 font-semibold block">
              SUSTAINABILITY &amp; ETHICS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.08] tracking-tight">
              {PURPOSE_DRIVEN_COMPANY.heading}
            </h2>
          </div>

          <button
            onClick={() => navigate(PURPOSE_DRIVEN_COMPANY.ctaLink as any)}
            data-cursor="open"
            className="group inline-flex items-center gap-4 text-xs font-mono tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors cursor-pointer self-start md:self-end pb-1 border-b border-neutral-700 hover:border-amber-400"
          >
            <span>{PURPOSE_DRIVEN_COMPANY.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Break-the-grid Wide Visual Container (88-92vw) */}
      <div className="w-[92vw] max-w-[1500px] mx-auto">
        <div
          ref={imageWrapperRef}
          data-cursor="view"
          className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xs overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group"
        >
          <img
            ref={imageRef}
            src={PURPOSE_DRIVEN_COMPANY.image}
            alt={PURPOSE_DRIVEN_COMPANY.alt}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex items-end justify-between border-t border-white/20 pt-4 text-xs font-mono text-neutral-300">
            <span>BAP 4-STAR CERTIFIED AQUACULTURE</span>
            <span className="text-amber-400 uppercase tracking-widest text-[10px]">
              COMMUNITY INVESTED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
