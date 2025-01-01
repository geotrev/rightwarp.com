import { defineConfig } from "tinacms"

import { Category } from "./schemas/category"
import { Page } from "./schemas/page"
import { Post } from "./schemas/post"
import { SiteSettings } from "./schemas/site-settings"
import { Work } from "./schemas/work"

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
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Singletons
      SiteSettings,

      // Blocks
      Category,
      // Authors,
      // Component,

      // Documents
      Page,
      Post,
      Work,
    ],
  },
})
