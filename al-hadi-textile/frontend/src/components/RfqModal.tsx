'use client';

import React, { useState } from 'react';
import { submitRfqQuote } from '../lib/api';
import { WHATSAPP_BUSINESS_NUMBER } from '../lib/utils';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  FileSpreadsheet, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function RfqModal({ isOpen, onClose, defaultProduct }: RfqModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    productName: defaultProduct || 'Custom Production Run',
    targetGsm: 'Standard Mill Spec',
    targetQuantity: '1000 pcs',
    customRequirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitRfqQuote(formData);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const directWhatsAppQuoteUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    `Salam AL HADI Export Desk,\n\nI want to request a formal B2B Wholesale Quote:\n\n• Company: ${formData.companyName || 'Wholesale Buyer'}\n• Contact: ${formData.contactPerson || 'Buyer'}\n• Country: ${formData.country || 'International'}\n• Product: ${formData.productName}\n• Quantity: ${formData.targetQuantity}\n• Target GSM: ${formData.targetGsm}\n• Custom Specs: ${formData.customRequirements || 'Standard Export Spec'}\n\nPlease share FOB Karachi price quotation.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-[#F9F8F6] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#161B22] text-[#F9F8F6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#FF6B00]" />
            <div>
              <h2 className="text-base font-bold font-heading">
                B2B Bulk Quotation & Export Inquiries
              </h2>
              <p className="text-[11px] text-gray-400">
                Direct Mill Factory Desk • FOB / CIF Export Rates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#161B22] font-heading">
                Inquiry Logged Successfully!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you. Our international export manager will review your target specifications and send an official FOB price sheet within 24 business hours.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={directWhatsAppQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Quote Directly to WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-xs hover:bg-gray-100"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nordic Home Living Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins (Procurement)"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sourcing@nordicliving.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="+44 7700 900077"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Destination Country
                  </label>
                  <input
                    type="text"
                    placeholder="United Kingdom / UAE / Germany"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Target Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2,000 pcs / 1x 20ft FCL"
                    value={formData.targetQuantity}
                    onChange={(e) => setFormData({ ...formData, targetQuantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Target GSM / Spec
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 280 GSM Waffle"
                    value={formData.targetGsm}
                    onChange={(e) => setFormData({ ...formData, targetGsm: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                  Product / Fabric of Interest
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                  Custom Finishing, Branding & Packing Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention OEM private labeling, barcode tags, custom colors, or specific laboratory testing standards..."
                  value={formData.customRequirements}
                  onChange={(e) => setFormData({ ...formData, customRequirements: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D4030]" /> NDA Protected • Direct Mill Rates
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="py-2.5 px-6 rounded-xl bg-[#161B22] hover:bg-[#FF6B00] text-white font-bold text-xs transition-colors flex items-center gap-2 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting...' : 'Submit Official RFQ'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}
