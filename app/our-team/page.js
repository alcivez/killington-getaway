'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TEAM = [
  {
    name: 'Jonas',
    img: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Jonas-3.png',
  },
  {
    name: 'Marc',
    img: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Marc-4.png',
  },
  {
    name: 'Jorge',
    img: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Jorge-3.png',
  },
  {
    name: 'Paul',
    img: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Paul-3.png',
  },
  {
    name: 'John',
    img: 'https://killingtongetaway.com/wp-content/uploads/2024/01/John-3.png',
  },
]

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>The People Behind the Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Team</h1>
          <p className="text-gray-400 text-lg">
            We&apos;re encouraged adventurers who cherish every moment spent in Vermont. Our team guides travelers across the Green Mountains — from the best après-ski spots to hidden hiking trails most tourists never find.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full rounded-2xl object-cover shadow-sm hover:shadow-md transition-shadow duration-200"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Story link */}
      <section className="bg-gray-50 py-16 px-6 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Want to Know More?</h2>
          <p className="text-gray-400 mb-6">Learn about how Killington Getaway started and the mission that drives us.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://killingtongetaway.com/our-story/"
              target="_blank"
              rel="noopener noreferrer"
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
