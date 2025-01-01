import { Collection, Template } from "tinacms"

const HeroComponent: Template = {
  name: "heroComponent",
  label: "Hero",
  fields: [
    {
      name: "heroVariant",
      label: "Variant",
      type: "string",
      options: ["standard", "display"],
    },
    {
      type: "string",
      name: "heroTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "heroDescription",
      label: "Description",
    },
  ],
}

export const Component: Collection = {
  name: "component",
  label: "Components",
  path: "src/content/components",
  format: "json",
  fields: [
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      templates: [HeroComponent],
    },
  ],
}
