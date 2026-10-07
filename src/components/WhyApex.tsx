import React from 'react';
import { Truck, ShieldCheck, Search, CalendarCheck, Droplets, Zap } from 'lucide-react';

export const WhyApex: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: '100% Autonomous Mobile Rig',
      subtitle: 'Zero Reliance On Your Utilities',
      icon: Truck,
      description:
        'We never ask for your garden hose or an electrical outlet. Our specialized Mercedes Sprinter rig carries 100 gallons of deionized, mineral-free spot-free water and a low-decibel Honda generator. Detail anywhere: high-rise condo parking, corporate offices, or your home driveway.',
      tag: 'Self-Sufficient Service',
    },
    {
      number: '02',
      title: 'Studio-Grade Chemistry & Tools',
      subtitle: 'Zero Scratches, Guaranteed',
      icon: ShieldCheck,
      description:
        'Commercial drive-thru car washes use recycled abrasive water and caustic acids that strip clear coats. We rely strictly on pH-neutral snow foams, dual-action random orbital polishers, dedicated 600 GSM microfiber towels for each surface, and authentic 9H ceramic formulations.',
      tag: 'Certified Paint Care',
    },
    {
      number: '03',
      title: 'Obsessive Crevice & Detail Craft',
      subtitle: 'What Others Skip, We Master',
      icon: Search,
      description:
        'Detailing is not a quick wash. We clean every overlooked millimeter: rubber weather-stripping, air conditioning louvers, steering wheel stitching, seat rails, interior cubbies, fuel caps, wheel barrels, and brushed emblems using horsehair brushes and pressurized steam.',
      tag: 'Micro-Detail Focus',
    },
    {
      number: '04',
      title: 'Effortless 2-Minute Booking',
      subtitle: 'Transparent Pricing & Fast Support',
      icon: CalendarCheck,
      description:
        'No phone tag, no vague estimates, and no surprise mobile dispatch fees. Choose your package, select your time slot, receive instant SMS arrival reminders, and inspect the vehicle before paying. Direct WhatsApp support for quick questions anytime.',
      tag: 'Frictionless Experience',
    },
  ];

  return (
    <section id="why-apex" className="py-20 md:py-28 border-b border-neutral-900 bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>The Apex Standard</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">Why Discerning Drivers Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Craftsmanship Over Speed.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed [text-wrap:pretty]">
            We treat every daily driver, luxury sedan, and exotic supercar with the exact same 
            surgical standard: unhurried, meticulous, and completely safe for your vehicle’s delicate materials.
          </p>
        </div>

        {/* 4 Pillars Grid (Bento style with editorial numbering) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group p-8 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-200 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata line with editorial number */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-900">
                    <span className="text-xs font-bold text-amber-400 font-mono tabular-nums tracking-widest">
                      {pillar.number}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-800 shrink-0 group-hover:border-amber-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed mt-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom subtle detail highlight */}
                <div className="mt-6 pt-4 border-t border-neutral-900/80 flex items-center gap-3 text-xs text-neutral-400">
                  <div className="flex items-center gap-1 text-neutral-300">
                    <Droplets className="w-3.5 h-3.5 text-amber-400" />
                    <span>0% Minerals</span>
                  </div>
                  <span className="text-neutral-700">·</span>
                  <div className="flex items-center gap-1 text-neutral-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Silent Power</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
