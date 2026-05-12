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
        subtitle="Home of the legendary Dream Maker terrain park at Killington Resort."
        image="/images/hero/woodward-hero.png" 
      />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">
              Dream Maker: Where Legends Are Built
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Killington's signature terrain park, Dream Maker, is more than just a park — it's a freestyle masterpiece. Featuring massive jumps, creative rail lines, and perfectly manicured transitions, it's where the East Coast's best riders come to push their limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">Dream Maker Park</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The crown jewel of Woodward Killington. Large-scale features designed for advanced riders looking for maximum airtime and technical rail challenges.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-brand-green/30 transition-all">
              <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">Peace Park</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A collaborative terrain park designed with Danny Davis. This park focuses on flow, fun, and creative expression through unique transitions.
              </p>
              <div className="w-12 h-1 bg-brand-green rounded-full" />
            </div>
          </div>

          <div className="mt-20 p-12 bg-brand-navy rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-heading font-black uppercase mb-6 relative z-10">Experience the Beast</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Woodward access is included with your Killington lift ticket or season pass. Come experience the most progressive parks in the East.
            </p>
            <a 
              href="https://www.killington.com/the-mountain/terrain-parks/terrain-parks-overview/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white font-black px-10 py-4 rounded-full uppercase tracking-widest hover:scale-105 transition-transform shadow-xl relative z-10"
            >
              Discover Killington's Terrain Parks
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
