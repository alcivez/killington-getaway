import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-8xl mb-6">🏔️</p>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-2 tracking-tight">404</h1>
        <p className="text-xl font-bold text-gray-700 mb-3">Lost on the Mountain?</p>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Looks like this trail doesn&apos;t exist. The page you&apos;re looking for may have moved, been removed, or never existed in the first place — much like that powder day everyone keeps talking about.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Back to Base Camp
          </Link>
          <Link
            href="/listings"
            className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
            style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </main>
  )
}
