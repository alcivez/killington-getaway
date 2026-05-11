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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-green" />
              <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Media Relations</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase leading-tight">Press <span className="text-brand-green">Inquiries</span></h1>
            <p className="text-gray-400 text-xl font-medium max-w-2xl leading-relaxed mb-10">
              For media inquiries, interview requests, licensing, and research partnerships — we&apos;re available and responsive.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:+19494363766" className="flex items-center gap-4 text-brand-navy font-black text-lg hover:text-brand-green transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="uppercase tracking-widest text-sm">949-436-SNOW (7669)</span>
              </a>
              <a href="mailto:press@killingtongetaway.com" className="flex items-center gap-4 text-brand-navy font-black text-lg hover:text-brand-green transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="uppercase tracking-widest text-sm">press@killingtongetaway.com</span>
              </a>
            </div>
          </div>
          <div className="bg-brand-navy rounded-[3rem] p-10 lg:p-12 flex-shrink-0 w-full lg:w-96 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16" />
            <h3 className="text-xl font-heading font-black text-white mb-8 uppercase tracking-tight relative z-10">Response Times</h3>
            <div className="flex flex-col gap-6 relative z-10">
              {[
                { type: 'Broadcast / TV', time: 'Same day' },
                { type: 'Print / Digital', time: 'Within 24h' },
                { type: 'Research', time: 'Within 48h' },
                { type: 'Licensing', time: '2–3 days' },
              ].map((r) => (
                <div key={r.type} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{r.type}</span>
                  <span className="text-brand-green text-xs font-black uppercase tracking-widest">{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage areas */}
      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy uppercase tracking-tight">We Can <span className="text-brand-green">Comment On</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COVERAGE_AREAS.map((c) => (
              <div key={c.topic} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-premium transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 text-brand-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                </div>
                <h3 className="text-xl font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{c.topic}</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media kit */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy uppercase tracking-tight">Media <span className="text-brand-green">Kit</span></h2>
              <p className="text-gray-400 font-medium mt-2">Assets and documentation for editorial use.</p>
            </div>
            <a
              href="mailto:press@killingtongetaway.com?subject=Media Kit Request"
              className="bg-brand-navy text-white font-black px-10 py-4 rounded-full hover:bg-brand-green transition-all shadow-xl uppercase tracking-widest text-xs flex items-center gap-3"
            >
              Request Full Kit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {MEDIA_ASSETS.map((asset) => (
              <div key={asset.name} className="bg-gray-50/50 border border-gray-100 rounded-[2.5rem] p-8 flex items-center justify-between gap-8 group hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-lg font-heading font-black text-brand-navy uppercase tracking-tight">{asset.name}</p>
                    <span className="text-[10px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 px-2 py-0.5 rounded">{asset.size}</span>
                  </div>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">{asset.desc}</p>
                </div>
                <a
                  href="mailto:press@killingtongetaway.com?subject=Media Kit Request"
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 text-brand-navy flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy uppercase tracking-tight mb-4">Submit an <span className="text-brand-green">Inquiry</span></h2>
            <p className="text-gray-400 text-lg font-medium">Preferred for complex or time-sensitive requests. Include your deadline below.</p>
          </div>

          {submitted ? (
            <div className="bg-brand-navy rounded-[3.5rem] p-16 text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -mr-32 -mt-32 blur-2xl" />
              <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-3xl mx-auto mb-8 shadow-xl">✅</div>
              <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tight mb-4">Inquiry Received</h3>
              <p className="text-white/60 text-lg font-medium mb-10 max-w-lg mx-auto leading-relaxed">
                We&apos;ll be in touch within 24 hours. If your deadline is urgent, call 949-436-7669 directly.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] hover:text-white transition-colors">Send another inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50/50 p-10 lg:p-16 rounded-[4rem] border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] ml-4">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-full text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] ml-4">Media Outlet *</label>
                  <input
                    type="text"
                    required
                    value={form.outlet}
                    onChange={(e) => setForm({ ...form, outlet: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-full text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
                    placeholder="Boston Globe, WCVB, etc."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] ml-4">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-full text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
                    placeholder="jane@outlet.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] ml-4">Deadline</label>
                  <input
                    type="text"
                    value={form.deadline}
                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-full text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all"
                    placeholder="e.g. Tuesday 5pm ET"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-brand-navy/30 uppercase tracking-[0.2em] ml-4">Inquiry *</label>
                <textarea
                  required
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  rows={6}
                  className="w-full px-8 py-6 bg-white border border-gray-100 rounded-[2.5rem] text-brand-navy font-bold focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 transition-all resize-none"
                  placeholder="What would you like to discuss? story angle, specific data or quotes..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-brand-navy text-white font-black px-12 py-5 rounded-full hover:bg-brand-green transition-all shadow-xl uppercase tracking-widest text-xs"
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
