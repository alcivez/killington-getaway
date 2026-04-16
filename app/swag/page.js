'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SWAG_ITEMS = [
  {
    name: 'Killington Getaway Heavyweight Tee',
    price: '$38',
    tag: 'New Drop',
    tagColor: '#00B4D8',
    color: 'Midnight / Alpine White',
    desc: '380gsm cotton, boxy fit. Screen-printed chest logo in KG brand blue. The kind of shirt that gets better every wash.',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
  },
  {
    name: 'Beast of the East Crewneck',
    price: '$72',
    tag: 'Bestseller',
    tagColor: '#DC2626',
    color: 'Charcoal / Storm',
    desc: 'French terry 60/40 blend. Embroidered KG logo at chest. "Beast of the East" printed across the back. The one everyone asks about on the mountain.',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
  },
  {
    name: 'Summit 5-Panel Hat',
    price: '$42',
    tag: 'Spring 26',
    tagColor: '#059669',
    color: 'Navy / White',
    desc: 'Structured 5-panel with curved brim. Embroidered KG mark on front, "Killington, VT" on side tape. Adjustable closure.',
    img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80',
  },
  {
    name: 'Après Everything Hoodie',
    price: '$89',
    tag: 'Limited',
    tagColor: '#7C3AED',
    color: 'Powder Blue / Off-White',
    desc: 'The perfect post-ski layer. Heavy 12oz fleece, kangaroo pocket, dropped hem. Screened graphics front and back. Limited colorway — first batch only.',
    img: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=600&q=80',
  },
  {
    name: 'Mountain Crew Socks (3-Pack)',
    price: '$28',
    tag: 'Essential',
    tagColor: '#D97706',
    color: 'Blue / Cream / Slate',
    desc: 'Mid-calf Merino wool blend. Cushioned sole, reinforced heel. Killington elevation (4,241 ft) knit into the cuff. Three colorways per pack.',
    img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80',
  },
  {
    name: 'KG Pom Beanie',
    price: '$34',
    tag: 'Winter 26',
    tagColor: '#0077A8',
    color: 'Powder Blue / Natural',
    desc: 'Ribbed acrylic knit with real wool pom. Embroidered KG logo. One size fits all — stays on through Outer Limits laps.',
    img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=600&q=80',
  },
  {
    name: 'Gear Duffel – 40L',
    price: '$115',
    tag: 'New',
    tagColor: '#374151',
    color: 'Graphite',
    desc: '40-liter cordura nylon duffel. Vented boot compartment, fleece-lined goggle pocket, and KG patch on the face. Fits a full ski kit.',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
  },
  {
    name: 'Sticker Pack – Vol. 3',
    price: '$14',
    tag: 'Fan Favorite',
    tagColor: '#EA580C',
    color: 'Die-cut vinyl',
    desc: '8 premium die-cut vinyl stickers. Beast of the East, Killington elevation, KG shield, and trail map illustrations. Waterproof, UV-resistant.',
    img: 'https://images.unsplash.com/photo-1583542912248-6b64c2b83494?w=600&q=80',
  },
]

export default function SwagPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Killington Getaway</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">The Drop</h1>
          <p className="text-gray-400 text-lg">Seasonal gear and apparel from Killington Getaway. Built for the mountain. Worn everywhere else too.</p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SWAG_ITEMS.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: item.tagColor }}>
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-bold text-gray-900 leading-tight flex-1 pr-2">{item.name}</h3>
                  <span className="text-base font-extrabold flex-shrink-0" style={{ color: '#00B4D8' }}>{item.price}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{item.color}</p>
                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">{item.desc}</p>
                <button
                  className="w-full text-center text-white text-xs font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity cursor-not-allowed opacity-70"
                  style={{ backgroundColor: '#00B4D8' }}
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notify me */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Be First in Line</h2>
          <p className="text-gray-400 mb-6 text-sm">
            The KG store drops seasonally. Enter your email and we'll notify you when orders open — no spam, just the actual drop date.
          </p>
          <form className="flex gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
            />
            <button
              type="submit"
              className="text-white text-sm font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Notify Me
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime. Usually one email per season.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
