'use client'

import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | Killington Getaway',
  description: 'Have questions or want to update a listing? Reach out to our local Killington experts.',
}
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
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

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-brand-green" />
            <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Connect With Us</p>
            <span className="w-8 h-[2px] bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-6 tracking-tight">Let&apos;s Start a <span className="text-brand-green">Conversation</span></h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Questions, listing submissions, or just want to say hello — we&apos;re here to help you experience the best of Killington.</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/5 flex items-center justify-center flex-shrink-0 text-brand-green">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+19494366769" className="text-brand-navy font-bold text-lg hover:text-brand-green transition-colors">
                    (949) 436-SNOW
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@killingtongetaway.com" className="text-brand-navy font-bold text-lg hover:text-brand-green transition-colors">
                    hello@killingtongetaway.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center flex-shrink-0 text-brand-navy">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Based In</p>
                  <p className="text-brand-navy font-bold text-lg">Killington, Vermont</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-100">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-6">Social Connection</p>
              <div className="flex gap-5">
                {[
                  { name: 'facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', url: 'https://facebook.com/killingtongetaway' },
                  { name: 'instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01', url: 'https://instagram.com/official_killingtongetaway', isStroke: true },
                  { name: 'x', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: 'https://visitkillington' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-brand-green hover:shadow-md transition-all group border border-gray-50"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={social.isStroke ? 'none' : 'currentColor'}
                      stroke={social.isStroke ? 'currentColor' : 'none'}
                      strokeWidth={social.isStroke ? 2 : 0}
                      className="transform group-hover:scale-110 transition-transform"
                    >
                      {social.isStroke ? (
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </>
                      ) : (
                        <path d={social.icon} />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-premium border border-gray-50">
              {submitted ? (
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
              ) : (
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
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
