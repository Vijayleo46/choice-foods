import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_PRESS } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomePress: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const titleLines = [
    "PERSPECTIVES ON SUSTAINABLE",
    "SEAFOOD & GLOBAL SUPPLY"
  ];

  // Requirements 22 & 23: Staggered Cards & Image Clip Reveal inset(12%) -> inset(0%)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const lines = headingLinesRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Section Title Reveal
      gsap.fromTo(
        lines,
        { opacity: 0, y: 70, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.0,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Card Staggered Entrances with Image Clip Reveal (Requirement 22 & 23)
      cards.forEach((card, idx) => {
        const imgWrapper = card.querySelector('.press-img-wrapper');
        const img = card.querySelector('.press-img');
        const meta = card.querySelector('.press-meta');
        const headline = card.querySelector('.press-headline');
        const desc = card.querySelector('.press-desc');
        const link = card.querySelector('.press-link');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: idx * 0.15,
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
          .fromTo(
            imgWrapper,
            { clipPath: 'inset(12% 12% 12% 12%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.0, ease: 'power3.out' },
            '-=0.6'
          )
          .fromTo(
            img,
            { scale: 1.08 },
            { scale: 1.0, duration: 1.2, ease: 'power3.out' },
            '<+=0.1'
          )
          .fromTo(
            meta,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.7'
          )
          .fromTo(
            headline,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.5'
          )
          .fromTo(
            desc,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.4'
          )
          .fromTo(
            link,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: 'power2.out' },
            '-=0.3'
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="press"
      className="relative bg-[#FBFBFA] text-[#141413] py-24 lg:py-36 border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#E7E7E3]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-mono text-[#8C827A] mb-2">
              {HOME_PRESS.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[#141413]">
              {titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      if (el) headingLinesRef.current[i] = el;
                    }}
                    className="block will-change-[transform,clip-path]"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          <MagneticButton
            onClick={() => navigate('/press')}
            strength={8}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141413] hover:text-[#5A5854] transition-colors"
          >
            <span>VIEW ALL MEDIA COVERAGE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>

        {/* Three Press & News Feature Cards with Mask Reveals & Premium Hovers (Requirements 22 & 23) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {HOME_PRESS.articles.map((article, idx) => (
            <article
              key={article.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => navigate('/press')}
              className="group flex flex-col justify-between bg-white rounded-xs border border-[#E7E7E3] hover:border-neutral-400 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer overflow-hidden p-6 will-change-transform"
            >
              <div>
                {/* Thumbnail with Mask Reveal & Hover Scale (1.0 -> 1.06) */}
                <div className="press-img-wrapper relative aspect-[16/10] overflow-hidden rounded-xs bg-neutral-100 mb-6 border border-neutral-200/60 will-change-[clip-path]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="press-img w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Source and Publication Date */}
                <div className="press-meta flex items-center justify-between text-[11px] font-mono text-[#8C827A] mb-3">
                  <span className="uppercase tracking-wider font-medium text-[#141413]">
                    {article.source}
                  </span>
                  <span>{article.date}</span>
                </div>

                {/* Headline with Hover Translate (x: 0 -> 8px) */}
                <h3 className="press-headline text-lg sm:text-xl font-display font-semibold tracking-tight text-[#141413] mb-3 group-hover:text-amber-700 group-hover:translate-x-2 transition-all duration-300 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="press-desc text-xs sm:text-sm text-[#5A5854] leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Read Action with Arrow Translate (x: 0 -> 10px) */}
              <div className="press-link pt-6 mt-6 border-t border-[#E7E7E3] flex items-center justify-between text-xs font-mono font-medium text-[#141413] group-hover:text-amber-800">
                <span>{article.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-2.5 transition-transform duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
