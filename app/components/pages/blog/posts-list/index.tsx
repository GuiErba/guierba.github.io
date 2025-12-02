import Link from 'next/link'
import { BlogPostCard } from './post-card'
import { Post } from '@/app/types/posts'

type BlogPostsListProps = {
  posts: Post[]
}

export const BlogPostsList = ({ posts }: BlogPostsListProps) => {
  return (
    <section className="container pb-32">
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block h-full"
          >
            <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
    </section>
  )
}
