import nodemailer from "nodemailer"
import "server-only"

export type MailData = Record<string, string | string[]>

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    pass: process.env.CONTACT_SEND_EMAIL_PASSWORD,
  },
})

export const sendEmail = async (data: MailData) => {
  console.log("sendEmail")
  const html = `
    <h1>Contact form details</h1>
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone ?? ""}</p>
    <p>Topics: ${(data?.topics as string[])?.join(", ") ?? ""}</p>
    <p>Message: ${data?.details ?? ""}</p>
  `

  const mailOptions = {
    to: process.env.CONTACT_RECEIVE_EMAIL_ADDRESS,
    from: process.env.CONTACT_SEND_EMAIL_ADDRESS,
    subject: "Contact from rightwarp.com",
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
