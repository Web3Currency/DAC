import React from 'react';
import { ArrowUpRight, Building2, Globe2, MapPinned, Network, Scale } from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';

const highlights = [
  {
    title: 'Established in 1992',
    description: 'Over three decades of professional real estate practice.',
    icon: Building2,
  },
  {
    title: 'Independent Consultancy',
    description: 'A Nigerian firm of Chartered Estate Surveyors and Valuers.',
    icon: Scale,
  },
  {
    title: 'Nationwide Operations',
    description: 'Providing professional real estate services across Nigeria.',
    icon: MapPinned,
  },
  {
    title: 'International Presence',
    description: 'Maintaining a subsidiary in Pretoria, South Africa.',
    icon: Globe2,
  },
  {
    title: 'Multidisciplinary Expertise',
    description: 'Valuation, property and facility management, agency, brokerage and real estate consultancy.',
    icon: Network,
  },
];

export const AboutDACIntroduction: React.FC = () => {
  const siteMedia = useSiteMedia();
  const image = siteMedia.about_image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85';

  return (
    <section aria-labelledby="about-dac-introduction-heading" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-12 lg:gap-14">
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-[#F5F8F2]">
              <img
                src={image}
                alt="Contemporary commercial office building representing DAC's professional real estate consultancy"
                className="aspect-[5/4] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-xl bg-[#252223] px-4 py-3 text-white shadow-lg sm:bottom-5 sm:left-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Professional practice since</p>
              <p className="mt-0.5 text-2xl font-bold leading-none text-[#A9D477]">1992</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#8ABE4B]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#07A757]">About DAC · Company Introduction</span>
            </div>
            <h2 id="about-dac-introduction-heading" className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#252223] sm:text-4xl lg:text-[2.65rem]">
              Over Three Decades of Professional Real Estate Expertise.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#626061] sm:text-base">
              Since 1992, Demola Adetola &amp; Co. has delivered professional real estate consultancy, valuation and property solutions, combining technical expertise, market knowledge and professional integrity to serve individuals, businesses and institutions.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F8F2] text-[#07894B]">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#252223]">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#626061]">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#252223] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#07894B]"
            >
              Discover Our Story
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
