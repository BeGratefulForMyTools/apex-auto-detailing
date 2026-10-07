/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyApex } from './components/WhyApex';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaFAQ } from './components/ServiceAreaFAQ';
import { BookingSection } from './components/BookingSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ServicePackage } from './data/detailingData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('full-detail');

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServicePackage) => {
    setSelectedServiceId(service.id);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onViewServicesClick={scrollToServices}
        />

        {/* Services & Pricing Cards */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Before & After Transformations */}
        <BeforeAfterSection />

        {/* Why Choose Apex & Craftsmanship Pillars */}
        <WhyApex />

        {/* Sample Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* Service Area Map & FAQ */}
        <ServiceAreaFAQ />

        {/* Final Conversion Action */}
        <FinalCTA onBookClick={scrollToBooking} />

        {/* Direct Booking & Scheduling Form */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
