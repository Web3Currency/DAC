import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSiteMedia } from '../lib/useSiteMedia';

type ArticleCard = { title: string; excerpt: string | null; slug: string; cover_image_url: string | null; cover_image_alt: string | null; published_at: string | null; category: string };
const fallback = [
  { title: 'Understanding Property Valuation: Why Every Property Owner Needs It', excerpt: 'Property valuation plays a critical role in real estate transactions, investment decisions, and financial planning.', date: '11 June 2026', image: 'https://images.unsplash.com/photo-1560518883-ce09059ee17f?auto=format&fit=crop&w=1000&q=85', alt: 'Residential property', slug: 'property-valuation' },
  { title: '7 Things to Check Before Buying Property in Nigeria', excerpt: 'Discover the key checks every buyer should perform before committing funds.', date: '11 June 2026', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', alt: 'Contemporary home', slug: 'buying-property-in-nigeria' },
  { title: 'Property Management: Protecting the Value of Your Investment', excerpt: 'Learn the benefits of professional property management services.', date: '11 June 2026', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85', alt: 'Managed commercial property', slug: 'property-management' },
  { title: 'Real Estate Investment Opportunities in Nigeria in 2026', excerpt: 'Explore emerging trends and sectors with strong growth potential.', date: '11 June 2026', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85', alt: 'Commercial buildings', slug: 'real-estate-investment-2026' },
];

export const ExpertPerspectivesSection: React.FC = () => {
  const [articles, setArticles] = useState<ArticleCard[]>([]);
  const [loaded, setLoaded] = useState(false);
  const siteMedia = useSiteMedia();
  useEffect(() => {
    let active = true;
    supabase.from('articles').select('title,excerpt,slug,cover_image_url,cover_image_alt,published_at,category')
      .eq('status','published').order('published_at',{ascending:false}).limit(4)
      .then(({data,error}) => {
        if (!active) return;
        if (!error && data) setArticles(data as ArticleCard[]);
        setLoaded(true);
      });
    return () => { active = false; };
  }, []);
  const cards = articles.length ? articles.map(item => ({
    title:item.title, excerpt:item.excerpt || '', slug:item.slug,
    image:item.cover_image_url || siteMedia.expert_perspectives_default || fallback[0].image,
    alt:item.cover_image_alt || item.title,
    date:item.published_at ? new Date(item.published_at).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : 'Expert Perspectives',
  })) : fallback;
  return (
    <section aria-labelledby="expert-perspectives-heading" className="bg-[#F8F9F7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-2xl sm:mb-12">
          <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Insights &amp; Publications</span></div>
          <h2 id="expert-perspectives-heading" className="text-3xl font-bold leading-tight tracking-tight text-[#252223] sm:text-4xl">Expert Perspectives on Real Estate Solutions</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#626061] sm:text-base">Stay informed with the latest property research and publications from Africa and around the world.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {cards.map(article => (
            <a key={article.slug} href={`/insights/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E8EBE5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C9D8BC] hover:shadow-[0_14px_35px_rgba(30,45,20,0.08)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E9EDE6]"><img src={article.image} alt={article.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#59634F]">{article.date}</span></div>
              <div className="flex flex-1 flex-col p-5"><h3 className="text-base font-bold leading-snug text-[#252223] transition-colors group-hover:text-[#527C32]">{article.title}</h3><p className="mt-3 flex-1 text-xs leading-relaxed text-[#6B6969] sm:text-[13px]">{article.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#527C32]">Read Article <ArrowUpRight size={15} /></span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
