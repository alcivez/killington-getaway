'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIES = [
  { slug: 'arborist',                  label: 'Arborist',                  icon: '🌲', desc: 'Tree care, removal, and health assessments from certified arborists serving the Killington region.' },
  { slug: 'builder',                   label: 'Builder / General Contractor', icon: '🏗️', desc: 'Full-service builders and general contractors for new construction and major renovation projects.' },
  { slug: 'builders-contractors-services', label: 'Contractors & Services', icon: '🔧', desc: 'Licensed contractors offering a wide range of construction and home improvement services.' },
  { slug: 'chimney-technicians',       label: 'Chimney Technicians',        icon: '🧱', desc: 'Chimney sweeps, inspections, relining, and masonry repairs — essential for Vermont homes.' },
  { slug: 'electricians',             label: 'Electricians',               icon: '⚡', desc: 'Licensed electricians for residential and commercial electrical work throughout the Killington area.' },
  { slug: 'excavator',                label: 'Excavator',                  icon: '🚜', desc: 'Excavation, grading, land clearing, and site preparation services.' },
  { slug: 'glass-repair',             label: 'Glass Repair',               icon: '🪟', desc: 'Window replacement, glass repair, and custom glazing for homes and commercial spaces.' },
  { slug: 'handyman',                 label: 'Handyman',                   icon: '🛠️', desc: 'Reliable handyman services for repairs, maintenance, and small renovation projects.' },
  { slug: 'hot-tub-spa',              label: 'Hot Tub & Spa Service',      icon: '♨️', desc: 'Hot tub installation, repair, maintenance, and water treatment for Vermont properties.' },
  { slug: 'pest-control',             label: 'Pest Control',               icon: '🐛', desc: 'Licensed pest management services keeping Vermont homes and businesses pest-free year-round.' },
  { slug: 'plumbers',                 label: 'Plumbers',                   icon: '🚿', desc: 'Plumbing installation, repair, and emergency services across the Killington and Rutland areas.' },
  { slug: 'property-managers',        label: 'Property Managers',          icon: '🏠', desc: 'Full-service property management for vacation rentals and year-round residential properties.' },
]

export default function LocalContractorsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Killington Region</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Local Contractors</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Browse among dozens of skilled professionals who can help you with any hassle — from plumbing and electrical to property management and tree care.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: '#00B4D8' + '18' }}>
                  {cat.icon}
                </div>
                <h2 className="font-bold text-gray-900 text-lg">{cat.label}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{cat.desc}</p>
                <Link
                  href={`/contact-us?subject=${encodeURIComponent('Looking for a ' + cat.label)}`}
                  className="text-sm font-semibold hover:opacity-70 transition-opacity mt-auto"
                  style={{ color: '#00B4D8' }}
                >
                  Find a {cat.label.split('/')[0].trim()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are you a contractor CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Are You a Local Contractor?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Get your business in front of thousands of Vermont homeowners, property managers, and second-home owners who rely on Killington Getaway to find trusted local professionals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/add-listings"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Add Your Listing
            </Link>
            <Link
              href="/contact-us"
              className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
              style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
