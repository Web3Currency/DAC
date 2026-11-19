import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalContactCTA: React.FC = () => (
  <section aria-labelledby="final-contact-heading" className="bg-[#F5F8F2] py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex w-full flex-col gap-7 rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
      <div className="max-w-3xl">
        <h2 id="final-contact-heading" className="text-3xl font-bold leading-tight tracking-tight text-[#252223] sm:text-4xl lg:text-[2.65rem]">Let’s Discuss Your Property Needs.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Whether you require professional valuation, property consultancy, property management or real estate advisory, our team is ready to assist.</p>
      </div>
      <div className="flex w-full shrink-0 sm:w-auto">
        <a href="/contact#contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#252223] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#383435] sm:w-auto">
          Contact Us <ArrowRight size={15} />
        </a>
      </div>
    </div></div>
  </section>
);
