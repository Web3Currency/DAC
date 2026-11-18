import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';

interface ContactSectionProps {
  preselectedServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState(() => { const params = new URLSearchParams(window.location.search); return { fullName: '', phone: '', email: '', serviceId: preselectedServiceId || params.get('service') || 'property-valuation', message: params.get('message') || '' }; });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return setErrorMsg('Please enter your full name.');
    if (!formData.phone.trim() || formData.phone.length < 7) return setErrorMsg('Please enter a valid phone number.');
    if (!formData.email.trim() || !formData.email.includes('@')) return setErrorMsg('Please enter a valid email address.');
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 bg-[#F5F8F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2"><span className="w-8 h-0.5 bg-[#8ABE4B]" /><span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">Contact Our Practice</span></div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#252223]">Talk to Us About Your Property Needs.</h1>
          <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#626061] font-semibold">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />Professional property advice</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />Clear property assessment</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#07A757]" />Lagos Island offices</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md">
          <h2 className="text-lg font-bold text-[#252223] mb-5 pb-3 border-b border-[#E5E9E1]">Send an Enquiry</h2>
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F5F8F2] border border-[#07A757] text-[#07A757] flex items-center justify-center mx-auto"><CheckCircle2 className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-[#252223]">Enquiry Preview</h3>
              <p className="text-xs text-[#626061] max-w-sm mx-auto">Thank you, <strong>{formData.fullName}</strong>. This is a website preview. Enquiry submission is not connected yet.</p>
              <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', serviceId: 'property-valuation', message: '' }); }} className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors">Send Another Inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-medium text-red-700">{errorMsg}</div>}
              <div><label className="block text-[11px] font-bold text-[#252223] mb-1.5 uppercase tracking-wider">Full Name *</label><input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your Name" className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-4 py-3 text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white" /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-[11px] font-bold text-[#252223] mb-1.5 uppercase tracking-wider">Phone Number *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+234..." className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-4 py-3 text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white" /></div>
                <div><label className="block text-[11px] font-bold text-[#252223] mb-1.5 uppercase tracking-wider">Email Address *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@company.com" className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-4 py-3 text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white" /></div>
              </div>
              <div><label className="block text-[11px] font-bold text-[#252223] mb-1.5 uppercase tracking-wider">Service Required</label><select value={formData.serviceId} onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })} className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-4 py-3 text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white">{CORE_SERVICES.map((s) => <option key={s.id} value={s.id}>{s.number}. {s.title}</option>)}</select></div>
              <div><label className="block text-[11px] font-bold text-[#252223] mb-1.5 uppercase tracking-wider">Property Brief / Message *</label><textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Brief details about the property location, size, or valuation objective..." className="w-full bg-[#F5F8F2] border border-[#E5E9E1] rounded-lg px-4 py-3 text-sm text-[#252223] focus:outline-hidden focus:border-[#07A757] focus:bg-white resize-y" /></div>
              <button type="submit" className="w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"><span>Send Enquiry</span><Send className="w-3.5 h-3.5" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
