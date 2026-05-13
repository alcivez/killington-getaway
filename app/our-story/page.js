'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const GUIDE_SECTIONS = [
  {
    icon: '🍽️',
    title: 'Restaurants, Cafés & Bars',
    desc: "Explore our handpicked selection of Killington's finest dining — from après-ski classics and craft cocktail bars to cozy Vermont farm-to-table spots. Every recommendation comes from people who eat here regularly.",
  },
  {
    icon: '🍺',
    title: 'Local Breweries',
    desc: "Dive into Vermont's thriving craft beer scene. Long Trail, Outer Limits, River Roost, and dozens of regional breweries offer a diverse range of artisanal brews crafted with passion and precision.",
  },
  {
    icon: '🏛️',
    title: 'Museums & Culture',
    desc: "Immerse yourself in Killington's rich arts and culture scene. Visit museums and galleries showcasing the region's history and heritage — from the American Precision Museum to the Billings Farm.",
  },
  {
    icon: '🧗',
    title: 'Adventure',
    desc: "For thrill-seekers, Killington delivers: ziplines, whitewater rafting, rock climbing, ATV tours, snowmobile excursions, and the most challenging ski terrain in the East.",
  },
  {
    icon: '🥾',
    title: 'Hiking & Outdoors',
    desc: "The Green Mountains offer hundreds of miles of trails, from easy walks through covered bridges to summit hikes at Killington Peak with views stretching to New Hampshire.",
  },
  {
    icon: '🏠',
    title: 'Lodging',
    desc: "From ski-in/ski-out slopeside condos to cozy B&Bs in Woodstock and the full Grand Hotel — we cover every lodging option in and around Killington for every budget and group size.",
  },
]

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Our Story" 
        subtitle="The mission, the mountain, and the locals behind Killington Getaway."
        image="/images/hero/our-story-hero.png"
      />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Our Story</p>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight">
            Discover the Splendors of <br /><span className="text-brand-green">Killington Getaway</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">
            Your ultimate travel guide — built by locals, for everyone who wants to experience Vermont&apos;s greatest mountain region the right way.
          </p>
        </div>
      </section>

      {/* Main description */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <p className="text-brand-navy font-bold text-2xl lg:text-3xl leading-relaxed mb-10">
                Our comprehensive guide is designed to help you make the most of your visit to Killington, Vermont. Whether you&apos;re planning a winter ski weekend, a summer mountain bike trip, or a fall foliage drive through the Green Mountains, we&apos;ve curated everything you need in one place.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                  Explore our handpicked selection of Killington&apos;s finest restaurants, cafés, and bars — satisfying your culinary cravings with mouthwatering Vermont-grown delights. For beer enthusiasts, dive into the thriving craft beer scene at local breweries, where you can savor a diverse range of artisanal brews crafted with passion and precision.
                </p>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                  Immerse yourself in Killington&apos;s rich arts and culture scene by visiting museums and galleries that showcase the region&apos;s history and heritage. And for adventure seekers, Killington offers thrilling experiences at adventure centers — where you can zipline through treetops, navigate rapids on whitewater rafting trips, or challenge yourself with rock climbing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase">What Our Guide <span className="text-brand-green">Covers</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDE_SECTIONS.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl mb-6 group-hover:bg-brand-green/10 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-heading font-black text-brand-navy text-xl mb-4 group-hover:text-brand-green transition-colors">{s.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-brand-green" />
            <h2 className="text-xl font-heading font-black text-white uppercase tracking-[0.2em]">Our Mission</h2>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <p className="text-white font-bold text-2xl md:text-3xl leading-relaxed mb-10">
            At Killington Getaway, we strive to be your trusted companion on your journey. Our meticulously curated travel guide and directory provide up-to-date information and recommendations, ensuring a memorable and hassle-free experience.
          </p>
          <p className="text-white/40 text-xl font-medium leading-relaxed">
            Whether you&apos;re a first-time visitor or a frequent traveler, let us unlock the wonders of Killington so you can create cherished memories in this scenic paradise.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[4rem] py-16 px-10 border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Have <span className="text-brand-green">Questions?</span></h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto">Our team is made up of year-round Vermonters who ski Killington every week. We&apos;re here to help you plan the perfect trip.</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/contact-us"
              className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/our-team"
              className="bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
