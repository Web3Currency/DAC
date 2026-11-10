import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#252223] text-[#E5E9E1]/80 text-xs border-t border-[#383435]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[#8ABE4B] text-[#252223] flex items-center justify-center text-sm font-black tracking-tight" aria-hidden="true">
                DAC
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#FFFFFF] tracking-tight">
                  Demola Adetola &amp; Co.
                </span>
                <span className="text-[10px] font-semibold text-[#8ABE4B] tracking-wider uppercase">
                  Chartered Estate Surveyors + Valuers
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E5E9E1]/75 leading-relaxed pr-4">
              Demola Adetola &amp; Co. is a firm of Chartered Estate Surveyors and Valuers providing professional real estate services across Nigeria. Conceived in 1992 and incorporated in July 1993.
            </p>

            <div className="pt-2 text-[11px] text-[#E5E9E1]/70 space-y-1">
              <div>Professional real estate services</div>
              <div>Serving individuals, businesses and investors</div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#8ABE4B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#8ABE4B] transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8ABE4B] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#8ABE4B] transition-colors">
                  Property listings
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#8ABE4B] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#perspectives" className="hover:text-[#8ABE4B] transition-colors">
                  Expert Perspectives
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8ABE4B] transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Core Practice Areas
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#8ABE4B] transition-colors block line-clamp-1">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Verified Offices
            </h4>
            
            <div className="space-y-3 text-[11px]">
              <div>
                <span className="text-[#FFFFFF] font-semibold block">Head Office:</span>
                <span className="text-[#E5E9E1]/75">
                  3A, Force Road (Opposite TBS / Onikan), Lagos Island
                </span>
              </div>

              <div>
                <span className="text-[#FFFFFF] font-semibold block">Branch Office:</span>
                <span className="text-[#E5E9E1]/75">
                  37, Campbell Street (2nd Floor, Off Joseph St), Lagos Island
                </span>
              </div>

              <div className="pt-2 border-t border-[#383435] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="hover:text-[#8ABE4B] text-white font-medium">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8ABE4B] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#8ABE4B] text-white font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Links Bar from Demola's real website */}
        <div className="pt-8 pb-4 border-t border-[#383435] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#E5E9E1]/60">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-[#8ABE4B] transition-colors cursor-pointer">Terms and Conditions</span>
            <span>·</span>
            <span className="hover:text-[#8ABE4B] transition-colors cursor-pointer">Group Privacy Statement</span>
            <span>·</span>
            <span className="hover:text-[#8ABE4B] transition-colors cursor-pointer">Fair Processing Notice</span>
            <span>·</span>
            <span className="hover:text-[#8ABE4B] transition-colors cursor-pointer">Cookie Policy</span>
            <span>·</span>
            <span className="hover:text-[#8ABE4B] transition-colors cursor-pointer">Modern Slavery Act</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8ABE4B] transition-colors"
            >
              Facebook
            </a>
            <a
              href="#contact"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8ABE4B] transition-colors"
            >
              X-Twitter
            </a>
            <a
              href="#contact"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8ABE4B] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Sub-Footer Copyright */}
        <div className="pt-4 border-t border-[#383435] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E5E9E1]/60">
          <div>
            Copyright © 2026 Demola Adetola &amp; Co. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#8ABE4B] flex items-center gap-1 transition-colors text-[#E5E9E1]/80"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
