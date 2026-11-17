import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/companyData';

export const AddressSection: React.FC = () => (
  <section id="office-address" className="py-14 sm:py-16 lg:py-20 bg-white border-t border-[#E5E9E1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-0.5 bg-[#8ABE4B]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">Visit Our Offices</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223]">Our Address</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#626061]">Connect with our team or visit one of our Lagos Island offices.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
        {OFFICE_LOCATIONS.map((loc) => (
          <article key={loc.id} className="rounded-2xl bg-[#F5F8F2] p-6 sm:p-8 border border-[#E5E9E1]">
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#07A757]">{loc.type}</span>
              <span className="text-xs font-semibold text-[#626061]">{loc.city}</span>
            </div>
            <h3 className="text-xl font-bold text-[#252223] mb-4">{loc.name}</h3>
            <div className="space-y-4 text-sm text-[#626061]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                <span>{loc.address} ({loc.landmark})</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#07A757] shrink-0" />
                <a href={`tel:${loc.phones[0]}`} className="font-semibold text-[#252223] hover:text-[#07A757]">{loc.phones[0]}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#07A757] shrink-0" />
                <a href={`mailto:${loc.email}`} className="font-semibold text-[#252223] hover:text-[#07A757]">{loc.email}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-[#252223] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8ABE4B] block mb-2">Direct Line for Valuations</span>
          <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-xl font-bold hover:text-[#8ABE4B]">{COMPANY_INFO.primaryPhone}</a>
        </div>
        <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg px-5 py-3 transition-colors">Call our office <ArrowUpRight className="w-4 h-4" /></a>
      </div>
    </div>
  </section>
);
