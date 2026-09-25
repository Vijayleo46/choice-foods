import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Clock, Headphones, Award, BookOpen, ArrowUpRight } from 'lucide-react';
import { PressArticle } from '../../data/pressData';
import { useNavigation } from '../../context/NavigationContext';

interface PressArticleModalProps {
  article: PressArticle | null;
  onClose: () => void;
}

export const PressArticleModal: React.FC<PressArticleModalProps> = ({ article, onClose }) => {
  const { navigate } = useNavigation();

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (article) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FAF9F5] text-[#141413] border border-[#D6D3D1] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Operational Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E5E0] bg-[#F5F2EB]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#78350F] font-semibold">
              {article.categoryLabel}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-[11px] font-mono text-[#78716C]">{article.source}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#141413] hover:bg-[#E7E5E0] transition-colors"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Article Header & Typography */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#141413] leading-tight">
              {article.title}
            </h2>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#78716C] font-mono border-b border-[#E7E5E0] pb-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#78350F]" />
                {article.date}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#78350F]" />
                {article.readTime}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                {article.sourceType === 'Audio Podcast' && <Headphones className="w-3.5 h-3.5 text-[#78350F]" />}
                {article.sourceType === 'Keynote Talk' && <Award className="w-3.5 h-3.5 text-[#78350F]" />}
                {article.sourceType === 'Industry Announcement' && <BookOpen className="w-3.5 h-3.5 text-[#78350F]" />}
                {article.sourceType}
              </span>
            </div>
          </div>

          {/* Primary Featured Image with caption */}
          <div className="space-y-2">
            <div className="aspect-[16/10] overflow-hidden bg-[#ECE8E1] border border-[#E0DCD4]">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] font-mono text-[#78716C] italic text-right">
              Archive record: {article.source} · {article.date}
            </p>
          </div>

          {/* Lead Excerpt */}
          <div className="p-4 sm:p-6 bg-[#F5F2EB] border-l-2 border-[#78350F]">
            <p className="text-base sm:text-lg font-serif italic text-[#292524] leading-relaxed">
              "{article.excerpt}"
            </p>
          </div>

          {/* Full Paragraphs with Curatorial Drop Cap */}
          <div className="space-y-5 text-base sm:text-lg text-[#44403C] leading-relaxed">
            {article.fullContent.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#141413] first-letter:leading-none'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull Quote Callout if present */}
          {article.pullQuote && (
            <div className="my-8 py-6 px-8 border-y border-[#D6D3D1] bg-[#FAF9F5] text-center space-y-2">
              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#1C1917] leading-snug">
                “{article.pullQuote.text}”
              </blockquote>
              <div className="pt-2 text-xs font-mono tracking-widest text-[#78350F] uppercase">
                {article.pullQuote.speaker} — {article.pullQuote.role}
              </div>
            </div>
          )}

          {/* Key Stats Bar if present */}
          {article.stats && article.stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E7E5E0]">
              {article.stats.map((st, i) => (
                <div key={i} className="p-3 bg-[#F5F2EB] border border-[#E7E5E0]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
                    {st.label}
                  </p>
                  <p className="text-base sm:text-lg font-serif font-bold text-[#141413] mt-0.5">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom Operational Bar */}
        <div className="px-6 py-4 bg-[#F5F2EB] border-t border-[#E7E5E0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {article.externalUrl && (
              <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#78350F] hover:text-[#141413] transition-colors"
              >
                <span>View on {article.source}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#57534E] hover:text-[#141413] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                navigate('/partner');
              }}
              className="px-5 py-2.5 bg-[#141413] text-white hover:bg-[#292524] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Partner With Choice</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
