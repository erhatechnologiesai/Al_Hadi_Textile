'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BUSINESS_NUMBER } from '../lib/utils';

export default function FloatingWhatsApp() {
  const defaultUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    "Salam AL HADI Textiles! I am inquiring directly from your website regarding products, rates, or custom weaving orders."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Order Line"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF6B00] border-2 border-white"></span>
        </span>

        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      {/* Hover pill */}
      <div className="absolute right-16 bottom-2 hidden group-hover:flex items-center px-3 py-1.5 rounded-lg bg-[#161B22] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-all">
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2"></span>
        Direct Mill WhatsApp Line Active
      </div>
    </div>
  );
}
