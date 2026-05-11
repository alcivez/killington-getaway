'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WAYS_TO_SUPPORT = [
  { icon: '💻', label: 'Donate Online', desc: 'Contribute directly to YES through their secure online portal.' },
  { icon: '🎿', label: 'Purchase Pro Fund Ski Equipment', desc: 'Buy gear that supports getting kids on the slopes.' },
  { icon: '🤝', label: 'Become a Volunteer', desc: 'Lend your time and expertise to help YES expand its reach.' },
  { icon: '📣', label: 'Share on Social Media', desc: 'Spread the word and help more people discover the cause.' },
  { icon: '🎉', label: 'Attend Funding Events', desc: 'Be part of YES fundraising events throughout the season.' },
  { icon: '⭐', label: 'Join the Team', desc: 'Consider becoming a long-term partner and supporter.' },
]

export default function GivingBackPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero with YES-KG image */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '550px' }}>
        <img
          src="/images/yes-kg.png"
          alt="YES — Youth Enrichment Services × Killington Getaway"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-white/60">Community Impact</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tight mb-6 uppercase leading-tight">Giving <span className="text-brand-green">Back</span></h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl leading-relaxed">
            At Killington Getaway, we love to ski — and we love to help others experience the beauty of the slopes with enjoyment, adrenaline, and passion.
          </p>
        </div>
      </section>

      {/* YES Partnership */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-brand-green" />
                <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Our Partner</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tight leading-tight">
                Proud Supporters <span className="text-brand-green">of YES</span>
              </h2>
              <div className="flex flex-col gap-6 text-gray-400 text-lg font-medium leading-relaxed mb-10">
                <p>
                  That&apos;s why we are proud supporters of <strong>YES (Youth Enrichment Services)</strong>, a dream team dedicated to making skiing dreams a reality for kids and teens. Their mission is to provide young individuals with the skills and confidence to conquer the slopes.
                </p>
                <p>
                  YES strives to create unforgettable experiences and build lasting confidence in the next generation of mountain adventurers. Together, we&apos;re working to ensure that cost is never a barrier to the mountain experience.
                </p>
              </div>
              <a
                href="https://www.yeskids.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-navy text-white font-black px-10 py-4 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
              >
                Learn About YES ↗
              </a>
            </div>
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative bg-white rounded-[3rem] p-12 shadow-premium border border-gray-50 z-10">
                <img
                  src="/images/yes-logo.png"
                  alt="YES — Youth Enrichment Services"
                  className="w-80 object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="py-24 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">How To <span className="text-brand-green">Support YES</span></h2>
            <p className="text-gray-400 text-xl font-medium">Click one of the options below for a way to give the gift of skiing to others.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WAYS_TO_SUPPORT.map((item) => (
              <div key={item.label} className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-gray-50 group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading font-black text-brand-navy text-xl mb-4 uppercase tracking-tight leading-tight group-hover:text-brand-green transition-colors">{item.label}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <a
              href="https://www.yeskids.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Donate to YES
            </a>
          </div>
        </div>
      </section>

      {/* B-Corp note */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-brand-navy rounded-[4rem] py-16 px-10 border border-brand-navy shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight uppercase relative z-10">Certified <span className="text-brand-green">B Corporation</span></h2>
          <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            Killington Getaway is a Certified B Corporation — meaning our commitment to giving back is legally binding and externally audited.
          </p>
          <div className="flex gap-6 justify-center flex-wrap relative z-10">
            <Link
              href="/certified-b-corp"
              className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Our B-Corp Certification
            </Link>
            <Link
              href="/contact-us"
              className="bg-white text-brand-navy font-black px-12 py-5 rounded-full hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
