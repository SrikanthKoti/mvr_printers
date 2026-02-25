import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactPayload = {
  serviceType: string;
  userName: string;
  email: string;
  phone: string;
  details?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  if (!toEmail) {
    console.error('CONTACT_EMAIL is not set');
    return NextResponse.json(
      { error: 'Contact email is not configured' },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const { serviceType, userName, email, phone, details = '' } = body;

  if (!serviceType?.trim() || !userName?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: 'Missing required fields: serviceType, userName, email, phone' },
      { status: 400 }
    );
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'M V R Printers <onboarding@resend.dev>';
  const subject = `New booking request: ${serviceType}`;
  const html = `
    <h2>New booking / contact form submission</h2>
    <table style="border-collapse: collapse;">
      <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Service</td><td style="padding: 6px 0;">${escapeHtml(serviceType)}</td></tr>
      <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Name</td><td style="padding: 6px 0;">${escapeHtml(userName)}</td></tr>
      <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Phone</td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Details</td><td style="padding: 6px 0;">${details ? escapeHtml(details) : '—'}</td></tr>
    </table>
  `.trim();

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] ?? ch);
}
