export interface BlogPost {
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  image: string
  content: string[]
}

// 博客文章数据
export const BLOG_POSTS_MOCK: BlogPost[] = [
  {
    title: 'Getting Started with Next.js and TypeScript',
    date: '2024-01-15',
    slug: 'getting-started-nextjs-typescript',
    excerpt: 'Learn how to set up a modern web application using Next.js and TypeScript. This comprehensive guide covers everything from project initialization to deployment.',
    category: 'Web Development',
    readTime: '5 min read',
    image: '/images/ai1.jpg',
    content: [
      'Next.js and TypeScript are a practical pairing for building structured, maintainable web experiences.',
      'This note collects the basic setup ideas: clear page routes, typed data, reusable components, and a build process that catches problems before deployment.',
      'More detailed writing can be expanded here as the collection grows.'
    ]
  },
  {
    title: 'Understanding Machine Learning Algorithms',
    date: '2024-01-10',
    slug: 'understanding-ml-algorithms',
    excerpt: 'A deep dive into the fundamental machine learning algorithms that every data scientist should know. From linear regression to neural networks.',
    category: 'Machine Learning',
    readTime: '8 min read',
    image: '/images/pub4.png',
    content: [
      'Machine learning algorithms are different ways of translating patterns in data into decisions, predictions, or representations.',
      'A useful way to compare them is to ask what assumptions they make, what signals they learn from, and how their outputs should be interpreted.',
      'This page is ready for a longer essay when the final text is available.'
    ]
  },
  {
    title: 'Design Principles for Modern Web Applications',
    date: '2024-01-05',
    slug: 'design-principles-modern-web',
    excerpt: 'Explore the key design principles that make web applications both beautiful and functional. Learn about user experience, accessibility, and responsive design.',
    category: 'Design',
    readTime: '6 min read',
    image: '/images/PD_1_cover.png',
    content: [
      'Good web applications are shaped by clarity, rhythm, hierarchy, and respect for repeated use.',
      'Design choices should help people understand what matters, move through information, and recover gracefully when something goes wrong.',
      'This draft page can later hold the complete essay.'
    ]
  }
]
