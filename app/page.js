'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import WeatherWidget from './components/WeatherWidget'
import Navbar from './components/Navbar'

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
  { name: "Rock Climbing",     slug: "climbing",         emoji: "🪨", count: 5  },
  { name: "Snowmobile Tours",  slug: "snowmobile",       emoji: "🏂", count: 1  },
  { name: "Spa Day",           slug: "spa",              emoji: "💆", count: 3  },
  { name: "Paddle Board",      slug: "sup",              emoji: "🏄", count: 4  },
  { name: "Maple Sugar",       slug: "maple",            emoji: "🍁", count: 3  },
  { name: "Grocery Markets",   slug: "grocery",          emoji: "🛒", count: 5  },
  { name: "EV Charging",       slug: "ev-charging",      emoji: "⚡", count: 13 },
]

// 13 listings — index matches pagination dots
const AIRBNB_LISTINGS = [
  { id: "17731360",             label: "Home in Clarendon · ★4.96 · 2 bd · 2 beds · 1 ba",        params: "guests=1&adults=1&s=66&source=embed_widget" },
  { id: "53130694",             label: "Condo in Killington · ★4.54 · 1 bd · 1 bed · 1 ba",       params: "check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "7452513",              label: "Cabin in Rochester · ★4.95 · 1 bd · 1 bed · 1 ba",        params: "check_in=2025-01-12&check_out=2025-01-17&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "44573612",             label: "Chalet in Bridgewater · ★4.95 · 4 bd · 7 beds · 2.5 ba",  params: "check_in=2023-09-18&check_out=2023-09-23&guests=1&adults=1&s=66&source=embed_widget" },
  { id: "803737562629940238",   label: "Rental in Killington · ★5.0 · 4 bd · 10 beds · 2 ba",     params: "guests=1&adults=1&s=66&source=embed_widget" },
  { id: "53217014",             label: "Townhouse in Killington · ★4.91 · 3 bd · 6 beds · 4 ba",  params: "guests=1&adults=1&s=66&source=embed_widget" },
  { id: "614306371113185500",   label: "Condo in Killington · ★4.93 · 1 bd · 2 beds · 1 ba",      params: "guests=1&adults=1&s=66&source=embed_widget" },
  { id: "907840143992985986",   label: "Condo in Killington · ★4.83 · 1 bd · 2 beds · 1 ba",      params: "check_in=2025-03-12&check_out=2025-03-17&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "19926145",             label: "Condo in Killington · ★4.78 · Studio · 1 bed · 1 ba",     params: "check_in=2024-12-20&check_out=2024-12-25&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "13750563",             label: "Condo in Killington · ★4.9 · 1 bd · 3 beds · 2 ba",       params: "check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "50660535",             label: "Condo in Killington · ★4.91 · 3 bd · 7 beds · 2 ba",      params: "check_in=2024-12-15&check_out=2024-12-20&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "564541441919260459",   label: "Condo in Mendon · ★4.72 · 2 bd · 4 beds · 2 ba",          params: "check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" },
  { id: "1034742959619811054",  label: "Rental in Killington · ★4.85 · 1 bd · 1 bed · 1 ba",      params: "check_in=2024-12-11&check_out=2024-12-16&guests=1&adults=2&s=66&source=embed_widget" },
]

const CARD_W = 280  // px
const CARD_GAP = 24 // px — gap-6
const CARD_STRIDE = CARD_W + CARD_GAP

// Deals: all from Backcountry.com, all partner brands
// Deals: all from Backcountry.com, all partner brands
const DEALS = [
  {
    name: "Osito Jacket - Women's",
    brand: "The North Face",
    price: "$55.00",
    url: "https://www.backcountry.com/the-north-face-osito-jacket-womens",
    img: "/images/deals/osito-jacket-isolated.png",
    rating: 5,
  },
  {
    name: "Odyssey Multi Short - Men's",
    brand: "Outdoor Research",
    price: "$59.00",
    url: "https://www.backcountry.com/outdoor-research-odyssey-multi-short-mens?skid=ODRZ937-WILATO",
    img: "/images/deals/odyssey-short-isolated.png",
    rating: 4.5,
  },
  {
    name: "SB120 C2 GX Eagle Mountain Bike",
    brand: "Yeti Cycles",
    price: "$3,775.00",
    url: "https://www.backcountry.com/yeti-cycles-sb120-c2-gx-eagle-mountain-bike",
    img: "/images/deals/yeti-sb120-isolated.png",
    rating: 5,
  },
  {
    name: "Freerider Pro Cycling Shoe - Men's",
    brand: "Five Ten",
    price: "$119.95",
    url: "https://www.backcountry.com/five-ten-freerider-pro-cycling-shoe-mens?skid=FVTZ145-CAOFWHCOBL",
    img: "/images/deals/five-ten-shoes-isolated.png",
    rating: 5,
  },
  {
    name: "Shift Split MAG ChromaPop Sunglasses",
    brand: "Smith",
    price: "$165.00",
    url: "https://www.backcountry.com/smith-shift-split-mag-chromapop-sunglasses",
    img: "/images/deals/smith-sunglasses-isolated.png",
    rating: 4.5,
  },
  {
    name: "Kortal Helmet",
    brand: "POC",
    price: "$120.97",
    url: "https://www.backcountry.com/poc-kortal-helmet",
    img: "/images/deals/poc-kortal.png",
    rating: 4.5,
  },
  {
    name: "Compressible Pillow Cinch",
    brand: "Therm-a-Rest",
    price: "$32.86 - $49.95",
    url: "https://www.backcountry.com/therm-a-rest-compressible-pillow-cinch",
    img: "/images/deals/therm-a-rest-pillow.jpg",
    rating: 4.5,
  },
  {
    name: "Wireless 4 Tent: 4-Person 3-Season",
    brand: "Kelty",
    price: "$189.95",
    url: "https://www.backcountry.com/kelty-wireless-4-tent-4-person-3-season",
    img: "/images/deals/kelty-tent.png",
    rating: 4.5,
  },
  {
    name: "X Ultra 5 Mid GTX Hiking Boot - Men's",
    brand: "Salomon",
    price: "$189.95",
    url: "https://www.backcountry.com/salomon-x-ultra-5-mid-gtx-hiking-boot-mens",
    img: "/images/deals/salomon-boots.png",
    rating: 4.5,
  },
  {
    name: "Mira 22L Hydration Backpack - Women's",
    brand: "Osprey Packs",
    price: "$140.00",
    url: "https://www.backcountry.com/osprey-packs-mira-22l-hydration-backpack-womens",
    img: "/images/deals/osprey-backpack.png",
    rating: 5,
  },
  {
    name: "Classic Thermal Base Layer",
    brand: "Smartwool",
    price: "$115.00",
    url: "https://www.backcountry.com/smartwool-classic-thermal-merino-base-layer-crew-mens",
    img: "/images/deals/smartwool-base.png",
    rating: 4.5,
  },
  {
    name: "Helium Rain Jacket - Men's",
    brand: "Outdoor Research",
    price: "$159.00",
    url: "https://www.backcountry.com/outdoor-research-helium-rain-jacket-mens",
    img: "/images/deals/helium-jacket.png",
    rating: 4.5,
  },
]

const BLOG_POSTS = [
  {
    title: "The Downhill Mountain Bike Thrill",
    category: "Adventure",
    date: "May 14, 2025",
    img: "/images/blog/mountain-bike-thrill.webp",
    excerpt: "When the snow melts, Killington transforms into one of the best downhill mountain bike parks on the East Coast.",
    href: "/blog/the-downhill-mountain-bike-thrill",
  },
  {
    title: "The Allure of Exclusivity: Exploring Private Ski Areas",
    category: "Skiing",
    date: "January 12, 2025",
    img: "/images/blog/private-ski-areas.webp",
    excerpt: "Private ski areas offer a distinctive and exclusive skiing experience...",
    href: "/blog/the-allure-of-exclusivity-exploring-private-ski-areas",
  },
  {
    title: "Toughest Ski Runs in Vermont",
    category: "Skiing",
    date: "February 6, 2025",
    img: "/images/blog/toughest-ski-runs.webp",
    excerpt: "Vermont is a snowy paradise for folks who love to ski...",
    href: "/blog/toughest-ski-runs-in-vermont",
  },
  {
    title: "Vermont's Timeless Charm: Classic General Stores",
    category: "Culture",
    date: "January 11, 2025",
    img: "/images/blog/general-stores-vermont.webp",
    excerpt: "Nestled within the rolling hills and quaint villages of Vermont...",
    href: "/blog/classic-general-stores-vermont",
  },
]

const BLOG_COLORS = {
  Adventure: 'var(--color-brand-green)',
  Skiing:    '#0077A8',
  Culture:   '#6B7280',
  Travel:    '#2d94e3',
  Blog:      'var(--color-brand-green)',
}

const SEASONS = [
  { img: "/images/hero/killington-k1.jpg", label: "Killington K-1" },
  { img: "/images/hero/killington-mountains.png", label: "Killington Green Mountains" },
  { img: "/images/hero/killington-aerial.jpg", label: "Killington Aerial View" },
  { img: "/images/hero/killington-water.jpg", label: "Killington Paddleboard and Water Adventures" },
  { img: "/images/hero/killington-bikers.jpg", label: "Killington Bikers Hiking Experience" },
]

export default function Home() {
  const sliderRef    = useRef(null)
  const dealsRef     = useRef(null)
  const isPausedRef  = useRef(false)
  const [activeDot, setActiveDot] = useState(0)
  const [seasonIdx, setSeasonIdx] = useState(0)

  // ── Hero Season auto-slide ──────────────────────────────────────────────────
  useEffect(() => {
    const int = setInterval(() => {
      setSeasonIdx(s => (s + 1) % SEASONS.length)
    }, 6000)
    return () => clearInterval(int)
  }, [])

  // ── Airbnb auto-slide every 5 s, pauses on hover ──────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return
      const el = sliderRef.current
      if (!el) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
        setActiveDot(0)
      } else {
        el.scrollBy({ left: CARD_STRIDE, behavior: 'smooth' })
        setActiveDot((d) => Math.min(d + 1, AIRBNB_LISTINGS.length - 1))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // ── Deals auto-slide every 4 s, pauses on hover ───────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return
      const el = dealsRef.current
      if (!el) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Stride for deals (card width 208px + gap 20px = 228px)
        el.scrollBy({ left: 228, behavior: 'smooth' })
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // ── Airbnb SDK ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!document.getElementById('airbnb-jssdk')) {
      const s = document.createElement('script')
      s.id = 'airbnb-jssdk'
      s.async = true
      s.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk'
      document.body.appendChild(s)
    }
  }, [])

  return (
    <>
      {/* Navbar is OUTSIDE <main> so sticky works against the document scroll */}
      <Navbar />

      <main className="bg-white font-sans">

        {/* ── SECTION 2: HERO ── */}
        <section
          className="relative flex flex-col items-center justify-center overflow-hidden min-h-[800px] pb-16"
        >
          {SEASONS.map((season, i) => (
            <img
              key={season.label}
              src={season.img}
              alt={`Killington Vermont ${season.label}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === seasonIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'} animate-slow-zoom`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-0" />

          <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto w-full">
            <p className="uppercase tracking-widest text-sm font-semibold mb-5 text-white/80">
              Killington, Vermont
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
              Your Ultimate<br /><span style={{ color: 'var(--color-brand-green)' }}>Adventure</span> Getaway
            </h1>
            <p className="text-white text-lg md:text-xl mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Discover the best restaurants, breweries, ski shops, hiking trails and more in the heart of Vermont.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/listings"
                className="text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-xl uppercase tracking-wider"
                style={{ backgroundColor: 'var(--color-brand-green)' }}
              >
                Browse All Listings
              </Link>
            </div>
            
            
          </div>
        </section>

        {/* ── SECTION 3: SEARCH BAR ── */}
        <section className="bg-white py-8 px-6 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
              Search Below to Find Killington&apos;s Top Activities
            </h2>
            <hr className="border-gray-200 mb-6" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
              <input
                type="text"
                placeholder="What are you looking for"
                className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 shadow-sm"
              />
              <select
                className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 cursor-pointer shadow-sm"
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
                className="flex-1 min-w-0 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-2 focus:ring-[var(--color-brand-green)]/20 shadow-sm"
              />
              <button
                className="flex-shrink-0 text-white font-bold px-8 py-3 rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-sm"
                style={{ backgroundColor: 'var(--color-brand-green)' }}
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
        <section className="bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
                Explore Killington
              </h2>
              <p className="text-gray-400 text-lg">Browse 144 handpicked spots across 23 categories</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/listings?category=${cat.slug}`}
                  className="flex flex-col items-center justify-center gap-3 border border-gray-100 rounded-2xl py-7 px-3 text-center group bg-white hover:shadow-md hover:border-[var(--color-brand-green)] transition-all duration-200"
                >
                  <span className="text-4xl">{cat.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[var(--color-brand-green)] leading-tight transition-colors">
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
                style={{ backgroundColor: 'var(--color-brand-green)' }}
              >
                Browse All Listings
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: TOP PICKS FOR ACCOMMODATION ── */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight text-center">
              Top Picks for Accommodation
            </h2>
            <p className="text-center text-gray-400 text-lg mb-8">Handpicked stays near Killington, Vermont</p>
          </div>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar flex"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            onScroll={(e) => {
              const el = e.currentTarget
              setActiveDot(Math.round(el.scrollLeft / (el.scrollWidth / AIRBNB_LISTINGS.length)))
            }}
          >
            <div className="flex gap-6 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)]">
              {AIRBNB_LISTINGS.map(({ id, label, params }) => {
                const href = `https://www.airbnb.com/rooms/${id}?${params}`
                return (
                  <div
                    key={id}
                    className="airbnb-embed-frame flex-shrink-0 snap-center"
                    data-id={id}
                    data-view="home"
                    data-hide-price="true"
                    style={{ width: 'min(85vw, 280px)', height: '270px', margin: '0' }}
                  >
                    <a href={href}>View On Airbnb</a>
                    <a href={href} rel="nofollow">{label}</a>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {AIRBNB_LISTINGS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  sliderRef.current?.scrollTo({ left: i * CARD_STRIDE, behavior: 'smooth' })
                  setActiveDot(i)
                }}
                aria-label={`Go to listing ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeDot ? '24px' : '10px',
                  height: '10px',
                  backgroundColor: i === activeDot ? 'var(--color-brand-green)' : '#D1D5DB',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </section>

        {/* ── SECTION 6: WEATHER WIDGET ── */}
        <section className="bg-white py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
                Weather Conditions
              </h2>
              <p className="text-gray-400 text-lg">Current conditions at Killington, Vermont</p>
            </div>
            <WeatherWidget />
          </div>
        </section>

        {/* ── SECTION 7: MOST POPULAR SEARCHES ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
                Most Popular Searches
              </h2>
              <p className="text-gray-400 text-lg">What visitors are looking for most</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
              {[
                { title: "Grocery Markets",     href: "/listings?category=grocery",         img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",  alt: "Grocery markets near Killington" },
                { title: "Ski Shops & Rentals", href: "/listings?category=ski-shops",       img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",  alt: "Ski shops near Killington" },
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
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
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
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
                Deals of the Day
              </h2>
              <p className="text-gray-400 text-lg">Hand-picked gear from our partner brands — via Backcountry.com</p>
            </div>
          </div>
          <div
            ref={dealsRef}
            className="flex gap-5 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar"
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            style={{
              paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
              paddingRight: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {DEALS.map((deal, idx) => (
              <a
                key={`${deal.url}-${idx}`}
                href={deal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[min(80vw,18rem)] bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group snap-center"
              >
                <div className="w-full h-64 bg-gray-50/50 flex items-center justify-center p-8 overflow-hidden relative">
                   {/* Background brand accent */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center text-4xl font-black uppercase tracking-tighter">
                     {deal.brand}
                   </div>
                  <img
                    src={deal.img}
                    alt={`${deal.brand} ${deal.name}`}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--color-brand-green)' }}>
                    {deal.brand}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight h-10 line-clamp-2">{deal.name}</h3>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-0.5 mb-4 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(deal.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-2xl font-black text-gray-900">{deal.price}</span>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 text-[10px] font-black px-8 py-4 rounded-full text-white transition-all shadow-lg group-hover:shadow-brand-green/20"
                    style={{ backgroundColor: 'var(--color-brand-green)' }}
                  >
                    SHOP NOW 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: BLOG / MUST READ STORIES ── */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3 tracking-tight">
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
                        style={{ backgroundColor: BLOG_COLORS[post.category] || 'var(--color-brand-green)' }}
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
                    <span className="text-xs font-semibold hover:underline" style={{ color: 'var(--color-brand-green)' }}>
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: '#121D21' }} className="text-white text-center">

          {/* Brand Partners */}
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

          {/* Three Columns + Logo */}
          <div style={{ backgroundColor: '#121D21' }} className="px-6 py-12 border-b border-gray-700">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-10">

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

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col items-center gap-2">
            <p className="text-gray-400 text-sm">Made in VT with ❤️ + ❄️</p>
            <p className="text-gray-500 text-xs">© 2026 Killington Getaway. All Rights Reserved.</p>
          </div>

        </footer>

      </main>
    </>
  )
}
