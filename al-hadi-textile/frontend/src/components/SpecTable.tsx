import React from 'react';
import { Product } from '../types';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SpecTableProps {
  product: Product;
}

export default function SpecTable({ product }: SpecTableProps) {
  const specs = [
    { label: "Fabric Composition", value: product.fabric },
    { label: "Yarn Construction", value: product.yarnCount },
    { label: "Fabric Weight (GSM)", value: `${product.gsm} GSM (Grams / sq. meter)` },
    { label: "Finished Dimensions", value: product.dimensions },
    { label: "Weaving Technique", value: product.weave },
    { label: "Shrinkage Tolerance", value: product.shrinkage },
    { label: "Colorfastness Rating", value: product.colorFastness },
    { label: "Hem & Stitch Finish", value: product.hemFinish },
    { label: "Standard Packaging", value: product.packSize },
    { label: "Export MOQ", value: product.moq },
  ];

  return (
    <div className="w-full bg-white border border-[#E7E5E1] rounded-xl overflow-hidden shadow-sm">
      <div className="bg-[#23282E] text-[#FAF9F7] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FD7803]"></div>
          <span className="text-xs font-bold uppercase tracking-wider font-heading">
            Technical Garment & Fabric Specifications
          </span>
        </div>
        <span className="text-[10px] text-gray-400 font-mono">
          Ref: {product.id}
        </span>
      </div>

      <div className="divide-y divide-[#E7E5E1] text-xs">
        {specs.map((spec, i) => (
          <div 
            key={i} 
            className={`grid grid-cols-1 sm:grid-cols-3 px-4 py-2 transition-colors ${
              i % 2 === 0 ? 'bg-[#FAF9F7]/70' : 'bg-white'
            }`}
          >
            <div className="font-semibold text-gray-600 sm:col-span-1 flex items-center gap-1.5 text-[11px]">
              <span>{spec.label}</span>
            </div>
            <div className="text-[#23282E] font-medium sm:col-span-2 mt-0.5 sm:mt-0 font-mono text-[11px]">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications row */}
      {product.certifications && product.certifications.length > 0 && (
        <div className="bg-[#F3F1EC] px-4 py-2.5 border-t border-[#E7E5E1] flex flex-wrap items-center gap-2">
          <span className="text-[10.5px] font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D4030]" /> Compliance:
          </span>
          {product.certifications.map((cert, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-gray-300 text-[10.5px] font-medium text-gray-800 shadow-2xs"
            >
              <CheckCircle2 className="w-3 h-3 text-[#2D4030]" /> {cert}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
