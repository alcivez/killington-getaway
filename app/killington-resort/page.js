'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const STATS = [
  { stat: '1,509', label: 'Skiable Acres' },
  { stat: '140', label: 'Trails' },
  { stat: '22', label: 'Lifts' },
  { stat: '4,241 ft', label: 'Peak Elevation' },
  { stat: '73 mi', label: 'Trail Miles' },
  { stat: '6', label: 'Terrain Parks' },
  { stat: '~100%', label: 'Snowmaking Coverage' },
  { stat: '32,480 ft', label: 'Longest Run' },
]

const TERRAIN = [
  {
    level: 'Beginner',
    color: '#22c55e',
    symbol: '●',
    trails: ['Easy Street (Ramshead)', 'Great Eastern', 'Snowshed Slope', 'Lower Parade', 'Bear Cub'],
    tip: 'Start at Snowshed base area. Wide, forgiving terrain with dedicated lift access — no sharing the mountain with speed demons.',
  },
  {
    level: 'Intermediate',
    color: '#3b82f6',
    symbol: '◆',
    trails: ['Cruise Control', 'Ramshead Express', 'Skyeburst', 'Solitude', 'East Fall'],
    tip: 'Bear Mountain and Skye Peak are the sweet spot. High-speed lifts, long runs, and groomed corduroy in the morning.',
  },
  {
    level: 'Advanced',
    color: '#111827',
    symbol: '◆◆',
    trails: ['Outer Limits (moguls)', 'Devil\'s Fiddle', 'Superstar (World Cup)', 'Cascade', 'Double Dipper'],
    tip: 'Head to Killington Peak. Superstar is the benchmark run — if you can ski it top to bottom with composure, you can ski anything here.',
  },
  {
    level: 'Terrain Parks',
    color: '#f59e0b',
    symbol: '▲',
    trails: ['The Stash (natural features)', 'Dream Maker', 'Mouse Run Park', 'Bear Mountain Superpipe'],
    tip: "The Stash is a must-visit — a natural-feature park built into the trees with log rails and wooden ramps. Unlike anything else in the East.",
  },
]

export default function KillingtonResortPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80"
          alt="Killington Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>Killington, Vermont</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">The Beast of the East</h1>
          <p className="text-gray-200 text-lg max-w-2xl">The largest ski resort in eastern North America — 1,509 acres, 140 trails, and the longest ski season of any mountain in the East.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map(({ stat, label }) => (
            <div key={label} className="py-2">
              <p className="text-2xl md:text-3xl font-extrabold" style={{ color: '#00B4D8' }}>{stat}</p>
              <p className="text-sm text-gray-500 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">About the Resort</h2>
            <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
              <p>Killington Resort earned its nickname — The Beast of the East — through sheer size, aggressive snowmaking, and a season that stretches from November through May while other New England mountains have long since closed. It's not just the biggest mountain in the East; it's a different category of experience.</p>
              <p>Spread across six interconnected peaks, Killington offers 140 trails that range from the friendliest beginner terrain in Vermont (Snowshed base area) to Outer Limits, widely regarded as the most challenging mogul run in eastern North America. The Superstar trail hosts a FIS Women's World Cup race every Thanksgiving weekend, drawing tens of thousands of spectators to the mountain.</p>
              <p>For the 2024–25 season, Killington began operating independently following its separation from POWDR Corp — a transition that has given the resort renewed focus on the local community and guest experience.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-5">Getting There</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              {[
                { from: 'Boston, MA', time: '3 hours', icon: '🚗' },
                { from: 'New York City, NY', time: '4.5 hours', icon: '🚗' },
                { from: 'Burlington Airport (BTV)', time: '45 min – 1 hr', icon: '✈️' },
                { from: 'Montreal, QC', time: '2.5 hours', icon: '🚗' },
                { from: 'Hartford, CT', time: '2.5 hours', icon: '🚗' },
              ].map((r) => (
                <div key={r.from} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <span className="flex items-center gap-2">{r.icon} {r.from}</span>
                  <span className="font-semibold" style={{ color: '#00B4D8' }}>{r.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-gray-200 text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-1">Resort Contact</p>
              <p>📞 <a href="tel:+18007349435" className="hover:opacity-70" style={{ color: '#00B4D8' }}>1-800-734-9435</a></p>
              <p>🌐 <a href="https://www.killington.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70" style={{ color: '#00B4D8' }}>killington.com</a></p>
              <p>📍 4763 Killington Road, Killington, VT 05751</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terrain breakdown */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">Trail Guide by Skill Level</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TERRAIN.map((t) => (
              <div key={t.level} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-extrabold" style={{ color: t.color }}>{t.symbol}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{t.level}</h3>
                </div>
                <ul className="flex flex-col gap-1 mb-3">
                  {t.trails.map((trail) => (
                    <li key={trail} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                      {trail}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 leading-relaxed italic border-t border-gray-100 pt-3">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Plan Your Visit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Ski Conditions', href: '/ski-conditions', emoji: '❄️' },
              { label: 'Webcams', href: '/webcams', emoji: '📷' },
              { label: 'Mountain Shuttles', href: '/mountain-shuttles', emoji: '🚌' },
              { label: 'Ski Shops', href: '/listings?category=ski-shops', emoji: '🎿' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex flex-col items-center gap-2 border border-gray-100 rounded-2xl py-6 px-3 hover:shadow-md hover:border-[#00B4D8] transition-all duration-200 group"
              >
                <span className="text-3xl">{l.emoji}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00B4D8] transition-colors text-center">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
