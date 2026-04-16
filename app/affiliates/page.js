'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PROGRAMS = [
  {
    name: 'Backcountry.com',
    logo: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=75&fit=crop',
    commission: 'Up to 8%',
    category: 'Outdoor Gear',
    description: 'One of the largest online retailers for ski, snowboard, and outdoor gear. High average order values and a massive product catalog make this one of our best-performing affiliate partnerships.',
    url: 'https://www.backcountry.com',
  },
  {
    name: 'Stio',
    logo: 'https://killingtongetaway.com/wp-content/uploads/2023/09/stio-logo-1.png',
    commission: 'Up to 10%',
    category: 'Ski Apparel',
    description: 'Premium ski and outdoor apparel designed in Jackson, Wyoming. Stio is a brand our audience genuinely loves — high conversion rates and strong average order values.',
    url: 'https://www.stio.com',
  },
  {
    name: 'Helly Hansen',
    logo: 'https://killingtongetaway.com/wp-content/uploads/2023/09/helly-hansen.png',
    commission: 'Up to 7%',
    category: 'Ski Apparel',
    description: "Norway's most trusted ski and outdoor brand. Helly Hansen's reputation for quality and performance resonates strongly with the Killington audience.",
    url: 'https://www.hellyhansen.com',
  },
  {
    name: 'Smith Optics',
    logo: 'https://killingtongetaway.com/wp-content/uploads/2023/09/Smith-Optics-logo.png',
    commission: 'Up to 9%',
    category: 'Goggles & Helmets',
    description: "Industry-leading ski goggles and helmets. Smith's ChromaPop lens technology is the gold standard for on-mountain visibility, and the brand is extremely well-known among our readership.",
    url: 'https://www.smithoptics.com',
  },
]

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Partner With Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Affiliates</h1>
          <p className="text-gray-400 text-lg">Earn commissions by recommending the gear, services, and experiences that Killington visitors actually need.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">How Our Affiliate Program Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Reach out via our contact form and tell us about your platform — blog, social media, YouTube, or newsletter.' },
              { step: '02', title: 'Get Your Links', desc: 'Once approved, you receive unique tracking links for each of our affiliate partners to share with your audience.' },
              { step: '03', title: 'Earn Commissions', desc: 'Every qualifying purchase made through your links earns you a commission. Payouts are processed monthly.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-white text-lg mx-auto mb-4" style={{ backgroundColor: '#00B4D8' }}>
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">Our Current Partner Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white inline-block mt-1" style={{ backgroundColor: '#00B4D8' }}>
                      {p.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Commission</p>
                    <p className="text-lg font-extrabold" style={{ color: '#00B4D8' }}>{p.commission}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-gray-50 py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-600">Affiliate Disclosure:</strong> Killington Getaway participates in affiliate marketing programs. We may earn a commission when you purchase through links on this site at no additional cost to you. We only recommend products and services we genuinely use and believe in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Partner With Us?</h2>
          <p className="text-gray-400 mb-6">Whether you&apos;re a content creator, local blogger, or outdoor brand, we&apos;d love to work with you.</p>
          <a
            href="/contact-us"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
