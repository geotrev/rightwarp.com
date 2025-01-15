import client from "@tina/__generated__/client"

export const querySiteSettings = async () => {
  const settings = await client.queries.settings({ relativePath: "settings.json" })

  return settings
}
