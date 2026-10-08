import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[Lead Tracked]', body);
    return NextResponse.json({
      success: true,
      message: 'Inquiry tracked successfully'
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Invalid payload' },
      { status: 400 }
    );
  }
}
