import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CursorState {
  type: 'default' | 'pointer' | 'video' | 'explore' | 'view' | 'open' | 'custom' | 'hidden';
  text?: string;
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer device (mouse)
    const checkPointer = () => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideEnough = window.innerWidth >= 1024;
      setIsDesktop(isFinePointer && isWideEnough);
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    return () => window.removeEventListener('resize', checkPointer);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    // Center the elements
    gsap.set([cursor, dot], { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Direct movement for tiny inner dot
      gsap.to(dot, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Smooth physics lag for outer ring
    const tickerUpdate = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      gsap.set(cursor, { x: pos.x, y: pos.y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    gsap.ticker.add(tickerUpdate);

    // Event listener for custom cursor targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null;
      if (target) {
        const cursorAttr = target.getAttribute('data-cursor');
        const cursorText = target.getAttribute('data-cursor-text') || '';

        if (cursorAttr === 'video') {
          setCursorState({ type: 'video', text: cursorText || 'PLAY' });
        } else if (cursorAttr === 'explore') {
          setCursorState({ type: 'explore', text: cursorText || 'EXPLORE' });
        } else if (cursorAttr === 'view') {
          setCursorState({ type: 'view', text: cursorText || 'VIEW' });
        } else if (cursorAttr === 'open') {
          setCursorState({ type: 'open', text: cursorText || 'OPEN' });
        } else if (cursorAttr === 'pointer') {
          setCursorState({ type: 'pointer' });
        } else if (cursorAttr === 'hidden') {
          setCursorState({ type: 'hidden' });
        } else if (cursorText) {
          setCursorState({ type: 'custom', text: cursorText });
        }
      } else {
        // Check for general clickable elements
        const isClickable = (e.target as HTMLElement)?.closest('button, a, input, select, textarea, [role="button"]');
        if (isClickable) {
          setCursorState({ type: 'pointer' });
        } else {
          setCursorState({ type: 'default' });
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorState({ type: 'hidden' });
    };

    const handleMouseEnter = () => {
      setCursorState({ type: 'default' });
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      gsap.ticker.remove(tickerUpdate);
    };
  }, [isDesktop]);

  // Animate cursor appearance based on state
  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const isLabelMode = ['video', 'explore', 'view', 'open', 'custom'].includes(cursorState.type);

    if (isLabelMode) {
      gsap.to(cursor, {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(20, 20, 19, 0.88)',
        borderColor: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(6px)',
        duration: 0.35,
        ease: 'power3.out',
      });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    } else if (cursorState.type === 'pointer') {
      gsap.to(cursor, {
        width: 48,
        height: 48,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'none',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    } else if (cursorState.type === 'hidden') {
      gsap.to([cursor, dot], { opacity: 0, duration: 0.2 });
    } else {
      // Default state
      gsap.to(cursor, {
        width: 32,
        height: 32,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.35)',
        backdropFilter: 'none',
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(dot, {
        width: 6,
        height: 6,
        opacity: 1,
        duration: 0.2,
      });
    }
  }, [cursorState, isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Outer subtle ring / capsule */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full border border-white/40 flex items-center justify-center text-white transition-[opacity] pointer-events-none"
        style={{ width: 32, height: 32 }}
      >
        {['video', 'explore', 'view', 'open', 'custom'].includes(cursorState.type) && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">
            {cursorState.text}
          </span>
        )}
      </div>

      {/* Inner precise dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none"
        style={{ width: 6, height: 6 }}
      />
    </div>
  );
};
