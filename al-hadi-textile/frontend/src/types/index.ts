export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  currency: string;
  fabric: string;
  yarnCount: string;
  gsm: number;
  dimensions: string;
  weave: string;
  shrinkage: string;
  colorFastness: string;
  hemFinish: string;
  packSize: string;
  moq: string;
  certifications: string[];
  inStock: boolean;
  featured: boolean;
  images: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface InquiryLogPayload {
  productId: string;
  productName: string;
  category?: string;
  gsm?: number;
  quantity?: number;
  customerDevice?: string;
}

export interface RfqPayload {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  productName: string;
  targetGsm: string;
  targetQuantity: string;
  customRequirements?: string;
}
