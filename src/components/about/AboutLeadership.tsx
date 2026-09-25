import React, { useRef, useState } from 'react';
import { LEADERSHIP_TEAM, LeaderProfile } from '../../data/aboutData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Users, LayoutGrid } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const AboutLeadership: React.FC = () => {
  const { openLeaderProfile, navigate } = useNavigation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-[#FBFBFA] text-[#161615] border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-200 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-700" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
                01 — 11 / EXECUTIVE STEWARDSHIP
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
              LEADERSHIP
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Second and third-generation family stewards collaborating with industry veterans in food science, supply logistics, and international commerce.
            </p>
          </div>

          {/* Carousel Controls & Directory Link */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/leadership/')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-300 hover:border-black text-xs font-mono uppercase tracking-wider text-neutral-800 hover:text-black transition-colors"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Full Directory (11)</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all focus:outline-none ${
                  canScrollLeft
                    ? 'border-neutral-400 text-black hover:bg-black hover:text-white hover:border-black active:scale-95'
                    : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all focus:outline-none ${
                  canScrollRight
                    ? 'border-neutral-400 text-black hover:bg-black hover:text-white hover:border-black active:scale-95'
                    : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          tabIndex={0}
          aria-label="Leadership Carousel"
        >
          {LEADERSHIP_TEAM.map((leader: LeaderProfile, idx: number) => {
            const displayImage = leader.localImage || leader.image;

            return (
              <div
                key={leader.slug}
                onClick={() => openLeaderProfile(leader.slug)}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 group cursor-pointer select-none flex flex-col justify-between bg-white border border-neutral-200 p-5 hover:border-black hover:shadow-2xl transition-all duration-500"
              >
                {/* Portrait Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 mb-6">
                  <img
                    src={displayImage}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Gradient vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Floating Arrow that appears on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-black flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Index Pill */}
                  <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-mono tracking-wider">
                    {leader.num} / 11
                  </div>
                </div>

                {/* Leader Meta - Name moves slightly upward on hover */}
                <div className="space-y-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#161615] group-hover:text-amber-800 transition-colors">
                      {leader.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800">
                    {leader.role}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-mono pt-1">
                    Click to read full biography →
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint and Directory Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
            ← SWIPE TO BROWSE ALL 11 LEADERS →
          </span>
          <button
            onClick={() => navigate('/leadership/')}
            className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 hover:text-black underline inline-flex items-center gap-1.5"
          >
            <span>View Complete 11-Leader Executive Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
