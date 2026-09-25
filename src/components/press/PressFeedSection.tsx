import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Filter, ChevronRight, Eye } from 'lucide-react';
import { PRESS_ARTICLES, PRESS_CATEGORIES, PressArticle } from '../../data/pressData';
import { PressArticleModal } from './PressArticleModal';

gsap.registerPlugin(ScrollTrigger);

export const PressFeedSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<PressArticle | null>(null);
  const [visibleLimit, setVisibleLimit] = useState<number>(4);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Filter articles based on active category
  const filteredArticles =
    activeCategory === 'all'
      ? PRESS_ARTICLES
      : PRESS_ARTICLES.filter((item) => item.category === activeCategory);

  const displayedArticles = filteredArticles.slice(0, visibleLimit);

  // Animate items on category change or initial render
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        list.children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, list);

    return () => ctx.revert();
  }, [activeCategory, visibleLimit]);

  const handleTabChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleLimit(4);
  };

  return (
    <section
      id="press-feed"
      ref={sectionRef}
      className="relative w-full bg-[#FAF9F5] text-[#141413] py-20 sm:py-28 lg:py-36 border-b border-[#E7E5E0]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 lg:space-y-16">
        {/* Section Headline & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-[#E7E5E0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-widest text-[#78350F] uppercase font-semibold">
                ARCHIVE RELEASES & INTERVIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#141413] tracking-[-0.02em]">
              Press & News
            </h2>
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden sm:flex flex-wrap items-center gap-2 lg:gap-3">
            {PRESS_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  type="button"
                  className={`group relative px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#141413] text-white shadow-xs'
                      : 'bg-[#F2EFE9] text-[#57534E] hover:text-[#141413] hover:bg-[#EBE7DF]'
                  }`}
                >
                  <span className="capitalize">{cat.label}</span>
                  <sup
                    className={`ml-1 text-[10px] font-mono ${
                      isActive ? 'text-[#D97706]' : 'text-[#78716C]'
                    }`}
                  >
                    {cat.count}
                  </sup>
                </button>
              );
            })}
          </div>

          {/* Mobile Select dropdown */}
          <div className="sm:hidden relative">
            <label htmlFor="category-select" className="sr-only">
              Filter Press Categories
            </label>
            <div className="relative">
              <select
                id="category-select"
                value={activeCategory}
                onChange={(e) => handleTabChange(e.target.value)}
                className="w-full appearance-none bg-[#F2EFE9] border border-[#D6D3D1] px-4 py-3 text-xs font-mono tracking-wider text-[#141413] focus:outline-none focus:border-[#141413]"
              >
                {PRESS_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label} ({cat.count})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#78716C]">
                <Filter className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Press List */}
        <div>
          <ul ref={listRef} className="divide-y divide-[#E7E5E0]">
            {displayedArticles.map((article, idx) => (
              <li key={article.id} className="group">
                <div
                  onClick={() => setActiveArticle(article)}
                  className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6 lg:gap-10 py-10 lg:py-12 cursor-pointer transition-colors duration-300 hover:bg-[#F4F1EA]/60 -mx-4 px-4 sm:-mx-6 sm:px-6"
                >
                  {/* Column 1: Title, Category & Source (3 cols) */}
                  <div className="flex flex-col justify-between gap-4 lg:col-span-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#78350F] font-semibold">
                          0{idx + 1} · {article.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[28px] font-serif font-medium leading-[1.25] text-[#141413] group-hover:text-[#78350F] transition-colors">
                        {article.title}
                      </h3>
                    </div>

                    <p className="font-serif italic text-base text-[#78716C]">
                      {article.source}
                    </p>
                  </div>

                  {/* Column 2: Media Image with hover scale (4 cols) */}
                  <div className="order-first lg:order-none lg:col-span-4">
                    <div className="relative aspect-[16/10] lg:h-[220px] lg:aspect-auto overflow-hidden bg-[#ECE8E1] border border-[#E0DCD4]">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 ease-out group-hover:scale-106 group-hover:grayscale-0"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#D97706]" />
                        <span>READ ARCHIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Date, Excerpt, and Arrow Link (4 cols) */}
                  <div className="flex flex-col justify-between gap-6 lg:col-span-4 self-stretch">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
                        {article.excerpt}{' '}
                        <span className="font-medium text-[#78350F] inline-flex items-center gap-1 group-hover:underline">
                          read full release
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E7E5E0]/60">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] group-hover:text-[#141413] transition-colors">
                        Click to view story
                      </span>
                      <div className="p-2 rounded-full bg-[#EAE6DE] text-[#141413] group-hover:bg-[#141413] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1.5">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Load More Button */}
        {visibleLimit < filteredArticles.length && (
          <div className="pt-6 text-center">
            <button
              onClick={() => setVisibleLimit((prev) => prev + 2)}
              className="px-8 py-3.5 bg-transparent border border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-white text-xs font-mono tracking-widest uppercase transition-colors inline-flex items-center gap-2"
            >
              <span>LOAD MORE RELEASES ({filteredArticles.length - visibleLimit} REMAINING)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Modal Detailed Reading Experience */}
      <PressArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
