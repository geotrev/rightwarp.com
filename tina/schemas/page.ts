import { Collection } from "tinacms"

export const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "json",
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
  // ui: {
  //   router: (props) => {
  //     if (props.document._sys.filename === "home") {
  //       return "/"
  //     }

  //     return props.document._sys.filename
  //   },
  // },
}
