import { Product, InquiryLogPayload } from '../types';

export const WHATSAPP_BUSINESS_NUMBER = "923001234567";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

/**
 * Generate formatted WhatsApp order link according to AL HADI master specification
 */
export function generateWhatsAppOrderUrl(product: Product, quantity: number = 1): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://alhaditextiles.com';
  const productUrl = `${origin}/products/${product.slug}`;

  const messageText = `Salam AL HADI Textiles,
Mujhe is product ka order / rate confirm karna hai:

• Product: ${product.name}
• Category: ${product.category}
• Fabric: ${product.fabric} (${product.gsm} GSM)
• Size: ${product.dimensions}
• Required Quantity: ${quantity} piece(s)

Product Link: ${productUrl}

Meherbani karke wholesale / retail rate aur delivery details share karein.`;

  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Asynchronously log WhatsApp lead to backend API before redirecting
 */
export async function logLeadToBackend(payload: InquiryLogPayload): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.warn("Backend lead logging offline or unreachable, proceeding to WhatsApp directly:", err);
  }
}
