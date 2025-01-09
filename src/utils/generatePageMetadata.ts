import { Metadata } from "next"

import { querySiteSettings } from "@/tina/queries"

import { Page, Work } from "../../tina/__generated__/types"

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

const getPageTitle = (siteName: string, pageTitle: string) => `${siteName} • ${pageTitle}`

export async function generatePageMeta(page?: Page | Work): Promise<Metadata> {
  const result = await querySiteSettings()
  const settings = result.data.settings

  const title = getPageTitle(settings.siteName!, page?.title || settings.title!)
  const description = page?.description || settings.description!
  const metadataBase =
    process.env.NODE_ENV === "development"
      ? new URL(process.env.CONFIG_CANONICAL_URL_DEV!)
      : new URL(settings.canonicalUrl!)

  const ogImage = settings.ogImage!
  const ogTitle = getPageTitle(settings.siteName!, ogImage.title || page?.title || settings.title!)
  const ogDescription = ogImage.description || page?.description || description!
  const ogUrl =
    process.env.NODE_ENV === "development"
      ? process.env.CONFIG_CANONICAL_URL_DEV
      : ogImage.url || settings.canonicalUrl!
  const ogType = ogImage.type! as OgType

  return {
    metadataBase,
    title: title,
    description: description,
    keywords: settings.keywords,

    icons: [
      { rel: "icon", type: "image/png", url: settings.icons!.denseIcon!, sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", url: settings.icons!.svgIcon! },
      { rel: "shortcut icon", url: settings.icons!.baseIcon! },
      { rel: "apple-touch-icon", sizes: "180x180", url: settings.icons!.appleIcon! },
    ],

    appleWebApp: { title: settings.siteName! },

    openGraph: {
      siteName: settings.siteName!,
      title: ogTitle!,
      description: ogDescription,
      url: ogUrl,
      type: ogType,
      images: [
        {
          url: ogImage.image!,
          width: 1200,
          height: 630,
          alt: ogDescription,
        },
      ],
    },
  }
}
