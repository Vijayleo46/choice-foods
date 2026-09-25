import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LEARN_MORE_LINKS } from '../../data/pressData';
import { useNavigation } from '../../context/NavigationContext';

export const PressLearnMore: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="relative w-full bg-[#FAF9F5] text-[#141413] py-20 sm:py-28 border-b border-[#E7E5E0]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="border-b border-[#E7E5E0] pb-6">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#78350F] font-semibold block mb-2">
            CROSS-NAVIGATION HUBS
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#141413]">
            Learn More About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {LEARN_MORE_LINKS.map((link, idx) => (
            <div
              key={idx}
              onClick={() => navigate(link.path)}
              className="group cursor-pointer p-6 sm:p-8 bg-[#F4F1EA]/50 border border-[#E7E5E0] hover:border-[#141413] hover:bg-[#F2EFE9] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] group-hover:text-[#78350F] transition-colors">
                  0{idx + 1} · {link.eyebrow}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#141413] group-hover:text-[#78350F] transition-colors">
                    {link.title}
                  </h3>
                  <div className="p-2 rounded-full text-[#78716C] group-hover:text-[#141413] group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm font-sans text-[#57534E] leading-relaxed">
                  {link.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E5E0] text-xs font-mono uppercase tracking-widest text-[#78350F] flex items-center gap-1.5 group-hover:underline">
                <span>View {link.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
