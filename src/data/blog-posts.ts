export interface BlogPost {
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  image: string
  titleZh: string
  content: string[]
  contentZh: string[]
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
    titleZh: 'Next.js 与 TypeScript 入门',
    content: [
      'Next.js and TypeScript are a practical pairing for building structured, maintainable web experiences.',
      'This note collects the basic setup ideas: clear page routes, typed data, reusable components, and a build process that catches problems before deployment.',
      'More detailed writing can be expanded here as the collection grows.'
    ],
    contentZh: [
      'Next.js 和 TypeScript 是一组很实用的搭配，适合用来构建结构清晰、便于维护的网页体验。',
      '这篇笔记整理了一些基础搭建思路：清楚的页面路由、带类型的数据、可复用组件，以及能在部署前发现问题的构建流程。',
      '后续有完整正文时，可以继续在这里扩展。'
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
    titleZh: '理解机器学习算法',
    content: [
      'Machine learning algorithms are different ways of translating patterns in data into decisions, predictions, or representations.',
      'A useful way to compare them is to ask what assumptions they make, what signals they learn from, and how their outputs should be interpreted.',
      'This page is ready for a longer essay when the final text is available.'
    ],
    contentZh: [
      '机器学习算法可以理解为把数据中的模式转化为决策、预测或表示的不同方式。',
      '比较不同算法时，一个有用的方法是追问：它们假设了什么、从哪些信号中学习，以及输出结果应该如何被解释。',
      '等完整文章准备好后，这个页面可以继续承载更长的正文。'
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
    titleZh: '现代 Web 应用的设计原则',
    content: [
      'Good web applications are shaped by clarity, rhythm, hierarchy, and respect for repeated use.',
      'Design choices should help people understand what matters, move through information, and recover gracefully when something goes wrong.',
      'This draft page can later hold the complete essay.'
    ],
    contentZh: [
      '好的 Web 应用往往由清晰度、节奏、层级，以及对重复使用场景的尊重共同塑造。',
      '设计选择应该帮助人们理解重点、顺畅地浏览信息，并在出错时能够自然恢复。',
      '这个草稿页之后可以替换为完整文章。'
    ]
  }
]
