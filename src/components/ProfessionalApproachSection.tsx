import React from 'react';

const approach = [
  {
    number: '01',
    title: 'Understand the Property',
    description: 'We consider the property, its context and the requirements of the people and organisations involved.',
  },
  {
    number: '02',
    title: 'Assess Value & Viability',
    description: 'Our work draws on property information, market understanding, valuation expertise and feasibility analysis.',
  },
  {
    number: '03',
    title: 'Provide Professional Advice',
    description: 'We present considered guidance to support property, investment and transaction-related decisions.',
  },
  {
    number: '04',
    title: 'Support Property Interests',
    description: 'From management to project-related services, we help clients address the practical demands of their property assets.',
  },
];

export const ProfessionalApproachSection: React.FC = () => (
  <section
    aria-labelledby="professional-approach-heading"
    className="border-b border-[#E5E9E1] bg-[#F5F8F2] py-12 sm:py-14 lg:py-16"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-7 max-w-3xl sm:mb-9">
        <h2
          id="professional-approach-heading"
          className="text-2xl font-bold leading-tight tracking-tight text-[#252223] sm:text-3xl lg:text-4xl"
        >
          A Professional Approach to Every Property Investment.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#626061] sm:text-base">
          We bring property knowledge, valuation expertise and practical real estate experience together to help clients make informed decisions and manage their property interests.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
        {approach.map((item) => (
          <article
            key={item.number}
            className="rounded-2xl border border-[#E5E9E1] bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6"
          >
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2E2] text-sm font-bold tabular-nums text-[#527C32]">
              {item.number}
            </span>
            <h3 className="mb-2 text-base font-bold leading-snug text-[#252223]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#626061]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
