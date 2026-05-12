'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const GEAR_SECTIONS = [
  {
    category: 'Skis',
    emoji: '🎿',
    color: '#00B4D8',
    items: [
      {
        brand: 'Stöckli',
        model: 'Laser AR',
        year: '2025–26',
        price: '$1,199',
        level: 'Expert',
        desc: "Switzerland's finest all-mountain ski. The Laser AR is a precision-machined carving weapon that dominates groomed runs at Killington while holding its own in variable terrain. Titanal construction, energetic rebound.",
        img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
        href: 'https://www.backcountry.com/skis',
        tag: 'Editor\'s Pick',
      },
      {
        brand: 'Blizzard',
        model: 'Rustler 10',
        year: '2025–26',
        price: '$799',
        level: 'Advanced',
        desc: "The go-anywhere ski for Killington's unpredictable East Coast conditions. Wide underfoot for soft days, stiff enough to handle hardpack. Best-in-class directional shape for charging Bear Mountain.",
        img: 'https://images.unsplash.com/photo-1605719124347-9d5b4f0a7edb?w=600&q=80',
        href: 'https://www.backcountry.com/skis',
        tag: 'Best All-Mountain',
      },
      {
        brand: 'Völkl',
        model: 'Mantra M6',
        year: '2025–26',
        price: '$949',
        level: 'Advanced–Expert',
        desc: "Classic East Coast charger. The Mantra has been the benchmark for Vermont hardpack skiing for a decade. Progressive rocker profile handles the occasional soft day without sacrificing edge grip on ice.",
        img: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&q=80',
        href: 'https://www.backcountry.com/skis',
        tag: 'Vermont Classic',
      },
      {
        brand: 'K2',
        model: 'Mindbender 90C',
        year: '2025–26',
        price: '$649',
        level: 'Intermediate–Advanced',
        desc: 'The ideal upgrade ski for intermediate skiers stepping up their game. Lightweight carbon construction, friendly tip rocker, and easy-initiation turn feel. Perfect for days when you want to progress, not fight.',
        img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
        href: 'https://www.backcountry.com/skis',
        tag: 'Best Upgrade',
      },
    ],
  },
  {
    category: 'Boots',
    emoji: '👢',
    color: '#0077A8',
    items: [
      {
        brand: 'Dynafit',
        model: 'TLT X',
        year: '2025–26',
        price: '$899',
        level: 'Advanced–Expert',
        desc: "A touring/alpine crossover that handles Killington's lift-served terrain without the stiffness penalty of traditional race boots. Walk mode is effortless, ski mode locks down for precise edge engagement.",
        img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80',
        href: 'https://www.backcountry.com/ski-boots',
        tag: 'Best Crossover',
      },
      {
        brand: 'Atomic',
        model: 'Hawx Ultra 130',
        year: '2025–26',
        price: '$749',
        level: 'Advanced',
        desc: 'The sweet spot for aggressive skiers who want maximum response. Carbon Spine lateral support, Mimic liner for heat-moldable fit, and an aggressive 130 flex that communicates every vibration from the snow.',
        img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
        href: 'https://www.backcountry.com/ski-boots',
        tag: 'High Performance',
      },
      {
        brand: 'Nordica',
        model: 'Speedmachine 3 120',
        year: '2025–26',
        price: '$629',
        level: 'Intermediate–Advanced',
        desc: 'Comfortable enough for all-day skiing, responsive enough to charge. The Speedmachine series is the most popular all-around alpine boot in the East for a reason. Wide last, heat-moldable foam, excellent heel hold.',
        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
        href: 'https://www.backcountry.com/ski-boots',
        tag: 'Most Popular',
      },
    ],
  },
  {
    category: 'Bindings',
    emoji: '⚙️',
    color: '#374151',
    items: [
      {
        brand: 'Look',
        model: 'Pivot 18',
        year: '2025–26',
        price: '$599',
        level: 'Expert',
        desc: "The cult binding of choice for hard-snow specialists. Pivot elasticity at the toe means less pre-release on hardpack and ice — crucial for Killington's variable conditions. DIN range 5–18.",
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        href: 'https://www.backcountry.com/ski-bindings',
        tag: 'East Coast Favorite',
      },
      {
        brand: 'Tyrolia',
        model: 'Attack 13 GW',
        year: '2025–26',
        price: '$299',
        level: 'Intermediate–Advanced',
        desc: 'Reliable, well-priced, and versatile. The Attack 13 GW uses Tyrolia\'s Gliding Wide Toe for smooth release geometry. An excellent pairing for all-mountain skis in the $600–900 range.',
        img: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=600&q=80',
        href: 'https://www.backcountry.com/ski-bindings',
        tag: 'Best Value',
      },
    ],
  },
  {
    category: 'Helmets & Protection',
    emoji: '🪖',
    color: '#7C3AED',
    items: [
      {
        brand: 'Smith',
        model: 'Vantage MIPS',
        year: '2025–26',
        price: '$329',
        level: 'All Levels',
        desc: 'The helmet of choice among Killington locals. MIPS rotational protection, Koroyd energy-absorbing core, and integrated Airflow ventilation that works in both cold and warm spring conditions.',
        img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80',
        href: 'https://www.backcountry.com/ski-helmets',
        tag: 'Best Overall',
      },
      {
        brand: 'Oakley',
        model: 'MOD5 MIPS',
        year: '2025–26',
        price: '$249',
        level: 'All Levels',
        desc: "Oakley's best value MIPS helmet. BOA fit system for micro-adjustable tightness, 21-vent design, and seamless goggle integration with any Oakley goggle. Clean aesthetic that works on and off the mountain.",
        img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80',
        href: 'https://www.backcountry.com/ski-helmets',
        tag: 'Best Value',
      },
    ],
  },
  {
    category: 'Goggles',
    emoji: '🥽',
    color: '#D97706',
    items: [
      {
        brand: 'Oakley',
        model: 'Flight Deck L Prizm',
        year: '2025–26',
        price: '$249',
        level: 'All Levels',
        desc: 'The widest field of view in the game. Rimless design and Prizm lens technology optimize contrast for Vermont conditions — especially effective on flat-light overcast days when you need to read terrain.',
        img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80',
        href: 'https://www.backcountry.com/ski-goggles',
        tag: 'Widest FOV',
      },
      {
        brand: 'Smith',
        model: 'I/O MAG XL',
        year: '2025–26',
        price: '$279',
        level: 'All Levels',
        desc: "Smith's MAG magnetic lens system lets you swap lenses in under 3 seconds. A must for Killington trips where you might go from bluebird sun to flat-light fog on the same run. Includes two lenses.",
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
        href: 'https://www.backcountry.com/ski-goggles',
        tag: 'Quick-Swap Lens',
      },
    ],
  },
]

const LEVEL_COLORS = {
  'Expert': '#DC2626',
  'Advanced': '#D97706',
  'Advanced–Expert': '#DC2626',
  'Intermediate–Advanced': '#2d94e3',
  'All Levels': '#3498DB',
}

export default function GearPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Gear Guide" 
        subtitle="The best picks from our crew for the 2025–2026 season — handpicked by the locals who ski Killington every week."
        image="https://images.unsplash.com/photo-1551698618-1fed5d975506?w=1600&q=80" 
      />

      {/* Gear sections */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {GEAR_SECTIONS.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-6 mb-12 pb-6 border-b border-gray-100 group">
                <span className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{section.emoji}</span>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy uppercase tracking-tight">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <div key={item.model} className="bg-gray-50/30 rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-premium hover:bg-white hover:-translate-y-2 transition-all duration-500 flex flex-col group">
                    <div className="relative h-64 overflow-hidden">
                      <img src={item.img} alt={`${item.brand} ${item.model}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-6 left-6 flex gap-2">
                        <span className="text-[10px] font-black px-4 py-2 rounded-full text-white uppercase tracking-widest shadow-lg" style={{ backgroundColor: section.color }}>
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6">
                        <span className="text-[10px] font-black px-4 py-2 rounded-full text-white uppercase tracking-widest shadow-lg" style={{ backgroundColor: LEVEL_COLORS[item.level] || '#374151' }}>
                          {item.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <p className="text-[10px] font-black text-brand-green uppercase tracking-[0.2em] mb-1">{item.brand}</p>
                          <h3 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-tight leading-tight">{item.model}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-heading font-black text-brand-navy leading-none mb-1">{item.price}</p>
                          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-1">{item.desc}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-brand-navy text-white font-black py-5 rounded-full hover:bg-brand-green transition-all shadow-xl uppercase tracking-widest text-xs"
                      >
                        Shop Full Specs
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="py-12 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/40 leading-relaxed">Affiliate Disclosure</p>
          </div>
          <p className="text-xs font-medium text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Killington Getaway may earn a commission when you purchase through links on this page. This never affects our recommendations — we only feature gear our team has personally tested or reviewed from trusted sources. Prices and availability are subject to change.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
