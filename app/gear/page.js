'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
  'Intermediate–Advanced': '#059669',
  'All Levels': '#00B4D8',
}

export default function GearPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80"
          alt="Ski gear 2026"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>2025–26 Season</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">Gear Guide</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            The best skis, boots, bindings, and protection for Killington's demanding East Coast conditions — handpicked by people who ski it every week.
          </p>
        </div>
      </section>

      {/* Gear sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {GEAR_SECTIONS.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <span className="text-3xl">{section.emoji}</span>
                <h2 className="text-2xl font-extrabold text-gray-900">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div key={item.model} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={item.img} alt={`${item.brand} ${item.model}`} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: section.color }}>
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: LEVEL_COLORS[item.level] || '#374151' }}>
                          {item.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.brand}</p>
                          <h3 className="text-base font-extrabold text-gray-900">{item.model}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-extrabold" style={{ color: '#00B4D8' }}>{item.price}</p>
                          <p className="text-xs text-gray-400">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1 mt-2 mb-4">{item.desc}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center text-white text-sm font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#00B4D8' }}
                      >
                        Shop Now →
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
      <section className="bg-gray-50 border-t border-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-600">Affiliate Disclosure:</strong> Killington Getaway may earn a commission when you purchase through links on this page. This never affects our recommendations — we only feature gear our team has personally tested or reviewed from trusted sources. Prices and availability are subject to change.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
