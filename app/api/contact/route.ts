import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { firstName, lastName, email, company, interest, message, linkedin } =
    await request.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `New contact form submission from ${firstName} ${lastName}`,
      text: `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\nLinkedIn: ${linkedin}\nCompany: ${company}\nInterest: ${interest}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
