import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center overflow-hidden bg-[#252223] border-b border-[#E5E9E1]">
      
      {/* 1. Animated Luxury Estate Background — Clearly visible with Ken Burns animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
          alt="Luxury masterplanned estate in Nigeria"
          className="w-full h-full object-cover animate-estate-kenburns scale-105 origin-center"
          loading="eager"
        />

        {/* Cinematic dark scrim overlay: keeps the estate photo fully visible while ensuring high contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#252223]/90 via-[#252223]/70 to-[#252223]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252223] via-transparent to-black/40" />

        {/* Brand Lime subtle glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8ABE4B]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Main Hero Content — Strict, punchy, bullet points, no text overload */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full flex flex-col justify-center">
        
        <div className="max-w-3xl">
          
          {/* Punchy Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-5">
            Professional Real Estate Expertise{' '}
            <span className="text-[#8ABE4B]">Built on Trust.</span>
          </h1>

          {/* 1 Short Sentence Subheadline */}
          <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-6 max-w-xl">
            Certified property valuation, strategic advisory, facility management, and transaction brokerage across Nigeria.
          </p>

          {/* 3 Quick Bullets (Scannable, corporate, clear) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-[#8ABE4B] shrink-0" />
              <span>ESVARBON &amp; NIESV Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-[#8ABE4B] shrink-0" />
              <span>30+ Years Practice Pedigree</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-[#8ABE4B] shrink-0" />
              <span>Lagos &amp; Nationwide Coverage</span>
            </div>
          </div>

          {/* Calls To Action (Compact card & phone card removed per instructions) */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Action Button: Lime Green #8ABE4B */}
            <button
              onClick={() => onOpenConsultation('property-valuation')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              <span>Request Valuation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Action Button: Transparent/White Outline */}
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300 active:scale-[0.98]"
            >
              <span>Explore Properties</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
