'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PILLARS = [
  {
    icon: '👷',
    title: 'Workers',
    score: '24.8 / 40',
    desc: 'Fair compensation, flexible work arrangements for Vermont-based team members, and transparent decision-making. Our team includes freelancers and local contractors who are paid above market rate.',
  },
  {
    icon: '🌍',
    title: 'Community',
    score: '38.2 / 40',
    desc: 'Our highest-scoring category. Local business prioritization, nonprofit partnerships with YES and Vermont Land Trust, and a commitment to keeping revenue in the Killington community.',
  },
  {
    icon: '🌿',
    title: 'Environment',
    score: '19.4 / 40',
    desc: 'Carbon-neutral web hosting, paperless operations, and advocacy for sustainable tourism practices. We partner with Vermont outdoor organizations that protect the trails and terrain we promote.',
  },
  {
    icon: '👥',
    title: 'Customers',
    score: '15.6 / 20',
    desc: 'Editorial independence (no paid placements), transparent affiliate disclosures, and honest reviews. We measure customer trust by email unsubscribe rates and direct feedback — not engagement metrics.',
  },
  {
    icon: '🏢',
    title: 'Governance',
    score: '10.4 / 10',
    desc: "Mission-locked legal structure. We can't be sold to a buyer who doesn't meet our B-Corp standards without shareholder approval and B Lab review. The mission is protected in our operating agreement.",
  },
]

const FAQS = [
  {
    q: "What is a Certified B Corporation?",
    a: "Certified B Corporations are businesses that have passed an independent assessment by B Lab verifying that they meet high standards of social and environmental performance, accountability, and transparency. It's the gold standard for businesses that want to demonstrate real commitment to stakeholders beyond just shareholders.",
  },
  {
    q: "How is Killington Getaway's B-Corp certification different from just claiming to 'give back'?",
    a: "The B Impact Assessment is a rigorous third-party audit — not self-reported. We provide documentation of our practices, financials, policies, and contracts. B Lab reviews everything. If our practices change in a way that no longer meets the standard, we can lose certification. There's no faking it.",
  },
  {
    q: "Does B-Corp status mean you're a nonprofit?",
    a: "No. We're a for-profit business. B-Corp certification is about how you run a for-profit — the labor practices, environmental policies, community investments, and governance structure. The idea is that profit and purpose can coexist.",
  },
  {
    q: "When is your next re-certification?",
    a: "B-Corp certification must be renewed every three years. Our current certification runs through 2026. We're committed to maintaining certification and improving our scores in each category with each renewal.",
  },
]

export default function CertifiedBCorpPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-xs font-semibold mb-3" style={{ color: '#00B4D8' }}>Our Commitment</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">Certified B Corporation</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Killington Getaway is a Certified B Corporation — meaning we've passed an independent audit verifying that our business meets rigorous standards for social and environmental performance, accountability, and transparency.
            </p>
            <a
              href="https://www.bcorporation.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
              style={{ backgroundColor: '#00B4D8' }}
            >
              About B Corporations →
            </a>
          </div>
          <div className="flex-shrink-0">
            <div
              className="w-44 h-44 rounded-3xl flex flex-col items-center justify-center border-4"
              style={{ borderColor: '#00B4D8' }}
            >
              <div className="text-5xl font-extrabold" style={{ color: '#00B4D8' }}>B</div>
              <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">Certified</div>
              <div className="text-xs text-gray-400 mt-0.5">Corporation</div>
              <div className="mt-3 text-xs font-semibold text-gray-400">Score: 108.4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Our B Impact Assessment</h2>
            <p className="text-gray-400 text-sm">Scored across five categories by independent B Lab auditors. Minimum passing score is 80.</p>
            <p className="text-xl font-extrabold mt-3" style={{ color: '#00B4D8' }}>Total Score: 108.4 / 200</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="font-bold text-gray-900">{p.title}</h3>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg bg-gray-50 text-gray-600">{p.score}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this means */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">What This Means for You</h2>
          <div className="flex flex-col gap-4">
            {[
              'Recommendations on this site are never influenced by paid placement',
              'A percentage of affiliate revenue goes to Vermont nonprofits',
              'Our environmental practices are independently verified, not self-reported',
              'We can\'t be acquired by a buyer whose practices don\'t meet B-Corp standards without disclosure',
              'Our team is treated fairly, paid fairly, and included in major business decisions',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
                <span className="text-base font-bold mt-0.5 flex-shrink-0" style={{ color: '#00B4D8' }}>✓</span>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Learn More About Our Mission</h2>
          <div className="flex gap-4 justify-center flex-wrap mt-6">
            <Link href="/giving-back" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00B4D8' }}>
              Giving Back
            </Link>
            <Link href="/our-story" className="inline-block font-bold px-8 py-3 rounded-full border-2 hover:opacity-70 transition-opacity" style={{ color: '#00B4D8', borderColor: '#00B4D8' }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
