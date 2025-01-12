import MailerLite from "@mailerlite/mailerlite-nodejs"
import { NextResponse } from "next/server"
import xss from "xss"

import { FormStatus, EMAIL_REGEXP } from "@/utils/helpers"

export async function POST(req: Request) {
  const res = await req.json()

  if (!res?.email) {
    return NextResponse.json({ status: FormStatus.ERROR })
  }

  const email = xss(res.email.trim())

  if (!EMAIL_REGEXP.test(email)) {
    return NextResponse.json({ status: FormStatus.ERROR })
  }

  try {
    const mailerlite = new MailerLite({
      api_key: process.env.NEWSLETTER_API_TOKEN!,
    })

    const params = {
      email,
      groups: [process.env.NEWSLETTER_GROUP_ID!],
    }

    const res = await mailerlite.subscribers.createOrUpdate(params)

    if (res.data.data.status === "active") {
      return NextResponse.json({ status: FormStatus.SUCCESS })
    } else {
      return NextResponse.json({ status: FormStatus.ERROR })
    }
  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: FormStatus.ERROR })
  }
}
