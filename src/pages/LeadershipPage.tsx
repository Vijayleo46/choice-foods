import React, { useState } from 'react';
import { LEADERSHIP_TEAM, LeaderProfile } from '../data/aboutData';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, ArrowLeft, Users, ShieldCheck, Globe, Building2, ChevronRight, ExternalLink } from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const { navigate, openLeaderProfile } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterCategories = [
    { id: 'ALL', label: 'All Executives (11)' },
    { id: 'Executive', label: 'Executive Governance' },
    { id: 'Operations', label: 'Operations & Engineering' },
    { id: 'Commercial', label: 'Commercial & Sales' },
    { id: 'Innovation', label: 'Strategy & Culinary' },
  ];

  const filteredLeaders = LEADERSHIP_TEAM.filter((leader) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'Executive') {
      return ['jose-thomas', 'tom-domino', 'alok-modani'].includes(leader.slug);
    }
    if (selectedFilter === 'Operations') {
      return ['thomas-jose', 'nithin-poulose'].includes(leader.slug);
    }
    if (selectedFilter === 'Commercial') {
      return ['jacob-jose', 'anna-jose', 'moe-cheramie', 'stephen-choppen'].includes(leader.slug);
    }
    if (selectedFilter === 'Innovation') {
      return ['karan-sood', 'rajeev-menon'].includes(leader.slug);
    }
    return true;
  });

  return (
    <div className="w-full bg-[#FBFBFA] min-h-screen text-[#161615] pt-24 sm:pt-32 pb-24">
      {/* Top Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/about/')}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>ABOUT CHOICE</span>
            </button>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
              LEADERSHIP DIRECTORY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>11 EXECUTIVE STEWARDS</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-700" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
              01 — 11 / EXECUTIVE STEWARDSHIP
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#161615] leading-[1.05]">
            LEADERSHIP
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-light leading-relaxed">
            Second and third-generation family stewards collaborating with industry veterans in food science, supply chain logistics, and international commerce across India, North America, and Europe.
          </p>
        </div>

        {/* Executive Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-neutral-200">
          <div>
            <span className="text-3xl sm:text-4xl font-display font-bold text-amber-900 block">11</span>
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Executive Officers</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-display font-bold text-amber-900 block">3</span>
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Generations Active</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-display font-bold text-amber-900 block">1953</span>
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Founding Year</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-display font-bold text-amber-900 block">3</span>
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Global Divisions</span>
          </div>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-neutral-200 pb-4">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                selectedFilter === cat.id
                  ? 'bg-[#161615] text-white shadow-sm font-semibold'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:text-black hover:border-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leadership 11-Card Editorial Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLeaders.map((leader: LeaderProfile) => {
            const displayImage = leader.localImage || leader.image;

            return (
              <div
                key={leader.slug}
                className="group bg-white border border-neutral-200 hover:border-black hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Portrait with Index Badge */}
                  <div
                    onClick={() => openLeaderProfile(leader.slug)}
                    className="relative aspect-[3/4] bg-neutral-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={displayImage}
                      alt={leader.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top Sequence Pill */}
                    <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm text-white px-2.5 py-1 text-xs font-mono font-bold tracking-widest border border-white/20">
                      {leader.num} / 11
                    </div>

                    {/* Department Tag */}
                    <div className="absolute top-4 right-4 bg-amber-400/90 text-black px-2 py-0.5 text-[10px] font-mono uppercase font-bold tracking-wider">
                      {leader.department}
                    </div>

                    {/* Bottom Floating Title */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xl sm:text-2xl font-display font-bold leading-tight group-hover:text-amber-300 transition-colors">
                        {leader.name}
                      </p>
                      <p className="text-xs font-mono text-neutral-300 tracking-wide mt-1">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-neutral-600 font-light leading-relaxed">
                      {leader.summary}
                    </p>

                    {leader.meta && (
                      <div className="pt-2 border-t border-neutral-100 flex flex-col gap-1 text-[11px] font-mono text-neutral-500">
                        {leader.meta.location && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-neutral-400">HQ:</span>
                            <span>{leader.meta.location}</span>
                          </div>
                        )}
                        {leader.meta.focus && (
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-neutral-400">Focus:</span>
                            <span className="truncate">{leader.meta.focus}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between gap-4">
                  <button
                    onClick={() => openLeaderProfile(leader.slug)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#161615] group-hover:text-amber-800 transition-colors"
                  >
                    <span>Read Biography</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={leader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
                    title={`View official profile on choicefoodsgroup.com`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Executive Stewardship Philosophy */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24">
        <div className="bg-[#121613] text-white p-8 sm:p-14 lg:p-16 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
                FAMILY STEWARDSHIP
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Governance Grounded in Personal Responsibility.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Unlike corporate conglomerates driven by short-term quarterly pressures, Choice Foods is operated by second and third-generation owners who remain daily on the factory floors, dockside procurement stations, and retail test kitchens.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={() => navigate('/about/')}
                className="w-full px-6 py-4 bg-white text-[#121613] hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors text-center"
              >
                Explore Company History
              </button>
              <button
                onClick={() => navigate('/partner')}
                className="w-full px-6 py-4 bg-transparent border border-neutral-600 hover:border-white text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>Partner With Our Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
