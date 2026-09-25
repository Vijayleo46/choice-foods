import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Check reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Text reveal: physical rising mask from behind a clip-path
 */
export const animateTextReveal = (
  target: HTMLElement | HTMLElement[] | string,
  options: {
    delay?: number;
    stagger?: number;
    duration?: number;
    trigger?: HTMLElement | string;
    start?: string;
  } = {}
) => {
  if (prefersReducedMotion()) {
    gsap.set(target, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' });
    return;
  }

  const {
    delay = 0,
    stagger = 0.08,
    duration = 1.1,
    trigger,
    start = 'top 85%',
  } = options;

  gsap.set(target, {
    opacity: 0,
    y: 90,
    clipPath: 'inset(100% 0% 0% 0%)',
    willChange: 'transform, opacity, clip-path',
  });

  const anim = gsap.to(target, {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    duration,
    stagger,
    delay,
    ease: 'power4.out',
    scrollTrigger: trigger
      ? {
          trigger,
          start,
          toggleActions: 'play none none none',
        }
      : undefined,
  });

  return anim;
};

/**
 * Image clip-path mask reveal with subtle scale down
 */
export const animateImageReveal = (
  imageTarget: HTMLElement | string,
  triggerTarget?: HTMLElement | string,
  options: {
    startInset?: string;
    startScale?: number;
    duration?: number;
    start?: string;
  } = {}
) => {
  if (prefersReducedMotion()) {
    gsap.set(imageTarget, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 });
    return;
  }

  const {
    startInset = '8% 8% 8% 8%',
    startScale = 1.15,
    duration = 1.3,
    start = 'top 80%',
  } = options;

  gsap.set(imageTarget, {
    clipPath: `inset(${startInset})`,
    scale: startScale,
    willChange: 'transform, clip-path',
  });

  return gsap.to(imageTarget, {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerTarget || imageTarget,
      start,
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Image Parallax System (-8% to +8% scrub)
 */
export const setupImageParallax = (
  target: HTMLElement | string,
  trigger: HTMLElement | string,
  yPercent: number = 8
) => {
  if (prefersReducedMotion()) return;

  return gsap.fromTo(
    target,
    { yPercent: -yPercent },
    {
      yPercent: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    }
  );
};
