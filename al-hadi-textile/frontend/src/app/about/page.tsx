'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import ProcessSection from '../../components/ProcessSection';
import { ShieldCheck, Award, Factory, Users, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#161B22] text-[#F9F8F6] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-3.5 h-3.5" /> 30+ Years of Manufacturing Integrity
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl">
            Our Weaving Mill & Craftsmanship Heritage
          </h1>
          <p className="mt-4 text-base text-gray-300 max-w-2xl leading-relaxed">
            Founded in 1994 in Karachi, AL HADI TEXTILES has grown from a specialized jacquard loom workshop into an export manufacturing mill serving hotel chains, homeware brands, and wholesale distributors globally.
          </p>
        </div>
      </div>

      {/* Main Philosophy & Mill Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
              Authentic Production
            </span>
            <h2 className="text-3xl font-extrabold text-[#161B22] font-heading">
              Why Real Textile Architecture Matters
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              In a marketplace flooded with synthetic polyester blends and mass-market imports, AL HADI maintains an uncompromising focus on pure ring-spun combed cotton, authentic 3D waffle weaves, crisp hotel-grade percales, and deep reactive dyeing.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every yard of fabric woven on our rapier and air-jet looms undergoes thorough pre-shrinkage treatment (sanforization) and double-needle lockstitching. This ensures that when our kitchen towels, sheets, or curtains reach your customers or commercial laundries, they maintain dimensional stability and soft tactile comfort wash after wash.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#161B22] font-heading font-extrabold">250,000+</strong>
                <span className="text-gray-500">Meters Fabric Woven Monthly</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#161B22] font-heading font-extrabold">30+</strong>
                <span className="text-gray-500">Air-Jet & Rapier Weaving Looms</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#161B22] font-heading border-b border-gray-100 pb-3">
              Certifications & Audit Compliance
            </h3>

            <div className="space-y-4 text-xs text-gray-700">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2D4030] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#161B22]">OEKO-TEX® Standard 100</strong>
                  <span>Certified harmless to human health, free from heavy metals, formaldehyde, and banned dyes.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#2D4030] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#161B22]">ISO 9001:2015 Quality Management</strong>
                  <span>Audited manufacturing procedures from incoming cotton sliver inspection to packaging.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#2D4030] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#161B22]">SEDEX SMETA 4-Pillar Ethical Audit</strong>
                  <span>Fair living wages, safe industrial hygiene, zero child labor, and ethical working conditions.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#2D4030] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#161B22]">GOTS Organic Cotton Weaving</strong>
                  <span>Capabilities for 100% certified organic cotton yarns with full transaction certificates (TC).</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <ProcessSection />

        {/* Callout */}
        <div className="bg-[#161B22] text-[#F9F8F6] p-8 sm:p-12 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading">
            Visit Our Industrial Weaving Sheds
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            International buyers and third-party inspection agencies (SGS, Intertek, Bureau Veritas) are welcomed at our Korangi Industrial facility in Karachi.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold transition-colors"
            >
              <span>Schedule Factory Tour / Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
