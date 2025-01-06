import { queryAbout } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function About() {
  const query = await queryAbout()

  return <ClientPage {...query} />
}
