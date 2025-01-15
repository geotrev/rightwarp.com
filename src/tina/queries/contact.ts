import client from "@tina/__generated__/client"

export const queryContact = async () => {
  const page = await client.queries.page({ relativePath: "contact.json" })

  return { page }
}
