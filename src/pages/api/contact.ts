import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

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
    replyTo: data.get('email') as string,
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