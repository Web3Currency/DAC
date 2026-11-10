import React, { useState, useRef } from 'react';
import { MapPin, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_PROPERTIES } from '../data/companyData';
import { PropertyItem } from '../types';

interface ProjectsSectionProps {
  onSelectProperty: (property: PropertyItem) => void;
  onRequestViewing: (property: PropertyItem) => void;
  filterCriteria?: {
    location: string;
    category: string;
    price: string;
  };
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProperty,
  onRequestViewing,
  filterCriteria,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Development'];

  const filteredProperties = FEATURED_PROPERTIES.filter((item) => {
    if (filterCriteria) {
      if (filterCriteria.category !== 'Any' && item.category !== filterCriteria.category) {
        return false;
      }
      if (filterCriteria.location !== 'Any' && !item.location.toLowerCase().includes(filterCriteria.location.toLowerCase())) {
        return false;
      }
    }

    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = 140;
      tabsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="properties" className="py-12 sm:py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E9E1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Block — Constrained strictly to page margin, never overflowing */}
        <div className="mb-8 w-full max-w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-full">
            {/* Title & Eyebrow */}
            <div className="max-w-2xl min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-0.5 bg-[#8ABE4B]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                  Featured Portfolio
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
                Properties &amp; Managed Assets Across Nigeria.
              </h2>
            </div>

            {/* Scrollable Category Filter Tab — Strictly bounded within right margin */}
            <div className="relative max-w-full min-w-0 flex items-center gap-1.5 self-start md:self-auto">
              {/* Optional Left Scroll Control */}
              <button
                type="button"
                onClick={() => scrollTabs('left')}
                className="hidden sm:flex items-center justify-center w-7 h-7 rounded-lg bg-[#F5F8F2] border border-[#E5E9E1] text-[#626061] hover:text-[#252223] hover:border-[#8ABE4B] transition-colors shrink-0"
                aria-label="Scroll filters left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Horizontally Scrollable Filter Track */}
              <div
                ref={tabsContainerRef}
                className="overflow-x-auto no-scrollbar scroll-smooth max-w-full flex items-center p-1 bg-[#F5F8F2] border border-[#E5E9E1] rounded-xl"
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        activeCategory === cat
                          ? 'bg-white text-[#252223] font-bold shadow-xs border border-[#E5E9E1]'
                          : 'text-[#626061] hover:text-[#252223]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Right Scroll Control */}
              <button
                type="button"
                onClick={() => scrollTabs('right')}
                className="hidden sm:flex items-center justify-center w-7 h-7 rounded-lg bg-[#F5F8F2] border border-[#E5E9E1] text-[#626061] hover:text-[#252223] hover:border-[#8ABE4B] transition-colors shrink-0"
                aria-label="Scroll filters right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid — High visual quality, bullet points, call to action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-5 sm:gap-8 w-full max-w-full">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#F5F8F2]">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/80 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] rounded-md shadow-xs">
                    {prop.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-[11px] font-semibold text-white bg-[#252223]/85 backdrop-blur-xs rounded-md">
                    {prop.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#E5E9E1] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                    <span>{prop.location}</span>
                  </div>
                </div>
              </div>

              {/* Details Body — Bullet points instead of text block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Bullets */}
                  <ul className="space-y-2 text-xs text-[#626061] mb-6">
                    {prop.specs.area && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                        <span><strong>Area:</strong> {prop.specs.area}</span>
                      </li>
                    )}
                    {prop.specs.tenure && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                        <span><strong>Title:</strong> {prop.specs.tenure}</span>
                      </li>
                    )}
                    {prop.specs.bedrooms && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                        <span><strong>Configuration:</strong> {prop.specs.bedrooms} · {prop.specs.bathrooms}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-[#E5E9E1] flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-[#252223] tabular-nums">
                    {prop.price}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProperty(prop)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#252223] hover:text-[#07A757] bg-[#F5F8F2] hover:bg-[#E5E9E1] rounded-lg transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onRequestViewing(prop)}
                      className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
