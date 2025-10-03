import { NextResponse } from 'next/server';

// For static export, we don't use dynamic or revalidate exports
// This API route will be handled by a serverless function in production

// POST /api/contact
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'abhisheksandeepnere@gmail.com';
    // Use Resend's onboarding sender by default so it works without domain setup
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const subject = `New portfolio inquiry from ${name}`;
    const html = `
      <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    // Send via Resend HTTP API without installing any SDK
    // In development or serverless environment, use the API directly
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? 'https://api.resend.com/emails'
      : 'http://localhost:3000/api/contact';

    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    let data: any = null;
    try {
      data = await resp.json();
    } catch (_) {
      // ignore json parse error
    }

    if (!resp.ok) {
      return NextResponse.json(
        {
          error: data?.message || data?.error || 'Failed to send email',
          providerStatus: resp.status,
          providerBody: data ?? null,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id || null });
  } catch (err: any) {
    console.error('Email send unexpected error:', err);
    return NextResponse.json(
      { error: 'Unexpected error while sending email', detail: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
