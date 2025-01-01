import { Collection } from "tinacms"

const KEYWORD_MIN = 3

export const SiteSettings: Collection = {
  name: "settings",
  label: "Site Settings",
  path: "src/content/settings",
  format: "json",
  // https://tina.io/docs/editing/single-document-collections#caveats
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "seoTitle",
      label: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      label: "SEO Description",
      type: "string",
    },
    {
      name: "seoKeywords",
      label: "SEO Keywords (comma separated)",
      type: "string",
      ui: {
        validate: (input) => {
          const keywords = input?.split(",")
          if (keywords && keywords.length < KEYWORD_MIN) {
            return `At least ${KEYWORD_MIN} keywords are required`
          }
        },
      },
    },
    {
      name: "seoCanonicalUrl",
      label: "Canonical URL",
      type: "string",
      ui: {
        validate: (input) => {
          if (input && !input.startsWith("https://") && !input.startsWith("http://")) {
            return "Must be a valid URL"
          }
        },
      },
    },
    {
      name: "seoOgImageData",
      label: "SEO OpenGraph Image",
      type: "object",
      fields: [
        {
          name: "seoOgImage",
          label: "Image",
          type: "image",
        },
        {
          name: "seoOgImageAlt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "seoFavicon",
      label: "Favicon",
      type: "object",
      fields: [
        {
          name: "seoBaseFavicon",
          label: "32x32 Icon",
          type: "image",
        },
        {
          name: "seoDenseFavicon",
          label: "48x48 Icon",
          type: "image",
        },
        {
          name: "seoLosslessFavicon",
          label: "SVG Icon",
          type: "image",
        },
        {
          name: "seoAppleIcon",
          label: "180x180 Icon (Apple)",
          type: "image",
        },
      ],
    },
  ],
}
