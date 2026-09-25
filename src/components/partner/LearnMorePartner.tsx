import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation, RoutePath } from '../../context/NavigationContext';
import { LEARN_MORE_PARTNER } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const LearnMorePartner: React.FC = () => {
  const { navigate } = useNavigation();
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;

    if (!container || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: idx * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
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
      className="py-24 sm:py-32 bg-[#F4F4F0] text-[#141413] border-b border-[#E7E7E3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="border-b border-neutral-300 pb-6 mb-12 flex items-center justify-between">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-800 font-semibold">
            DISCOVER THE GROUP
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase">
            INTEGRATED HORIZONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEARN_MORE_PARTNER.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onClick={() => navigate(item.path as RoutePath)}
              className="bg-[#FBFBFA] border border-[#E7E7E3] p-8 flex flex-col justify-between group hover:border-[#141413] hover:shadow-lg transition-all duration-300 cursor-pointer rounded-xs"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono tracking-widest text-amber-800 font-semibold block">
                  {item.eyebrow}
                </span>
                <h3 className="text-2xl font-display font-medium text-[#141413] group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A5854] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E7E7E3] flex items-center justify-between text-xs font-mono">
                <span className="text-[#141413] font-semibold uppercase tracking-wider">
                  {item.cta}
                </span>
                <ArrowUpRight className="w-4 h-4 text-amber-800 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
