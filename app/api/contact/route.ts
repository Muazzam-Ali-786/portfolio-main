import "@/lib/load-env"

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { getContactMessagesCollection } from "@/lib/mongodb"
import { renderContactEmail } from "./email-template"

export const runtime = "nodejs"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function saveToDb(doc: { name: string; email: string; subject: string; message: string; createdAt: Date }) {
  const coll = await getContactMessagesCollection()
  await coll.insertOne(doc)
}

async function sendEmail(data: { name: string; email: string; subject: string; message: string; createdAt: Date }) {
  const emailUser = process.env.EMAIL_USER?.trim()
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "")
  const to = process.env.CONTACT_TO_EMAIL?.trim() || emailUser

  if (!emailUser || !emailPass || !to) {
    throw new Error("EMAIL_USER / EMAIL_PASS are not set")
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: emailUser, pass: emailPass },
  })

  const { html, text } = renderContactEmail({ ...data, receivedAt: data.createdAt })

  await transporter.sendMail({
    from: { name: `${data.name} via Portfolio`, address: emailUser },
    to,
    replyTo: { name: data.name, address: data.email },
    subject: `Portfolio: ${data.subject}`,
    text,
    html,
  })
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 })
  }

  const data = {
    name: String(body.name ?? "").trim().slice(0, 120),
    email: String(body.email ?? "").trim().slice(0, 200),
    subject: String(body.subject ?? "").trim().slice(0, 200),
    message: String(body.message ?? "").trim().slice(0, 5000),
    createdAt: new Date(),
  }

  if (!data.name || !data.email || !data.subject || !data.message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 })
  }
  if (!EMAIL_RE.test(data.email)) {
    return NextResponse.json({ message: "Please enter a valid email address" }, { status: 400 })
  }

  // Run both in parallel so a slow/dead database can never block the email
  const [mail, db] = await Promise.allSettled([sendEmail(data), saveToDb(data)])

  if (mail.status === "rejected") console.error("[contact] Email failed:", mail.reason)
  if (db.status === "rejected") console.error("[contact] MongoDB save failed:", db.reason)

  const emailSent = mail.status === "fulfilled"
  const saved = db.status === "fulfilled"

  if (!emailSent && !saved) {
    return NextResponse.json(
      { message: "Message could not be delivered. Please email me directly.", emailSent, saved },
      { status: 502 },
    )
  }

  return NextResponse.json({
    message: emailSent ? "Message sent successfully" : "Message saved, email notification failed",
    emailSent,
    saved,
  })
}
