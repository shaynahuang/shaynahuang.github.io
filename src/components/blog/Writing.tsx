import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { BlogPost } from '../../data/blog-posts'

interface WritingProps {
  posts: BlogPost[]
}

export default function Writing({ posts }: WritingProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  )

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts]
  )

  const updateScrollState = () => {
    const el = scrollerRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < maxScroll - 1)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [filteredPosts])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: 0 })
    window.requestAnimationFrame(updateScrollState)
  }, [activeCategory])

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return

    const distance = el.clientWidth * 0.8
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    })
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-accent display-script">Writings</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-accent text-white shadow-soft'
                    : 'bg-white/80 text-gray-700 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Scroll writings left"
          onClick={() => scrollByCard('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 z-10 inline-flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-accent shadow-soft transition hover:bg-accent/5 disabled:cursor-default disabled:opacity-30 md:-left-12 md:translate-x-0"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/writings/${post.slug}`}
              className="group relative aspect-[4/5] w-[calc((100%-1rem)/2)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg md:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/90 transition-transform duration-300 group-hover:translate-y-[-2px]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 px-3 py-3 md:px-4">
                <div className="line-clamp-2 text-[12px] font-normal leading-snug text-black md:text-sm">
                  {post.title}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-gray-500">
                  {post.date} · {post.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll writings right"
          onClick={() => scrollByCard('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 z-10 inline-flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-accent shadow-soft transition hover:bg-accent/5 disabled:cursor-default disabled:opacity-30 md:-right-12 md:translate-x-0"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
