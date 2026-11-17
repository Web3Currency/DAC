import React from 'react';
import { ArrowUpRight, Building2, Globe2, MapPinned, Network, Scale } from 'lucide-react';

const companyHighlights = [
  {
    icon: Building2,
    title: 'Established in 1992',
    description: 'Over three decades of professional real estate practice.',
  },
  {
    icon: Scale,
    title: 'Independent Consultancy',
    description: 'A Nigerian firm of Chartered Estate Surveyors and Valuers.',
  },
  {
    icon: MapPinned,
    title: 'Nationwide Operations',
    description: 'Providing professional real estate services across Nigeria.',
  },
  {
    icon: Globe2,
    title: 'International Presence',
    description: 'Maintaining a subsidiary in Pretoria, South Africa.',
  },
  {
    icon: Network,
    title: 'Multidisciplinary Expertise',
    description: 'Valuation, property and facility management, agency, brokerage and real estate consultancy.',
  },
];

export const AboutIntroSection: React.FC = () => (
  <section aria-labelledby="about-dac-heading" className="bg-white py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-[#8ABE4B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#07A757]">About DAC · Company Introduction</span>
          </div>
          <h2 id="about-dac-heading" className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#252223] sm:text-4xl">
            Over Three Decades of Professional Real Estate Expertise.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#626061] sm:text-base">
            Since 1992, Demola Adetola &amp; Co. has delivered professional real estate consultancy, valuation and property solutions, combining technical expertise, market knowledge and professional integrity to serve individuals, businesses and institutions.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {companyHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F8F2] text-[#07894B]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#252223]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#626061]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="/about" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">
            Discover Our Story
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl bg-[#252223]">
            <img
              src="https://images.pexels.com/photos/20430714/pexels-photo-20430714/free-photo-of-exterior-of-a-modern-office-building.jpeg?auto=compress&dpr=1&h=1100&w=1500"
              alt="Contemporary commercial office tower in Lagos, representing the professional real estate environment in which DAC operates"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/25 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">Professional real estate consultancy</p>
              <p className="mt-1 text-lg font-semibold text-white">Built on knowledge. Guided by integrity.</p>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-[#8A8787]">Illustrative commercial architecture · Photo by Ebenezer Idowu / Pexels</p>
        </div>
      </div>
    </div>
  </section>
);
