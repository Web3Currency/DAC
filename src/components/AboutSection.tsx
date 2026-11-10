import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#F5F8F2]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern residential property"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/45 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#FFFFFF] p-5 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8F2] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#07A757]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#252223] block">
                    Established in {COMPANY_INFO.establishedYear}
                  </span>
                  <span className="text-[11px] text-[#626061] font-medium">
                    A Nigerian real estate practice
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#626061] leading-normal">
                Serving the Nigerian property sector since 1993.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                About Demola Adetola &amp; Co.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
              Helping Nigerians Make Better Property Decisions.
            </h2>

            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutIntro}
            </p>

            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutHistory}
            </p>

            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutMission}
            </p>

            <div className="pt-2 space-y-3 text-sm text-[#626061]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                <span>Valuation, buying and selling support, property management and property advice.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                <span>Office locations listed in Onikan and Campbell Street, Lagos Island.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                <span>Support for individuals, businesses and investors.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs hover:shadow transition-colors"
              >
                <span>Speak With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
