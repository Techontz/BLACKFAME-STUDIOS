// Vercel serverless function: emails contact-form enquiries via Resend.
// Configure in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      (required) API key from https://resend.com
//   CONTACT_TO_EMAIL    inbox that receives enquiries (default: hello@blackfamestudios.com)
//   CONTACT_FROM_EMAIL  verified sender (default: Resend's onboarding@resend.dev test sender)

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown; // honeypot: real visitors never fill this in
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const json = (body: object, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Silently accept bot submissions without sending anything.
  if (field(payload.company, 200)) return json({ ok: true });

  const name = field(payload.name, 120);
  const email = field(payload.email, 200);
  const phone = field(payload.phone, 40);
  const projectType = field(payload.projectType, 60) || "Not specified";
  const message = field(payload.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Please provide your name and a valid email." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ error: "Email delivery is not configured." }, 503);
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Project type", projectType],
  ];

  const html = `
    <h2>New enquiry from blackfamestudios website</h2>
    <table cellpadding="6">
      ${rows
        .map(([label, value]) => `<tr><td><b>${label}</b></td><td>${escapeHtml(value)}</td></tr>`)
        .join("")}
    </table>
    <p><b>Message</b></p>
    <p style="white-space:pre-wrap">${escapeHtml(message || "—")}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "BlackFame Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "hello@blackfamestudios.com"],
      reply_to: email,
      subject: `New ${projectType} enquiry — ${name}`,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ error: "We couldn't send your message." }, 502);
  }

  return json({ ok: true });
}
