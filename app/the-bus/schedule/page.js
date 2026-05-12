'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

export default function BusSchedulePage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Bus Schedule" 
        subtitle="Daily departure times and seasonal operating hours."
        image="/images/hero/killington-k1.jpg" 
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">
              Plan Your Trip
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Buses run daily during the winter season. Please arrive at your stop 5 minutes early.
            </p>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 mb-16">
            <h3 className="text-2xl font-black text-brand-navy uppercase mb-8 text-center">Winter Operating Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h4 className="font-bold text-brand-green uppercase tracking-widest text-xs mb-4">Weekdays</h4>
                <p className="text-2xl font-black text-brand-navy">7:00 AM – 6:00 PM</p>
                <p className="text-gray-400 mt-2">Buses every 60 minutes</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h4 className="font-bold text-brand-green uppercase tracking-widest text-xs mb-4">Weekends & Holidays</h4>
                <p className="text-2xl font-black text-brand-navy">7:00 AM – 11:00 PM</p>
                <p className="text-gray-400 mt-2">Enhanced frequency until late</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              For detailed, up-to-the-minute timetables for each specific stop, please refer to the official Green Mountain Transit system map.
            </p>
            <a 
              href="https://www.thebus.com/schedules" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-navy text-white font-black px-12 py-5 rounded-full uppercase tracking-widest hover:bg-brand-green transition-all shadow-xl"
            >
              Download PDF Schedule
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
