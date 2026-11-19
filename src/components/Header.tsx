import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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

  // Lock background scrolling without fixing the body; fixed-body scroll restoration
  // can leave some mobile browsers in a blank or unresponsive viewport.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehavior;
    const previousHtmlOverscroll = html.style.overscrollBehavior;

    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';
    html.style.overscrollBehavior = 'none';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
      body.style.overscrollBehavior = previousBodyOverscroll;
      html.style.overscrollBehavior = previousHtmlOverscroll;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
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

    </header>
    {mobileMenuOpen && createPortal(
<div
  id="mobile-navigation"
  className="lg:hidden fixed inset-0 z-[200] flex h-[100dvh] min-h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-white"
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
    <a
      href="https://whatsapp.com/channel/0029VbDPr996buMKmc70fd46"
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeMobileMenu}
      className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#8ABE4B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#F5F8F2]"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-[#25D366]" aria-hidden="true"><path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.35L3.4 28.8l6.6-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.42a10.34 10.34 0 1 1 9.03 4.95Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/></svg>
      Follow Our WhatsApp Channel
    </a>
  </nav>
  <div className="px-7 pb-8 text-center text-xs text-[#858885] sm:px-10">
    Demola Adetola &amp; Co. · Chartered Estate Surveyors &amp; Valuers
  </div>
</div>
      , document.body
    )}
    </>
  );
};
