import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { SERVICES_DATA, ServicePackage } from '../data/detailingData';

interface BookingSectionProps {
  selectedServiceId?: string;
  onServiceChange?: (serviceId: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onServiceChange,
}) => {
  const [serviceId, setServiceId] = useState<string>(selectedServiceId || 'full-detail');
  const [vehicleSize, setVehicleSize] = useState<'sedan' | 'suv' | 'truck'>('sedan');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('08:30');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const currentPackage = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  // Calculate pricing based on vehicle size
  const sizeSurcharge = vehicleSize === 'sedan' ? 0 : vehicleSize === 'suv' ? 15 : 25;
  const totalPrice = currentPackage.price + sizeSurcharge;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!vehicle.trim()) {
      errs.vehicle = 'Please specify your vehicle year, make, and model.';
    }
    if (!date) errs.date = 'Please pick a preferred service date.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `APX-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  // Construct WhatsApp URL
  const whatsappMessage = encodeURIComponent(
    `Hello Apex Auto Detailing! I'd like to book the ${currentPackage.name} for my ${
      vehicle || 'vehicle'
    } on ${date || 'upcoming date'}.`
  );
  const whatsappUrl = `https://wa.me/15125550192?text=${whatsappMessage}`;

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#0b0d11] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Direct Reservation</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">We Come To You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Book Your Mobile Detail.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed [text-wrap:pretty]">
            Select your package and desired time slot. We will confirm via text message within 30 minutes. 
            No upfront deposit required — pay only after inspecting your transformed vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSuccess ? (
              <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Booking Request Received
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    You&apos;re On The Schedule!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Reference ID: <span className="font-mono text-amber-400 font-bold">{bookingRef}</span>. 
                    Our detailing van will arrive at your requested location on <span className="text-white font-medium">{date}</span> around <span className="text-white font-medium">{timeSlot === '08:30' ? '8:30 AM' : timeSlot === '12:30' ? '12:30 PM' : '3:30 PM'}</span>.
                  </p>
                </div>

                {/* Reservation Summary Card */}
                <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-5 text-left max-w-md mx-auto space-y-3 text-xs text-neutral-300">
                  <div className="flex justify-between pb-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Package:</span>
                    <span className="font-medium text-white">{currentPackage.name}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Vehicle:</span>
                    <span className="font-medium text-white">{vehicle} ({vehicleSize.toUpperCase()})</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-neutral-800">
                    <span className="text-neutral-400">Estimated Total:</span>
                    <span className="font-bold text-amber-400 tabular-nums">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Contact:</span>
                    <span className="font-medium text-white">{name} · {phone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quick Confirm via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setName('');
                      setPhone('');
                      setVehicle('');
                      setNotes('');
                    }}
                    className="px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Book Another Vehicle
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Package Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    1. Select Service Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_DATA.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => {
                          setServiceId(pkg.id);
                          if (onServiceChange) onServiceChange(pkg.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          serviceId === pkg.id
                            ? 'bg-amber-500/10 border-amber-500/80 ring-1 ring-amber-500/50 text-white'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-white">{pkg.name}</div>
                          <div className="text-[11px] text-neutral-400">{pkg.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-amber-400 tabular-nums">
                            ${pkg.price}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Vehicle Size Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    2. Vehicle Classification
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'sedan', label: 'Coupe / Sedan', surcharge: '+$0' },
                      { id: 'suv', label: 'Crossover / Mid SUV', surcharge: '+$15' },
                      { id: 'truck', label: 'Truck / 3-Row SUV', surcharge: '+$25' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setVehicleSize(cat.id as any)}
                        className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                          vehicleSize === cat.id
                            ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold'
                            : 'bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <div className="text-xs">{cat.label}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{cat.surcharge}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Personal & Vehicle Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Phone Number (for SMS arrival)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (512) 555-0192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-amber-400" />
                      <span>Year, Make & Model</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2023 Tesla Model Y"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.vehicle ? 'border-red-500' : 'border-neutral-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.vehicle && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.vehicle}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Service Address / Area</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1204 Barton Springs Rd, Austin"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* 4. Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.date ? 'border-red-500' : 'border-neutral-800 focus:border-amber-500'
                      }`}
                    />
                    {errors.date && <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Preferred Arrival Window</span>
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="08:30">Morning Slot (8:30 AM – 9:00 AM)</option>
                      <option value="12:30">Midday Slot (12:30 PM – 1:00 PM)</option>
                      <option value="15:30">Afternoon Slot (3:30 PM – 4:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Special Notes */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Special Requests (Pet hair, child seats, paint defects)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Golden retriever hair in trunk, please also focus on leather driver seat bolster."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Slot...</span>
                  ) : (
                    <>
                      <span>Confirm Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Order Summary & WhatsApp Alternative */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Price Calculator Card */}
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-900">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Summary & Estimated Cost
                </span>
                <span className="text-xs text-amber-400 font-medium">No Deposit Required</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <div className="font-bold text-white">{currentPackage.name}</div>
                    <div className="text-xs text-neutral-400">{currentPackage.duration}</div>
                  </div>
                  <span className="font-semibold text-white tabular-nums">${currentPackage.price}</span>
                </div>

                {sizeSurcharge > 0 && (
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Vehicle Size Adjustment ({vehicleSize.toUpperCase()}):</span>
                    <span className="text-white tabular-nums">+${sizeSurcharge}</span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Mobile Water & Power Surcharge:</span>
                  <span className="text-emerald-400 font-medium">$0 (Free)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-bold text-white">Total Upon Completion:</span>
                  <p className="text-[11px] text-neutral-400">Pay after final inspection</p>
                </div>
                <span className="text-3xl font-extrabold text-amber-400 tabular-nums">
                  ${totalPrice}
                </span>
              </div>

              {/* Guarantees list */}
              <div className="pt-4 border-t border-neutral-900 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>100% Satisfaction or we re-detail on the spot</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Spot-free deionized water rinse guaranteed</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp / SMS Channel Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Prefer Quick Chat or Instant Booking?</span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Skip the web form and text our detailing coordinator directly with your vehicle photos or questions. 
                We reply within 10 minutes during operational hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+15125550192"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>(512) 555-0192</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
