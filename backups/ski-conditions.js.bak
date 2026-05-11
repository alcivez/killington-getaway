'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import WeatherWidget from '../components/WeatherWidget'

const SNOW_STATS = [
  { label: 'Base Depth', value: 'See Report', sub: 'Updated daily' },
  { label: 'New Overnight', value: 'See Report', sub: 'As of 6am' },
  { label: 'Open Trails', value: '140 max', sub: 'Varies by day' },
  { label: 'Lifts Running', value: '22 max', sub: 'Varies by day' },
  { label: 'Surface', value: 'Packed Powder', sub: 'Typical mid-season' },
  { label: 'Season Opens', value: 'Nov', sub: 'Snowmaking begins Oct' },
]

export default function SkiConditionsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <Hero 
        title="Ski Conditions" 
        subtitle="Real-time weather, snowfall, and mountain conditions for Killington Resort — before you pack the car."
      />

      {/* Seasonal Disclaimer */}
      <section className="bg-amber-50 border-b border-amber-100 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <span className="text-2xl mt-1">☀️</span>
          <div>
            <h3 className="font-heading font-black text-amber-900 text-lg uppercase tracking-wider mb-1">Summer & Autumn Operations Notice</h3>
            <p className="text-amber-800 font-medium">
              The mountain transforms during the warmer months! Ski slopes and most winter lifts are currently closed. However, scenic gondola rides, the Killington Bike Park, and hiking trails remain open with specific seasonal hours. Stay tuned for the exciting 2026-2027 Winter Season!
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {SNOW_STATS.map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-2xl py-5 px-3 border border-gray-100">
              <p className="text-lg font-extrabold text-gray-900">{s.value}</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{s.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Windy map */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Live Weather Radar</h2>
              <p className="text-sm text-gray-400 mt-1">Precipitation, wind, and snow forecast centered on Killington Peak</p>
            </div>
            <a
              href="https://www.windy.com/?43.604,-72.820,12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:opacity-70 transition-opacity"
            >
              Powered by Windy.com ↗
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '500px' }}>
            <iframe
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=12&overlay=snowcover&product=ecmwf&level=surface&lat=43.6045&lon=-72.8201&detailLat=43.6045&detailLon=-72.8201&detail=true&pressure=true&message=true"
              title="Killington Live Weather"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Wind & temperature forecast */}
      <section className="py-6 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Wind & Temperature</h2>
              <p className="text-sm text-gray-400 mt-1">Summit wind speed and feel-like temperature for the next 5 days</p>
            </div>
            <a
              href="https://www.windy.com/?43.604,-72.820,12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:opacity-70 transition-opacity"
            >
              Powered by Windy.com ↗
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '450px' }}>
            <iframe
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=12&overlay=wind&product=ecmwf&level=surface&lat=43.6045&lon=-72.8201&detailLat=43.6045&detailLon=-72.8201&detail=true&pressure=true&message=true"
              title="Killington Wind Forecast"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Weather widget */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Mountain Forecast</h2>
          <WeatherWidget />
        </div>
      </section>

      {/* Official reports + resources */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Official Reports & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Official Snow Report',
                desc: "Killington's own daily report with open trail counts, grooming status, and overnight snow totals.",
                href: 'https://www.killington.com/mountain/snow-and-weather/snow-report',
                label: 'View Report →',
                color: '#059669',
              },
              {
                title: 'Trail Map',
                desc: 'Interactive trail map with real-time open/closed status across all six Killington peaks.',
                href: 'https://www.killington.com/mountain/trail-map',
                label: 'Open Trail Map →',
                color: '#059669',
              },
              {
                title: 'Webcams',
                desc: 'Live camera feeds from the summit, base lodges, and key trails across the mountain.',
                href: '/webcams',
                label: 'View Webcams →',
                color: '#0077A8',
              },
              {
                title: 'Lift Status',
                desc: 'Real-time lift open/closed status and wait times updated throughout the day.',
                href: 'https://www.killington.com/mountain/snow-and-weather/lift-status',
                label: 'Check Lifts →',
                color: '#D97706',
              },
              {
                title: 'NOAA Mountain Forecast',
                desc: 'National Weather Service zone forecast for the Green Mountains — summit and valley readings.',
                href: 'https://forecast.weather.gov/MapClick.php?CityName=Killington&state=VT&site=BTV&textField1=43.6045&textField2=-72.8201',
                label: 'NOAA Forecast →',
                color: '#7C3AED',
              },
              {
                title: 'OpenSnow Vermont',
                desc: 'Expert snow forecasting for Vermont ski areas with day-by-day breakdown.',
                href: 'https://opensnow.com/state/VT',
                label: 'OpenSnow →',
                color: '#374151',
              },
            ].map((r) => (
              <a
                key={r.title}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 group flex flex-col"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:opacity-80 transition-opacity">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{r.desc}</p>
                <span className="text-sm font-semibold" style={{ color: r.color }}>{r.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
