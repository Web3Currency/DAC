import React, { useState } from 'react';
import { Search, MapPin, Building2, Layers3 } from 'lucide-react';
interface PropertyFinderSectionProps { onSearchProperties: (filters: { location: string; listingType: string; category: string; price: string }) => void; }
const locations = ['Lagos Mainland', 'Ikoyi', 'Victoria Island', 'Lekki', 'Lagos Island'];
const saleCategories = ['Residential', 'Commercial', 'Industrial'];
const lettingCategories = ['Residential', 'Commercial', 'Warehouses'];
export const PropertyFinderSection: React.FC<PropertyFinderSectionProps> = ({ onSearchProperties }) => {
 const [selectedLocation,setSelectedLocation]=useState('Any');
 const [selectedListingType,setSelectedListingType]=useState('Any');
 const [selectedCategory,setSelectedCategory]=useState('Any');
 const [selectedPrice,setSelectedPrice]=useState('Any');
 const handleSearchSubmit=(e:React.FormEvent)=>{e.preventDefault();onSearchProperties({location:selectedLocation,listingType:selectedListingType,category:selectedCategory,price:selectedPrice});document.getElementById('properties')?.scrollIntoView({behavior:'smooth'});};
 const fieldClass="w-full rounded-lg border border-[#E5E9E1] bg-[#F5F8F2] px-3.5 py-3 text-sm font-medium text-[#252223] transition-colors focus:border-[#07A757] focus:bg-white focus:outline-none";
 const categories=selectedListingType==='sale'?saleCategories:lettingCategories;
 return <section id="property-finder" className="relative z-20 border-b border-[#E5E9E1] bg-[#F5F8F2] py-7 sm:py-9"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="rounded-2xl bg-white p-4 shadow-md sm:p-6 lg:p-8">
 <div className="mb-6 border-b border-[#E5E9E1] pb-4"><h2 className="text-base font-bold tracking-tight text-[#252223] sm:text-lg">Find Your Property</h2><p className="mt-1 text-xs text-[#626061]">Filter DAC listings by transaction type, property category, location and budget.</p></div>
 <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4">
 <div><label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><Building2 className="h-3.5 w-3.5 text-[#07A757]"/>Transaction</label><select value={selectedListingType} onChange={e=>{setSelectedListingType(e.target.value);setSelectedCategory('Any');}} className={fieldClass}><option value="Any">For Sale &amp; To Let</option><option value="sale">For Sale</option><option value="letting">To Let</option></select></div>
 <div><label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><Layers3 className="h-3.5 w-3.5 text-[#07A757]"/>Property Category</label><select value={selectedCategory} onChange={e=>setSelectedCategory(e.target.value)} className={fieldClass} disabled={selectedListingType==='Any'}><option value="Any">{selectedListingType==='Any'?'Choose transaction first':'All categories'}</option>{selectedListingType==='sale'?<optgroup label="Developed Properties">{categories.map(item=><option key={item} value={item}>{item}</option>)}</optgroup>:categories.map(item=><option key={item} value={item}>{item}</option>)}{selectedListingType==='sale'&&<option value="Vacant Land">Vacant Land</option>}</select></div>
 <div><label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><MapPin className="h-3.5 w-3.5 text-[#07A757]"/>Location</label><select value={selectedLocation} onChange={e=>setSelectedLocation(e.target.value)} className={fieldClass}><option value="Any">All locations</option>{locations.map(item=><option key={item} value={item}>{item}</option>)}</select></div>
 <div><label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#252223]"><span className="text-sm font-bold text-[#07A757]">₦</span>Budget Range</label><select value={selectedPrice} onChange={e=>setSelectedPrice(e.target.value)} className={fieldClass}><option value="Any">Any budget</option><option value="under-100m">Under ₦100 million</option><option value="100m-250m">₦100m – ₦250 million</option><option value="250m-500m">₦250m – ₦500 million</option><option value="500m-plus">₦500 million and above</option></select></div>
 <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#252223] shadow-sm transition-all hover:bg-[#07A757] hover:text-white active:scale-[0.98]"><Search className="h-4 w-4"/><span>Find Properties</span></button>
 </form></div></div></section>;
};
