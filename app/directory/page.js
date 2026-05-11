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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Full Directory</p>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase">Browse by <span className="text-brand-green">Category</span></h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Everything near Killington — organized by what you&apos;re looking for.
          </p>
          <div className="flex justify-center">
            <Link
              href="/listings"
              className="bg-brand-navy text-white font-black px-10 py-4 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-xs flex items-center gap-3"
            >
              Search All Listings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory sections */}
      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {DIRECTORY.map((section) => (
            <div key={section.section} className="group">
              <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100 relative">
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-brand-green group-hover:w-full transition-all duration-700" />
                <span className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{section.icon}</span>
                <h2 className="text-3xl font-heading font-black text-brand-navy uppercase tracking-tight">{section.section}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {section.categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/listings?category=${cat.slug}`}
                    className="bg-white border border-gray-50 rounded-[2.5rem] p-8 text-center hover:shadow-premium hover:border-brand-green/20 transition-all duration-500 group/cat flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/5 rounded-full -mr-8 -mt-8 opacity-0 group-hover/cat:opacity-100 transition-opacity" />
                    <span className="text-sm font-black text-brand-navy group-hover/cat:text-brand-green transition-colors leading-tight uppercase tracking-tight">
                      {cat.name}
                    </span>
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-green/30" />
                       <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{cat.count} listings</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-brand-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full -mr-64 -mt-64 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full -ml-64 -mb-64 blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight uppercase">Quick <span className="text-brand-green">Links</span></h2>
            <p className="text-white/40 text-xl font-medium">Fast access to our most popular sections.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Add Your Listing', href: '/add-listings', emoji: '➕', color: 'brand-green' },
              { label: 'Ski Conditions', href: '/ski-conditions', emoji: '❄️', color: 'brand-blue' },
              { label: 'Mountain Shuttles', href: '/mountain-shuttles', emoji: '🚌', color: 'brand-green' },
              { label: 'Contact Us', href: '/contact-us', emoji: '✉️', color: 'brand-blue' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col items-center gap-6 bg-white/5 border border-white/10 rounded-[3rem] p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center backdrop-blur-sm"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {l.emoji}
                </div>
                <span className="text-xs font-black text-white uppercase tracking-[0.2em] group-hover:text-brand-green transition-colors">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
