import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Handshake,
  Target,
} from 'lucide-react';
import { useSiteMedia } from '../lib/useSiteMedia';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

const practiceAreas = [
  'Property agency and brokerage',
  'Property valuation and appraisal',
  'Property management',
  'Investment advisory',
  'Facility management',
  'Real estate consultancy',
];

const values = [
  {
    title: 'Integrity',
    description: 'We act honestly and put our clients’ interests at the centre of every engagement.',
  },
  {
    title: 'Professionalism',
    description: 'We bring care, competence and accountability to every property assignment.',
  },
  {
    title: 'Transparency',
    description: 'We communicate clearly so clients can make decisions with confidence.',
  },
  {
    title: 'Excellence',
    description: 'We pursue high standards in our advice, service and delivery.',
  },
  {
    title: 'Client satisfaction',
    description: 'We listen, understand each brief and work towards outcomes that serve our clients.',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const siteMedia = useSiteMedia();

  return (
    <div className="w-full bg-white">
      <section className="relative isolate flex h-[280px] items-center overflow-hidden border-b border-[#E5E9E1] bg-[#252223] text-white sm:h-[340px] lg:h-[390px]">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <pattern id="about-architecture-grid" width="88" height="88" patternUnits="userSpaceOnUse">
                <path d="M88 0H0V88" fill="none" stroke="#8ABE4B" strokeWidth="1" strokeOpacity=".28" />
              </pattern>
            </defs>
            <rect width="1440" height="520" fill="url(#about-architecture-grid)" />
            <g fill="none" stroke="#8ABE4B" strokeWidth="1.5" strokeOpacity=".3">
              <path d="M900 430V170h100v260M1025 430V105h130v325M1180 430V210h105v220" />
              <path d="M920 195h60M920 230h60M920 265h60M1048 135h84M1048 170h84M1048 205h84M1200 240h65M1200 275h65" />
              <path d="M870 430h455M945 170l5-55h90l5 55M1060 105l5-45h55l5 45" />
              <path d="M870 450h455M900 465h385" strokeOpacity=".18" />
            </g>
            <path d="M820 520L1160 0M1000 520L1340 0M1180 520L1520 0" stroke="#E5E9E1" strokeWidth="2" strokeOpacity=".08" />
            <circle cx="1090" cy="265" r="235" fill="none" stroke="#D6E8BD" strokeWidth="1.2" strokeOpacity=".12" strokeDasharray="7 13" />
          </svg>
        </div>
                <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[#8ABE4B]/15 sm:block" aria-hidden="true">
          <Building2 className="h-[25rem] w-[25rem] fill-current stroke-[#8ABE4B]/30" strokeWidth={0.8} />
        </div>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171617]/90 via-[#252223]/75 to-[#252223]/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#171617]/35 to-transparent" />
        <div className="max-w-7xl mx-auto flex h-full w-full items-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-8 h-0.5 bg-[#8ABE4B]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D5E8C0]">
                About our firm
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
              Real Estate Expertise.
              <span className="block text-[#A9D477]">Trusted Property Solutions.</span>
            </h1>
            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/85 sm:mt-4 sm:text-sm lg:text-base">
              Demola Adetola &amp; Co. is a professional real estate and valuation firm committed to
              delivering trusted property solutions across residential, commercial, and investment
              sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            {siteMedia.about_image ? (
              <div className="overflow-hidden rounded-2xl bg-[#F5F8F2]">
                <img
                  src={siteMedia.about_image}
                  alt="Demola Adetola & Co. real estate practice"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-[4/5] rounded-2xl bg-[#F5F8F2] flex items-center justify-center">
                <Building2 className="w-16 h-16 text-[#8ABE4B]" strokeWidth={1.2} />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223]">
              More than property agents. Partners in real estate growth.
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#626061]">
              <p>
                With a deep understanding of the property market, we provide expert guidance that
                helps individuals, investors, and institutions make informed and profitable real
                estate decisions.
              </p>
              <p>
                Our approach is rooted in professionalism, transparency, and integrity, ensuring
                that every transaction is handled with accuracy and confidence.
              </p>
              <p>
                We are a fully registered real estate practice offering a connected range of
                property services. We are not just property agents; we are strategic partners in
                real estate growth and wealth creation.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#252223] mb-4">
                Our practice areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {practiceAreas.map((area) => (
                  <div key={area} className="flex items-start gap-2.5 text-sm text-[#626061]">
                    <CheckCircle2 className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F5F8F2] border-y border-[#E5E9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223]">
              Guided by purpose. Focused on lasting value.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
            <article className="rounded-2xl bg-white border border-[#E5E9E1] p-7 sm:p-9">
              <div className="w-11 h-11 rounded-xl bg-[#F5F8F2] flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-[#07A757]" />
              </div>
              <h3 className="text-xl font-bold text-[#252223] mb-3">Our mission</h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#626061]">
                To provide reliable, transparent, and value-driven real estate services that
                empower clients to make confident property decisions.
              </p>
            </article>
            <article className="rounded-2xl bg-white border border-[#E5E9E1] p-7 sm:p-9">
              <div className="w-11 h-11 rounded-xl bg-[#F5F8F2] flex items-center justify-center mb-6">
                <Eye className="w-5 h-5 text-[#07A757]" />
              </div>
              <h3 className="text-xl font-bold text-[#252223] mb-3">Our vision</h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#626061]">
                To become one of the most trusted and respected real estate firms, known for
                excellence, integrity, and innovation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223]">
              Our core values
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#626061]">
              The standards behind how we advise, work and build relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-6">
            {values.map(({ title, description }) => (
              <article key={title} className="border-t-2 border-[#8ABE4B] pt-5">
                <h3 className="text-base font-bold text-[#252223] mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-[#626061]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#F5F8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="rounded-2xl bg-[#8ABE4B] px-6 py-10 text-[#252223] shadow-xl sm:px-10 sm:py-12 lg:px-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252223]">
              Let’s build value through real estate.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#252223]/80">
              Speak with our team about your property needs, investment goals or next real estate
              decision.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#252223] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#383435]"
          >
            <Handshake className="w-4 h-4" />
            <span>Speak with our team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </div>
      </section>
    </div>
  );
};
