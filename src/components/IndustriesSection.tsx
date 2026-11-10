import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const INDUSTRY_IMAGES = [
  { src: 'https://images.pexels.com/photos/20430714/pexels-photo-20430714.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Commercial office tower in Lagos, Nigeria' },
  { src: 'https://images.pexels.com/photos/30678213/pexels-photo-30678213.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Nigerian professionals collaborating in a modern office' },
  { src: 'https://images.pexels.com/photos/36622171/pexels-photo-36622171.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Lagos cityscape with ongoing urban development' },
  { src: '/src/assets/images/property_luxury_residence_1794305810064.jpg', alt: 'Contemporary residential estate in Lagos' },
  { src: 'https://images.pexels.com/photos/34557960/pexels-photo-34557960.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern residential high-rise in Lagos' },
  { src: 'https://images.pexels.com/photos/30688914/pexels-photo-30688914.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Nigerian business colleagues working together' },
];

interface IndustriesSectionProps {
  onOpenConsultation?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const industries = [
    {
      title: 'Commercial & Mortgage Banks',
      bullets: ['Collateral asset valuation', 'Mortgage security appraisal', 'Annual audit balance sheet compliance'],
    },
    {
      title: 'Corporate & Multinationals',
      bullets: ['Lease advisory & renegotiation', 'Corporate facility management', 'Headquarters asset optimization'],
    },
    {
      title: 'Property Developers & JVs',
      bullets: ['Feasibility & viability studies', 'Highest & Best Use analysis', 'Land acquisition & title regularization'],
    },
    {
      title: 'Private Investors & Family Offices',
      bullets: ['Prime residential acquisition', 'Portfolio yield maximization', 'Confidential asset divestment'],
    },
    {
      title: 'Government & Statutory Agencies',
      bullets: ['Compulsory acquisition claims', 'Right-of-way compensation', 'Public land use planning'],
    },
    {
      title: 'Legal Firms & Estate Executors',
      bullets: ['Probate & estate administration', 'Court litigation expert witness', 'Statutory property rating assessment'],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Strict, few text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                Sectors We Serve
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#252223]">
              Tailored Real Estate Solutions Across Industries.
            </h2>
          </div>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg transition-colors shrink-0"
            >
              <span>Consult Our Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 6 Industry Cards — Clean, no top-left icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F5F8F2] hover:bg-[#FFFFFF] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="-mx-6 -mt-6 mb-5 h-36 overflow-hidden rounded-t-2xl bg-[#E5E9E1]">
                  <img src={INDUSTRY_IMAGES[idx].src} alt={INDUSTRY_IMAGES[idx].alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <h3 className="text-base font-bold text-[#252223] mb-3">
                  {ind.title}
                </h3>
                <ul className="space-y-2 text-xs text-[#626061]">
                  {ind.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07A757] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E5E9E1]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#07A757]">
                  Certified Mandate Ready
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
