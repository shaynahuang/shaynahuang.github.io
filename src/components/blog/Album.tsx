type Memory = { title: string; year: number; slug: string; image?: string }

const MEMORIES: Memory[] = [
  { title: 'FriendTRIP in Yunnan', year: 2025, slug: 'yunnan', image: '/images/memories/yunnan/cover.jpg' },
  { title: 'Seaside of Shenzhen', year: 2025, slug: 'nanao', image: '/images/memories/nanao/cover.jpg' },
  { title: 'Visiting as IDGer!', year: 2025, slug: 'idgers', image: '/images/memories/idgers/cover.jpg' },
  { title: 'CHI 2025 in Yokohama', year: 2025, slug: 'chi', image: '/images/memories/chi/cover.jpg' },
  { title: 'A Taste of Tokyo', year: 2025, slug: 'tokyo', image: '/images/memories/tokyo/cover.jpg' },
  { title: 'Sharp Island', year: 2025, slug: 'sharp island', image: '/images/memories/sharp island/cover.jpg' },
  { title: 'A Walk in Rainy Central', year: 2025, slug: 'central', image: '/images/memories/central/cover.jpg' },
  { title: 'Collection of Nanjing', year: 2024, slug: 'nanjing', image: '/images/memories/nanjing/cover.jpg' },
]

import Image from 'next/image'

export default function Album() {
  const byYearDesc = MEMORIES
    .slice()
    .sort((a, b) => b.year - a.year)
    .reduce<Record<number, Memory[]>>((acc, m) => {
      acc[m.year] = acc[m.year] ? [...acc[m.year], m] : [m]
      return acc
    }, {})

  const years = Object.keys(byYearDesc)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 display-script">Memories</h2>

      {years.map((year) => (
        <div key={year} className="mb-10">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{year}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {byYearDesc[year].map((m, idx) => (
              <a
  key={year + '-' + idx}
  href={`/blog/memories/${m.slug}`}
  className="group aspect-square rounded-full bg-white shadow-soft overflow-hidden relative transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
>
  <div className="absolute inset-0">
    <Image
      src={m.image || '/images/photo.jpg'}
      alt={m.title}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className="object-cover"
    />
  </div>
</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
