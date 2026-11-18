import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onOpenConsultation: (serviceId?: string) => void;
  onViewServiceDetail: (service: import('../types').ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation, onViewServiceDetail }) => (
  <div className="w-full">
    <ServicesSection
      onSelectServiceForConsultation={onOpenConsultation}
      onViewServiceDetail={onViewServiceDetail}
    />
    <section aria-labelledby="services-contact-heading" className="bg-[#F5F8F2] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-[#252223]/70" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#252223]/70">Need expert assistance?</span>
          </div>
          <h2 id="services-contact-heading" className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Need Help With a Property Matter?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Talk to our team about valuation, property management, investment advice or your next development project.</p>
        </div>
        <button onClick={() => onOpenConsultation('property-valuation')} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">
          Speak With Our Team <ArrowUpRight size={15} />
        </button>
      </div>
    </section>
  </div>
);
