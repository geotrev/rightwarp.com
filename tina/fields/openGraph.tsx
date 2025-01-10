import { TinaField } from "tinacms"

export const OpenGraphField: TinaField = {
  type: "object",
  name: "openGraph",
  label: "Open Graph",
  fields: [
    {
      name: "image",
      label: "Image",
      description: "Must be 1200x630 pixels. Learn more: https://ogp.me/. Defaults to OG image.",
      type: "image",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "string",
      options: ["website", "article", "product"],
      ui: {
        defaultValue: "website",
      },
    },
    {
      name: "title",
      label: "Title",
      description: "Defaults to site meta title.",
      type: "string",
    },
    {
      name: "description",
      label: "Description",
      description: "Defaults to site meta description.",
      type: "string",
    },
    {
      name: "url",
      label: "URL",
      description: "Defaults to site meta canonical URL.",
      type: "string",
    },
  ],
}
