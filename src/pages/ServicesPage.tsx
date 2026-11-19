import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => (
  <div className="w-full">
    <ServicesSection />
    <section aria-labelledby="services-contact-heading" className="relative isolate overflow-hidden bg-[#8ABE4B] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-25" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="services-cta-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="#252223" strokeWidth="1" strokeOpacity=".28" />
              <circle cx="0" cy="0" r="2" fill="#252223" fillOpacity=".35" />
            </pattern>
          </defs>
          <rect width="1440" height="420" fill="url(#services-cta-grid)" />
          <g fill="none" stroke="#252223" strokeWidth="1.5" strokeOpacity=".22">
            <circle cx="1180" cy="210" r="150" />
            <circle cx="1180" cy="210" r="190" strokeDasharray="5 10" />
            <path d="M1000 330V170l90-65 90 65v160M1045 330V210h90v120M950 330h410M1280 70v260M1310 110h70v220" />
          </g>
        </svg>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl bg-white px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <div className="max-w-3xl">
          <h2 id="services-contact-heading" className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">Have a Property Requirement We Haven't Covered?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Tell us what you have in mind. Our professional team will help you explore the right approach and the services that may be suitable.</p>
        </div>
        <button onClick={() => onOpenConsultation()} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#252223] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#383435]">
          Discuss Your Requirements <ArrowUpRight size={15} />
        </button>
      </div>
    </section>
  </div>
);
