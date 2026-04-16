'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const CATEGORIES = [
  { name: "Places to Eat",     slug: "places-to-eat",   emoji: "🍽️", count: 26 },
  { name: "Local Breweries",   slug: "breweries",        emoji: "🍺", count: 10 },
  { name: "Ski Shops",         slug: "ski-shops",        emoji: "🎿", count: 13 },
  { name: "Hiking Trails",     slug: "hiking",           emoji: "🥾", count: 7  },
  { name: "Golf Courses",      slug: "golf",             emoji: "⛳", count: 6  },
  { name: "Lodging Options",   slug: "lodging-options",  emoji: "🏠", count: 9  },
  { name: "Adventure",         slug: "adventure",        emoji: "🧗", count: 4  },
  { name: "Places to Drink",   slug: "places-to-drink",  emoji: "🥂", count: 17 },
  { name: "Waterfalls",        slug: "waterfalls",       emoji: "💧", count: 12 },
  { name: "Farm Visits",       slug: "farm-visits",      emoji: "🌾", count: 10 },
  { name: "Museum Experience", slug: "museums",          emoji: "🏛️", count: 7  },
  { name: "Nordic Ski",        slug: "nordic-ski",       emoji: "⛷️", count: 6  },
  { name: "Cheese Shops",      slug: "cheese",           emoji: "🧀", count: 12 },
  { name: "Covered Bridges",   slug: "bridges",          emoji: "🌉", count: 10 },
  { name: "Bakery & Cafes",    slug: "cafe",             emoji: "☕", count: 5  },
  { name: "Ski Clubs",         slug: "ski-clubs",        emoji: "🏔️", count: 1  },
  { name: "Rock Climbing",     slug: "climbing",         emoji: "🪨", count: 5  },
  { name: "Snowmobile Tours",  slug: "snowmobile",       emoji: "🏂", count: 1  },
  { name: "Spa Day",           slug: "spa",              emoji: "💆", count: 3  },
  { name: "Paddle Board",      slug: "sup",              emoji: "🏄", count: 4  },
  { name: "Maple Sugar",       slug: "maple",            emoji: "🍁", count: 3  },
  { name: "Grocery Markets",   slug: "grocery",          emoji: "🛒", count: 5  },
  { name: "EV Charging",       slug: "ev-charging",      emoji: "⚡", count: 13 },
]

const AIRBNB_IDS = [
  "17731360",
  "53130694",
  "7452513",
  "44573612",
  "803737562629940238",
  "53217014",
  "614306371113185500",
  "907840143992985986",
  "19926145",
  "13750563",
  "50660535",
  "564541441919260459",
  "1034742959619811054",
]

const POPULAR_SEARCHES = [
  {
    title: "Grocery Markets",
    href: "/listings?category=grocery",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
    alt: "Grocery markets near Killington Vermont",
  },
  {
    title: "Ski Shops & Rentals",
    href: "/listings?category=ski-shops",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&q=80",
    alt: "Ski shops and rentals near Killington",
  },
  {
    title: "Après-Ski Nightlife",
    href: "/listings?category=places-to-drink",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    alt: "Apres ski bars and nightlife Killington",
  },
]

const DEALS = [
  {
    name: "Kids Ski Boots",
    price: "$149.95",
    url: "https://www.backcountry.com/salomon-qst-access-70t-gw-boot-kids",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=75&fit=crop",
  },
  {
    name: "Men's Bib Pant",
    price: "$349.95",
    url: "https://www.backcountry.com/backcountry-cottonwoods-gore-tex-bib-pant-mens",
    img: "https://images.unsplash.com/photo-1605719124347-9d5b4f0a7edb?w=300&q=75&fit=crop",
  },
  {
    name: "Women's Jacket",
    price: "$259.95",
    url: "https://www.backcountry.com/helly-hansen-imperial-puffy-jacket-womens",
    img: "https://images.unsplash.com/photo-1617952739267-fa876e97e100?w=300&q=75&fit=crop",
  },
  {
    name: "Women's Shell",
    price: "$449.95",
    url: "https://www.backcountry.com/backcountry-crestcarver-gore-tex-shell-jacket-womens",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&q=75&fit=crop",
  },
  {
    name: "Mind Expander Snowboard",
    price: "$599.95",
    url: "https://www.backcountry.com/jones-snowboards-mind-expander-snowboard",
    img: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=300&q=75&fit=crop",
  },
  {
    name: "Bold Lite Ski Poles",
    price: "$89.95",
    url: "https://www.backcountry.com/leki-bold-lite-s-ski-poles",
    img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=300&q=75&fit=crop",
  },
]

const BLOG_POSTS = [
  {
    title: "The Downhill Mountain Bike Thrill",
    category: "Blog",
    date: "10 months ago",
    img: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=400&q=80",
    excerpt: "From the scent of freshly ground coffee to the creaking wooden floors...",
    href: "/blog/the-downhill-mountain-bike-thrill",
  },
  {
    title: "The Allure of Exclusivity: Exploring Private Ski Areas",
    category: "Blog",
    date: "1 year ago",
    img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&q=80",
    excerpt: "Private ski areas offer a distinctive and exclusive skiing experience...",
    href: "/blog/private-ski-areas",
  },
  {
    title: "Toughest Ski Runs in Vermont",
    category: "Blog",
    date: "1 year ago",
    img: "https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=400&q=80",
    excerpt: "Vermont is a snowy paradise for folks who love to ski...",
    href: "/blog/toughest-ski-runs-vermont",
  },
  {
    title: "Vermont's Timeless Charm: Classic General Stores",
    category: "Blog",
    date: "1 year ago",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
    excerpt: "Nestled within the rolling hills and quaint villages of Vermont...",
    href: "/blog/classic-general-stores-vermont",
  },
]

export default function Home() {
  const sliderRef = useRef(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const CARD_WIDTH = 300 + 24 // card width + gap
    const interval = setInterval(() => {
      if (isPausedRef.current) return
      const el = sliderRef.current
      if (!el) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── SECTION 1: STICKY NAVBAR ── */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo-color.png" alt="Killington Getaway" style={{ height: '50px' }} />
          </Link>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {[
              { label: "Explore Killington", href: "/listings" },
              { label: "Things To Do",       href: "/listings?season=all" },
              { label: "Food",               href: "/listings?category=places-to-eat" },
              { label: "Blog",               href: "/blog" },
              { label: "Swag",               href: "/swag" },
              { label: "Best Gear 2026",     href: "/gear" },
            ].map((link, i, arr) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="px-2 py-1 rounded hover:opacity-70 transition-opacity whitespace-nowrap"
                  style={{ color: '#00B4D8' }}
                >
                  {link.label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-gray-300 select-none">|</span>
                )}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/listings"
            className="flex-shrink-0 text-sm font-bold px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity shadow-sm"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Browse Listings
          </Link>
        </div>
      </nav>

      {/* ── SECTION 2: HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80"
          alt="Killington Vermont skiing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto w-full">
          <p className="uppercase tracking-widest text-sm font-semibold mb-5" style={{ color: '#00B4D8' }}>
            Killington, Vermont
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
            Your Ultimate<br />Adventure Getaway
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the best restaurants, breweries, ski shops, hiking trails and more in the heart of Vermont.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/listings"
              className="text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Browse All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SEARCH BAR ── */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Search Below to Find Killington&apos;s Top Activities
          </h2>
          <hr className="border-gray-200 mb-6" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <input
              type="text"
              placeholder="What are you looking for"
              className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 shadow-sm"
            />
            <select
              className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 cursor-pointer shadow-sm"
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) window.location.href = `/listings?category=${e.target.value}`
              }}
            >
              <option value="" disabled>Category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.emoji} {cat.name} ({cat.count})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Town or ZIP code"
              className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 shadow-sm"
            />
            <button
              className="flex-shrink-0 text-white font-bold px-8 py-3 rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-sm"
              style={{ backgroundColor: '#00B4D8' }}
            >
              SEARCH
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            View all (143) listings and activities at Killington
          </p>
        </div>
      </section>

      {/* ── SECTION 4: CATEGORY GRID ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Explore Killington
            </h2>
            <p className="text-gray-400 text-lg">Browse 144 handpicked spots across 23 categories</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/listings?category=${cat.slug}`}
                className="flex flex-col items-center justify-center gap-3 border border-gray-100 rounded-2xl py-7 px-3 text-center group bg-white hover:shadow-md hover:border-[#00B4D8] transition-all duration-200"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-[#00B4D8] leading-tight transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400">{cat.count} listings</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/listings"
              className="inline-block text-white font-bold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Browse All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TOP PICKS FOR ACCOMMODATION ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">Top Picks for Accommodation</h2>
          <p className="text-center text-gray-500 mb-8">Handpicked stays near Killington, Vermont</p>
        </div>
        <div
          ref={sliderRef}
          className="overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => { isPausedRef.current = false }}
        >
          <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="17731360" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/17731360?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/17731360?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Home in Clarendon · ★4.96 · 2 bedrooms · 2 beds · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="53130694" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/53130694?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/53130694?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.54 · 1 bedroom · 1 bed · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="7452513" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/7452513?check_in=2025-01-12&check_out=2025-01-17&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/7452513?check_in=2025-01-12&check_out=2025-01-17&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Cabin in Rochester · ★4.95 · 1 bedroom · 1 bed · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="44573612" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/44573612?check_in=2023-09-18&check_out=2023-09-23&guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/44573612?check_in=2023-09-18&check_out=2023-09-23&guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Chalet in Bridgewater · ★4.95 · 4 bedrooms · 7 beds · 2.5 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="803737562629940238" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/803737562629940238?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/803737562629940238?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Rental unit in Killington · ★5.0 · 4 bedrooms · 10 beds · 2 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="53217014" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/53217014?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/53217014?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Townhouse in Killington · ★4.91 · 3 bedrooms · 6 beds · 4 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="614306371113185500" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/614306371113185500?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/614306371113185500?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.93 · 1 bedroom · 2 beds · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="907840143992985986" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/907840143992985986?check_in=2025-03-12&check_out=2025-03-17&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/907840143992985986?check_in=2025-03-12&check_out=2025-03-17&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.83 · 1 bedroom · 2 beds · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="19926145" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/19926145?check_in=2024-12-20&check_out=2024-12-25&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/19926145?check_in=2024-12-20&check_out=2024-12-25&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.78 · Studio · 1 bed · 1 bath</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="13750563" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/13750563?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/13750563?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.9 · 1 bedroom · 3 beds · 2 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="50660535" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/50660535?check_in=2024-12-15&check_out=2024-12-20&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/50660535?check_in=2024-12-15&check_out=2024-12-20&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Killington · ★4.91 · 3 bedrooms · 7 beds · 2 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="564541441919260459" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/564541441919260459?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/564541441919260459?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Condo in Mendon · ★4.72 · 2 bedrooms · 4 beds · 2 baths</a>
            </div>

            <div className="airbnb-embed-frame flex-shrink-0" data-id="1034742959619811054" data-view="home" data-hide-price="true" style={{ width: '300px', height: '300px', margin: '0' }}>
              <a href="https://www.airbnb.com/rooms/1034742959619811054?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget">View On Airbnb</a>
              <a href="https://www.airbnb.com/rooms/1034742959619811054?check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" rel="nofollow">Rental unit in Killington · ★4.85 · 1 bedroom · 1 bed · 1 bath</a>
            </div>

          </div>
        </div>
        <script async src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
      </section>

      {/* ── SECTION 6: WEATHER WIDGET ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Weather Forecast
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://forecast7.com/en/43d68n72d78/killington/?unit=us"
              style={{ width: '100%', maxWidth: '800px', height: '200px', border: 'none' }}
              scrolling="no"
              title="Killington Vermont Weather Forecast"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 7: MOST POPULAR SEARCHES ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Most Popular Searches
            </h2>
            <p className="text-gray-400 text-lg">What visitors are looking for most</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
            {[
              { title: "Grocery Markets",    href: "/listings?category=grocery",        img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",  alt: "Grocery markets near Killington" },
              { title: "Ski Shops & Rentals", href: "/listings?category=ski-shops",      img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",  alt: "Ski shops near Killington" },
              { title: "Après-Ski Nightlife", href: "/listings?category=places-to-drink", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Apres ski nightlife Killington" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ height: '280px' }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-2xl text-center drop-shadow-lg px-4">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: DEALS OF THE DAY ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Deals of the Day
            </h2>
            <p className="text-gray-400 text-lg">Top gear picks from Backcountry.com</p>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-x-auto pb-4 px-6"
          style={{
            paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {DEALS.map((deal) => (
            <div
              key={deal.url}
              className="flex-shrink-0 w-52 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-full h-36 bg-gray-100 overflow-hidden">
                <img
                  src={deal.img}
                  alt={deal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-gray-800 mb-1 leading-tight">{deal.name}</p>
                <p className="text-base font-bold text-red-500 mb-3">{deal.price}</p>
                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00B4D8' }}
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
          <div style={{ width: '1.5rem', flexShrink: 0 }} aria-hidden="true" />
        </div>
      </section>

      {/* ── SECTION 9: BLOG / MUST READ STORIES ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Must Read Stories &amp; Travel Advice
            </h2>
            <p className="text-gray-400 text-lg">Inspiration and guides from Killington</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 group flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: '#00B4D8' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-semibold hover:underline" style={{ color: '#00B4D8' }}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FOOTER ── */}
      <footer style={{ backgroundColor: '#121D21' }} className="text-white text-center">

        {/* SECTION 1 – Brand Partners */}
        <div className="py-8 border-b border-gray-700 px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">Ski Brand Partners</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <a href="https://www.stio.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/stio-logo-1.png" alt="Stio" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="https://www.smithoptics.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/Smith-Optics-logo.png" alt="Smith" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="https://www.hellyhansen.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/helly-hansen.png" alt="Helly Hansen" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="https://www.dakine.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/2560px-Dakine.png" alt="Dakine" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="https://www.clifbar.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/bar-clif-logo-1-e1694093311566.png" alt="Clif Bar" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>

        {/* SECTION 2 – Three Columns + Logo */}
        <div style={{ backgroundColor: '#121D21' }} className="px-6 py-12 border-b border-gray-700">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-10">

            <div className="flex flex-col gap-3 items-center">
              <img src="/logo-white.png" alt="Killington Getaway" style={{ width: '120px', marginTop: '-30px' }} />
              <div className="flex gap-3 items-center" style={{ marginTop: '-5px' }}>
                <a href="https://facebook.com/killingtongetaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="https://instagram.com/official_killingtongetaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                <a href="https://x.com/visitkillington" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="https://www.linkedin.com/company/killington-getaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
              </div>
              <a href="https://www.trustpilot.com/review/killingtongetaway.com"><img src="https://killingtongetaway.com/wp-content/uploads/2023/08/trustpilot-logo-e1693295134401.png" alt="Trustpilot" style={{ height: '31px' }} /></a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">More Info</p>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="/affiliates" className="text-gray-400 hover:text-white text-sm">Affiliates</a>
              <a href="/certified-b-corp" className="text-gray-400 hover:text-white text-sm">Sustainability</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">For Locals</p>
              <a href="/local-contractors" className="text-gray-400 hover:text-white text-sm">Find A Contractor</a>
              <a href="https://www.indeed.com/l-Killington,-VT-jobs.html" className="text-gray-400 hover:text-white text-sm">Jobs</a>
              <a href="/press-inquiries" className="text-gray-400 hover:text-white text-sm">Press</a>
              <a href="https://www.pinkbike.com/buysell/list/?region=3&q=Vermont" className="text-gray-400 hover:text-white text-sm">Buy / Sell</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">Company</p>
              <a href="/our-team" className="text-gray-400 hover:text-white text-sm">Our Team</a>
              <a href="/contact-us" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
              <a href="tel:+19494366769" className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>(949) 436-SNOW</a>
              <a href="mailto:hello@killingtongetaway.com" className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>hello@killingtongetaway.com</a>
            </div>

          </div>
        </div>

        {/* SECTION 3 – Bottom Bar */}
        <div className="py-6 flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm">Made in VT with ❤️ + ❄️</p>
          <p className="text-gray-500 text-xs">© 2026 Killington Getaway. All Rights Reserved.</p>
        </div>

      </footer>

    </main>
  )
}
