'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import RfqModal from '../components/RfqModal';
import SearchModal from '../components/SearchModal';
import ProcessSection from '../components/ProcessSection';
import { fallbackProducts, fallbackCategories } from '../lib/api';
import { Product } from '../types';
import { WHATSAPP_BUSINESS_NUMBER } from '../lib/utils';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal,
  Building2,
  Anchor,
  Globe2,
  Package,
  Layers,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function HomePage() {
  const [products] = useState<Product[]>(fallbackProducts);
  const [categories] = useState(fallbackCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGsmRange, setSelectedGsmRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Hero interactive showcase selected index
  const [heroIndex, setHeroIndex] = useState(0);

  // Modals state
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqDefaultProduct, setRfqDefaultProduct] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Hero showcase items
  const heroShowcaseItems = [
    {
      title: "Charcoal Waffle Towels & Oven Mitt",
      category: "Kitchen Linens",
      gsm: 320,
      image: "/images/products/kitchen-dining/charcoal-waffle-kitchen-towel-ovenmitt-set.jpg",
      weave: "3D Honeycomb Waffle Weave",
      slug: "charcoal-waffle-kitchen-towel-ovenmitt-set"
    },
    {
      title: "5-Star Hotel Crisp White Percale 400TC",
      category: "Bedding & Comforters",
      gsm: 145,
      image: "/images/products/bedding-linen/hotel-percale-400tc-white-duvet-set.jpg",
      weave: "400TC Plain Percale Egyptian Cotton",
      slug: "hotel-percale-400tc-white-duvet-set"
    },
    {
      title: "Earthy Taupe Spa Towels with Kilim Border",
      category: "Luxury Bath & Towels",
      gsm: 580,
      image: "/images/products/bath-towels/taupe-herringbone-kilim-border-spa-towel.jpg",
      weave: "Chevron Rib Terry & Tassels",
      slug: "taupe-herringbone-kilim-border-spa-towel"
    },
    {
      title: "Midnight Navy Blackout Eyelet Curtains",
      category: "Curtains & Drapes",
      gsm: 280,
      image: "/images/products/curtains-drapes/midnight-navy-thermal-blackout-drapes.jpg",
      weave: "Triple-Weave Blackout Filament",
      slug: "midnight-navy-thermal-blackout-drapes"
    },
    {
      title: "Diamond Quilted Sofa Couch Protector",
      category: "Living & Slipcovers",
      gsm: 260,
      image: "/images/products/living-slipcovers/charcoal-water-resistant-quilted-sofa-guard.jpg",
      weave: "Ultrasonic Diamond Quilting",
      slug: "charcoal-water-resistant-quilted-sofa-guard"
    }
  ];

  // Auto-cycle hero showcase every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroShowcaseItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroShowcaseItems.length]);

  // Filter products based on selected criteria
  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
      return false;
    }
    if (selectedGsmRange === 'light' && product.gsm >= 200) return false;
    if (selectedGsmRange === 'medium' && (product.gsm < 200 || product.gsm > 300)) return false;
    if (selectedGsmRange === 'heavy' && product.gsm <= 300) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchFabric = product.fabric.toLowerCase().includes(q);
      const matchWeave = product.weave.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      if (!matchName && !matchFabric && !matchWeave && !matchDesc) return false;
    }

    return true;
  });

  const openRfqWithProduct = (productName?: string) => {
    setRfqDefaultProduct(productName);
    setRfqOpen(true);
  };

  const directWhatsAppLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    "Salam AL HADI Textiles, I am visiting your official website and would like to inquire about wholesale prices and minimum order quantities."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7]">
      {/* 1. Header Navigation Bar */}
      <Navbar 
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenRfq={() => openRfqWithProduct()}
      />

      {/* 2. Compact, High-Impact Hero Section (Broad Container max-w-[1720px]) */}
      <section className="relative overflow-hidden bg-[#FAF9F7] border-b border-[#E7E5E1] pt-6 pb-10 sm:pt-8 sm:pb-12">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#23282E_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Tight Editorial Copy */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Mill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E5E1] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FD7803] animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#23282E] font-mono">
                  AL HADI TEXTILE MILLS • EST. 1994
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#23282E] font-heading tracking-tight leading-[1.12]">
                Export-Grade Home Linens & Living Textiles{' '}
                <span className="text-[#FD7803]">Woven with Integrity.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
                We manufacture and export authentic home textiles: 100% ring-spun combed cotton honeycomb waffle towels, 400TC crisp hotel percales, heavy damask curtains, and water-resistant furniture guards.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#catalog"
                  className="px-6 py-3 rounded-xl bg-[#23282E] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore All 21 Products</span>
                  <ArrowRight className="w-4 h-4 text-[#FD7803]" />
                </a>

                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-glow-btn px-6 py-3 rounded-xl bg-[#FD7803] hover:bg-[#E66B00] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp Direct Order</span>
                </a>
              </div>

              {/* Checkpoint Pills */}
              <div className="pt-3 border-t border-gray-200/80 flex flex-wrap gap-2 text-[11px] text-gray-700 font-medium">
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4030]" /> Pre-washed for instant absorbency
                </span>
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4030]" /> Double-stitched hems
                </span>
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4030]" /> Reactive yarn-dyed
                </span>
              </div>

            </div>

            {/* Right Column: Eye-Catching Interactive Photo Stage */}
            <div className="lg:col-span-6">
              
              <div className="bg-white rounded-2xl border border-[#E7E5E1] p-3 sm:p-4 shadow-card hover:shadow-card-hover transition-all">
                
                {/* Main Hero Featured Image with Reliable Explicit Height */}
                <div className="relative w-full h-72 sm:h-80 md:h-[390px] rounded-xl overflow-hidden bg-[#F3F1EC] border border-gray-200">
                  <img
                    src={heroShowcaseItems[heroIndex].image}
                    alt={heroShowcaseItems[heroIndex].title}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                  />

                  {/* Top floating badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#23282E]/90 backdrop-blur-xs text-white text-xs font-mono font-bold shadow">
                      {heroShowcaseItems[heroIndex].gsm} GSM
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#FD7803] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {heroShowcaseItems[heroIndex].category}
                    </span>
                  </div>

                  {/* Bottom caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-sm sm:text-base font-bold font-heading line-clamp-1">
                        {heroShowcaseItems[heroIndex].title}
                      </h3>
                      <p className="text-gray-200 text-xs mt-0.5 font-mono">
                        {heroShowcaseItems[heroIndex].weave}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const match = products.find(p => p.slug === heroShowcaseItems[heroIndex].slug);
                        if (match) setActiveProduct(match);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/95 text-[#23282E] hover:bg-[#FD7803] hover:text-white transition-colors text-xs font-bold shrink-0 flex items-center gap-1 shadow"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Interactive Thumbnail Selector Strip */}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {heroShowcaseItems.map((item, idx) => {
                    const active = heroIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setHeroIndex(idx)}
                        className={`relative h-16 sm:h-20 w-full rounded-lg overflow-hidden border-2 transition-all bg-[#F3F1EC] ${
                          active 
                            ? 'border-[#FD7803] scale-102 shadow-md ring-2 ring-[#FD7803]/40' 
                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Industrial Metrics Strip */}
      <section className="bg-white border-b border-[#E7E5E1] py-5 sm:py-6">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="border-l-3 border-[#FD7803] pl-3">
              <div className="text-xl sm:text-2xl font-black text-[#23282E] font-mono">250,000+</div>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Meters Monthly Weave</div>
              <div className="text-[10.5px] text-gray-400">Air-Jet & Rapier Sheds</div>
            </div>

            <div className="border-l-3 border-[#FD7803] pl-3">
              <div className="text-xl sm:text-2xl font-black text-[#23282E] font-mono">25+ Nations</div>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Export Destinations</div>
              <div className="text-[10.5px] text-gray-400">UK, EU, USA, GCC</div>
            </div>

            <div className="border-l-3 border-[#FD7803] pl-3">
              <div className="text-xl sm:text-2xl font-black text-[#23282E] font-mono">Grade 4-5</div>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Colorfastness</div>
              <div className="text-[10.5px] text-gray-400">Vat & Reactive Dyes</div>
            </div>

            <div className="border-l-3 border-[#FD7803] pl-3">
              <div className="text-xl sm:text-2xl font-black text-[#23282E] font-mono">100% Combed</div>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Ring-Spun Cotton</div>
              <div className="text-[10.5px] text-gray-400">Zero Synthetic Fillers</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Visual Factory Production Gallery Strip */}
      <section className="bg-[#F3F1EC] py-6 sm:py-8 border-b border-[#E7E5E1]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FD7803]" />
              <h2 className="text-sm sm:text-base font-extrabold text-[#23282E] uppercase tracking-wide font-heading">
                Live Factory Production Highlights (Genuine Mill Photos)
              </h2>
            </div>
            <a
              href="#catalog"
              className="text-xs font-bold text-[#FD7803] hover:underline flex items-center gap-1"
            >
              <span>View All 21 Items</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Horizontal Visual Strip with Guaranteed Image Heights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {products.slice(0, 6).map((prod) => (
              <div
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#FD7803] transition-all"
              >
                <div className="relative w-full h-36 sm:h-44 bg-gray-100 overflow-hidden">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-[#23282E]/90 text-white text-[10px] font-mono font-bold">
                    {prod.gsm} GSM
                  </span>
                </div>
                <div className="p-2.5">
                  <h4 className="text-xs font-bold text-[#23282E] group-hover:text-[#FD7803] transition-colors truncate">
                    {prod.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 truncate mt-0.5">
                    {prod.weave.split(' ')[0]} Weave
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Master Product Catalog Section (Wide 5-Column Grid, Zero Empty Margins) */}
      <section id="catalog" className="py-10 sm:py-14 max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex-1 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E7E5E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FD7803]/10 text-[#FD7803] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Layers className="w-3.5 h-3.5" /> Complete Mill Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#23282E] font-heading tracking-tight">
              All 21 Textile Products with Real Photography & Specifications
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              Filter by category or GSM fabric weight, inspect technical weave parameters, and place direct WhatsApp orders.
            </p>
          </div>

          {/* Search bar inside catalog */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search fabric, GSM, weave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FD7803]"
            />
          </div>
        </div>

        {/* Live Filter Controls */}
        <div className="mt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#23282E] text-white shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    active ? 'bg-[#FD7803] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* GSM Weight Filter Pills */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-gray-500 font-semibold flex items-center gap-1 text-[11px]">
              <SlidersHorizontal className="w-3 h-3 text-[#FD7803]" /> Weight:
            </span>
            {[
              { id: 'all', label: 'All GSM' },
              { id: 'light', label: '< 200 GSM' },
              { id: 'medium', label: '200 - 300 GSM' },
              { id: 'heavy', label: '300+ GSM' }
            ].map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedGsmRange(w.id)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  selectedGsmRange === w.id
                    ? 'bg-[#FD7803] text-white font-bold'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

        </div>

        {/* Active Filter Summary */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div>
            Showing <strong className="text-[#23282E]">{filteredProducts.length}</strong> of {products.length} products
            {selectedCategory !== 'all' && ` in "${categories.find(c => c.id === selectedCategory)?.name}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {(selectedCategory !== 'all' || selectedGsmRange !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedGsmRange('all');
                setSearchQuery('');
              }}
              className="text-[#FD7803] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid: Broad 5-Column Display */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setActiveProduct(p)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 mt-6 space-y-3">
            <Layers className="w-8 h-8 text-gray-400 mx-auto" />
            <h3 className="text-sm font-bold text-[#23282E]">No fabrics match the selected filters</h3>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedGsmRange('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#23282E] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 6. Mill Tour & Craftsmanship Process */}
      <ProcessSection />

      {/* 7. B2B Export & Wholesale Desk */}
      <section className="py-14 bg-[#FAF9F7] border-b border-[#E7E5E1]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2D4030]/10 text-[#2D4030] text-[11px] font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" /> Direct Mill Shipping
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#23282E] font-heading tracking-tight">
                Exporting Globally Directly from Karachi Port
              </h2>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                AL HADI manufactures and exports full container loads (FCL) and LCL shipments to retail chains, hotel suppliers, and wholesale importers across the UK, Europe, USA, and GCC.
              </p>

              <div className="space-y-2.5 text-xs text-gray-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-200">
                  <Anchor className="w-4 h-4 text-[#FD7803] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs text-[#23282E]">FOB Karachi Port / Port Qasim</strong>
                    <span className="text-[11px] text-gray-600">Quick customs clearance with complete Form E, COO, and Bill of Lading.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-200">
                  <Package className="w-4 h-4 text-[#FD7803] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs text-[#23282E]">Custom OEM & Private Label</strong>
                    <span className="text-[11px] text-gray-600">Custom woven brand tags, EAN-13 barcodes, and retail presentation packaging.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openRfqWithProduct()}
                  className="px-5 py-3 rounded-xl bg-[#23282E] hover:bg-[#FD7803] text-white text-xs font-bold transition-all shadow flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-[#FD7803]" />
                  <span>Request Official Export Quotation</span>
                </button>
              </div>

            </div>

            {/* Container Spec Board */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="text-sm font-bold text-[#23282E] font-heading">
                    Container Capacity Estimates
                  </h3>
                  <p className="text-[11px] text-gray-500">Standard Sea Freight Logistics</p>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAF9F7] border border-gray-200">
                  FOB Karachi
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#FAF9F7] p-3.5 rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-[#23282E] block">20ft Container (FCL)</span>
                  <span className="text-[10px] text-gray-500 mt-0.5 block">Volume: ~28 to 30 CBM</span>
                  <ul className="mt-2 text-[11px] text-gray-700 space-y-1 font-mono">
                    <li>• Kitchen Towels: ~25,000 pcs</li>
                    <li>• Terry Towels: ~6,500 pcs</li>
                    <li>• Bedding Sets: ~3,200 sets</li>
                  </ul>
                </div>

                <div className="bg-[#FAF9F7] p-3.5 rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-[#23282E] block">40ft High Cube (HQ)</span>
                  <span className="text-[10px] text-gray-500 mt-0.5 block">Volume: ~68 to 72 CBM</span>
                  <ul className="mt-2 text-[11px] text-gray-700 space-y-1 font-mono">
                    <li>• Kitchen Towels: ~58,000 pcs</li>
                    <li>• Terry Towels: ~15,000 pcs</li>
                    <li>• Bedding Sets: ~7,500 sets</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#EEF2EE] p-3.5 rounded-xl border border-[#2D4030]/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#2D4030] block">Need Courier Swatches?</span>
                  <span className="text-[10.5px] text-gray-600">DHL/FedEx fabric swatch box dispatched within 48h.</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
                    "Salam AL HADI Export Desk, I would like to request an international fabric swatch kit."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#2D4030] text-white text-xs font-bold hover:bg-[#1E2C20] transition-colors"
                >
                  Order Swatches
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-12 bg-[#23282E] text-[#FAF9F7]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD7803]/20 text-[#FD7803] text-[11px] font-bold uppercase tracking-wider border border-[#FD7803]/30">
            <Sparkles className="w-3.5 h-3.5" /> Direct Factory Mill Supply
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading max-w-xl mx-auto">
            Ready to Confirm Your Production Lot?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
            Message directly on WhatsApp for real-time fabric availability, yarn price benchmarks, and custom production timelines.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-glow-btn px-6 py-3 rounded-xl bg-[#FD7803] hover:bg-[#E66B00] text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp (+92 300 1234567)</span>
            </a>
            <button
              onClick={() => openRfqWithProduct()}
              className="px-5 py-3 rounded-xl border border-gray-600 hover:border-white text-white text-xs font-semibold transition-colors"
            >
              Submit Formal B2B RFQ
            </button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onOpenRfq={(name) => openRfqWithProduct(name)}
      />

      {/* B2B RFQ Modal */}
      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultProduct={rfqDefaultProduct}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={products}
        onSelectProduct={(p) => setActiveProduct(p)}
      />
    </div>
  );
}
