import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
  initialData?: {
    assetType?: string;
    purpose?: string;
    location?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId,
  initialData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [serviceId, setServiceId] = useState(defaultServiceId || 'property-valuation');
  const [assetType, setAssetType] = useState(initialData?.assetType || 'Commercial Office / Retail Complex');
  const [assetLocation, setAssetLocation] = useState(initialData?.location || 'Lagos Island / Marina');
  const [notes, setNotes] = useState(
    initialData?.purpose ? `Valuation Purpose: ${initialData.purpose}` : ''
  );

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultServiceId) {
      setServiceId(defaultServiceId);
    }
  }, [defaultServiceId]);

  useEffect(() => {
    if (initialData?.assetType) setAssetType(initialData.assetType);
    if (initialData?.location) setAssetLocation(initialData.location);
    if (initialData?.purpose) {
      setNotes((prev) => (prev ? prev : `Valuation Purpose: ${initialData.purpose}`));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter an active telephone or WhatsApp number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#252223]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FFFFFF] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header in Charcoal #252223 with Lime Green Kicker */}
        <div className="px-6 py-5 bg-[#252223] text-white flex items-center justify-between border-b border-[#383435]">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#8ABE4B] block">
              Demola Adetola &amp; Co. · Fiduciary Mandate
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Request Partner Valuation / Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#F5F8F2] border border-[#07A757] text-[#07A757] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#07A757]" />
              </div>
              <h4 className="text-xl font-bold text-[#252223]">
                Consultation Mandate Registered
              </h4>
              <p className="text-xs sm:text-sm text-[#626061] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. A Chartered Surveyor from our Lagos Island practice will reach out to schedule your physical inspection or board consultation.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs transition-colors"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-700">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Chief / Engr / Dr / Mr"
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Company or Private Trust"
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234..."
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Practice Required
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                    Target Asset Location
                  </label>
                  <input
                    type="text"
                    value={assetLocation}
                    onChange={(e) => setAssetLocation(e.target.value)}
                    placeholder="e.g. Lagos Island, Ikoyi, Ikeja..."
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#252223] mb-1">
                  Scope Notes / Purpose
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify brief requirements (e.g. Bank mortgage collateral, compulsory acquisition assessment, JV proposal)..."
                  className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-3 border-t border-[#E5E9E1] flex items-center justify-between gap-3">
                <span className="text-[11px] text-[#626061]">
                  Strict NIESV &amp; ESVARBON Fiduciary Confidentiality
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-[#626061] hover:text-[#252223]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs transition-colors"
                  >
                    <span>Submit Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
