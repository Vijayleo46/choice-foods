import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_CAPABILITIES, CapabilityItem } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomeCapabilities: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Split title into lines for text reveal (Requirement 13)
  const titleLines = [
    "ENGINEERED FOR EXCELLENCE,",
    "SCALED FOR GLOBAL DEMAND"
  ];

  // Requirements 14, 15, 16: Sticky Visual Storytelling & Card Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;
    const section = sectionRef.current;
    const stickyContainer = stickyContainerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const lines = headingLinesRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Section Heading Mask Reveal
      gsap.fromTo(
        lines,
        { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.1,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Card Stagger Animation (Requirement 15: 01 -> heading -> description -> CTA)
      cards.forEach((card) => {
        const num = card.querySelector('.cap-num');
        const heading = card.querySelector('.cap-heading');
        const desc = card.querySelector('.cap-desc');
        const btn = card.querySelector('.cap-btn');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(num, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' })
          .fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
          .fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
          .fromTo(btn, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.4');
      });

      // Requirement 14 & 16: Sticky Storytelling ScrollTrigger triggers on desktop
      if (isDesktop && stickyContainer) {
        cards.forEach((card, idx) => {
          ScrollTrigger.create({
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveStoryIdx(idx),
            onEnterBack: () => setActiveStoryIdx(idx),
          });
        });
      }

      // Requirement 17: Horizontal Scroll Moment with ScrollTrigger pinning on desktop
      const horizSection = horizontalSectionRef.current;
      const horizTrack = horizontalTrackRef.current;
      if (isDesktop && horizSection && horizTrack) {
        const scrollDistance = horizTrack.scrollWidth - window.innerWidth + 180;

        gsap.to(horizTrack, {
          x: () => -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: horizSection,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${scrollDistance + 400}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSelect = (index: number) => {
    setActiveStoryIdx(index);
    const targetVideo = videoRefs.current[index];
    if (targetVideo) {
      targetVideo.currentTime = 0;
      targetVideo.play().catch(() => {});
    }
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative bg-[#161615] text-white py-24 lg:py-36 overflow-hidden border-b border-neutral-800"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header with Line Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-800 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-tight">
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
            onClick={() => navigate('/capabilities')}
            strength={8}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>OUR CAPABILITIES</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>

        {/* Requirements 14 & 16: Sticky Visual Area + Scrolling Interactive Story Cards */}
        <div
          ref={stickyContainerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24"
        >
          {/* Sticky Visual Display on Desktop (Requirement 14 & 16) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xs overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            {HOME_CAPABILITIES.map((item, idx) => {
              const isActive = activeStoryIdx === idx;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-out will-change-[transform,opacity,clip-path] ${
                    isActive
                      ? 'opacity-100 scale-100 z-10 [clip-path:inset(0%)]'
                      : 'opacity-0 scale-95 z-0 pointer-events-none [clip-path:inset(8%)]'
                  }`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
                    style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)' }}
                    src={item.video}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Overlaid Information Pill */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="max-w-md">
                      <span className="text-xs font-mono tracking-widest text-amber-400 mb-1 block">
                        CAPABILITY {item.num}
                      </span>
                      <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <Play className="w-3 h-3 fill-current text-amber-400" />
                      FACILITY FOOTAGE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Capability Storytelling Cards (Requirement 15: 01 -> Title -> Description -> CTA) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {HOME_CAPABILITIES.map((item, idx) => {
              const isActive = activeStoryIdx === idx;
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => handleSelect(idx)}
                  className={`cursor-pointer rounded-xs p-8 border transition-all duration-500 flex flex-col justify-between ${
                    isActive
                      ? 'bg-neutral-900/95 border-neutral-500 text-white shadow-xl scale-[1.01]'
                      : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div>
                    <div className="cap-num flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-semibold tracking-wider ${
                          isActive ? 'text-amber-400' : 'text-neutral-500'
                        }`}
                      >
                        {item.num}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? 'text-amber-400 translate-x-0.5 -translate-y-0.5'
                            : 'text-neutral-600'
                        }`}
                      />
                    </div>

                    <h4 className="cap-heading text-2xl font-display font-semibold tracking-tight text-white mb-3">
                      {item.title}
                    </h4>

                    <p className="cap-desc text-sm leading-relaxed text-neutral-300 mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="cap-btn pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/capabilities');
                      }}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-2 group/btn"
                    >
                      <span>EXPLORE SPECIFICATIONS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-mono text-neutral-500">
                      STEP 0{idx + 1} OF 03
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Requirement 17: Premium Horizontal Scroll Moment (Desktop Pinned Scrub, Normal on Mobile) */}
      <div
        ref={horizontalSectionRef}
        className="w-full relative py-12 lg:py-20 border-t border-neutral-800 bg-[#121211]"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl mb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400">
              STORYTELLING JOURNEY · PRODUCTION INFRASTRUCTURE
            </span>
            <span className="hidden lg:inline text-xs font-mono text-neutral-500">
              SCROLL HORIZONTALLY &rarr;
            </span>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="overflow-hidden w-full">
          <div
            ref={horizontalTrackRef}
            className="flex flex-col lg:flex-row gap-6 px-6 lg:px-12 w-full lg:w-max will-change-transform"
          >
            {HOME_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className="group relative w-full lg:w-[460px] flex-none bg-neutral-900/80 rounded-xs border border-neutral-800 hover:border-neutral-600 transition-colors p-6 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xs overflow-hidden mb-6 relative bg-neutral-950">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-xs font-mono text-amber-400 px-2.5 py-1 rounded-xs">
                      {cap.num}
                    </div>
                  </div>

                  <h4 className="text-xl font-display font-semibold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {cap.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                  <MagneticButton
                    onClick={() => navigate('/capabilities')}
                    strength={6}
                    className="text-xs uppercase tracking-[0.18em] font-semibold text-neutral-300 group-hover:text-white flex items-center gap-2"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
