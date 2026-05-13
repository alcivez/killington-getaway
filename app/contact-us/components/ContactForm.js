'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Network error. Please try again later.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-20 px-6">
        <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2 className="text-3xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">Message Received!</h2>
        <p className="text-gray-400 text-xl font-medium max-w-sm mx-auto">Thanks for reaching out. A local expert will get back to you within 1–2 business days.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-12 text-brand-green font-black text-xs uppercase tracking-widest hover:gap-3 transition-all flex items-center justify-center mx-auto"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-brand-navy font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-brand-navy font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-1">Subject</label>
        <div className="relative">
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-brand-navy font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all appearance-none"
          >
            <option value="" disabled>What can we help you with?</option>
            <option value="general">General Inquiry</option>
            <option value="listing">Add / Update a Listing</option>
            <option value="press">Press & Media</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2.5}/></svg>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-1">Your Message</label>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry…"
          className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-6 py-5 text-brand-navy font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all resize-none"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="bg-brand-navy text-white font-black px-12 py-5 rounded-2xl hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-[0.2em] text-sm w-full md:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
