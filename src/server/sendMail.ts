import nodemailer from "nodemailer"
import "server-only"

import { generateEmailHtml } from "./generateEmailHtml"

export type MailData = Record<string, string | string[]>

const transporter = nodemailer.createTransport({
  service: "gmail",
  name: "www.rightwarp.com",
  host: process.env.CONTACT_EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    pass: process.env.CONTACT_SEND_EMAIL_PASSWORD,
  },
})

export const sendEmail = async (data: MailData) => {
  const html = generateEmailHtml(`
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone ?? ""}</p>
    <p>Topics: ${(data?.topics as string[])?.join(", ") ?? ""}</p>
    <p>Message: ${data?.details ?? ""}</p>
  `)

  const mailOptions = {
    from: {
      name: "RightWarp Contact Form",
      address: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    },
    to: process.env.CONTACT_RECEIVE_EMAIL_ADDRESS,
    subject: `Contact from ${data.name} (${data.email})`,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)

    if (info.accepted.length && !info.rejected.length) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
