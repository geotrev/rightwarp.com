import { Page, Post, Settings, Work } from "@tina/__generated__/types"
import { Metadata } from "next"

import { querySiteSettings } from "@/tina/queries"

// Because Metadata['openGraph']['type'] is not accessible in the Next.js
type OgType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other"

type MetaOverrides = {
  title?: string
  description?: string
  canonicalUrl?: string
}

const getPageTitle = (siteName?: string, pageTitle?: string) =>
  pageTitle ? `${siteName} • ${pageTitle}` : siteName ? siteName : "Needs Title"

const getIcons = (rootSettings: Settings) => {
  const icons: Metadata["icons"] = []

  if (rootSettings?.icons?.baseIcon) {
    icons.push({
      rel: "shortcut icon",
      url: rootSettings.icons.baseIcon,
    })
  }

  if (rootSettings?.icons?.denseIcon) {
    icons.push({
      rel: "icon",
      type: "image/png",
      url: rootSettings.icons.denseIcon,
      sizes: "96x96",
    })
  }

  if (rootSettings?.icons?.svgIcon) {
    icons.push({
      rel: "icon",
      type: "image/svg+xml",
      url: rootSettings.icons.svgIcon,
    })
  }

  if (rootSettings?.icons?.appleIcon) {
    icons.push({
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: rootSettings.icons.appleIcon,
    })
  }

  return icons
}

export async function generatePageMeta(
  page?: Page | Post | Work,
  overrides?: MetaOverrides,
): Promise<Metadata> {
  const result = await querySiteSettings()
  const rootSettings = result.data.settings

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dynamicTitle = overrides?.title
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dynamicDescription = overrides?.description
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dynamicCanonical = overrides?.canonicalUrl

  // base metadata
  const title = getPageTitle(rootSettings.siteName, page?.seo?.title || rootSettings.seo?.title)
  const description = page?.seo?.description || rootSettings.seo?.description
  const keywords = page?.seo?.keywords || rootSettings?.seo?.keywords

  let metadataBase: string | URL
  if (process.env.NODE_ENV === "development") {
    metadataBase = new URL(process.env.CONFIG_CANONICAL_URL_DEV!)
  } else if (rootSettings?.seo?.canonicalUrl) {
    metadataBase = new URL(rootSettings.seo.canonicalUrl)
  } else {
    metadataBase = new URL("https://placehold.co")
  }

  const canonical = page?.seo?.canonicalUrl || metadataBase

  // open graph
  const openGraph = page?.openGraph || rootSettings.openGraph
  const ogImage = openGraph?.image
  const ogTitle = getPageTitle(
    rootSettings.siteName,
    openGraph?.title || page?.seo?.title || rootSettings.seo?.title,
  )
  const ogDescription =
    openGraph?.description ||
    page?.seo?.description ||
    rootSettings?.seo?.description ||
    "Needs Description"
  const ogUrl =
    process.env.NODE_ENV === "development"
      ? process.env.CONFIG_CANONICAL_URL_DEV!
      : openGraph?.url || page?.seo?.canonicalUrl || rootSettings?.seo?.canonicalUrl || "Needs URL"
  const ogType = openGraph?.type as OgType
  const openGraphMetadata: Partial<Metadata> = {
    openGraph: {
      siteName: rootSettings.siteName,
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      type: ogType,
      images: [
        {
          url: ogImage!,
          width: 1200,
          height: 630,
          alt: ogDescription,
        },
      ],
    },
  }

  // icons
  const icons = getIcons(rootSettings as Settings)

  return {
    metadataBase,
    title: title,
    description: description,
    keywords,
    alternates: { canonical },
    icons,
    appleWebApp: { title: rootSettings.siteName! },
    ...(ogImage && openGraphMetadata),
  }
}
