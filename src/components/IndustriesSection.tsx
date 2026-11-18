import React from 'react';
import {
  ArrowRight,
  Building2,
  Building,
  Construction,
  UsersRound,
  Landmark,
  Scale,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation?: () => void;
}

const industries = [
  { title: 'Banks & Financial Institutions', Icon: Landmark },
  { title: 'Companies & Businesses', Icon: Building2 },
  { title: 'Property Developers', Icon: Construction },
  { title: 'Private Investors & Families', Icon: UsersRound },
  { title: 'Government & Public Agencies', Icon: Building },
  { title: 'Legal & Estate Professionals', Icon: Scale },
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => (
  <section className="bg-white py-10 sm:py-12 lg:py-14 border-b border-[#E5E9E1]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#252223] sm:text-3xl">
            Property Support for Different Needs.
          </h2>
        </div>
        {onOpenConsultation && (
          <button
            onClick={onOpenConsultation}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-[#8ABE4B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white sm:self-auto"
          >
            <span>Speak With Our Team</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {industries.map(({ title, Icon }) => (
          <article
            key={title}
            className="flex min-h-[142px] flex-col items-center justify-center rounded-xl border border-[#E5E9E1] bg-[#F7F9F5] px-3 py-5 text-center transition-colors duration-200 hover:border-[#C8D9B8] hover:bg-[#F0F4EB] sm:min-h-[158px] sm:px-4"
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#07A757] shadow-sm sm:h-16 sm:w-16">
              <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.7} aria-hidden="true" />
            </div>
            <h3 className="text-xs font-bold leading-snug text-[#252223] sm:text-sm">{title}</h3>
          </article>
        ))}
      </div>
    </div>
  </section>
);
