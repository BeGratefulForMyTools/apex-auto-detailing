import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Why Apex', href: '#why-apex' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b0d11]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-[#0b0d11]/40 backdrop-blur-xs border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand wordmark (single element, clean display type) */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors flex items-center gap-2 group whitespace-nowrap"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform" />
          <span className="font-display">Apex Auto Detailing</span>
        </a>

        {/* Zone 2: 4-6 nav links (clean text with hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+15125550192"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            title="Call or text Apex Auto Detailing"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="tabular-nums">(512) 555-0192</span>
          </a>

          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400 active:scale-95 transition-all rounded-lg shadow-md shadow-amber-500/10 cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1016] border-b border-neutral-800 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href="tel:+15125550192"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call (512) 555-0192</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-black bg-amber-500 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Service</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
