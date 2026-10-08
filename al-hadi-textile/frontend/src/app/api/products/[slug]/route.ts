import { NextRequest, NextResponse } from 'next/server';
import { fallbackProducts } from '@/lib/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const product = fallbackProducts.find(
    p => p.slug === slug || p.id === slug
  );

  if (!product) {
    return NextResponse.json(
      { success: false, message: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: product
  });
}
