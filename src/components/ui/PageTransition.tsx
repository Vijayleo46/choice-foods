import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigation } from '../../context/NavigationContext';

export const PageTransitionOverlay: React.FC = () => {
  const { isTransitioning } = useNavigation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const overlay = overlayRef.current;
    const wipe = wipeRef.current;
    const text = textRef.current;
    if (!overlay || !wipe || !text) return;

    if (isTransitioning) {
      // Transition IN: curtain wipes up from bottom
      gsap.killTweensOf([overlay, wipe, text]);
      gsap.set(overlay, { display: 'flex', pointerEvents: 'auto' });
      gsap.set(wipe, { yPercent: 100 });
      gsap.set(text, { opacity: 0, y: 20 });

      const tl = gsap.timeline();
      tl.to(wipe, {
        yPercent: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      }).to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '-=0.1'
      );
    } else {
      // Transition OUT: curtain reveals the new page by sliding up to top
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { display: 'none', pointerEvents: 'none' });
        },
      });

      tl.to(text, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: 'power2.in',
      }).to(wipe, {
        yPercent: -100,
        duration: 0.4,
        ease: 'power4.inOut',
      });
    }
  }, [isTransitioning]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[90] hidden pointer-events-none overflow-hidden"
    >
      <div
        ref={wipeRef}
        className="w-full h-full bg-[#141413] text-white flex flex-col items-center justify-center relative select-none will-change-transform"
      >
        <div ref={textRef} className="flex items-center gap-3">
          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            CHOICE FOODS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </div>
      </div>
    </div>
  );
};
