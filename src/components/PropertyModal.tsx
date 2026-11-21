import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PropertyItem } from '../types';

interface PropertyDetailPageProps {
  property: PropertyItem | null;
  onClose: () => void;
  onInquire: (property: PropertyItem) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const galleryImages = property?.images?.length ? property.images : property?.image ? [property.image] : [];

  useEffect(() => { setActiveImage(0); setIsLightboxOpen(false); }, [property?.id]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLightboxOpen(false);
      if (galleryImages.length > 1 && event.key === 'ArrowLeft') setActiveImage((current) => (current - 1 + galleryImages.length) % galleryImages.length);
      if (galleryImages.length > 1 && event.key === 'ArrowRight') setActiveImage((current) => (current + 1) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, galleryImages.length]);

  if (!property) return null;
  const showPrevious = () => setActiveImage((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  const showNext = () => setActiveImage((current) => (current + 1) % galleryImages.length);
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || galleryImages.length < 2) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) delta > 0 ? showPrevious() : showNext();
    touchStartX.current = null;
  };



  return (
    <main className="min-h-screen w-full bg-white text-[#252223]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
        <button type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#252223] bg-[#F5F8F2] hover:bg-[#E5E9E1] transition-colors"><ArrowLeft className="w-4 h-4" /> Back to properties</button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <article className="relative bg-white w-full overflow-hidden">
        
        {/* Modal Hero Image */}
        <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] w-full bg-gray-900 rounded-2xl overflow-hidden">
          {galleryImages.length > 0 ? <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Expand property photograph"
            className="absolute inset-0 h-full w-full cursor-zoom-in"
          >
            <img
              src={galleryImages[activeImage] || galleryImages[0]}
              alt={property.title + " — photograph " + (activeImage + 1)}
              className="h-full w-full object-cover"
            />
          </button> : <div className="w-full h-full grid place-items-center text-sm text-white/70">Property photographs coming soon</div>}
{galleryImages.length > 1 && <>
  <button type="button" onClick={showPrevious} aria-label="Previous property photograph" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black"><ChevronLeft className="w-5 h-5" /></button>
  <button type="button" onClick={showNext} aria-label="Next property photograph" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black"><ChevronRight className="w-5 h-5" /></button>
  <div className="absolute bottom-3 right-4 rounded-full bg-black/65 px-2.5 py-1 text-[11px] text-white">{activeImage + 1} / {galleryImages.length}</div>
</>}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252223]/80 via-transparent to-transparent" />
          
          {/* Tag Notice in Lime Green #8ABE4B */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] rounded-md shadow-xs">
              {property.sampleTypeBadge}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs font-bold text-[#8ABE4B] uppercase tracking-wider block mb-0.5">
              {property.category} Portfolio · {property.status}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {property.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-6 sm:py-8 lg:py-10 space-y-7 sm:space-y-9 max-w-5xl mx-auto">
          
          {galleryImages.length > 1 && <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" aria-label="Property photographs">
            {galleryImages.map((image, index) => <button key={image + index} type="button" onClick={() => setActiveImage(index)} aria-label={"View photograph " + (index + 1)} aria-current={activeImage === index} className={"shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 " + (activeImage === index ? "border-[#07A757]" : "border-transparent")}>
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>)}
          </div>}
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E9E1] flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#626061]">
              <MapPin className="w-4 h-4 text-[#07A757] shrink-0" />
              <span>{property.location}</span>
            </div>
            <div className="text-base font-bold text-[#252223] tabular-nums">
              Price: {property.price}
            </div>
          </div>

          {property.specs.area && <div className="flex flex-wrap items-center gap-3 border-b border-[#E5E9E1] pb-5"><span className="text-xs font-bold uppercase tracking-wider text-[#626061]">Property Area</span><span className="text-sm font-semibold text-[#252223]">{property.specs.area}</span></div>}
          <div><h4 className="text-xs font-bold uppercase tracking-wider text-[#626061] mb-2">Full Property Description</h4><div className="whitespace-pre-line text-sm leading-relaxed text-[#252223]">{property.description}</div></div>

          {/* Due Diligence Stamp (no border) */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F8F2] shadow-2xs text-xs text-[#252223]">
            <ShieldCheck className="w-4 h-4 text-[#07A757] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#07A757]">Demola Adetola &amp; Co. Due Diligence Protocol:</strong> All properties handled or managed by our firm are subject to appropriate checks, including land registry searches, verification of Governor’s Consent where applicable, and physical boundary confirmation.
            </div>
          </div>



        </div>

        <div className="pb-8 pt-2"><button type="button" onClick={() => { onClose(); onInquire(property); }} className="inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] shadow-2xs transition-colors hover:bg-[#07A757] hover:text-white"><span>Book Private Inspection / Valuation</span><ArrowRight className="h-3.5 w-3.5" /></button></div>

      </article>
      </div>

      {isLightboxOpen && galleryImages.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={property.title + " photo gallery"}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button type="button" onClick={() => setIsLightboxOpen(false)} aria-label="Close photo viewer" className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25">Close</button>
          {galleryImages.length > 1 && (
            <>
              <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous photograph" className="absolute left-2 sm:left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30"><ChevronLeft className="h-6 w-6" /></button>
              <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next photograph" className="absolute right-2 sm:right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30"><ChevronRight className="h-6 w-6" /></button>
            </>
          )}
          <img src={galleryImages[activeImage]} alt={property.title + " — photograph " + (activeImage + 1)} onClick={(event) => event.stopPropagation()} className="max-h-[88vh] max-w-full select-none object-contain" draggable={false} />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">{activeImage + 1} / {galleryImages.length}</div>
        </div>
      )}
    </main>
  );
};
