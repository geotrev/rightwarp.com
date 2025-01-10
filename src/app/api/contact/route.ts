import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const topic = formData.get("topic")
  const details = formData.get("details")
}
