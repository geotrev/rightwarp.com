import { defineConfig } from "tinacms"

import { Post } from "./schemas/post"
import { SiteSettings } from "./schemas/site-settings"

const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main"

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Singletons
      SiteSettings,
      // // Blocks
      // Categories,
      // Authors,
      // Components,
      // // Documents
      // Page,
      Post,
      // Work,
    ],
  },
})
