import React, { useState } from 'react';
import { PropertyFinderSection } from '../components/PropertyFinderSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { PropertyItem } from '../types';

interface PropertiesPageProps {
  onSelectProperty: (property: PropertyItem) => void;
  onRequestViewing: (property: PropertyItem) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onSelectProperty, onRequestViewing }) => {
  const [filterCriteria, setFilterCriteria] = useState<{ location: string; category: string; price: string } | undefined>(undefined);

  return (
    <>
      <div className="bg-[#252223] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#8ABE4B]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#8ABE4B]">Property Portfolio</span>
          </div>
          <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Explore Properties Across Nigeria.</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[#E5E9E1]/75">Browse our featured property portfolio, including residential, commercial, development and industrial opportunities.</p>
        </div>
      </div>
      <PropertyFinderSection onSearchProperties={setFilterCriteria} />
      <ProjectsSection onSelectProperty={onSelectProperty} onRequestViewing={onRequestViewing} filterCriteria={filterCriteria} />
    </>
  );
};
