import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Inspection & Brief',
      bullets: ['Site visit & physical survey', 'Beacon & boundary validation'],
    },
    {
      number: '02',
      title: 'Market & Legal Analysis',
      bullets: ['Comparative market valuation', 'Land registry title search'],
    },
    {
      number: '03',
      title: 'Certified Valuation',
      bullets: ['ESVARBON & NIESV standards', 'Photographic asset inventory'],
    },
    {
      number: '04',
      title: 'Delivery & Advisory',
      bullets: ['Bank & court defensible report', 'Ongoing portfolio guidance'],
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-20 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Strict, few text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Valuation Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
              A Rigorous, 4-Stage Valuation &amp; Advisory Methodology.
            </h2>
          </div>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs transition-colors shrink-0"
            >
              <span>Start Valuation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 4 Process Step Cards with Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.number}
              className="bg-[#FFFFFF] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-[#8ABE4B] block mb-3 tabular-nums">
                  {st.number}
                </span>
                <h3 className="text-base font-bold text-[#252223] mb-3">
                  {st.title}
                </h3>
                <ul className="space-y-2 text-xs text-[#626061]">
                  {st.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E9E1] text-[11px] font-bold uppercase tracking-wider text-[#07A757]">
                Stage {st.number}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
