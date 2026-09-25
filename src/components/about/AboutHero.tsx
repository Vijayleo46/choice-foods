import React, { useEffect, useState, useRef } from 'react';
import { ABOUT_HERO } from '../../data/aboutData';
import { ChevronDown } from 'lucide-react';

interface AboutHeroProps {
  onExploreClick?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onExploreClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation smoothly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const nextSection = document.getElementById('about-mission');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  // Subtle parallax transform
  const parallaxOffset = scrollY * 0.35;
  const overlayOpacity = Math.min(0.85, 0.45 + (scrollY / (window.innerHeight || 800)) * 0.4);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[640px] flex flex-col justify-end items-center overflow-hidden bg-[#161615] text-[#FBFBFA] select-none"
      aria-label="About Choice Hero"
    >
      {/* Background Image with Cinematic Zoom-in and Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none transition-transform duration-1000 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(${isLoaded ? 1.03 : 1.15})`,
          transitionDuration: isLoaded ? '1800ms' : '0ms',
        }}
      >
        <img
          src={ABOUT_HERO.image}
          alt={ABOUT_HERO.alt}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Cinematic Film Vignette & Multi-Layer Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 mix-blend-multiply" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 sm:pb-32 flex flex-col justify-end">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-8 sm:w-12 h-[1px] bg-amber-400/80" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-amber-300/90 uppercase font-semibold">
                {ABOUT_HERO.eyebrow}
              </span>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-[-0.035em] text-white leading-[0.92] text-balance">
            <span
              className={`block overflow-hidden transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              ABOUT
            </span>
            <span
              className={`block overflow-hidden transition-all duration-1000 ease-out text-neutral-100/95 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              CHOICE
            </span>
          </h1>

          {/* Supporting Micro Narrative */}
          <p
            className={`text-sm sm:text-base md:text-lg text-neutral-300/90 font-light max-w-xl leading-relaxed transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            Three generations of responsible stewardship, processing discipline, and direct global partnerships from the coast of India to North American dinner tables.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll to our mission"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-semibold text-neutral-400 group-hover:text-amber-300 transition-colors">
            {ABOUT_HERO.scrollText}
          </span>
          <div className="w-7 h-11 rounded-full border border-white/30 flex items-start justify-center p-1.5 group-hover:border-amber-400/80 transition-colors">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
          </div>
          <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all text-neutral-300" />
        </button>
      </div>

      {/* Bottom Subtle Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FBFBFA] to-transparent pointer-events-none opacity-20" />
    </section>
  );
};
