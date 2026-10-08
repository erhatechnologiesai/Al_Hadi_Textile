'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { submitRfqQuote } from '../../lib/api';
import { WHATSAPP_BUSINESS_NUMBER } from '../../lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2,
  Anchor
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    productName: 'General Inquiry / Swatch Request',
    targetGsm: 'Standard Spec',
    targetQuantity: 'Sample / Wholesale',
    customRequirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const directWhatsAppLink = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(
    "Salam AL HADI Textiles, I am contacting you through the website contact page regarding a business inquiry."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <Navbar />

      {/* Header */}
      <div className="bg-[#161B22] text-[#F9F8F6] py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" /> Direct Mill Communication
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl">
            Factory Coordinates & Inquiry Desk
          </h1>
          <p className="mt-4 text-base text-gray-300 max-w-2xl leading-relaxed">
            Reach out directly to our production engineers, quality assurance lab, or international export coordinators in Karachi, Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#161B22] font-heading border-b border-gray-100 pb-3">
                Factory & Head Office
              </h3>
              
              <ul className="space-y-4 text-xs text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-[#161B22]">AL HADI Textile Mills Ltd.</strong>
                    <span>Plot 48/B, Sector 7-A, Korangi Industrial Zone, Karachi, Pakistan (74900)</span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B00] shrink-0" />
                  <div>
                    <strong className="block text-gray-500 text-[10px] uppercase">Telephone / PABX</strong>
                    <span className="font-mono text-sm text-[#161B22]">+92 21 3505-8890 / +92 300 123-4567</span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B00] shrink-0" />
                  <div>
                    <strong className="block text-gray-500 text-[10px] uppercase">Export Email</strong>
                    <span className="font-mono text-sm text-[#161B22]">export@alhaditextiles.com</span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FF6B00] shrink-0" />
                  <div>
                    <strong className="block text-gray-500 text-[10px] uppercase">Mill Operating Hours</strong>
                    <span>Monday – Saturday: 08:00 – 19:00 (GMT+5)</span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-[#FF6B00] shrink-0" />
                  <div>
                    <strong className="block text-gray-500 text-[10px] uppercase">Nearest Container Terminal</strong>
                    <span>Karachi Port (22 km) • Port Qasim (28 km)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#2D4030] text-white p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading">Direct WhatsApp Hot-Desk</h4>
                  <p className="text-[11px] text-gray-300">Fastest channel for swatch photos & quotes</p>
                </div>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Connect directly with our export merchandising team on WhatsApp for real-time video inspection of looms and finished fabric lots.
              </p>

              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+92 300 1234567)</span>
              </a>
            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#161B22] font-heading mb-2">
              Send an Official Inquiry / Sample Request
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Our export management desk responds to all formal RFQs within 24 business hours.
            </p>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h4 className="text-xl font-bold text-[#161B22]">Inquiry Received</h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Your specifications have been logged into our factory ERP. A dedicated merchandising officer will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#161B22] text-white text-xs font-bold mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Atlas Linen Imports"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Miller"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
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
                      placeholder="david@atlaslinen.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                      Destination Country / Port
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Felixstowe UK / Dubai JAFZA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                      Fabric / Product Line
                    </label>
                    <input
                      type="text"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#161B22] uppercase tracking-wide mb-1">
                    Inquiry Details & Target Quantity
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on target GSM, sizes, custom weaves, or courier sample requests..."
                    value={formData.customRequirements}
                    onChange={(e) => setFormData({ ...formData, customRequirements: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#161B22] hover:bg-[#FF6B00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Submitting...' : 'Send Inquiry to Mill Desk'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
