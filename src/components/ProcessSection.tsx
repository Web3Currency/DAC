import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      bullets: ['We listen to your property needs', 'We agree on the next steps'],
    },
    {
      number: '02',
      title: 'Inspect & Review',
      bullets: ['We inspect the property where needed', 'We review the relevant market and documents'],
    },
    {
      number: '03',
      title: 'Prepare Your Report or Plan',
      bullets: ['We assess the information', 'We explain our findings and advice'],
    },
    {
      number: '04',
      title: 'Get the Support You Need',
      bullets: ['We present the agreed work', 'We discuss any next steps with you'],
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#F5F8F2] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
              A Clear Process, From First Talk to Delivery.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#626061] leading-relaxed">
              We keep you informed at every stage, so you know what is happening and what to expect.
            </p>
          </div>
          {onOpenConsultation && (
            <button onClick={onOpenConsultation} className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors shrink-0">
              <span>Speak With Our Team</span><ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#E5E9E1] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold text-[#8ABE4B] block mb-4 tabular-nums">{step.number}</span>
                <h3 className="text-lg font-bold text-[#252223] mb-3">{step.title}</h3>
                <ul className="space-y-2 text-sm text-[#626061]">
                  {step.bullets.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E9E1] text-xs font-semibold text-[#626061]">
                Step {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
