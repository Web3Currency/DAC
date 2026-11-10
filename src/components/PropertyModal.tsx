import React, { useState } from 'react';
import { X, MapPin, ShieldCheck, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PropertyItem } from '../types';

interface PropertyModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onInquire: (property: PropertyItem) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!property) return null;

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#252223]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FFFFFF] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-900">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag Notice in Lime Green #8ABE4B */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] rounded-md shadow-xs">
              {property.sampleTypeBadge}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs font-bold text-[#8ABE4B] uppercase tracking-wider block mb-0.5">
              {property.category} Portfolio · {property.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {property.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E9E1] flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#626061]">
              <MapPin className="w-4 h-4 text-[#07A757] shrink-0" />
              <span>{property.location}</span>
            </div>
            <div className="text-base font-bold text-[#252223] tabular-nums">
              {property.price}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#626061] mb-2">
              Asset &amp; Advisory Summary
            </h4>
            <p className="text-sm text-[#252223] leading-relaxed">
              {property.summary}
            </p>
          </div>

          {/* Specifications Table (no border) */}
          <div className="p-4 bg-[#F5F8F2] rounded-xl shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252223] mb-3">
              Technical Asset Parameters
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#626061] block text-[10px] uppercase font-bold">Total Area</span>
                <span className="font-semibold text-[#252223]">{property.specs.area || 'Upon Application'}</span>
              </div>
              <div>
                <span className="text-[#626061] block text-[10px] uppercase font-bold">Title Tenure</span>
                <span className="font-semibold text-[#252223]">{property.specs.tenure || 'Registered Title'}</span>
              </div>
              <div>
                <span className="text-[#626061] block text-[10px] uppercase font-bold">Configuration</span>
                <span className="font-semibold text-[#252223]">{property.specs.bedrooms || property.specs.units || 'Open Plan'}</span>
              </div>
              <div>
                <span className="text-[#626061] block text-[10px] uppercase font-bold">Parking / Access</span>
                <span className="font-semibold text-[#252223]">{property.specs.parking || 'Secure Access'}</span>
              </div>
            </div>
          </div>

          {/* Due Diligence Stamp (no border) */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F8F2] shadow-2xs text-xs text-[#252223]">
            <ShieldCheck className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#07A757]">Demola Adetola &amp; Co. Due Diligence Protocol:</strong> All properties brokered or managed by our practice undergo exhaustive land registry searches, Governor’s Consent validation, and physical boundary confirmation.
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Investment Memorandum brief downloaded to your device.</span>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F5F8F2] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownloadBrochure}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#252223] bg-white shadow-2xs hover:bg-[#F5F8F2] rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#07A757]" />
            <span>Download Asset Brief</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(property);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-2xs transition-colors"
          >
            <span>Book Private Inspection / Valuation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
