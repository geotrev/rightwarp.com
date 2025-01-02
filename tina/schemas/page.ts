import { Collection } from "tinacms"

import { slugify } from "../plugins/slugify"

export const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "json",
  ui: {
    // router: (props) => {
    //   if (props.document._sys.filename === "home") {
    //     return "/"
    //   }
    //   return props.document._sys.filename
    // },
    ...slugify("pageTitle"),
  },
  fields: [
    {
      type: "string",
      name: "pageTitle",
      label: "Page Title",
      required: true,
    },
    {
      type: "string",
      name: "pageDescription",
      label: "Page Description",
      required: true,
    },
  ],
}
