'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  FileText,
  Sparkles
} from 'lucide-react';
import { WHATSAPP_BUSINESS_NUMBER } from '../lib/utils';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenRfq?: () => void;
}

export default function Navbar({ onOpenSearch, onOpenRfq }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);

  const categoriesList = [
    { name: "Kitchen & Dining Linens", href: "/products?category=kitchen-dining", desc: "Waffle towels, bistro checks & 10pc sets" },
    { name: "Bedding & Comforters", href: "/products?category=bedding-linen", desc: "400TC percale, teddy fleece & pintuck sets" },
    { name: "Luxury Bath & Towels", href: "/products?category=bath-towels", desc: "550 GSM zero-twist & textured spa towels" },
    { name: "Curtains & Window Drapes", href: "/products?category=curtains-drapes", desc: "Triple-weave blackout & damask jacquards" },
    { name: "Living & Slipcovers", href: "/products?category=living-slipcovers", desc: "Water-resistant sofa protectors & caddies" }
  ];

  const directWhatsAppLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    "Salam AL HADI Textiles, I am interested in wholesale/export inquiries for your home textile products. Please share your catalog and mill profile."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#E7E5E1] transition-all">
      {/* 1. Top Industrial Announcement Bar (Tighter, Clean) */}
      <div className="bg-[#23282E] text-[#FAF9F7] text-[11px] py-1.5 px-3 sm:px-6 border-b border-gray-800">
        <div className="max-w-[1720px] mx-auto flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FD7803]/20 text-[#FD7803] font-bold text-[10.5px] uppercase tracking-wide border border-[#FD7803]/35">
              <ShieldCheck className="w-3 h-3 text-[#FD7803]" /> OEKO-TEX® Standard 100
            </span>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="hidden sm:inline text-gray-300 font-medium truncate">
              Direct Factory Mill • 250k+ Meters Monthly Output
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-300 shrink-0">
            <a 
              href="tel:+923001234567" 
              className="flex items-center gap-1 hover:text-[#FD7803] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FD7803]" />
              <span className="font-mono text-[11px] hidden xs:inline">+92 (300) 123-4567</span>
            </a>
            <span className="text-gray-600">|</span>
            <button 
              onClick={onOpenRfq}
              className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors text-[11px] underline underline-offset-2"
            >
              <FileText className="w-3 h-3 text-[#FD7803]" /> Request Swatch / RFQ
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Tight, Elegant) */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Official AL HADI Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-clean.png"
                alt="AL HADI TEXTILES"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#23282E] font-heading leading-none">
                  AL HADI
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-wide text-[#FD7803] font-heading leading-none">
                  TEXTILES
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold mt-0.5">
                Export Mill • Est. 1994
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-xs sm:text-sm font-semibold text-[#23282E] hover:text-[#FD7803] transition-colors py-1"
            >
              Home
            </Link>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCollectionsDropdown(true)}
              onMouseLeave={() => setCollectionsDropdown(false)}
            >
              <Link
                href="/products"
                className="text-xs sm:text-sm font-semibold text-[#23282E] hover:text-[#FD7803] transition-colors flex items-center gap-1 py-1"
              >
                <span>Collections</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FD7803]" />
              </Link>

              {collectionsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E7E5E1] rounded-xl shadow-xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Textile Categories (21 Products)
                  </div>
                  {categoriesList.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block p-2 rounded-lg hover:bg-[#FAF9F7] group transition-colors"
                      onClick={() => setCollectionsDropdown(false)}
                    >
                      <div className="text-xs font-bold text-[#23282E] group-hover:text-[#FD7803]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1.5 pt-1.5 px-3">
                    <Link
                      href="/products"
                      className="text-xs font-bold text-[#FD7803] hover:underline flex items-center justify-between"
                      onClick={() => setCollectionsDropdown(false)}
                    >
                      <span>View All 21 Products Catalog</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="text-xs sm:text-sm font-semibold text-[#23282E] hover:text-[#FD7803] transition-colors py-1"
            >
              Craftsmanship
            </Link>

            <Link 
              href="/export" 
              className="text-xs sm:text-sm font-semibold text-[#23282E] hover:text-[#FD7803] transition-colors py-1"
            >
              B2B Export
            </Link>

            <Link 
              href="/contact" 
              className="text-xs sm:text-sm font-semibold text-[#23282E] hover:text-[#FD7803] transition-colors py-1"
            >
              Contact & RFQ
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search Catalog"
                className="p-2 sm:p-2.5 rounded-lg border border-[#E7E5E1] bg-white text-gray-600 hover:text-[#FD7803] hover:border-[#FD7803] transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Direct WhatsApp CTA Button with Pulse Glow */}
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-glow-btn inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#FD7803] hover:bg-[#E66B00] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span className="whitespace-nowrap">Order via WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E7E5E1] bg-white text-[#23282E] lg:hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E7E5E1] px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#23282E] hover:text-[#FD7803] py-1 border-b border-gray-100"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#23282E] hover:text-[#FD7803] py-1 border-b border-gray-100"
            >
              All Products Catalog (21 Items)
            </Link>

            <div className="pl-2 flex flex-col gap-1.5 py-1 bg-gray-50 rounded-lg p-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Categories</span>
              {categoriesList.map((cat, i) => (
                <Link
                  key={i}
                  href={cat.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-gray-700 hover:text-[#FD7803]"
                >
                  • {cat.name}
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#23282E] hover:text-[#FD7803] py-1 border-b border-gray-100"
            >
              Craftsmanship & Mill Tour
            </Link>

            <Link
              href="/export"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#23282E] hover:text-[#FD7803] py-1 border-b border-gray-100"
            >
              B2B Export & Wholesale
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#23282E] hover:text-[#FD7803] py-1 border-b border-gray-100"
            >
              Contact & RFQ
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FD7803] text-white font-bold text-xs shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp (+92 300 1234567)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenRfq) onOpenRfq();
                }}
                className="w-full py-2 text-center text-xs font-semibold text-[#23282E] bg-[#FAF9F7] border border-[#E7E5E1] rounded-lg"
              >
                Request Swatch Kit / Formal RFQ
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
