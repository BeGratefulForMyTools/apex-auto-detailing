import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080b] border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="text-lg font-bold text-white font-display tracking-tight">
                Apex Auto Detailing
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Austin’s premier mobile auto detailing service. Bringing certified paint correction, 
              ceramic nanocoatings, and steam interior restoration directly to your private home or workplace.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Service Packages
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Full Interior & Exterior ($120)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Interior Deep Clean ($75)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Exterior Detail ($60)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Ceramic Coating (from $250)
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-amber-400 transition-colors">
                  Paint Correction Results
                </a>
              </li>
            </ul>
          </div>

          {/* Service Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Coverage Territory
            </h4>
            <ul className="space-y-1.5 text-neutral-400">
              <li>Central Austin</li>
              <li>Westlake & Rollingwood</li>
              <li>Downtown & South Congress</li>
              <li>The Domain & Arboretum</li>
              <li>Lakeway & Bee Cave</li>
              <li>Round Rock & Cedar Park</li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Operating Details
            </h4>
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white">Mon – Sat: 8:00 AM – 6:00 PM</div>
                  <div className="text-neutral-500">Sunday: By Appointment</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+15125550192" className="hover:text-white transition-colors tabular-nums">
                  (512) 555-0192
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:service@apexautodetailing.example.com" className="hover:text-white transition-colors">
                  service@apexautodetailing.example.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Austin, Texas & Mobile Metro Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Demo Notice & Copyright strip */}
        <div className="pt-8 border-t border-neutral-900/90 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Apex Auto Detailing. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-neutral-500">
            <strong className="text-neutral-400">Portfolio Showcase:</strong> Apex Auto Detailing is a conceptual showcase website created to demonstrate modern web design, performance, and conversion-focused UI for mobile automotive services.
          </p>
        </div>
      </div>
    </footer>
  );
};
