import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_GLOBAL_PRESENCE } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomeGlobalPresence: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const headingLinesRef = useRef<HTMLSpanElement[]>([]);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const markerIndiaRef = useRef<SVGGElement>(null);
  const markerUsaRef = useRef<SVGGElement>(null);
  const imageCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const titleLines = [
    "GLOBAL PRESENCE.",
    "LOCAL IMPACT."
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const path = svgPathRef.current;
    const markerIndia = markerIndiaRef.current;
    const markerUsa = markerUsaRef.current;
    const lines = headingLinesRef.current;
    const cards = imageCardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Requirement 13: Title Line Reveal
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

      // Requirement 18: World Map Grid & SVG Animated Connecting Line (stroke-dashoffset)
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        const mapTl = gsap.timeline({
          scrollTrigger: {
            trigger: mapSvgRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        mapTl
          .fromTo(
            markerIndia,
            { scale: 0, transformOrigin: 'center center', opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' }
          )
          .to(path, {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: 'power2.inOut',
          })
          .fromTo(
            markerUsa,
            { scale: 0, transformOrigin: 'center center', opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
            '-=0.4'
          );
      }

      // Requirement 19: Global Presence Layered Image Parallax (Foreground vs Background)
      cards.forEach((card, idx) => {
        const isEven = idx % 2 === 0;
        gsap.fromTo(
          card,
          { y: isEven ? -25 : 25 },
          {
            y: isEven ? 25 : -25,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative bg-[#FBFBFA] text-[#141413] py-24 lg:py-36 border-b border-[#E7E7E3] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[#8C827A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#8C827A]">
                {HOME_GLOBAL_PRESENCE.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-[#141413]">
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

          <div className="max-w-md flex flex-col justify-between">
            <p className="text-base text-[#5A5854] leading-relaxed mb-4">
              {HOME_GLOBAL_PRESENCE.description}
            </p>
            <div>
              <MagneticButton
                onClick={() => navigate('/about/')}
                strength={8}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141413] hover:text-[#5A5854] transition-colors"
              >
                <span>{HOME_GLOBAL_PRESENCE.ctaText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Requirement 18: World Map Grid & Connecting Supply Route Interactive SVG */}
        <div className="mb-16 bg-[#141413] text-white p-6 sm:p-10 rounded-xs border border-neutral-800 relative overflow-hidden shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-300">
                GLOBAL COLD CHAIN TRANSIT CORRIDOR
              </span>
            </div>
            <div className="flex items-center gap-6 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                KOCHI & ANDHRA (IN)
              </span>
              <span>&rarr;</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                NEW JERSEY & PA (USA)
              </span>
            </div>
          </div>

          {/* Stylized Transit Route Vector */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] flex items-center justify-center">
            <svg
              ref={mapSvgRef}
              viewBox="0 0 1000 320"
              className="w-full h-full text-white/20 overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Coordinate Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="1000" height="320" fill="url(#grid)" />

              {/* Connecting Arc Line (Requirement 18: stroke-dashoffset animated) */}
              <path
                ref={svgPathRef}
                d="M 680 190 C 580 80, 420 70, 260 160"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* India Hub Location Marker */}
              <g ref={markerIndiaRef} transform="translate(680, 190)">
                <circle r="14" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" />
                <circle r="6" fill="#F59E0B" />
                <circle r="2" fill="#FFFFFF" />
                <text x="14" y="5" fill="#FFFFFF" fontSize="11" fontFamily="monospace" letterSpacing="2">
                  INDIA (KOCHI / ANDHRA)
                </text>
              </g>

              {/* USA Hub Location Marker */}
              <g ref={markerUsaRef} transform="translate(260, 160)">
                <circle r="14" fill="#38BDF8" fillOpacity="0.2" className="animate-ping" />
                <circle r="6" fill="#38BDF8" />
                <circle r="2" fill="#FFFFFF" />
                <text x="-165" y="5" fill="#FFFFFF" fontSize="11" fontFamily="monospace" letterSpacing="2">
                  USA (NJ / PA HUB)
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* The Six Authentic Reference Assets with Layered Parallax (Requirement 19) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-4">
          {HOME_GLOBAL_PRESENCE.images.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                imageCardsRef.current[idx] = el;
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col cursor-pointer transition-all duration-500 will-change-transform"
            >
              {/* Vertical Aspect Editorial Frame */}
              <div className="relative aspect-[9/14] rounded-xs overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-xs">
                <img
                  src={item.url}
                  alt={`${item.caption} - ${item.location}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out will-change-transform"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-amber-300 block uppercase">
                    0{idx + 1} · {item.location}
                  </span>
                  <p className="text-xs font-medium leading-tight mt-0.5 text-neutral-100 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Index Marker */}
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 group-hover:text-neutral-700 transition-colors">
                  LOCATION 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Continental Supply Chain Summary */}
        <div className="mt-16 pt-8 border-t border-[#E7E7E3] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5A5854]">
          <div>
            <span className="font-mono text-[#141413] block font-semibold mb-1">
              INDIA OPERATIONS (KOCHI & ANDHRA)
            </span>
            <p className="leading-relaxed">
              Coastal hatchery integration, farm-gate cold chain management, and BRCGS Grade AA IQF peeling facilities.
            </p>
          </div>
          <div>
            <span className="font-mono text-[#141413] block font-semibold mb-1">
              NORTH AMERICAN HUBS (NJ & PA)
            </span>
            <p className="leading-relaxed">
              Strategic deep-freeze warehousing, sauce emulsification, automated meal-kit assembly, and coast-to-coast distribution.
            </p>
          </div>
          <div>
            <span className="font-mono text-[#141413] block font-semibold mb-1">
              END-TO-END TRACEABILITY
            </span>
            <p className="leading-relaxed">
              Complete batch digital documentation from aquaculture lot harvest directly to retail barcode scan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
