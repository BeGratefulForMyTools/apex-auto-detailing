import React from 'react';
import { Star, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/detailingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 border-b border-neutral-900 bg-[#0b0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Customer Feedback</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">Demonstration Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Trusted By Detail Purists.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed [text-wrap:pretty]">
            Read what drivers experience when Apex arrives on-site. We take pride in spotless paint, 
            odors removed at the source, and professional, respectful service.
          </p>
        </div>

        {/* Portfolio Demo Notice Banner (Explicitly meeting the prompt requirement) */}
        <div className="mb-10 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <div className="text-xs text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-200">Portfolio Demo Notice:</span> The reviews and testimonials displayed below are realistic sample scenarios designed to illustrate the client experience for this web design portfolio concept. They represent typical detailing use cases (pet hair removal, swirl correction, and ceramic protection).
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Star rating & date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500 tabular-nums">
                    {review.date}
                  </span>
                </div>

                {/* Highlight callout */}
                <div className="text-xs font-semibold text-amber-400 mb-2">
                  &ldquo;{review.highlight}&rdquo;
                </div>

                {/* Quote body */}
                <blockquote className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Vehicle metadata (clean unboxed text) */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {review.vehicle}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {review.serviceUsed} · {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
