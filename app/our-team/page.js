'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const TEAM = [
  { name: 'Jonas', role: 'Founder & Ski Expert', img: '/images/team/jonas.png' },
  { name: 'Marc',  role: 'Local Guide', img: '/images/team/marc.png'  },
  { name: 'Jorge', role: 'Adventure Coordinator', img: '/images/team/jorge.png' },
  { name: 'Paul',  role: 'Content Strategist', img: '/images/team/paul.png'  },
  { name: 'John',  role: 'Logistics', img: '/images/team/john.png'  },
]

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Our Team" 
        subtitle="The dedicated locals behind Killington Getaway."
      />

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">The People Behind the Guide</h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-3xl mx-auto">
              At Killington Getaway, we take immense pride in our roots as Vermonters — a place where our love for skiing and the thrill of adventure runs deep in our veins. We&apos;re not just enthusiasts; we&apos;re dedicated adventurers who cherish every moment spent in this beautiful state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/5] bg-brand-navy">
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent mix-blend-multiply" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tight drop-shadow-lg">{member.name}</h3>
                  <p className="text-brand-green font-bold text-sm uppercase tracking-widest mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy border-t border-white/10 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight uppercase mb-8">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-medium">
            Our mission is to share the magic of Vermont, encouraging and assisting fellow travelers to savor its boundless wonders. With a profound appreciation for our state&apos;s natural beauty and insatiable wanderlust, we&apos;re on a journey to help you discover Vermont at its absolute best. Whether you&apos;re a seasoned skier or a novice, an outdoor enthusiast, or a leisurely explorer — we&apos;re here to guide and inspire your travels, making every experience in this picturesque state truly unforgettable.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
