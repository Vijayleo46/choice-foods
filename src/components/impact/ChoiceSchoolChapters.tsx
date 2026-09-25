import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CHOICE_SCHOOL_CHAPTERS } from '../../data/impactData';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ChoiceSchoolChapters: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const chapterRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const rows = chapterRowRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        rows.forEach((row) => {
          const imgWrapper = row.querySelector('.chapter-img-wrapper');
          const img = row.querySelector('.chapter-img');
          const textBlock = row.querySelector('.chapter-text');
          if (imgWrapper) gsap.set(imgWrapper, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 });
          if (img) gsap.set(img, { scale: 1, opacity: 1 });
          if (textBlock) gsap.set(textBlock, { opacity: 1, y: 0 });
        });
        return;
      }

      // Requirements 22 & 23 & Premium Animation: Large Storytelling Chapters
      rows.forEach((row, idx) => {
        const imgWrapper = row.querySelector('.chapter-img-wrapper');
        const img = row.querySelector('.chapter-img');
        const textBlock = row.querySelector('.chapter-text');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        if (imgWrapper) {
          tl.fromTo(
            imgWrapper,
            { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
            { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.4, ease: 'power3.out' },
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

        if (textBlock) {
          tl.fromTo(
            textBlock,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
            0.25
          );
        }

        // Desktop subtle parallax movement
        if (img && window.innerWidth >= 1024) {
          gsap.to(img, {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="choice-schools"
      className="py-24 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8C827A] font-medium">
              THE CHOICE SCHOOL FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#141413] tracking-tight">
            Cultivating Future Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#5A5854] font-light mt-4 leading-relaxed">
            Founded with the conviction that education is the bedrock of societal advancement, The Choice School has nurtured over four decades of alumni across India and worldwide.
          </p>
        </div>

        {/* Requirements 22 & 23: Three Large Storytelling Chapters in Alternating Layouts */}
        <div className="space-y-24 sm:space-y-36">
          {CHOICE_SCHOOL_CHAPTERS.map((chapter, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={chapter.id}
                ref={(el) => {
                  chapterRowRefs.current[idx] = el;
                }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    data-cursor="explore"
                    className="chapter-img-wrapper group relative aspect-[16/11] rounded-xs overflow-hidden bg-neutral-200 border border-neutral-300 shadow-md will-change-[clip-path]"
                  >
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      className="chapter-img w-full h-full object-cover object-center group-hover:scale-106 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 ease-out will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 block mb-0.5">
                        {chapter.chapterNumber} · THE CHOICE SCHOOL
                      </span>
                      <p className="text-xs font-medium text-neutral-200">
                        {chapter.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Narrative Text Column */}
                <div className={`chapter-text lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-amber-700">
                      {chapter.chapterNumber}
                    </span>
                    <span className="w-6 h-[1px] bg-[#E7E7E3]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#141413] tracking-tight leading-snug">
                    {chapter.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#5A5854] font-light leading-relaxed">
                    {chapter.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#8C827A]">
                    <span>KCH CURRICULUM</span>
                    <span>·</span>
                    <span>TRIPUNITHURA / THIRUVALLA / KOCHI</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
