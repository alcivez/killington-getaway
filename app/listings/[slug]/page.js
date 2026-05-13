import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import allListings from '../../../listings.json'

import ListingMapClient from '../../components/ListingMapClient'

function getSlug(listing) {
  const url = listing.url || ''
  const clean = url.replace(/\/$/, '')
  const parts = clean.split('/')
  return parts[parts.length - 1] || listing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function getImage(listing) {
  return listing.localImage || listing.image || null
}

export function generateStaticParams() {
  return allListings.map((listing) => ({
    slug: getSlug(listing),
  }))
}

export default async function ListingDetailPage({ params }) {
  const { slug } = await params
  const listing = allListings.find(l => getSlug(l) === slug)

  if (!listing) {
    return (
      <main className="min-h-screen bg-white font-body">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="text-8xl mb-10">🏔️</p>
          <h1 className="text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight">Spot Not Found</h1>
          <p className="text-gray-400 text-xl font-medium mb-12">This location may have moved or no longer exists in our guide.</p>
          <Link
            href="/listings"
            className="inline-block bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            ← Back to All Spots
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const img = getImage(listing)

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full pt-16 pb-12 overflow-hidden">
        {/* Background image of Beast of the East */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/beast-of-the-east.png" 
            alt="Killington Mountain" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        {/* Subtle background gradient overlay at ~40% */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/60 via-brand-navy/40 to-brand-blue/20 z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-navy/20 z-0" />
        
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-white/70 text-[10px] font-black uppercase tracking-[0.3em] mb-4 hover:text-white transition-colors group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Explorer
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
            <div className="flex-1 w-full">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {(listing.categories || []).map((cat) => {
                  // Generate a deterministic color based on category name
                  const colors = [
                    'bg-brand-green border-brand-green/20 text-white',
                    'bg-brand-blue border-brand-blue/20 text-white',
                    'bg-orange-500 border-orange-500/20 text-white',
                    'bg-purple-500 border-purple-500/20 text-white',
                    'bg-pink-500 border-pink-500/20 text-white',
                    'bg-teal-500 border-teal-500/20 text-white',
                    'bg-brand-navy border-brand-navy/20 text-white'
                  ];
                  let hash = 0;
                  for (let i = 0; i < cat.length; i++) hash = cat.charCodeAt(i) + ((hash << 5) - hash);
                  const colorClass = colors[Math.abs(hash) % colors.length];

                  return (
                    <span key={cat} className={`glass text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border ${colorClass}`}>
                      {cat}
                    </span>
                  )
                })}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[0.95] tracking-tight drop-shadow-xl">
                {listing.name}
              </h1>
            </div>

            {img && (
              <div className="w-full max-w-lg md:w-[400px] flex-shrink-0 z-10 relative mt-10 md:mt-0">
                <div className="bg-white/10 p-2 rounded-[2rem] shadow-2xl backdrop-blur-md border border-white/20 transform hover:scale-[1.02] transition-all duration-500">
                  <div className="rounded-[1.5rem] overflow-hidden bg-white/5 shadow-inner">
                    <img
                      src={img}
                      alt={listing.name}
                      className="w-full h-auto object-cover display-block"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left Column: Description */}
          <div className="lg:col-span-2">
            <div className="prose prose-xl prose-navy max-w-none">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-1 bg-brand-green rounded-full" />
                <h2 className="text-3xl font-heading font-black text-brand-navy tracking-tight uppercase">Overview</h2>
              </div>
              
              {listing.description ? (
                <p className="text-gray-500 text-xl font-medium leading-relaxed mb-4">
                  {listing.description}
                </p>
              ) : (
                <p className="text-gray-400 italic text-xl font-medium mb-4">
                  No description available for this location yet. We're currently updating our guide with more details.
                </p>
              )}
              
              <ListingMapClient listing={listing} />
            </div>
          </div>

          {/* Right Column: Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[3rem] p-10 shadow-premium border border-gray-50 sticky top-32">
              <h3 className="text-xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase">Spot Details</h3>
              
              <div className="space-y-8 mb-12">
                {listing.address && (
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center flex-shrink-0 text-brand-green">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-brand-navy font-bold text-sm leading-snug">{listing.address}</p>
                    </div>
                  </div>
                )}

                {listing.hours && (
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 text-brand-blue">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Hours</p>
                      <p className="text-brand-navy font-bold text-sm leading-snug">{listing.hours}</p>
                    </div>
                  </div>
                )}

                {listing.phone && (
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center flex-shrink-0 text-brand-navy">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${listing.phone.replace(/\D/g, '')}`} className="text-brand-navy font-bold text-sm hover:text-brand-green transition-colors">{listing.phone}</a>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {listing.website && (
                  <a
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-brand-green text-white font-black text-sm px-8 py-5 rounded-2xl hover:bg-brand-green/90 transition-all shadow-xl w-full uppercase tracking-widest"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Visit Website
                  </a>
                )}
                {listing.email && (
                  <a
                    href={`mailto:${listing.email}`}
                    className="flex items-center justify-center gap-3 bg-brand-navy text-white font-black text-sm px-8 py-5 rounded-2xl hover:bg-brand-navy/90 transition-all shadow-xl w-full uppercase tracking-widest"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Send Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
