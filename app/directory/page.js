'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DIRECTORY = [
  {
    section: 'Eat & Drink',
    color: '#DC2626',
    icon: '🍽️',
    categories: [
      { name: 'Restaurants', slug: 'places-to-eat', count: 38 },
      { name: 'Bars & Nightlife', slug: 'places-to-drink', count: 22 },
      { name: 'Breweries & Taprooms', slug: 'breweries', count: 14 },
      { name: 'Coffee & Cafés', slug: 'coffee', count: 8 },
      { name: 'Bakeries & Markets', slug: 'markets', count: 6 },
    ],
  },
  {
    section: 'Stay',
    color: '#00B4D8',
    icon: '🏠',
    categories: [
      { name: 'Hotels & Resorts', slug: 'places-to-stay', count: 24 },
      { name: 'Vacation Rentals', slug: 'places-to-stay', count: 45 },
      { name: 'Bed & Breakfasts', slug: 'places-to-stay', count: 12 },
      { name: 'Budget Lodging', slug: 'places-to-stay', count: 8 },
    ],
  },
  {
    section: 'Ski & Snow',
    color: '#0077A8',
    icon: '⛷️',
    categories: [
      { name: 'Ski & Snowboard Shops', slug: 'ski-shops', count: 18 },
      { name: 'Ski Lessons', slug: 'ski-shops', count: 6 },
      { name: 'Nordic Ski Centers', slug: 'nordic-ski', count: 5 },
      { name: 'Snowmobile Tours', slug: 'snowmobile', count: 4 },
    ],
  },
  {
    section: 'Summer Activities',
    color: '#059669',
    icon: '🌿',
    categories: [
      { name: 'Mountain Biking', slug: 'adventure', count: 8 },
      { name: 'Hiking Trails', slug: 'hiking', count: 16 },
      { name: 'Golf Courses', slug: 'golf', count: 7 },
      { name: 'Water Sports & SUP', slug: 'sup', count: 5 },
      { name: 'Waterfalls', slug: 'waterfalls', count: 8 },
    ],
  },
  {
    section: 'Adventure & Thrills',
    color: '#7C3AED',
    icon: '🎯',
    categories: [
      { name: 'Adventure Centers', slug: 'adventure', count: 12 },
      { name: 'Zip Lines', slug: 'adventure', count: 4 },
      { name: 'Dog Sledding', slug: 'adventure', count: 2 },
      { name: 'Snowmobiling', slug: 'snowmobile', count: 4 },
    ],
  },
  {
    section: 'Arts, Culture & Local',
    color: '#D97706',
    icon: '🎨',
    categories: [
      { name: 'Maple Farms & Sugarhouses', slug: 'maple', count: 11 },
      { name: 'Farm Visits', slug: 'farm-visits', count: 9 },
      { name: 'Cheese Shops & Creameries', slug: 'cheese', count: 8 },
      { name: 'Covered Bridges', slug: 'bridges', count: 7 },
      { name: 'Art Galleries & Studios', slug: 'arts', count: 10 },
    ],
  },
  {
    section: 'Services',
    color: '#374151',
    icon: '🔧',
    categories: [
      { name: 'Spa & Wellness', slug: 'spa', count: 9 },
      { name: 'Transportation', slug: 'transportation', count: 6 },
      { name: 'Medical & Urgent Care', slug: 'services', count: 4 },
      { name: 'Childcare & Kids', slug: 'services', count: 5 },
    ],
  },
]

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Full Directory</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Browse by Category</h1>
          <p className="text-gray-400 text-lg">Everything near Killington — organized by what you're looking for.</p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/listings"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Search All Listings →
            </Link>
          </div>
        </div>
      </section>

      {/* Directory sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {DIRECTORY.map((section) => (
            <div key={section.section}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-xl font-extrabold text-gray-900">{section.section}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {section.categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/listings?category=${cat.slug}`}
                    className="bg-white border border-gray-100 rounded-xl px-4 py-4 text-center hover:shadow-md hover:border-[#00B4D8] transition-all duration-200 group flex flex-col items-center gap-1"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-[#00B4D8] transition-colors leading-snug text-center">
                      {cat.name}
                    </span>
                    <span className="text-xs text-gray-400">{cat.count} listings</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Add Your Listing', href: '/add-listings', emoji: '➕' },
              { label: 'Ski Conditions', href: '/ski-conditions', emoji: '❄️' },
              { label: 'Mountain Shuttles', href: '/mountain-shuttles', emoji: '🚌' },
              { label: 'Contact Us', href: '/contact-us', emoji: '✉️' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex flex-col items-center gap-2 border border-gray-100 rounded-2xl py-5 px-3 bg-white hover:shadow-md hover:border-[#00B4D8] transition-all duration-200 group text-center"
              >
                <span className="text-2xl">{l.emoji}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-[#00B4D8] transition-colors">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
