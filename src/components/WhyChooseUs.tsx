import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Building2, BriefcaseBusiness } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const points = [
    {
      icon: <Award className="w-5 h-5 text-[#07A757]" />,
      title: 'Established Experience',
      bullets: ['Serving the property sector since 1993', 'Local knowledge of the Nigerian property market'],
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#07A757]" />,
      title: 'Professional Approach',
      bullets: ['Clear advice and careful property assessment', 'Clear communication at every stage'],
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5 text-[#07A757]" />,
      title: 'Services in One Place',
      bullets: ['Valuation, agency and property management', 'Advisory, feasibility studies and project support'],
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#07A757]" />,
      title: 'Knowledge of Local Property',
      bullets: ['Support for homes, land and commercial properties', 'Guidance for individuals, businesses and investors'],
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Why Choose Demola Adetola &amp; Co.
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
              Property Advice You Can Rely On.
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#626061]">
              Property decisions matter. We explain your options and help you decide on the next step.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs transition-colors shrink-0"
          >
            <span>Speak With Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 sm:mb-12">
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
                <ul className="space-y-2 text-sm text-[#626061]">
                  {pt.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E5E9E1] flex items-center gap-1.5 text-[11px] font-semibold text-[#626061]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#07A757]" />
                <span>Clear, client-focused service</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#252223] text-white shadow-md">
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">1993</span>
            <span className="text-xs text-[#E5E9E1]/80">Year Established</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">9</span>
            <span className="text-xs text-[#E5E9E1]/80">Core Service Areas</span>
          </div>
          <div className="text-center sm:text-left col-span-2 md:col-span-1">
            <span className="text-2xl sm:text-3xl font-black text-[#8ABE4B] block">Lagos</span>
            <span className="text-xs text-[#E5E9E1]/80">Office Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
};
