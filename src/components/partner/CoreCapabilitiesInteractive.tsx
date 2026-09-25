import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CORE_CAPABILITIES, CapabilityItem } from '../../data/partnerData';

gsap.registerPlugin(ScrollTrigger);

export const CoreCapabilitiesInteractive: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftStickyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const leftSticky = leftStickyRef.current;
    const image = imageRef.current;
    const heading = headingRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (heading) gsap.set(heading, { opacity: 1, y: 0 });
        if (image) gsap.set(image, { opacity: 1, scale: 1 });
        return;
      }

      // Heading reveal
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
            },
          }
        );
      }

      // Image entrance reveal with clip-path
      if (image) {
        gsap.fromTo(
          image,
          { clipPath: 'inset(15% 0% 15% 0%)', scale: 1.1, opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftSticky,
              start: 'top 80%',
            },
          }
        );
      }

      // Desktop: ScrollTrigger to sync active capability item as user scrolls through the section
      const capabilityCards = container.querySelectorAll('.capability-scroll-item');
      capabilityCards.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 65%',
          end: 'bottom 45%',
          onEnter: () => setActiveIdx(idx),
          onEnterBack: () => setActiveIdx(idx),
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#F4F4F0] text-[#141413] border-b border-[#E7E7E3] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="border-b border-neutral-300 pb-8 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-800 font-semibold block mb-3">
            CAPABILITY ARCHITECTURE
          </span>
          <h2
            ref={headingRef}
            className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-[#141413]"
          >
            {CORE_CAPABILITIES.heading}
          </h2>
        </div>

        {/* Desktop 2-Column: Sticky Left Image, Scrolling Right Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sticky Editorial Image (5 cols) */}
          <div
            ref={leftStickyRef}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-4"
          >
            <div
              data-cursor="view"
              className="relative aspect-[3/4] max-h-[580px] w-full bg-neutral-200 overflow-hidden rounded-xs border border-neutral-300 shadow-xl group"
            >
              <img
                ref={imageRef}
                src={CORE_CAPABILITIES.image}
                alt={CORE_CAPABILITIES.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/30 pt-4 text-xs font-mono text-white">
                <span>TASTEE CHOICE &reg;</span>
                <span className="uppercase text-amber-300 tracking-wider">
                  {CORE_CAPABILITIES.items[activeIdx]?.title || 'VALUE ADDED'}
                </span>
              </div>
            </div>

            {/* Current Active Step Indicator for Desktop */}
            <div className="hidden lg:flex items-center justify-between text-xs font-mono text-neutral-500 pt-2">
              <span>ACTIVE STAGE: 0{activeIdx + 1} / 03</span>
              <div className="flex gap-1.5">
                {CORE_CAPABILITIES.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIdx(i);
                      const target = document.getElementById(`capability-item-${i}`);
                      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`h-1 transition-all duration-300 cursor-pointer ${
                      activeIdx === i ? 'w-8 bg-amber-800' : 'w-3 bg-neutral-300'
                    }`}
                    aria-label={`Jump to capability ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Capabilities Accordion/Scroll Items (7 cols) */}
          <div ref={itemsContainerRef} className="lg:col-span-7 space-y-12 sm:space-y-16">
            {CORE_CAPABILITIES.items.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  id={`capability-item-${idx}`}
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`capability-scroll-item p-8 sm:p-10 border transition-all duration-500 rounded-xs cursor-pointer ${
                    isActive
                      ? 'bg-white border-neutral-400 shadow-md translate-x-1 sm:translate-x-2'
                      : 'bg-[#FBFBFA] border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <span
                      className={`text-sm font-mono transition-colors duration-300 ${
                        isActive ? 'text-amber-800 font-bold' : 'text-neutral-400'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-amber-800' : 'text-neutral-400'
                      }`}
                    >
                      CATEGORY STRENGTH
                    </span>
                  </div>

                  <h3
                    className={`text-3xl sm:text-4xl font-display font-medium tracking-tight mb-4 transition-colors duration-300 ${
                      isActive ? 'text-[#141413]' : 'text-neutral-600'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#5A5854] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500 uppercase">
                      Vertical Integration &bull; Cold-Chain Assured
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? 'text-amber-800 translate-x-1'
                          : 'text-neutral-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
