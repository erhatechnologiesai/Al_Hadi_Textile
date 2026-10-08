'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import SpecTable from '../../../components/SpecTable';
import RfqModal from '../../../components/RfqModal';
import { fallbackProducts } from '../../../lib/api';
import { generateWhatsAppOrderUrl, logLeadToBackend, WHATSAPP_BUSINESS_NUMBER } from '../../../lib/utils';
import { 
  MessageCircle, 
  Plus, 
  Minus, 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  Share2, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function SingleProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = fallbackProducts.find(p => p.slug === slug || p.id === slug);

  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const [rfqOpen, setRfqOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <Layers className="w-12 h-12 text-gray-400" />
          <h1 className="text-2xl font-bold text-[#161B22]">Product Not Found</h1>
          <p className="text-sm text-gray-600">The requested textile lot or specimen could not be found.</p>
          <Link href="/products" className="px-5 py-2.5 rounded-lg bg-[#161B22] text-white text-xs font-bold">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

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
      customerDevice: 'web_single_page'
    });
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Related products
  const related = fallbackProducts
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <Navbar onOpenRfq={() => setRfqOpen(true)} />

      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-[#E5E7EB] py-3 px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-[#FF6B00]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#FF6B00]">Catalog</Link>
          <span>/</span>
          <Link href={`/products?category=${product.categorySlug}`} className="hover:text-[#FF6B00]">{product.category}</Link>
          <span>/</span>
          <span className="text-[#161B22] font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-10 flex-1 w-full space-y-12">
        
        {/* Main Product Card */}
        <div className="bg-white rounded-2xl border border-[#E7E5E1] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full h-80 sm:h-96 bg-[#F3F1EC] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-[#23282E]/90 backdrop-blur-xs text-white px-3 py-1 rounded-md text-xs font-mono font-bold">
                  {product.gsm} GSM
                </div>
              </div>

              {/* Manufacturing Highlights */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-[#F9F8F6] p-3 rounded-xl border border-gray-200">
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Yarn Construction</span>
                  <span className="font-semibold text-[#161B22] truncate block mt-0.5">{product.yarnCount}</span>
                </div>
                <div className="bg-[#F9F8F6] p-3 rounded-xl border border-gray-200">
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Shrinkage</span>
                  <span className="font-semibold text-[#161B22] truncate block mt-0.5">{product.shrinkage}</span>
                </div>
                <div className="bg-[#F9F8F6] p-3 rounded-xl border border-gray-200">
                  <span className="block text-gray-400 text-[10px] uppercase font-bold">Fastness</span>
                  <span className="font-semibold text-[#161B22] truncate block mt-0.5">{product.colorFastness}</span>
                </div>
              </div>
            </div>

            {/* Right Details & Order Section */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#EEF2EE] text-[#2D4030] text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied' : 'Share'}</span>
                  </button>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#161B22] font-heading mt-3 leading-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Order Box */}
              <div className="bg-[#F9F8F6] p-6 rounded-2xl border-2 border-[#FF6B00]/30 space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Target Order Quantity
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      Export MOQ: {product.moq}
                    </span>
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button onClick={handleDecrement} className="p-2 hover:bg-gray-100 text-gray-700">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold font-mono text-[#161B22]">
                      {quantity}
                    </span>
                    <button onClick={handleIncrement} className="p-2 hover:bg-gray-100 text-gray-700">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Primary WhatsApp Direct CTA */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 px-4 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>Order {quantity} Piece(s) via WhatsApp</span>
                </a>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="text-gray-500">Need container quotes?</span>
                  <button
                    onClick={() => setRfqOpen(true)}
                    className="font-bold text-[#161B22] hover:text-[#FF6B00] transition-colors underline"
                  >
                    Request B2B Export RFQ →
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Full Technical Spec Table */}
          <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <h2 className="text-xl font-bold text-[#161B22] font-heading mb-4">
              Fabric Technical Spec Sheet
            </h2>
            <SpecTable product={product} />
          </div>

        </div>

        {/* Related Fabrics */}
        {related.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#161B22] font-heading">
              Related Fabrics in {product.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link 
                  key={rel.id} 
                  href={`/products/${rel.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#FF6B00] transition-all group"
                >
                  <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-gray-100 mb-3">
                    <Image src={rel.images[0]} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {rel.gsm} GSM
                  </span>
                  <h4 className="text-xs font-bold text-[#161B22] group-hover:text-[#FF6B00] mt-1.5 line-clamp-1">
                    {rel.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultProduct={product.name}
      />
    </div>
  );
}
