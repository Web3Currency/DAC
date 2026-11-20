import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, OFFICE_LOCATIONS } from '../data/companyData';
import { useSiteMedia } from '../lib/useSiteMedia';

export const Footer: React.FC = () => {
  const siteMedia = useSiteMedia();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#252223] text-[#E5E9E1]/80 text-xs border-t border-[#383435]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-4 space-y-4">
            {/* Full DAC logo is stacked vertically, matching the supplied brand artwork. */}
            <div className="flex w-full flex-col items-start gap-3">
              <img
                src={siteMedia.footer_logo || siteMedia.header_logo || "https://i.imgur.com/qczlHrn.png"}
                alt="Demola Adetola & Co. — Chartered Estate Surveyors + Valuers"
                className="h-auto w-full max-w-[300px] object-contain object-left"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-[#E5E9E1]/75 leading-relaxed pr-4">
              Demola Adetola &amp; Co. is a firm of Chartered Estate Surveyors and Valuers providing professional real estate services across Nigeria. Conceived in 1992 and began operations in July 1993.
            </p>

            <div className="pt-2 text-[11px] text-[#E5E9E1]/70 space-y-1">
              <div>Professional real estate services</div>
              <div>Serving individuals, businesses and investors</div>
            </div>

            <div className="flex items-center gap-3 pt-2" aria-label="DAC social media profiles">
              <a href="https://x.com/demolaadetola" target="_blank" rel="noopener noreferrer" aria-label="DAC on X" className="text-[#E5E9E1]/80 transition-colors hover:text-[#8ABE4B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.1L5.83 22H2.7l7.25-8.3L2.3 2h6.4l4.43 6.56L18.9 2Zm-1.1 18h1.73L7.76 3.9H5.9L17.8 20Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/demola-adetola-company/home/" target="_blank" rel="noopener noreferrer" aria-label="DAC on LinkedIn" className="text-[#E5E9E1]/80 transition-colors hover:text-[#8ABE4B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.03 18.34H5.06V9.01h2.97v9.33ZM6.55 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.79 10.6h-2.97v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.17V9.01h2.85v1.28h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.03h-.11Z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/1JHS1GGF8Z/" target="_blank" rel="noopener noreferrer" aria-label="DAC on Facebook" className="text-[#E5E9E1]/80 transition-colors hover:text-[#8ABE4B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.53 0-4.26 1.54-4.26 4.37V9.6H7.13v3.2h2.86V21h3.51Z"/></svg>
              </a>
              <a href="https://www.instagram.com/dacngrealestate/" target="_blank" rel="noopener noreferrer" aria-label="DAC on Instagram" className="text-[#E5E9E1]/80 transition-colors hover:text-[#8ABE4B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>

            <a href="https://whatsapp.com/channel/0029VbDPr996buMKmc70fd46" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 w-fit items-center gap-2 rounded-lg border border-[#8ABE4B]/60 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-[#D6E8BD] transition-colors hover:border-[#8ABE4B] hover:bg-[#8ABE4B] hover:text-[#252223]">
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.35L3.4 28.8l6.6-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.42a10.34 10.34 0 1 1 9.03 4.95Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/></svg>
              Follow Our WhatsApp Channel
            </a>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#8ABE4B] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#8ABE4B] transition-colors">About us</a></li>
              <li><a href="/services" className="hover:text-[#8ABE4B] transition-colors">Services</a></li>
              <li><a href="/properties" className="hover:text-[#8ABE4B] transition-colors">Property listings</a></li>
              <li><a href="/insights" className="hover:text-[#8ABE4B] transition-colors">Insights &amp; Publications</a></li>
              <li><a href="/contact" className="hover:text-[#8ABE4B] transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">Core Practice Areas</h4>
            <ul className="space-y-1.5 text-[11px]">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="/services" className="hover:text-[#8ABE4B] transition-colors block line-clamp-1">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">Head Office</h4>
            <div className="space-y-3 text-[11px]">
              <div>
                <span className="text-[#E5E9E1]/75">{OFFICE_LOCATIONS[0].address}</span>
              </div>
              <div className="pt-2 border-t border-[#383435] space-y-3">
                <div>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#8ABE4B]">Telephone</div>
                  {COMPANY_INFO.telephoneContacts.map((contact) => (
                    <div key={contact.href} className="flex items-center gap-2 py-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                      <a href={contact.href} className="hover:text-[#8ABE4B] text-white font-medium">{contact.label}</a>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#8ABE4B]">WhatsApp</div>
                  {COMPANY_INFO.whatsappContacts.map((contact) => (
                    <div key={contact.href} className="flex items-center gap-2 py-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#8ABE4B] text-white font-medium">{contact.label}</a>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#8ABE4B]">Email</div>
                  {COMPANY_INFO.emailContacts.map((email) => (
                    <div key={email} className="flex items-center gap-2 py-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                      <a href={`mailto:${email}`} className="break-all hover:text-[#8ABE4B] text-white font-medium">{email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#383435] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E5E9E1]/60">
          <div>Copyright © 2026 Demola Adetola &amp; Co. All rights reserved.</div>
          <button onClick={scrollToTop} className="hover:text-[#8ABE4B] flex items-center gap-1 transition-colors text-[#E5E9E1]/80">
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
