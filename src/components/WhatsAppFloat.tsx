import React, { useEffect, useState } from 'react';

export const WhatsAppFloat: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="prototype-whatsapp-enter fixed bottom-6 left-5 z-[70]" aria-label="WhatsApp contact preview">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl" aria-hidden="true">
        <span className="prototype-whatsapp-pulse absolute inset-0 rounded-full" />
        <svg viewBox="0 0 32 32" className="relative z-10 h-8 w-8 fill-current" role="img" aria-label="WhatsApp">
          <path d="M16.02 3.2A12.65 12.65 0 0 0 5.16 22.35L3.4 28.8l6.6-1.73A12.65 12.65 0 1 0 16.02 3.2Zm0 23.02c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.92 1.03 1.05-3.82-.26-.42a10.34 10.34 0 1 1 9.03 4.95Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.44.2 1.98.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"/>
        </svg>
      </div>
    </div>
  );
};
