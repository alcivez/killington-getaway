'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WEBCAMS = [
  {
    name: 'Killington Peak – K1 Summit',
    description: 'Live view from the top of K1 Gondola at 4,241 ft. Best for checking summit conditions, visibility, and wind.',
    embedUrl: 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=12&overlay=webcams&product=ecmwf&level=surface&lat=43.6045&lon=-72.8201&detailLat=43.6045&detailLon=-72.8201&detail=true&pressure=true&message=true',
    credit: 'Windy.com',
    creditUrl: 'https://www.windy.com',
    tag: 'Summit',
  },
  {
    name: 'Snowshed Base Area',
    description: "View of the Snowshed base lodge and beginner terrain. Great for checking lift lines and snow conditions at the valley.",
    embedUrl: 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=13&overlay=webcams&product=ecmwf&level=surface&lat=43.6200&lon=-72.8300&detailLat=43.6200&detailLon=-72.8300&detail=true&pressure=true&message=true',
    credit: 'Windy.com',
    creditUrl: 'https://www.windy.com',
    tag: 'Base',
  },
  {
    name: 'Killington Road Corridor',
    description: 'Live mountain weather radar and wind for the Killington Road area. Useful for planning your drive up from Route 4.',
    embedUrl: 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=43.6100&lon=-72.8100&detailLat=43.6100&detailLon=-72.8100&detail=true&pressure=true&message=true',
    credit: 'Windy.com',
    creditUrl: 'https://www.windy.com',
    tag: 'Road',
  },
  {
    name: 'Bear Mountain View',
    description: 'Covers the Bear Mountain terrain including Outer Limits and the mogul fields. Advanced terrain check.',
    embedUrl: 'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=13&overlay=webcams&product=ecmwf&level=surface&lat=43.6050&lon=-72.8150&detailLat=43.6050&detailLon=-72.8150&detail=true&pressure=true&message=true',
    credit: 'Windy.com',
    creditUrl: 'https://www.windy.com',
    tag: 'Advanced',
  },
]

const TAG_COLORS = {
  'Summit': '#00B4D8',
  'Base': '#059669',
  'Road': '#D97706',
  'Advanced': '#111827',
}

export default function WebcamsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Live Views</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Killington Webcams</h1>
          <p className="text-gray-400 text-lg">Check live mountain conditions before you head up. Real-time views from the summit, base, and trail corridors.</p>
        </div>
      </section>

      {/* Webcam grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {WEBCAMS.map((cam) => (
            <div key={cam.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: TAG_COLORS[cam.tag] || '#00B4D8' }}
                  >
                    {cam.tag}
                  </span>
                  <h2 className="text-lg font-extrabold text-gray-900">{cam.name}</h2>
                </div>
                <a
                  href={cam.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:opacity-70 transition-opacity"
                >
                  Powered by {cam.credit}
                </a>
              </div>
              <div className="px-6 py-3">
                <p className="text-sm text-gray-500">{cam.description}</p>
              </div>
              <div className="w-full" style={{ height: '420px' }}>
                <iframe
                  src={cam.embedUrl}
                  title={cam.name}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional resources */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">More Live Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Official Killington Cams',
                desc: "Killington Resort's own webcam network with views across all six peaks and base lodges.",
                href: 'https://www.killington.com/mountain/snow-and-weather/webcams',
                label: 'killington.com →',
              },
              {
                title: 'Ski Conditions',
                desc: 'Full snow report, open trail count, and overnight snowfall totals updated every morning.',
                href: '/ski-conditions',
                label: 'View Conditions →',
              },
              {
                title: 'Mountain Weather',
                desc: 'Hourly summit and valley forecast with temperature, wind, and precipitation probability.',
                href: 'https://www.mountain-forecast.com/peaks/Killington-Peak/forecasts/1293',
                label: 'View Forecast →',
              },
            ].map((r) => (
              <a
                key={r.title}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-[#00B4D8] transition-all duration-200 group flex flex-col"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#00B4D8] transition-colors">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{r.desc}</p>
                <span className="text-sm font-semibold" style={{ color: '#00B4D8' }}>{r.label}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Webcam embeds powered by{' '}
            <a href="https://www.windy.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70" style={{ color: '#00B4D8' }}>
              Windy.com
            </a>
            . All weather data and imagery are property of their respective providers.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
