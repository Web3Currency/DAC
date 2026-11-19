import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, OFFICE_LOCATIONS } from '../data/companyData';
import { useSiteMedia } from '../lib/useSiteMedia';

const inquiryServices = [
  {
    id: 'property-valuation',
    title: 'Property Valuation',
    description: 'Request a professional valuation of residential, commercial or land assets.',
    Icon: Building2,
  },
  {
    id: 'property-facility-management',
    title: 'Asset Management',
    description: 'Discuss property and facility management for better asset performance.',
    Icon: Layers3,
  },
  {
    id: 'real-estate-consultancy',
    title: 'Realty Advisory',
    description: 'Get guidance on real estate decisions, transactions and opportunities.',
    Icon: Handshake,
  },
];

export const ContactSection: React.FC = () => {
  const siteMedia = useSiteMedia();
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      fullName: '',
      phone: '',
      email: '',
      serviceId: params.get('service') || 'property-valuation',
      message: params.get('message') || '',
    };
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const selectService = (serviceId: string) => {
    setFormData((current) => ({ ...current, serviceId }));
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return setErrorMsg('Please enter your full name.');
    if (!formData.phone.trim() || formData.phone.length < 7) return setErrorMsg('Please enter a valid phone number.');
    if (!formData.email.trim() || !formData.email.includes('@')) return setErrorMsg('Please enter a valid email address.');
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative isolate flex min-h-[250px] items-center overflow-hidden bg-[#252223] text-white sm:min-h-[280px] lg:min-h-[310px]">
        <div className="absolute inset-0 -z-10">
          {siteMedia.homepage_hero && (
            <img
              src={siteMedia.homepage_hero}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[58%_12%]"
              loading="eager"
              fetchPriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171617]/95 via-[#252223]/75 to-[#252223]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171617]/45 via-transparent to-[#171617]/10" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[#8ABE4B]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D5E8C0] sm:text-sm">Contact Our Practice</p>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Talk to Us About Your Property Needs.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Speak with our team about property valuation, asset management and realty advisory.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F7F8F6] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-12 lg:gap-9 lg:px-8">
          <div id="inquiry-form" className="scroll-mt-24 rounded-2xl border border-[#E5E9E1] bg-white p-5 shadow-sm sm:p-7 lg:col-span-7 lg:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-[#252223] sm:text-3xl">Send an Enquiry</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#626061]">Tell us what you need, and our team will be ready to assist.</p>
            </div>
            {submitted ? (
              <div className="space-y-3 py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#07A757] bg-[#F5F8F2] text-[#07A757]"><CheckCircle2 className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold text-[#252223]">Enquiry Preview</h3>
                <p className="mx-auto max-w-sm text-sm text-[#626061]">Thank you, <strong>{formData.fullName}</strong>. This is a website preview. Enquiry submission is not connected yet.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', serviceId: 'property-valuation', message: '' }); }} className="rounded-lg bg-[#8ABE4B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700">{errorMsg}</div>}
                <div>
                  <label htmlFor="contact-full-name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#252223]">Full Name *</label>
                  <input id="contact-full-name" type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your name" className="w-full rounded-lg border border-[#E5E9E1] bg-[#FAFBF9] px-4 py-3 text-sm text-[#252223] focus:border-[#07A757] focus:bg-white focus:outline-hidden" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#252223]">Phone Number *</label>
                    <input id="contact-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+234..." className="w-full rounded-lg border border-[#E5E9E1] bg-[#FAFBF9] px-4 py-3 text-sm text-[#252223] focus:border-[#07A757] focus:bg-white focus:outline-hidden" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#252223]">Email Address *</label>
                    <input id="contact-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@company.com" className="w-full rounded-lg border border-[#E5E9E1] bg-[#FAFBF9] px-4 py-3 text-sm text-[#252223] focus:border-[#07A757] focus:bg-white focus:outline-hidden" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#252223]">Service Required *</label>
                  <select id="contact-service" required value={formData.serviceId} onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })} className="w-full rounded-lg border border-[#E5E9E1] bg-[#FAFBF9] px-4 py-3 text-sm text-[#252223] focus:border-[#07A757] focus:bg-white focus:outline-hidden">
                    <option value="" disabled>Select a service</option>
                    {CORE_SERVICES.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#252223]">Message *</label>
                  <textarea id="contact-message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Briefly describe your request, property or the support you need..." className="w-full resize-y rounded-lg border border-[#E5E9E1] bg-[#FAFBF9] px-4 py-3 text-sm text-[#252223] focus:border-[#07A757] focus:bg-white focus:outline-hidden" />
                </div>
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#252223] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#383435] active:scale-[0.99] sm:w-auto">
                  <Send className="h-4 w-4" /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <section aria-labelledby="reach-us-heading">
              <h2 id="reach-us-heading" className="text-2xl font-bold tracking-tight text-[#252223] sm:text-3xl">Reach Us Directly</h2>
              <p className="mt-2 text-sm text-[#626061]">Prefer to speak with us? Use any of the channels below.</p>
              <div className="mt-5 space-y-4">
                <a href={`tel:${COMPANY_INFO.primaryPhone.replace(/[^+\\d]/g, '')}`} className="group flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5E9] text-[#6E9D35]"><Phone className="h-5 w-5" /></span>
                  <span><strong className="block text-sm text-[#252223]">{COMPANY_INFO.primaryPhone}</strong><span className="mt-1 block text-xs text-[#626061]">Call our office</span></span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="group flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5E9] text-[#6E9D35]"><Mail className="h-5 w-5" /></span>
                  <span><strong className="block text-sm text-[#252223]">{COMPANY_INFO.email}</strong><span className="mt-1 block text-xs text-[#626061]">Email our practice</span></span>
                </a>
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5E9] text-[#6E9D35]"><MapPin className="h-5 w-5" /></span>
                  <span><strong className="block text-sm text-[#252223]">Head Office</strong><span className="mt-1 block text-xs leading-relaxed text-[#626061]">{OFFICE_LOCATIONS[0].address}, {OFFICE_LOCATIONS[0].landmark}, {OFFICE_LOCATIONS[0].city}</span></span>
                </div>
              </div>
            </section>

            <section aria-labelledby="service-inquiry-heading">
              <h2 id="service-inquiry-heading" className="text-xl font-bold tracking-tight text-[#252223] sm:text-2xl">Inquire by Service</h2>
              <p className="mt-1 text-sm text-[#626061]">Get expert support tailored to your needs.</p>
              <div className="mt-4 space-y-2.5">
                {inquiryServices.map(({ id, title, description, Icon }) => (
                  <button key={id} type="button" onClick={() => selectService(id)} className="group flex w-full items-center gap-3 rounded-xl border border-[#E5E9E1] bg-white p-3 text-left transition-colors hover:border-[#A9D477] hover:bg-[#FBFCF9] sm:p-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F0F5E9] text-[#6E9D35]"><Icon className="h-5 w-5" strokeWidth={1.8} /></span>
                    <span className="min-w-0 flex-1"><strong className="block text-sm text-[#252223]">{title}</strong><span className="mt-0.5 block text-xs leading-relaxed text-[#626061]">{description}</span></span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#252223] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section id="office-address" className="border-t border-[#E5E9E1] bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-2xl">
            <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-xs font-bold uppercase tracking-widest text-[#07A757]">Visit Our Offices</span></div>
            <h2 className="text-2xl font-bold tracking-tight text-[#252223] sm:text-3xl">Our Office Locations</h2>
            <p className="mt-2 text-sm text-[#626061]">Visit our Head Office or Lagos Island branch.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {OFFICE_LOCATIONS.map((office) => (
              <article key={office.id} className="rounded-2xl border border-[#E5E9E1] bg-[#F7F8F6] p-5 sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E9D35]">{office.type}</span>
                <h3 className="mt-2 text-lg font-bold text-[#252223]">{office.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#626061]">{office.address}, {office.landmark}, {office.city}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E9E1] pt-4">
                  <a href={`tel:${office.phones[0].replace(/[^+\\d]/g, '')}`} className="text-xs font-semibold text-[#252223] hover:text-[#07A757]">{office.phones[0]}</a>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.address}, ${office.landmark}, ${office.city}`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#252223] hover:text-[#07A757]">Get directions <ArrowUpRight className="h-3.5 w-3.5" /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="overflow-hidden rounded-2xl border border-[#E5E9E1] bg-[#F7F8F6] lg:col-span-7">
              <iframe
                title="Map showing the DAC Head Office area at Force Road, Onikan, Lagos"
                src="https://www.google.com/maps?q=3A%20Force%20Road%2C%20Onikan%2C%20Lagos%2C%20Nigeria&output=embed"
                className="h-[280px] w-full border-0 sm:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="rounded-2xl border border-[#E5E9E1] bg-[#F2F4F6] p-5 sm:p-7 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#6E9D35]"><Clock3 className="h-5 w-5" /></span>
                <div><h3 className="text-lg font-bold text-[#252223]">Office Hours</h3><p className="text-xs text-[#626061]">Hours vary by office location.</p></div>
              </div>
              <div className="mt-5 space-y-4">
                {OFFICE_LOCATIONS.map((office) => (
                  <div key={office.id} className="border-t border-[#DDE2E5] pt-4">
                    <h4 className="text-sm font-bold text-[#252223]">{office.type}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#626061]">{office.hours}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-[#DDE2E5] pt-4 text-xs text-[#626061]">All times are West Africa Time (WAT).</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
