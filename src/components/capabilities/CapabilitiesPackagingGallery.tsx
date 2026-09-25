import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { CAPABILITIES_DATA } from '../../data/capabilitiesData';
import { useNavigation } from '../../context/NavigationContext';

export const CapabilitiesPackagingGallery: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = CAPABILITIES_DATA.slider2;

  const next = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#121613] text-white py-24 sm:py-36 border-b border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
              VALUE ADDED EXECUTION &amp; PACKAGING
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
              Domestic Fulfillment &amp; Packaging
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl">
              Our Pennsylvania facility operates advanced automated packing lines, recipe blending, and deep-freeze warehousing to support custom private label and branded supermarket programs across the United States.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-neutral-700 hover:border-white flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-neutral-400 px-2">
              0{activeIndex + 1} / 0{slides.length}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-neutral-700 hover:border-white flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Large Viewport */}
        <div className="relative aspect-[16/9] md:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {slides.map((slide, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.local}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.04]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = slide.url;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Bottom Callout Overlay */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block">
                      FEATURED ASSET 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-display font-bold text-white">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light">
                      {slide.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate('/partner')}
                    className="self-start sm:self-end px-5 py-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
                  >
                    <span>Request Facility Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 text-left group ${
                idx === activeIndex
                  ? 'border-amber-400 shadow-md ring-1 ring-amber-400 opacity-100'
                  : 'border-neutral-800 opacity-50 hover:opacity-90 hover:border-neutral-600'
              }`}
            >
              <img
                src={slide.local}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = slide.url;
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <span className="absolute bottom-2 left-2 text-[9px] font-mono font-bold text-white bg-black/70 px-1.5 py-0.5 rounded">
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
