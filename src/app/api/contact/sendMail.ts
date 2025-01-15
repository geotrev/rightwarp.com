import nodemailer from "nodemailer"
import { MailOptions } from "nodemailer/lib/json-transport"
import "server-only"

export type MailData = Record<string, string | string[]>

const transporter = nodemailer.createTransport({
  host: process.env.CONTACT_EMAIL_HOST,
  port: parseInt(process.env.CONTACT_EMAIL_PORT!),
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL_SEND_ADDRESS,
    pass: process.env.CONTACT_EMAIL_SEND_PASSWORD,
  },
})

export const sendEmail = async (data: MailData) => {
  const html = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone ?? ""}</p>
    <p>Topics: ${(data?.topics as string[])?.join(", ") ?? ""}</p>
    <p>Message: ${data?.details ?? ""}</p>
  `

  const mailOptions: MailOptions = {
    from: `Right Warp Contact Form ${process.env.CONTACT_EMAIL_SEND_ADDRESS!}`,
    to: process.env.CONTACT_EMAIL_RECEIVE_ADDRESS!,
    subject: `Contact from ${data.name} (${data.email})`,
    text: Object.values(data).join("\n"),
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
