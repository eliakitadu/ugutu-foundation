// Vercel serverless function — sends website form submissions via Zoho SMTP.
// Configure these Environment Variables in the Vercel project (Settings → Environment Variables):
//   SMTP_USER  = info@ugutucommunityfoundation.org
//   SMTP_PASS  = <Zoho app-specific password>   (create in Zoho → Security → App Passwords)
//   TO_EMAIL   = info@ugutucommunityfoundation.org   (optional; defaults to SMTP_USER)
//   SMTP_HOST  = smtp.zoho.com   (optional; use smtp.zoho.eu / smtp.zoho.in if your account is on that region)
//   SMTP_PORT  = 465             (optional)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const wantsJson = (req.headers.accept || "").includes("application/json");
  const done = (status, payload, redirect) => {
    if (wantsJson) return res.status(status).json(payload);
    res
      .status(status)
      .setHeader("Content-Type", "text/html; charset=utf-8")
      .send(
        `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="4;url=${redirect || "/"}">` +
          `<body style="font-family:system-ui;max-width:36rem;margin:4rem auto;padding:0 1.5rem;text-align:center">` +
          `<h1>${payload.ok ? "Thank you!" : "Something went wrong"}</h1>` +
          `<p>${payload.ok ? "Your message has been sent — we'll be in touch soon." : "Please email us at info@ugutucommunityfoundation.org."}</p>` +
          `<p><a href="/">Back to the site</a></p></body>`
      );
  };

  if (req.method !== "POST") return done(405, { ok: false, error: "Method not allowed" });

  try {
    const data = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const clean = (v) => (v == null ? "" : String(v)).trim();
    const name = clean(data.name);
    const email = clean(data.email);
    const message = clean(data.message);
    const interest = clean(data.interest);
    const project = clean(data.project);
    const amountSel = clean(data.amount);
    const amountCustom = clean(data.amount_custom);
    const amount = amountSel === "Custom" ? amountCustom || "Custom amount (unspecified)" : amountSel;
    const subject = clean(data.subject) || "Website enquiry";

    // honeypot — bots fill hidden fields; humans don't
    if (clean(data._gotcha)) return done(200, { ok: true });

    if (!name || !email || !message) return done(400, { ok: false, error: "Please fill in your name, email and message." });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const to = process.env.TO_EMAIL || process.env.SMTP_USER;
    const body = [
      `Name:  ${name}`,
      `Email: ${email}`,
      amount ? `Amount / gift: ${amount}` : null,
      project ? `Project / area: ${project}` : null,
      interest ? `How they'd like to help: ${interest}` : null,
      "",
      message || "(no message)",
      "",
      "— sent from the UGUTU Community Foundation website",
    ]
      .filter((l) => l !== null)
      .join("\n");

    await transporter.sendMail({
      from: `"UGUTU Website" <${process.env.SMTP_USER}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `${subject} — from ${name}`,
      text: body,
    });

    return done(200, { ok: true });
  } catch (err) {
    return done(500, { ok: false, error: "Send failed" });
  }
}
