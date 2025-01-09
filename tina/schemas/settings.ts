import { Collection } from "tinacms"

const KEYWORD_MIN = 3

export const Settings: Collection = {
  name: "settings",
  label: "Settings",
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
      name: "siteName",
      label: "Site Name",
      description: "e.g., MyCoolWebsite LLC",
      type: "string",
      required: true,
    },
    {
      name: "title",
      label: "Default Title",
      description: "Used if a page title isn't provided",
      type: "string",
      required: true,
    },
    {
      name: "description",
      label: "Default Description",
      description: "Used if a page description isn't provided",
      type: "string",
      required: true,
    },
    {
      name: "keywords",
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
      required: true,
    },
    {
      name: "canonicalUrl",
      label: "Canonical URL",
      type: "string",
      ui: {
        validate: (input) => {
          if (input && !input.startsWith("https://") && !input.startsWith("http://")) {
            return "Must be a valid URL"
          }
        },
      },
      required: true,
    },
    {
      name: "ogImage",
      label: "OpenGraph",
      type: "object",
      fields: [
        {
          name: "image",
          label: "Image",
          description: "Must be 1200x630 pixels. Learn more: https://ogp.me/",
          type: "image",
          required: true,
        },
        {
          name: "type",
          label: "Type",
          type: "string",
          options: ["website", "article", "product"],
          required: true,
        },
        {
          name: "title",
          label: "Title",
          description: "Defaults to site title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          description: "Defaults to site description",
          type: "string",
        },
        {
          name: "url",
          label: "URL",
          description: "Defaults to canonical URL",
          type: "string",
        },
      ],
    },
    {
      name: "icons",
      label: "Icons",
      type: "object",
      fields: [
        {
          name: "baseIcon",
          label: "Favicon",
          description: "Must be 32x32 pixels",
          type: "image",
          required: true,
        },
        {
          name: "denseIcon",
          label: "Dense Favicon",
          description: "Must be 96x96 pixels",
          type: "image",
          required: true,
        },
        {
          name: "svgIcon",
          label: "Lossless Icon",
          description: "Must be SVG file format",
          type: "image",
          required: true,
        },
        {
          name: "appleIcon",
          label: "Apple Icon",
          description: "Must be 180x180 pixels",
          type: "image",
          required: true,
        },
      ],
    },
  ],
}
