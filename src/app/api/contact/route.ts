import { NextResponse } from "next/server"

import { FormStatus } from "@/utils/helpers"

import { MailData, sendEmail } from "./sendMail"

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
      return NextResponse.json({ status: FormStatus.ERROR })
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

  if (process.env.NODE_ENV === "production" || process.env.CONTACT_EMAIL_ENABLE_DEV === "true") {
    try {
      const isOk = await sendEmail(data)

      if (isOk) {
        return NextResponse.json({ status: FormStatus.SUCCESS })
      } else {
        return NextResponse.json({ status: FormStatus.ERROR })
      }
    } catch (e) {
      console.error(e)
      return NextResponse.json({ status: FormStatus.ERROR })
    }
  } else {
    return NextResponse.json({ status: FormStatus.SUCCESS })
  }
}
