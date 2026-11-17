import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';

interface HeaderProps {
  onOpenConsultation: (serviceId?: string) => void;
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const siteMedia = useSiteMedia();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] isolate w-full shrink-0 bg-white/90 backdrop-blur-xl border-b border-[#E9ECE7] shadow-[0_4px_20px_rgba(37,34,35,0.06)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[76px]">
          <a href="#home" onClick={closeMobileMenu} className="flex items-center shrink-0 py-2" aria-label="Demola Adetola & Co. home">
            <img
              src={siteMedia.header_logo || "https://i.imgur.com/qczlHrn.png"}
              alt="Demola Adetola & Co. Logo"
              className="h-10 sm:h-11 md:h-12 w-auto max-w-[210px] sm:max-w-[230px] object-contain"
              loading="eager"
            />
          </a>

          {/* Five primary desktop navigation links */}
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

          {/* Mobile menu toggle */}
          <button
            type="button"
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

      {/* Functional mobile side drawer with the same five navigation links */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-[76px] z-[110]">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 h-full w-full bg-[#171617]/45"
          />
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-[min(86vw,360px)] flex-col border-l border-[#E9ECE7] bg-white px-6 py-7 shadow-2xl"
          >
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#858885]">Navigation</p>
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`border-b border-[#EEF0EC] py-4 text-base font-semibold transition-colors hover:text-[#07A757] ${index === 0 ? 'text-[#07A757]' : 'text-[#252223]'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenConsultation();
              }}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#8ABE4B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white"
            >
              Speak With Our Team
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
