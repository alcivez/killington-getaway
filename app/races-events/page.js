'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EVENTS = [
  {
    name: 'Stifel Killington Cup',
    subtitle: 'FIS Women\'s Alpine World Cup',
    dates: 'November 28–30, 2025',
    category: 'World Cup Racing',
    categoryColor: '#DC2626',
    img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80',
    desc: "The crown jewel of Killington's racing calendar. The Stifel Killington Cup is one of the top three events on the FIS Women's World Cup circuit, drawing the world's best alpine ski racers to the Superstar trail every Thanksgiving weekend. Giant slalom and slalom disciplines over three days of racing.",
    highlights: [
      'Tens of thousands of spectators line the Superstar course',
      'Giant Slalom Saturday, Slalom Sunday',
      'Live music and après scene all weekend',
      'Free spectator access to the course-side fan zones',
      'VIP hospitality packages available through Killington Resort',
    ],
    link: 'https://www.killington.com/events/detail/stifel-killington-cup',
    featured: true,
  },
  {
    name: 'Bear Mountain Mogul Challenge',
    subtitle: 'Annual Spring Classic',
    dates: 'April 2026 (TBD)',
    category: 'Mogul Competition',
    categoryColor: '#D97706',
    img: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80',
    desc: "An annual pilgrimage for bump skiers from across the Northeast. The Bear Mountain Mogul Challenge tests technique, air, and speed on one of the East's premier mogul fields. Open to all skill levels with multiple competitive categories.",
    highlights: [
      'Open and amateur divisions available',
      'Held on Bear Mountain\'s classic mogul terrain',
      'Awards ceremony and après party following the event',
      'Spectator friendly — best viewed from the Bear Mountain lift',
    ],
    link: 'https://www.killington.com/events',
    featured: false,
  },
  {
    name: 'Killington Opening Weekend',
    subtitle: 'Season Kickoff',
    dates: 'Early November 2025',
    category: 'Season Opener',
    categoryColor: '#00B4D8',
    img: 'https://images.unsplash.com/photo-1605719124347-9d5b4f0a7edb?w=600&q=80',
    desc: "Killington traditionally opens before every other resort in the East — sometimes as early as late October. The opening weekend draws die-hard skiers and snowboarders who can't wait another day. Limited terrain, maximum energy.",
    highlights: [
      'First lifts in the East, every year',
      'Snowshed and Ramshead base areas typically open first',
      'Opening weekend parties at Wobbly Barn and Pickle Barrel',
      'Discounted early-season passes available at killington.com',
    ],
    link: 'https://www.killington.com/events',
    featured: false,
  },
  {
    name: 'Pond Skimming',
    subtitle: 'Spring Closing Tradition',
    dates: 'April 2026 (Last Weekend)',
    category: 'Spring Classic',
    categoryColor: '#059669',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    desc: "A Killington tradition since the 1970s. Contestants ski or ride down a steep run, hit a kicker, and attempt to skim across a pool of icy water at the bottom — in costume. No skill required. Maximum chaos encouraged.",
    highlights: [
      'Open to all riders — registration at the event',
      'Costume competition alongside the skim contest',
      'Live DJ and crowd on the snow at the base of Snowshed',
      'All proceeds support mountain conservation efforts',
    ],
    link: 'https://www.killington.com/events',
    featured: false,
  },
  {
    name: 'Green Mountain Derby',
    subtitle: 'Eastern NASTAR Championship',
    dates: 'March 2026',
    category: 'Recreational Racing',
    categoryColor: '#7C3AED',
    img: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&q=80',
    desc: "NASTAR recreational racing at Killington draws competitors from all six New England states. Age-handicapped format means grandparents race grandkids on equal footing. One of the most inclusive events on the Killington calendar.",
    highlights: [
      'Open to all NASTAR registered racers',
      'Age and ability handicapping for fair competition',
      'Medals for top finishers in each age category',
      'Connects to the national NASTAR championship qualification',
    ],
    link: 'https://www.nastar.com',
    featured: false,
  },
  {
    name: 'Killington Stage Race',
    subtitle: 'UCI Sanctioned Cycling',
    dates: 'June 2026',
    category: 'Summer Event',
    categoryColor: '#EA580C',
    img: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80',
    desc: "When the snow melts, the cyclists arrive. The Killington Stage Race is a UCI-sanctioned multi-day road cycling event that uses the same mountain roads and elevation that makes Killington famous in winter. A favorite on the New England cycling calendar.",
    highlights: [
      'UCI sanctioned — attracts professional cycling teams',
      'Multiple stages including a summit finish at K1',
      'Gran Fondo recreational ride available to all participants',
      'Spectating is free along the entire course',
    ],
    link: 'https://www.killingtonstagerace.com',
    featured: false,
  },
]

export default function RacesEventsPage() {
  const featured = EVENTS[0]
  const rest = EVENTS.slice(1)

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Killington Events</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Races &amp; Events</h1>
          <p className="text-gray-400 text-lg">From World Cup slalom to pond skimming — the full calendar of events that make Killington more than just a ski resort.</p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00B4D8' }}>Featured Event</p>
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row gap-0 bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
              <img src={featured.img} alt={featured.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: featured.categoryColor }}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.dates}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 group-hover:text-[#00B4D8] transition-colors">
                {featured.name}
              </h2>
              <p className="text-sm text-gray-400 font-semibold mb-3">{featured.subtitle}</p>
              <p className="text-gray-500 leading-relaxed mb-5 text-sm">{featured.desc}</p>
              <ul className="flex flex-col gap-1.5 mb-5">
                {featured.highlights.map((h) => (
                  <li key={h} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: '#00B4D8' }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-semibold" style={{ color: '#00B4D8' }}>Event Details →</span>
            </div>
          </a>
        </div>
      </section>

      {/* All Events */}
      <section className="py-6 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Full Calendar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((ev) => (
              <a
                key={ev.name}
                href={ev.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={ev.img} alt={ev.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: ev.categoryColor }}>
                      {ev.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-1">{ev.dates}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5 group-hover:text-[#00B4D8] transition-colors">{ev.name}</h3>
                  <p className="text-xs font-semibold text-gray-400 mb-2">{ev.subtitle}</p>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-3 line-clamp-3">{ev.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: '#00B4D8' }}>Learn More →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Official calendar CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Full Events Calendar</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Killington Resort maintains a full calendar of events updated throughout the season — concerts, races, festivals, and closing day celebrations.
          </p>
          <a
            href="https://www.killington.com/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B4D8' }}
          >
            View Official Calendar →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
