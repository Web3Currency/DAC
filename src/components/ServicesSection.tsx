import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  'property-valuation': { src: 'https://images.pexels.com/photos/20430714/pexels-photo-20430714.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern commercial office building in Lagos, Nigeria' },
  'estate-agency-brokerage': { src: '/src/assets/images/property_luxury_residence_1794305810064.jpg', alt: 'Contemporary luxury residential property in Lagos' },
  'property-facility-management': { src: '/src/assets/images/property_commercial_tower_1794305810858.jpg', alt: 'Commercial property managed by an estate team' },
  'real-estate-consultancy': { src: 'https://images.pexels.com/photos/30678213/pexels-photo-30678213.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Nigerian property professionals reviewing a project together' },
  'feasibility-viability-studies': { src: 'https://images.pexels.com/photos/36622171/pexels-photo-36622171.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Aerial view of Lagos urban development and property landscape' },
  'property-development-consultancy': { src: 'https://images.pexels.com/photos/34557960/pexels-photo-34557960.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern residential tower in Lagos, Nigeria' },
  'property-investment-advisory': { src: '/src/assets/images/hero_lagos_architecture_1794305808089.jpg', alt: 'Lagos commercial district architecture' },
  'market-research': { src: 'https://images.pexels.com/photos/36622171/pexels-photo-36622171.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Lagos urban landscape illustrating property market research' },
  'asset-management': { src: '/src/assets/images/about_boardroom_consulting_1794305809512.jpg', alt: 'Real estate professionals discussing asset management' },
};

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
                <div className="relative -mx-8 -mt-8 mb-6 h-40 overflow-hidden rounded-t-2xl bg-[#E5E9E1]">
                  <img
                    src={SERVICE_IMAGES[service.id]?.src ?? '/src/assets/images/property_commercial_tower_1794305810858.jpg'}
                    alt={SERVICE_IMAGES[service.id]?.alt ?? `${service.title} in Nigeria`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/35 to-transparent" />
                </div>
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
