'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const COVERAGE_AREAS = [
  { topic: 'Killington Resort & Mountain', detail: 'Trail conditions, lift operations, snowmaking, events, and resort developments' },
  { topic: 'Vermont Ski Tourism', detail: 'Travel trends, accommodation market, visitor demographics and spending patterns' },
  { topic: 'B-Corp & Sustainable Tourism', detail: 'Our certification, giving back programs, and sustainable travel advocacy' },
  { topic: 'Northeast Ski Market Research', detail: 'Annual powder pursuits report, booking trends, and regional ski travel data' },
  { topic: 'Local Vermont Business', detail: 'Restaurant openings, lodging market, small business ecosystem in Killington corridor' },
  { topic: 'Mountain Biking & Summer Activities', detail: 'Killington Bike Park, summer tourism, and four-season destination development' },
]

const MEDIA_ASSETS = [
  { name: 'Brand Logos (PNG/SVG)', size: '2.4 MB', desc: 'Killington Getaway wordmark and icon in all color variants and formats' },
  { name: 'Team Photos', size: '8.1 MB', desc: 'High-resolution headshots and team photos of all five Killington Getaway team members' },
  { name: 'Mountain Photography', size: '45 MB', desc: "Licensed editorial photography of Killington Resort across all four seasons" },
  { name: 'B-Corp Certificate', size: '0.4 MB', desc: 'Official B Lab Certified B Corporation documentation and impact assessment summary' },
  { name: '2024 Powder Pursuits Report', size: '3.2 MB', desc: '1,000-respondent survey on northeastern ski travel trends and accommodation preferences' },
]

export default function PressInquiriesPage() {
  const [form, setForm] = useState({ name: '', outlet: '', email: '', deadline: '', inquiry: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Media</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Press Inquiries</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              For media inquiries, interview requests, licensing, and research partnerships — we're available and responsive.
            </p>
            <div className="flex flex-col gap-2 mt-6 text-sm">
              <a href="tel:+19494363766" className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                📞 949-436-SNOW (7669)
              </a>
              <a href="mailto:press@killingtongetaway.com" className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
                ✉️ press@killingtongetaway.com
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 flex-shrink-0 w-full md:w-72">
            <h3 className="font-bold text-gray-900 mb-4">Response Times</h3>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { type: 'Broadcast / TV', time: 'Same day' },
                { type: 'Print / Digital Media', time: 'Within 24 hours' },
                { type: 'Research & Academic', time: 'Within 48 hours' },
                { type: 'Licensing Requests', time: '2–3 business days' },
              ].map((r) => (
                <div key={r.type} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0">
                  <span className="text-gray-600">{r.type}</span>
                  <span className="font-semibold text-xs" style={{ color: '#00B4D8' }}>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage areas */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">We Can Comment On</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COVERAGE_AREAS.map((c) => (
              <div key={c.topic} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{c.topic}</h3>
                <p className="text-xs text-gray-500">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media kit */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">Media Kit</h2>
            <a
              href="mailto:press@killingtongetaway.com?subject=Media Kit Request"
              className="text-sm font-bold text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#00B4D8' }}
            >
              Request Full Kit →
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {MEDIA_ASSETS.map((asset) => (
              <div key={asset.name} className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{asset.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{asset.desc}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-gray-400 font-mono">{asset.size}</span>
                  <a
                    href="mailto:press@killingtongetaway.com?subject=Media Kit Request"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border hover:opacity-70 transition-opacity"
                    style={{ color: '#00B4D8', borderColor: '#00B4D8' }}
                  >
                    Request →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press inquiry form */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Submit an Inquiry</h2>
          <p className="text-gray-400 text-sm mb-8">Preferred for complex or time-sensitive requests. Include your deadline in the form.</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Inquiry Received</h3>
              <p className="text-sm text-gray-500">We'll be in touch within 24 hours. If your deadline is urgent, call 949-436-7669 directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1.5">Media Outlet *</label>
                  <input
                    type="text"
                    required
                    value={form.outlet}
                    onChange={(e) => setForm({ ...form, outlet: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="Boston Globe, WCVB, etc."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="jane@outlet.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1.5">Deadline</label>
                  <input
                    type="text"
                    value={form.deadline}
                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder="e.g. Tuesday 5pm ET"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1.5">Inquiry *</label>
                <textarea
                  required
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors resize-none"
                  placeholder="What would you like to discuss? Include your publication, the story angle, and any specific data or quotes you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="self-start text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
