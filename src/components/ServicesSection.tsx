import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceId: string) => void;
  onViewServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForConsultation,
  onViewServiceDetail,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#8ABE4B]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
            Comprehensive Real Estate Solutions Designed Around Your Needs.
          </h2>

          <p className="mt-4 text-base text-[#626061] leading-relaxed">
            Our services are tailored to help clients protect, manage, develop, and maximize the value of their real estate investments across Nigeria.
          </p>
        </div>

        {/* 9 Numbered Services Grid with White backgrounds & subtle grey-green borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFFFF] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <div>
                {/* Service Number (Top right icon removed per instructions) */}
                <div className="mb-5">
                  <span className="text-3xl font-extrabold text-[#8ABE4B] tracking-tight tabular-nums block">
                    {service.number}
                  </span>
                </div>

                {/* Service Title in Charcoal */}
                <h3 className="text-xl font-bold text-[#252223] group-hover:text-[#07A757] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Short Description in Slate Grey */}
                <p className="text-xs sm:text-sm text-[#626061] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Scope Preview */}
                <div className="pt-4 border-t border-[#E5E9E1] space-y-2 text-xs text-[#626061] mb-6">
                  {service.scope.slice(0, 2).map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#8ABE4B] font-bold mt-0.5">•</span>
                      <span className="line-clamp-1">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Learn More text link + Secondary button */}
              <div className="pt-4 border-t border-[#E5E9E1] flex items-center justify-between gap-3">
                <button
                  onClick={() => onViewServiceDetail(service)}
                  className="text-xs font-bold text-[#252223] hover:text-[#07A757] flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#07A757]" />
                </button>

                {/* Secondary Button: White background with Emerald green border and text */}
                <button
                  onClick={() => onSelectServiceForConsultation(service.id)}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#07A757] bg-white hover:bg-[#07A757] hover:text-white border border-[#07A757] rounded-lg transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner in Charcoal #252223 with Lime Green Button (no border) */}
        <div className="mt-16 p-8 rounded-2xl bg-[#252223] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Need Specialized Valuation or Joint Venture Advisory?
            </h3>
            <p className="text-xs sm:text-sm text-[#E5E9E1]/80">
              Our partners consult directly with financial institutions, corporate boards, and institutional landowners to structure bespoke valuation and management mandates.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForConsultation('property-valuation')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Book Partner Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
