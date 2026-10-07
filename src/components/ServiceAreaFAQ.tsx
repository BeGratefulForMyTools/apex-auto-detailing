import React, { useState } from 'react';
import { MapPin, ChevronDown, Check, Compass, Car, Sparkles } from 'lucide-react';
import { SERVICE_AREAS, FAQ_ITEMS } from '../data/detailingData';

export const ServiceAreaFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="service-area" className="py-20 md:py-28 border-b border-neutral-900 bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Service Area */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Coverage Area</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
                We Come To Your Location.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                Apex operates a fully mobile detailing fleet covering the greater Austin metropolitan region. 
                Whether parked in your suburban driveway, apartment parking complex, or executive workplace garage, 
                we handle everything without disturbing your day.
              </p>
            </div>

            {/* List of covered neighborhoods */}
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-300 pb-3 border-b border-neutral-900">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Primary Service Zones</span>
                </span>
                <span className="text-amber-400">Zero Travel Fee</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-900 text-[11px] text-neutral-500 flex items-center justify-between">
                <span>Outside 25-mile radius?</span>
                <span className="text-neutral-400">Custom fleet quote available</span>
              </div>
            </div>

            {/* Quick feature callout */}
            <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-xs text-neutral-300">
                <span className="font-semibold text-white">Driveway & Workplace Friendly:</span> We work quietly while you work or relax with family. You only hand us the keys.
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div id="faq" className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Common Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
                Frequently Asked Questions.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                Everything you need to know about our mobile process, equipment, and satisfaction guarantee.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-neutral-800 bg-neutral-950/70 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-900 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
