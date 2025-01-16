import { Post as PostType } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "@/components/core"

export interface PostProps {
  post: PostType
  relatedPosts?: {
    title: string
    slug: string
    date: string
  }[]
}

export const Post = ({ post, relatedPosts }: PostProps) => {
  return (
    <Container isRaised isConstrained className="grid gap-8 xl:grid-cols-4">
      <article className="xl:col-span-3">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="prose">
          <TinaMarkdown content={post.body} />
        </div>
      </article>
      {relatedPosts && (
        <aside className="xl:col-span-1">
          <h2>Related Posts</h2>
          <ul>
            {relatedPosts.map((relatedPost) => (
              <li key={relatedPost.slug}>
                <a href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</a>
                <p>{relatedPost.date}</p>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </Container>
  )
}
