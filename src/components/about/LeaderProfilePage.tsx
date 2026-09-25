import React, { useEffect } from 'react';
import { LEADERSHIP_TEAM, LeaderProfile } from '../../data/aboutData';
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, ExternalLink, ShieldCheck, MapPin, Briefcase, Award } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

interface LeaderProfilePageProps {
  slug: string;
  onBack?: () => void;
}

export const LeaderProfilePage: React.FC<LeaderProfilePageProps> = ({ slug, onBack }) => {
  const { navigate, closeLeaderProfile } = useNavigation();

  // Normalize slug to handle aliases like steve-choppen -> stephen-choppen
  const cleanSlug = slug.toLowerCase().replace(/\/$/, '');
  const normalizedSlug = cleanSlug === 'steve-choppen' ? 'stephen-choppen' : cleanSlug;

  const leaderIndex = LEADERSHIP_TEAM.findIndex(
    (l) => l.slug === normalizedSlug || (normalizedSlug === 'steve-choppen' && l.slug === 'stephen-choppen')
  );
  const leader: LeaderProfile = LEADERSHIP_TEAM[leaderIndex !== -1 ? leaderIndex : 0];
  const currentIndex = leaderIndex !== -1 ? leaderIndex : 0;

  const prevLeader =
    LEADERSHIP_TEAM[(currentIndex - 1 + LEADERSHIP_TEAM.length) % LEADERSHIP_TEAM.length];
  const nextLeader =
    LEADERSHIP_TEAM[(currentIndex + 1) % LEADERSHIP_TEAM.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      closeLeaderProfile();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${leader.name} - ${leader.role} | Choice Foods Group`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const displayImage = leader.localImage || leader.image;

  return (
    <div className="w-full min-h-screen bg-[#FBFBFA] text-[#161615] pt-24 sm:pt-32 pb-24">
      {/* Top Breadcrumb & Return Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black transition-colors focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO LEADERSHIP</span>
            </button>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
              {leader.num} — {leader.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={leader.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 hover:border-black text-neutral-600 hover:text-black transition-all rounded text-xs font-mono uppercase tracking-wider"
              title="View on choicefoodsgroup.com"
            >
              <span>LIVE SOURCE</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleShare}
              className="p-2 border border-neutral-200 hover:border-black text-neutral-600 hover:text-black transition-all rounded text-xs inline-flex items-center gap-1.5 focus:outline-none"
              title="Copy Profile Link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono text-[11px]">SHARE</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={() => navigate(`/people/${prevLeader.slug}/`)}
                className="p-2 border border-neutral-200 hover:border-black text-neutral-600 hover:text-black transition-all rounded"
                title={`Previous: ${prevLeader.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono text-neutral-400">
                {leader.num} / 11
              </span>
              <button
                onClick={() => navigate(`/people/${nextLeader.slug}/`)}
                className="p-2 border border-neutral-200 hover:border-black text-neutral-600 hover:text-black transition-all rounded"
                title={`Next: ${nextLeader.name}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Portrait */}
          <div className="lg:col-span-5 sticky top-36">
            <div className="relative aspect-[3/4] bg-neutral-900 shadow-2xl overflow-hidden border border-neutral-200 group">
              <img
                src={displayImage}
                alt={leader.name}
                referrerPolicy="no-referrer"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Numbering Badge */}
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-mono font-bold tracking-widest border border-white/20">
                {leader.num} / 11
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block">
                  {leader.department}
                </span>
                <p className="text-2xl font-display font-bold">{leader.name}</p>
                <p className="text-xs text-neutral-300 font-mono tracking-wide">{leader.role}</p>
              </div>
            </div>

            {/* Detailed Meta Box */}
            <div className="mt-4 p-5 bg-white border border-neutral-200 shadow-sm space-y-3 text-xs font-mono text-neutral-600">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-neutral-400">ORGANIZATION:</span>
                <span className="font-bold text-[#161615]">Choice Foods Group</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-neutral-400">EXECUTIVE ROSTER:</span>
                <span className="text-amber-800 font-bold">Position {leader.num} of 11</span>
              </div>
              {leader.meta?.location && (
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <span className="text-neutral-400">OPERATING BASE:</span>
                  <span className="text-neutral-700">{leader.meta.location}</span>
                </div>
              )}
              {leader.meta?.experience && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">INDUSTRY TENURE:</span>
                  <span className="text-neutral-700">{leader.meta.experience}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Full Official Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3 pb-6 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-amber-700" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold">
                  EXECUTIVE PROFILE {leader.num}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#161615]">
                {leader.name}
              </h1>

              <p className="text-lg sm:text-xl font-mono text-amber-800 font-semibold tracking-wide">
                {leader.role}
              </p>
            </div>

            {/* Quick Executive Summary */}
            {leader.summary && (
              <div className="p-5 bg-neutral-50 border-l-2 border-amber-700 text-neutral-800 text-base font-light italic leading-relaxed">
                "{leader.summary}"
              </div>
            )}

            {/* Biography Paragraphs extracted directly from the live site */}
            <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
              {leader.paragraphs && leader.paragraphs.length > 0 ? (
                leader.paragraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))
              ) : (
                <p className="leading-relaxed">
                  Key executive leader driving the strategic direction, operational excellence, and customer relationships of Choice Foods Group globally.
                </p>
              )}
            </div>

            {/* Return / Navigation CTA Strip */}
            <div className="pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={handleBack}
                className="w-full sm:w-auto px-8 py-4 bg-[#161615] text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Leadership Directory</span>
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                <span>Navigate:</span>
                <button
                  onClick={() => navigate(`/people/${nextLeader.slug}/`)}
                  className="text-black hover:text-amber-800 font-bold underline inline-flex items-center gap-1"
                >
                  <span>Next: {nextLeader.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Executive Switcher: All 11 Leaders Thumbnail Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 pt-16 border-t border-neutral-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block mb-1">
              EXECUTIVE ROSTER
            </span>
            <h3 className="text-2xl font-display font-bold text-[#161615]">
              Browse All 11 Leaders
            </h3>
          </div>
          <button
            onClick={() => navigate('/leadership/')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black underline"
          >
            View Full Grid →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
          {LEADERSHIP_TEAM.map((item, idx) => {
            const isCurrent = item.slug === leader.slug;
            const thumbImg = item.localImage || item.image;

            return (
              <div
                key={item.slug}
                onClick={() => navigate(`/people/${item.slug}/`)}
                className={`group cursor-pointer p-2 border transition-all text-center rounded ${
                  isCurrent
                    ? 'border-amber-800 bg-amber-50/50 shadow-sm ring-1 ring-amber-800'
                    : 'border-neutral-200 bg-white hover:border-black hover:shadow-md'
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 mb-2">
                  <img
                    src={thumbImg}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 ${
                      isCurrent ? 'filter contrast-[1.05]' : 'filter grayscale group-hover:grayscale-0'
                    }`}
                  />
                  <div className="absolute top-1 left-1 bg-black/80 text-white text-[9px] font-mono px-1">
                    {item.num}
                  </div>
                </div>
                <p className="text-[11px] font-display font-bold text-neutral-900 truncate">
                  {item.name}
                </p>
                <p className="text-[9px] font-mono text-neutral-400 truncate">
                  {item.role.split('(')[0].trim()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
