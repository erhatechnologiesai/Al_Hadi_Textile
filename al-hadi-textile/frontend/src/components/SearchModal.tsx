'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.fabric.toLowerCase().includes(query.toLowerCase()) ||
        p.weave.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4 animate-in fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search by fabric (waffle, percale, terry, linen), category, or GSM..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm text-[#161B22] focus:outline-none placeholder-gray-400"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-gray-500">
              <span className="font-semibold block text-gray-700 mb-1">Popular Mill Inquiries:</span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
                {["Honeycomb Waffle", "400TC Percale", "Blackout Curtains", "550 GSM Terry", "Bistro Checks", "Sofa Protector"].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-[#F9F8F6] border border-gray-200 text-gray-700 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-gray-500">
              No textile specifications found matching &ldquo;<span className="font-semibold text-gray-800">{query}</span>&rdquo;.
            </div>
          ) : (
            <div className="space-y-1.5">
              {filtered.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(prod);
                  }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F9F8F6] cursor-pointer transition-colors group"
                >
                  <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                    <Image
                      src={prod.images[0]}
                      alt={prod.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#161B22] group-hover:text-[#FF6B00] transition-colors truncate">
                        {prod.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
                        {prod.gsm} GSM
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      {prod.category} • {prod.fabric}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
