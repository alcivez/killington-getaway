'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import allListings from '../../../listings.json'

function getSlug(listing) {
  const url = listing.url || ''
  const clean = url.replace(/\/$/, '')
  const parts = clean.split('/')
  return parts[parts.length - 1] || listing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function getImage(listing) {
  return listing.localImage || listing.image || null
}

export default function ListingDetailPage() {
  const { slug } = useParams()
  const listing = allListings.find(l => getSlug(l) === slug)

  if (!listing) {
    return (
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-6xl mb-6">🏔️</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Listing Not Found</h1>
          <p className="text-gray-400 mb-8">This listing may have moved or been removed.</p>
          <Link
            href="/listings"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B4D8' }}
          >
            ← Back to Listings
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const img = getImage(listing)

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <div className="relative w-full bg-gray-100" style={{ height: '400px' }}>
        {img ? (
          <img
            src={img}
            alt={listing.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-8xl">🏔️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {(listing.categories || []).slice(0, 4).map((cat) => (
              <span key={cat} className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#00B4D8' }}>
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {listing.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/listings"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
          style={{ color: '#00B4D8' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to all listings
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="md:col-span-2">
            {listing.description && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
                <p className="text-gray-600 leading-relaxed">{listing.description}</p>
              </div>
            )}
          </div>

          {/* Info sidebar */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5 h-fit">
            {listing.address && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Address</p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00B4D8' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {listing.address}
                </p>
              </div>
            )}

            {listing.hours && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Hours</p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00B4D8' }}>
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {listing.hours}
                </p>
              </div>
            )}

            {listing.phone && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                <a
                  href={`tel:${listing.phone.replace(/\D/g, '')}`}
                  className="text-sm flex items-center gap-2 hover:opacity-70 transition-opacity"
                  style={{ color: '#00B4D8' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  {listing.phone}
                </a>
              </div>
            )}

            {listing.email && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <a
                  href={`mailto:${listing.email}`}
                  className="text-sm flex items-center gap-2 hover:opacity-70 transition-opacity break-all"
                  style={{ color: '#00B4D8' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeWidth="2"/>
                  </svg>
                  {listing.email}
                </a>
              </div>
            )}

            {listing.website && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-bold text-sm px-5 py-3 rounded-full hover:opacity-90 transition-opacity mt-2"
                style={{ backgroundColor: '#00B4D8' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
