import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const BuyingPropertyArticlePage: React.FC = () => (
  <article className="bg-white">
    <header className="relative overflow-hidden bg-[#20251F] text-white">
      <div className="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85" alt="" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#171C17]/95 via-[#20251F]/85 to-[#20251F]/55" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <a href="/#expert-perspectives-heading" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-[#A7D477]"><ArrowLeft size={15} /> Back to insights</a>
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7D477]">Expert Perspectives · Property Acquisition</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">7 Things to Check Before Buying Property in Nigeria</h1>
        <p className="mt-5 text-sm text-white/65">Demola Adetola &amp; Co. Chartered Estate Surveyors &amp; Valuers</p>
      </div>
    </header>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16 lg:px-8">
      <div className="min-w-0">
        <div className="mb-8 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" alt="Contemporary residential property" className="aspect-[16/9] w-full object-cover" /></div>
        <div className="space-y-6 text-[15px] leading-[1.9] text-[#4E4B4B] sm:text-base">
          <p>Purchasing property is one of the most significant financial decisions anyone can make. While real estate offers tremendous opportunities for wealth creation and long-term security, buyers must exercise due diligence before committing their resources.</p>
          <p>Below are seven important factors every prospective property buyer should consider.</p>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">1. Verify Ownership</h2><p>Ensure that the seller has legitimate ownership rights over the property. Request and verify all relevant title documents before proceeding.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">2. Check Property Documentation</h2><p>Confirm the status of documents such as Certificates of Occupancy, Deeds of Assignment, Survey Plans, and other relevant approvals. Proper documentation reduces legal risks and future disputes.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">3. Investigate the Location</h2><p>The location of a property significantly influences its value, accessibility, security, and future appreciation potential. Evaluate surrounding infrastructure and neighborhood development.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">4. Assess Physical Condition</h2><p>Inspect the property thoroughly to identify structural defects, maintenance issues, or potential renovation costs that may affect your investment.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">5. Understand Development Restrictions</h2><p>Certain locations may have zoning regulations or development restrictions that could impact future plans for the property.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">6. Evaluate Market Value</h2><p>Conduct proper market research or obtain a professional valuation to ensure that the asking price reflects prevailing market conditions.</p></section>
          <section><h2 className="mb-2 text-xl font-bold text-[#252223]">7. Engage Professionals</h2><p>Working with qualified Estate Surveyors and Valuers provides valuable guidance throughout the acquisition process and helps minimize costly mistakes.</p></section>
          <p>Buying property should never be rushed. Careful due diligence protects your investment and gives you confidence in your decision. At Demola Adetola &amp; Co., we assist clients in evaluating opportunities, verifying documentation, and making informed property acquisition decisions.</p>
          <p>With the right professional guidance, purchasing property can become a rewarding and profitable experience.</p>
        </div>
      </div>
      <aside className="h-fit border border-[#E8EBE5] bg-[#F8F9F7] p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Professional guidance</p>
        <h2 className="mt-3 text-xl font-bold leading-snug text-[#252223]">Need guidance before purchasing a property?</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#686565]">Speak with Demola Adetola &amp; Co. about assessing a property and making an informed acquisition decision.</p>
        <a href="/contact#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#8ABE4B] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition hover:bg-[#07A757] hover:text-white">Make an enquiry <ArrowUpRight size={15} /></a>
      </aside>
    </div>
  </article>
);
