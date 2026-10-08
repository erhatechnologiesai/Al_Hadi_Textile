import { NextRequest, NextResponse } from 'next/server';
import { fallbackProducts } from '@/lib/api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const minGsm = searchParams.get('minGsm');
  const maxGsm = searchParams.get('maxGsm');
  const featured = searchParams.get('featured');

  let results = [...fallbackProducts];

  if (category && category !== 'all') {
    results = results.filter(p => p.categorySlug === category);
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.weave.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (minGsm) {
    results = results.filter(p => p.gsm >= parseInt(minGsm, 10));
  }

  if (maxGsm) {
    results = results.filter(p => p.gsm <= parseInt(maxGsm, 10));
  }

  if (featured === 'true') {
    results = results.filter(p => p.featured);
  }

  return NextResponse.json({
    success: true,
    count: results.length,
    data: results
  });
}
