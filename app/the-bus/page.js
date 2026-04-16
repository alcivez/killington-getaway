'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ROUTES = [
  {
    name: 'Route 11 – Rutland / Killington Commuter',
    color: '#00B4D8',
    description: 'The primary commuter route linking Rutland city center to Killington Resort. Runs daily during ski season with enhanced frequency on weekends.',
    stops: [
      { stop: 'Rutland Transit Hub (Merchant\'s Row)', time: '—' },
      { stop: 'Rutland Park & Ride (Rte 4)', time: '+5 min' },
      { stop: 'Mendon Village', time: '+12 min' },
      { stop: 'Sherburne Pass (Pico Mountain)', time: '+22 min' },
      { stop: 'Killington Road Intersection (Rte 4)', time: '+28 min' },
      { stop: 'Killington Road Mid-Mountain', time: '+35 min' },
      { stop: 'Snowshed Base Lodge', time: '+42 min' },
      { stop: 'K-1 Base Lodge', time: '+48 min' },
    ],
    departures: {
      northbound: ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '2:00 PM'],
      southbound: ['9:30 AM', '11:30 AM', '1:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'],
    },
    frequency: 'Every 60 min peak hours; every 2 hrs off-peak',
    fare: 'Free with Killington pass. $2 without. Monthly passes $42.',
    season: 'November – April (daily). May – October (weekdays only).',
  },
  {
    name: 'Route 3 – Rutland / White River Junction',
    color: '#059669',
    description: 'Connects Rutland to White River Junction with stops in Woodstock, Quechee, and West Hartford. Connects to Amtrak Vermonter service.',
    stops: [
      { stop: 'Rutland Transit Hub', time: '—' },
      { stop: 'Castleton', time: '+22 min' },
      { stop: 'Woodstock Village Green', time: '+50 min' },
      { stop: 'Quechee Village', time: '+60 min' },
      { stop: 'White River Junction Amtrak Station', time: '+80 min' },
    ],
    departures: {
      northbound: ['7:15 AM', '10:15 AM', '1:15 PM', '4:15 PM'],
      southbound: ['8:45 AM', '11:45 AM', '2:45 PM', '5:45 PM'],
    },
    frequency: 'Every ~3 hours',
    fare: '$2 per trip. Free transfers within 90 minutes.',
    season: 'Year-round.',
  },
  {
    name: 'Route 21 – Killington Local Loop',
    color: '#D97706',
    description: 'Short-hop local loop connecting accommodations along Killington Road to the base lodges and town center. Popular with guests staying in condos off the main road.',
    stops: [
      { stop: 'Killington Grand Resort Hotel', time: '—' },
      { stop: 'Cascade Lodge', time: '+5 min' },
      { stop: 'Sunrise Village', time: '+8 min' },
      { stop: 'Birch Ridge Inn', time: '+12 min' },
      { stop: 'Killington Road / Rte 4 Intersection', time: '+18 min' },
      { stop: 'Snowshed Base', time: '+24 min' },
      { stop: 'Bear Mountain Base', time: '+30 min' },
    ],
    departures: {
      northbound: ['7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '3:30 PM', '4:00 PM', '4:30 PM'],
      southbound: ['8:45 AM', '9:15 AM', '9:45 AM', '10:15 AM', '3:45 PM', '4:15 PM', '4:45 PM', '5:15 PM'],
    },
    frequency: 'Every 30 min during morning rush and afternoon return',
    fare: 'Free during ski season.',
    season: 'December – April only.',
  },
]

export default function TheBusPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Public Transit</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">The Bus</h1>
          <p className="text-gray-400 text-lg">Green Mountain Transit routes connecting Killington to Rutland, Woodstock, and the wider Vermont public transit network.</p>
          <a
            href="https://www.thebus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Real-Time Tracker at thebus.com →
          </a>
        </div>
      </section>

      {/* Route cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {ROUTES.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {/* Route header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100" style={{ borderLeftWidth: '4px', borderLeftColor: r.color, borderLeftStyle: 'solid' }}>
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">{r.name}</h2>
                <p className="text-sm text-gray-500">{r.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Stops */}
                <div className="px-6 py-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Stops</h3>
                  <div className="flex flex-col gap-2">
                    {r.stops.map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: r.color, backgroundColor: i === 0 || i === r.stops.length - 1 ? r.color : 'white' }} />
                          {i < r.stops.length - 1 && <div className="w-0.5 h-5 mt-0.5" style={{ backgroundColor: '#e5e7eb' }} />}
                        </div>
                        <div className="flex items-center justify-between flex-1 pb-2">
                          <span className="text-sm text-gray-700">{s.stop}</span>
                          <span className="text-xs font-mono text-gray-400">{s.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="px-6 py-5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Departures from Origin</h3>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-600 mb-2">↑ Toward Resort</p>
                    <div className="flex flex-wrap gap-2">
                      {r.departures.northbound.map((t) => (
                        <span key={t} className="text-xs font-mono font-semibold px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-600 mb-2">↓ Return to Rutland</p>
                    <div className="flex flex-wrap gap-2">
                      {r.departures.southbound.map((t) => (
                        <span key={t} className="text-xs font-mono font-semibold px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-gray-500 border-t border-gray-100 pt-4 mt-2">
                    <p><span className="font-semibold text-gray-700">Frequency:</span> {r.frequency}</p>
                    <p><span className="font-semibold text-gray-700">Fare:</span> {r.fare}</p>
                    <p><span className="font-semibold text-gray-700">Season:</span> {r.season}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info panels */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Amtrak Connection',
              body: 'The Amtrak Vermonter runs daily between New York Penn Station and St. Albans, VT with a stop at White River Junction. Route 3 connects White River Junction to Rutland (Killington gateway).',
              link: 'https://www.amtrak.com/vermonter-train',
              label: 'Amtrak Schedule →',
            },
            {
              title: 'Park & Ride Lots',
              body: "Free Park & Ride facilities at the Rutland Transit Hub (Merchant's Row) and the Rte 4 Rutland lot. Leave your car and ride in — especially useful on peak powder days when parking at the resort fills fast.",
              link: 'https://www.thebus.com/park-and-ride',
              label: 'Park & Ride Info →',
            },
            {
              title: 'Accessibility',
              body: 'All Green Mountain Transit buses are ADA accessible with wheelchair ramps, kneeling capability, and audio/visual stop announcements. Service animals welcome. Contact dispatch for assistance.',
              link: 'https://www.thebus.com/accessibility',
              label: 'Accessibility Info →',
            },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{c.body}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                {c.label}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400 mb-3">For real-time tracking, alerts, and full system maps</p>
          <a
            href="https://www.thebus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            style={{ backgroundColor: '#00B4D8' }}
          >
            thebus.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
