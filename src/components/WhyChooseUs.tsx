import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Building2, BarChart2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const points = [
    {
      icon: <Award className="w-5 h-5 text-[#07A757]" />,
      title: '30+ Years Practice Pedigree',
      bullets: ['Established July 1993 in Lagos', 'Over three decades of uncompromised fiduciary duty'],
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#07A757]" />,
      title: 'Statutory Certification',
      bullets: ['Licensed by ESVARBON', 'Corporate membership with NIESV & CAC'],
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-[#07A757]" />,
      title: 'Defensible Bank Valuations',
      bullets: ['Recognized by major commercial banks', 'Scientifically supported valuation methodologies'],
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#07A757]" />,
      title: 'Integrated Real Estate Solutions',
      bullets: ['Valuation, agency, facility management, and advisory', 'All real estate disciplines under one roof'],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Strict, few text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Why Demola Adetola &amp; Co.
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
              Experience That Delivers Confidence.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs transition-colors shrink-0"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Crisp Cards with Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FFFFFF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F5F8F2] flex items-center justify-center mb-4">
                  {pt.icon}
                </div>
                <h3 className="text-base font-bold text-[#252223] mb-3">
                  {pt.title}
                </h3>
                <ul className="space-y-2 text-xs text-[#626061]">
                  {pt.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E9E1] flex items-center gap-1.5 text-[11px] font-bold text-[#07A757]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Metrics Strip (no border) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#252223] text-white shadow-md">
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">30+</span>
            <span className="text-xs text-[#E5E9E1]/80">Years in Practice</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">100%</span>
            <span className="text-xs text-[#E5E9E1]/80">ESVARBON Compliant</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">2 Hubs</span>
            <span className="text-xs text-[#E5E9E1]/80">Lagos &amp; Abuja Branches</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">9</span>
            <span className="text-xs text-[#E5E9E1]/80">Core Valuation Services</span>
          </div>
        </div>

      </div>
    </section>
  );
};
