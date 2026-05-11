'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import allListings from '../../listings.json'

const CATEGORIES = [
  { name: "Places to Eat",     slug: "places-to-eat",   emoji: "🍽️" },
  { name: "Local Breweries",   slug: "breweries",        emoji: "🍺" },
  { name: "Ski Shops",         slug: "ski-shops",        emoji: "🎿" },
  { name: "Hiking Trails",     slug: "hiking",           emoji: "🥾" },
  { name: "Golf Courses",      slug: "golf",             emoji: "⛳" },
  { name: "Lodging Options",   slug: "lodging-options",  emoji: "🏠" },
  { name: "Adventure",         slug: "adventure",        emoji: "🧗" },
  { name: "Places to Drink",   slug: "places-to-drink",  emoji: "🥂" },
  { name: "Waterfalls",        slug: "waterfalls",       emoji: "💧" },
  { name: "Farm Visits",       slug: "farm-visits",      emoji: "🌾" },
  { name: "Museum Experience", slug: "museums",          emoji: "🏛️" },
  { name: "Nordic Ski",        slug: "nordic-ski",       emoji: "⛷️" },
  { name: "Cheese Shops",      slug: "cheese",           emoji: "🧀" },
  { name: "Covered Bridges",   slug: "bridges",          emoji: "🌉" },
  { name: "Bakery & Cafes",    slug: "cafe",             emoji: "☕" },
  { name: "Ski Clubs",         slug: "ski-clubs",        emoji: "🏔️" },
  { name: "Rock Climbing",     slug: "climbing",         emoji: "🪨" },
  { name: "Snowmobile Tours",  slug: "snowmobile",       emoji: "🏂" },
  { name: "Spa Day",           slug: "spa",              emoji: "💆" },
  { name: "Paddle Board",      slug: "sup",              emoji: "🏄" },
  { name: "Maple Sugar",       slug: "maple",            emoji: "🍁" },
  { name: "Grocery Markets",   slug: "grocery",          emoji: "🛒" },
  { name: "EV Charging",       slug: "ev-charging",      emoji: "⚡" },
]

const CAT_MAP = {
  'places to eat': 'places-to-eat',
  'breweries': 'breweries',
  'ski shops': 'ski-shops',
  'hiking': 'hiking',
  'golf': 'golf',
  'lodging options': 'lodging-options',
  'adventure': 'adventure',
  'places to drink': 'places-to-drink',
  'waterfalls': 'waterfalls',
  'farm visits': 'farm-visits',
  'museum experience': 'museums',
  'nordic ski': 'nordic-ski',
  'cheese shops': 'cheese',
  'covered bridges': 'bridges',
  'bakery & cafes': 'cafe',
  'ski clubs': 'ski-clubs',
  'rock climbing': 'climbing',
  'snowmobile tours': 'snowmobile',
  'spa day': 'spa',
  'paddle board': 'sup',
  'maple sugar': 'maple',
  'grocery markets': 'grocery',
  'ev charging': 'ev-charging',
}

function getSlug(listing) {
  const url = listing.url || ''
  const clean = url.replace(/\/$/, '')
  const parts = clean.split('/')
  return parts[parts.length - 1] || listing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function getListingSlugs(listing) {
  return (listing.categories || []).map(c => CAT_MAP[c.toLowerCase()] || null).filter(Boolean)
}

function getImage(listing) {
  return listing.localImage || listing.image || null
}

const PAGE_SIZE = 18

// Map component loaded dynamically to avoid SSR issues with Leaflet
function ListingsMap({ listings }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  useEffect(() => {
    if (!mapRef.current) return

    function loadScript(src, id) {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) { resolve(); return }
        const s = document.createElement('script')
        s.id = id; s.src = src; s.onload = resolve; s.onerror = reject
        document.head.appendChild(s)
      })
    }

    function loadCss(href, id) {
      if (document.getElementById(id)) return
      const l = document.createElement('link')
      l.id = id; l.rel = 'stylesheet'; l.href = href
      document.head.appendChild(l)
    }

    const init = async () => {
      loadCss('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'leaflet-css')
      await loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', 'leaflet-js')

      const L = window.L
      if (!L || !mapRef.current) return

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }

      const map = L.map(mapRef.current).setView([43.62, -72.79], 9)
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map)

      const mappable = listings.filter(l => l.lat && l.lng)
      markersRef.current = mappable.map(listing => {
        const slug = getSlug(listing)
        const img = getImage(listing)
        return L.marker([listing.lat, listing.lng])
          .addTo(map)
          .bindPopup(`
            <div style="min-width:200px;font-family:var(--font-inter), sans-serif;padding:8px">
              ${img ? `<img src="${img}" alt="${listing.name}" style="width:100%;height:100px;object-fit:cover;border-radius:12px;margin-bottom:12px"/>` : ''}
              <strong style="font-size:14px;display:block;margin-bottom:4px;color:#0B1619">${listing.name}</strong>
              ${listing.address ? `<p style="font-size:12px;color:#666;margin:0 0 10px">${listing.address}</p>` : ''}
              <a href="/listings/${slug}" style="display:inline-block;font-size:12px;color:#fff;background:#2D936C;padding:6px 12px;border-radius:20px;text-decoration:none;font-weight:bold">View Details →</a>
            </div>
          `, { maxWidth: 240, className: 'premium-popup' })
      })

      if (mappable.length > 0) {
        const group = L.featureGroup(markersRef.current)
        map.fitBounds(group.getBounds().pad(0.1))
      }
    }

    init()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [listings])

  const mappable = listings.filter(l => l.lat && l.lng)
  const unmapped = listings.length - mappable.length

  return (
    <div className="flex flex-col gap-3">
      {unmapped > 0 && (
        <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Showing {mappable.length} of {listings.length} listings on map · {unmapped} unmapped
          </p>
        </div>
      )}
      <div ref={mapRef} className="shadow-premium border border-gray-100 rounded-3xl" style={{ height: '700px', overflow: 'hidden' }} />
    </div>
  )
}

function ListingsPageInner() {
  const searchParams = useSearchParams()

  const [activeCategory, setActiveCategory] = useState(() => searchParams.get('category') || 'all')
  const [search, setSearch]                 = useState(() => searchParams.get('search') || '')
  const [searchInput, setSearchInput]       = useState(() => searchParams.get('search') || '')
  const [page, setPage]                     = useState(1)
  const [view, setView]                     = useState('grid')

  useEffect(() => {
    const cat = searchParams.get('category')
    const q   = searchParams.get('search')
    setActiveCategory(cat || 'all')
    setSearch(q || '')
    setSearchInput(q || '')
    setPage(1)
  }, [searchParams])

  const filtered = allListings.filter((l) => {
    const matchCat = activeCategory === 'all' || getListingSlugs(l).includes(activeCategory)
    const matchSearch = search === '' ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.address || '').toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore   = page * PAGE_SIZE < filtered.length

  const activeCategoryLabel = CATEGORIES.find(c => c.slug === activeCategory)?.name ?? 'All Listings'

  function handleCategoryChange(slug) {
    setActiveCategory(slug)
    setPage(1)
  }

  function handleSearch() {
    setSearch(searchInput)
    setPage(1)
  }

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-black text-brand-navy mb-4 tracking-tight">
                {activeCategory === 'all' ? 'All Listings' : activeCategoryLabel}
              </h1>
              <p className="text-gray-400 text-xl font-medium">
                Discover <span className="text-brand-green">{filtered.length}</span> handpicked spots in Killington
              </p>
            </div>
            
            <div className="flex rounded-2xl bg-gray-50 p-1.5 border border-gray-100 self-start">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-2 px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-xl ${
                  view === 'grid' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                Grid
              </button>
              <button
                onClick={() => setView('map')}
                className={`flex items-center gap-2 px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-xl ${
                  view === 'map' ? 'bg-white text-brand-navy shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                Map
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-brand-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name, address or keyword…"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full border border-gray-100 bg-gray-50 rounded-2xl pl-14 pr-6 py-4 text-sm font-medium text-brand-navy focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-brand-navy text-white font-black px-10 py-4 rounded-2xl hover:bg-brand-navy/90 transition-all shadow-md uppercase tracking-widest text-sm"
            >
              Search
            </button>
            {(activeCategory !== 'all' || search !== '') && (
              <button
                onClick={() => { setActiveCategory('all'); setSearch(''); setSearchInput(''); setPage(1); }}
                className="text-xs font-black px-6 py-4 rounded-2xl border border-gray-200 text-gray-400 hover:text-brand-navy hover:border-brand-navy transition-all uppercase tracking-widest"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">

        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-1 w-64 flex-shrink-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-6">Filter by Category</p>
          <button
            onClick={() => handleCategoryChange('all')}
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-black transition-all ${
              activeCategory === 'all' ? 'bg-brand-navy text-white shadow-xl' : 'text-brand-navy/60 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">🗺️</span> 
            <span className="uppercase tracking-widest">All Spots</span>
            <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${activeCategory === 'all' ? 'bg-white/20' : 'bg-gray-100'}`}>{allListings.length}</span>
          </button>
          <div className="h-6" />
          <div className="space-y-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl text-sm font-bold text-left transition-all group ${
                  activeCategory === cat.slug ? 'text-brand-green bg-brand-green/5' : 'text-brand-navy/60 hover:bg-gray-50 hover:text-brand-navy'
                }`}
              >
                <span className="text-xl transform group-hover:scale-110 transition-transform">{cat.emoji}</span>
                <span className="truncate">{cat.name}</span>
                {activeCategory === cat.slug && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-green" />}
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* Mobile category pills */}
          <div className="flex md:hidden gap-2 overflow-x-auto pb-6 -mx-6 px-6 hide-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 text-[10px] font-black px-5 py-2.5 rounded-full uppercase tracking-widest border transition-all ${
                activeCategory === 'all' ? 'bg-brand-navy text-white border-brand-navy shadow-lg' : 'bg-white text-gray-400 border-gray-100'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`flex-shrink-0 text-[10px] font-black px-5 py-2.5 rounded-full uppercase tracking-widest border transition-all ${
                  activeCategory === cat.slug ? 'bg-brand-navy text-white border-brand-navy shadow-lg' : 'bg-white text-gray-400 border-gray-100'
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
              <p className="text-7xl mb-8">🔍</p>
              <h3 className="text-2xl font-heading font-black text-brand-navy mb-3">No spots found</h3>
              <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto text-lg">We couldn't find any listings matching your search. Try broadening your filters.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearch(''); setSearchInput(''); setPage(1); }}
                className="bg-brand-green text-white font-black px-12 py-4 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
              >
                Clear All Filters
              </button>
            </div>
          ) : view === 'map' ? (
            <ListingsMap listings={filtered} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((listing) => {
                  const img = getImage(listing)
                  const slug = getSlug(listing)
                  return (
                    <Link
                      key={slug}
                      href={`/listings/${slug}`}
                      className="bg-white rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-50 transform hover:-translate-y-2"
                    >
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        {img ? (
                          <img
                            src={img}
                            alt={listing.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-50">
                            <span className="text-5xl opacity-40">🏔️</span>
                          </div>
                        )}
                        {listing.categories?.[0] && (
                          <div className="absolute top-5 left-5">
                            <span className="bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                              {listing.categories[0]}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="font-heading font-black text-brand-navy text-xl mb-4 leading-snug line-clamp-2 group-hover:text-brand-green transition-colors">{listing.name}</h3>
                        
                        <div className="space-y-3 mb-8">
                          {listing.address && (
                            <p className="text-gray-400 text-xs font-medium flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                              </div>
                              <span className="line-clamp-1">{listing.address}</span>
                            </p>
                          )}
                          {listing.phone && (
                            <p className="text-gray-400 text-xs font-medium flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                              </div>
                              {listing.phone}
                            </p>
                          )}
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[10px] font-black text-brand-green uppercase tracking-widest group-hover:gap-2 transition-all flex items-center">
                            View Spot
                            <svg className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {hasMore && (
                <div className="text-center mt-20">
                  <button
                    onClick={() => setPage(p => p + 1)}
                    className="bg-brand-navy text-white font-black px-16 py-5 rounded-full text-base hover:bg-brand-navy/90 transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.2em]"
                  >
                    Load More <span className="ml-2 text-white/40">{filtered.length - paginated.length} left</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ListingsPageInner />
    </Suspense>
  )
}
