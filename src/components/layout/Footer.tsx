import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const footerRef = useRef<HTMLElement>(null);
  const brandHeadingRef = useRef<HTMLHeadingElement>(null);
  const topGridRef = useRef<HTMLDivElement>(null);
  const navGridRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  // Requirement 25: Footer Upward Reveal & Typography Clip-Path
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const footer = footerRef.current;
    const brandHeading = brandHeadingRef.current;
    const topGrid = topGridRef.current;
    const navGrid = navGridRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Requirement 30: Horizontal line draws from width: 0 to 100%
      if (topLineRef.current) {
        gsap.fromTo(
          topLineRef.current,
          { width: '0%' },
          {
            width: '100%',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: footer,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Large CHOICE FOODS Typography Clip-Path Reveal
      if (brandHeading) {
        gsap.fromTo(
          brandHeading,
          { opacity: 0, y: 50, clipPath: 'inset(100% 0 0 0)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: footer,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Top grid (statement + newsletter) reveal
      if (topGrid) {
        gsap.fromTo(
          topGrid,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: topGrid,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Nav columns staggered upward reveal
      if (navGrid) {
        const cols = navGrid.children;
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: navGrid,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#141413] text-white pt-20 pb-12 relative overflow-hidden"
    >
      {/* Requirement 30: Drawing top border line */}
      <div
        ref={topLineRef}
        className="absolute top-0 left-0 h-[1px] bg-neutral-800 w-0 will-change-[width]"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Large Statement & Newsletter (Requirement 25) */}
        <div
          ref={topGridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800 will-change-transform"
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="editorial-kicker text-amber-400">
              PURPOSE-DRIVEN GLOBAL FOOD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-100 max-w-xl leading-[1.15]">
              Feeding the world with integrity, quality, and dignity.
            </h2>
            <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
              Choice Foods has spent three generations pioneering responsible aquaculture, advanced
              value-added processing, and community investment across India and North America.
            </p>

            {/* Global Centers */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Andhra Pradesh, India</span>
              </div>
              <span className="text-neutral-600">/</span>
              <div className="flex items-center gap-2">
                <span>Jersey City, NJ</span>
              </div>
              <span className="text-neutral-600">/</span>
              <div className="flex items-center gap-2">
                <span>Pittston, PA</span>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 bg-neutral-900/60 p-8 border border-neutral-800 flex flex-col justify-between rounded-xs">
            <div>
              <p className="editorial-kicker text-neutral-400 mb-2">STAY CONNECTED WITH US</p>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Industry Insights & Supply Updates
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Receive quarterly updates on aquaculture market trends, cold-chain innovations, and
                sustainability milestones.
              </p>

              {subscribed ? (
                <div className="bg-emerald-950/40 border border-emerald-800/60 p-4 text-emerald-200 flex items-center gap-3 text-xs rounded-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you. You have been added to our executive briefing list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder="Enter corporate email..."
                      className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors rounded-xs"
                    />
                  </div>
                  {error && <p className="text-xs text-rose-400">{error}</p>}
                  <button
                    type="submit"
                    className="w-full bg-white text-[#141413] hover:bg-neutral-200 py-3 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-xs cursor-pointer"
                  >
                    <span>SIGN UP</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-neutral-500 mt-6">
              We respect your privacy. Zero spam. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Middle Section: Site Navigation & Core Capabilities with Staggered Upward Entrance */}
        <div
          ref={navGridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-neutral-800 text-sm will-change-transform"
        >
          {/* Col 1: Brand & Large Masked Typography (Requirement 25) */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <h3
              ref={brandHeadingRef}
              className="text-2xl font-display font-extrabold tracking-tight text-white flex items-center gap-2 will-change-[transform,clip-path]"
            >
              <span>CHOICE FOODS</span>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              A private family-owned enterprise operating premier seafood processing, customized
              private label programs, and philanthropic education foundations since 1953.
            </p>
            <div className="pt-2">
              <MagneticButton
                onClick={() => navigate('/partner')}
                strength={6}
                className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold tracking-wide uppercase group"
              >
                <span>Initiate A Partnership</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="editorial-kicker text-neutral-400">NAVIGATION</p>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about/')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/leadership/')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Executive Leadership</span>
                  <span className="text-[10px] font-mono text-amber-400">01–11</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/impact')}
                  className="hover:text-white transition-colors"
                >
                  Impact & Responsibility
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/press')}
                  className="hover:text-white transition-colors"
                >
                  Press & Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/partner')}
                  className="hover:text-white transition-colors"
                >
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Programs */}
          <div className="space-y-3">
            <p className="editorial-kicker text-neutral-400">SOLUTIONS</p>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Value-Added Meal Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Recipe Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Retailer Private Label
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  ELISA Laboratory Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/capabilities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cold Chain Logistics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Audits */}
          <div className="space-y-3">
            <p className="editorial-kicker text-neutral-400">STANDARDS</p>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>BRCGS Grade AA Certified</li>
              <li>BAP 4-Star Aquaculture</li>
              <li>FDA Registered Facilities</li>
              <li>HACCP Compliant Protocols</li>
              <li>The Choice Foundation</li>
              <li>JTPAC Performing Arts</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to top with Magnetic Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Choice Foods Group. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Privacy Policy</span>
            <span className="hidden sm:inline">·</span>
            <span>Terms of Procurement</span>
            <span className="hidden sm:inline">·</span>
            <span>Traceability Pledge</span>
          </div>

          <MagneticButton
            onClick={scrollToTop}
            strength={6}
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-medium"
          >
            <span>Back to Top</span>
            <span className="text-amber-400">&uarr;</span>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
