'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

const ROUTES = [
  {
    name: 'Route 11 – Rutland / Killington Commuter',
    color: '#2d94e3',
    description: 'The primary commuter route linking Rutland city center to Killington Resort. Runs daily during ski season with enhanced frequency on weekends.',
    stops: [
      'Rutland Transit Hub',
      'Rutland Park & Ride',
      'Mendon Village',
      'Sherburne Pass (Pico)',
      'Killington Road / Rte 4',
      'Snowshed Base Lodge',
      'K-1 Base Lodge'
    ],
    schedule: 'Starts 7:00 AM, Hourly service',
  },
  {
    name: 'Route 21 – Killington Local Loop',
    color: '#D97706',
    description: 'Short-hop local loop connecting accommodations along Killington Road to the base lodges.',
    stops: [
      'Killington Grand Hotel',
      'Cascade Lodge',
      'Sunrise Village',
      'Snowshed Base',
      'Bear Mountain Base'
    ],
    schedule: 'Every 30 min during peak hours',
  }
]

export default function BusRoutesPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Bus Routes" 
        subtitle="Detailed route maps and stop information for the Killington area."
        image="/images/hero/killington-k1.jpg" 
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">
              Navigate the Mountain
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Green Mountain Transit provides reliable transportation throughout the region. Check the detailed stops below to plan your trip.
            </p>
          </div>

          <div className="space-y-20">
            {ROUTES.map((route) => (
              <div key={route.name} className="relative pl-12 border-l-4" style={{ borderColor: route.color }}>
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-brand-navy uppercase mb-4">{route.name}</h3>
                  <p className="text-gray-600 text-lg">{route.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Major Stops</h4>
                    <ul className="space-y-4">
                      {route.stops.map((stop, i) => (
                        <li key={i} className="flex items-center gap-4 text-brand-navy font-bold">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: route.color }} />
                          {stop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="p-8 bg-brand-navy rounded-3xl text-white">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4 text-center">Schedule Note</h4>
                      <p className="text-center text-xl font-medium mb-8">{route.schedule}</p>
                      <a 
                        href="/the-bus" 
                        className="block text-center bg-white/10 hover:bg-white/20 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-colors"
                      >
                        Full Timetable
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-gray-50 rounded-[3rem] border border-gray-200 text-center">
            <h3 className="text-2xl font-black text-brand-navy uppercase mb-6">Need a real-time update?</h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Download the Transit App or visit thebus.com for live GPS tracking of every bus in the system.
            </p>
            <a 
              href="https://www.thebus.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white font-black px-12 py-4 rounded-full uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Live Bus Tracker
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
