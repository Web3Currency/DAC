import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FinalContactCTA: React.FC = () => (
  <section aria-labelledby="final-contact-heading" className="bg-[#252223] py-14 sm:py-16 lg:py-20">
    <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="max-w-3xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-0.5 w-8 bg-[#8ABE4B]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8ABE4B]">Your next property decision</span>
        </div>
        <h2 id="final-contact-heading" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">Let’s Discuss Your Property Needs.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">Whether you require professional valuation, property consultancy, property management or real estate advisory, our team is ready to assist.</p>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
        <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/[^+\d]/g, '')}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#8ABE4B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">
          <Phone size={15} /> Speak With Our Team
        </a>
        <a href="/contact#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#8ABE4B] hover:bg-white/5">
          Contact Us <ArrowRight size={15} />
        </a>
      </div>
    </div>
  </section>
);
