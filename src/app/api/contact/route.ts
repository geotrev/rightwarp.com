import { NextResponse } from "next/server"

import { MailData, sendEmail } from "@/server/sendMail"
import { ContactFormStatus } from "@/utils/helpers"

export async function POST(req: Request) {
  const formData = await req.json()
  const formValues = formData.formValues as [string, string][]
  const gRecaptchaToken = formData.gRecaptchaToken as string

  // Verify recaptcha

  if (process.env.NODE_ENV === "production") {
    const recaptchaResults = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`,
      {
        method: "POST",
      },
    ).then((res) => res.json())

    if (!recaptchaResults.success) {
      return NextResponse.json({ status: ContactFormStatus.ERROR })
    }
  }

  const data = formValues.reduce(
    (acc, [key, value]) => {
      const isTopic = key.startsWith("topic-")

      if (isTopic) {
        ;(acc["topics"] as string[]).push(key.replace("topic-", ""))
      } else {
        acc[key] = value
      }

      return acc
    },
    {
      name: "",
      email: "",
      phone: "",
      topics: [],
      details: "",
    } as MailData,
  )

  // if (process.env.NODE_ENV === "production") {
  try {
    const isOk = await sendEmail(data)

    if (isOk) {
      return NextResponse.json({ status: ContactFormStatus.SUCCESS })
    } else {
      return NextResponse.json({ status: ContactFormStatus.ERROR })
    }
  } catch (e) {
    console.error(e)
    return NextResponse.json({ status: ContactFormStatus.ERROR })
  }
  // } else {
  //   return NextResponse.json({ status: ContactFormStatus.SUCCESS })
  // }
}
