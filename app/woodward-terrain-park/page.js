'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function WoodwardPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Woodward Mountain Park" 
        subtitle="The ultimate playground for freestyle progression at Killington Resort."
        image="/images/blog/mountain-bike-thrill.webp" 
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">
              Experience Woodward
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Woodward Mountain Park at Killington is a world-class network of terrain parks designed for every ability level, from your first slide to pro-level airs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">Peace Park</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A collaborative terrain park designed with Danny Davis. This park focuses on flow, fun, and creative expression through unique transitions.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">Red's Backyard</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Inspired by Red Gerard's backyard rope tow. A hike-to jib park that is open to all for free, perfect for dialing in your rail game.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">Progression Parks</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Small to medium-sized features designed specifically to help you build confidence before taking it to the big lines.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">The Stash</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A natural terrain park featuring wooden obstacles, log jibs, and hidden paths through the woods of Bear Mountain.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>
          </div>

          <div className="mt-20 p-12 bg-brand-navy rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-heading font-black uppercase mb-6 relative z-10">Ready to drop in?</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Woodward access is included with your Killington lift ticket or season pass. Come experience the best parks in the East.
            </p>
            <a 
              href="https://www.killington.com/woodward" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white font-black px-10 py-4 rounded-full uppercase tracking-widest hover:scale-105 transition-transform shadow-xl relative z-10"
            >
              Learn More at Killington.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
