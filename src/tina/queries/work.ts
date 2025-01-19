import client from "@tina/__generated__/client"
import { WorkServices } from "@tina/__generated__/types"
import "server-only"

import { Visibility, toServices, toSlug } from "../helpers"

export const queryWorkIndex = async () => {
  const page = await client.queries.page({ relativePath: "work.json" })
  const _entries = await client.queries.workConnection({
    sort: "date",
    filter: {
      visibility: { eq: Visibility.PUBLIC },
    },
  })

  const entries = _entries.data.workConnection.edges
    ?.map((edge) => {
      const entry = edge?.node
      return {
        title: entry!.title,
        description: entry!.description,
        services: toServices(entry!.services as WorkServices[]),
        image: {
          src: entry!.images[0].src,
          alt: entry!.images[0].alt,
        },
        slug: toSlug(entry!._sys.filename, "work"),
      }
    })
    .reverse()

  return { page, entries }
}

// work entry

export const queryWorkStaticParams = async () => {
  const pages = await client.queries.workConnection()
  const paths = pages.data?.workConnection?.edges?.map((edge) => ({
    slug: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}

export const queryWorkEntry = async (slug: string) => {
  try {
    const page = await client.queries.work({ relativePath: `${slug}.mdx` })

    return { page }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return null
  }
}
