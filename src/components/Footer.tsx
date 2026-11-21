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
    <footer className="border-t border-[#45483F] bg-[#20221F] text-[#E5E9E1]/75 text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-8 pt-14 sm:pt-16 pb-7 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-x-9 lg:gap-y-12 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 space-y-5">
            {/* Place the brand mark above the firm name and professional designation. */}
            <div className="flex w-full flex-col items-center gap-3 text-center">
              <img
                src={siteMedia.footer_logo || siteMedia.header_logo || "https://i.imgur.com/qczlHrn.png"}
                alt="Demola Adetola & Co. Logo"
                className="h-[4.5rem] sm:h-20 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
              <div className="inline-flex min-w-0 flex-col items-center">
                <div className="whitespace-nowrap text-lg sm:text-xl font-bold tracking-tight leading-tight text-white">
                  Demola Adetola &amp; Co.
                </div>
                <div className="mt-1 w-full whitespace-nowrap text-center text-[8px] sm:text-[9px] font-semibold uppercase leading-tight tracking-[0.02em] text-[#9BC65C]">
                  Chartered Estate Surveyors + Valuers
                </div>
              </div>
            </div>

            <p className="max-w-md mx-auto lg:mx-0 text-center lg:text-left text-[12px] sm:text-[13px] text-[#E5E9E1]/65 leading-7 px-1 sm:px-4 lg:px-0 lg:pr-8">
              Demola Adetola &amp; Co. is a firm of Chartered Estate Surveyors and Valuers providing professional real estate services across Nigeria. Conceived in 1992 and began operations in July 1993.
            </p>

            <div className="flex items-center justify-center pt-1" aria-label="DAC social media">
              <div className="flex items-center gap-3">
                <a href="https://x.com/demolaadetola" target="_blank" rel="noopener noreferrer" aria-label="DAC on X" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#E5E9E1]/75 transition-all duration-200 hover:border-[#9BC65C]/60 hover:bg-[#9BC65C]/10 hover:text-[#B6D77D]">
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.1L5.83 22H2.7l7.25-8.3L2.3 2h6.4l4.43 6.56L18.9 2Zm-1.1 18h1.73L7.76 3.9H5.9L17.8 20Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/demola-adetola-company/home/" target="_blank" rel="noopener noreferrer" aria-label="DAC on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#E5E9E1]/75 transition-all duration-200 hover:border-[#9BC65C]/60 hover:bg-[#9BC65C]/10 hover:text-[#B6D77D]">
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.03 18.34H5.06V9.01h2.97v9.33ZM6.55 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.79 10.6h-2.97v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.17V9.01h2.85v1.28h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.03h-.11Z"/></svg>
                </a>
                <a href="https://www.facebook.com/share/1JHS1GGF8Z/" target="_blank" rel="noopener noreferrer" aria-label="DAC on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#E5E9E1]/75 transition-all duration-200 hover:border-[#9BC65C]/60 hover:bg-[#9BC65C]/10 hover:text-[#B6D77D]">
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true"><path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.53 0-4.26 1.54-4.26 4.37V9.6H7.13v3.2h2.86V21h3.51Z"/></svg>
                </a>
                <a href="https://www.instagram.com/dacngrealestate/" target="_blank" rel="noopener noreferrer" aria-label="DAC on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#E5E9E1]/75 transition-all duration-200 hover:border-[#9BC65C]/60 hover:bg-[#9BC65C]/10 hover:text-[#B6D77D]">
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
              </div>
            </div>


          </div>

          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="border-l-2 border-[#9BC65C] pl-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white">Navigation</h4>
            <ul className="space-y-3 pl-3 text-[12px] sm:text-[13px]">
              <li><a href="/" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">Home</a></li>
              <li><a href="/about" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">About us</a></li>
              <li><a href="/services" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">Services</a></li>
              <li><a href="/properties" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">Property listings</a></li>
              <li><a href="/insights" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">Insights &amp; Publications</a></li>
              <li><a href="/contact" className="inline-flex transition-colors duration-200 hover:text-[#B6D77D]">Contact us</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h4 className="border-l-2 border-[#9BC65C] pl-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white">Core Practice Areas</h4>
            <ul className="space-y-3 pl-3 text-[12px] sm:text-[13px] lg:space-y-2.5">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="/services" className="block leading-relaxed transition-colors duration-200 hover:text-[#B6D77D]">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 space-y-4">
            <h4 className="border-l-2 border-[#9BC65C] pl-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white">Head Office</h4>
            <div className="space-y-4 pl-3 text-[12px] sm:text-[13px]">
              <div>
                <span className="block max-w-sm leading-7 text-[#E5E9E1]/65">{OFFICE_LOCATIONS[0].address}</span>
              </div>
              <div className="border-t border-white/10 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3">
                <div className="min-w-0">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9BC65C]">Telephone</div>
                  {COMPANY_INFO.telephoneContacts.map((contact) => (
                    <div key={contact.href} className="flex items-center gap-2.5 py-1">
                      <Phone className="w-4 h-4 text-[#9BC65C] shrink-0" />
                      <a href={contact.href} className="min-w-0 break-words text-white/90 transition-colors hover:text-[#B6D77D]">{contact.label}</a>
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9BC65C]">WhatsApp</div>
                  {COMPANY_INFO.whatsappContacts.map((contact) => (
                    <div key={contact.href} className="flex items-center gap-2.5 py-1">
                      <Phone className="w-4 h-4 text-[#9BC65C] shrink-0" />
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="min-w-0 break-words text-white/90 transition-colors hover:text-[#B6D77D]">{contact.label}</a>
                    </div>
                  ))}
                  <a href="https://whatsapp.com/channel/0029VbDPr996buMKmc70fd46" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-8 w-fit items-center rounded-md bg-[#9BC65C] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#20221F] transition-colors hover:bg-[#B6D77D]">
                    Follow Our WhatsApp Channel
                  </a>
                </div>
                <div className="min-w-0">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9BC65C]">Email</div>
                  {COMPANY_INFO.emailContacts.map((email) => (
                    <div key={email} className="flex items-center gap-2.5 py-1">
                      <Mail className="w-4 h-4 text-[#9BC65C] shrink-0" />
                      <a href={`mailto:${email}`} className="min-w-0 break-all text-white/90 transition-colors hover:text-[#B6D77D]">{email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pb-3 sm:hidden">
          <button onClick={scrollToTop} className="hover:text-[#B6D77D] flex items-center gap-2 transition-colors text-[#E5E9E1]/75 text-[11px]">
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] text-[#E5E9E1]/55">
          <div className="flex flex-col gap-1">
            <span>Copyright © 2026 Demola Adetola &amp; Co. All rights reserved.</span>
          </div>
          <button onClick={scrollToTop} className="hidden sm:flex hover:text-[#B6D77D] items-center gap-2 transition-colors text-[#E5E9E1]/75">
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
