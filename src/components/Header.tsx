import React from 'react';
import { Phone, Menu } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(37,34,35,0.08)] supports-[backdrop-filter]:bg-white/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo displayed directly without a container, background or outline */}
          <a href="#" className="flex items-center shrink-0 py-2">
            <img
              src="https://i.imgur.com/czlHrn.png"
              alt="Demola Adetola & Co. Logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[240px] sm:max-w-[280px] object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252223]">
            <a href="#" className="text-[#07A757] font-semibold py-1 border-b-2 border-[#8ABE4B]">
              Home
            </a>
            <a href="#about" className="hover:text-[#07A757] transition-colors py-1">
              About us
            </a>
            <a href="#services" className="hover:text-[#07A757] transition-colors py-1">
              Services
            </a>
            <a href="#properties" className="hover:text-[#07A757] transition-colors py-1">
              Property listings
            </a>
            <a href="#process" className="hover:text-[#07A757] transition-colors py-1">
              Our Process
            </a>
            <a href="#perspectives" className="hover:text-[#07A757] transition-colors py-1">
              Expert Perspectives
            </a>
            <a href="#contact" className="hover:text-[#07A757] transition-colors py-1">
              Contact us
            </a>
          </nav>

          {/* Right Action Block: Phone Call Box + Primary CTA Button */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F8F2]/80 border border-[#E5E9E1]/80 flex items-center justify-center text-[#07A757] group-hover:bg-[#8ABE4B] group-hover:text-[#252223] transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-[#626061] tracking-wider">
                  Call Our Office
                </span>
                <span className="text-xs font-bold text-[#252223] group-hover:text-[#07A757] transition-colors tabular-nums">
                  {COMPANY_INFO.primaryPhone}
                </span>
              </div>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs hover:shadow transition-all active:scale-[0.98]"
            >
              Speak With Our Team
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              disabled
              aria-disabled="true"
              tabIndex={-1}
              className="p-2 text-[#252223] hover:text-[#07A757] hover:bg-[#F5F8F2] rounded-lg"
              aria-label="Toggle navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation intentionally inactive for prototype review. */}
    </header>
  );
};
