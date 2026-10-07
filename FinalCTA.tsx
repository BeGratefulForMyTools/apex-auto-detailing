import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#090b0e] to-[#0b0d11] border-b border-neutral-900 relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-amber-500/5 blur-[100px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mobile Showroom Finish</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
          Ready To Bring Your Car Back To Life?
        </h2>

        <p className="text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
          Experience the convenience of certified auto care delivered directly to your doorstep. 
          Book your slot today and fall in love with your vehicle all over again.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 active:scale-95 transition-all rounded-lg shadow-xl shadow-amber-500/20 cursor-pointer"
          >
            <span>Book Your Detail Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+15125550192"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Call (512) 555-0192</span>
          </a>
        </div>
      </div>
    </section>
  );
};
