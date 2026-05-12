'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

const BUS_ROUTES = [
  {
    name: "City Fixed",
    desc: "All Rutland City fixed routes",
    cta: "View All City Fixed Routes",
    link: "https://thebus.com/routes/city-fixed-north-route/",
    image: "/images/routes/city-fixed.png"
  },
  {
    name: "Proctor Route",
    desc: "MVRTC is the central transfer point",
    cta: "View Proctor Route",
    link: "https://thebus.com/routes/proctor-route/",
    image: "/images/routes/proctor.png"
  },
  {
    name: "Middlebury Route",
    desc: "Middlebury – Rutland connector",
    cta: "View Middlebury Route",
    link: "https://thebus.com/routes/middlebury-route/",
    image: "/images/routes/middlebury.png"
  },
  {
    name: "Fair Haven",
    desc: "Rutland Fair Haven/Poultney",
    cta: "View Fair Haven Route",
    link: "https://thebus.com/routes/fair-haven-route/",
    image: "/images/routes/fair-haven.png"
  },
  {
    name: "Rutland Killington Commuter",
    desc: "Rutland, Mendon and Killington",
    cta: "View Rutland Killington Route",
    link: "https://thebus.com/routes/rutland-killington-commuter/",
    image: "/images/routes/rutland-killington-commuter.png"
  },
  {
    name: "Manchester",
    desc: "Rutland to Manchester",
    cta: "View Manchester Route",
    link: "https://thebus.com/routes/manchester-route/",
    image: "/images/routes/manchester.png"
  },
  {
    name: "Ludlow",
    desc: "Rutland to Bellows Falls Commuter",
    cta: "View Ludlow Route",
    link: "https://thebus.com/routes/ludlow-route/",
    image: "/images/routes/ludlow.png"
  },
  {
    name: "Special",
    desc: "Paratransit Services / Medicaid / O&D Program",
    cta: "View Paratransit Information",
    link: "https://thebus.com/routes/paratransit/",
    image: "/images/routes/special.png"
  }
]

export default function BusRoutesPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Bus Routes" 
        subtitle="Find the route that best suits your needs."
        image="/images/hero/the-bus-routes.jpg" 
      />

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BUS_ROUTES.map((route) => (
              <div key={route.name} className="bg-white rounded-[2rem] overflow-hidden shadow-premium border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-black text-brand-navy uppercase tracking-tight mb-3">{route.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{route.desc}</p>
                  </div>
                  <a 
                    href={route.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-black uppercase tracking-widest text-[10px] hover:gap-3 transition-all"
                  >
                    {route.cta} <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
