'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MILESTONES = [
  { year: '2016', label: 'Founded in Vermont', desc: 'Killington Getaway launched as a simple lodging directory built by locals for visitors who wanted better local knowledge than the resort website could offer.' },
  { year: '2018', label: 'Expanded to Full Guide', desc: 'Added dining, activities, and gear categories. The team grew to include year-round locals across restaurants, ski patrol, and the service industry.' },
  { year: '2020', label: 'Community Focus', desc: 'Launched the Giving Back program, formalizing partnerships with YES (Youth Enrichment Services) and local Vermont nonprofits.' },
  { year: '2022', label: 'B-Corp Certification', desc: 'Became a Certified B Corporation — joining the global movement of businesses using profit as a force for good.' },
  { year: '2024', label: 'Platform Rebuild', desc: 'Launched the current platform with a full listings database, editorial content, and interactive tools for planning the perfect Vermont mountain trip.' },
]

const VALUES = [
  {
    icon: '🏔️',
    title: 'Local First',
    desc: "We live here. Every recommendation on Killington Getaway comes from people who ski Killington every week, eat at these restaurants every month, and call Vermont home year-round.",
  },
  {
    icon: '🌿',
    title: 'Sustainability',
    desc: "Vermont's mountains and communities deserve to be here for the next generation. Our B-Corp certification isn't a marketing label — it's a commitment we renew every year through audit.",
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: "A percentage of every affiliate partnership goes back to Vermont nonprofits. We measure success not just by traffic, but by how much we give back to the community that powers this place.",
  },
  {
    icon: '🎯',
    title: 'Honest Information',
    desc: "We don't take payment for positive reviews. If a restaurant is good, we say so. If it's not, we leave it off the list. That's the only way a local guide stays worth reading.",
  },
]

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
          alt="Vermont mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">Our Story</h1>
          <p className="text-gray-200 text-lg max-w-2xl">A local guide built by the people who actually live here — for the visitors who want to experience Killington the right way.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5 leading-tight">We Built the Guide We Wished Existed</h2>
            <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
              <p>Killington Getaway started as a side project. A few local skiers, frustrated that every "Killington guide" online was either written by someone who visited once or produced by a content farm in another state, decided to build something different.</p>
              <p>The premise was simple: if you're going to trust a source for where to stay, eat, and ski in Killington, that source should actually live there. The team behind Killington Getaway includes year-round Vermont residents, former ski instructors, local restaurant owners, and people who ski Killington 50+ days a season.</p>
              <p>We've grown into the most comprehensive guide to the Killington region — covering lodging, dining, activities, gear, mountain conditions, and the local events calendar. But the core principle hasn't changed: honest recommendations from people with real stakes in getting it right.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">What We Cover</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: '🏠', label: 'Lodging', count: '80+ properties' },
                { icon: '🍽️', label: 'Restaurants & Bars', count: '60+ listings' },
                { icon: '🎿', label: 'Ski & Gear Shops', count: '25+ shops' },
                { icon: '🚵', label: 'Activities', count: '100+ experiences' },
                { icon: '📝', label: 'Editorial Articles', count: '50+ guides' },
                { icon: '📍', label: 'Local Businesses', count: '300+ total listings' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#00B4D8' }}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">How We Got Here</h2>
          <div className="flex flex-col gap-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0" style={{ backgroundColor: '#00B4D8' }}>
                    {m.year.slice(2)}
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 flex-1 my-2" style={{ backgroundColor: '#e5e7eb' }} />}
                </div>
                <div className={`pb-8 ${i < MILESTONES.length - 1 ? 'pb-10' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#00B4D8' }}>{m.year}</p>
                  <h3 className="font-bold text-gray-900 mb-1">{m.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Meet the Team</h2>
          <p className="text-gray-400 mb-6 text-sm">The locals behind the guide — skiers, snowboarders, hikers, and year-round Vermonters.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/our-team"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Our Team
            </Link>
            <Link
              href="/how-it-started"
              className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
              style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
            >
              How It Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
