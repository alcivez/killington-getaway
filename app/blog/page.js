'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const BLOG_POSTS = [
  {
    slug: 'the-downhill-mountain-bike-thrill',
    title: 'The Downhill Mountain Bike Thrill',
    category: 'Adventure',
    date: 'May 14, 2025',
    author: 'KG Reporter',
    img: '/images/blog/mountain-bike-thrill.jpeg',
    excerpt: "Killington isn't just a winter destination. When the snow melts, the mountain transforms into one of the best downhill mountain bike parks on the East Coast.",
  },
  {
    slug: 'the-allure-of-exclusivity-exploring-private-ski-areas',
    title: 'The Allure of Exclusivity: Exploring Private Ski Areas',
    category: 'Skiing',
    date: 'January 12, 2025',
    author: 'KG Reporter',
    img: '/images/blog/private-ski-areas.jpeg',
    excerpt: 'Private ski areas offer a distinctive and exclusive skiing experience, catering to those who seek a more personalized and secluded winter adventure.',
  },
  {
    slug: 'classic-general-stores-vermont',
    title: "Vermont's Timeless Charm: Classic General Stores",
    category: 'Culture',
    date: 'January 11, 2025',
    author: 'KG Reporter',
    img: '/images/blog/general-stores-vermont.jpeg',
    excerpt: 'Nestled within the rolling hills and quaint villages of Vermont, the classic general store endures as a cornerstone of community life.',
  },
  {
    slug: 'plan-your-perfect-ski-weekend-in-killington',
    title: 'Plan Your Perfect Ski Weekend in Killington',
    category: 'Travel',
    date: 'January 3, 2025',
    author: 'KG Reporter',
    img: '/images/blog/ski-weekend-killington.jpg',
    excerpt: 'Killington offers everything you need for an unforgettable ski weekend — from thrilling slopes to cozy après-ski spots and charming Vermont towns nearby.',
  },
  {
    slug: 'toughest-ski-runs-in-vermont',
    title: 'Toughest Ski Runs in Vermont',
    category: 'Skiing',
    date: 'February 6, 2025',
    author: 'KG Reporter',
    img: '/images/blog/toughest-ski-runs.png',
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
    img: '/images/blog/ski-trails-killington.jpg',
    excerpt: "Killington offers trails for every ability — from wide beginner greens to Outer Limits, the steepest mogul run in the East. Here's how to navigate the mountain.",
  },
  {
    slug: 'park-city-ski-patrol-approves-strike',
    title: 'Park City Ski Patrol Approves Strike Amid Contract Disputes',
    category: 'News',
    date: 'December 19, 2024',
    author: 'KG Reporter',
    img: '/images/blog/park-city-strike.jpeg',
    excerpt: "Park City Mountain's ski patrol voted to authorize a strike during the peak holiday season amid ongoing contract negotiations with resort management.",
  },
  {
    slug: '2024-powder-pursuits',
    title: '2024 Powder Pursuits: Ski & Snowboard Travel Trends in the Northeast',
    category: 'Research',
    date: 'January 17, 2024',
    author: 'John Eidson',
    img: '/images/blog/powder-pursuits-2024.png',
    excerpt: 'A survey-based report analyzing northeastern ski travel and accommodation trends from 1,000 respondents — who they are, where they go, and what they want.',
  },
  {
    slug: 'top-5-summer-ski-and-snowboard-camps',
    title: 'Top 5 Summer Ski and Snowboard Camps',
    category: 'Training',
    date: 'April 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-snowboard-camp.jpeg',
    excerpt: "Summer camp season is here. Whether you're chasing progression or want to lock in fundamentals before next winter, these are the top training programs worth knowing about.",
  },
  {
    slug: 'become-a-curated-expert',
    title: 'Become a "Curated" Expert',
    category: 'Gear',
    date: 'February 2024',
    author: 'KG Reporter',
    img: '/images/blog/curated-expert.png',
    excerpt: 'Curated.com connects shoppers with real outdoor experts for personalized gear advice — and they\'re looking for knowledgeable skiers and snowboarders to join the platform.',
  },
  {
    slug: 'the-history-of-killington',
    title: 'The History of Killington',
    category: 'Culture',
    date: 'August 1, 2023',
    author: 'KG Reporter',
    img: '/images/blog/history-of-killington.webp',
    excerpt: "From a colonial carriage road to the Beast of the East — the fascinating story behind how Killington became Vermont's largest ski resort.",
  },
  {
    slug: 'americas-first-ski-lift',
    title: "America's First Ski Lift",
    category: 'Culture',
    date: 'August 1, 2023',
    author: 'KG Reporter',
    img: '/images/blog/first-ski-lift.webp',
    excerpt: 'From a Viennese farmhouse water wheel to Union Pacific Railroad engineers — the surprisingly American story of how the chairlift was invented.',
  },
  {
    slug: 'best-vermont-fall-foliage-spots',
    title: 'Best Vermont Fall Foliage Spots',
    category: 'Travel',
    date: 'August 1, 2023',
    author: 'KG Reporter',
    img: '/images/blog/vermont-fall-foliage.png',
    excerpt: "Vermont is nearly 70% forest — and in mid-September through mid-October, it becomes the most spectacular foliage destination in North America.",
  },
  {
    slug: 'what-are-the-different-grades-of-maple-syrup',
    title: 'What Are The Different Grades of Maple Syrup',
    category: 'Culture',
    date: 'October 10, 2023',
    author: 'KG Reporter',
    img: '/images/blog/vermont-maple.png',
    excerpt: "Vermont produces over 50% of America's maple syrup. Here's a guide to Golden, Amber, Dark, and Very Dark grades — and how to use each.",
  },
  {
    slug: 'shipping-skis-ahead-when-flying',
    title: 'Shipping Skis Ahead When Flying',
    category: 'Travel',
    date: 'August 2023',
    author: 'KG Reporter',
    img: '/images/blog/shipping-skis.webp',
    excerpt: "Rent vs. fly vs. ship — a practical cost breakdown for every skier who travels with gear. The answer might surprise you.",
  },
  {
    slug: 'discount-gear-sites-for-skiing-and-snowboarding',
    title: 'Top 12 Discount Gear Sites for Skiing & Snowboarding',
    category: 'Gear',
    date: 'November 2023',
    author: 'KG Reporter',
    img: '/images/blog/discount-gear-sites.jpeg',
    excerpt: "Finding quality ski and snowboard gear at a reasonable price is an art form. Here are the 12 best sites for discounted equipment and apparel.",
  },
  {
    slug: 'season-pass-perks',
    title: 'Is It Worth Getting a Season Pass?',
    category: 'Skiing',
    date: 'October 2023',
    author: 'KG Reporter',
    img: '/images/blog/season-pass.jpeg',
    excerpt: "Ikon, Epic, or Indy? A detailed comparison of the major ski passes to help you figure out which one makes financial sense for your season.",
  },
  {
    slug: 'how-to-join-ski-patrol',
    title: 'A Guide to Joining Ski Patrol',
    category: 'Skiing',
    date: 'December 2023',
    author: 'KG Reporter',
    img: '/images/blog/how-to-join-ski-patrol.jpeg',
    excerpt: 'One of the most rewarding jobs on the mountain — and one of the hardest to get. A step-by-step guide to joining ski patrol from certifications to the on-snow assessment.',
  },
  {
    slug: 'ski-and-snowboard-iphone-and-android-apps',
    title: '5 Ski Apps I Can\'t Live Without',
    category: 'Gear',
    date: 'August 2023',
    author: 'KG Reporter',
    img: '/images/blog/ski-apps.webp',
    excerpt: 'From GPS tracking to 3D mountain maps — the best ski and snowboard apps for iPhone and Android that will upgrade your time on the mountain.',
  },
  {
    slug: 'top-10-discount-ski-lift-tickets-2023-24',
    title: 'Top 10 Ways to Save on Ski Lift Tickets',
    category: 'Skiing',
    date: 'October 2023',
    author: 'KG Reporter',
    img: '/images/blog/ski-lift-tickets.webp',
    excerpt: 'Lift tickets get more expensive every year — but there are still buried treasures. From K-Tickets to Indy Passes, here are 10 proven ways to ski for less.',
  },
  {
    slug: 'ski-clubs-in-the-us',
    title: 'Ski Clubs in the US',
    category: 'Skiing',
    date: 'November 2023',
    author: 'KG Reporter',
    img: '/images/blog/ski-clubs.jpeg',
    excerpt: "A comprehensive state-by-state directory of ski clubs across the United States — from Connecticut to Colorado, organized alphabetically for easy navigation.",
  },
  {
    slug: 'just-a-ski-bum-with-a-rv',
    title: 'Just a Ski Bum With an RV',
    category: 'Travel',
    date: 'January 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-bum-rv.jpg',
    excerpt: 'Van life meets powder chasing — the nomadic lifestyle of RV-dwelling ski bums who follow storms from resort to resort all season long.',
  },
  {
    slug: 'booking-groups-dinners',
    title: 'Tips for Booking Group Ski Trip Dinners',
    category: 'Travel',
    date: 'August 2023',
    author: 'KG Reporter',
    img: '/images/blog/apre-ski.jpeg',
    excerpt: "Group dinners are the highlight of any ski trip — but booking them is a headache. Here's how to make reservations that actually work for everyone.",
  },
  {
    slug: 'favorite-energy-bars-for-skiers',
    title: 'Favorite Energy Bars for Skiers',
    category: 'Gear',
    date: 'December 2023',
    author: 'KG Reporter',
    img: '/images/blog/energy-bars.webp',
    excerpt: 'When you want maximum runs and minimum time in the lodge, packing the right energy bars makes all the difference. Our top 7 picks for the mountain.',
  },
  {
    slug: 'complete-glossary-of-ski-and-snowboard-terms',
    title: 'Complete Glossary of Ski & Snowboard Terms',
    category: 'Skiing',
    date: 'September 2023',
    author: 'KG Reporter',
    img: '/images/blog/ski-glossary.jpeg',
    excerpt: 'From "après-ski" to "zipper line" — an A-to-Z glossary of skiing and snowboarding terminology for first-timers and veterans alike.',
  },
  {
    slug: 'all-the-ski-resorts-in-the-us-and-canada',
    title: 'All the Ski Resorts in the US and Canada',
    category: 'Travel',
    date: 'December 2023',
    author: 'KG Reporter',
    img: '/images/blog/all-ski-resorts.jpeg',
    excerpt: "An exhaustive alphabetical list of all 804 ski resorts across the United States and Canada — how many have you skied?",
  },
]

const CATEGORY_COLORS = {
  'Adventure': '#2D936C',
  'Skiing': '#3498DB',
  'Culture': '#0B1619',
  'Travel': '#2D936C',
  'News': '#DC2626',
  'Research': '#3498DB',
  'Training': '#D97706',
  'Gear': '#EA580C',
}

export default function BlogPage() {
  const featured = BLOG_POSTS[0]
  const rest = BLOG_POSTS.slice(1)

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero title="Stories & Insider Guides" subtitle="Inspiration, destination guides, and local knowledge from the heart of the Green Mountains." />

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col lg:flex-row gap-0 bg-white rounded-[3rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 mb-20 transform hover:-translate-y-2 border border-gray-50"
          >
            <div className="lg:w-3/5 h-80 lg:h-[500px] overflow-hidden relative">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-8 left-8">
                <span className="glass text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-xl">
                  Featured Story
                </span>
              </div>
            </div>
            <div className="lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black px-4 py-1.5 rounded-full text-white uppercase tracking-widest shadow-lg" style={{ backgroundColor: CATEGORY_COLORS[featured.category] || '#2D936C' }}>
                  {featured.category}
                </span>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{featured.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-navy mb-6 leading-[1.1] tracking-tight group-hover:text-brand-green transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10 line-clamp-3">{featured.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-green font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Full Story
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">By {featured.author}</span>
              </div>
            </div>
          </Link>

          {/* Grid Header */}
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-xl font-heading font-black text-brand-navy uppercase tracking-widest">More From The Guide</h3>
            <div className="flex-1 h-[2px] bg-gray-100" />
          </div>

          {/* Rest of posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 group flex flex-col transform hover:-translate-y-2 border border-gray-50"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">{post.date}</span>
                  <h3 className="text-xl font-heading font-black text-brand-navy mb-4 leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed flex-1 mb-8 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-brand-green font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
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
