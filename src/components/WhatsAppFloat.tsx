import React, { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '2348028147070';

const enquiryOptions = [
  {
    label: 'I want to buy, sell or rent a property',
    message: "Hello Demola Adetola & Co., I would like assistance with buying, selling or renting a property. Please let me know how your team can help and what information you need from me.",
  },
  {
    label: 'I need a property valuation',
    message: "Hello Demola Adetola & Co., I would like to enquire about a professional property valuation. Please let me know the information and documents required, your process and the next steps.",
  },
  {
    label: 'I need help managing my property',
    message: "Hello Demola Adetola & Co., I am interested in your property management services. I would appreciate some information about your management approach and how we can get started.",
  },
  {
    label: 'I need facility management services',
    message: "Hello Demola Adetola & Co., I would like to discuss facility management services for a property. Please let me know how your team can support the property and its day-to-day operations.",
  },
  {
    label: 'I want to explore a property investment',
    message: "Hello Demola Adetola & Co., I would like professional advice on a property investment opportunity. Please let me know how we can discuss my objectives and the available options.",
  },
  {
    label: 'I need professional real estate advice',
    message: "Hello Demola Adetola & Co., I would like to speak with your team about a real estate matter and receive professional advice. Please let me know the best way to proceed.",
  },
  {
    label: 'I have another property enquiry',
    message: "Hello Demola Adetola & Co., I have a property-related enquiry and would appreciate speaking with your team. Please let me know how best to proceed.",
  },
];

export const WhatsAppFloat: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const chooseEnquiry = (message: string) => {
    setSelectedMessage(message);
    setDraft(message);
  };

  const continueToWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(draft.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!visible) return null;

  return (
    <>
      {isOpen && (
        <section
          className="fixed bottom-24 left-4 z-[90] flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#E5E9E1] bg-white shadow-[0_22px_70px_rgba(37,34,35,0.22)] sm:bottom-24 sm:left-5"
          style={{ height: 'min(650px, calc(100dvh - 7.5rem))' }}
          role="dialog"
          aria-modal="false"
          aria-label="Demola Adetola & Co. WhatsApp enquiry assistant"
        >
          <div className="flex shrink-0 items-center gap-3 bg-[#176B4A] px-4 py-3.5 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white text-sm font-extrabold tracking-tight text-[#252223]">
              DAC
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">Demola Adetola &amp; Co.</p>
              <p className="mt-0.5 text-[11px] text-white/80">Professional Real Estate Enquiries</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 hover:text-white"
              aria-label="Minimise enquiry chat"
              title="Minimise"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => { setIsOpen(false); setSelectedMessage(null); setDraft(''); }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 hover:text-white"
              aria-label="Close enquiry chat"
              title="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-[#F3F1E9]">
            <div className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4">
              <div className="mx-auto w-fit rounded-full bg-white/75 px-3 py-1 text-[10px] font-medium tracking-wide text-[#77736D] shadow-sm">
                HOW CAN WE HELP?
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 text-[12px] leading-[1.65] text-[#393635] shadow-sm">
                <p className="font-semibold text-[#252223]">Welcome to Demola Adetola &amp; Co.</p>
                <p className="mt-1">Thank you for getting in touch. We provide professional real estate services and advisory.</p>
                <p className="mt-2">Please select the option that best describes your enquiry. We’ll prepare a message for you to review before continuing to WhatsApp.</p>
                <p className="mt-2 text-[10px] text-[#96918B]">DAC Enquiry Assistant</p>
              </div>

              <div className="space-y-2 pt-1">
                {enquiryOptions.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => chooseEnquiry(option.message)}
                    className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left text-[12px] font-medium leading-snug shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#8ABE4B] focus:ring-offset-1 ${
                      selectedMessage === option.message
                        ? 'border-[#8ABE4B] bg-[#F5F9EF] text-[#252223]'
                        : 'border-[#E8E6DF] bg-white text-[#45413E] hover:border-[#B5D28F] hover:bg-[#FBFDF8]'
                    }`}
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                      selectedMessage === option.message ? 'bg-[#8ABE4B] text-[#252223]' : 'bg-[#F0F2EC] text-[#6D7563]'
                    }`}>{String(index + 1).padStart(2, '0')}</span>
                    <span className="flex-1">{option.label}</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current text-[#8A9182] transition group-hover:translate-x-0.5" strokeWidth="1.8" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>

              {selectedMessage && (
                <div className="space-y-2 rounded-2xl border border-[#DCE7D0] bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold text-[#252223]">Your message</p>
                    <span className="rounded-full bg-[#EEF5E6] px-2 py-1 text-[9px] font-semibold text-[#527A32]">Ready to review</span>
                  </div>
                  <textarea
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    rows={5}
                    aria-label="Edit your WhatsApp enquiry message"
                    className="w-full resize-y rounded-lg border border-[#E7EAE2] bg-[#FAFBF8] p-2.5 text-[11px] leading-relaxed text-[#45413E] outline-none transition focus:border-[#8ABE4B] focus:ring-2 focus:ring-[#8ABE4B]/20"
                  />
                  <button
                    type="button"
                    onClick={continueToWhatsApp}
                    disabled={!draft.trim()}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1FAF61] px-4 py-3 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#168D4D] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.35L3.4 28.8l6.6-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.42a10.34 10.34 0 1 1 9.03 4.95Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
                    </svg>
                    Continue to WhatsApp
                  </button>
                  <p className="text-center text-[9px] leading-relaxed text-[#8A8781]">WhatsApp will open with this message filled in. You can review and send it there.</p>
                </div>
              )}
            </div>
            <div className="flex shrink-0 items-center justify-center gap-1.5 border-t border-[#E8E5DC] bg-[#F8F7F2] px-3 py-2.5 text-[9px] text-[#88837C]">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 3 4.5 6v5.5c0 4.5 3.1 7.7 7.5 9.5 4.4-1.8 7.5-5 7.5-9.5V6L12 3Z" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Your enquiry opens in WhatsApp only when you choose to continue
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="prototype-whatsapp-enter fixed bottom-6 left-5 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label={isOpen ? 'Close WhatsApp enquiry assistant' : 'Open WhatsApp enquiry assistant'}
        aria-expanded={isOpen}
      >
        <span className="prototype-whatsapp-pulse pointer-events-none absolute inset-0 rounded-full" />
        <svg viewBox="0 0 32 32" className="relative z-10 h-8 w-8 fill-current" aria-hidden="true">
          <path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.35L3.4 28.8l6.6-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.42a10.34 10.34 0 1 1 9.03 4.95Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/>
        </svg>
      </button>
    </>
  );
};
