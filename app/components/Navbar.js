'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <img src="/logo-color.png" alt="Killington Getaway" style={{ height: '50px' }} />
        </Link>
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
              {i < arr.length - 1 && <span className="text-gray-300 select-none">|</span>}
            </span>
          ))}
        </div>
        <Link
          href="/listings"
          className="flex-shrink-0 text-sm font-bold px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity shadow-sm"
          style={{ backgroundColor: '#00B4D8' }}
        >
          Browse Listings
        </Link>
      </div>
    </nav>
  )
}
