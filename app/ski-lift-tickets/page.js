'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function LiftTicketsPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Lift Tickets & Passes" 
        subtitle="Secure your access to the Beast of the East."
        image="/images/hero/killington-mountains.png" 
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">
              Access the Beast
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              From single-day tickets to season-long passes, find the best way to experience everything Killington has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4 text-center">1-Day Lift Tickets</h3>
              <p className="text-gray-400 text-center mb-8">Purchase in advance online to save up to 25% off the window rate.</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-bold text-brand-navy">Adult (19-64)</span>
                  <span className="font-black text-brand-green text-xl">From $129</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-bold text-brand-navy">Senior (65-79)</span>
                  <span className="font-black text-brand-green text-xl">From $110</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-bold text-brand-navy">Youth (7-18)</span>
                  <span className="font-black text-brand-green text-xl">From $99</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-black uppercase mb-4 text-center text-brand-green">IKON Pass</h3>
                <p className="text-gray-300 text-center mb-8 leading-relaxed">
                  Killington is a proud partner of the Ikon Pass. Get unlimited access or 5-7 days depending on your pass type.
                </p>
              </div>
              <a 
                href="https://www.ikonpass.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-brand-green text-white text-center font-black py-4 rounded-full uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Buy Ikon Pass
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-200">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-black text-brand-navy uppercase mb-6">K-1 Express Gondola</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Not a skier? You can still reach the summit of Killington Peak via the K-1 Express Gondola for breathtaking 360-degree views of the Green Mountains.
              </p>
              <a 
                href="https://www.killington.com/plan-your-trip/tickets-passes/lift-tickets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-navy text-white font-black px-12 py-4 rounded-full uppercase tracking-widest hover:bg-brand-green transition-colors shadow-xl"
              >
                Official Ticket Office
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
