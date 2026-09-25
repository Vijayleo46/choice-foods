import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_PRESS_ARTICLES } from '../../data/impactData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const ImpactPressNews: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cards.forEach((c) => {
          gsap.set(c, { opacity: 1, y: 0 });
          const imgWrap = c.querySelector('.press-img-wrapper');
          const img = c.querySelector('.press-img');
          if (imgWrap) gsap.set(imgWrap, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
          if (img) gsap.set(img, { scale: 1, opacity: 1 });
        });
        return;
      }

      // Requirement 27 & Premium Animation: Press Cards Staggered Reveal
      cards.forEach((card, idx) => {
        const imgWrap = card.querySelector('.press-img-wrapper');
        const img = card.querySelector('.press-img');
        const content = card.querySelector('.press-content');

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
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
        );

        if (imgWrap) {
          tl.fromTo(
            imgWrap,
            { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
            { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.1, ease: 'power3.out' },
            0.1
          );
        }

        if (img) {
          tl.fromTo(
            img,
            { scale: 1.08, opacity: 0 },
            { scale: 1.0, opacity: 1, duration: 1.2, ease: 'power3.out' },
            0.1
          );
        }

        if (content) {
          tl.fromTo(
            content,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            0.2
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-press"
      className="py-24 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E7E7E3]">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8C827A] block mb-2 font-medium">
              MEDIA & SPOTLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#141413] tracking-tight">
              Press & News
            </h2>
          </div>

          <MagneticButton
            onClick={() => navigate('/press')}
            strength={8}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141413] hover:text-[#5A5854] transition-colors"
          >
            <span>Read More Coverage</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* 3 Real Impact Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {IMPACT_PRESS_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => navigate('/press')}
              data-cursor="open"
              className="group flex flex-col justify-between bg-white rounded-xs border border-[#E7E7E3] hover:border-neutral-400 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer overflow-hidden p-6 will-change-transform"
            >
              <div>
                {/* Thumbnail */}
                <div className="press-img-wrapper relative aspect-[16/10] overflow-hidden rounded-xs bg-neutral-100 mb-6 border border-neutral-200 will-change-[clip-path]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="press-img w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="press-content">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8C827A] mb-3">
                    <span className="uppercase tracking-wider font-semibold text-[#141413]">
                      {article.source}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-display font-semibold tracking-tight text-[#141413] mb-3 group-hover:text-amber-700 group-hover:translate-x-1.5 transition-all duration-300 leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#5A5854] font-light leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-[#E7E7E3] flex items-center justify-between text-xs font-mono font-medium text-[#141413] group-hover:text-amber-800">
                <span className="group-hover:underline underline-offset-4">{article.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
