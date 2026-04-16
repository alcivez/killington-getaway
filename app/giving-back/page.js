'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PARTNERS = [
  {
    name: 'YES — Youth Enrichment Services',
    logo: '🎿',
    logoColor: '#00B4D8',
    desc: "YES is a Boston-based nonprofit that provides urban youth with access to outdoor activities including skiing, snowboarding, sailing, and rock climbing. Killington Getaway is a proud supporter — we donate a percentage of every affiliate sale to help more kids experience the mountain for the first time.",
    impact: 'Supports ski & snowboard access for urban youth',
    link: 'https://www.yeskids.org',
    linkLabel: 'yeskids.org →',
  },
  {
    name: 'Vermont Land Trust',
    logo: '🌿',
    logoColor: '#059669',
    desc: "The Vermont Land Trust has conserved over 600,000 acres of Vermont farmland, forests, and wildlife habitat since 1977. Protecting the land that makes Vermont skiing and outdoor recreation possible is a cause directly aligned with what Killington Getaway is about.",
    impact: '600,000+ acres protected in Vermont',
    link: 'https://www.vlt.org',
    linkLabel: 'vlt.org →',
  },
  {
    name: 'Vermont Adaptive Ski and Sports',
    logo: '♿',
    logoColor: '#7C3AED',
    desc: "Vermont Adaptive provides year-round adaptive sports programming for people with physical, cognitive, and emotional disabilities. Based at Pico Mountain (Killington's neighbor), they serve hundreds of participants each year with one-on-one instruction and adaptive equipment.",
    impact: 'Year-round adaptive sports across Vermont',
    link: 'https://www.vermontadaptive.org',
    linkLabel: 'vermontadaptive.org →',
  },
]

const PROGRAMS = [
  {
    title: '% of Affiliate Revenue',
    icon: '💰',
    desc: 'A percentage of every affiliate commission we earn — from gear recommendations, lodging bookings, and activity referrals — goes directly to our nonprofit partners. Every time you book through a Killington Getaway link, a portion returns to the Vermont community.',
  },
  {
    title: 'Local Business Priority',
    icon: '🏪',
    desc: "We prioritize Vermont-owned, locally operated businesses in our listings. When visitors discover and support local businesses through Killington Getaway, that money stays in the Killington community — supporting local families and the local economy year-round.",
  },
  {
    title: 'Editorial Independence',
    icon: '📰',
    desc: "We don't sell editorial placements. Our articles and recommendations are written independently, without payment from the businesses mentioned. That independence is a form of giving back to our readers — they can trust what they read here.",
  },
  {
    title: 'B-Corp Accountability',
    icon: '✅',
    desc: 'As a Certified B Corporation, our giving commitments are audited externally every three years. We can\'t quietly reduce donations or change our practices without triggering re-certification. The B-Corp framework keeps us honest.',
  },
]

export default function GivingBackPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Vermont mountains and community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>Community Impact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Giving Back</h1>
          <p className="text-gray-200 text-base max-w-2xl">How Killington Getaway invests in the communities and mountains that make this place worth visiting.</p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Business as a Force for Good</h2>
          <p className="text-gray-500 leading-relaxed text-base">
            Killington Getaway was built on the belief that a local guide has a responsibility to the community it serves. We're a Certified B Corporation — which means we've made a legally binding commitment to consider the impact of our decisions on workers, customers, communities, and the environment.
          </p>
          <p className="text-gray-500 leading-relaxed text-base mt-4">
            Vermont has given us so much. The mountain, the culture, the community, the seasons. Giving back isn't a marketing strategy — it's the only right way to operate here.
          </p>
          <Link
            href="/certified-b-corp"
            className="inline-block mt-6 text-sm font-bold px-6 py-2.5 rounded-full border-2 hover:opacity-70 transition-opacity"
            style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
          >
            About Our B-Corp Certification →
          </Link>
        </div>
      </section>

      {/* Nonprofit Partners */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">Our Nonprofit Partners</h2>
          <div className="flex flex-col gap-6">
            {PARTNERS.map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: p.logoColor + '15' }}
                >
                  {p.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: p.logoColor }}>
                      {p.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: '#00B4D8' }}
                  >
                    {p.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">How We Do It</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROGRAMS.map((prog) => (
              <div key={prog.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="text-2xl mb-3">{prog.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{prog.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Get Involved</h2>
          <p className="text-gray-400 mb-6 text-sm">
            If you run a Vermont nonprofit and think there's an opportunity for partnership, we'd love to hear from you.
          </p>
          <Link
            href="/contact-us"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
