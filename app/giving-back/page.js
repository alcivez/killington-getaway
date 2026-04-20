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
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero with YES-KG image */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '320px' }}>
        <img
          src="/images/yes-kg.png"
          alt="YES — Youth Enrichment Services × Killington Getaway"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <p className="uppercase tracking-widest text-xs font-semibold mb-2" style={{ color: '#00B4D8' }}>Community Impact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Giving Back</h1>
          <p className="text-gray-200 text-base max-w-2xl">
            At Killington Getaway, we love to ski — and we love to help others experience the beauty of the slopes with enjoyment, adrenaline, and passion.
          </p>
        </div>
      </section>

      {/* YES Partnership */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Our Partner</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
                Proud Supporters of YES
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                That&apos;s why we are proud supporters of <strong>YES (Youth Enrichment Services)</strong>, a dream team dedicated to making skiing dreams a reality for kids and teens. Their mission is to provide young individuals with the skills and confidence to conquer the slopes — nurturing a lifelong love for skiing among our youth.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                YES strives to create unforgettable experiences and build lasting confidence in the next generation of mountain adventurers. Together, we&apos;re working to ensure that cost is never a barrier to the mountain experience.
              </p>
              <a
                href="https://www.yeskids.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Learn About YES →
              </a>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <img
                src="/images/yes-logo.png"
                alt="YES — Youth Enrichment Services"
                className="w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">How To Support YES</h2>
          <p className="text-center text-gray-400 mb-10 text-sm">Click one of the options below for a way to give the gift of skiing to others.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WAYS_TO_SUPPORT.map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.yeskids.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity shadow-md text-base"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Leave a Mark — Donate to YES
            </a>
          </div>
        </div>
      </section>

      {/* B-Corp note */}
      <section className="py-14 px-6 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Certified B Corporation</h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Killington Getaway is a Certified B Corporation — meaning our commitment to giving back is legally binding and externally audited. Every booking, every affiliate link, every gear recommendation helps us support YES and our Vermont community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/certified-b-corp"
              className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
              style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
            >
              Our B-Corp Certification
            </Link>
            <Link
              href="/contact-us"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
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
