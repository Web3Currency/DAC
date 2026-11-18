import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';



export const GeographicalReachSection: React.FC = () => {
  const siteMedia = useSiteMedia();
  const locations = [
    { name: 'Lagos', country: 'Nigeria', label: 'Headquarters', detail: 'Onikan, Lagos Island', image: siteMedia.geographical_reach_lagos || 'https://content.r9cdn.net/rimg/dimg/93/ca/c46f09c7-city-25271-18a65f178fb.jpg?crop=true&height=768&width=1366', alt: 'Lagos Island waterfront and commercial skyline' , imagePosition: 'center' },
    { name: 'Nationwide', country: 'Nigeria', label: 'Nationwide Operations', detail: 'Professional services across Nigeria', image: 'https://images.trvl-media.com/place/553248635976008619/ecafb32f-de92-4637-a85d-ba71513eb86f.jpg', alt: 'Abuja cityscape representing DAC’s nationwide Nigerian service coverage' , imagePosition: 'center' },
    { name: 'Pretoria', country: 'South Africa', label: 'International Presence', detail: 'DAC subsidiary', image: siteMedia.geographical_reach_pretoria || 'https://e3zak6m1avgttdml.public.blob.vercel-storage.com/seo-covers/pretoria-1778015373763.webp', alt: 'Pretoria Union Buildings and surrounding cityscape' , imagePosition: 'center' },
  ];
  return (
  <section aria-labelledby="geographical-reach-heading" className="bg-[#F5F8F2] py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="geographical-reach-heading" className="text-3xl font-bold tracking-tight text-[#252223] sm:text-4xl">Local Expertise. Wider Reach.</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[#626061] lg:max-w-md">
          Professional real estate consultancy and property solutions across Nigeria, with an international presence in South Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map(({ name, country, label, detail, image, alt, imagePosition }) => (
          <article key={name} className="group relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-[#252223] shadow-sm sm:min-h-[390px]">
            <img
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`geographical-card-image absolute inset-0 -z-20 h-full w-full object-cover object-${imagePosition}`}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#171819]/95 via-[#171819]/25 to-[#171819]/10" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="inline-flex rounded-md bg-[#8ABE4B] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#252223]">{label}</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">{name}</h3>
              <p className="mt-1 text-sm font-medium text-white/85">{country}</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/20 pt-4">
                <p className="text-xs leading-relaxed text-white/75">{detail}</p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#A9D477] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
};
