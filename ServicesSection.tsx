import React from 'react';
import { Check, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, ServicePackage } from '../data/detailingData';

interface ServicesSectionProps {
  onSelectService: (service: ServicePackage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-neutral-900 bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Our Service Packages</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">Transparent Mobile Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Tailored Care For Every Vehicle.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed [text-wrap:pretty]">
            Every treatment is performed using pH-neutral chemistry, clean microfiber towels dedicated to each panel, 
            and spot-free deionized water that leaves zero mineral stains.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const isFeatured = service.isPopular;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col rounded-2xl p-6 transition-all duration-200 border ${
                  isFeatured
                    ? 'bg-neutral-900/90 border-amber-500/50 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/30'
                    : 'bg-neutral-950/80 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                {/* Featured indicator (clean text banner, not a pill sandwich) */}
                {isFeatured && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                {/* Service Name & Tagline */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>

                {/* Pricing Block */}
                <div className="pb-5 mb-5 border-b border-neutral-800">
                  <div className="flex items-baseline gap-1">
                    {service.priceSuffix && (
                      <span className="text-xs text-neutral-400 font-normal">
                        {service.priceSuffix}
                      </span>
                    )}
                    <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                      ${service.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Included Checklist */}
                <div className="flex-1 space-y-2.5 mb-6">
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Included in service:
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span className="leading-snug text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isFeatured
                      ? 'bg-amber-500 text-black hover:bg-amber-400 shadow-md shadow-amber-500/20 active:scale-[0.98]'
                      : 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 hover:text-white border border-neutral-700 active:scale-[0.98]'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note on vehicles sizing */}
        <div className="mt-8 p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/30 text-xs text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Pricing shown reflects standard coupes and sedans. Medium SUVs and trucks have a modest +$15–$25 surface surcharge.</span>
          </div>
          <span className="text-neutral-500 shrink-0">No travel fees within 25 miles of Austin</span>
        </div>
      </div>
    </section>
  );
};
