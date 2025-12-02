import { Post } from '@/app/types/posts'
import Image from 'next/image'

type BlogPostCardProps = {
  post: Post
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="group h-full p-6 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="w-full h-40 overflow-hidden">
          {post.featuredImage?.url && (
            <Image
              width={400}
              height={160}
              className="w-full h-full object-cover rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
              src={post.featuredImage.url}
              alt={`Featured image of post ${post.title}`}
              unoptimized
            />
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-medium text-zinc-100 group-hover:text-zinc-300 transition-colors mb-2">
            {post.title}
          </h3>

          <p className="text-zinc-400 mb-6 line-clamp-2">{post.excerpt}</p>

          <span className="text-zinc-300 text-sm font-medium block">
            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
    </div>
  )
}
