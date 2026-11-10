import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS, CORE_SERVICES } from '../data/companyData';

interface ContactSectionProps {
  preselectedServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'property-valuation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Strict, few text */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-[#8ABE4B]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
              Contact Our Practice
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
            Speak Directly with a Chartered Surveyor.
          </h2>

          {/* 3 Quick Bullets instead of text paragraph */}
          <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#626061] font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />
              <span>24–48h Turnaround for Valuation Briefs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />
              <span>ESVARBON Certified Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />
              <span>Lagos Island &amp; Abuja Branch Coverage</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Form & Direct Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (no border, clean shadow) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-md">
            <h3 className="text-lg font-bold text-[#252223] mb-4 pb-3 border-b border-[#E5E9E1]">
              Submit Inquiry
            </h3>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F5F8F2] border border-[#07A757] text-[#07A757] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#07A757]" />
                </div>
                <h4 className="text-lg font-bold text-[#252223]">
                  Inquiry Received
                </h4>
                <p className="text-xs text-[#626061] max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. A partner from Demola Adetola &amp; Co. will reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      serviceId: 'property-valuation',
                      message: '',
                    });
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-700">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-bold text-[#252223] mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#252223] mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234..."
                      className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#252223] mb-1 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#252223] mb-1 uppercase tracking-wider">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white"
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#252223] mb-1 uppercase tracking-wider">
                    Property Brief / Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief details about the property location, size, or valuation objective..."
                    className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-3 py-2 text-xs text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Submit Mandate Brief</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Branches */}
          <div className="lg:col-span-5 space-y-4">
            {OFFICE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#FFFFFF] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#07A757]">
                    {loc.type}
                  </span>
                  <span className="text-xs text-[#626061] font-semibold">{loc.city}</span>
                </div>

                <h4 className="text-sm font-bold text-[#252223] mb-2">
                  {loc.name}
                </h4>

                <div className="space-y-1.5 text-xs text-[#626061]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#07A757] shrink-0 mt-0.5" />
                    <span>{loc.address} ({loc.landmark})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                    <a
                      href={`tel:${loc.phones[0]}`}
                      className="font-medium text-[#252223] hover:text-[#07A757]"
                    >
                      {loc.phones[0]}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#07A757] shrink-0" />
                    <a
                      href={`mailto:${loc.email}`}
                      className="font-medium text-[#252223] hover:text-[#07A757]"
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Direct Line Hotline (no border) */}
            <div className="p-4 rounded-2xl bg-[#252223] text-white shadow-md flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8ABE4B] block">
                  Direct Line for Valuations
                </span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="text-base font-bold text-white hover:text-[#8ABE4B] transition-colors"
                >
                  {COMPANY_INFO.primaryPhone}
                </a>
              </div>
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="p-2.5 rounded-lg bg-[#8ABE4B] text-[#252223] hover:bg-[#07A757] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
