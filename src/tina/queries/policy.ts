import client from "@tina/__generated__/client"

export const queryPolicy = async (filename: string) => {
  const page = await client.queries.page({ relativePath: `${filename}.json` })
  const settings = await client.queries.settings({
    relativePath: "settings.json",
  })
  const policy = settings.data.settings[filename as "privacy" | "terms"]

  return { page, policy }
}
