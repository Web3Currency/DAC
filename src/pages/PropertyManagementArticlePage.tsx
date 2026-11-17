import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const PropertyManagementArticlePage: React.FC = () => (
  <article className="bg-white">
    <header className="relative overflow-hidden bg-[#20251F] text-white">
      <div className="absolute inset-0 opacity-25"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85" alt="" className="h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#171C17]/95 via-[#20251F]/85 to-[#20251F]/55" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <a href="/#expert-perspectives-heading" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-[#A7D477]"><ArrowLeft size={15} /> Back to insights</a>
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7D477]">Expert Perspectives · Property Management</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Property Management: Protecting the Value of Your Investment</h1>
        <p className="mt-5 text-sm text-white/65">Demola Adetola &amp; Co. Chartered Estate Surveyors &amp; Valuers</p>
      </div>
    </header>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16 lg:px-8">
      <div className="min-w-0">
        <div className="mb-8 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85" alt="Professionally managed commercial property" className="aspect-[16/9] w-full object-cover" /></div>
        <div className="space-y-6 text-[15px] leading-[1.9] text-[#4E4B4B] sm:text-base">
          <p>Property management involves the administration, operation, maintenance, and oversight of residential, commercial, and mixed-use properties. Professional management helps property owners focus on their investment objectives while experienced professionals handle day-to-day operational requirements.</p>
          <p>One of the key benefits of professional property management is tenant administration. This includes tenant screening, lease administration, rent collection, dispute resolution, and ensuring compliance with tenancy agreements.</p>
          <p>Maintenance management is another critical component. Regular inspections and proactive maintenance help prevent deterioration, reduce repair costs, and preserve property value over time.</p>
          <p>Financial management also plays a significant role. Proper budgeting, expense control, income monitoring, and reporting enable property owners to track performance and make informed decisions.</p>
          <p>Professional property management contributes to higher occupancy rates, improved tenant retention, and better overall asset performance. Well-managed properties tend to attract quality tenants and command competitive rental values.</p>
          <p>At Demola Adetola &amp; Co. Chartered Estate Surveyors &amp; Valuers, we provide comprehensive property management services tailored to the unique needs of property owners and investors. Our goal is to protect and enhance the value of every asset entrusted to our care.</p>
          <p>Whether you own a single residential property or a large commercial portfolio, effective property management remains one of the most important factors in achieving sustainable investment success.</p>
        </div>
      </div>
      <aside className="h-fit border border-[#E8EBE5] bg-[#F8F9F7] p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Professional guidance</p>
        <h2 className="mt-3 text-xl font-bold leading-snug text-[#252223]">Looking for professional property management?</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#686565]">Speak with Demola Adetola &amp; Co. about managing and protecting your property investment.</p>
        <a href="/contact#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#8ABE4B] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition hover:bg-[#07A757] hover:text-white">Make an enquiry <ArrowUpRight size={15} /></a>
      </aside>
    </div>
  </article>
);
