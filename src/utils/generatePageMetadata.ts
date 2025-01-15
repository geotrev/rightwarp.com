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
  url?: string
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

  const dynamicTitle = overrides?.title
  const dynamicDescription = overrides?.description
  const dynamicCanonical = overrides?.url

  // base metadata
  const title = getPageTitle(
    rootSettings.siteName,
    dynamicTitle || page?.seo?.title || rootSettings.seo?.title,
  )
  const description = dynamicDescription || page?.seo?.description || rootSettings.seo?.description
  const keywords = page?.seo?.keywords || rootSettings?.seo?.keywords

  // Root metadata url base - used by all metadata fields
  // to enable relative paths
  let metadataBase: string | URL
  if (process.env.NODE_ENV === "development") {
    metadataBase = new URL(process.env.CONFIG_CANONICAL_URL_DEV!)
  } else if (rootSettings?.seo?.url) {
    metadataBase = new URL(rootSettings.seo.url)
  } else {
    metadataBase = new URL("https://placehold.co")
  }

  const canonical = dynamicCanonical || page?.seo?.url || metadataBase

  // open graph
  const pageOpenGraph = page?.openGraph
  const rootOpenGraph = rootSettings.openGraph
  const ogImage = pageOpenGraph?.image || rootOpenGraph?.image
  const ogTitle = getPageTitle(
    rootSettings.siteName,
    dynamicTitle ||
      pageOpenGraph?.title ||
      page?.seo?.title ||
      rootOpenGraph?.title ||
      rootSettings.seo?.title ||
      "Needs Title",
  )
  const ogDescription =
    dynamicDescription ||
    pageOpenGraph?.description ||
    page?.seo?.description ||
    rootOpenGraph?.description ||
    rootSettings?.seo?.description ||
    "Needs Description"

  const ogUrl =
    dynamicCanonical ||
    pageOpenGraph?.url ||
    page?.seo?.url ||
    rootOpenGraph?.url ||
    rootSettings?.seo?.url ||
    "https://placehold.co"

  const ogType = (pageOpenGraph?.type || rootOpenGraph?.type) as OgType

  const openGraph: Metadata["openGraph"] = ogImage
    ? {
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
      }
    : null

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
    openGraph,
  }
}
