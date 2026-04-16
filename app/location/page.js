'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NEARBY_TOWNS = [
  { name: 'Woodstock, VT', distance: '20 mi', time: '25 min', desc: 'Quintessential New England village. Covered bridge, Billings Farm, and the Red Rooster restaurant.' },
  { name: 'Rutland, VT', distance: '18 mi', time: '22 min', desc: "Vermont's second-largest city. Airport (RUT), Amtrak station, Walmart, hospitals, and full city services." },
  { name: 'Quechee, VT', distance: '24 mi', time: '30 min', desc: 'Quechee Gorge, Simon Pearce glass studio, and the VINS Nature Center.' },
  { name: 'Middlebury, VT', distance: '38 mi', time: '50 min', desc: 'College town with great restaurants, Otter Creek Brewing, and the Addison County Fair.' },
  { name: 'Burlington, VT', distance: '72 mi', time: '1 hr 15 min', desc: 'BTV Airport. Church Street marketplace, Lake Champlain waterfront, and the largest city in Vermont.' },
  { name: 'White River Junction, VT', distance: '28 mi', time: '35 min', desc: 'Amtrak Vermonter stop. Connection point for visitors arriving by train from New York or Boston.' },
  { name: 'Manchester, VT', distance: '44 mi', time: '55 min', desc: 'Outlet shopping, Orvis flagship, American Museum of Fly Fishing, and Equinox Mountain.' },
  { name: 'Stowe, VT', distance: '65 mi', time: '1 hr 20 min', desc: 'Vermont\'s most iconic ski town. Mount Mansfield, the Stowe Recreation Path, and the Trapp Family Lodge.' },
]

const DRIVING_TIMES = [
  { from: 'Boston, MA', time: '3 hours', distance: '185 mi', highway: 'I-89 N to Exit 1' },
  { from: 'New York City, NY', time: '4.5 hours', distance: '275 mi', highway: 'I-91 N or I-89 N' },
  { from: 'Montreal, QC', time: '2.5 hours', distance: '155 mi', highway: 'I-89 S from Champlain Border' },
  { from: 'Hartford, CT', time: '2.5 hours', distance: '165 mi', highway: 'I-91 N then I-89 N' },
  { from: 'Albany, NY', time: '2 hours', distance: '120 mi', highway: 'I-87 N to I-89 N' },
  { from: 'Providence, RI', time: '3.5 hours', distance: '215 mi', highway: 'I-95 N to I-93 N to I-89 N' },
  { from: 'Burlington, VT (BTV Airport)', time: '1 hr 15 min', distance: '72 mi', highway: 'I-89 S to Exit 4' },
  { from: 'Manchester, NH', time: '3 hours', distance: '175 mi', highway: 'I-93 N to I-89 N' },
]

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Getting Here</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Killington, Vermont</h1>
          <p className="text-gray-400 text-lg">Killington Resort is located in Killington, Vermont — in the heart of the Green Mountains, just off Route 4.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5 text-sm">
            <div className="bg-gray-50 rounded-xl px-5 py-3 font-semibold text-gray-700">
              📍 4763 Killington Road, Killington, VT 05751
            </div>
            <a
              href="https://maps.google.com/?q=Killington+Resort+Vermont"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-0">
        <div className="w-full" style={{ height: '420px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23198.16!2d-72.8201!3d43.6045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e1f8a8b1da9a51%3A0x8a0a5a3c4d7e7c5a!2sKillington+Resort!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            title="Killington Resort Map"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Driving times */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Driving Times</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DRIVING_TIMES.map((d) => (
              <div key={d.from} className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-4">
                <div className="text-2xl">🚗</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{d.from}</p>
                  <p className="text-xs text-gray-400">{d.distance} · {d.highway}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-extrabold text-sm" style={{ color: '#00B4D8' }}>{d.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Nearest Airports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                code: 'RUT',
                name: 'Rutland–Southern Vermont Regional',
                dist: '18 mi',
                time: '22 min',
                airlines: 'Cape Air (Boston connections)',
                note: 'Closest airport. Small commuter terminal with Cape Air service to Boston Logan.',
              },
              {
                code: 'BTV',
                name: "Burlington International",
                dist: '72 mi',
                time: '1 hr 15 min',
                airlines: 'Delta, United, American, Southwest',
                note: "Vermont's main hub. Non-stop flights from NYC, Boston, Chicago, Philadelphia, DC, and Atlanta.",
              },
              {
                code: 'MHT',
                name: 'Manchester–Boston Regional',
                dist: '175 mi',
                time: '3 hrs',
                airlines: 'Southwest, Allegiant, American',
                note: 'Budget-friendly alternative. Southwest often cheaper than BTV from major markets.',
              },
            ].map((a) => (
              <div key={a.code} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-extrabold text-gray-900">{a.code}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#00B4D8' }}>{a.dist}</span>
                  <span className="text-xs text-gray-400">{a.time}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-1">{a.name}</p>
                <p className="text-xs text-gray-400 mb-3">{a.airlines}</p>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Towns Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEARBY_TOWNS.map((t) => (
              <div key={t.name} className="flex gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <span className="text-xs text-gray-400">{t.distance} · {t.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Train info */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Arriving by Train</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Amtrak Vermonter</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                The Amtrak Vermonter runs daily between New York Penn Station and St. Albans, VT — with a stop at White River Junction (28 miles from Killington). From White River Junction, connect to Green Mountain Transit Route 3 to Rutland, then Route 11 to Killington.
              </p>
              <a href="https://www.amtrak.com/vermonter-train" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                Amtrak Schedule →
              </a>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Ethan Allen Express</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                The Ethan Allen Express runs from New York Penn Station to Rutland — the closest Amtrak stop to Killington (18 miles). From Rutland, connect to Green Mountain Transit Route 11 directly to the resort base areas.
              </p>
              <a href="https://www.amtrak.com/ethan-allen-express-train" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                Ethan Allen Schedule →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
