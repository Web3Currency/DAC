import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { REAL_ARTICLES } from '../data/companyData';
import { ArticleItem } from '../types';

interface ArticlesSectionProps {
  onReadArticle: (article: ArticleItem) => void;
}

const ARTICLE_IMAGES = [
  { src: 'https://images.pexels.com/photos/20430714/pexels-photo-20430714.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Commercial office property in a Nigerian business district' },
  { src: 'https://images.pexels.com/photos/36622171/pexels-photo-36622171.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Lagos urban property landscape' },
  { src: 'https://images.pexels.com/photos/30678213/pexels-photo-30678213.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Property professionals collaborating on a real estate project' },
  { src: 'https://images.pexels.com/photos/34557960/pexels-photo-34557960.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern residential tower in an African city' },
];

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="perspectives" className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Strict, few text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Insights &amp; Research
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
              Chartered Surveyor Perspectives &amp; Market Notes.
            </h2>
          </div>
        </div>

        {/* Articles Grid — Minimal text, strong cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_ARTICLES.slice(0, 4).map((art) => (
            <div
              key={art.id}
              className="p-6 rounded-2xl bg-[#F5F8F2] hover:bg-[#FFFFFF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 -mx-6 -mt-6 h-40 overflow-hidden rounded-t-2xl bg-[#E5E9E1]">
                  <img src={ARTICLE_IMAGES[REAL_ARTICLES.indexOf(art)]?.src ?? ARTICLE_IMAGES[0].src} alt={ARTICLE_IMAGES[REAL_ARTICLES.indexOf(art)]?.alt ?? 'Real estate editorial image'} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <div className="flex items-center justify-between text-xs text-[#626061] mb-3">
                  <span className="font-bold text-[#07A757] uppercase tracking-wider text-[11px]">
                    {art.category}
                  </span>
                  <span className="text-[11px]">{art.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#252223] mb-2 leading-snug line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-[#626061] leading-relaxed line-clamp-2 mb-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E9E1] flex items-center justify-between">
                <button
                  onClick={() => onReadArticle(art)}
                  className="text-xs font-bold text-[#252223] hover:text-[#07A757] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#07A757]" />
                </button>
                <BookOpen className="w-4 h-4 text-[#626061]/50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
