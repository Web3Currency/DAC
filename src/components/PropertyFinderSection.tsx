import React, { useEffect, useState } from 'react';
import { Search, MapPin, Building2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PropertyFinderSectionProps {
  onSearchProperties: (filters: { location: string; listingType: string; price: string }) => void;
}

export const PropertyFinderSection: React.FC<PropertyFinderSectionProps> = ({ onSearchProperties }) => {
  const [locations, setLocations] = useState<string[]>([]);
  const [locationsLoading, setLocationsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('Any');
  const [selectedListingType, setSelectedListingType] = useState('Any');
  const [selectedPrice, setSelectedPrice] = useState('Any');

  useEffect(() => {
    let active = true;
    async function loadLocations() {
      const { data, error } = await supabase
        .from('properties')
        .select('location,city,state,country')
        .eq('is_published', true)
        .eq('listing_status', 'available');
      if (!active) return;
      if (!error && data) {
        const unique = Array.from(new Set(data.map((row: any) =>
          [row.location, row.city, row.state, row.country]
            .filter((value, index, values) => value && values.indexOf(value) === index)
            .join(', ')
        ).filter(Boolean))).sort((a, b) => a.localeCompare(b));
        setLocations(unique);
      }
      setLocationsLoading(false);
    }
    void loadLocations();
    return () => { active = false; };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchProperties({
      location: selectedLocation,
      listingType: selectedListingType,
      price: selectedPrice,
    });
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fieldClass = "w-full rounded-lg border border-[#E5E9E1] bg-[#F5F8F2] px-3.5 py-3 text-sm font-medium text-[#252223] transition-colors focus:border-[#07A757] focus:bg-white focus:outline-none";

  return (
    <section id="property-finder" className="relative z-20 border-b border-[#E5E9E1] bg-[#F5F8F2] py-7 sm:py-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-4 shadow-md sm:p-6 lg:p-8">
          <div className="mb-6 border-b border-[#E5E9E1] pb-4">
            <h2 className="text-base font-bold tracking-tight text-[#252223] sm:text-lg">Find Your Property</h2>
            <p className="mt-1 text-xs text-[#626061]">Filter current DAC listings by location, property type and budget.</p>
          </div>
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><MapPin className="h-3.5 w-3.5 text-[#07A757]" />Location</label>
              <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className={fieldClass}>
                <option value="Any">All available locations</option>
                {locations.map((location) => <option key={location} value={location}>{location}</option>)}
              </select>
              {locationsLoading && <p className="mt-1 text-[11px] text-[#8A8585]">Loading listing locations…</p>}
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><Building2 className="h-3.5 w-3.5 text-[#07A757]" />Property Type</label>
              <select value={selectedListingType} onChange={(e) => setSelectedListingType(e.target.value)} className={fieldClass}>
                <option value="Any">For sale &amp; letting</option>
                <option value="sale">For sale</option>
                <option value="letting">For letting</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><span className="text-sm font-bold text-[#07A757]">₦</span>Budget Range</label>
              <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} className={fieldClass}>
                <option value="Any">Any budget</option>
                <option value="under-100m">Under ₦100 million</option>
                <option value="100m-250m">₦100m – ₦250 million</option>
                <option value="250m-500m">₦250m – ₦500 million</option>
                <option value="500m-plus">₦500 million and above</option>
              </select>
            </div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#252223] shadow-sm transition-all hover:bg-[#07A757] hover:text-white active:scale-[0.98]">
              <Search className="h-4 w-4" /><span>Find Properties</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
