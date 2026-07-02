import "@/lib/load-env"

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { getContactMessagesCollection } from "@/lib/mongodb"

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    const safe = {
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject).trim(),
      message: String(message).trim(),
    }

    try {
      const coll = await getContactMessagesCollection()
      await coll.insertOne({
        ...safe,
        createdAt: new Date(),
      })
      console.log("[contact] Saved to MongoDB")
    } catch (dbErr) {
      console.error("[contact] MongoDB insertion failed:", dbErr)
      // Continue anyway to send the email
    }

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const to = process.env.CONTACT_TO_EMAIL ?? "malik786526.68@gmail.com"

    if (!emailUser || !emailPass) {
      console.warn("[contact] EMAIL_USER / EMAIL_PASS not set — message saved to DB only.")
      return NextResponse.json({
        message: "Message saved. Configure EMAIL_USER and EMAIL_PASS to receive Gmail notifications.",
        saved: true,
        emailSent: false,
      })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: emailUser, pass: emailPass },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to,
      replyTo: `"${safe.name}" <${safe.email}>`,
      subject: `Portfolio Contact: ${safe.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1e5132, #26804a); padding: 24px;">
            <h2 style="margin: 0; color: #fff; font-size: 22px;">📬 New Message from Portfolio</h2>
          </div>
          <div style="padding: 24px;">
            <div style="background: #1a1a1a; padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid #26804a;">
              <p style="margin: 6px 0; color: #aaa; font-size: 13px;">From</p>
              <p style="margin: 0; color: #fff; font-size: 16px; font-weight: bold;">${escapeHtml(safe.name)} &lt;${escapeHtml(safe.email)}&gt;</p>
            </div>
            <div style="background: #1a1a1a; padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid #26804a;">
              <p style="margin: 6px 0; color: #aaa; font-size: 13px;">Subject</p>
              <p style="margin: 0; color: #fff; font-size: 16px;">${escapeHtml(safe.subject)}</p>
            </div>
            <div style="background: #1a1a1a; padding: 16px; border-radius: 8px; border-left: 4px solid #26804a;">
              <p style="margin: 6px 0; color: #aaa; font-size: 13px;">Message</p>
              <p style="margin: 0; color: #e0e0e0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(safe.message)}</p>
            </div>
            <p style="margin-top: 20px; color: #555; font-size: 12px; text-align: center;">
              💡 Hit <strong>Reply</strong> to respond directly to ${escapeHtml(safe.name)}
            </p>
          </div>
        </div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      return NextResponse.json({
        message: "Message saved and email sent successfully",
        saved: true,
        emailSent: true,
      })
    } catch (mailErr) {
      console.error("[contact] Email failed (data already in MongoDB):", mailErr)
      return NextResponse.json({
        message: "Message saved. Email could not be sent — check Gmail App Password and EMAIL_USER.",
        saved: true,
        emailSent: false,
      })
    }
  } catch (error) {
    console.error("[contact]", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to process contact form" },
      { status: 500 }
    )
  }
}
