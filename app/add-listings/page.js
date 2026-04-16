'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIES = [
  'Places to Eat',
  'Places to Drink',
  'Breweries',
  'Ski Shops',
  'Places to Stay',
  'Adventure Activities',
  'Hiking',
  'Nordic Skiing',
  'Golf',
  'Spa & Wellness',
  'Shopping',
  'Arts & Culture',
  'Transportation',
  'Other',
]

export default function AddListingsPage() {
  const [form, setForm] = useState({
    businessName: '',
    category: '',
    website: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
    description: '',
    ownerName: '',
    ownerEmail: '',
    ownerRole: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Business Owners</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Add Your Listing</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Killington Getaway is the most trusted local guide in the region. Get your Vermont business in front of thousands of visitors planning their trip.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 flex-shrink-0 w-full md:w-72">
            <h3 className="font-bold text-gray-900 mb-4">Why List With Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { icon: '👁️', label: 'Reach Killington visitors before they arrive' },
                { icon: '✅', label: 'Editorially reviewed — not a pay-to-play directory' },
                { icon: '🔗', label: 'Direct link to your website from every listing' },
                { icon: '📍', label: 'Show up in category searches and map results' },
                { icon: '💬', label: 'Build trust with first-time visitors' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 text-gray-600">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Listing review takes 3–5 business days. We verify all submissions before publishing. No payment required for basic listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🏔️</div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Submission Received!</h2>
              <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                Thanks for submitting your listing. Our team will review it and follow up at the email you provided within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Business info */}
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 mb-5 pb-3 border-b border-gray-100">Business Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                        placeholder="The Wobbly Barn"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Category *</label>
                      <select
                        name="category"
                        required
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors bg-white"
                      >
                        <option value="">Select a category…</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                        placeholder="https://your-business.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                        placeholder="802-422-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                      placeholder="2229 Killington Road, Killington, VT 05751"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">Business Hours</label>
                    <input
                      type="text"
                      name="hours"
                      value={form.hours}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                      placeholder="e.g. Daily 3pm – 2am (ski season); Closed summer"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">Description *</label>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors resize-none"
                      placeholder="Describe your business in 2–4 sentences. What makes it special? What should visitors expect?"
                    />
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 mb-5 pb-3 border-b border-gray-100">Your Contact Info</h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        value={form.ownerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Role</label>
                      <input
                        type="text"
                        name="ownerRole"
                        value={form.ownerRole}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                        placeholder="Owner, Manager, Marketing, etc."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="ownerEmail"
                      required
                      value={form.ownerEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00B4D8] transition-colors"
                      placeholder="jane@yourbusiness.com"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4">
                <span className="text-lg flex-shrink-0 mt-0.5">ℹ️</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form, you confirm that you have permission to represent this business. Our editorial team reviews all submissions and may contact you before publishing. Basic listings are free. Featured placements and enhanced listings are available — ask us about partnership options.
                </p>
              </div>

              <button
                type="submit"
                className="self-start text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00B4D8' }}
              >
                Submit Listing →
              </button>

            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
