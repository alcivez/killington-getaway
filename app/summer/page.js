'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SUMMER_ACTIVITIES = [
  {
    title: 'Killington Bike Park',
    desc: "New England's fastest-growing downhill mountain bike park. 40+ miles of lift-served singletrack from June through October. The K-1 Gondola drops you at the summit — take your pick from green to double black.",
    img: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80',
    href: '/blog/the-downhill-mountain-bike-thrill',
    tag: 'Top Pick',
  },
  {
    title: 'Hiking Trails',
    desc: 'Killington Peak, Bucklin Trail, Canty Trail — the Green Mountains offer hundreds of miles of trails ranging from 1.6 to 10+ miles. Summit views stretching to New Hampshire on clear days.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    href: '/listings?category=hiking',
    tag: 'Outdoors',
  },
  {
    title: 'Paddle Boarding',
    desc: 'Kent Pond in Killington is the local favorite for stand-up paddleboarding. Flat, calm water surrounded by Vermont forest. Rentals available on site. Yoga SUP sessions run through the summer.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    href: '/listings?category=sup',
    tag: 'Water',
  },
  {
    title: 'Waterfalls',
    desc: 'Texas Falls, Warren Falls, Bingham Falls, Falls of Lana — Vermont\'s summer waterfall circuit is one of the most rewarding day-trip itineraries in New England. Most are short hikes from the road.',
    img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80',
    href: '/listings?category=waterfalls',
    tag: 'Scenic',
  },
  {
    title: 'Golf Courses',
    desc: 'The Killington Golf Course, Green Mountain National, Woodstock Country Club, and Quechee Club offer world-class rounds surrounded by the Green Mountains. Book early — tee times fill fast in peak summer.',
    img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80',
    href: '/listings?category=golf',
    tag: 'Sport',
  },
  {
    title: 'Killington Adventure Center',
    desc: 'Over ten family-friendly attractions including zip lines, a climbing wall, mountain biking, and a food court. Open summer through fall — a full day of activity for groups of all ages.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    href: '/listings?category=adventure',
    tag: 'Family',
  },
  {
    title: 'Brewery Tours',
    desc: 'Long Trail, Harpoon at Riverbend, Foley Brothers, Hermit Thrush, Killington Beer Company — Vermont\'s craft beer scene is world-class. Spend a day touring the region\'s best taprooms.',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80',
    href: '/listings?category=breweries',
    tag: 'Local',
  },
  {
    title: 'Vermont Farm Visits',
    desc: 'Billings Farm & Museum in Woodstock, Hinterland Organic Farm, Cloudland Farm to Table — Vermont farm culture is alive and open to visitors. Fresh produce, artisan cheeses, and working farm tours.',
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80',
    href: '/listings?category=farm-visits',
    tag: 'Culture',
  },
  {
    title: 'Glass Blowing at Simon Pearce',
    desc: 'Simon Pearce in Quechee is one of Vermont\'s most iconic studios. Watch master glassblowers at work, tour the mill powered by the Ottauquechee River, and dine in the award-winning restaurant.',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    href: '/listings',
    tag: 'Arts',
  },
  {
    title: 'Covered Bridges',
    desc: 'Vermont has more covered bridges per square mile than anywhere in the country. The Taftsville Bridge, Windsor-Cornish (longest in the US), and West Dummerston are must-visits near Killington.',
    img: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=600&q=80',
    href: '/listings?category=bridges',
    tag: 'Scenic',
  },
  {
    title: 'Maple Sugar Farms',
    desc: "Vermont produces over 50% of the country's maple syrup. Morse Farm Maple Sugarworks, Doubleday Maple, and dozens of local sugarhouses are open for tours and tastings.",
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    href: '/listings?category=maple',
    tag: 'Local',
  },
  {
    title: 'Mountain Coaster',
    desc: "Killington's alpine coaster runs year-round. The 4,800-foot track lets you control your speed through banking turns and drops. No ski pass required — just show up and ride.",
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    href: '/listings?category=adventure',
    tag: 'Thrill',
  },
  {
    title: 'Fall Foliage',
    desc: 'Vermont\'s peak foliage hits the last two weeks of September. The Green Mountains turn gold, orange, and crimson — the most dramatic color display in New England. Killington Road at sunrise is unforgettable.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    href: '/blog',
    tag: 'Seasonal',
  },
  {
    title: 'Cheese Shops & Creameries',
    desc: 'Sugarbush Farm, Plymouth Artisan Cheese, Crowley Cheese, Grafton Village — Vermont\'s artisan cheese trail runs right through Killington country. Pair with local crackers and a Long Trail for a perfect afternoon.',
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80',
    href: '/listings?category=cheese',
    tag: 'Local',
  },
  {
    title: 'Orvis Fly Fishing',
    desc: 'The Orvis Fly Fishing School is one of the most respected in the country. The Batten Kill River near Manchester offers world-class trout fishing. Guided trips available for all experience levels.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    href: '/listings?category=adventure',
    tag: 'Outdoors',
  },
  {
    title: 'Woodstock Village',
    desc: 'A quintessential New England village just 20 minutes from Killington. Stroll the covered bridge, visit the Billings Farm, browse boutiques on Elm Street, and dine at the Red Rooster or Simon Pearce.',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    href: '/location',
    tag: 'Explore',
  },
]

const TAG_COLORS = {
  'Top Pick': '#00B4D8',
  'Outdoors': '#059669',
  'Water': '#0077A8',
  'Scenic': '#6B7280',
  'Sport': '#374151',
  'Family': '#059669',
  'Local': '#D97706',
  'Culture': '#7C3AED',
  'Arts': '#EA580C',
  'Thrill': '#7C3AED',
  'Seasonal': '#DC2626',
  'Explore': '#00B4D8',
}

export default function SummerPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Killington summer hiking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>May – October</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">Summer in Killington</h1>
          <p className="text-gray-200 text-lg max-w-2xl">The mountain transforms — bike parks, hiking trails, golf, waterfalls, farm visits, and New England's most spectacular fall foliage.</p>
        </div>
      </section>

      {/* Activities grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Things To Do This Summer</h2>
            <p className="text-gray-400">Killington is a four-season destination — here's everything the warm months have to offer</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUMMER_ACTIVITIES.map((act) => (
              <Link
                key={act.title}
                href={act.href}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={act.img} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: TAG_COLORS[act.tag] || '#00B4D8' }}>
                      {act.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#00B4D8] transition-colors">{act.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{act.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Explore?</h2>
          <p className="text-gray-400 mb-6">Browse our full directory of summer activities, restaurants, and experiences near Killington.</p>
          <Link href="/listings" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00B4D8' }}>
            Browse All Listings
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
