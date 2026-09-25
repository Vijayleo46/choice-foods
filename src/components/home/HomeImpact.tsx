import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, GraduationCap, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_IMPACT } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomeImpact: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const titleLines = [
    "A LEGACY ROOTED IN",
    "PURPOSE & RESPONSIBILITY"
  ];

  // Requirements 20 & 21: Cinematic Pinned Storytelling & Card Focus Transitions
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;
    const section = sectionRef.current;
    const pinnedWrapper = pinnedWrapperRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const lines = headingLinesRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Title Line Reveal
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
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Desktop Pinned Storytelling Scroll Scrub (Requirement 20 & 21)
      if (isDesktop && pinnedWrapper && cards.length >= 3) {
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedWrapper,
            start: 'top top',
            end: '+=1800',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Step 1: Card 0 is active.
        // As scroll progresses to Card 1: Card 0 scales to 0.94, opacity to 0.35, blur 3px, moves up
        // Card 1 enters and scales to 1, opacity 1
        pinTl
          .to(cards[0], {
            scale: 0.94,
            opacity: 0.35,
            filter: 'blur(3px)',
            y: -30,
            duration: 1,
            ease: 'power2.inOut',
          })
          .fromTo(
            cards[1],
            { y: 150, opacity: 0.2, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.inOut' },
            '<+=0.2'
          )
          // As scroll progresses to Card 2: Card 1 scales to 0.94, opacity 0.35, blur 3px
          // Card 2 enters and scales to 1, opacity 1
          .to(cards[1], {
            scale: 0.94,
            opacity: 0.35,
            filter: 'blur(3px)',
            y: -30,
            duration: 1,
            ease: 'power2.inOut',
          })
          .fromTo(
            cards[2],
            { y: 150, opacity: 0.2, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.inOut' },
            '<+=0.2'
          );
      } else {
        // Mobile fallback: clean ScrollTrigger staggered entrances
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative bg-[#1A262C] text-white overflow-hidden border-b border-white/10"
    >
      {/* Intro Heading Area */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <p className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-300">
                {HOME_IMPACT.eyebrow}
              </p>
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
            onClick={() => navigate('/impact')}
            strength={8}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>DISCOVER OUR PILLARS</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>

      {/* Requirements 20 & 21: Pinned Storytelling Container */}
      <div
        ref={pinnedWrapperRef}
        className="w-full min-h-[100vh] flex flex-col justify-center py-12 lg:py-16 relative"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Active Card Stack on Desktop, Vertical Flow on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
            {HOME_IMPACT.stories.map((story, idx) => (
              <div
                key={story.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="group bg-neutral-900/90 backdrop-blur-md rounded-xs border border-white/15 hover:border-amber-400/50 p-8 flex flex-col justify-between transition-colors shadow-2xl relative overflow-hidden will-change-[transform,opacity,filter]"
              >
                <div>
                  {/* Optional Story Image Thumbnail */}
                  <div className="aspect-[16/9] rounded-xs overflow-hidden mb-6 relative bg-neutral-950 border border-white/10">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-[10px] font-mono text-amber-400 px-2.5 py-1 rounded-xs uppercase">
                      {story.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                      {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 1 && <GraduationCap className="w-4 h-4" />}
                      {idx === 2 && <HeartHandshake className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold tracking-tight text-white mb-3 leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <MagneticButton
                    onClick={() => navigate('/impact')}
                    strength={6}
                    className="text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-2"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                  <span className="text-[10px] font-mono text-neutral-500">
                    CHOICE FOUNDATION
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
