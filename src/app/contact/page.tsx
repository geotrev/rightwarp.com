import { queryContact } from "@/tina/queries"

import { ClientPage } from "./client-page"

export default async function Contact() {
  const query = await queryContact()

  return <ClientPage {...query} />
}
