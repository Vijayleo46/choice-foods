import React, { useState, useEffect, useRef } from 'react';
import { useNavigation, RoutePath } from '../../context/NavigationContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';

interface NavItem {
  label: string;
  path: RoutePath;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', path: '/about' },
  { label: 'LEADERSHIP', path: '/leadership' },
  { label: 'CAPABILITIES', path: '/capabilities' },
  { label: 'IMPACT', path: '/impact' },
  { label: 'PRESS', path: '/press' },
  { label: 'PARTNER', path: '/partner' },
];

export const Header: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Requirement 8: On page load, navigation items reveal sequentially
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const navButtons = navContainerRef.current?.querySelectorAll('button');
    const brand = brandRef.current;
    const cta = ctaRef.current;

    const tl = gsap.timeline({ delay: 0.8 }); // Wait slightly for page loader
    if (brand) {
      tl.fromTo(brand, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
    }
    if (navButtons && navButtons.length > 0) {
      tl.fromTo(
        navButtons,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
        '-=0.4'
      );
    }
    if (cta) {
      tl.fromTo(cta, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page switch
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // If hero is active and not scrolled, text is white for contrast against dark hero video/poster
  const isLightText = !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E7E7E3] py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Brand wordmark */}
          <button
            ref={brandRef}
            onClick={() => navigate('/')}
            data-cursor="pointer"
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            aria-label="Choice Foods Group Home"
          >
            <span
              className={`text-xl sm:text-2xl font-extrabold tracking-tight font-display transition-colors duration-300 ${
                isLightText ? 'text-white' : 'text-[#161615]'
              }`}
            >
              CHOICE FOODS
            </span>
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                isLightText ? 'bg-amber-400' : 'bg-amber-600'
              }`}
            />
          </button>

          {/* Zone 2: Navigation Links with Animated Underline (Requirement 9) */}
          <nav
            ref={navContainerRef}
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === '/about' && (currentPath === '/about/' || currentPath === '/about')) ||
                (item.path === '/leadership' && (currentPath === '/leadership/' || currentPath === '/leadership' || currentPath.startsWith('/people/')));
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path === '/about' ? '/about/' : item.path === '/leadership' ? '/leadership/' : item.path)}
                  data-cursor="pointer"
                  className={`group relative text-xs uppercase tracking-[0.2em] font-semibold py-1.5 transition-colors duration-300 ${
                    isLightText
                      ? isActive
                        ? 'text-white font-bold'
                        : 'text-neutral-300 hover:text-white'
                      : isActive
                      ? 'text-[#161615] font-bold'
                      : 'text-neutral-600 hover:text-[#161615]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Underline indicator with transform-origin: left retracting on mouse leave */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-300 origin-left ease-out ${
                      isActive
                        ? isLightText
                          ? 'bg-amber-400 scale-x-100'
                          : 'bg-[#161615] scale-x-100'
                        : isLightText
                        ? 'bg-white scale-x-0 group-hover:scale-x-100'
                        : 'bg-[#161615] scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Mobile Toggle */}
          <div ref={ctaRef} className="flex items-center gap-4">
            {/* Prominent Partner With Us CTA with Magnetic Interaction (Requirement 10) */}
            <div className="hidden sm:block">
              <MagneticButton
                onClick={() => navigate('/partner')}
                strength={10}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap rounded-xs shadow-sm ${
                  isLightText
                    ? 'bg-white text-[#161615] hover:bg-neutral-100'
                    : 'bg-[#161615] text-white hover:bg-neutral-800'
                }`}
              >
                <span>PARTNER WITH US</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors focus:outline-none ${
                isLightText ? 'text-white' : 'text-[#161615]'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#161615] text-white flex flex-col justify-between px-8 pt-28 pb-12 transition-all duration-500 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Items */}
          <div className="space-y-6 my-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              EXPLORE CHOICE FOODS
            </p>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className={`text-3xl font-display font-semibold tracking-tight text-left transition-colors ${
                  currentPath === '/' ? 'text-amber-400' : 'text-neutral-200 hover:text-white'
                }`}
              >
                HOME
              </button>

              {NAV_ITEMS.map((item, idx) => {
                const isItemActive =
                  currentPath === item.path ||
                  (item.path === '/about' && (currentPath === '/about/' || currentPath === '/about')) ||
                  (item.path === '/leadership' && (currentPath === '/leadership/' || currentPath === '/leadership' || currentPath.startsWith('/people/')));
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path === '/about' ? '/about/' : item.path === '/leadership' ? '/leadership/' : item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-3xl font-display font-semibold tracking-tight text-left transition-colors flex items-center justify-between ${
                      isItemActive ? 'text-amber-400' : 'text-neutral-200 hover:text-white'
                    }`}
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  navigate('/partner');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 text-center text-sm font-semibold uppercase tracking-wider bg-white text-[#161615] hover:bg-neutral-100 flex items-center justify-center gap-2"
              >
                <span>PARTNER WITH US</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Footer Info */}
          <div className="border-t border-neutral-800 pt-6 text-xs text-neutral-400 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="text-white font-medium">Global Headquarters</p>
              <p>Kerala & Andhra Pradesh, India · New Jersey, USA</p>
            </div>
            <div>
              <p>inquiries@choicefoodsgroup.com</p>
              <p>© {new Date().getFullYear()} Choice Foods Group</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
