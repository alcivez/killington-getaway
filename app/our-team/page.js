'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TEAM = [
  { name: 'Jonas', img: '/images/team/jonas.png' },
  { name: 'Marc',  img: '/images/team/marc.png'  },
  { name: 'Jorge', img: '/images/team/jorge.png' },
  { name: 'Paul',  img: '/images/team/paul.png'  },
  { name: 'John',  img: '/images/team/john.png'  },
]

export default function OurTeamPage() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  function goTo(index) {
    setCurrent((index + TEAM.length) % TEAM.length)
  }

  function prev() { goTo(current - 1) }
  function next() { goTo(current + 1) }

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % TEAM.length)
    }, 3500)
    return () => clearInterval(timerRef.current)
  }, [paused, current])

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>The People Behind the Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Team</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            At Killington Getaway, we take immense pride in our roots as Vermonters — a place where our love for skiing and the thrill of adventure runs deep in our veins. We&apos;re not just enthusiasts; we&apos;re dedicated adventurers who cherish every moment spent in this beautiful state.
          </p>
        </div>
      </section>

      {/* Slider */}
      <section
        className="py-16 px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl" style={{ height: '580px' }}>

            {/* Slides */}
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: `translateX(${(i - current) * 100}%)`,
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-white text-3xl font-extrabold tracking-tight">{member.name}</p>
                  <p className="text-white/70 text-sm mt-1">Killington Getaway Team</p>
                </div>
              </div>
            ))}

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition-all z-10"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition-all z-10"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 right-8 flex gap-2 z-10">
              {TEAM.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{ backgroundColor: i === current ? '#00B4D8' : 'rgba(255,255,255,0.5)' }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail row */}
          <div className="flex gap-4 mt-6 justify-center">
            {TEAM.map((member, i) => (
              <button
                key={member.name}
                onClick={() => goTo(i)}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden border-2 transition-all"
                  style={{ borderColor: i === current ? '#00B4D8' : 'transparent' }}
                >
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <span
                  className="text-xs font-semibold transition-colors"
                  style={{ color: i === current ? '#00B4D8' : '#9ca3af' }}
                >
                  {member.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-base">
            Our mission is to share the magic of Vermont, encouraging and assisting fellow travelers to savor its boundless wonders. With a profound appreciation for our state&apos;s natural beauty and insatiable wanderlust, we&apos;re on a journey to help you discover Vermont at its absolute best. Whether you&apos;re a seasoned skier or a novice, an outdoor enthusiast, or a leisurely explorer — we&apos;re here to guide and inspire your travels, making every experience in this picturesque state truly unforgettable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Want to Know More?</h2>
          <p className="text-gray-400 mb-6">Learn about how Killington Getaway started and the mission that drives us.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/our-story"
              className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Our Story
            </a>
            <a
              href="/contact-us"
              className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
              style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
