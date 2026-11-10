import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { REAL_ARTICLES } from '../data/companyData';
import { ArticleItem } from '../types';

interface ArticlesSectionProps {
  onReadArticle: (article: ArticleItem) => void;
}

const ARTICLE_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', alt: 'Modern residential property' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', alt: 'Detached home and landscaped property' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85', alt: 'Commercial property building exterior' },
];

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="perspectives" className="py-14 sm:py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Property Tips &amp; Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
              Useful Advice for Property Owners and Buyers.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#626061] leading-relaxed">
              Practical property guides to help you avoid common mistakes and make informed decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REAL_ARTICLES.slice(0, 3).map((article, index) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-white border border-[#E5E9E1] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-[#E5E9E1]">
                <img
                  src={ARTICLE_IMAGES[index].src}
                  alt={ARTICLE_IMAGES[index].alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <span className="inline-flex self-start rounded-full bg-[#F5F8F2] px-3 py-1 text-[11px] font-semibold text-[#07A757] mb-4">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-[#252223] mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#626061] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-[#E5E9E1] flex items-center justify-between">
                  <button
                    onClick={() => onReadArticle(article)}
                    className="text-sm font-bold text-[#252223] hover:text-[#07A757] inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#07A757]" />
                  </button>
                  <BookOpen className="w-4 h-4 text-[#626061]/50" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#626061]">
          These guides provide general information. For advice on a specific property, speak with a qualified professional.
        </p>
      </div>
    </section>
  );
};
