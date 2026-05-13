'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useWeather } from '../hooks/useWeather'

const NAV_LEFT = [
  {
    label: 'Explore Killington',
    dropdown: [
      { label: 'Killington Resort',    href: '/killington-resort' },
      { label: 'Lodging Options',       href: '/listings?category=lodging-options' },
      { label: 'Woodward Terrain Park', href: '/woodward-terrain-park' },
      { label: 'Ski Lessons',           href: '/ski-lessons' },
      { 
        label: 'The Bus', 
        href: '/the-bus',
        dropdown: [
          { label: 'Overview', href: '/the-bus' },
          { label: 'Routes',   href: '/the-bus/routes' },
          { label: 'Schedule', href: '/the-bus/schedule' },
        ]
      },
      { label: 'Ski Lift Tickets',      href: '/ski-lift-tickets' },
      { label: 'Ski Conditions',        href: '/ski-conditions' },
    ],
  },
  {
    label: 'Things To Do',
    dropdown: [
      { label: 'Summer Activities', href: '/summer' },
      { label: 'Winter Activities', href: '/winter' },
    ],
  },
  { label: 'Food', href: '/listings?category=places-to-eat' },
  {
    label: "Traveler's Choice",
    dropdown: [
      { label: 'Adventure',  href: '/listings?category=adventure' },
      { label: 'Breweries',  href: '/listings?category=breweries' },
      { label: 'Food',       href: '/listings?category=places-to-eat' },
      { label: 'Golf',       href: '/listings?category=golf' },
      { label: 'Hiking',     href: '/listings?category=hiking' },
      { label: 'Ski Shops',  href: '/listings?category=ski-shops' },
    ],
  },
]

const NAV_RIGHT = [
  {
    label: 'Our Story',
    dropdown: [
      { label: 'How it Started', href: '/our-story' },
      { label: 'Our Team',       href: '/our-team' },
      { label: 'Giving Back',    href: '/giving-back' },
    ],
  },
  { label: 'Blog',               href: '/blog' },
  { label: 'Swag',               href: 'https://skitheeast.net/' },
  { label: 'Best Gear For 2026', href: '/gear' },
]

function Chevron() {
  return (
    <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DesktopItem({ item }) {
  if (!item.dropdown) {
    const isExternal = item.href.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap font-medium transition-colors"
        >
          {item.label}
        </a>
      )
    }
    return (
      <Link
        href={item.href}
        className="px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap font-medium transition-colors"
      >
        {item.label}
      </Link>
    )
  }
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap font-medium transition-colors">
        {item.label}
        <Chevron />
      </button>
      {/* invisible bridge so cursor can reach the menu */}
      <div className="absolute top-full left-0 w-full h-2" />
      <div className="absolute top-[calc(100%+0.5rem)] left-0 hidden group-hover:block z-50 min-w-[192px]">
        <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-1.5">
          {item.dropdown.map((sub) => {
            if (sub.dropdown) {
              return (
                <div key={sub.label} className="relative group/sub px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between">
                  <span>{sub.label}</span>
                  <svg className="w-3 h-3 -rotate-90 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Nested side menu */}
                  <div className="absolute left-[calc(100%-0.5rem)] top-0 hidden group-hover/sub:block pl-2 z-50 min-w-[160px]">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-1.5">
                      {sub.dropdown.map((ss) => (
                        <Link
                          key={ss.label + ss.href}
                          href={ss.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap"
                        >
                          {ss.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={sub.label + sub.href}
                href={sub.href}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                {sub.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const { weather, loading } = useWeather()
  const [mobileOpen, setMobileOpen]  = useState(false)
  const [searchOpen, setSearchOpen]  = useState(false)
  const [openMobile, setOpenMobile]  = useState(null)
  const [openSubMobile, setOpenSubMobile] = useState(null)

  return (
    <>
      {/* ── Top tagline (Visible on all devices now) ── */}
      <div className="border-b border-gray-100 py-2 text-center bg-brand-navy">
        <p className="font-black uppercase text-white tracking-[0.2em] text-[10px] md:text-sm">
          Discover the Best of Killington, Vermont
        </p>
      </div>

      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* ── Main nav row ── */}
        <div className="border-b border-gray-100 relative">
          <div className="max-w-screen-xl mx-auto px-5 flex items-center h-20 md:h-24">

          {/* Left nav group (hugs the logo) */}
          <div className="hidden lg:flex items-center flex-1 justify-end pr-12 gap-1 lg:gap-2">
            {NAV_LEFT.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </div>

          {/* Center logo — absolute on desktop so it's truly centered */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block z-10">
            <Link href="/">
              <img src="/logo-color.png" alt="Killington Getaway" style={{ height: '63px' }} />
            </Link>
          </div>

          {/* Mobile: logo left-aligned */}
          <Link href="/" className="lg:hidden flex-shrink-0">
            <img src="/logo-color.png" alt="Killington Getaway" className="h-10 md:h-12" />
          </Link>

          {/* Mobile Middle Section (Synced Weather) */}
          <div className="lg:hidden flex-1 flex justify-center items-center px-2 min-w-0 overflow-hidden">
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm max-w-full">
              {!loading && weather ? (
                <div className="flex items-center gap-2 transition-opacity duration-300">
                  {/* Temp */}
                  <div className="flex items-center gap-1">
                    <span className="text-base">🏔️</span>
                    <span className="text-[10px] font-black text-brand-navy tracking-tight uppercase leading-none">
                      {weather.temp}°F
                    </span>
                  </div>
                  
                  <div className="w-[1px] h-3 bg-gray-200" />
                  
                  {/* Snow */}
                  <div className="flex items-center gap-1">
                    <span className="text-base">❄️</span>
                    <span className="text-[10px] font-black text-brand-navy tracking-tight uppercase leading-none whitespace-nowrap">
                      {weather.newSnow > 0 ? `${weather.newSnow}" New` : `${weather.snowDepth}" Base`}
                    </span>
                  </div>
                </div>
              ) : (
                /* Compact Skeleton */
                <div className="flex items-center gap-2">
                  <div className="w-8 h-3 bg-gray-200 animate-pulse rounded" />
                  <div className="w-[1px] h-3 bg-gray-200" />
                  <div className="w-12 h-3 bg-gray-200 animate-pulse rounded" />
                </div>
              )}
            </div>
          </div>

          {/* Right nav group (hugs the logo) */}
          <div className="hidden lg:flex items-center flex-1 justify-start pl-12 gap-1 lg:gap-2">
            {NAV_RIGHT.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
            
            {/* Desktop Weather (Synced) */}
            <div className="ml-4 flex items-center gap-2 bg-gray-50/50 hover:bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 transition-colors">
              {!loading && weather ? (
                <>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">🏔️</span>
                    <span className="text-[10px] font-black text-brand-navy tracking-tight uppercase leading-none">
                      {weather.temp}°F
                    </span>
                  </div>
                  <div className="w-[1px] h-3 bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">❄️</span>
                    <span className="text-[10px] font-black text-brand-navy tracking-tight uppercase leading-none whitespace-nowrap">
                      {weather.newSnow > 0 ? `${weather.newSnow}" New` : `${weather.snowDepth}" Base`}
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-20 h-3 bg-gray-100 animate-pulse rounded" />
              )}
            </div>

            {/* Search */}
            <button
              onClick={() => setSearchOpen((s) => !s)}
              className="ml-2 p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <svg className="w-4.5 h-4.5" style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ── Search bar (expands below nav) ── */}
      {searchOpen && (
        <div className="border-b border-gray-100 bg-white px-6 py-3">
          <div className="max-w-2xl mx-auto flex gap-3">
            <input
              autoFocus
              type="text"
              placeholder="Search listings, activities, places…"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2d94e3] focus:ring-2 focus:ring-[#2d94e3]/20"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  window.location.href = `/listings?search=${encodeURIComponent(e.target.value.trim())}`
                }
              }}
            />
            <button
              className="text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#2d94e3' }}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white overflow-y-auto max-h-[75vh]">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <div key={item.label} className="border-b border-gray-50 last:border-0">
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-700"
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${openMobile === item.label ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openMobile === item.label && (
                    <div className="bg-gray-50 pb-2">
                      {item.dropdown.map((sub) => (
                        <div key={sub.label + sub.href}>
                          {sub.dropdown ? (
                            <>
                              <button
                                className="w-full flex items-center justify-between px-8 py-2.5 text-sm text-gray-600 hover:text-gray-900"
                                onClick={() => setOpenSubMobile(openSubMobile === sub.label ? null : sub.label)}
                              >
                                {sub.label}
                                <svg
                                  className={`w-3 h-3 text-gray-400 transition-transform ${openSubMobile === sub.label ? 'rotate-180' : ''}`}
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {openSubMobile === sub.label && (
                                <div className="bg-gray-100/50 pb-1">
                                  {sub.dropdown.map((ss) => (
                                    <Link
                                      key={ss.label + ss.href}
                                      href={ss.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-12 py-2 text-xs text-gray-500 hover:text-gray-900"
                                    >
                                      {ss.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-2.5 text-sm text-gray-600 hover:text-gray-900"
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                (() => {
                  const isExternal = item.href && item.href.startsWith('http')
                  if (isExternal) {
                    return (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    )
                  }
                  return (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                  )
                })()
              )}
            </div>
          ))}
        </div>
      )}

    </header>
    </>
  )
}
