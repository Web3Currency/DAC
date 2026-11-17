import React from 'react';
import { Landmark } from 'lucide-react';

const affiliations = [
  {
    acronym: 'ESVARBON',
    name: 'Estate Surveyors and Valuers Registration Board of Nigeria',
    status: 'Licensed professional practice',
  },
  {
    acronym: 'NIESV',
    name: 'Nigerian Institution of Estate Surveyors and Valuers',
    status: 'Member / enlisted professional firm',
  },
  {
    acronym: 'RICS',
    name: 'Royal Institution of Chartered Surveyors · United Kingdom',
    status: 'Professional membership',
  },
  {
    acronym: 'IFMA',
    name: 'International Facility Management Association',
    status: 'Professional membership',
  },
];

export const ProfessionalCredentialsSection: React.FC = () => (
  <section aria-labelledby="professional-credentials-heading" className="bg-[#F5F8F2] py-10 sm:py-12 lg:py-14 border-y border-[#E5E9E1]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-12">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-8 bg-[#8ABE4B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#07A757]">Professional Credentials &amp; Heritage</span>
          </div>
          <h2 id="professional-credentials-heading" className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#252223] sm:text-3xl">
            A Legacy of Professional Excellence.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#626061]">
            Demola Adetola &amp; Co. is a Nigerian chartered estate surveying and valuation practice, grounded in professional standards, technical expertise and responsible real estate practice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.72fr_1.28fr] sm:gap-5">
          <div className="flex flex-row items-center gap-4 rounded-xl bg-[#252223] px-5 py-5 text-white sm:flex-col sm:items-start sm:justify-center sm:px-6 sm:py-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#A9D477]">
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">Established</p>
              <p className="mt-0.5 text-4xl font-bold leading-none tracking-tight text-[#A9D477] tabular-nums">1992</p>
              <p className="mt-2 text-xs font-medium text-white/75">Over three decades of professional practice</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {affiliations.map((item) => (
              <div key={item.acronym} className="flex min-h-[94px] flex-col justify-center rounded-xl border border-[#E5E9E1] bg-white px-4 py-3.5">
                <p className="text-base font-extrabold tracking-wide text-[#252223]">{item.acronym}</p>
                <p className="mt-1 text-[10px] leading-snug text-[#626061]">{item.name}</p>
                <p className="mt-1.5 text-[10px] font-semibold text-[#07894B]">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
