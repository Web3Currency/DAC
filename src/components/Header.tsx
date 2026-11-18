import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';

interface HeaderProps {
  onOpenConsultation: (serviceId?: string) => void;
}

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Insights', href: '/insights' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const siteMedia = useSiteMedia();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] isolate w-full shrink-0 bg-white/90 backdrop-blur-xl border-b border-[#E9ECE7] shadow-[0_4px_20px_rgba(37,34,35,0.06)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[76px]">
          <a href="/" onClick={closeMobileMenu} className="flex items-center shrink-0 py-2" aria-label="Demola Adetola & Co. home">
            <img
              src={siteMedia.header_logo || "https://i.imgur.com/qczlHrn.png"}
              alt="Demola Adetola & Co. Logo"
              className="h-10 sm:h-11 md:h-12 w-auto max-w-[210px] sm:max-w-[230px] object-contain"
              loading="eager"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#252223]">
            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`py-2 transition-colors hover:text-[#07A757] ${index === 0 ? 'text-[#07A757] font-semibold' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              Speak With Our Team
            </button>
          </div>

          <button
            type="button"
            data-prototype-allow="true"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-[#252223] transition-colors hover:bg-[#F5F8F2] hover:text-[#07A757]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-0 z-[200] flex min-h-[100dvh] flex-col overflow-y-auto bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E9ECE7] px-5 sm:px-7">
            <a href="#home" onClick={closeMobileMenu} className="flex items-center" aria-label="Demola Adetola & Co. home">
              <img
                src={siteMedia.header_logo || "https://i.imgur.com/qczlHrn.png"}
                alt="Demola Adetola & Co. Logo"
                className="h-10 w-auto max-w-[210px] object-contain"
              />
            </a>
            <button
              type="button"
              data-prototype-allow="true"
              onClick={closeMobileMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#252223] transition-colors hover:bg-[#F5F8F2] hover:text-[#07A757]"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-7 py-10 sm:px-10">
            <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#858885]">Explore DAC</p>
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between border-b border-[#E9ECE7] py-5 text-2xl font-semibold tracking-tight transition-colors hover:text-[#07A757] sm:text-3xl ${index === 0 ? 'text-[#07A757]' : 'text-[#252223]'}`}
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-medium text-[#A4A8A1]">0{index + 1}</span>
                </a>
              ))}
            </div>
            <button
              type="button"
              data-prototype-allow="true"
              onClick={() => {
                closeMobileMenu();
                onOpenConsultation();
              }}
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[#8ABE4B] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white"
            >
              Speak With Our Team
            </button>
          </nav>
          <div className="px-7 pb-8 text-center text-xs text-[#858885] sm:px-10">
            Demola Adetola &amp; Co. · Chartered Estate Surveyors &amp; Valuers
          </div>
        </div>
      )}
    </header>
  );
};
