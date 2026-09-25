import React, { useState, useEffect, useRef } from 'react';
import { FAMILY_OWNED_CONTENT } from '../../data/aboutData';
import { Award, HeartHandshake, History } from 'lucide-react';

export const AboutFamilyOwned: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counter from 1 to 3
          let current = 1;
          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= 3) {
              clearInterval(interval);
            }
          }, 350);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 lg:py-44 bg-[#FBFBFA] text-[#161615] border-b border-neutral-200 overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-display font-extrabold text-[#161615] leading-none whitespace-nowrap">
        1953
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-700" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
                {FAMILY_OWNED_CONTENT.subheading}
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#161615] leading-[1.05]">
              {FAMILY_OWNED_CONTENT.heading}
            </h2>

            <p className="text-xl sm:text-2xl text-neutral-800 font-serif italic leading-relaxed max-w-2xl">
              “{FAMILY_OWNED_CONTENT.body}”
            </p>

            {/* Visual Data Point: 3 GENERATIONS */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-display font-extrabold text-[#161615] tracking-tight">
                  {count}
                </span>
                <div className="space-y-0.5">
                  <span className="block text-sm sm:text-base font-mono uppercase tracking-widest text-amber-800 font-bold">
                    GENERATIONS
                  </span>
                  <span className="block text-xs text-neutral-500 font-light">
                    Family Legacy & Leadership
                  </span>
                </div>
              </div>

              <div className="sm:border-l sm:border-neutral-300 sm:pl-8 max-w-xs text-xs text-neutral-600 font-light leading-relaxed">
                {FAMILY_OWNED_CONTENT.dataSubtext}
              </div>
            </div>

            {/* Quality Seals */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-600 font-mono">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-amber-700" />
                <span>ESTABLISHED 1953</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-700" />
                <span>UNBROKEN CUSTODY</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-700" />
                <span>ETHICAL RECRUITMENT</span>
              </div>
            </div>
          </div>

          {/* Right: Actual Heritage Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-neutral-900 shadow-2xl border border-neutral-200 overflow-hidden group">
              <img
                src={FAMILY_OWNED_CONTENT.image}
                alt="Choice Foods founding heritage archival image"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <p className="font-mono text-amber-400 font-semibold uppercase text-[11px]">
                  ARCHIVAL PHOTOGRAPH · 1953
                </p>
                <p className="text-neutral-300 text-[11px] font-light">
                  Kerala coastal facilities at the inception of Choice Canning Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
