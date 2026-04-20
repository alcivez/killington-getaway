'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-8xl mb-6">⛷️</p>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-2 tracking-tight">500</h1>
        <p className="text-xl font-bold text-gray-700 mb-3">Wipeout on the Slope</p>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Something went wrong on our end — even the best skiers fall sometimes. We&apos;ve been notified and will get this fixed. Try reloading the page or heading back to the homepage.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            style={{ backgroundColor: '#00B4D8' }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity"
            style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
