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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Partner With Us</p>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase">Affiliate <span className="text-brand-green">Programs</span></h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Earn commissions by recommending the gear, services, and experiences that Killington visitors actually need.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">How It <span className="text-brand-green">Works</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Apply', desc: 'Reach out via our contact form and tell us about your platform — blog, social media, or newsletter.' },
              { step: '02', title: 'Get Your Links', desc: 'Once approved, you receive unique tracking links for each of our affiliate partners to share with your audience.' },
              { step: '03', title: 'Earn Commissions', desc: 'Every qualifying purchase made through your links earns you a commission. Payouts are processed monthly.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-[3rem] p-10 shadow-premium border border-gray-100 relative group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-green text-white flex items-center justify-center font-black text-xl mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-heading font-black text-brand-navy text-2xl uppercase tracking-tight mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Current <span className="text-brand-green">Partners</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-gray-50/30 rounded-[3rem] p-10 border border-gray-100 hover:bg-white hover:shadow-premium transition-all duration-500 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-brand-navy text-2xl uppercase tracking-tight mb-2">{p.name}</h3>
                      <span className="text-[10px] font-black px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green uppercase tracking-widest shadow-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-4 rounded-[2rem] border border-gray-50 shadow-sm text-center min-w-[120px]">
                    <p className="text-[9px] text-gray-300 uppercase tracking-widest font-black mb-1">Commission</p>
                    <p className="text-2xl font-heading font-black text-brand-green leading-none">{p.commission}</p>
                  </div>
                </div>
                <p className="text-gray-400 font-medium leading-relaxed text-lg">{p.description}</p>
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                   <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] hover:text-brand-green flex items-center gap-2 group/btn">
                    Visit Website
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-12 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/40 leading-relaxed">Affiliate Disclosure</p>
          </div>
          <p className="text-xs font-medium text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Killington Getaway participates in affiliate marketing programs. We may earn a commission when you purchase through links on this site at no additional cost to you. We only recommend products and services we genuinely use and believe in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-brand-navy rounded-[4rem] py-16 px-10 border border-brand-navy shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight uppercase relative z-10">Ready to <span className="text-brand-green">Partner?</span></h2>
          <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            Whether you&apos;re a content creator, local blogger, or outdoor brand, we&apos;d love to explore ways to work together.
          </p>
          <div className="relative z-10 flex justify-center">
            <a
              href="/contact-us"
              className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
