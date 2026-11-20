import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { useSiteMedia } from '../lib/useSiteMedia';

export const HomeServicesGallery: React.FC = () => {
  const siteMedia = useSiteMedia();
  const renderCard = (service: (typeof CORE_SERVICES)[number], duplicate = false) => {
    const image = siteMedia['service_' + service.id];
    return (
      <a key={service.id + (duplicate ? '-loop' : '')} href={'/services?service=' + encodeURIComponent(service.id) + '#services'} aria-label={'Explore ' + service.title + ' on the Services page'} tabIndex={duplicate ? -1 : undefined} className="group relative block h-[270px] w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-2xl bg-[#252223] shadow-sm sm:h-[310px] sm:w-[42vw] sm:max-w-[390px] lg:h-[340px] lg:w-[31vw] lg:max-w-[390px]">
        {image && <img src={image} alt="" className="service-card-image absolute inset-0 h-full w-full object-cover" loading="lazy" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5 transition-colors duration-300 group-hover:from-black/85" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
          <h3 className="max-w-[85%] text-lg font-bold leading-snug tracking-tight text-white drop-shadow sm:text-xl">{service.title}</h3>
          <span className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#8ABE4B] group-hover:bg-[#8ABE4B] group-hover:text-[#252223]"><ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </a>
    );
  };
  return (
    <section id="services" aria-labelledby="home-services-heading" className="overflow-hidden bg-[#F5F8F2] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-9"><h2 id="home-services-heading" className="text-3xl font-bold tracking-tight text-[#252223] sm:text-4xl">Our Professional Services</h2></div>
        <div className="services-marquee overflow-hidden" aria-label="Explore DAC professional services">
          <div className="services-marquee-track flex w-max pb-2">
            <div className="flex shrink-0 gap-4 sm:gap-5">{CORE_SERVICES.map((service) => renderCard(service))}</div>
            <div className="flex shrink-0 gap-4 sm:gap-5" aria-hidden="true">{CORE_SERVICES.map((service) => renderCard(service, true))}</div>
          </div>
        </div>
        <div className="mt-8 flex justify-center"><a href="/services" className="inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">Explore All Services <ArrowUpRight className="h-4 w-4" /></a></div>
      </div>
      <style>{`
        .services-marquee-track { animation: dac-services-loop 42s linear infinite; }
        .services-marquee:hover .services-marquee-track, .services-marquee:focus-within .services-marquee-track { animation-play-state: paused; }
        @keyframes dac-services-loop { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .services-marquee-track { animation: none; } }
      `}</style>
    </section>
  );
};
