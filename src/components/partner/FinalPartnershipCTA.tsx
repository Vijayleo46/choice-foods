import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FINAL_PARTNERSHIP_CTA } from '../../data/partnerData';
import { PartnerContactForm } from './PartnerContactForm';

gsap.registerPlugin(ScrollTrigger);

export const FinalPartnershipCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;

    if (!section || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
            },
          }
        );
      }

      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 88%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reach-out"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 bg-[#FBFBFA] text-[#141413] border-b border-[#E7E7E3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Partnership Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-800 font-semibold block">
              {FINAL_PARTNERSHIP_CTA.eyebrow}
            </span>

            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#141413] leading-[1.08] tracking-tight"
            >
              {FINAL_PARTNERSHIP_CTA.heading}
            </h2>

            <p
              ref={paragraphRef}
              className="text-lg sm:text-xl text-[#5A5854] font-light leading-relaxed max-w-2xl pt-2"
            >
              {FINAL_PARTNERSHIP_CTA.paragraph}
            </p>

            <div className="pt-8 border-t border-[#E7E7E3] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono text-neutral-600">
              <div>
                <p className="font-semibold text-[#141413] uppercase mb-1">Corporate Inquiries</p>
                <p>contact@choicefoodsgroup.com</p>
              </div>
              <div>
                <p className="font-semibold text-[#141413] uppercase mb-1">Commercial Office</p>
                <p>Newark, New Jersey &bull; United States</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E7E7E3] p-8 sm:p-10 rounded-xs shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="border-b border-[#E7E7E3] pb-5 mb-8">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-amber-800 font-semibold block mb-1">
                LET&apos;S TALK
              </span>
              <h3 className="text-2xl font-display font-medium text-[#141413]">
                Reach Out to Us
              </h3>
            </div>

            <PartnerContactForm formId="final-contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
};
