import React from 'react';
import { ChevronRight, House } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { useSiteMedia } from '../lib/useSiteMedia';

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceId: string) => void;
  onViewServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForConsultation,
  onViewServiceDetail,
}) => {
  const siteMedia = useSiteMedia();
  return (
    <>
    <section className="relative isolate flex h-[280px] items-center overflow-hidden bg-[#252223] text-white sm:h-[340px] lg:h-[390px]">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
        <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <defs>
            <pattern id="services-blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0H0V80" fill="none" stroke="#8ABE4B" strokeWidth="1" strokeOpacity=".3" />
              <path d="M40 0V80M0 40H80" stroke="#E5E9E1" strokeWidth=".6" strokeOpacity=".1" />
            </pattern>
          </defs>
          <rect width="1440" height="520" fill="url(#services-blueprint-grid)" />
          <g fill="none" stroke="#8ABE4B" strokeWidth="1.6" strokeOpacity=".3">
            <path d="M900 410V190l110-78 110 78v220z" />
            <path d="M960 410V250h100v160M985 250v-70h52v70M1120 410V230h70v180" />
            <path d="M860 410h430M930 150h280M1010 112V65M900 190l110 60 110-60" />
            <path d="M1260 130h70v280h-70M1280 160h30M1280 195h30M1280 230h30" />
          </g>
          <g fill="none" stroke="#D6E8BD" strokeOpacity=".2">
            <circle cx="1100" cy="260" r="210" strokeDasharray="5 12" />
            <circle cx="1100" cy="260" r="245" />
          </g>
          <path d="M780 520L1120 0M950 520L1290 0M1120 520L1460 0" stroke="#E5E9E1" strokeWidth="2" strokeOpacity=".08" />
        </svg>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171617]/90 via-[#252223]/75 to-[#252223]/35" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-xs font-bold uppercase tracking-widest text-[#D5E8C0]">Our Services</span></div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Real Estate Services to Help You Make the Right Move.</h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/85 sm:mt-4 sm:text-sm lg:text-base">We help clients value, buy, sell, manage and develop property.</p>
        </div>
      </div>
    </section>
    <section id="services" className="py-14 sm:py-16 lg:py-24 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_SERVICES.map((service) => {
            const serviceImage = siteMedia['service_' + service.id];
            return (
              <div key={service.id} className="group bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#E5E9E1] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div>
                  {serviceImage && (
                    <div className="-mx-6 -mt-6 mb-5 h-40 overflow-hidden rounded-t-2xl bg-[#E5E9E1]">
                      <img
                        src={serviceImage}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
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
            );
          })}
        </div>

        <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-[#252223] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 shadow-sm">
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
    </>
  );
};
