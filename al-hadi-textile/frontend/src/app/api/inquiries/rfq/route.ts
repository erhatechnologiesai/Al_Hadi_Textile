import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[RFQ Registered]', body);
    return NextResponse.json({
      success: true,
      message: 'Your export RFQ quote request has been received. Our trade desk will contact you within 24 hours.'
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Invalid RFQ payload' },
      { status: 400 }
    );
  }
}
