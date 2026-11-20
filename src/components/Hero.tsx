import React from 'react';
import { ArrowRight, ChartNoAxesCombined, Layers3, MessagesSquare } from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';

interface HeroProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const siteMedia = useSiteMedia();
  return (
    <section className="relative bg-white px-0 pb-5 sm:pb-7">
      <div className="relative isolate min-h-[68vh] sm:min-h-[72vh] lg:min-h-[78vh] flex items-center overflow-hidden bg-[#252223]">
        {/* Use only the office image assigned in the admin dashboard. No stock-image fallback. */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {siteMedia.homepage_hero && (
            <img
              src={siteMedia.homepage_hero}
              alt="Demola Adetola & Co. office building"
              className="h-full w-full object-cover object-[58%_48%] sm:object-center"
              loading="eager"
              fetchPriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171617]/90 via-[#252223]/72 to-[#252223]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171617]/55 via-transparent to-[#171617]/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[#8ABE4B]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D5E8C0] sm:text-sm">
                Chartered Estate Surveyors &amp; Valuers
              </p>
            </div>

            <h1 className="mb-6 max-w-3xl text-[2.55rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Make Better Property Decisions.
              <span className="mt-2 block text-[#A9D477]">Build Lasting Value.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
              We are Chartered Estate Surveyors and Valuers providing property valuation, property management, sales and letting services, and real estate advisory to individuals, businesses and investors.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                onClick={() => onOpenConsultation('property-valuation')}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#8ABE4B] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#252223] shadow-lg shadow-black/15 transition-colors duration-300 hover:bg-[#07A757] hover:text-white active:scale-[0.99] sm:text-sm"
              >
                <span>Speak With Our Team</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/55 bg-[#252223]/35 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15 sm:text-sm"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            <div
              className="mt-9 grid max-w-2xl grid-cols-3 divide-x divide-white/20 border-t border-white/20 pt-5 sm:mt-11 sm:pt-6"
              aria-label="Our core property capabilities"
            >
              <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-4 sm:text-left first:sm:pl-0">
                <ChartNoAxesCombined className="h-6 w-6 shrink-0 text-[#A9D477] sm:h-7 sm:w-7" strokeWidth={1.8} />
                <span className="text-[10px] font-semibold leading-tight text-white sm:text-sm">Property<br className="sm:hidden" /> Valuation</span>
              </div>
              <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:px-4 sm:text-left">
                <Layers3 className="h-6 w-6 shrink-0 text-[#A9D477] sm:h-7 sm:w-7" strokeWidth={1.8} />
                <span className="text-[10px] font-semibold leading-tight text-white sm:text-sm">Asset<br className="sm:hidden" /> Management</span>
              </div>
              <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:items-center sm:justify-end sm:gap-3 sm:px-4 sm:text-left last:sm:pr-0">
                <MessagesSquare className="h-6 w-6 shrink-0 text-[#A9D477] sm:h-7 sm:w-7" strokeWidth={1.8} />
                <span className="text-[10px] font-semibold leading-tight text-white sm:text-sm">Realty<br className="sm:hidden" /> Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
