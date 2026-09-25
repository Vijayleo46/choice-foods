import React, { useEffect } from 'react';
import { PartnerHero } from '../components/partner/PartnerHero';
import { GlobalPresenceSection } from '../components/partner/GlobalPresenceSection';
import { PartnershipManifesto } from '../components/partner/PartnershipManifesto';
import { CoreCapabilitiesInteractive } from '../components/partner/CoreCapabilitiesInteractive';
import { PurposeDrivenSection } from '../components/partner/PurposeDrivenSection';
import { PartnerCaseStudies } from '../components/partner/PartnerCaseStudies';
import { PartnerTypographicBreak } from '../components/partner/PartnerTypographicBreak';
import { FinalPartnershipCTA } from '../components/partner/FinalPartnershipCTA';
import { LearnMorePartner } from '../components/partner/LearnMorePartner';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const PartnerPage: React.FC = () => {
  // Sync page title and refresh ScrollTrigger on mount
  useEffect(() => {
    document.title = 'Partner with Us — Choice Foods Group';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-[#FBFBFA] min-h-screen text-[#141413] selection:bg-[#141413] selection:text-white">
      {/* 1. Hero — Partner With Us */}
      <PartnerHero />

      {/* 2. Global Presence */}
      <GlobalPresenceSection />

      {/* 3. Partnership Manifesto & Upper Contact Form */}
      <PartnershipManifesto />

      {/* 4. Core Capabilities Interactive (Sticky Image + Value Added / Recipe Dev / Private Label) */}
      <CoreCapabilitiesInteractive />

      {/* 5. Purpose-Driven Global Seafood Company (Break-the-grid Visual) */}
      <PurposeDrivenSection />

      {/* 6. Partner Case Studies & Storytelling (Inside Facility, Modern Family, Retailer Private Label) */}
      <PartnerCaseStudies />

      {/* 7. Typographic Breathing Room */}
      <PartnerTypographicBreak />

      {/* 8. Final Partnership Call-to-Action & Reach Out To Us Form */}
      <FinalPartnershipCTA />

      {/* 9. Cross Navigation Hubs */}
      <LearnMorePartner />
    </main>
  );
};
