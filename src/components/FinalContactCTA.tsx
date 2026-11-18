import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FinalContactCTA: React.FC = () => (
  <section aria-labelledby="final-contact-heading" className="bg-[#F5F8F2] py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex w-full flex-col gap-7 rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
      <div className="max-w-3xl">
        <h2 id="final-contact-heading" className="text-3xl font-bold leading-tight tracking-tight text-[#252223] sm:text-4xl lg:text-[2.65rem]">Let’s Discuss Your Property Needs.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Whether you require professional valuation, property consultancy, property management or real estate advisory, our team is ready to assist.</p>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
        <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/[^+\d]/g, '')}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">
          <Phone size={15} /> Speak With Our Team
        </a>
        <a href="/contact#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">
          Contact Us <ArrowRight size={15} />
        </a>
      </div>
    </div></div>
  </section>
);
