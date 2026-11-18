import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

export type ClientReview = {
  id: string;
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

/**
 * Add only reviews verified against DAC's Google Business Profile.
 * Official API credentials and a testimonial CMS are not configured yet.
 */
const verifiedReviews: ClientReview[] = [];
const googleReviewsUrl = 'https://share.google/p4Zpu2JD87qImOjDX';

export const ClientTestimonialsSection: React.FC = () => (
  <section aria-labelledby="client-testimonials-heading" className="border-y border-[#E5E9E1] bg-white py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
        <h2 id="client-testimonials-heading" className="text-3xl font-bold tracking-tight text-[#252223] sm:text-4xl">What Our Clients Say</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#626061] sm:text-base">Trusted relationships built through professional service and experience.</p>
      </div>

      {verifiedReviews.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {verifiedReviews.map((review) => (
            <article key={review.id} className="flex h-full flex-col rounded-xl border border-[#E5E9E1] bg-[#F8F9F7] p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={15} className={index < review.rating ? 'fill-[#8ABE4B] text-[#8ABE4B]' : 'text-[#D5D9D1]'} />
                ))}
              </div>
              <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-[#4F4D4D]">“{review.text}”</p>
              <div className="mt-6 flex items-end justify-between gap-3 border-t border-[#E5E9E1] pt-4">
                <div>
                  <p className="text-sm font-bold text-[#252223]">{review.reviewerName}</p>
                  {review.date && <p className="mt-1 text-[11px] text-[#777474]">{review.date}</p>}
                </div>
                <span className="shrink-0 text-xs font-semibold text-[#626061]">Google</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-3xl rounded-xl border border-[#E5E9E1] bg-[#F8F9F7] px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE5D4] bg-white text-[#8ABE4B]">
            <Star size={19} />
          </div>
          <h3 className="text-base font-bold text-[#252223]">Read feedback from our clients on Google</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#626061]">Visit DAC’s Google Business Profile to read customer reviews and see the original feedback directly from Google.</p>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#8ABE4B] bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#252223] transition-colors hover:bg-[#8ABE4B]">
            View Google Reviews <ExternalLink size={14} />
          </a>
        </div>
      )}

      {verifiedReviews.length > 0 && (
        <div className="mt-8 text-center">
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#527C32] transition-colors hover:text-[#07A757]">
            View all reviews on Google <ExternalLink size={14} />
          </a>
        </div>
      )}
    </div>
  </section>
);
