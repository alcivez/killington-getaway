'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SHUTTLE_SERVICES = [
  {
    name: 'Killington Commuter',
    tag: 'Daily Service',
    tagColor: '#00B4D8',
    description: 'Weekday commuter service running from downtown Rutland to Killington Resort base areas. Free to ride with a valid ski pass.',
    schedule: [
      { route: 'Rutland → Killington', times: ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM'] },
      { route: 'Killington → Rutland', times: ['3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'] },
    ],
    notes: 'Runs Monday–Friday during the ski season. Free with Killington ski pass. Limited parking at Rutland origin stop.',
    phone: '802-747-3200',
    website: 'https://www.thebus.com/services/killington-commuter',
  },
  {
    name: 'Wobbly Barn Shuttle',
    tag: 'Weekend Nights',
    tagColor: '#DC2626',
    description: "The legendary Wobbly Barn runs a loop shuttle between the resort base areas and Killington Road bars on Friday and Saturday nights. Free for guests — no reservation needed.",
    schedule: [
      { route: 'Base Lodge → Wobbly Barn Loop', times: ['9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM', '1:00 AM'] },
      { route: 'Wobbly Barn → Base Lodge Loop', times: '10:00 PM – 1:30 AM (continuous)' },
    ],
    notes: 'Friday & Saturday nights. Stops at Wobbly Barn, Pickle Barrel, The Foundry, and Back Behind Pub. Last shuttle at 1:30 AM.',
    phone: '802-422-6171',
    website: 'https://www.wobblybarn.com',
  },
  {
    name: 'Pickle Barrel Barrel Rider',
    tag: 'Weekend Nights',
    tagColor: '#D97706',
    description: 'Free shuttle service running to and from the Pickle Barrel nightclub on weekend evenings. Stops at major lodges and condos along the Killington Road corridor.',
    schedule: [
      { route: 'Killington Road Loop', times: ['9:30 PM', '10:30 PM', '11:30 PM', '12:30 AM'] },
    ],
    notes: 'Friday & Saturday only. Picks up at Sunrise Village, Birch Ridge, Cascades Lodge, and Killington Grand Resort Hotel.',
    phone: '802-422-3188',
    website: 'https://www.picklebarrelvt.com',
  },
  {
    name: 'Green Mountain Transit – Route 11',
    tag: 'Public Bus',
    tagColor: '#2d94e3',
    description: 'Public bus service operated by Green Mountain Transit connecting Rutland to Killington. Year-round service with seasonal enhancements during ski season.',
    schedule: [
      { route: 'Rutland Transit Hub → Killington Base', times: ['7:15 AM', '8:15 AM', '9:15 AM', '12:15 PM', '3:15 PM'] },
      { route: 'Killington Base → Rutland Transit Hub', times: ['8:30 AM', '9:30 AM', '1:30 PM', '4:30 PM', '5:30 PM'] },
    ],
    notes: 'Year-round. Reduced fare for seniors and students. Monthly passes available. Connection to Amtrak at Rutland.',
    phone: '802-773-3244',
    website: 'https://www.thebus.com',
  },
]

export default function MountainShuttlesPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1600&q=80"
          alt="Mountain shuttle bus"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-white/60">Get Around</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tight mb-6 uppercase">Mountain <span className="text-brand-green">Shuttles</span></h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">Leave the car behind. Shuttle and bus options connecting Killington to Rutland, the resort bases, and the best bars on the road.</p>
        </div>
      </section>

      {/* Shuttle cards */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {SHUTTLE_SERVICES.map((s) => (
            <div key={s.name} className="bg-white rounded-[3rem] overflow-hidden shadow-premium border border-gray-50 transition-all duration-500 hover:shadow-2xl group">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-10 pt-10 pb-8 border-b border-gray-50 bg-white group-hover:bg-gray-50/50 transition-colors">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
                      style={{ backgroundColor: s.tagColor }}
                    >
                      {s.tag}
                    </span>
                    <h2 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-tight">{s.name}</h2>
                  </div>
                  <p className="text-gray-400 font-medium leading-relaxed max-w-2xl">{s.description}</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="p-10">
                <h3 className="text-[10px] font-black text-gray-300 mb-8 uppercase tracking-[0.3em]">Route Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {s.schedule.map((leg, i) => (
                    <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100/50 shadow-sm hover:shadow-md transition-all">
                      <p className="text-brand-navy font-black text-sm uppercase tracking-tight mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-green" />
                        {leg.route}
                      </p>
                      {Array.isArray(leg.times) ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {leg.times.map((t) => (
                            <span key={t} className="text-[11px] font-black font-mono text-center px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-brand-navy/60 shadow-sm hover:border-brand-green hover:text-brand-green transition-all">
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs font-black text-brand-green uppercase tracking-widest bg-brand-green/5 px-4 py-2 rounded-lg">{leg.times}</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-50">
                  <p className="text-xs font-medium text-gray-400 italic leading-relaxed flex items-center gap-3">
                    <span className="text-brand-green font-black not-italic text-sm">ⓘ</span>
                    {s.notes}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-8 px-10 pb-10">
                <a href={`tel:${s.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] hover:text-brand-green transition-colors">
                  <span className="text-xl">📞</span> {s.phone}
                </a>
                <a href={s.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black text-brand-green uppercase tracking-[0.2em] hover:opacity-70 transition-all group">
                  Website Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Bus CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[4rem] py-16 px-10 border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Arriving by <span className="text-brand-green">Bus?</span></h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            The Green Mountain Transit system connects Killington to Rutland, White River Junction, and beyond. View full schedules, stops, and real-time tracking.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/the-bus"
              className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              View Bus Schedule
            </Link>
            <a
              href="https://www.thebus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              thebus.com →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
