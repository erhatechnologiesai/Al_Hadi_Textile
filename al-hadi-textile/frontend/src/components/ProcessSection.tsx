'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Droplets, 
  Scissors, 
  ShieldCheck, 
  PackageCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Raw Cotton Fiber & Ring-Spinning",
      sub: "Long-Staple Selection",
      icon: Sparkles,
      desc: "We exclusively procure premium long-staple combed cotton from trusted regional growers. Yarns are spun on computer-regulated ring spinning frames to ensure high tensile strength and minimal hairiness.",
      specs: ["Yarn counts: 10s to 60s Ne", "Low pilling index (< Grade 4)", "Zero contamination sorting"]
    },
    {
      step: "02",
      title: "High-Speed Air-Jet & Rapier Weaving",
      sub: "Loom Precision",
      icon: Layers,
      desc: "Our weaving sheds house electronic jacquard, dobby, and air-jet looms running under strict hygrometric monitoring. This produces clean selvedges, uniform GSM weights, and crisp waffle, damask, or percale densities.",
      specs: ["Widths up to 340 cm", "Weaves: Waffle 3D, Dobby, Jacquard, Twill", "Electronic warp-tension control"]
    },
    {
      step: "03",
      title: "Eco-Friendly Reactive Dyeing",
      sub: "Color Precision & Mercerization",
      icon: Droplets,
      desc: "Pre-treatment through singeing and caustic soda mercerization grants superior luster and dye absorption. We apply OEKO-TEX certified low-impact reactive dyes for Grade 4-5 wash fastness without harsh toxins.",
      specs: ["Azo-free & formaldehyde-free dyes", "Pre-shrunk sanforization (<3%)", "High light & bleach fastness"]
    },
    {
      step: "04",
      title: "Precision Cutting & Lockstitch Hemming",
      sub: "Apparel-Grade Finishing",
      icon: Scissors,
      desc: "Automated length cutting followed by skilled needlework. Every kitchen towel, curtain, and duvet features double-stitched hems, mitred corners, bartacked stress zones, and woven cotton care labels.",
      specs: ["Double-needle chainstitching", "Mitred 90° corners on linens", "Reinforced hanging ribbons & eyelets"]
    },
    {
      step: "05",
      title: "4-Point Quality Inspection & Lab Testing",
      sub: "Zero-Defect Audit",
      icon: ShieldCheck,
      desc: "Every batch is inspected on backlit inspection tables following international 4-Point fabric inspection standards. In-house lab tests GSM weight, dimensional stability after 5 washes, and tear resistance.",
      specs: ["AQL 2.5 export tolerance standard", "Tear & tensile strength testing", "Rubbing fastness (wet & dry)"]
    },
    {
      step: "06",
      title: "Moisture-Proof B2B Export Packaging",
      sub: "Global Container Freight",
      icon: PackageCheck,
      desc: "Final goods are ironed, tagged with customer barcodes, vacuum or poly-wrapped with moisture desiccant packs, and packed into heavy-duty 5-ply export master cartons ready for Karachi Port shipping.",
      specs: ["FOB Karachi & CIF delivery terms", "Custom retail-ready packaging / OEM", "20ft & 40ft HQ container load optimization"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#E7E5E1]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23282E] text-[#FAF9F7] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FD7803]"></span>
            From Cotton Bale to Finished Export Carton
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#23282E] font-heading tracking-tight">
            Craftsmanship & Industrial Mill Standards
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Unlike trading middlemen or generic dropshippers, AL HADI operates integrated spinning, weaving, finishing, and stitching facilities. Inspect our step-by-step manufacturing methodology.
          </p>
        </div>

        {/* Process Step Selector Tabs */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#161B22] text-white border-[#161B22] shadow-md scale-102' 
                    : 'bg-[#F9F8F6] text-[#161B22] border-gray-200 hover:border-gray-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#FF6B00]' : 'text-gray-400'}`}>
                      {st.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF6B00]' : 'text-gray-600'}`} />
                  </div>
                  <h4 className="text-xs font-bold leading-snug line-clamp-2">
                    {st.title}
                  </h4>
                </div>
                <span className={`text-[10px] uppercase tracking-wider mt-3 font-semibold ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                  {st.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="mt-8 bg-[#F9F8F6] rounded-2xl border border-[#E5E7EB] p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-[#FF6B00] font-mono">
                  {steps[activeStep].step}
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                    Manufacturing Stage
                  </span>
                  <h3 className="text-2xl font-bold text-[#161B22] font-heading">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-bold text-[#161B22] uppercase tracking-wider mb-2">
                  Technical Quality Benchmarks:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].specs.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs text-gray-800 font-mono shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-200 space-y-4 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#161B22]">
                Need Custom Weaves or Private Labeling?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We accept OEM custom weaving runs with personalized woven care tags, barcodes, and custom dyes.
              </p>
              <div className="pt-2">
                <a
                  href="/export"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  <span>Explore B2B Export Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
