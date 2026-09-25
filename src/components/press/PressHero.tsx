import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Maximize2, X } from 'lucide-react';
import { PRESS_HERO, PressHeroGalleryItem } from '../../data/pressData';

gsap.registerPlugin(ScrollTrigger);

export const PressHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLUListElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PressHeroGalleryItem | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    const headline = headlineRef.current;
    const eyebrow = eyebrowRef.current;
    const desc = descRef.current;
    const gallery = galleryRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (headline) gsap.set(headline, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' });
        if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
        if (desc) gsap.set(desc, { opacity: 1, y: 0 });
        if (gallery) gsap.set(gallery.children, { opacity: 1, y: 0 });
        return;
      }

      // Master Entrance Timeline
      const tl = gsap.timeline({ delay: 0.15 });

      // 1. Eyebrow Reveal
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0
        );
      }

      // 2. Headline Reveal with clip-path mask
      if (headline) {
        tl.fromTo(
          headline,
          { clipPath: 'inset(100% 0% 0% 0%)', y: 70, opacity: 0 },
          { clipPath: 'inset(0% 0% 0% 0%)', y: 0, opacity: 1, duration: 1.3, ease: 'power4.out' },
          0.1
        );
      }

      // 3. Supporting Description Reveal
      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
          0.35
        );
      }

      // 4. Staggered Gallery Items Entrance
      if (gallery) {
        tl.fromTo(
          gallery.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.08,
            ease: 'power3.out',
          },
          0.4
        );
      }

      // ScrollTrigger Parallax on Gallery items
      if (gallery) {
        gsap.to(gallery, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToFeed = () => {
    const feed = document.getElementById('press-feed');
    if (feed) {
      feed.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF9F5] text-[#141413] border-b border-[#E7E5E0] pt-32 sm:pt-40 lg:pt-44 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Subtle curatorial background paper grain & tone */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#141413_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Curatorial Header & Headline */}
        <div className="max-w-4xl space-y-6 mb-16 lg:mb-20">
          <div ref={eyebrowRef} className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#141413]/30" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#78350F]">
              {PRESS_HERO.eyebrow}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#78716C]">
              [VOL. XXIV — GLOBAL CHRONICLE]
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-normal tracking-[-0.03em] leading-[1.05] text-[#141413]"
          >
            {PRESS_HERO.headline}
          </h1>

          <div
            ref={descRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#E7E5E0]"
          >
            <div className="md:col-span-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#44403C]">
                {PRESS_HERO.subtitle}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
                {PRESS_HERO.description}
              </p>
            </div>
          </div>
        </div>

        {/* 6-Item Curatorial Documentary Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#78716C] border-b border-[#E7E5E0] pb-2">
            <span className="uppercase tracking-widest font-mono text-[11px]">
              DOCUMENTARY EVIDENCE / 06 ARCHIVAL PLATES
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px]">
              HOVER TO INSPECT · CLICK TO EXPAND
            </span>
          </div>

          <ul
            ref={galleryRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {PRESS_HERO.gallery.map((item, idx) => (
              <li
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative aspect-[3/4] overflow-hidden bg-[#ECE8E1] cursor-pointer border border-[#E0DCD4] transition-all duration-500 hover:border-[#141413]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[25%] transition-all duration-700 ease-out group-hover:scale-108 group-hover:grayscale-0"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Plate Index in top corner */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#FAF9F5]/90 backdrop-blur-xs text-[10px] font-mono tracking-wider text-[#141413] border border-[#141413]/10 group-hover:bg-white group-hover:text-black">
                  PL. 0{idx + 1}
                </div>

                {/* Inspect icon */}
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-3 h-3" />
                </div>

                {/* Caption Reveal on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-3 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#D6D3D1]">
                    {item.location}
                  </p>
                  <p className="text-xs font-serif leading-snug line-clamp-2 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Subtle Anchor Scroll Prompt */}
        <div className="flex justify-end pt-8">
          <button
            onClick={scrollToFeed}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#78716C] hover:text-[#141413] transition-colors"
          >
            <span>DISCOVER PRESS & RELEASES</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-[#1C1917] text-white border border-[#44403C] p-4 sm:p-6 shadow-2xl flex flex-col gap-4">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-[#A8A29E] hover:text-white bg-black/40 hover:bg-black/80 transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#44403C] text-sm">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#D97706]">
                  {selectedPhoto.location} · {selectedPhoto.year}
                </p>
                <h4 className="text-base sm:text-lg font-serif mt-0.5">
                  {selectedPhoto.caption}
                </h4>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="self-start sm:self-auto px-4 py-2 border border-[#78716C] text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
