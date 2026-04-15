import Link from 'next/link'

const CATEGORIES = [
  { name: "Places to Eat", slug: "places-to-eat", emoji: "🍽️" },
  { name: "Local Breweries", slug: "breweries", emoji: "🍺" },
  { name: "Ski Shops", slug: "ski-shops", emoji: "🎿" },
  { name: "Hiking Trails", slug: "hiking", emoji: "🥾" },
  { name: "Golf Courses", slug: "golf", emoji: "⛳" },
  { name: "Lodging Options", slug: "lodging-options", emoji: "🏠" },
  { name: "Adventure", slug: "adventure", emoji: "🧗" },
  { name: "Places to Drink", slug: "places-to-drink", emoji: "🥂" },
  { name: "Waterfalls", slug: "waterfalls", emoji: "💧" },
  { name: "Farm Visits", slug: "farm-visits", emoji: "🌾" },
  { name: "Museum Experience", slug: "museums", emoji: "🏛️" },
  { name: "Nordic Ski", slug: "nordic-ski", emoji: "⛷️" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-green-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-green-300 text-sm font-semibold mb-3">
            Killington, Vermont
          </p>
          <h1 className="text-5xl font-extrabold mb-5 leading-tight">
            Your Ultimate Adventure Getaway
          </h1>
          <p className="text-green-100 text-xl mb-8 max-w-xl mx-auto">
            Discover the best restaurants, breweries, ski shops, hiking trails, and more in the heart of Vermont.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/listings"
              className="bg-white text-green-900 font-bold px-8 py-3 rounded-full hover:bg-green-100 transition">
              Browse All Listings
            </Link>
            <Link href="/listings?season=winter"
              className="border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition">
              Winter Activities
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Explore Killington
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Browse 144 handpicked spots across 23 categories
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/listings?category=${cat.slug}`}
              className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-2xl py-6 px-4 hover:border-green-600 hover:shadow-md transition text-center group">
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-green-700">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEASONS BANNER */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/listings?season=winter"
            className="relative bg-blue-900 rounded-3xl p-10 text-white hover:opacity-90 transition">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">December – April</p>
            <h3 className="text-3xl font-bold mb-2">Winter in Killington</h3>
            <p className="text-blue-100 text-sm">Ski, snowboard, and aprés-ski your way through the Beast of the East.</p>
            <span className="mt-6 inline-block text-sm font-bold border border-white px-5 py-2 rounded-full">
              Explore Winter →
            </span>
          </Link>
          <Link href="/listings?season=summer"
            className="relative bg-green-700 rounded-3xl p-10 text-white hover:opacity-90 transition">
            <p className="text-green-300 text-sm font-semibold uppercase tracking-wider mb-2">May – November</p>
            <h3 className="text-3xl font-bold mb-2">Summer in Killington</h3>
            <p className="text-green-100 text-sm">Hike, bike, paddle, and explore Vermont's stunning Green Mountains.</p>
            <span className="mt-6 inline-block text-sm font-bold border border-white px-5 py-2 rounded-full">
              Explore Summer →
            </span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-green-200 text-center py-8 text-sm mt-auto">
        <p className="font-bold text-white text-lg mb-1">Killington Getaway</p>
        <p>© {new Date().getFullYear()} · Made in Vermont with ❤️ + ❄️</p>
      </footer>

    </main>
  )
}