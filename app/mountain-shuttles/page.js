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
    tagColor: '#059669',
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
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1600&q=80"
          alt="Mountain shuttle bus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>Get Around</p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Mountain Shuttles</h1>
          <p className="text-gray-200 text-base max-w-2xl">Leave the car behind. Shuttle and bus options connecting Killington to Rutland, the resort bases, and the best bars on the road.</p>
        </div>
      </section>

      {/* Shuttle cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {SHUTTLE_SERVICES.map((s) => (
            <div key={s.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-white text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: s.tagColor }}
                    >
                      {s.tag}
                    </span>
                    <h2 className="text-xl font-extrabold text-gray-900">{s.name}</h2>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 max-w-2xl">{s.description}</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="px-6 py-5">
                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Schedule</h3>
                <div className="flex flex-col gap-4">
                  {s.schedule.map((leg, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">{leg.route}</p>
                      {Array.isArray(leg.times) ? (
                        <div className="flex flex-wrap gap-2">
                          {leg.times.map((t) => (
                            <span key={t} className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700">
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs font-semibold text-gray-600">{leg.times}</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4 italic leading-relaxed">{s.notes}</p>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-6 px-6 pb-6">
                <a href={`tel:${s.phone.replace(/-/g, '')}`} className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                  📞 {s.phone}
                </a>
                <a href={s.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                  🌐 Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Bus CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Arriving by Bus?</h2>
          <p className="text-gray-400 mb-6">
            The Green Mountain Transit system connects Killington to Rutland, White River Junction, and beyond. View full schedules, stops, and real-time tracking.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/the-bus"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              View Bus Schedule
            </Link>
            <a
              href="https://www.thebus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
              style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
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
