'use client';

import React from 'react';
import { Product } from '../types';
import { generateWhatsAppOrderUrl, logLeadToBackend } from '../lib/utils';
import { MessageCircle, Eye, Ruler, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    logLeadToBackend({
      productId: product.id,
      productName: product.name,
      category: product.category,
      gsm: product.gsm,
      quantity: 1,
      customerDevice: 'web_card_click'
    });
  };

  const whatsAppUrl = generateWhatsAppOrderUrl(product, 1);

  return (
    <div className="group bg-white rounded-2xl border border-[#E7E5E1] hover:border-[#FD7803] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Product Image Container with Guaranteed Height */}
      <div className="relative w-full h-56 sm:h-64 bg-[#F3F1EC] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Floating Technical GSM Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#23282E]/90 backdrop-blur-xs text-[#FAF9F7] text-xs font-bold font-mono tracking-tight shadow">
            {product.gsm} GSM
          </span>
          {product.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FD7803] text-white text-[9.5px] font-bold uppercase tracking-wider shadow">
              <Sparkles className="w-2.5 h-2.5 fill-white" /> Featured
            </span>
          )}
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#23282E] text-[11px] font-semibold tracking-wide border border-gray-200 shadow-2xs">
            {product.category}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-[#23282E]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => onOpenDetails(product)}
            className="px-4 py-2 rounded-lg bg-white text-[#23282E] text-xs font-bold shadow-lg hover:bg-[#FAF9F7] hover:text-[#FD7803] transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-1.5"
          >
            <Eye className="w-4 h-4 text-[#FD7803]" />
            <span>Inspect Fabric Specs</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Weave technique pill & MOQ */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold text-[#2D4030] bg-[#EEF2EE] px-2 py-0.5 rounded uppercase tracking-wider">
              {product.weave.split(' ')[0]} Weave
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-[11px] text-gray-500 font-mono truncate">
              MOQ: {product.moq}
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onOpenDetails(product)}
            className="text-sm sm:text-base font-bold text-[#23282E] group-hover:text-[#FD7803] transition-colors cursor-pointer font-heading line-clamp-1 leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Fabric Description */}
          <p className="mt-1.5 text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Micro Specs */}
          <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-mono">
            <span className="truncate max-w-[140px]" title={product.fabric}>
              {product.fabric.split(',')[0]}
            </span>
            <span className="flex items-center gap-1 shrink-0 font-medium text-gray-800">
              <Ruler className="w-3.5 h-3.5 text-gray-400" />
              {product.dimensions}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-[#E7E5E1] flex items-center gap-2">
          {/* Inspect Button */}
          <button
            onClick={() => onOpenDetails(product)}
            className="py-2.5 px-3 rounded-lg border border-[#E7E5E1] hover:bg-[#FAF9F7] text-[#23282E] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-gray-500" />
            <span>Specs</span>
          </button>

          {/* Direct WhatsApp CTA Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex-1 py-2.5 px-3 rounded-lg bg-[#FD7803] hover:bg-[#E66B00] text-white text-xs font-bold transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 text-center"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span className="whitespace-nowrap">Order via WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
}
