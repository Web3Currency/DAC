import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const industries = [
    {
      title: 'Banks & Financial Institutions',
      bullets: ['Property and collateral valuation', 'Mortgage security assessment', 'Asset valuation for financial reports'],
    },
    {
      title: 'Companies & Businesses',
      bullets: ['Office and facility management', 'Property leasing advice', 'Property portfolio support'],
    },
    {
      title: 'Property Developers',
      bullets: ['Feasibility and viability studies', 'Land and site assessment', 'Development project advice'],
    },
    {
      title: 'Private Investors & Families',
      bullets: ['Property buying and selling advice', 'Property valuation', 'Property management'],
    },
    {
      title: 'Government & Public Agencies',
      bullets: ['Property and land valuation', 'Acquisition and compensation advice', 'Land use planning support'],
    },
    {
      title: 'Legal & Estate Professionals',
      bullets: ['Probate and estate valuation', 'Property reports for legal matters', 'Property advice for estate matters'],
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-white border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">Who We Work With</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
              Property Support for Different Needs.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#626061] leading-relaxed">
              We support people and organisations with their property needs.
            </p>
          </div>
          {onOpenConsultation && (
            <button onClick={onOpenConsultation} className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors shrink-0">
              <span>Speak With Our Team</span><ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {industries.map((industry, index) => (
            <div key={industry.title} className="rounded-xl bg-[#F7F9F5] hover:bg-[#F0F4EB] transition-colors duration-200 flex flex-col min-w-0">
              <div className="p-3 sm:p-4 flex flex-1 flex-col min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#252223] leading-snug mb-2">{industry.title}</h3>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-[#626061] leading-snug">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#07A757] shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>           </div>
          ))}
        </div>
      </div>
    </section>
  );
};
