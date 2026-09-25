import React from 'react';
import { AboutTransition } from '../components/about/AboutTransition';
import { AboutHero } from '../components/about/AboutHero';
import { AboutMission } from '../components/about/AboutMission';
import { AboutPillars } from '../components/about/AboutPillars';
import { AboutCoreValues } from '../components/about/AboutCoreValues';
import { AboutTimeline } from '../components/about/AboutTimeline';
import { AboutFamilyOwned } from '../components/about/AboutFamilyOwned';
import { AboutLeadership } from '../components/about/AboutLeadership';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, ShieldCheck, Award, Globe2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="w-full bg-[#FBFBFA] min-h-screen text-[#161615]">
      {/* 13. Page Transition Curtain */}
      <AboutTransition />

      {/* 1. Cinematic 100vh Hero */}
      <AboutHero />

      {/* 2. Our Mission */}
      <AboutMission />

      {/* 3, 4, 5. Our People, Our Places, Our Process */}
      <AboutPillars />

      {/* 6. Choice's Core Values Accordion */}
      <AboutCoreValues />

      {/* 7. Historical Milestones Timeline */}
      <AboutTimeline />

      {/* 8. Family-Owned and Operated */}
      <AboutFamilyOwned />

      {/* 9. Leadership Carousel */}
      <AboutLeadership />

      {/* 14. Editorial Next Step CTA Section */}
      <section className="py-24 sm:py-32 bg-[#121613] text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold">
              JOIN OUR GLOBAL NETWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Discover Our Advanced<br />
            <span className="text-amber-400">Processing Capabilities</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            From farm-adjacent harvest freezing in Andhra Pradesh to rapid meal kit blending in New Jersey and Pennsylvania, explore how we partner with leading retailers and foodservice brands.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/capabilities')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-mono uppercase tracking-wider font-semibold transition-all inline-flex items-center justify-center gap-2 active:scale-95 shadow-lg"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/partner')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-600 text-white hover:border-white hover:bg-white/10 text-xs font-mono uppercase tracking-wider font-semibold transition-all inline-flex items-center justify-center gap-2 active:scale-95"
            >
              <span>PARTNER WITH US</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
