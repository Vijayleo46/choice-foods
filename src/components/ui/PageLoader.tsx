import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const choiceLettersRef = useRef<HTMLSpanElement[]>([]);
  const foodsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has already loaded in this session to avoid annoyance on quick refreshes,
    // but still run a crisp reveal (or run every time if first visit)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          onComplete?.();
        },
      });

      // 1. Initial setup
      gsap.set(choiceLettersRef.current, {
        opacity: 0,
        x: -24,
        scale: 0.95,
        filter: 'blur(4px)',
      });
      gsap.set(foodsRef.current, {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
      });
      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      // 2. Animate CHOICE letters revealing horizontally
      tl.to(choiceLettersRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.45,
        stagger: 0.05,
        ease: 'power3.out',
      });

      // 3. FOODS fades upward
      tl.to(
        foodsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.35,
          ease: 'power3.out',
        },
        '-=0.15'
      );

      // 4. Thin horizontal line expands
      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: 'expo.inOut',
        },
        '-=0.2'
      );

      // Brief hold to absorb the luxury mark
      tl.to({}, { duration: 0.15 });

      // 5. Loader disappears using smooth clip-path wipe upward
      tl.to(containerRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.55,
        ease: 'power4.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  const choiceWord = 'CHOICE';

  return (
    <aside
      ref={containerRef}
      aria-label="Loading Choice Foods"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBFBFA] text-[#141413] pointer-events-none select-none"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    >
      <div className="flex flex-col items-center">
        {/* Brand Kicker / Eyebrow */}
        <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#8C827A] mb-3 opacity-80">
          GLOBAL FOOD ENTERPRISE
        </span>

        {/* Wordmark Container */}
        <div className="flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#141413]">
          {/* CHOICE Letters */}
          <div className="flex">
            {choiceWord.split('').map((letter, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) choiceLettersRef.current[i] = el;
                }}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* FOODS */}
          <div ref={foodsRef} className="text-[#8C827A] font-light">
            FOODS
          </div>
        </div>

        {/* Expanding Accent Rule */}
        <div className="w-32 sm:w-44 h-[1.5px] bg-[#141413] mt-5 overflow-hidden">
          <div ref={lineRef} className="w-full h-full bg-[#141413]" />
        </div>
      </div>
    </aside>
  );
};
