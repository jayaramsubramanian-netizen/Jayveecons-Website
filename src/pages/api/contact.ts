import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return Response.json({ ok: false, error: 'The contact service is not configured.' }, { status: 503 });
  }

  const data = await request.formData();
  const value = (name: string, maxLength = 500) => String(data.get(name) ?? '').trim().slice(0, maxLength);
  const firstName = value('first_name', 100);
  const lastName = value('last_name', 100);
  const email = value('email', 254).toLowerCase();
  const company = value('company', 200);
  const enquiryType = value('enquiry_type', 50);
  const message = value('message', 5000);

  // A hidden field catches unsophisticated automated submissions without affecting visitors.
  if (value('website')) return Response.json({ ok: true });
  if (!firstName || !lastName || !company || !enquiryType || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: 'Please complete all required fields with a valid email address.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,   // your Hostinger email
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Jayveecons Website" <${process.env.SMTP_USER}>`,
    to: 'sales@jayveecons.com',
    replyTo: email,
    subject: `[RFQ] ${data.get('enquiry_type')} — ${data.get('company')}`,
    text: `
Name: ${data.get('first_name')} ${data.get('last_name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}
Company: ${data.get('company')}
Enquiry: ${data.get('enquiry_type')}
Industry: ${data.get('industry')}
Message: ${data.get('message')}
    `,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
