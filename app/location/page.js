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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Getting Here</p>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight">Killington, <span className="text-brand-green">Vermont</span></h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Located in the heart of the Green Mountains, Killington is accessible by car, plane, and train from major East Coast hubs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 text-sm">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 font-bold text-brand-navy shadow-sm">
              📍 4763 Killington Road, Killington, VT 05751
            </div>
            <a
              href="https://maps.google.com/?q=Killington+Resort+Vermont"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-5 text-white bg-brand-navy font-black hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-xs"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-premium border-8 border-white">
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23198.16!2d-72.8201!3d43.6045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e1f8a8b1da9a51%3A0x8a0a5a3c4d7e7c5a!2sKillington+Resort!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              title="Killington Resort Map"
              className="w-full h-full border-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Driving times */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Driving <span className="text-brand-green">Times</span></h2>
            <p className="text-gray-400 text-xl font-medium">The journey to the Green Mountains is part of the experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DRIVING_TIMES.map((d) => (
              <div key={d.from} className="bg-white border border-gray-100 rounded-3xl p-8 flex items-center gap-6 hover:shadow-premium transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/5 flex items-center justify-center flex-shrink-0 text-brand-green text-2xl group-hover:scale-110 transition-transform">
                  🚗
                </div>
                <div className="flex-1">
                  <p className="font-heading font-black text-brand-navy text-lg">{d.from}</p>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest">{d.distance} · {d.highway}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-heading font-black text-brand-green text-xl">{d.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Nearest <span className="text-brand-green">Airports</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={a.code} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col shadow-premium hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-heading font-black text-brand-navy tracking-tighter">{a.code}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black px-4 py-1.5 rounded-full bg-brand-green text-white uppercase tracking-widest shadow-lg">{a.dist}</span>
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-2">{a.time}</span>
                  </div>
                </div>
                <p className="text-lg font-heading font-black text-brand-navy mb-2 leading-tight">{a.name}</p>
                <p className="text-xs font-black text-brand-green uppercase tracking-widest mb-6">{a.airlines}</p>
                <p className="text-gray-400 font-medium leading-relaxed flex-1">{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="py-24 px-6 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight uppercase">Towns <span className="text-brand-green">Nearby</span></h2>
            <p className="text-white/40 text-xl font-medium">Explore the surrounding communities of the Green Mountain region.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {NEARBY_TOWNS.map((t) => (
              <div key={t.name} className="flex gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-heading font-black text-white text-xl">{t.name}</p>
                    <span className="text-[10px] font-black text-brand-green uppercase tracking-widest">{t.distance} · {t.time}</span>
                  </div>
                  <p className="text-white/60 font-medium leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Train info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Arriving by <span className="text-brand-green">Train</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-green/10 rounded-3xl flex items-center justify-center text-brand-green text-3xl mb-8">🚄</div>
              <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">Amtrak Vermonter</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-1">
                The Amtrak Vermonter runs daily between New York Penn Station and St. Albans, VT — with a stop at White River Junction. Perfect for a scenic rail journey through the valley.
              </p>
              <a href="https://www.amtrak.com/vermonter-train" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-white font-black px-10 py-4 rounded-2xl hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-xs">
                Amtrak Schedule →
              </a>
            </div>
            <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue text-3xl mb-8">🚆</div>
              <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">Ethan Allen Express</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-1">
                The Ethan Allen Express runs from New York Penn Station directly to Rutland — the closest Amtrak stop to Killington. A convenient and fast link from the city.
              </p>
              <a href="https://www.amtrak.com/ethan-allen-express-train" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-white font-black px-10 py-4 rounded-2xl hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-xs">
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
