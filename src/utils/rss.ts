import fs from "fs"
import RSS from "rss"

type Posts = {
  title: string
  description: string
  authors: {
    image: string
    name: string
  }[]
  date: string
  categories: {
    color: string
    name: string
  }[]
  slug: string
}[]

export default function generateRssFeed(posts: Posts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://www.rightwarp.com"
      : "http://localhost:3000"

  const feedOptions = {
    title: "Right Warp Blog Posts | RSS Feed",
    description: "Posts about design and web development",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/uploads/icon.jpeg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} Right Warp, LLC`,
  }

  const feed = new RSS(feedOptions)

  // Add each individual post to the feed.
  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      author: post.authors.map((author) => author.name).join(", "),
      date: post.date,
      categories: post.categories.map((category) => category.name),
      url: `${site_url}${post.slug}`,
    })
  })

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }))
}
