import React from 'react';
import { X, CheckCircle2, FileText, Users, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#252223]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FFFFFF] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header in Charcoal #252223 with Lime Green subtitle */}
        <div className="px-6 py-5 bg-[#252223] text-white flex items-center justify-between border-b border-[#383435]">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#8ABE4B] block">
              Practice Discipline {service.number} · Professional Scope
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#626061] mb-2">
              Practice Overview &amp; Fiduciary Standard
            </h4>
            <p className="text-sm text-[#252223] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Scope of Engagement (no border) */}
          <div className="p-4 bg-[#F5F8F2] rounded-xl shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252223] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#07A757]" />
              <span>Full Scope of Engagement</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#626061]">
              {service.scope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#8ABE4B] font-bold shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tangible Deliverables in Soft Green-White with Emerald accents */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252223] mb-2.5 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#07A757]" />
              <span>Certified Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.deliverables.map((del, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F5F8F2] rounded-lg text-xs font-medium text-[#252223] flex items-center gap-2 shadow-2xs"
                >
                  <Shield className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Clients */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#626061] mb-1 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#07A757]" />
              <span>Relevant Client Profiles</span>
            </h4>
            <p className="text-xs text-[#626061]">
              {service.targetClients}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F5F8F2] border-t border-[#E5E9E1] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#626061] hover:text-[#252223] transition-colors"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(service.id);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-2xs transition-colors"
          >
            <span>Retain Firm for this Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
