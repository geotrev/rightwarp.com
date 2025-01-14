import { MediaCard, MediaCardProps } from "../shared/MediaCard"

export const PostList = ({ posts }: { posts?: MediaCardProps[] }) => {
  if (!posts) return null

  return (
    <div className="grid gap-6 2xl:grid-cols-2">
      {posts?.map((post) => <MediaCard key={post.slug} {...post} />)}
    </div>
  )
}
