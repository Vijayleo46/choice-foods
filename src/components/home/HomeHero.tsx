import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, ChevronDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_HERO } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface HomeHeroProps {
  onScrollToExplore?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onScrollToExplore }) => {
  const { navigate } = useNavigation();
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);
  const headlineLinesRef = useRef<HTMLSpanElement[]>([]);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const playIconRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Split headline text into 3 clean, editorial lines
  const headlineLines = [
    "Feeding the world with integrity,",
    "quality, and dignity through sustainable",
    "aquaculture and cold chain leadership."
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = heroSectionRef.current;
    const videoWrapper = videoWrapperRef.current;
    const overlay = overlayRef.current;
    const heroContent = heroContentRef.current;
    const brandTitle = brandTitleRef.current;
    const eyebrow = eyebrowRef.current;
    const ctaGroup = ctaGroupRef.current;
    const lines = headlineLinesRef.current;

    if (!hero || !videoWrapper || !overlay) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([videoWrapper, overlay, heroContent, brandTitle, eyebrow, ctaGroup, ...lines], {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        });
        return;
      }

      // Requirement 3: Initial State
      // video scale = 1.08, initial opacity hidden for cinematic entrance
      gsap.set(videoWrapper, { scale: 1.08, opacity: 0 });
      gsap.set(overlay, { opacity: 0 });
      gsap.set(eyebrow, { opacity: 0, y: -20 });
      gsap.set(brandTitle, { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' });
      gsap.set(lines, { opacity: 0, y: 90, clipPath: 'inset(100% 0 0 0)' });
      gsap.set(ctaGroup, { opacity: 0, y: 30 });

      // Requirement 3 & 4: On page load sequence (staggered physical rising text reveal)
      const loadTl = gsap.timeline({ delay: 0.6 });

      loadTl
        // 1. Video & overlay fade in
        .to(videoWrapper, { opacity: 1, duration: 1.2, ease: 'power2.out' })
        .to(overlay, { opacity: 1, duration: 1.0, ease: 'power2.out' }, '<')
        // 2. Video settles from 1.08 -> 1
        .to(videoWrapper, { scale: 1.0, duration: 2.2, ease: 'power3.out' }, '<')
        // 3. Eyebrow appears
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=1.4')
        // 4. Large title reveals from behind mask
        .to(
          brandTitle,
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.1,
            ease: 'power4.out',
          },
          '-=1.0'
        )
        // 5. Split headline lines reveal with 0.08–0.12s stagger
        .to(
          lines,
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.0,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.7'
        )
        // 6. CTA buttons appear
        .to(ctaGroup, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5');

      // Requirement 5: Hero Parallax while scrolling
      // hero video scale: 1 -> 1.12
      // hero content y: 0 -> -120px
      // overlay: slightly increase opacity
      // hero section: subtle clip-path transition
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      scrollTl
        .to(videoWrapper, { scale: 1.14, ease: 'none' }, 0)
        .to(heroContent, { y: -120, ease: 'none' }, 0)
        .to(overlay, { backgroundColor: 'rgba(0, 0, 0, 0.72)', ease: 'none' }, 0);
    }, hero);

    return () => ctx.revert();
  }, []);

  // Performance: Pause video when out of viewport
  useEffect(() => {
    const currentHero = heroSectionRef.current;
    if (!currentHero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          if (isPlaying) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(currentHero);
    return () => observer.disconnect();
  }, [isPlaying]);

  // Requirement 7: Video Control with smooth icon rotation/fade animation
  const togglePlayback = () => {
    if (!videoRef.current) return;

    const icon = playIconRef.current;
    if (icon) {
      gsap.fromTo(
        icon,
        { scale: 0.8, rotate: isPlaying ? -30 : 30, opacity: 0.5 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.35, ease: 'back.out(2)' }
      );
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white select-none"
      aria-label="Choice Foods Group Hero"
      data-cursor="video"
      data-cursor-text={isPlaying ? 'PAUSE' : 'PLAY'}
    >
      {/* Background Video (Requirement 3: Video 100% width/height, object-cover) */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
      >
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-85'
          }`}
          src={HOME_HERO.videoUrl}
          poster={HOME_HERO.posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        />

        {/* Fallback image if video is loading */}
        {!videoLoaded && (
          <img
            src={HOME_HERO.posterUrl}
            alt="Choice Foods Group Cold Chain Operations"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* Atmospheric Overlays */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none bg-black/40 will-change-[background-color,opacity]"
      />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Hero Top: Wordmark & Classification */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-36 flex flex-col">
        <div
          ref={eyebrowRef}
          className="flex items-center justify-between mb-4 border-b border-white/15 pb-3 will-change-transform"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-neutral-300">
              {HOME_HERO.eyebrow}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-neutral-400 hidden sm:inline-block">
            {HOME_HERO.established}
          </span>
        </div>

        {/* Giant Choice Foods Headline with Physical Rising Mask (Requirement 4) */}
        <div className="overflow-hidden py-1">
          <h1
            ref={brandTitleRef}
            className="font-display font-extrabold text-[12vw] sm:text-[10vw] lg:text-[7.8vw] leading-[0.88] tracking-[-0.04em] uppercase text-white/95 drop-shadow-sm select-none will-change-[transform,clip-path]"
          >
            CHOICE FOODS
          </h1>
        </div>
      </div>

      {/* Hero Bottom Bar: Headline Message, Magnetic CTAs, Play/Pause Control & Scroll Indicator */}
      <div
        ref={heroContentRef}
        className="relative z-10 container mx-auto px-6 lg:px-12 pb-10 lg:pb-14 mt-auto flex flex-col md:flex-row md:items-end justify-between gap-8 will-change-transform"
      >
        {/* Split Line Headline (Requirement 4) */}
        <div className="max-w-2xl">
          <div className="space-y-1">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <span
                  ref={(el) => {
                    if (el) headlineLinesRef.current[idx] = el;
                  }}
                  className="block text-xl sm:text-2xl lg:text-[26px] leading-[1.3] font-light text-neutral-100 tracking-tight will-change-[transform,clip-path]"
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          {/* Magnetic CTAs (Requirement 10) */}
          <div ref={ctaGroupRef} className="mt-7 flex items-center gap-4 will-change-transform">
            <MagneticButton
              onClick={() => navigate('/about/')}
              strength={10}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-white/15 hover:bg-white hover:text-black backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transition-all duration-300"
            >
              <span>ABOUT CHOICE FOODS</span>
              <span className="text-sm font-mono">&rarr;</span>
            </MagneticButton>

            <MagneticButton
              onClick={() => navigate('/partner')}
              strength={8}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white px-4 py-3 transition-colors duration-300"
            >
              <span>PARTNER WITH US</span>
            </MagneticButton>
          </div>
        </div>

        {/* Playback Controls & Scroll Indicator (Requirement 7) */}
        <div className="flex items-center justify-between md:justify-end gap-6 flex-none pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
          {/* Animated Pause / Play Button */}
          <button
            ref={playButtonRef}
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="group flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-300 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 py-1"
            data-cursor="pointer"
          >
            <div
              ref={playIconRef}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-300 bg-black/40 backdrop-blur-xs"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5 text-amber-400" />
              )}
            </div>
            <span className="uppercase text-[11px] font-semibold tracking-[0.18em] group-hover:tracking-[0.24em] transition-all duration-300">
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </span>
          </button>

          {/* Scroll Cue */}
          <button
            type="button"
            onClick={onScrollToExplore}
            aria-label="Scroll to explore sections below"
            className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors py-1 group"
            data-cursor="pointer"
          >
            <span className="hidden sm:inline uppercase text-[11px]">{HOME_HERO.scrollCta}</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:scale-105 transition-all duration-300">
              <ChevronDown className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
