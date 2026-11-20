import React from 'react';
import { ArrowRight } from 'lucide-react';
const points = [
  {
    title: 'Established Experience',
    description: 'Established professional experience in Nigeria’s property sector.',
  },
  {
    title: 'Professional Approach',
    description: 'Considered guidance grounded in professional standards.',
  },
  {
    title: 'Service in One Place',
    description: 'A range of property and real estate consultancy services through one firm.',
  },
  {
    title: 'Knowledge of Local Properties',
    description: 'Familiarity with Nigerian property markets and local considerations.',
  },
];

interface WhyChooseUsProps { onOpenConsultation: () => void; }

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => (
  <section className="py-12 sm:py-14 lg:py-16 bg-[#F5F8F2] border-b border-[#E5E9E1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 sm:mb-9">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
            Real Estate Advisory You Can Trust and Rely On.
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#626061]">
            Property decisions matter. We explain your options and help you decide on the next step.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {points.map((point) => (
          <article
            key={point.title}
            className="min-h-[160px] rounded-2xl bg-white p-5 sm:p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <h3 className="mb-2 text-base font-bold text-[#252223]">{point.title}</h3>
            <p className="text-sm leading-relaxed text-[#626061]">{point.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-7 flex justify-center sm:mt-9">
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] shadow-xs transition-colors hover:bg-[#07A757] hover:text-white"
        >
          <span>Speak With Our Team</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  </section>
);
