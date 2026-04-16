'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PLATFORMS = [
  {
    name: 'Pinkbike Vermont',
    category: 'Mountain Bikes',
    icon: '🚵',
    color: '#D97706',
    desc: "Pinkbike's regional classifieds are the go-to marketplace for used mountain bikes in Vermont and the Northeast. Killington Bike Park riders sell and buy here constantly — great inventory, local pickup, no fees.",
    link: 'https://www.pinkbike.com/buysell/?country=US&region=VT',
    linkLabel: 'Browse Vermont Listings →',
    tips: [
      'Filter by location: "Vermont" or "New England" for pickup deals',
      'Late season (October) and spring (April) see the most listings',
      'Serious buyers show up with cash and a test ride plan',
    ],
  },
  {
    name: 'Craigslist – Rutland',
    category: 'General Gear & Equipment',
    icon: '📋',
    color: '#374151',
    desc: "Rutland's Craigslist has a surprisingly active sporting goods section. Ski equipment, bikes, kayaks, snowmobiles, and outdoor gear regularly turns over — especially at the start and end of ski season.",
    link: 'https://rutland.craigslist.org/search/spo',
    linkLabel: 'Browse Rutland Sporting Goods →',
    tips: [
      'Search "ski," "snowboard," "bike," or "kayak" in sporting goods',
      'November and April are the best times for ski gear deals',
      "Meet in public — Rutland's Market 32 parking lot is the standard local meeting spot",
    ],
  },
  {
    name: 'Facebook Marketplace – Killington Area',
    category: 'All Categories',
    icon: '📘',
    color: '#1877F2',
    desc: "The Killington and Rutland area Facebook Marketplace is active year-round. Ski gear, bikes, lodging furnishings, and equipment from locals moving out of the area. Check the Killington community groups too.",
    link: 'https://www.facebook.com/marketplace/rutlandvt',
    linkLabel: 'Rutland Marketplace →',
    tips: [
      'Join "Killington VT Classifieds" and "Rutland Vermont Buy Sell Trade" Facebook groups',
      "Local groups often have gear before it hits general Marketplace",
      'Private sellers are often flexible on price if you pick up same day',
    ],
  },
  {
    name: 'SidelineSwap',
    category: 'Ski & Snowboard',
    icon: '🎿',
    color: '#00B4D8',
    desc: "The dedicated ski and snowboard gear marketplace. SidelineSwap has the largest selection of used skis, boots, and bindings online — with shipping included. Great for buying/selling gear between seasons.",
    link: 'https://sidelineswap.com/sport/skiing',
    linkLabel: 'Browse Ski Gear →',
    tips: [
      'Use the bundle feature to sell boots, bindings, and skis together',
      'Competitive pricing — check recent sold listings before listing',
      'Excellent buyer protection for expensive gear',
    ],
  },
  {
    name: 'GearTrade',
    category: 'Outdoor Gear',
    icon: '🏕️',
    color: '#059669',
    desc: "GearTrade is the outdoor industry's trusted used gear marketplace — with a focus on ski, hiking, and camping equipment from reputable brands. Clean interface, authenticated listings, and buyer-friendly policies.",
    link: 'https://www.geartrade.com',
    linkLabel: 'Browse GearTrade →',
    tips: [
      'REI Garage Sale castoffs often show up here',
      'Great for high-end technical gear like Dynafit and Salomon',
      'Trade-in program available for store credit toward new gear',
    ],
  },
  {
    name: 'EpicGear Exchange (Vail/Killington)',
    category: 'Epic Pass Holder Perks',
    icon: '⛷️',
    color: '#7C3AED',
    desc: "Killington was part of the Vail Resorts / Epic Pass network until the 2024–25 season. The Epic Gear Exchange still operates for pass holders looking to swap gear with other dedicated ski travelers across the network.",
    link: 'https://www.epicpass.com',
    linkLabel: 'Epic Pass Details →',
    tips: [
      'Primarily for ski and snowboard equipment within the Epic network',
      "Check Killington's current pass partnerships at killington.com",
    ],
  },
]

export default function BuySellPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Gear Marketplace</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Buy &amp; Sell Gear</h1>
          <p className="text-gray-400 text-lg">
            The best platforms for buying and selling ski gear, mountain bikes, and outdoor equipment in and around the Killington area.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: p.color + '18' }}
                >
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="text-lg font-extrabold text-gray-900">{p.name}</h2>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: p.color }}>
                      {p.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Local Tips</p>
                    <ul className="flex flex-col gap-1.5">
                      {p.tips.map((tip) => (
                        <li key={tip} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="mt-0.5 flex-shrink-0" style={{ color: p.color }}>→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety tips */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Safe Trading Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '📍', tip: 'Meet in public places — the Rutland Market 32 or Killington Resort base lodge parking lots are the local standard.' },
              { icon: '💵', tip: 'Cash is king for local pickup. Venmo/PayPal accepted for shipped items, but watch for scam accounts.' },
              { icon: '🎿', tip: 'Test ski boots in the shop before buying — fit matters more than brand or price. Bring your own liners if needed.' },
              { icon: '🚵', tip: 'Inspect bikes thoroughly. Check the fork seals, drivetrain, and brake bleed — these are expensive to fix post-purchase.' },
              { icon: '🔍', tip: "Check gear serial numbers on Bike Index (bikes) or Stolen 911 (skis) to verify it hasn't been reported stolen." },
              { icon: '📧', tip: "If a deal seems too good to be true on Craigslist or Marketplace, it usually is. Trust your gut and don't ship first." },
            ].map((s) => (
              <div key={s.tip} className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{s.icon}</span>
                <p className="text-xs text-gray-500 leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
