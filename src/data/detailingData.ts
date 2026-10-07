export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  priceSuffix?: string;
  duration: string;
  tagline: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  bestFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  serviceUsed: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'full-detail',
    name: 'Full Interior & Exterior Detail',
    price: 120,
    duration: '3.5 – 4.0 Hours',
    tagline: 'Complete bumper-to-bumper deep restoration',
    description: 'Our most requested mobile package. Thoroughly resets every interior crevice and revitalizes exterior paintwork with protective sealant.',
    isPopular: true,
    bestFor: 'Vehicles needing a complete reset or prep for resale/daily pride',
    features: [
      'Two-bucket foam bath & wheel barrel de-ironing',
      'Clay mitt paint decontamination & hand dried',
      'High-gloss synthetic paint sealant (3-month protection)',
      'Deep interior carpet & upholstery extraction vacuuming',
      'Steam sanitation of vents, cup holders & high-touch areas',
      'Leather cleaned & treated with UV matte protectant',
      'Door jambs, boot shuts & fuel cap deep cleaned',
      'Streak-free glass inside & out plus satin tire dressing',
    ],
  },
  {
    id: 'interior-deep-clean',
    name: 'Interior Deep Clean',
    price: 75,
    duration: '2.0 – 2.5 Hours',
    tagline: 'Spotless cabin rejuvenation & stain treatment',
    description: 'A focused, surgical treatment targeting dirt, embedded sand, pet dander, coffee spills, and cabin odors.',
    isPopular: false,
    bestFor: 'Spills, pet hair, dirt accumulation, or seasonal cabin refresh',
    features: [
      'Heavy-duty compressed air crevice blowout',
      'Multi-stage heated fabric & carpet spot extraction',
      'Drill-brush treatment for high-traffic floor mats',
      'Leather, vinyl & trim cleanse with pH-neutral soap',
      'Non-greasy matte UV protectant applied to dashboard & doors',
      'AC ventilation steam flush & antibacterial deodorizing',
      'Interior glass cleaned to optical clarity',
      'Door pockets, center console & trunk detailed',
    ],
  },
  {
    id: 'exterior-detail',
    name: 'Exterior Detail',
    price: 60,
    duration: '1.5 – 2.0 Hours',
    tagline: 'Paint decontamination, gloss boost & protection',
    description: 'Gentle, swirl-free exterior care that removes road grime, bugs, and brake dust while locking in high-gloss hydrophobic protection.',
    isPopular: false,
    bestFor: 'Routine exterior maintenance & preserving clear coat integrity',
    features: [
      'Pre-wash citrus bug & road grime soak',
      'pH-balanced snow foam hand wash (scratch-free mitts)',
      'Wheels, arches, calipers & exhaust tips cleaned',
      'Iron chemical decontamination to dissolve brake dust',
      'Spot-free deionized water rinse (zero mineral spots)',
      'Warm filtered air drying (no towel friction on paint)',
      'Spray sealant applied for slick hydrophobic beading',
      'Long-lasting sling-free satin tire dressing',
    ],
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    price: 250,
    priceSuffix: 'from',
    duration: '5.0 – 6.0 Hours',
    tagline: 'Professional 9H nanotech clear coat armor',
    description: 'The ultimate investment in your paint. Includes single-stage machine paint enhancement to remove micro-swirls before applying durable 9H ceramic bond.',
    isPopular: false,
    bestFor: 'Enthusiasts, new car deliveries, and multi-year paint protection',
    features: [
      'Comprehensive multi-step exterior wash & chemical strip',
      'Mechanical clay bar treatment to remove embedded grit',
      'Single-stage machine polish (removes 60–75% of micro-swirls)',
      'Isopropyl alcohol surface wipe down for optimal bonding',
      'Professional 9H ceramic coating applied to all painted panels',
      '2 to 3 years of self-cleaning hydrophobic water contact angle',
      'Extreme chemical resistance (bird droppings, tree sap, UV rays)',
      'Includes complimentary 30-day inspection & maintenance kit',
    ],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Marcus Vance',
    location: 'Westlake Hills',
    vehicle: '2023 Porsche 911 Carrera S',
    serviceUsed: 'Ceramic Coating & Paint Correction',
    rating: 5,
    date: '3 weeks ago',
    quote: 'Apex came right to my garage while I was working from home. The paint depth on my 911 looks deeper than the day I took delivery from the dealer. The water beading is ridiculous, and the technician was courteous, punctual, and meticulous.',
    highlight: 'Deeper finish than dealer delivery day',
  },
  {
    id: 'review-2',
    author: 'Sarah Jenkins',
    location: 'Downtown / Rainey',
    vehicle: '2022 Volvo XC90',
    serviceUsed: 'Full Interior & Exterior Detail',
    rating: 5,
    date: '1 month ago',
    quote: 'With two young toddlers and a golden retriever, our backseat was a disaster zone of crushed pretzels and hair. Apex worked magic for 4 hours in our driveway. Not a single trace of dog hair remains, and it smells like a brand-new car.',
    highlight: 'Complete miracle on toddler & pet hair mess',
  },
  {
    id: 'review-3',
    author: 'David Ramirez',
    location: 'Domain / North Austin',
    vehicle: '2021 BMW M3 Competition',
    serviceUsed: 'Full Detail & Engine Bay',
    rating: 5,
    date: '2 weeks ago',
    quote: 'The level of care is unmatched. They brought their own spotless deionized water so zero hard water spots were left on my dark sapphire metallic paint. Transparent communication and worth every penny.',
    highlight: 'Zero water spots and surgical attention to detail',
  },
];

export const SERVICE_AREAS = [
  'Central Austin',
  'Westlake & Barton Creek',
  'Downtown & Rainey',
  'The Domain & North Hills',
  'Lakeway & Bee Cave',
  'Round Rock',
  'Cedar Park',
  'Pflugerville & Mueller',
];

export const FAQ_ITEMS = [
  {
    question: 'Do I need to supply water or electricity at my location?',
    answer: 'No. Our custom mobile detailing rig is completely self-contained with 100 gallons of filtered, deionized spot-free water and a whisper-quiet Honda onboard power unit. We can detail at your private driveway, condo parking stall, or office parking garage.',
  },
  {
    question: 'How far in advance do I need to book?',
    answer: 'We typically schedule 24 to 48 hours in advance, though same-day openings occasionally become available due to route efficiency. You can pick your preferred date and time window directly on this page.',
  },
  {
    question: 'What is your inclement weather policy?',
    answer: 'If severe rain, high winds, or freezing weather makes exterior work unfeasible and you do not have an enclosed garage, we will reschedule your booking to the next available dry day at no fee.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, Apple Pay, Google Pay, Zelle, and cash upon inspection of your completed vehicle. We never charge prior to completing the job to your 100% satisfaction.',
  },
];
