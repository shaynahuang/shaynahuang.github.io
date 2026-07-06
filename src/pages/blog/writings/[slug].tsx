import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import Layout from '../../../components/common/Layout'
import { BLOG_POSTS_MOCK, type BlogPost } from '../../../data/blog-posts'

type WritingDetailProps = {
  post: BlogPost
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BLOG_POSTS_MOCK.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<WritingDetailProps> = async ({ params }) => {
  const slug = params?.slug as string
  const post = BLOG_POSTS_MOCK.find((item) => item.slug === slug)

  if (!post) {
    return { notFound: true }
  }

  return {
    props: { post },
  }
}

export default function WritingDetail({ post }: WritingDetailProps) {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')
  const title = language === 'en' ? post.title : post.titleZh
  const paragraphs = language === 'en' ? post.content : post.contentZh

  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/blog" className="text-gray-600 transition-colors hover:text-accent" title="Back">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="text-sm uppercase tracking-wider text-gray-500">{post.category}</div>
          </div>

          <div className="inline-flex rounded-full bg-white/80 p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                language === 'en' ? 'bg-accent text-white' : 'text-gray-600 hover:text-accent'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('zh')}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                language === 'zh' ? 'bg-accent text-white' : 'text-gray-600 hover:text-accent'
              }`}
            >
              中
            </button>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-accent md:text-5xl">{title}</h1>
        <div className="mb-8 text-sm text-gray-500">
          {post.date} · {post.readTime}
        </div>

        <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-soft">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-gray-900">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Layout>
  )
}
