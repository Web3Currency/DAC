import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { PropertyFinderSection } from '../components/PropertyFinderSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { PropertyItem } from '../types';

interface PropertiesPageProps {
  onSelectProperty: (property: PropertyItem) => void;
  onRequestViewing: (property: PropertyItem) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onSelectProperty, onRequestViewing }) => {
  const [filterCriteria, setFilterCriteria] = useState<{ location: string; listingType: string; price: string } | undefined>(undefined);

  return (
    <>
      <section className="relative isolate h-[280px] overflow-hidden bg-[#252223] text-white sm:h-[340px] lg:h-[390px]">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <pattern id="property-map-grid" width="92" height="72" patternUnits="userSpaceOnUse">
                <path d="M 92 0 L 0 0 0 72" fill="none" stroke="#8ABE4B" strokeWidth="1" strokeOpacity=".35" />
                <path d="M 46 0 L 46 72 M 0 36 L 92 36" fill="none" stroke="#E5E9E1" strokeWidth=".6" strokeOpacity=".12" />
              </pattern>
              <pattern id="property-map-blocks" width="260" height="190" patternUnits="userSpaceOnUse" patternTransform="rotate(-13)">
                <path d="M20 18h92v48H20z M142 18h92v48h-92z M20 94h92v74H20z M142 94h92v74h-92z" fill="none" stroke="#8ABE4B" strokeWidth="1.2" strokeOpacity=".25" />
              </pattern>
            </defs>
            <rect width="1440" height="520" fill="url(#property-map-grid)" />
            <rect width="1440" height="520" fill="url(#property-map-blocks)" />
            <path d="M-40 390 C260 300 390 440 650 320 S1080 160 1500 260" fill="none" stroke="#8ABE4B" strokeWidth="18" strokeOpacity=".13" />
            <path d="M-40 390 C260 300 390 440 650 320 S1080 160 1500 260" fill="none" stroke="#D6E8BD" strokeWidth="2" strokeDasharray="8 12" strokeOpacity=".55" />
            <path d="M120 0L410 520 M520 0L780 520 M990 0L1260 520" stroke="#E5E9E1" strokeWidth="2" strokeOpacity=".1" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[#8ABE4B]/15 sm:block" aria-hidden="true">
          <MapPin className="h-[25rem] w-[25rem] fill-current stroke-[#8ABE4B]/30" strokeWidth={0.8} />
          <span className="absolute left-1/2 top-[37%] h-14 w-14 -translate-x-1/2 rounded-full border-[10px] border-[#252223]/80 bg-[#8ABE4B]/70 shadow-[0_0_50px_rgba(138,190,75,.35)]" />
        </div>
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#252223]/60" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8ABE4B]">DAC Property Portfolio</span>
            </div>
            <h1 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-5xl">Find the Right Property. Make the Right Move.</h1>
            <p className="mt-2 max-w-3xl text-xl font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-2xl lg:mt-4 lg:text-4xl">Explore available properties for sale and letting across our verified locations in Nigeria.</p>
            <a href="#property-finder" className="mt-3 inline-flex items-center sm:mt-4 lg:mt-6 gap-2 rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">Find a Property <MapPin className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
      <PropertyFinderSection onSearchProperties={setFilterCriteria} />
      <ProjectsSection onSelectProperty={onSelectProperty} onRequestViewing={onRequestViewing} filterCriteria={filterCriteria} />

      <section className="relative overflow-hidden bg-[#F5F8F2] py-16 sm:py-20">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#8ABE4B]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:px-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Haven’t found what you’re looking for?</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#252223]/80 sm:text-base">Our team can help you explore more opportunities, understand your options and find the right property solution.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="/services" className="inline-flex items-center justify-center rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">Explore Our Services</a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-lg border border-[#252223]/30 bg-[#252223]/[0.08] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] backdrop-blur-md transition-colors hover:bg-[#252223]/[0.14]">Speak with Our Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        #property-finder form > div:nth-child(3) > p { display: none; }
      `}</style>
    </>
  );
};
