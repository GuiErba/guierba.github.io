import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const BlogPageIntroduction = () => {
  return (
    <section className="container py-8 md:py-16">
      <div className="max-w-[640px]">
        <SectionTitle
          subtitle="blog"
          title="Latest Posts"
          className="items-start"
        />
        <p className="text-zinc-400 mt-6 mb-6">
          Here you will find articles, news and content about technology,
          programming and my learnings.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors"
        >
          <HiArrowNarrowLeft size={20} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
