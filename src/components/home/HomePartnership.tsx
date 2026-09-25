import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOME_PARTNERSHIPS } from '../../data/homeData';
import { useNavigation } from '../../context/NavigationContext';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const HomePartnership: React.FC = () => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineLinesRef = useRef<HTMLSpanElement[]>([]);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('retail');
  const [submitted, setSubmitted] = useState(false);

  // Split large heading into lines for emotional typography reveal (Requirement 24)
  const headingLines = [
    "A HISTORY OF INTEGRITY AND",
    "THOUGHTFUL INVESTMENT."
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const lines = headlineLinesRef.current;
    const body = bodyRef.current;
    const formCard = formCardRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Requirement 24: Emotional Typography Reveal Line-by-Line (Final line strongest movement)
      lines.forEach((line, idx) => {
        const isFinalLine = idx === lines.length - 1;
        gsap.fromTo(
          line,
          {
            opacity: 0,
            y: isFinalLine ? 100 : 70,
            clipPath: 'inset(100% 0 0 0)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: isFinalLine ? 1.2 : 1.0,
            delay: idx * 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      if (body) {
        gsap.fromTo(
          body,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.35,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (formCard) {
        gsap.fromTo(
          formCard,
          { opacity: 0, scale: 0.96, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formCard,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="partner-cta"
      className="relative bg-[#1A262C] text-white py-24 lg:py-36 overflow-hidden border-b border-neutral-800"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-300">
                {HOME_PARTNERSHIPS.eyebrow}
              </span>
            </div>

            {/* Requirement 24: Emotional Typography Reveal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-tight">
              {headingLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      if (el) headlineLinesRef.current[i] = el;
                    }}
                    className="block will-change-[transform,clip-path]"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            <p ref={bodyRef} className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              {HOME_PARTNERSHIPS.body}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Requirement 24 & 10: Magnetic Button CTA */}
              <MagneticButton
                onClick={() => navigate('/partner')}
                strength={10}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-white hover:bg-neutral-200 px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
              >
                <span>{HOME_PARTNERSHIPS.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={() => navigate('/about/')}
                strength={8}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 hover:text-white px-5 py-4 transition-colors"
              >
                <span>LEARN ABOUT OUR HERITAGE</span>
                <span>&rarr;</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Quick Inbound Inquiry Form */}
          <div
            ref={formCardRef}
            className="lg:col-span-5 bg-black/40 backdrop-blur-md rounded-xs border border-white/10 p-8 sm:p-10 shadow-2xl will-change-transform"
          >
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">
                  Inquiry Initiated
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Thank you for reaching out. A Choice Foods commercial director will connect with you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:underline pt-2 inline-block"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight mb-1">
                    Connect with Commercial Sales
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Direct inquiries for retail programs, co-packing, and customized foodservice distribution.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Partnership Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'retail', label: 'Retail' },
                      { id: 'private-label', label: 'Private Label' },
                      { id: 'foodservice', label: 'Foodservice' }
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setPartnerType(type.id)}
                        className={`py-2 px-2 text-xs font-medium rounded-xs border transition-colors ${
                          partnerType === type.id
                            ? 'bg-white text-black border-white'
                            : 'bg-white/5 text-neutral-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="business-email" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Corporate Email Address
                  </label>
                  <input
                    id="business-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/15 rounded-xs px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>START THE CONVERSATION</span>
                </button>

                <p className="text-[10px] text-center text-neutral-400 pt-1">
                  Global Headquarters: Kochi, India · North America: Jersey City, NJ
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
