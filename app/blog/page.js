'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BLOG_POSTS = [
  {
    slug: 'the-downhill-mountain-bike-thrill',
    title: 'The Downhill Mountain Bike Thrill',
    category: 'Adventure',
    date: 'May 14, 2025',
    author: 'KG Reporter',
    img: '/images/blog/mountain-bike-thrill.webp',
    excerpt: "Killington isn't just a winter destination. When the snow melts, the mountain transforms into one of the best downhill mountain bike parks on the East Coast.",
  },
  {
    slug: 'the-allure-of-exclusivity-exploring-private-ski-areas',
    title: 'The Allure of Exclusivity: Exploring Private Ski Areas',
    category: 'Skiing',
    date: 'January 12, 2025',
    author: 'KG Reporter',
    img: '/images/blog/private-ski-areas.webp',
    excerpt: 'Private ski areas offer a distinctive and exclusive skiing experience, catering to those who seek a more personalized and secluded winter adventure.',
  },
  {
    slug: 'classic-general-stores-vermont',
    title: "Vermont's Timeless Charm: Classic General Stores",
    category: 'Culture',
    date: 'January 11, 2025',
    author: 'KG Reporter',
    img: '/images/blog/general-stores-vermont.webp',
    excerpt: 'Nestled within the rolling hills and quaint villages of Vermont, the classic general store endures as a cornerstone of community life.',
  },
  {
    slug: 'plan-your-perfect-ski-weekend-in-killington',
    title: 'Plan Your Perfect Ski Weekend in Killington',
    category: 'Travel',
    date: 'January 3, 2025',
    author: 'KG Reporter',
    img: '/images/blog/ski-weekend-killington.webp',
    excerpt: 'Killington offers everything you need for an unforgettable ski weekend — from thrilling slopes to cozy après-ski spots and charming Vermont towns nearby.',
  },
  {
    slug: 'toughest-ski-runs-in-vermont',
    title: 'Toughest Ski Runs in Vermont',
    category: 'Skiing',
    date: 'February 6, 2025',
    author: 'KG Reporter',
    img: '/images/blog/toughest-ski-runs.webp',
    excerpt: "Vermont is a snowy paradise for skiers — but if you think the Green Mountains are all gentle rollers, you haven't been on the right trails.",
  },
  {
    slug: 'killington-resort-2024-25',
    title: "What's New at Killington Resort for Winter 2024–25",
    category: 'News',
    date: 'December 3, 2024',
    author: 'KG Reporter',
    img: '/images/blog/killington-resort-2024.webp',
    excerpt: 'The Beast of the East enters a new era of independence with expanded snowmaking, the Stifel Killington Cup, and the emerging Great Gulf Village development.',
  },
  {
    slug: 'top-ski-trails-killington',
    title: 'Top Skiing & Snowboarding Trails at Killington for Every Skill Level',
    category: 'Skiing',
    date: 'December 17, 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-trails-killington.webp',
    excerpt: "Killington offers trails for every ability — from wide beginner greens to Outer Limits, the steepest mogul run in the East. Here's how to navigate the mountain.",
  },
  {
    slug: 'park-city-ski-patrol-approves-strike',
    title: 'Park City Ski Patrol Approves Strike Amid Contract Disputes',
    category: 'News',
    date: 'December 19, 2024',
    author: 'KG Reporter',
    img: '/images/blog/park-city-strike.webp',
    excerpt: "Park City Mountain's ski patrol voted to authorize a strike during the peak holiday season amid ongoing contract negotiations with resort management.",
  },
  {
    slug: '2024-powder-pursuits',
    title: '2024 Powder Pursuits: Ski & Snowboard Travel Trends in the Northeast',
    category: 'Research',
    date: 'January 17, 2024',
    author: 'John Eidson',
    img: '/images/blog/powder-pursuits-2024.webp',
    excerpt: 'A survey-based report analyzing northeastern ski travel and accommodation trends from 1,000 respondents — who they are, where they go, and what they want.',
  },
  {
    slug: 'top-5-summer-ski-and-snowboard-camps',
    title: 'Top 5 Summer Ski and Snowboard Camps',
    category: 'Training',
    date: 'April 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-snowboard-camp.webp',
    excerpt: "Summer camp season is here. Whether you're chasing progression or want to lock in fundamentals before next winter, these are the top training programs worth knowing about.",
  },
  {
    slug: 'become-a-curated-expert',
    title: 'Become a "Curated" Expert',
    category: 'Gear',
    date: 'February 2024',
    author: 'KG Reporter',
    img: '/images/blog/curated-expert.webp',
    excerpt: 'Curated.com connects shoppers with real outdoor experts for personalized gear advice — and they\'re looking for knowledgeable skiers and snowboarders to join the platform.',
  },
]

const CATEGORY_COLORS = {
  'Adventure': '#00B4D8',
  'Skiing': '#0077A8',
  'Culture': '#6B7280',
  'Travel': '#059669',
  'News': '#DC2626',
  'Research': '#7C3AED',
  'Training': '#D97706',
  'Gear': '#EA580C',
}

export default function BlogPage() {
  const featured = BLOG_POSTS[0]
  const rest = BLOG_POSTS.slice(1)

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Killington Getaway</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Stories &amp; Travel Advice</h1>
          <p className="text-gray-400 text-lg">Inspiration, guides, and insider knowledge from the mountain.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col md:flex-row gap-0 bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-12"
          >
            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: CATEGORY_COLORS[featured.category] || '#00B4D8' }}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight group-hover:text-[#00B4D8] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold" style={{ color: '#00B4D8' }}>Read Article →</span>
                <span className="text-xs text-gray-400">By {featured.author}</span>
              </div>
            </div>
          </Link>

          {/* Rest of posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: CATEGORY_COLORS[post.category] || '#00B4D8' }}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#00B4D8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3 line-clamp-2">{post.excerpt}</p>
                  <span className="text-xs font-semibold" style={{ color: '#00B4D8' }}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
