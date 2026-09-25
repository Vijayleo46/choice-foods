import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RESPONSIBILITY_STORIES } from '../../data/impactData';
import { Check, ShieldCheck, HeartHandshake, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ResponsibilityStorytelling: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const stickyMediaRef = useRef<HTMLDivElement>(null);
  const mediaItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const storyBlocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;
    const container = containerRef.current;
    const mediaItems = mediaItemsRef.current.filter(Boolean) as HTMLDivElement[];
    const storyBlocks = storyBlocksRef.current.filter(Boolean) as HTMLDivElement[];

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        mediaItems.forEach((item, idx) => {
          gsap.set(item, { opacity: idx === 0 ? 1 : 0 });
        });
        return;
      }

      // Sticky media entrance reveal on desktop
      if (stickyMediaRef.current && isDesktop) {
        gsap.fromTo(
          stickyMediaRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Requirements 16 & 17: Desktop Storytelling ScrollTrigger Pin
      if (isDesktop && mediaItems.length === 3 && storyBlocks.length === 3) {
        storyBlocks.forEach((block, idx) => {
          ScrollTrigger.create({
            trigger: block,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => switchActiveMedia(idx),
            onEnterBack: () => switchActiveMedia(idx),
          });

          // Bullet points staggered entrance
          const bullets = block.querySelectorAll('.story-bullet');
          gsap.fromTo(
            bullets,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        function switchActiveMedia(index: number) {
          setActiveStoryIndex(index);
          mediaItems.forEach((item, idx) => {
            if (idx === index) {
              gsap.to(item, {
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.8,
                ease: 'power3.out',
              });
            } else {
              gsap.to(item, {
                opacity: 0,
                scale: 1.05,
                clipPath: 'inset(8% 0% 8% 0%)',
                duration: 0.8,
                ease: 'power3.in',
              });
            }
          });
        }
      } else {
        // Mobile layout: Standard clean ScrollTrigger entrances with image reveals
        storyBlocks.forEach((block) => {
          const mobImgWrap = block.querySelector('.mobile-story-img-wrapper');
          const mobImg = block.querySelector('.mobile-story-img');

          const blockTl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });

          blockTl.fromTo(
            block,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );

          if (mobImgWrap) {
            blockTl.fromTo(
              mobImgWrap,
              { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
              { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.1, ease: 'power3.out' },
              0.1
            );
          }

          if (mobImg) {
            blockTl.fromTo(
              mobImg,
              { scale: 1.08, opacity: 0 },
              { scale: 1.0, opacity: 1, duration: 1.3, ease: 'power3.out' },
              0.1
            );
          }
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="responsibility-storytelling"
      className="py-24 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Intro */}
        <div className="mb-16 lg:mb-24 pb-8 border-b border-[#E7E7E3] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8C827A] font-medium">
                RESPONSIBILITY IN ACTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#141413] tracking-tight">
              Operational Integrity
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8C827A]">
            <span className="text-[#141413] font-semibold">CHAPTER 0{activeStoryIndex + 1}</span>
            <span>/</span>
            <span>03</span>
          </div>
        </div>

        {/* Requirements 16 & 17: Split Sticky Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scrolling Story Chapters */}
          <div className="lg:col-span-6 space-y-24 sm:space-y-36">
            {RESPONSIBILITY_STORIES.map((story, idx) => (
              <div
                key={story.id}
                ref={(el) => {
                  storyBlocksRef.current[idx] = el;
                }}
                className="story-block space-y-6 pt-4"
              >
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-[#E7E7E3] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#141413] text-amber-400 flex items-center justify-center font-mono text-xs font-bold">
                      {story.number}
                    </div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#8C827A]">
                      {story.tagline}
                    </span>
                  </div>

                  <div className="text-amber-600">
                    {idx === 0 && <HeartHandshake className="w-5 h-5" />}
                    {idx === 1 && <GraduationCap className="w-5 h-5" />}
                    {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                </div>

                {/* Mobile Image (Visible on mobile screens only) */}
                <div className="mobile-story-img-wrapper lg:hidden aspect-[16/10] rounded-xs overflow-hidden bg-neutral-200 border border-neutral-300 will-change-[clip-path]">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="mobile-story-img w-full h-full object-cover object-center will-change-transform"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-[#141413] tracking-tight leading-snug">
                  {story.title}
                </h3>

                {/* Main Paragraph */}
                <p className="text-base sm:text-lg text-[#5A5854] font-light leading-relaxed">
                  {story.description}
                </p>

                {/* Requirement 18, 19, 20: Staggered Bullet Points with Small Horizontal Line Indicators */}
                <div className="pt-4 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8C827A] mb-2">
                    KEY COMMITMENTS & VERIFICATIONS
                  </p>
                  <ul className="space-y-3">
                    {story.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="story-bullet flex items-center gap-3.5 text-sm sm:text-base text-[#141413] leading-relaxed group"
                      >
                        {/* Requirement 18: Small horizontal line indicator */}
                        <span className="w-4 h-[1.5px] bg-[#141413] group-hover:w-6 transition-all duration-300 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tab switch hint for desktop */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`text-xs font-mono uppercase tracking-widest py-1.5 px-3 rounded-xs border transition-colors cursor-pointer ${
                      activeStoryIndex === idx
                        ? 'bg-[#141413] text-white border-[#141413]'
                        : 'bg-transparent text-[#8C827A] border-[#E7E7E3] hover:text-[#141413]'
                    }`}
                  >
                    View Chapter 0{idx + 1} Visual
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Media Display on Desktop (Requirements 16 & 17) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div
              ref={stickyMediaRef}
              data-cursor="view"
              className="relative aspect-[4/3] rounded-xs overflow-hidden bg-neutral-900 border border-neutral-300 shadow-xl"
            >
              {RESPONSIBILITY_STORIES.map((story, idx) => (
                <div
                  key={story.id}
                  ref={(el) => {
                    mediaItemsRef.current[idx] = el;
                  }}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === activeStoryIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover object-center will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Overlaid Caption & Pillar Number */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300 block mb-1">
                      SECTION 0{idx + 1} · {story.title}
                    </span>
                    <p className="text-sm font-medium text-neutral-200 line-clamp-2">
                      {story.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Navigation Indicators underneath sticky visual */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#8C827A]">
              <span>ACTIVE FOCUS: {RESPONSIBILITY_STORIES[activeStoryIndex]?.title}</span>
              <div className="flex items-center gap-2">
                {RESPONSIBILITY_STORIES.map((_, i) => (
                  <span
                    key={i}
                    className={`block w-6 h-[2px] transition-colors duration-300 ${
                      activeStoryIndex === i ? 'bg-[#141413]' : 'bg-[#E7E7E3]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
