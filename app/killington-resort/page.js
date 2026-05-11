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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[550px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80"
          alt="Killington Resort"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-white/60">Killington, Vermont</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tight mb-6 uppercase">The Beast of <span className="text-brand-green">The East</span></h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">The largest ski resort in eastern North America — 1,509 acres, 140 trails, and the longest ski season of any mountain in the East.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
          {STATS.map(({ stat, label }) => (
            <div key={label} className="group">
              <p className="text-4xl md:text-5xl font-heading font-black text-brand-green mb-2 transform group-hover:scale-110 transition-transform leading-none">{stat}</p>
              <p className="text-[10px] text-gray-300 font-black uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-4 h-4 bg-brand-green rounded-full" />
              <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-navy uppercase tracking-tight">About <span className="text-brand-green">The Resort</span></h2>
            </div>
            <div className="flex flex-col gap-8 text-gray-400 text-lg font-medium leading-relaxed">
              <p>Killington Resort earned its nickname — The Beast of the East — through sheer size, aggressive snowmaking, and a season that stretches from November through May while other New England mountains have long since closed.</p>
              <p>Spread across six interconnected peaks, Killington offers 140 trails that range from the friendliest beginner terrain in Vermont to Outer Limits, widely regarded as the most challenging mogul run in eastern North America.</p>
              <div className="bg-brand-navy rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-4">Latest Update</p>
                <p className="text-white text-xl font-heading font-bold mb-0">Now operating independently, Killington has a renewed focus on local community and a premium guest experience.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 shadow-premium relative">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-10 uppercase tracking-tight">Getting <span className="text-brand-green">There</span></h3>
            <div className="flex flex-col gap-6">
              {[
                { from: 'Boston, MA', time: '3 hours', icon: '🚗' },
                { from: 'New York City, NY', time: '4.5 hours', icon: '🚗' },
                { from: 'Burlington Airport (BTV)', time: '45 min – 1 hr', icon: '✈️' },
                { from: 'Montreal, QC', time: '2.5 hours', icon: '🚗' },
                { from: 'Hartford, CT', time: '2.5 hours', icon: '🚗' },
              ].map((r) => (
                <div key={r.from} className="flex items-center justify-between border-b border-gray-100 pb-5 last:border-0 last:pb-0 group">
                  <span className="flex items-center gap-4 text-brand-navy font-bold text-lg group-hover:translate-x-2 transition-transform">
                    <span className="text-2xl">{r.icon}</span>
                    {r.from}
                  </span>
                  <span className="font-heading font-black text-brand-green text-xl">{r.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Resort Contact</p>
                <a href="tel:+18007349435" className="text-brand-navy font-bold hover:text-brand-green transition-colors block text-lg">1-800-734-9435</a>
                <a href="https://www.killington.com" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-bold hover:text-brand-green transition-colors block text-lg mt-1 underline">killington.com</a>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Location</p>
                <p className="text-brand-navy font-bold text-lg">4763 Killington Road, Killington, VT 05751</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terrain Breakdown */}
      <section className="bg-gray-50/50 py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Trail Guide by <span className="text-brand-green">Skill Level</span></h2>
            <p className="text-gray-400 text-xl font-medium">Navigate the Beast with confidence, from gentle slopes to extreme bumps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TERRAIN.map((t) => (
              <div key={t.level} className="bg-white rounded-[2.5rem] p-10 border border-gray-50 shadow-premium hover:-translate-y-2 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl" style={{ color: t.color }}>{t.symbol}</span>
                  <h3 className="font-heading font-black text-brand-navy text-xl uppercase tracking-tight">{t.level}</h3>
                </div>
                <ul className="flex flex-col gap-4 mb-10">
                  {t.trails.map((trail) => (
                    <li key={trail} className="text-sm font-bold text-brand-navy/60 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                      {trail}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-gray-50">
                  <p className="text-xs font-black text-brand-green uppercase tracking-[0.2em] mb-3">Insider Tip</p>
                  <p className="text-gray-400 text-xs font-medium leading-relaxed italic">{t.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-16 tracking-tight uppercase">Plan Your <span className="text-brand-green">Visit</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Ski Conditions', href: '/ski-conditions', emoji: '❄️' },
              { label: 'Webcams', href: '/webcams', emoji: '📷' },
              { label: 'Mountain Shuttles', href: '/mountain-shuttles', emoji: '🚌' },
              { label: 'Ski Shops', href: '/listings?category=ski-shops', emoji: '🎿' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex flex-col items-center justify-center gap-6 bg-gray-50 border border-gray-100 rounded-[3rem] py-12 px-6 hover:bg-brand-navy group transition-all duration-500 shadow-sm"
              >
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-4xl shadow-md group-hover:scale-110 transition-transform">
                  {l.emoji}
                </div>
                <span className="text-lg font-heading font-black text-brand-navy group-hover:text-white transition-colors uppercase tracking-tight">{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
