import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LEARN_MORE_HUBS } from '../../data/impactData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const LearnMoreHubs: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cards.forEach((c) => gsap.set(c, { opacity: 1, y: 0 }));
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FBFBFA] border-b border-[#E7E7E3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-[#E7E7E3]">
          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#141413]">
            Learn More About Us
          </h3>
          <span className="text-xs font-mono text-[#8C827A] uppercase tracking-wider">
            CHOICE FOODS GROUP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LEARN_MORE_HUBS.map((hub, idx) => (
            <div
              key={hub.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => navigate(hub.path)}
              className="group bg-white p-8 rounded-xs border border-[#E7E7E3] hover:border-neutral-400 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8C827A] uppercase block mb-3 group-hover:text-amber-700 transition-colors">
                  {hub.eyebrow}
                </span>
                <h4 className="text-xl font-display font-medium text-[#141413] tracking-tight mb-2 group-hover:text-amber-900 transition-colors">
                  {hub.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed mb-6 font-light">
                  {hub.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E7E3] flex items-center justify-between text-xs font-mono font-medium text-[#141413] group-hover:text-amber-800">
                <span>{hub.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
