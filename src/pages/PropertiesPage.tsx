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
      <section className="relative isolate overflow-hidden bg-[#252223] text-white">
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
        <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center px-4 py-16 sm:min-h-[340px] sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#8ABE4B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8ABE4B]">DAC Property Portfolio</span>
            </div>
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Find the Right Property. Make the Right Move.</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#E5E9E1]/80 sm:text-base">Explore available properties for sale and letting across our verified locations in Nigeria.</p>
            <a href="#property-finder" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">Find a Property <MapPin className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
      <PropertyFinderSection onSearchProperties={setFilterCriteria} />
      <ProjectsSection onSelectProperty={onSelectProperty} onRequestViewing={onRequestViewing} filterCriteria={filterCriteria} />
    </>
  );
};
