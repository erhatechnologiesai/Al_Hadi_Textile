import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Globe, 
  Anchor, 
  Clock 
} from 'lucide-react';
import { WHATSAPP_BUSINESS_NUMBER } from '../lib/utils';

export default function Footer() {
  const categoriesList = [
    { name: "Kitchen & Dining Linens", href: "/products?category=kitchen-dining" },
    { name: "Bedding & Comforters", href: "/products?category=bedding-linen" },
    { name: "Luxury Bath & Towels", href: "/products?category=bath-towels" },
    { name: "Curtains & Window Drapes", href: "/products?category=curtains-drapes" },
    { name: "Living & Slipcovers", href: "/products?category=living-slipcovers" }
  ];

  return (
    <footer className="bg-[#23282E] text-[#FAF9F7] border-t border-gray-800">
      
      {/* Upper Credential Strip */}
      <div className="border-b border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-xs">
          
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FD7803] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-white text-xs sm:text-sm">OEKO-TEX® Certified Mill</h5>
              <p className="text-gray-400 mt-0.5 text-[11px]">Free from harmful substances, azo-dyes, and skin irritants.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Anchor className="w-5 h-5 text-[#FD7803] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-white text-xs sm:text-sm">Direct Port Dispatch</h5>
              <p className="text-gray-400 mt-0.5 text-[11px]">FOB / CIF shipments via Karachi Port & Port Qasim container terminals.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-[#FD7803] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-white text-xs sm:text-sm">Exporting to 25+ Nations</h5>
              <p className="text-gray-400 mt-0.5 text-[11px]">Supplying hotel chains, boutique retailers & wholesale distributors.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#FD7803] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-white text-xs sm:text-sm">Rapid Sample Dispatch</h5>
              <p className="text-gray-400 mt-0.5 text-[11px]">Courier sample swatches dispatched within 3-5 business days.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1720px] mx-auto py-10 sm:py-12 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Mill Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 bg-white/10 rounded-xl p-1 border border-gray-700">
                <Image
                  src="/images/logo-clean.png"
                  alt="AL HADI TEXTILES"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading tracking-tight">AL HADI </span>
                <span className="text-xl font-light text-[#FD7803] font-heading tracking-tight">TEXTILES</span>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">Export Mill & Manufacturing • Est. 1994</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              AL HADI operates vertically-integrated spinning, high-speed rapier weaving, and precision stitching lines. We specialize in export-grade kitchen linens, 400TC hotel bedding, zero-twist spa terry towels, and thermal blackout drapes.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FD7803] hover:bg-[#E66B00] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Business: +92 300 1234567</span>
              </a>
            </div>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FD7803] font-heading">
              Export Product Lines
            </h4>
            <ul className="space-y-2 text-xs">
              {categoriesList.map((cat, i) => (
                <li key={i}>
                  <Link 
                    href={cat.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-white hover:text-[#FD7803] font-semibold transition-colors">
                  Complete 21-Item Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Factory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FD7803] font-heading">
              Industrial Mill Desk
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Weaving Process & Machinery
                </Link>
              </li>
              <li>
                <Link href="/export" className="hover:text-white transition-colors">
                  B2B Wholesale & Container Rates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Official FOB Quote
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Lab Testing & Quality Audits
                </Link>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=Salam%20AL%20HADI,%20I%20would%20like%20to%20request%20a%20Fabric%20Swatch%20Sample%20Kit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FD7803] transition-colors"
                >
                  Order Fabric Swatch Box
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Location & Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FD7803] font-heading">
              Factory Coordinates
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>
                  Plot 48/B, Sector 7-A, Korangi Industrial Zone, Karachi, Pakistan (74900)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="font-mono">+92 21 3505-8890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="font-mono">export@alhaditextiles.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Port of Export: Karachi (PKKHI)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Legal & Audit Note */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} AL HADI TEXTILE MILLS LTD. All rights reserved. Registered Export Manufacturer.
          </p>
          <div className="flex items-center gap-3">
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>OEKO-TEX® Standard 100</span>
            <span>•</span>
            <span>SEDEX SMETA 4-Pillar</span>
            <span>•</span>
            <span>GOTS Organic Certified</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
