import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  'property-valuation': { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', alt: 'Contemporary residential property' },
  'estate-agency-brokerage': { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85', alt: 'Modern family residence' },
  'property-facility-management': { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85', alt: 'Modern commercial high-rise property' },
  'real-estate-consultancy': { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', alt: 'Modern commercial office interior' },
  'feasibility-viability-studies': { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85', alt: 'Property development architecture' },
  'land-use-planning': { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85', alt: 'Urban development and architecture' },
  'compulsory-acquisition': { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', alt: 'Detached residential property' },
  'investment-jv-consultancy': { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85', alt: 'Contemporary property development' },
  'project-management': { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', alt: 'Residential property exterior' },
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
    <section id="services" className="py-14 sm:py-16 lg:py-24 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#8ABE4B]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
            Real Estate Services to Help You Make the Right Move.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#626061] leading-relaxed">
            From property valuation and sales to management and development advice, we help clients protect and get more value from their property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E5E9E1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="-mx-6 -mt-6 mb-5 h-40 overflow-hidden rounded-t-2xl bg-[#E5E9E1]">
                  <img
                    src={SERVICE_IMAGES[service.id].src}
                    alt={SERVICE_IMAGES[service.id].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-2xl font-extrabold text-[#8ABE4B] tracking-tight tabular-nums block mb-3">{service.number}</span>
                <h3 className="text-lg font-bold text-[#252223] group-hover:text-[#07A757] transition-colors mb-3 leading-snug">{service.title}</h3>
                <p className="text-sm text-[#626061] leading-relaxed mb-5">{service.shortDesc}</p>
                <div className="pt-4 border-t border-[#E5E9E1] space-y-2 text-xs text-[#626061] mb-5">
                  {service.scope.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#8ABE4B] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E9E1] flex items-center justify-between gap-3">
                <button onClick={() => onViewServiceDetail(service)} className="text-xs font-bold text-[#252223] hover:text-[#07A757] flex items-center gap-1.5 transition-colors">
                  <span>Learn More</span><ChevronRight className="w-3.5 h-3.5 text-[#07A757]" />
                </button>
                <button onClick={() => onSelectServiceForConsultation(service.id)} className="px-3.5 py-2 text-xs font-semibold text-[#07A757] bg-white hover:bg-[#07A757] hover:text-white border border-[#07A757] rounded-lg transition-colors">
                  Speak With Our Team
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-[#252223] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Need Help With a Property Matter?</h3>
            <p className="text-sm text-[#E5E9E1]/85">
              Talk to our team about valuation, property management, investment advice or your next development project.
            </p>
          </div>
          <button onClick={() => onSelectServiceForConsultation('property-valuation')} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0">
            Speak With Our Team
          </button>
        </div>
      </div>
    </section>
  );
};
