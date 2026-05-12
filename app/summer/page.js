'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

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
  'Top Pick': '#2d94e3',
  'Outdoors': '#3498DB',
  'Water': '#3498DB',
  'Scenic': '#0B1619',
  'Sport': '#2d94e3',
  'Family': '#3498DB',
  'Local': '#D97706',
  'Culture': '#7C3AED',
  'Arts': '#EA580C',
  'Thrill': '#DC2626',
  'Seasonal': '#D97706',
  'Explore': '#2d94e3',
}

export default function SummerPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Summer in Killington" 
        subtitle="Mountain biking, golf, and adventure await under the summer sun."
        image="/images/hero/summer-hero.jpg" 
      />

      {/* Activities grid */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-6 tracking-tight uppercase">Things To Do <span className="text-brand-green">This Summer</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Killington is a four-season destination — here's everything the warm months have to offer</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SUMMER_ACTIVITIES.map((act) => (
              <Link
                key={act.title}
                href={act.href}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 group flex flex-col transform hover:-translate-y-2 border border-gray-50"
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={act.img} alt={act.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {act.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="font-heading font-black text-brand-navy text-xl mb-4 group-hover:text-brand-green transition-colors leading-tight">{act.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed flex-1 mb-8">{act.desc}</p>
                  <div className="flex items-center gap-2 text-brand-green font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Explore Activity
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[4rem] py-16 px-10 border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Ready to <span className="text-brand-green">Explore?</span></h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto">Browse our full directory of summer activities, restaurants, and experiences near Killington.</p>
          <Link 
            href="/listings" 
            className="bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            Browse All Listings
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
