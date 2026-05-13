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
        title={<><span className="text-brand-blue">Ski</span> Conditions</>} 
        subtitle={<>Real-time weather, snowfall, and <span className="text-brand-blue">conditions for Killington Resort</span> — before you pack the car.</>}
        image="/images/hero/ski-conditions-hero.png"
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

      {/* Mountain Stats Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Vital Stats */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-black text-brand-navy tracking-tight uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-green rounded-full" />
                Mountain Facts
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Summit Elevation', value: '4,241 ft', icon: '🏔️' },
                  { label: 'Base Elevation', value: '1,165 ft', icon: '⛺' },
                  { label: 'Vertical Drop', value: '3,050 ft', icon: '📉' },
                  { label: 'Skiable Acreage', value: '1,509 ac', icon: '🗺️' },
                  { label: 'Number of Trails', value: '155', icon: '⛷️' },
                  { label: 'Snowmaking', value: '600 ac', icon: '❄️' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 group hover:border-brand-green/30 transition-colors">
                    <span className="text-2xl mb-3 block">{stat.icon}</span>
                    <p className="text-2xl font-black text-brand-navy leading-none mb-1">{stat.value}</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Difficulty & Lifts */}
            <div className="space-y-8">
              {/* Difficulty Breakdown */}
              <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-heading font-black uppercase tracking-tight mb-6">Trail Difficulty</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Beginner', val: '28%', color: 'bg-green-500' },
                    { label: 'Intermediate', val: '43%', color: 'bg-blue-500' },
                    { label: 'Expert', val: '29%', color: 'bg-black border border-white/20' },
                  ].map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-2">
                        <span>{d.label}</span>
                        <span>{d.val}</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${d.color}`} style={{ width: d.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lift Stats */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-heading font-black text-brand-navy uppercase tracking-tight mb-6">Lift System</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Gondolas', val: '2' },
                    { label: 'HS Quads', val: '9' },
                    { label: 'Triples', val: '3' },
                    { label: 'Surface', val: '4' },
                  ].map((l) => (
                    <div key={l.label} className="flex flex-col">
                      <span className="text-xl font-black text-brand-navy">{l.val}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Windy map */}
      <section className="py-12 px-6 bg-gray-50">
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
                href: 'https://www.killington.com/the-mountain/conditions-weather/current-conditions-weather/',
                label: 'View Report →',
                color: '#2d94e3',
              },
              {
                title: 'Trail Map',
                desc: 'Interactive trail map with real-time open/closed status across all six Killington peaks.',
                href: 'https://www.killington.com/the-mountain/trail-area-maps/killington-app/',
                label: 'Open Trail Map →',
                color: '#2d94e3',
              },
              {
                title: 'Webcams',
                desc: 'Live camera feeds from the summit, base lodges, and key trails across the mountain.',
                href: 'https://www.killington.com/the-mountain/conditions-weather/webcam/',
                label: 'View Webcams →',
                color: '#2d94e3',
              },
              {
                title: 'Lift Status',
                desc: 'Real-time lift open/closed status and wait times updated throughout the day.',
                href: 'https://www.killington.com/the-mountain/conditions-weather/lifts-trails-report/',
                label: 'Check Lifts →',
                color: '#2d94e3',
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
