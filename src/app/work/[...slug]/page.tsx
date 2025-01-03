import { notFound } from "next/navigation"

import { queryWorkEntry, queryWorkRoutes } from "@/tina/queries"

import { ClientPage } from "./client-page"

export async function generateStaticParams() {
  return queryWorkRoutes()
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const query = await queryWorkEntry(`${slug}`)

  if (!query) {
    notFound()
  }

  return <ClientPage {...query.page} />
}
