import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  // Guard — env vars must be set in Hostinger hPanel
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    return Response.json(
      { ok: false, error: "The contact service is not configured." },
      { status: 503 },
    );
  }

  const data = await request.formData();

  // Helper — safely extract a string value with an optional max length
  const val = (name: string, maxLen = 500): string =>
    String(data.get(name) ?? "")
      .trim()
      .slice(0, maxLen);

  const firstName = val("first_name", 100);
  const lastName = val("last_name", 100);
  const email = val("email", 254).toLowerCase();
  const phone = val("phone", 30);
  const company = val("company", 200);
  const designation = val("designation", 100);
  const enquiryType = val("enquiry_type", 50);
  const industry = val("industry", 80);
  const products = val("products", 500);
  const message = val("message", 5000);

  // Honeypot — bots fill hidden fields, humans don't
  if (val("website")) return Response.json({ ok: true });

  // Server-side validation
  if (
    !firstName ||
    !lastName ||
    !company ||
    !enquiryType ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      {
        ok: false,
        error:
          "Please complete all required fields with a valid email address.",
      },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Jayveecons Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO ?? process.env.SMTP_USER,
    replyTo: email || undefined, // string | undefined — never null
    subject: `[RFQ] ${enquiryType} — ${company} | ${firstName} ${lastName}`,
    text: `
New enquiry from jayveecons.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS
Name:        ${firstName} ${lastName}
Email:       ${email}
Phone:       ${phone || "Not provided"}
Company:     ${company}
Role:        ${designation || "Not provided"}

PROJECT DETAILS
Enquiry Type: ${enquiryType}
Industry:     ${industry || "Not specified"}
Products:     ${products || "Not specified"}

MESSAGE
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
Reply to this email to respond directly to ${firstName}.
    `.trim(),
  });

  return Response.json({ ok: true }, { status: 200 });
};
