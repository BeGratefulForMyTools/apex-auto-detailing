import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface ShowcaseTab {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  details: string[];
}

const SHOWCASES: ShowcaseTab[] = [
  {
    id: 'paint',
    title: 'Paint Correction & Swirl Removal',
    subtitle: 'Black Clear Coat Enhancement',
    image: '/src/assets/images/before_after_exterior_1791333340728.jpg',
    beforeLabel: 'Heavy Swirls & Oxidation',
    afterLabel: 'Mirror Depth & Ceramic Finish',
    description: 'Years of automatic car washes inflict microscopic spiderweb scratches that diffuse sunlight and make dark paint look hazy gray. Our single-stage dual-action machine polish eliminates up to 75% of clear-coat defects.',
    details: [
      'Chemical iron decontamination & clay bar prep',
      'Dual-action machine correction with diminishing abrasives',
      'Restores authentic mirror reflection and paint depth',
    ],
  },
  {
    id: 'interior',
    title: 'Cockpit & Leather Deep Extraction',
    subtitle: 'Full Cabin Sanctuary Reset',
    image: '/src/assets/images/interior_deep_clean_1791333351611.jpg',
    beforeLabel: 'Grime, Body Oils & Dirt',
    afterLabel: 'Matte OEM Texture Restored',
    description: 'Factory leather is designed to have a soft, non-glossy satin finish. Over time, sunscreen, skin oils, and dust leave leather looking shiny, greasy, and stiff. Our steam extraction dissolves dirt without drying out stitching.',
    details: [
      '210°F pressurized vapor steam through air vents and seat seams',
      'Heated extraction removes embedded beverage stains and soil',
      'UV inhibitors applied to prevent future vinyl & leather cracking',
    ],
  },
  {
    id: 'ceramic',
    title: 'Hydrophobic Ceramic Shield',
    subtitle: 'Nanotech Surface Tension',
    image: '/src/assets/images/ceramic_coating_beading_1791333360906.jpg',
    beforeLabel: 'Sheet Water Staining',
    afterLabel: 'Self-Cleaning Water Beading',
    description: 'Standard waxes melt away in Texas heat within 3 weeks. A professional 9H ceramic coating chemically crosslinks to the clear coat, creating an ultra-slick surface where water, road grime, and bird droppings bead and roll off.',
    details: [
      '110° water contact angle ensures instant water runoff',
      'Resistant to road salt, industrial fallout, and acidic bug residue',
      'Wash your car in half the time with minimal effort',
    ],
  },
];

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('paint');
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const currentShowcase = SHOWCASES.find((s) => s.id === activeTab) || SHOWCASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 md:py-28 border-b border-neutral-900 bg-[#0b0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Visual Evidence</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">Real Detailing Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Witness The Transformation.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed [text-wrap:pretty]">
            Drag the interactive slider to inspect before and after conditions across key automotive surfaces. 
            We restore depth, clarity, and protection that factory clear coats deserve.
          </p>
        </div>

        {/* Tab Selector (interactive functional buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-neutral-900/80 border border-neutral-800 rounded-xl w-fit">
          {SHOWCASES.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setSliderPos(50);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-black shadow-sm font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Slider Area */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => {
                isDragging.current = true;
              }}
              onMouseUp={() => {
                isDragging.current = false;
              }}
              onMouseLeave={() => {
                isDragging.current = false;
              }}
              onMouseMove={handleMouseMove}
              onTouchStart={() => {
                isDragging.current = true;
              }}
              onTouchEnd={() => {
                isDragging.current = false;
              }}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 select-none cursor-ew-resize shadow-2xl"
              role="slider"
              aria-label="Before and after transformation slider"
              aria-valuenow={sliderPos}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(5, p - 5));
                if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(95, p + 5));
              }}
            >
              {/* After Image (Full background) */}
              <img
                src={currentShowcase.image}
                alt={`${currentShowcase.title} after treatment`}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Overlay with CSS clip-path or width mask */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={currentShowcase.image}
                  alt={`${currentShowcase.title} before treatment`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    // Apply subtle desaturation/contrast adjustment to simulate untreated dull paint / swirl haze on the left
                    filter: 'contrast(0.75) brightness(0.85) saturate(0.7) blur(0.5px)',
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle before overlay haze tint */}
                <div className="absolute inset-0 bg-neutral-900/25 pointer-events-none" />
              </div>

              {/* Clean Labels (Unboxed, accessible) */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="text-[11px] font-semibold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                  Before
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="text-[11px] font-semibold text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30 uppercase tracking-wider">
                  After Detail
                </span>
              </div>

              {/* Divider Line & Draggable Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-0.5 h-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-black/80 ring-2 ring-white/20 pointer-events-auto cursor-grab active:cursor-grabbing">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Instructions hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-[11px] text-neutral-300 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Drag slider or click anywhere to compare</span>
              </div>
            </div>
          </div>

          {/* Right Explanation Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                {currentShowcase.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                {currentShowcase.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {currentShowcase.description}
            </p>

            <div className="space-y-3 pt-3 border-t border-neutral-800">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Treatment Execution:
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {currentShowcase.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
