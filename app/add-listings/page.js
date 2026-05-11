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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-green" />
              <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Business Owners</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase leading-tight">Add Your <span className="text-brand-green">Listing</span></h1>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
              Killington Getaway is the most trusted local guide in the region. Get your Vermont business in front of thousands of visitors planning their trip.
            </p>
          </div>
          <div className="bg-gray-50 rounded-[3rem] p-10 flex-shrink-0 w-full lg:w-96 border border-gray-100 shadow-premium relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16" />
            <h3 className="font-heading font-black text-brand-navy text-xl mb-8 uppercase tracking-tight relative z-10">Why List With Us</h3>
            <div className="flex flex-col gap-6 relative z-10">
              {[
                { icon: '👁️', label: 'Reach Killington visitors before they arrive' },
                { icon: '✅', label: 'Editorially reviewed — not a pay-to-play directory' },
                { icon: '🔗', label: 'Direct link to your website from every listing' },
                { icon: '📍', label: 'Show up in category searches and map results' },
                { icon: '💬', label: 'Build trust with first-time visitors' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-500 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200/50 relative z-10">
              <p className="text-xs font-medium text-gray-400 leading-relaxed italic">
                Listing review takes 3–5 business days. We verify all submissions before publishing. No payment required for basic listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">

          {submitted ? (
            <div className="bg-white rounded-[4rem] p-20 text-center shadow-premium border border-gray-100 animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-pulse">🏔️</div>
              <h2 className="text-4xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">Submission <span className="text-brand-green">Received!</span></h2>
              <p className="text-gray-400 text-xl font-medium max-w-sm mx-auto leading-relaxed mb-10">
                Thanks for submitting your listing. Our team will review it and follow up within 3–5 business days.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-brand-green font-black uppercase tracking-widest text-[10px] hover:gap-3 flex items-center mx-auto transition-all">
                Submit Another Business →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-[4rem] p-12 md:p-20 shadow-premium border border-gray-100">
              <div className="flex flex-col gap-16">
                
                {/* Business info */}
                <div className="space-y-10">
                  <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                    <span className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-black text-sm">01</span>
                    <h2 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-tight">Business <span className="text-brand-green">Information</span></h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner"
                        placeholder="The Wobbly Barn"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Category *</label>
                      <select
                        name="category"
                        required
                        value={form.category}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option value="">Select a category…</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner"
                        placeholder="https://your-business.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner"
                        placeholder="802-422-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner"
                      placeholder="2229 Killington Road, Killington, VT 05751"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Business Hours</label>
                    <input
                      type="text"
                      name="hours"
                      value={form.hours}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner"
                      placeholder="e.g. Daily 3pm – 2am (ski season)"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Description *</label>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[2rem] text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:bg-white transition-all shadow-inner resize-none"
                      placeholder="What makes your business special? What should visitors expect?"
                    />
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-10">
                  <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                    <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-sm">02</span>
                    <h2 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-tight">Your Contact <span className="text-brand-blue">Info</span></h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Name *</label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        value={form.ownerName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-blue focus:bg-white transition-all shadow-inner"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Role</label>
                      <input
                        type="text"
                        name="ownerRole"
                        value={form.ownerRole}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-blue focus:bg-white transition-all shadow-inner"
                        placeholder="Owner, Manager, Marketing, etc."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address *</label>
                    <input
                      type="email"
                      name="ownerEmail"
                      required
                      value={form.ownerEmail}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-brand-navy font-bold focus:outline-none focus:border-brand-blue focus:bg-white transition-all shadow-inner"
                      placeholder="jane@yourbusiness.com"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-brand-navy/5 rounded-[2rem] p-8 border border-brand-navy/5">
                  <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white flex-shrink-0 mt-0.5 text-xs font-black">!</div>
                  <p className="text-xs font-medium text-gray-500 leading-relaxed">
                    By submitting this form, you confirm that you have permission to represent this business. Our editorial team reviews all submissions and may contact you before publishing. Basic listings are free. Featured placements and enhanced listings are available — ask us about partnership options.
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm flex items-center justify-center gap-3 group"
                >
                  Submit Listing
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>

              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
