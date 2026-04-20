'use client'

import { useState, useEffect, useRef } from 'react'
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
            <div style="min-width:180px;font-family:sans-serif">
              ${img ? `<img src="${img}" alt="${listing.name}" style="width:100%;height:90px;object-fit:cover;border-radius:6px;margin-bottom:8px"/>` : ''}
              <strong style="font-size:13px;display:block;margin-bottom:4px">${listing.name}</strong>
              ${listing.address ? `<p style="font-size:11px;color:#666;margin:0 0 6px">${listing.address}</p>` : ''}
              <a href="/listings/${slug}" style="font-size:12px;color:#00B4D8;font-weight:bold;text-decoration:none">View Details →</a>
            </div>
          `, { maxWidth: 220 })
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
    <div className="flex flex-col gap-2">
      {unmapped > 0 && (
        <p className="text-xs text-gray-400">
          Showing {mappable.length} of {listings.length} listings on map ({unmapped} have no address).
        </p>
      )}
      <div ref={mapRef} style={{ height: '600px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }} />
    </div>
  )
}

export default function ListingsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSeason, setActiveSeason]     = useState(null) // 'summer' | 'winter' | null
  const [search, setSearch]                 = useState('')
  const [searchInput, setSearchInput]       = useState('')
  const [page, setPage]                     = useState(1)
  const [view, setView]                     = useState('grid') // 'grid' | 'map'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('category')) setActiveCategory(params.get('category'))
    if (params.get('season')) setActiveSeason(params.get('season'))
    if (params.get('search')) { setSearch(params.get('search')); setSearchInput(params.get('search')) }
  }, [])

  const filtered = allListings.filter((l) => {
    const matchCat = activeCategory === 'all' || getListingSlugs(l).includes(activeCategory)
    const matchSeason = !activeSeason || (l.categories || []).some(c => c.toLowerCase() === activeSeason)
    const matchSearch = search === '' ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.address || '').toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSeason && matchSearch
  })

  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore   = page * PAGE_SIZE < filtered.length

  const activeCategoryLabel = activeSeason
    ? (activeSeason === 'summer' ? 'Summer Activities' : 'Winter Activities')
    : (CATEGORIES.find(c => c.slug === activeCategory)?.name ?? 'All Listings')

  function handleCategoryChange(slug) {
    setActiveCategory(slug)
    setActiveSeason(null)
    setPage(1)
  }

  function handleSearch() {
    setSearch(searchInput)
    setPage(1)
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
            {activeCategory === 'all' ? 'All Listings' : activeCategoryLabel}
          </h1>
          <p className="text-gray-400 mb-8">
            {filtered.length} {filtered.length === 1 ? 'listing' : 'listings'} in and around Killington, Vermont
          </p>

          {/* Search + View Toggle */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search listings…"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20"
            />
            <button
              onClick={handleSearch}
              className="text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Search
            </button>
            {(activeCategory !== 'all' || activeSeason || search !== '') && (
              <button
                onClick={() => { setActiveCategory('all'); setActiveSeason(null); setSearch(''); setSearchInput(''); setPage(1); }}
                className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
              >
                Clear
              </button>
            )}

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 overflow-hidden flex-shrink-0">
              <button
                onClick={() => setView('grid')}
                title="Grid view"
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold transition-colors ${
                  view === 'grid' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'
                }`}
                style={view === 'grid' ? { backgroundColor: '#00B4D8' } : {}}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
                Grid
              </button>
              <button
                onClick={() => setView('map')}
                title="Map view"
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold transition-colors border-l border-gray-200 ${
                  view === 'map' ? 'text-white' : 'text-gray-500 hover:bg-gray-50'
                }`}
                style={view === 'map' ? { backgroundColor: '#00B4D8' } : {}}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Map
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">

        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-1 w-56 flex-shrink-0">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Categories</p>
          <button
            onClick={() => handleCategoryChange('all')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-left transition-all ${
              activeCategory === 'all' ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
            style={activeCategory === 'all' ? { backgroundColor: '#00B4D8' } : {}}
          >
            <span>🗺️</span> All Categories
            <span className="ml-auto text-xs opacity-70">{allListings.length}</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                activeCategory === cat.slug ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={activeCategory === cat.slug ? { backgroundColor: '#00B4D8' } : {}}
            >
              <span>{cat.emoji}</span>
              <span className="truncate">{cat.name}</span>
            </button>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* Mobile category pills */}
          <div className="flex md:hidden gap-2 flex-wrap mb-6">
            <button
              onClick={() => handleCategoryChange('all')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
              style={activeCategory === 'all' ? { backgroundColor: '#00B4D8', color: '#fff', borderColor: '#00B4D8' } : { borderColor: '#e5e7eb', color: '#6b7280' }}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
                style={activeCategory === cat.slug ? { backgroundColor: '#00B4D8', color: '#fff', borderColor: '#00B4D8' } : { borderColor: '#e5e7eb', color: '#6b7280' }}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-xl font-bold text-gray-700 mb-2">No listings found</p>
              <p className="text-gray-400 mb-6">Try a different category or search term.</p>
              <button
                onClick={() => { setActiveCategory('all'); setActiveSeason(null); setSearch(''); setSearchInput(''); setPage(1); }}
                className="text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Clear Filters
              </button>
            </div>
          ) : view === 'map' ? (
            <ListingsMap listings={filtered} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginated.map((listing) => {
                  const img = getImage(listing)
                  const slug = getSlug(listing)
                  return (
                    <Link
                      key={slug}
                      href={`/listings/${slug}`}
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        {img ? (
                          <img
                            src={img}
                            alt={listing.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-4xl">🏔️</span>
                          </div>
                        )}
                        {listing.categories?.[0] && (
                          <div className="absolute top-3 left-3">
                            <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#00B4D8' }}>
                              {listing.categories[0]}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-snug line-clamp-2">{listing.name}</h3>
                        {listing.address && (
                          <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span className="line-clamp-1">{listing.address}</span>
                          </p>
                        )}
                        {listing.hours && (
                          <p className="text-gray-400 text-xs mb-2 flex items-start gap-1">
                            <svg className="w-3 h-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                              <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="line-clamp-1">{listing.hours}</span>
                          </p>
                        )}
                        {listing.phone && (
                          <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            {listing.phone}
                          </p>
                        )}
                        <div className="mt-auto">
                          <span
                            className="inline-block text-sm font-bold text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#00B4D8' }}
                          >
                            View Details
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setPage(p => p + 1)}
                    className="text-white font-bold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
                    style={{ backgroundColor: '#00B4D8' }}
                  >
                    Load More ({filtered.length - paginated.length} remaining)
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
