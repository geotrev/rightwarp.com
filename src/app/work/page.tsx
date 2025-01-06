import { queryWorkIndex } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function Work() {
  const query = await queryWorkIndex()

  return <ClientPage {...query} />
}
