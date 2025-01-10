import { NextResponse } from "next/server"

import { MailData, sendEmail } from "@/server/sendMail"
import { ContactFormStatus } from "@/utils/helpers"

export async function POST(req: Request) {
  const formData = await req.formData()
  const formValues = [...formData.entries()].map(([key, value]) => [key, value.toString()])

  const data = formValues.reduce(
    (acc, [key, value]) => {
      const isTopic = key.startsWith("topic-")

      if (isTopic) {
        ;(acc["topics"] as string[]).push(key)
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

  if (process.env.NODE_ENV === "production") {
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
  } else {
    return NextResponse.json({ status: ContactFormStatus.SUCCESS })
  }
}
