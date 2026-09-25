import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPACT_PARTNERSHIP } from '../../data/impactData';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const ImpactPartnershipForm: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  // Form State matching exact source fields (Requirement 29)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    lookingFor: 'First Choice',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const line1 = titleLine1Ref.current;
    const line2 = titleLine2Ref.current;
    const formCard = formCardRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        [line1, line2].forEach((l) => {
          if (l) gsap.set(l, { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' });
        });
        if (formCard) gsap.set(formCard, { opacity: 1, y: 0 });
        return;
      }

      // Requirement 28: Animate heading line-by-line
      const lines = [line1, line2].filter(Boolean);
      gsap.fromTo(
        lines,
        { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Form Card Entrance
      if (formCard) {
        gsap.fromTo(
          formCard,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
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
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      ref={sectionRef}
      id="impact-partnership"
      className="py-24 lg:py-36 bg-[#141413] text-white border-b border-neutral-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left / Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-300 font-medium">
                {IMPACT_PARTNERSHIP.eyebrow}
              </span>
            </div>

            {/* Line-by-Line Heading (Requirement 28) */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.08]">
              <span className="block overflow-hidden">
                <span
                  ref={titleLine1Ref}
                  className="block will-change-[transform,clip-path]"
                >
                  A history of integrity
                </span>
              </span>
              <span className="block overflow-hidden text-neutral-400">
                <span
                  ref={titleLine2Ref}
                  className="block will-change-[transform,clip-path]"
                >
                  and thoughtful investment.
                </span>
              </span>
            </h2>

            {/* Exact Source Body Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
              {IMPACT_PARTNERSHIP.body}
            </p>

            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block">
                GLOBAL COMMERCIAL HUBS
              </span>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-300">
                <div>
                  <p className="text-white font-medium">North America Sales</p>
                  <p className="text-neutral-400">Jersey City, NJ & Pittston, PA</p>
                </div>
                <div>
                  <p className="text-white font-medium">Global Corporate Office</p>
                  <p className="text-neutral-400">Kochi & Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Exact Contact Form (Requirement 29) */}
          <div
            ref={formCardRef}
            className="lg:col-span-6 bg-neutral-900/70 backdrop-blur-md rounded-xs border border-neutral-800 p-8 sm:p-10 shadow-2xl"
          >
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">
                Reach out to us
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                "*" indicates required fields
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-600 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-display font-medium text-white">
                  Message Dispatched
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you for connecting with Choice Foods Group. An executive from our leadership or commercial team will follow up promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono tracking-wider uppercase text-amber-400 hover:underline pt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name* */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="E.g. Eleanor Vance"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xs px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Email Address* */}
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Email Address*
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xs px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Website* */}
                <div>
                  <label
                    htmlFor="website"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Website*
                  </label>
                  <input
                    id="website"
                    type="text"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://company.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xs px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* What are you looking for* (Select field with exact options) */}
                <div>
                  <label
                    htmlFor="lookingFor"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    What are you looking for*
                  </label>
                  <select
                    id="lookingFor"
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xs px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="First Choice">First Choice — Retail Program & Private Label</option>
                    <option value="Second Choice">Second Choice — Foodservice & Direct Volume Supply</option>
                    <option value="Third Choice">Third Choice — Choice Foundation / Education Initiatives</option>
                  </select>
                </div>

                {/* Submit button with Magnetic hover (Requirement 28 & 29) */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    strength={8}
                    className="group relative w-full bg-white hover:bg-neutral-100 text-[#141413] font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-xs transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10">{isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}</span>
                    <ArrowRight className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    {/* Requirement 28: Underline animation */}
                    <span className="absolute bottom-2 left-1/4 right-1/4 h-[1px] bg-[#141413] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </MagneticButton>
                </div>

                <p className="text-[11px] text-neutral-500 text-center font-mono">
                  All communications are handled under mutual non-disclosure and commercial confidentiality.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
