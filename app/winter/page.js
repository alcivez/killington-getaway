'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WINTER_ACTIVITIES = [
  {
    title: 'Skiing & Snowboarding',
    desc: 'Killington offers 140 trails across 1,509 acres with 22 lifts including two express gondolas. The Beast of the East lives up to its name with terrain for every level, from gentle beginner runs at Snowshed to the infamous Outer Limits mogul field.',
    img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
    href: '/killington-resort',
    tag: 'Most Popular',
  },
  {
    title: 'Women\'s FIS World Cup',
    desc: 'One of the top three events on the Women\'s FIS World Cup tour, held annually over Thanksgiving weekend on the Superstar trail. Tens of thousands of fans line the course for world-class giant slalom racing.',
    img: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?w=600&q=80',
    href: '/races-events',
    tag: 'Event',
  },
  {
    title: 'Snowmobile Tours',
    desc: 'Custom-guided snowmobile tours through the Green Mountains. Snowmobile Vermont offers fully guided excursions across pristine backcountry trails — a completely different way to experience the winter landscape.',
    img: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&q=80',
    href: '/listings?category=snowmobile',
    tag: 'Adventure',
  },
  {
    title: 'Nordic Skiing & Snowshoeing',
    desc: 'Mountain Meadows Nordic Center and the Viking Nordic Center offer groomed cross-country trails through Vermont\'s most scenic terrain. Perfect for families and those looking for a quieter alternative to the downhill scene.',
    img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
    href: '/listings?category=nordic-ski',
    tag: 'Family',
  },
  {
    title: 'Dog Sledding',
    desc: 'Braeburn Siberians offers 30 to 90-minute dog sledding rides through Vermont\'s snow-covered forests. An unforgettable experience for the whole family — the dogs are as excited as you are.',
    img: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80',
    href: '/listings',
    tag: 'Family',
  },
  {
    title: 'Mountain Coaster',
    desc: 'The 4,800-foot-long alpine coaster twists and turns down the mountain at speeds you control. Open all winter and one of the most-talked-about non-ski experiences at Killington.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    href: '/listings?category=adventure',
    tag: 'Thrill',
  },
  {
    title: 'Snow Tubing',
    desc: 'Killington\'s tubing park offers lift-served runs for all ages. No skill required — just hold on. A great option for non-skiers in your group or a fun break from the slopes mid-afternoon.',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    href: '/listings?category=adventure',
    tag: 'Family',
  },
  {
    title: 'Ski Lessons',
    desc: 'Killington\'s ski and snowboard school offers lessons for every age and ability — from first-timers on the bunny hill to advanced clinics with race coaches. Book ahead during peak weeks.',
    img: 'https://images.unsplash.com/photo-1605719124347-9d5b4f0a7edb?w=600&q=80',
    href: '/listings?category=ski-shops',
    tag: 'Learn',
  },
  {
    title: 'Après-Ski & Nightlife',
    desc: 'Killington Road turns into a mountain town after 3pm. The Wobbly Barn, Pickle Barrel, and The Foundry are legendary. Bar shuttles run on weekends so you don\'t have to worry about driving.',
    img: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&q=80',
    href: '/listings?category=places-to-drink',
    tag: 'Nightlife',
  },
  {
    title: 'Ledgewood Yurt Dining',
    desc: 'A ski-in, ski-out restaurant and bar tucked into the mountain. Five-course dinners by candlelight in a heated yurt — one of the most unique dining experiences in Vermont winter sports.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    href: '/listings?category=places-to-eat',
    tag: 'Dining',
  },
  {
    title: 'Brewery Tours',
    desc: 'Vermont\'s craft beer scene doesn\'t slow down in winter. Long Trail, Harpoon at Riverbend, Foley Brothers, and Hermit Thrush are all within an easy drive from Killington. Perfect for a mountain rest day.',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80',
    href: '/listings?category=breweries',
    tag: 'Local',
  },
  {
    title: 'Bear Mountain Mogul Challenge',
    desc: 'An annual spring celebration held each April on Bear Mountain — the Beast\'s signature mogul event. A pilgrimage for hard-core bump skiers from across the Northeast.',
    img: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80',
    href: '/races-events',
    tag: 'Event',
  },
]

const TAG_COLORS = {
  'Most Popular': '#2D936C',
  'Event': '#DC2626',
  'Adventure': '#D97706',
  'Family': '#3498DB',
  'Thrill': '#7C3AED',
  'Learn': '#3498DB',
  'Nightlife': '#0B1619',
  'Dining': '#EA580C',
  'Local': '#D97706',
}

export default function WinterPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[550px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80"
          alt="Killington winter skiing"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-white/60">November – April</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tight mb-6">Winter in <span className="text-brand-green">Killington</span></h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">The Beast of the East delivers the longest ski season in the East — plus snowmobiling, dog sledding, a legendary après scene, and world-class racing.</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
          {[
            { stat: '1,509', label: 'Skiable Acres' },
            { stat: '140', label: 'Trails' },
            { stat: '22', label: 'Lifts' },
            { stat: '6+', label: 'Months of Season' },
          ].map(({ stat, label }) => (
            <div key={label} className="group">
              <p className="text-4xl md:text-5xl font-heading font-black text-brand-green mb-2 transform group-hover:scale-110 transition-transform">{stat}</p>
              <p className="text-[10px] text-gray-300 font-black uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activities grid */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-6 tracking-tight uppercase">The Winter <span className="text-brand-green">Playbook</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">From the mountain to the après — your complete guide to the best winter experiences</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {WINTER_ACTIVITIES.map((act) => (
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
                    Explore Experience
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
          <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Plan Your <span className="text-brand-green">Winter Trip</span></h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto">Browse accommodations, check conditions, and find everything you need for the perfect Killington winter getaway.</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/ski-conditions" 
              className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Check Conditions
            </Link>
            <Link 
              href="/listings" 
              className="bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
