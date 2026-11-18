import React, { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSiteMedia } from '../lib/useSiteMedia';

type ArticleCard = { title: string; excerpt: string | null; slug: string; cover_image_url: string | null; cover_image_alt: string | null; published_at: string | null; category: string };
export const InsightsPage: React.FC = () => {
  const [articles, setArticles] = useState<ArticleCard[]>([]);
  const [loaded, setLoaded] = useState(false);
  const siteMedia = useSiteMedia();

  useEffect(() => {
    let active = true;
    supabase.from('articles').select('title,excerpt,slug,cover_image_url,cover_image_alt,published_at,category')
      .eq('status','published').order('published_at',{ascending:false}).limit(100)
      .then(({data,error}) => {
        if (!active) return;
        if (!error && data) setArticles(data as ArticleCard[]);
        setLoaded(true);
      });
    return () => { active = false; };
  }, []);

  const source = articles.map(item => ({
    title: item.title,
    excerpt: item.excerpt || '',
    slug: item.slug,
    image: item.cover_image_url || siteMedia.expert_perspectives_default,
    alt: item.cover_image_alt || item.title,
    date: item.published_at ? new Date(item.published_at).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : 'DAC Insights',
    category: item.category || 'Publication',
  }));

  return (
    <>
    <section aria-labelledby="insights-page-heading" className="relative isolate flex min-h-[280px] items-center overflow-hidden bg-[#252223] text-white sm:min-h-[340px] lg:min-h-[390px]">
      {siteMedia.expert_perspectives_default && <img src={siteMedia.expert_perspectives_default} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171617]/90 via-[#252223]/75 to-[#252223]/35" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D5E8C0]">Knowledge &amp; perspectives</span></div>
          <h1 id="insights-page-heading" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Insights &amp; Publications</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">Explore property insights, professional perspectives and publications from Demola Adetola &amp; Co. to support informed real estate decisions.</p>
        </header>
      </div>
    </section>
    <section className="min-h-[45vh] bg-[#F8F9F7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {loaded && source.length === 0 ? (
          <div className="rounded-sm border border-[#E5E9E1] bg-white px-6 py-16 text-center">
            <BookOpen className="mx-auto mb-4 h-8 w-8 text-[#8ABE4B]" />
            <h2 className="text-lg font-bold text-[#252223]">New publications are on the way</h2>
            <p className="mt-2 text-sm text-[#626061]">Please check back for the latest insights from our team.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {source.map(article => (
              <a key={article.slug} href={`/insights/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E8EBE5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C9D8BC] hover:shadow-[0_14px_35px_rgba(30,45,20,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9EDE6]">
                  {article.image && <img src={article.image} alt={article.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />}
                  <span className="absolute left-3 top-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#59634F]">{article.category}</span>
                  <span className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#59634F]">{article.date}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-base font-bold leading-snug text-[#252223] transition-colors group-hover:text-[#527C32]">{article.title}</h2>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-[#6B6969] sm:text-[13px]">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#527C32]">Read Article <ArrowUpRight size={15} /></span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
};
