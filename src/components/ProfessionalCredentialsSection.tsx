import React from 'react';

const affiliations = [
  {
    name: 'ESVARBON',
    fullName: 'Estate Surveyors and Valuers Registration Board of Nigeria',
    logo: 'https://portal.esvarbon.gov.ng/assets/images/esvarbon_logo.png',
  },
  {
    name: 'NIESV',
    fullName: 'Nigerian Institution of Estate Surveyors and Valuers',
    logo: 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/NIESV.jpg',
  },
  {
    name: 'RICS',
    fullName: 'Royal Institution of Chartered Surveyors',
    logo: 'https://www.rics.org/content/dam/ricsglobal/images/logos/footer_logo.png',
  },
  {
    name: 'IFMA',
    fullName: 'International Facility Management Association',
    logo: 'https://www.ifma.org/media/n11i0lzg/ifma-logo-qualifier-tagline.png',
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

        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-6">
          {affiliations.map((item) => (
            <div key={item.name} className="flex h-24 items-center justify-center sm:h-28 lg:h-24">
              <img
                src={item.logo}
                alt={item.fullName}
                title={item.fullName}
                loading="lazy"
                className={`max-h-full w-full max-w-[150px] object-contain transition duration-300 ease-out sm:max-w-[170px] lg:max-w-[155px] ${item.name === 'RICS' ? 'grayscale brightness-0 hover:brightness-0 hover:grayscale' : 'grayscale hover:grayscale-0'} ${item.name === 'NIESV' ? 'mix-blend-multiply' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-[#DDE4D7] pt-6 sm:mt-9">
        <div className="shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#626061]">Established</p>
          <p className="mt-0.5 text-3xl font-bold leading-none tracking-tight text-[#252223] tabular-nums">1992</p>
        </div>
        <div className="h-10 w-px bg-[#DDE4D7]" />
        <p className="text-xs font-medium leading-relaxed text-[#626061]">Over three decades of professional practice</p>
      </div>
    </div>
  </section>
);
