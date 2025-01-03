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

    //   if (!["work/", "blog/"].includes(props.document._sys.path)) {
    //     return props.document._sys.filename
    //   }
    // },
    ...slugify("title"),
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Page Description",
      required: true,
    },
  ],
}
