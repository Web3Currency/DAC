import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const PropertyValuationArticlePage: React.FC = () => (
  <>
    <article className="bg-white">
      <header className="relative overflow-hidden bg-[#20251F] text-white">
        <div className="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=85" alt="" className="h-full w-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#171C17]/95 via-[#20251F]/85 to-[#20251F]/55" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <a href="/#expert-perspectives-heading" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-[#A7D477]"><ArrowLeft size={15} /> Back to insights</a>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7D477]">Expert Perspectives · Property Valuation</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Understanding Property Valuation: Why Every Property Owner Needs It</h1>
          <p className="mt-5 text-sm text-white/65">Demola Adetola &amp; Co. Chartered Estate Surveyors &amp; Valuers</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <div className="mb-8 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85" alt="Residential property representing real estate valuation" className="aspect-[16/9] w-full object-cover" /></div>
          <div className="space-y-6 text-[15px] leading-[1.9] text-[#4E4B4B] sm:text-base">
            <p>Property is one of the most valuable assets an individual or organization can own. Whether you are planning to sell, purchase, insure, lease, or use a property as collateral for financing, understanding its true market value is essential. This is where professional property valuation plays a critical role.</p>
            <p>Property valuation is the process of determining the current market value of a property based on various factors including location, condition, size, accessibility, market demand, and comparable sales within the area. A professional valuation provides an objective assessment that helps property owners and investors make informed decisions.</p>
            <p>One of the most important reasons for property valuation is to support buying and selling transactions. Sellers need accurate valuations to avoid underpricing or overpricing their properties, while buyers need assurance that they are paying a fair market price. An independent valuation helps both parties negotiate from an informed position.</p>
            <p>Property valuation is also important for mortgage and financing purposes. Financial institutions often require a professional valuation before approving loans secured by real estate. This ensures that the property provides adequate security for the loan facility.</p>
            <p>For investors, valuation provides critical information for assessing potential returns and determining whether a property represents a worthwhile investment. Accurate valuation helps investors compare opportunities and make sound financial decisions.</p>
            <p>Valuation is equally important for insurance purposes. Property owners need to understand the replacement or reinstatement value of their assets to ensure adequate insurance coverage and avoid financial losses in the event of damage or destruction.</p>
            <p>At Demola Adetola &amp; Co. Chartered Estate Surveyors &amp; Valuers, we provide professional valuation services backed by industry expertise, market knowledge, and ethical standards. Our valuation reports are prepared with accuracy, transparency, and professionalism to support informed decision-making.</p>
            <p>Whether you are an individual property owner, corporate organization, investor, financial institution, or government agency, professional property valuation remains an indispensable tool for protecting and maximizing the value of your real estate assets.</p>
          </div>
          <div className="mt-10 border-t border-[#E8EBE5] pt-6">
            <a href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527C32] hover:text-[#07A757]">Explore our professional services <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <aside className="h-fit border border-[#E8EBE5] bg-[#F8F9F7] p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Professional guidance</p>
          <h2 className="mt-3 text-xl font-bold leading-snug text-[#252223]">Need a professional property valuation?</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#686565]">Speak with Demola Adetola &amp; Co. about your property valuation requirements.</p>
          <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#8ABE4B] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition hover:bg-[#07A757] hover:text-white">Make an enquiry <ArrowUpRight size={15} /></a>
        </aside>
      </div>
    </article>
    <ContactSection preselectedServiceId="property-valuation" />
  </>
);
