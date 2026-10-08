'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import ProductDetailModal from '../../components/ProductDetailModal';
import RfqModal from '../../components/RfqModal';
import SearchModal from '../../components/SearchModal';
import { fallbackProducts, fallbackCategories } from '../../lib/api';
import { Product } from '../../types';
import { Layers, SlidersHorizontal, Search } from 'lucide-react';

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [products] = useState<Product[]>(fallbackProducts);
  const [categories] = useState(fallbackCategories);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedGsmRange, setSelectedGsmRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqDefaultProduct, setRfqDefaultProduct] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter & Sort
  let filtered = products.filter(product => {
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
      if (!matchName && !matchFabric && !matchWeave) return false;
    }
    return true;
  });

  if (sortBy === 'gsm-asc') {
    filtered.sort((a, b) => a.gsm - b.gsm);
  } else if (sortBy === 'gsm-desc') {
    filtered.sort((a, b) => b.gsm - a.gsm);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const openRfqWithProduct = (productName?: string) => {
    setRfqDefaultProduct(productName);
    setRfqOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7]">
      <Navbar 
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenRfq={() => openRfqWithProduct()}
      />

      <div className="bg-[#23282E] text-[#FAF9F7] py-10 px-4 sm:px-8 lg:px-12 border-b border-gray-800">
        <div className="max-w-[1720px] mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD7803]/20 text-[#FD7803] text-xs font-bold uppercase tracking-wider mb-2 border border-[#FD7803]/30">
            <Layers className="w-3.5 h-3.5" /> Direct Mill Catalog
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading">
            Export Textile Collections (21 Products)
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Browse through our authentic home linens, hotel bedding, kitchen towels, curtains, and slipcovers. Filter by GSM density or category and place orders directly with our mill on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-8 flex-1 w-full">
        {/* Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E7E5E1] shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Pills */}
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
                      : 'bg-[#FAF9F7] text-gray-700 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    active ? 'bg-[#FD7803] text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FD7803]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-xs rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FD7803]"
            >
              <option value="featured">Sort by: Featured Mill Runs</option>
              <option value="gsm-desc">Fabric Weight: Heavy to Light (GSM)</option>
              <option value="gsm-asc">Fabric Weight: Light to Heavy (GSM)</option>
              <option value="name">Alphabetical (A - Z)</option>
            </select>
          </div>

        </div>

        {/* Results Count & Reset */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 px-1">
          <span>Showing <strong className="text-[#23282E]">{filtered.length}</strong> textile items</span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[#FD7803] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Expanded Wide Product Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {filtered.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onOpenDetails={(p) => setActiveProduct(p)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 mt-8 space-y-3">
            <Layers className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="text-base font-bold text-[#23282E]">No fabrics match your search</h3>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#23282E] text-white text-xs font-bold"
            >
              Show All 21 Products
            </button>
          </div>
        )}

      </div>

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onOpenRfq={(name) => openRfqWithProduct(name)}
      />

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultProduct={rfqDefaultProduct}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={products}
        onSelectProduct={(p) => setActiveProduct(p)}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading AL HADI Collections...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
