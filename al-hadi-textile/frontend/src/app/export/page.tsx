'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import RfqModal from '../../components/RfqModal';
import { 
  Anchor, 
  Globe2, 
  Package, 
  FileCheck, 
  CheckCircle2, 
  Building2, 
  MessageCircle,
  Truck
} from 'lucide-react';
import { WHATSAPP_BUSINESS_NUMBER } from '../../lib/utils';

export default function ExportPage() {
  const [rfqOpen, setRfqOpen] = useState(false);

  const directWhatsAppExportUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    "Salam AL HADI Export Desk, I am an international buyer looking to discuss wholesale container orders and FOB Karachi pricing."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <Navbar onOpenRfq={() => setRfqOpen(true)} />

      {/* Header */}
      <div className="bg-[#161B22] text-[#F9F8F6] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3">
            <Anchor className="w-3.5 h-3.5" /> Global Maritime & Air Logistics
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl">
            B2B Export & Wholesale Operations
          </h1>
          <p className="mt-4 text-base text-gray-300 max-w-2xl leading-relaxed">
            Direct mill supply for global retail chains, hotel procurement groups, and homeware distributors. Container shipments originating from Karachi Port (PKKHI) to worldwide destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Export Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#161B22] font-heading">
              Private Labeling & OEM
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Custom woven care tags, jacquard border logos, brand hangtags, barcode stickers (UPC / EAN-13), and presentation ribbon bales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#161B22] font-heading">
              Incoterms & Freight Options
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Standard FOB Karachi Port (KICT / PICT / SAPT) or Port Qasim (QICT). CIF and CFR freight quotes provided upon request for any seaport.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#161B22] font-heading">
              Complete Documentation
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Certificate of Origin (COO), Form E, commercial invoice, packing list, bill of lading (B/L), and in-house fabric test certificates.
            </p>
          </div>
        </div>

        {/* Container Loading Guide */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
              Logistics Calculation Guide
            </span>
            <h2 className="text-2xl font-bold text-[#161B22] font-heading mt-1">
              Container Cargo Loading Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F9F8F6] p-6 rounded-xl border border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#161B22]">20ft Standard Dry Container (FCL)</span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white text-gray-700">~28 CBM</span>
              </div>
              <ul className="text-xs text-gray-700 space-y-2 font-mono">
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>Kitchen Dishcloths & Towels:</span>
                  <span className="font-bold text-[#161B22]">~22,000 – 26,000 pcs</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>550 GSM Terry Bath Towels:</span>
                  <span className="font-bold text-[#161B22]">~6,000 – 7,000 pcs</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>Hotel Duvet & Sheet Sets:</span>
                  <span className="font-bold text-[#161B22]">~3,000 – 3,400 sets</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span>Blackout Eyelet Curtains:</span>
                  <span className="font-bold text-[#161B22]">~3,800 pairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F9F8F6] p-6 rounded-xl border border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#161B22]">40ft High Cube Container (HQ)</span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white text-gray-700">~68 CBM</span>
              </div>
              <ul className="text-xs text-gray-700 space-y-2 font-mono">
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>Kitchen Dishcloths & Towels:</span>
                  <span className="font-bold text-[#161B22]">~55,000 – 62,000 pcs</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>550 GSM Terry Bath Towels:</span>
                  <span className="font-bold text-[#161B22]">~14,000 – 16,000 pcs</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                  <span>Hotel Duvet & Sheet Sets:</span>
                  <span className="font-bold text-[#161B22]">~7,000 – 8,000 sets</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span>Blackout Eyelet Curtains:</span>
                  <span className="font-bold text-[#161B22]">~8,500 pairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#161B22] text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-heading">
              Ready to Discuss Port Qasim / Karachi Container Rates?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Submit your required quantities, target delivery destination, and fabric specs to receive an official FOB/CIF quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => setRfqOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold transition-all shadow"
            >
              Submit Formal B2B RFQ
            </button>
            <a
              href={directWhatsAppExportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-gray-700 hover:border-white text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B00]" />
              <span>WhatsApp Export Desk</span>
            </a>
          </div>
        </div>

      </div>

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
      />
    </div>
  );
}
