import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, Truck, Droplets } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onViewServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onViewServicesClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Subtle radial ambient spotlight (amber/gold warmth, restrained) */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with dot separator - NO PILL */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Mobile Detailing</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">Austin & Surrounding Areas</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Driveway & Office Service</span>
            </div>

            {/* Display Headline with text-wrap balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Your Car.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Completely Transformed.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl [text-wrap:pretty]">
              Showroom-grade mobile auto detailing delivered directly to your driveway or workplace. 
              We bring 100 gallons of spot-free deionized water, whisper-quiet power, and certified paint-correction chemistry. 
              No waiting in lines. No rushed car-wash scratches.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all rounded-lg shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <span>Book Your Detail</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewServicesClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 active:scale-[0.98] transition-all rounded-lg cursor-pointer"
              >
                <span>View Services & Pricing</span>
              </button>
            </div>

            {/* Trust highlights strip (clean unboxed text & tabular figures) */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-white ml-1 tabular-nums">4.9/5</span>
                </div>
                <div className="text-xs text-neutral-400 mt-1">Customer rating</div>
              </div>

              <div>
                <div className="text-sm font-bold text-white tabular-nums">500+</div>
                <div className="text-xs text-neutral-400 mt-0.5">Vehicles detailed</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>100% Mobile</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">We come to you</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Insured & Certified</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Paint-safe methods</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/80 group">
              {/* High-fidelity car detailing hero image */}
              <img
                src="/src/assets/images/hero_luxury_detail_1791333329105.jpg"
                alt="Luxury coupe undergoing precision paint correction and ceramic finish under inspection lighting"
                className="w-full aspect-[4/3] lg:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Subtle visual caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="font-medium text-white">Precision Paint Decontamination & Ceramic Shield</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Droplets className="w-3.5 h-3.5 text-amber-400" />
                  <span>Spot-Free Water</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
