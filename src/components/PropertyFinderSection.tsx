import React, { useState } from 'react';
import { Search, MapPin, Building } from 'lucide-react';

interface PropertyFinderSectionProps {
  onSearchProperties: (filters: { location: string; category: string; price: string }) => void;
}

export const PropertyFinderSection: React.FC<PropertyFinderSectionProps> = ({ onSearchProperties }) => {
  const [selectedLocation, setSelectedLocation] = useState('Any');
  const [selectedCategory, setSelectedCategory] = useState('Any');
  const [selectedPrice, setSelectedPrice] = useState('Any');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchProperties({
      location: selectedLocation,
      category: selectedCategory,
      price: selectedPrice,
    });
    const el = document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="property-finder" className="relative z-20 py-7 sm:py-9 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Card without border */}
        <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E9E1]">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#252223] tracking-tight">
                Find Your Property
              </h2>
              <p className="text-xs text-[#626061]">
                Explore sample homes, commercial buildings and development opportunities.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#07A757] self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#8ABE4B]" />
              <span>Illustrative Property Concepts</span>
            </div>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            {/* Location Selector */}
            <div>
              <label className="block text-xs font-bold text-[#252223] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#07A757]" />
                <span>Location</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white transition-colors"
              >
                <option value="Any">All Locations in Nigeria</option>
                <option value="Ikoyi">Ikoyi, Lagos</option>
                <option value="Victoria Island">Victoria Island, Lagos</option>
                <option value="Lagos Island">Lagos Island / Marina CBD</option>
                <option value="Lekki">Lekki Phase 1 Corridor</option>
                <option value="Ikeja">Ikeja GRA / Mainland</option>
              </select>
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-bold text-[#252223] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#07A757]" />
                <span>Property Category</span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white transition-colors"
              >
                <option value="Any">All Property Types</option>
                <option value="Residential">Residential Villa / Terrace</option>
                <option value="Commercial">Commercial Office Complex</option>
                <option value="Development">Development / JV Parcel</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-xs font-bold text-[#252223] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="inline-flex w-3.5 h-3.5 items-center justify-center text-sm font-bold leading-none text-[#07A757]">₦</span>
                <span>Budget Range</span>
              </label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white transition-colors"
              >
                <option value="Any">Any Price Budget</option>
                <option value="Under 200M">Under ₦200,000,000</option>
                <option value="200M - 500M">₦200,000,000 – ₦500,000,000</option>
                <option value="500M+">₦500,000,000+</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Search className="w-4 h-4" />
                <span>View Property Concepts</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};
