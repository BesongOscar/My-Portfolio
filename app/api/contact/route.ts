import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 * Sends the contact-form message to the site owner through Resend's REST API.
 *
 * Required environment variable (set it in Vercel > Settings > Environment Variables):
 *   RESEND_API_KEY   your Resend API key (https://resend.com)
 * Optional:
 *   CONTACT_TO_EMAIL where messages are delivered (default: wildeo963@gmail.com).
 *                    With Resend's free onboarding sender this must be the email
 *                    your Resend account was created with.
 *
 * If no API key is configured the route returns 503 so the form shows an error
 * instead of reporting success for a message that was never delivered.
 */
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not set; message not delivered.");
      return NextResponse.json(
        { error: "Contact service is not configured." },
        { status: 503 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL ?? "wildeo963@gmail.com",
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
