import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, House } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';
import { useSiteMedia } from '../lib/useSiteMedia';

export const ServicesSection: React.FC = () => {
  const siteMedia = useSiteMedia();
  const [activeServiceId, setActiveServiceId] = useState(CORE_SERVICES[0].id);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeService = CORE_SERVICES.find((service) => service.id === activeServiceId) ?? CORE_SERVICES[0];
  const activeImage = siteMedia['service_' + activeService.id];

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(min-width: 768px)').matches) return;

    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeServiceId];
    if (!tabList || !activeTab) return;

    const listBounds = tabList.getBoundingClientRect();
    const tabBounds = activeTab.getBoundingClientRect();
    const targetLeft =
      tabList.scrollLeft +
      tabBounds.left -
      listBounds.left -
      (tabList.clientWidth - activeTab.clientWidth) / 2;

    tabList.scrollTo({ left: targetLeft, behavior: 'smooth' });
  }, [activeServiceId]);

  return (
    <>
      <section className="relative isolate flex h-[280px] items-center overflow-hidden bg-[#252223] text-white sm:h-[340px] lg:h-[390px]">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <pattern id="services-blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M80 0H0V80" fill="none" stroke="#8ABE4B" strokeWidth="1" strokeOpacity=".3" />
                <path d="M40 0V80M0 40H80" stroke="#E5E9E1" strokeWidth=".6" strokeOpacity=".1" />
              </pattern>
            </defs>
            <rect width="1440" height="520" fill="url(#services-blueprint-grid)" />
            <g fill="none" stroke="#8ABE4B" strokeWidth="1.6" strokeOpacity=".3">
              <path d="M900 410V190l110-78 110 78v220z" />
              <path d="M960 410V250h100v160M985 250v-70h52v70M1120 410V230h70v180" />
              <path d="M860 410h430M930 150h280M1010 112V65M900 190l110 60 110-60" />
              <path d="M1260 130h70v280h-70M1280 160h30M1280 195h30M1280 230h30" />
            </g>
            <g fill="none" stroke="#D6E8BD" strokeOpacity=".2">
              <circle cx="1100" cy="260" r="210" strokeDasharray="5 12" />
              <circle cx="1100" cy="260" r="245" />
            </g>
            <path d="M780 520L1120 0M950 520L1290 0M1120 520L1460 0" stroke="#E5E9E1" strokeWidth="2" strokeOpacity=".08" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[#8ABE4B]/15 sm:block" aria-hidden="true">
          <House className="h-[25rem] w-[25rem] fill-current stroke-[#8ABE4B]/30" strokeWidth={0.8} />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171617]/90 via-[#252223]/75 to-[#252223]/35" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2"><span className="h-0.5 w-8 bg-[#8ABE4B]" /><span className="text-xs font-bold uppercase tracking-widest text-[#D5E8C0]">Our Services</span></div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Real Estate Services to Help You Make the Right Move.</h1>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/85 sm:mt-4 sm:text-sm lg:text-base">We provide property valuation, property sales and letting, property and facility management, and professional real estate advice.</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[#E5E9E1] bg-[#F5F8F2] pb-10 pt-0 sm:pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Professional services"
            className="-mx-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory overflow-x-auto border-b border-[#DCE4D4] bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:w-full md:grid-cols-6 md:overflow-hidden md:rounded-b-xl md:border md:border-t-0"
          >
            {CORE_SERVICES.map((service, index) => {
              const selected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  ref={(element) => { tabRefs.current[service.id] = element; }}
                  id={`service-tab-${service.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="service-panel"
                  onClick={() => setActiveServiceId(service.id)}
                  className={`relative min-h-[3.75rem] w-[42%] min-w-[148px] shrink-0 snap-center border-r border-[#E8ECE4] px-4 py-3 text-center text-xs font-bold leading-snug transition-colors last:border-r-0 md:min-h-[4.25rem] md:w-auto md:min-w-0 md:px-2 md:text-sm ${selected ? 'bg-[#252223] text-white after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[#8ABE4B]' : 'bg-white text-[#4E4B4C] hover:bg-[#F5F8F2] hover:text-[#252223]'}`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          <article id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${activeService.id}`} className="mt-4 overflow-hidden rounded-2xl border border-[#E1E8DA] bg-white shadow-sm">
            {activeImage && (
              <div className="h-44 overflow-hidden bg-[#E5E9E1] sm:h-56 lg:h-64">
                <img src={activeImage} alt={activeService.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            )}
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="max-w-4xl">
                <span className="text-xs font-extrabold tracking-[0.16em] text-[#6E9D35]">SERVICE {activeService.number}</span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#252223] sm:text-3xl">{activeService.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#626061] sm:text-base">{activeService.shortDesc}</p>
                <p className="mt-3 text-sm leading-7 text-[#393637] sm:text-base">{activeService.fullDesc}</p>
              </div>

              <section className="mt-6 border-t border-[#E8ECE4] pt-6" aria-labelledby="service-includes-heading">
                <h4 id="service-includes-heading" className="text-sm font-bold text-[#252223]">What This Service Covers</h4>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeService.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 rounded-xl bg-[#F5F8F2] p-4 text-sm leading-relaxed text-[#4E4B4C]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#07A757]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#E8ECE4] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-[#777273]">Have a requirement in this area? Speak with our team about the next steps.</p>
                <a href={`/contact?service=${encodeURIComponent(activeService.id)}#contact`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#07A757] hover:text-white">
                  Enquire About This Service <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
