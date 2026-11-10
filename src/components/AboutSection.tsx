import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E9E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Credential Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#F5F8F2]">
              <img
                src="/src/assets/images/about_boardroom_consulting_1794305809512.jpg"
                alt="Demola Adetola & Co. Chartered Surveyors and Partners reviewing valuation and property development reports"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Credential Card (No border, rich shadow) */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#FFFFFF] p-5 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F5F8F2] flex items-center justify-center font-bold text-base">
                  <Award className="w-5 h-5 text-[#07A757]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#252223] block">
                    Founded in 1993
                  </span>
                  <span className="text-[11px] text-[#626061] font-medium">
                    30+ Years of Fiduciary Diligence
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#626061] leading-normal">
                Licensed by ESVARBON, enlisted with NIESV, and fully registered with the Corporate Affairs Commission.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Kicker */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#07A757]">
                About Demola Adetola &amp; Co.
              </span>
            </div>

            {/* Big Charcoal Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223] leading-tight">
              Professional Real Estate Expertise Built on Trust.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutIntro}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutHistory}
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base text-[#626061] leading-relaxed">
              {COMPANY_INFO.aboutMission}
            </p>

            {/* Bullet Proof Points with Emerald checkmarks and Slate Grey text */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#626061]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0" />
                <span>Accredited property valuation accepted by commercial banks and audit institutions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0" />
                <span>Dual strategic Lagos Island hubs: Force Road (Opposite TBS) &amp; Campbell Street</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0" />
                <span>End-to-end expertise spanning statutory claims, feasibility studies, and facility management</span>
              </div>
            </div>

            {/* Action Button: Primary Lime Green with Charcoal text */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-xs hover:shadow transition-colors"
              >
                <span>Consult Our Partners</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
