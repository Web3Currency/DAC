import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const INDUSTRY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85', alt: 'Commercial office tower property' },
  { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', alt: 'Modern corporate office interior' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85', alt: 'Property development and construction architecture' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85', alt: 'Private family residence' },
  { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85', alt: 'Urban development and residential architecture' },
  { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85', alt: 'Contemporary property building exterior' },
];

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div key={industry.title} className="rounded-2xl bg-white border border-[#E5E9E1] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="h-40 overflow-hidden bg-[#E5E9E1]">
                <img src={INDUSTRY_IMAGES[index].src} alt={INDUSTRY_IMAGES[index].alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <h3 className="text-lg font-bold text-[#252223] mb-4">{industry.title}</h3>
                <ul className="space-y-2 text-sm text-[#626061]">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
