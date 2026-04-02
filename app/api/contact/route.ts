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

    const coll = await getContactMessagesCollection()
    await coll.insertOne({
      ...safe,
      createdAt: new Date(),
    })

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const to = process.env.CONTACT_TO_EMAIL ?? "malik86526.68@gmail.com"

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
      from: emailUser,
      to,
      subject: `Portfolio Contact: ${safe.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(safe.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(safe.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(safe.subject)}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(safe.message)}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Saved to MongoDB collection <code>portfolio_contacts</code>.</p>
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
