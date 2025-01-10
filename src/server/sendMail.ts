import nodemailer from "nodemailer"
import { MailOptions } from "nodemailer/lib/json-transport"
import "server-only"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    pass: process.env.CONTACT_SEND_EMAIL_PASSWORD,
  },
})

export const sendEmail = async ({ data }: MailOptions) => {
  const html = `
    <h1>Inquiry from rightwarp.com</h1>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Topics: ${data.topics.join(", ")}</p>
    <p>Message: ${data.details}</p>
  `

  const mailOptions = {
    to: process.env.CONTACT_RECEIVE_EMAIL_ADDRESS,
    from: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    subject: "Inquiry from rightwarp.com",
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)
  } catch (error) {
    console.error("Error sending email:", error)
  }
}
