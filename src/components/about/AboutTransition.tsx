import React, { useEffect, useState } from 'react';

export const AboutTransition: React.FC = () => {
  const [stage, setStage] = useState<'covering' | 'revealing' | 'done'>('covering');

  useEffect(() => {
    // Reveal starts after 80ms
    const timer1 = setTimeout(() => {
      setStage('revealing');
    }, 80);

    // Done after 750ms
    const timer2 = setTimeout(() => {
      setStage('done');
    }, 750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none flex flex-col"
      aria-hidden="true"
    >
      {/* Top Curtain */}
      <div
        className={`w-full h-full bg-[#141413] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          stage === 'revealing' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400 font-semibold opacity-60">
            CHOICE FOODS GROUP · ABOUT
          </span>
        </div>
      </div>
    </div>
  );
};
