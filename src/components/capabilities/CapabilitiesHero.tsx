import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const CapabilitiesHero: React.FC = () => {
  const { navigate } = useNavigation();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Parallax & scale effect on scroll
    const handleScroll = () => {
      if (!imageRef.current || !heroRef.current) return;
      const scrollY = window.scrollY;
      const height = heroRef.current.offsetHeight;
      if (scrollY <= height) {
        const factor = scrollY / height;
        imageRef.current.style.transform = `scale(${1 + factor * 0.08}) translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('how-we-work');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1080px] flex flex-col justify-end text-white overflow-hidden bg-[#121613] select-none"
    >
      {/* 100svh Background Hero Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/assets/capabilities/hero-capabilities.jpg"
          alt="Choice Foods Capabilities - Precision Seafood Processing & Development"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 ease-out will-change-transform"
          onError={(e) => {
            // Fallback to live URL if local is unavailable
            (e.target as HTMLImageElement).src =
              'https://choicefoodsgroup.com/wp-content/uploads/2026/06/DSC00102-copy.jpg';
          }}
        />

        {/* Sophisticated Editorial Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 w-full">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 animate-fade-in">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400 font-semibold">
              OUR CAPABILITIES
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.02]"
          >
            HOW WE WORK
          </h1>

          {/* Supporting Text directly from reference page */}
          <p className="text-base sm:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl">
            Choice Foods supports business partners across the full spectrum of seafood product development and production — from concept through delivery.
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContent}
              className="px-7 py-3.5 bg-white text-[#121613] hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 group"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/partner')}
              className="px-7 py-3.5 bg-transparent border border-white/40 hover:border-white text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between text-xs font-mono text-neutral-300">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-amber-400 font-semibold">INTEGRATED VALUE CHAIN</span>
            <span className="hidden md:inline text-neutral-500">/</span>
            <span className="hidden md:inline">HARVEST · FORMULATION · CO-PACKING · LOGISTICS</span>
          </div>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 hover:text-white transition-colors group"
            aria-label="Scroll to content"
          >
            <span className="tracking-wider uppercase text-[11px]">SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
