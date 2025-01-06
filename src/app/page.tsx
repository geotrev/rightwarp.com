import { queryHome } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function Home() {
  const query = await queryHome()

  return <ClientPage {...query} />
}
