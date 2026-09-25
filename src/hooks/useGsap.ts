import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register the ScrollTrigger plugin once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global Lenis singleton to share across components and hooks
let globalLenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;
let activeLenisUsersCount = 0;

/**
 * Check if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Initialize or get the global Lenis smooth scrolling instance
 * connected with GSAP's ticker and ScrollTrigger.
 */
export const initGlobalLenis = (options: ConstructorParameters<typeof Lenis>[0] = {}): Lenis | null => {
  if (typeof window === 'undefined') return null;

  if (prefersReducedMotion()) {
    return null;
  }

  if (!globalLenisInstance) {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      ...options,
    });

    globalLenisInstance = lenis;

    // Synchronize Lenis scroll position with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Synchronize with GSAP internal animation ticker
    tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Initial refresh once everything mounts
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }

  activeLenisUsersCount++;
  return globalLenisInstance;
};

/**
 * Release reference to global Lenis instance and clean up if no longer used
 */
export const releaseGlobalLenis = () => {
  activeLenisUsersCount = Math.max(0, activeLenisUsersCount - 1);
  if (activeLenisUsersCount === 0 && globalLenisInstance) {
    if (tickerCallback) {
      gsap.ticker.remove(tickerCallback);
      tickerCallback = null;
    }
    globalLenisInstance.destroy();
    globalLenisInstance = null;
  }
};

/**
 * Programmatic scroll to target with smooth physics
 */
export const scrollToTarget = (
  target: string | number | HTMLElement,
  options?: {
    offset?: number;
    immediate?: boolean;
    duration?: number;
    easing?: (t: number) => number;
  }
) => {
  if (globalLenisInstance) {
    globalLenisInstance.scrollTo(target, options);
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
    } else if (typeof target === 'string') {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
    }
  }
};

export type GsapContextCallback = (context: gsap.Context) => void | (() => void);

export interface UseGsapConfig {
  /** Optional container element or ref to scope selectors (e.g. `".btn"` only inside scope) */
  scope?: React.RefObject<Element | null | undefined> | Element | null;
  /** Dependencies to re-trigger context creation */
  dependencies?: React.DependencyList;
  /** Whether to initialize Lenis smooth scrolling (defaults to true) */
  enableLenis?: boolean;
  /** Custom options for Lenis instance */
  lenisOptions?: ConstructorParameters<typeof Lenis>[0];
  /** Whether to revert the context on dependencies change (defaults to true) */
  revertOnUpdate?: boolean;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Centralized GSAP hook that:
 * 1. Initializes Lenis smooth scrolling and syncs with GSAP ticker & ScrollTrigger
 * 2. Creates a centralized, scoped GSAP context (`gsap.context`)
 * 3. Handles automatic teardown and memory cleanup on unmount
 * 4. Provides helper utilities for programmatic scrolling and trigger refreshing
 */
export function useGsap(
  callback?: GsapContextCallback,
  config: UseGsapConfig = {}
) {
  const {
    scope,
    dependencies = [],
    enableLenis = true,
    lenisOptions,
    revertOnUpdate = true,
  } = config;

  const [lenis, setLenis] = useState<Lenis | null>(globalLenisInstance);
  const contextRef = useRef<gsap.Context | null>(null);

  // 1. Initialize Lenis Smooth Scrolling and synchronize with ScrollTrigger
  useEffect(() => {
    if (!enableLenis) return;

    const instance = initGlobalLenis(lenisOptions);
    setLenis(instance);

    return () => {
      releaseGlobalLenis();
    };
  }, [enableLenis]);

  // 2. Set up centralized scoped GSAP context
  useIsomorphicLayoutEffect(() => {
    if (!callback) return;

    // Resolve scope
    const resolvedScope =
      scope && 'current' in scope ? scope.current || undefined : (scope as Element | undefined);

    // Create GSAP context
    const ctx = gsap.context(() => {
      callback(ctx);
    }, resolvedScope);

    contextRef.current = ctx;

    return () => {
      if (revertOnUpdate) {
        ctx.revert();
      }
    };
  }, dependencies);

  return {
    gsap,
    ScrollTrigger,
    lenis,
    context: contextRef.current,
    scrollTo: scrollToTarget,
    refreshScrollTrigger: () => ScrollTrigger.refresh(),
  };
}

export { gsap, ScrollTrigger, Lenis };
export default useGsap;
