import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const proofPoints = [
    'Established in 1993',
    'ESVARBON-licensed practice',
    'Serving clients across Nigeria',
  ];

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center overflow-hidden bg-[#252223] border-b border-[#E5E9E1]">
      {/* Architectural imagery with a strong contrast overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
          alt="Modern commercial property and city architecture"
          className="w-full h-full object-cover animate-estate-kenburns scale-105 origin-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252223]/95 via-[#252223]/78 to-[#252223]/42" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/85 via-transparent to-black/25" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8ABE4B]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-[#8ABE4B]" />
            <p className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#D5E8C0]">
              Chartered Estate Surveyors &amp; Valuers
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
            Make Better Property Decisions.
            <span className="block text-[#A9D477] mt-2">Build Lasting Value.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            From independent property valuation to real estate advisory and management,
            Demola Adetola &amp; Co. helps individuals, businesses and investors navigate
            property decisions with professional insight.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#A9D477] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation('property-valuation')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              <span>Discuss Your Property Needs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/35 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
