import React, { useEffect, useState } from 'react';
import { ArrowUpRight, BookOpen, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSiteMedia } from '../lib/useSiteMedia';

type ArticleCard = { title: string; excerpt: string | null; slug: string; cover_image_url: string | null; cover_image_alt: string | null; published_at: string | null; category: string };
const fallback = [
  { title: 'Understanding Property Valuation: Why Every Property Owner Needs It', excerpt: 'Property valuation plays a critical role in real estate transactions, investment decisions, and financial planning.', date: '11 June 2026', image: null, alt: 'Residential property', slug: 'property-valuation', category: 'Property Valuation' },
  { title: '7 Things to Check Before Buying Property in Nigeria', excerpt: 'Discover the key checks every buyer should perform before committing funds.', date: '11 June 2026', image: null, alt: 'Contemporary home', slug: 'buying-property-in-nigeria', category: 'Real Estate Advisory' },
  { title: 'Property Management: Protecting the Value of Your Investment', excerpt: 'Learn the benefits of professional property management services.', date: '11 June 2026', image: null, alt: 'Managed commercial property', slug: 'property-management', category: 'Property Management' },
  { title: 'Real Estate Investment Opportunities in Nigeria in 2026', excerpt: 'Explore emerging trends and sectors with strong growth potential.', date: '11 June 2026', image: null, alt: 'Commercial buildings', slug: 'real-estate-investment-2026', category: 'Market Insights' },
];

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

  const source = articles.length ? articles.map(item => ({
    title: item.title,
    excerpt: item.excerpt || '',
    slug: item.slug,
    image: item.cover_image_url || siteMedia.expert_perspectives_default,
    alt: item.cover_image_alt || item.title,
    date: item.published_at ? new Date(item.published_at).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : 'DAC Insights',
    category: item.category || 'Publication',
  })) : fallback;

  return (
    <>
    <section aria-labelledby="insights-page-heading" className="relative isolate flex h-[280px] items-center overflow-hidden bg-[#252223] text-white sm:h-[340px] lg:h-[390px]">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
        <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <defs>
            <pattern id="insights-map-grid" width="92" height="72" patternUnits="userSpaceOnUse">
              <path d="M 92 0 L 0 0 0 72" fill="none" stroke="#8ABE4B" strokeWidth="1" strokeOpacity=".35" />
              <path d="M 46 0 L 46 72 M 0 36 L 92 36" fill="none" stroke="#E5E9E1" strokeWidth=".6" strokeOpacity=".12" />
            </pattern>
            <pattern id="insights-map-blocks" width="260" height="190" patternUnits="userSpaceOnUse" patternTransform="rotate(-13)">
              <path d="M20 18h92v48H20z M142 18h92v48h-92z M20 94h92v74H20z M142 94h92v74h-92z" fill="none" stroke="#8ABE4B" strokeWidth="1.2" strokeOpacity=".25" />
            </pattern>
          </defs>
          <rect width="1440" height="520" fill="url(#insights-map-grid)" />
          <rect width="1440" height="520" fill="url(#insights-map-blocks)" />
          <path d="M-40 390 C260 300 390 440 650 320 S1080 160 1500 260" fill="none" stroke="#8ABE4B" strokeWidth="18" strokeOpacity=".13" />
          <path d="M-40 390 C260 300 390 440 650 320 S1080 160 1500 260" fill="none" stroke="#D6E8BD" strokeWidth="2" strokeDasharray="8 12" strokeOpacity=".55" />
          <path d="M120 0L410 520 M520 0L780 520 M990 0L1260 520" stroke="#E5E9E1" strokeWidth="2" strokeOpacity=".1" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[#8ABE4B]/15 sm:block" aria-hidden="true">
        <FileText className="h-[25rem] w-[25rem] fill-current stroke-[#8ABE4B]/30" strokeWidth={0.8} />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171617]/90 via-[#252223]/75 to-[#252223]/35" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <header className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D5E8C0]">Knowledge &amp; perspectives</span></div>
          <h1 id="insights-page-heading" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Insights &amp; Publications</h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/85 sm:mt-4 sm:text-sm lg:text-base">Explore property insights, professional perspectives and publications from Demola Adetola &amp; Co. to support informed real estate decisions.</p>
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
    <section aria-labelledby="insights-contact-heading" className="bg-[#F5F8F2] px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#252223]/70" /><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#252223]/70">Need expert guidance?</span></div>
          <h2 id="insights-contact-heading" className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Make Your Next Property Decision With Confidence.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Speak with our team for professional advice on valuation, property investment, management and real estate opportunities.</p>
        </div>
        <a href="/contact#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">Speak With Our Team <ArrowUpRight size={15} /></a>
      </div>
    </section>
    </>
  );
};
