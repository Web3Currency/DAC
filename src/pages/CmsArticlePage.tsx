import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { updatePageMetadata } from '../components/SEOHead';

type Article = { title:string; excerpt:string|null; content:string; category:string; cover_image_url:string|null; cover_image_alt:string|null; published_at:string|null };
export default function CmsArticlePage({ slug }: { slug:string }) {
  const [article,setArticle]=useState<Article|null>(null);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    if (article) {
      updatePageMetadata(
        `${article.title} | Demola Adetola & Co.`,
        article.excerpt || `Read ${article.title} from Demola Adetola & Co., Chartered Estate Surveyors and Valuers.`,
        `/insights/${slug}`,
      );
    }
  }, [article, slug]);
  useEffect(()=>{
    let active=true;
    supabase.from('articles').select('title,excerpt,content,category,cover_image_url,cover_image_alt,published_at')
      .eq('slug',slug).eq('status','published').maybeSingle()
      .then(({data})=>{if(active){setArticle(data as Article|null);setLoading(false);}});
    return ()=>{active=false;};
  },[slug]);
  if(loading) return <div className="min-h-[50vh] grid place-items-center text-sm text-[#626061]">Loading article…</div>;
  if(!article) return <section className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-3xl font-bold text-[#252223]">Article not found</h1><a href="/#expert-perspectives-heading" className="mt-6 inline-flex text-sm font-semibold text-[#07894B]">Back to Expert Perspectives</a></section>;
  return <article className="bg-white">
    <header className="relative overflow-hidden bg-[#20251F] text-white">
      {article.cover_image_url && <div className="absolute inset-0 opacity-30"><img src={article.cover_image_url} alt={article.cover_image_alt||''} className="h-full w-full object-cover"/></div>}
      <div className="absolute inset-0 bg-gradient-to-r from-[#171C17]/95 via-[#20251F]/85 to-[#20251F]/55"/>
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <a href="/#expert-perspectives-heading" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/75 hover:text-[#A7D477]"><ArrowLeft size={15}/> Back to insights</a>
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7D477]">{article.category}</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl">{article.title}</h1>
        {article.published_at && <p className="mt-5 text-sm text-white/65">{new Date(article.published_at).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</p>}
      </div>
    </header>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16 lg:px-8">
      <div className="min-w-0">
        <div className="space-y-6 text-[15px] leading-[1.9] text-[#4E4B4B] sm:text-base">{article.content.split(/\n\s*\n/).filter(Boolean).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div>
      </div>
      <aside className="h-fit border border-[#E8EBE5] bg-[#F8F9F7] p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Professional guidance</p>
        <h2 className="mt-3 text-xl font-bold leading-snug text-[#252223]">Would you like to discuss this subject?</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#686565]">Speak with Demola Adetola &amp; Co. about your property and real estate requirements.</p>
        <a href="/contact#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#8ABE4B] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition hover:bg-[#07A757] hover:text-white">Make an enquiry <ArrowUpRight size={15}/></a>
      </aside>
    </div>
  </article>;
}
