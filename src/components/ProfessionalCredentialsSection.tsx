import React from 'react';
import { useSiteMedia } from '../lib/useSiteMedia';

export const ProfessionalCredentialsSection: React.FC = () => {
  const siteMedia = useSiteMedia();
  const affiliations = [
    { name: 'ESVARBON', fullName: 'Estate Surveyors and Valuers Registration Board of Nigeria', logo: siteMedia.credentials_esvarbon || 'https://portal.esvarbon.gov.ng/assets/images/esvarbon_logo.png' },
    { name: 'NIESV', fullName: 'Nigerian Institution of Estate Surveyors and Valuers', logo: siteMedia.credentials_niesv },
    { name: 'RICS', fullName: 'Royal Institution of Chartered Surveyors', logo: siteMedia.credentials_rics || 'https://www.rics.org/content/dam/ricsglobal/images/logos/footer_logo.png' },
    { name: 'IFMA', fullName: 'International Facility Management Association', logo: siteMedia.credentials_ifma || 'https://www.ifma.org/media/n11i0lzg/ifma-logo-qualifier-tagline.png' },
    { name: 'FIABCI', fullName: 'FIABCI - International Real Estate Federation', logo: siteMedia.credentials_fiabci },
  ].filter((item) => Boolean(item.logo));

  return (
    <section aria-labelledby="professional-credentials-heading" className="bg-[#F5F8F2] py-10 sm:py-12 lg:py-14 border-y border-[#E5E9E1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-12">
          <div>
            <h2 id="professional-credentials-heading" className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#252223] sm:text-3xl">
              A Legacy of Professional Excellence.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#626061]">
              Demola Adetola &amp; Co. is a Nigerian chartered estate surveying and valuation practice, grounded in professional standards, technical expertise and responsible real estate practice.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-5">
            {affiliations.map((item) => (
              <div key={item.name} className="flex h-24 items-center justify-center sm:h-28 lg:h-24">
                <img
                  src={item.logo}
                  alt={item.fullName}
                  title={item.fullName}
                  loading="lazy"
                  className={`max-h-full w-full max-w-[150px] object-contain transition duration-300 ease-out sm:max-w-[170px] lg:max-w-[145px] ${item.name === 'RICS' ? 'grayscale brightness-0 hover:brightness-0 hover:grayscale' : 'grayscale hover:grayscale-0'} ${item.name === 'NIESV' ? 'mix-blend-multiply' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
