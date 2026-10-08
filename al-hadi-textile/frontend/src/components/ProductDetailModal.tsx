'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types';
import SpecTable from './SpecTable';
import { generateWhatsAppOrderUrl, logLeadToBackend } from '../lib/utils';
import { 
  X, 
  MessageCircle, 
  Plus, 
  Minus, 
  Check, 
  Share2, 
  Building2, 
  Layers
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenRfq: (productName?: string) => void;
}

export default function ProductDetailModal({ product, onClose, onOpenRfq }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const whatsAppUrl = generateWhatsAppOrderUrl(product, quantity);

  const handleWhatsAppClick = () => {
    logLeadToBackend({
      productId: product.id,
      productName: product.name,
      category: product.category,
      gsm: product.gsm,
      quantity,
      customerDevice: 'web_modal_direct'
    });
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin + `/products/${product.slug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-[#FAF9F7] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-5 py-3 border-b border-[#E7E5E1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-[#23282E] text-[#FAF9F7] text-xs font-mono font-bold">
              {product.gsm} GSM
            </span>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyLink}
              title="Copy Product Link"
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Main Visual & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: High-Res Imagery */}
            <div className="lg:col-span-6 space-y-2.5">
              <div className="relative w-full h-72 sm:h-80 bg-white rounded-xl border border-[#E7E5E1] overflow-hidden shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#23282E]/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[10.5px] font-mono">
                  Genuine Mill Production Photo
                </div>
              </div>

              {/* Manufacturing badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-lg border border-[#E7E5E1]">
                  <span className="block text-gray-400 text-[9.5px] uppercase font-bold">Weave</span>
                  <span className="font-semibold text-[#23282E] truncate block text-[11px] mt-0.5">{product.weave.split(' ')[0]}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-[#E7E5E1]">
                  <span className="block text-gray-400 text-[9.5px] uppercase font-bold">Shrinkage</span>
                  <span className="font-semibold text-[#23282E] truncate block text-[11px] mt-0.5">{product.shrinkage.split(' ')[0]}</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-[#E7E5E1]">
                  <span className="block text-gray-400 text-[9.5px] uppercase font-bold">Fastness</span>
                  <span className="font-semibold text-[#23282E] truncate block text-[11px] mt-0.5">{product.colorFastness.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & WhatsApp CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EEF2EE] text-[#2D4030] text-[10.5px] font-semibold uppercase tracking-wider mb-1.5">
                  <Layers className="w-3 h-3" /> 100% Export-Grade Mill Run
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-[#23282E] font-heading leading-tight">
                  {product.name}
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Quantity Counter & WhatsApp Direct Order Box */}
              <div className="bg-white p-4 rounded-xl border-2 border-[#FD7803]/30 shadow-sm space-y-3">
                
                <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
                  <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Order / Sample Quantity
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Export MOQ: {product.moq}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      onClick={handleDecrement}
                      className="p-1.5 hover:bg-gray-200 transition-colors text-gray-700"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center text-xs font-bold font-mono text-[#23282E]">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="p-1.5 hover:bg-gray-200 transition-colors text-gray-700"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="space-y-1.5">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="whatsapp-glow-btn w-full py-3 px-4 rounded-xl bg-[#FD7803] hover:bg-[#E66B00] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>Order {quantity} Piece(s) via WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-center text-gray-500">
                    ⚡ Instant WhatsApp link generates automated specs for fast mill confirmation.
                  </p>
                </div>

                {/* Secondary Wholesale RFQ Action */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-600">Need bulk container rates?</span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenRfq(product.name);
                    }}
                    className="text-[11px] font-bold text-[#23282E] hover:text-[#FD7803] transition-colors flex items-center gap-1 underline underline-offset-2"
                  >
                    <Building2 className="w-3 h-3 text-[#FD7803]" />
                    <span>Request B2B RFQ</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Full Technical Spec Table */}
          <div className="pt-2">
            <h2 className="text-base font-bold text-[#23282E] font-heading mb-2 flex items-center gap-2">
              <span>Fabric Technical Spec Sheet</span>
              <span className="text-[11px] font-mono font-normal text-gray-500">({product.dimensions} • {product.gsm} GSM)</span>
            </h2>
            <SpecTable product={product} />
          </div>

        </div>

      </div>

    </div>
  );
}
