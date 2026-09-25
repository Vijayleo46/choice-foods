import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_FAMILY_OWNED } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, ShieldCheck, Users, Clock } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomeFamilyOwned: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Split heading lead into editorial lines for text reveal
  const leadLines = [
    "Three generations of stewardship,",
    "sustainable aquaculture, and global",
    "cold chain integrity."
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;
    const textContent = textContentRef.current;
    const stats = statsRef.current;
    const lines = headingLinesRef.current;

    if (!section || !imageContainer || !image) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Requirement 13: Heading Line Reveal
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          y: 90,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.1,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Requirement 11: Large Image Reveal
      // Initial: image scale 1.15, clip-path: inset(8% 8% 8% 8%)
      // On scroll: scale -> 1, clip-path -> inset(0)
      gsap.fromTo(
        imageContainer,
        {
          clipPath: 'inset(8% 8% 8% 8%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageContainer,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        image,
        {
          scale: 1.15,
        },
        {
          scale: 1.0,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageContainer,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Requirement 12: Image Parallax (-8% to +8% scrub)
      gsap.fromTo(
        image,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: imageContainer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Requirement 11: Text y: 80px, opacity: 0 -> y: 0, opacity: 1
      if (textContent) {
        gsap.fromTo(
          textContent,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textContent,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Stats rows staggered reveal
      if (stats) {
        const rows = stats.querySelectorAll('.stat-row');
        gsap.fromTo(
          rows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stats,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="family-owned"
      className="relative bg-[#FBFBFA] text-[#141413] py-24 lg:py-36 border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Eyebrow and Headline Lead with Masked Text Reveal (Requirement 13) */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.25em] font-mono text-[#8C827A] mb-4">
            {HOME_FAMILY_OWNED.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-medium leading-[1.25] tracking-tight text-[#141413] text-balance">
            {leadLines.map((line, i) => (
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

        {/* Two-Column Editorial Feature with Authentic Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography with Mask Reveal & Parallax (Requirement 11 & 12) */}
          <div className="lg:col-span-7 relative group">
            <div
              ref={imageContainerRef}
              className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm bg-neutral-200 border border-neutral-300/60 shadow-sm will-change-[clip-path]"
            >
              <img
                ref={imageRef}
                src={HOME_FAMILY_OWNED.image}
                alt="Choice Foods Group Operations & Facility"
                className="w-full h-full object-cover object-center will-change-transform"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

              {/* Photo Caption */}
              <div className="absolute bottom-3 left-4 text-[11px] font-mono tracking-wider text-white/90 bg-black/50 px-3 py-1 backdrop-blur-xs rounded-xs">
                VALUE ADDED FACILITY · ANDHRA PRADESH
              </div>
            </div>

            {/* Decorative Corner Offset Accent */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-neutral-300 pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative Copy, Stats and Call-to-Action */}
          <div
            ref={textContentRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-8 will-change-transform"
          >
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5854] font-normal">
              {HOME_FAMILY_OWNED.body}
            </p>

            {/* Three Foundation Metric Rows */}
            <div ref={statsRef} className="border-t border-b border-[#E7E7E3] py-6 space-y-5">
              {HOME_FAMILY_OWNED.stats.map((stat, idx) => (
                <div key={idx} className="stat-row flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFEFED] flex items-center justify-center flex-none mt-0.5 text-[#141413]">
                    {idx === 0 && <Users className="w-4 h-4" />}
                    {idx === 1 && <Clock className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-semibold text-xl text-[#141413]">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C827A]">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#6F6B66] mt-0.5">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA Button with Magnetic Movement (Requirement 10) */}
            <div>
              <MagneticButton
                onClick={() => navigate('/about/')}
                strength={10}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#141413] hover:bg-[#2C2B29] px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm"
              >
                <span>{HOME_FAMILY_OWNED.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
