import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { PropertyItem } from '../types';

interface ProjectsSectionProps {
  onSelectProperty: (property: PropertyItem) => void;
  onRequestViewing: (property: PropertyItem) => void;
  homepagePreview?: boolean;
  filterCriteria?: {
    location: string;
    listingType: string;
    price: string;
  };
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProperty,
  onRequestViewing,
  filterCriteria,
  homepagePreview = false,
}) => {
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    let active = true;
    async function loadProperties() {
      setLoading(true);
      const { data, error } = await supabase.from('properties').select('id,slug,title,listing_type,category,listing_status,is_featured,created_at,location,city,state,country,price_amount,price_currency,price_label,price_frequency,description,area_value,area_unit,property_images(image_url,display_order,is_cover)').eq('is_published', true).eq('listing_status', 'available').order('display_order', { ascending: true }).order('created_at', { ascending: false });
      if (!active) return;
      if (error) {
        setLoadError('Property listings are temporarily unavailable.');
        setProperties([]);
      } else {
        const mapped = (data || []).map((row: any) => {
          const photos = [...(row.property_images || [])].sort((a: any, b: any) => Number(b.is_cover) - Number(a.is_cover) || a.display_order - b.display_order).map((photo: any) => photo.image_url).filter(Boolean);
          const amount = row.price_amount == null ? '' : new Intl.NumberFormat('en-NG', { style: 'currency', currency: row.price_currency || 'NGN', maximumFractionDigits: 0 }).format(Number(row.price_amount));
          const status = row.listing_status === 'under_offer' ? 'Under Offer' : row.listing_status === 'sold' ? 'Sold' : row.listing_status === 'let' ? 'Let' : row.listing_status === 'off_market' ? 'Off Market' : row.listing_type === 'letting' ? 'For Letting' : 'For Sale';
          const location = [row.location, row.city, row.state, row.country].filter((value, index, values) => value && values.indexOf(value) === index).join(', ');
          return { id: row.id, slug: row.slug, title: row.title, category: row.category, location, price: row.price_label || [amount, row.price_frequency].filter(Boolean).join(' / ') || 'Upon request', priceAmount: row.price_amount == null ? null : Number(row.price_amount), status, image: photos[0] || '', images: photos, specs: { area: row.area_value != null ? String(row.area_value) + ' ' + (row.area_unit || 'sqm') : undefined }, description: row.description || 'Contact our team for further property information.', isReplaceableSample: false, sampleTypeBadge: row.listing_type === 'letting' ? 'For Letting' : 'For Sale', listingType: row.listing_type, listingStatus: row.listing_status, isFeatured: row.is_featured, createdAt: row.created_at } as PropertyItem & { listingType: string; listingStatus: string; isFeatured: boolean; createdAt: string };
        });
        setProperties(mapped);
        setLoadError('');
      }
      setLoading(false);
    }
    void loadProperties();
    return () => { active = false; };
  }, []);
  const filteredProperties = properties.filter((item) => {
    const listing = item as PropertyItem & { listingType?: string; priceAmount?: number | null };
    if (filterCriteria) {
      if (filterCriteria.listingType !== 'Any' && listing.listingType !== filterCriteria.listingType) return false;
      if (filterCriteria.location !== 'Any' && !item.location.toLowerCase().includes(filterCriteria.location.toLowerCase())) return false;
      if (filterCriteria.price !== 'Any' && listing.priceAmount != null) {
        const amount = Number(listing.priceAmount);
        if (filterCriteria.price === 'under-100m' && amount >= 100_000_000) return false;
        if (filterCriteria.price === '100m-250m' && (amount < 100_000_000 || amount > 250_000_000)) return false;
        if (filterCriteria.price === '250m-500m' && (amount < 250_000_000 || amount > 500_000_000)) return false;
        if (filterCriteria.price === '500m-plus' && amount < 500_000_000) return false;
      }
    }
    return true;
  });

  const homepageProperties = ['sale', 'letting'].flatMap((type) =>
    properties
      .filter((property: any) => property.listingType === type && property.listingStatus === 'available')
      .sort((a: any, b: any) => Number(b.isFeatured) - Number(a.isFeatured) || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 2)
  );
  return (
    <section id={homepagePreview ? "featured-properties" : "properties"} className={`py-12 sm:py-14 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E9E1] overflow-x-clip ${homepagePreview ? "homepage-featured-properties" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        
        {homepagePreview ? (
          <div className="mb-7 flex flex-col gap-2 sm:mb-9">
            <h2 className="text-2xl font-bold tracking-tight text-[#252223] sm:text-3xl lg:text-4xl">Featured Properties</h2>
            <p className="text-sm text-[#626061]">Explore a selection of properties currently available through DAC.</p>
          </div>
        ) : null}

        {homepagePreview ? (
          <div className="space-y-8">
            {loading && <p className="py-10 text-center text-sm text-[#626061]">Loading available properties…</p>}
            {!loading && loadError && <p className="py-10 text-center text-sm text-[#626061]">{loadError}</p>}
            {!loading && !loadError && ['sale', 'letting'].map((type) => {
              const items = homepageProperties.filter((property: any) => property.listingType === type);
              if (!items.length) return null;
              return (
                <div key={type}>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#252223]">{type === 'sale' ? 'For Sale' : 'For Rent / Let'}</h3>
                    <span className="h-px flex-1 bg-[#E5E9E1]" />
                  </div>
                  <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
                    {items.map((prop) => (
                      <div key={prop.id} className="w-[84vw] max-w-[390px] shrink-0 snap-start md:w-auto md:max-w-none md:min-w-0">
                        <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-2xl">
                          <div className="relative h-56 overflow-hidden bg-[#F5F8F2] sm:h-64">
                            {prop.image ? <img src={prop.image} alt={prop.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="grid h-full w-full place-items-center text-sm text-[#626061]">Image coming soon</div>}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/80 via-transparent to-transparent" />
                            <span className="absolute left-4 top-4 rounded-md bg-[#8ABE4B] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#252223]">{prop.category}</span>
                            <span className="absolute right-4 top-4 rounded-md bg-[#252223]/85 px-3 py-1 text-[11px] font-semibold text-white">{prop.status}</span>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h3 className="line-clamp-1 text-lg font-bold text-white">{prop.title}</h3>
                              <div className="mt-1 flex items-center gap-1.5 text-xs text-[#E5E9E1]"><MapPin className="h-3.5 w-3.5 shrink-0 text-[#8ABE4B]" /><span>{prop.location}</span></div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col justify-between p-5">
                            <ul className="mb-5 space-y-2 text-xs text-[#626061]">
                              {prop.specs.area && <li><strong>Area:</strong> {prop.specs.area}</li>}
                              {prop.specs.tenure && <li><strong>Title:</strong> {prop.specs.tenure}</li>}
                              {prop.specs.bedrooms && <li><strong>Configuration:</strong> {prop.specs.bedrooms}{prop.specs.bathrooms ? ' · ' + prop.specs.bathrooms : ''}</li>}
                            </ul>
                            <div className="flex items-center justify-between gap-3 border-t border-[#E5E9E1] pt-4">
                              <span className="text-sm font-bold text-[#252223]">Price: {prop.price}</span>
                              <div className="flex items-center gap-2">
                                <button onClick={() => onSelectProperty(prop)} className="rounded-lg bg-[#F5F8F2] px-3 py-1.5 text-xs font-semibold text-[#252223] transition-colors hover:bg-[#E5E9E1] hover:text-[#07A757]">Details</button>
                                <button onClick={() => onRequestViewing(prop)} className="flex items-center gap-1.5 rounded-lg bg-[#8ABE4B] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white"><span>Inquire</span><ArrowRight className="h-3.5 w-3.5" /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="pt-2 text-center">
              <a href="/properties" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8ABE4B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">
                View All Properties <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          <>
          {/* Properties Grid — High visual quality, bullet points, call to action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-5 sm:gap-5 sm:gap-8 w-full max-w-full min-w-0">
          {loading && <p className="col-span-full py-12 text-center text-sm text-[#626061]">Loading verified property listings…</p>}
          {!loading && loadError && <p className="col-span-full py-12 text-center text-sm text-[#626061]">{loadError}</p>}
          {!loading && !loadError && filteredProperties.length === 0 && <div className="col-span-full py-12 text-center"><p className="text-base font-semibold text-[#252223]">Property listings are being prepared.</p><p className="mt-2 text-sm text-[#626061]">Contact our team for current sale and letting opportunities.</p></div>}
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col min-w-0"
            >
              {/* Image & Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#F5F8F2]">
                {prop.image ? <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                /> : <div className="w-full h-full grid place-items-center text-sm text-[#626061]">Image coming soon</div>}
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
                    Price: {prop.price}
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
          </>
        )}


      </div>
    </section>
  );
};
