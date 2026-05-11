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
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-green" />
              <p className="uppercase tracking-[0.3em] text-xs font-black text-brand-navy/40">Our Commitment</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 tracking-tight uppercase leading-tight">Certified <span className="text-brand-green">B Corp</span></h1>
            <p className="text-gray-400 text-xl font-medium leading-relaxed mb-10">
              Killington Getaway is a Certified B Corporation — meaning we've passed an independent audit verifying that our business meets rigorous standards for social and environmental performance, accountability, and transparency.
            </p>
            <a
              href="https://www.bcorporation.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-navy text-white font-black px-10 py-4 rounded-full hover:bg-brand-navy/90 transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              About B Corporations ↗
            </a>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full animate-pulse" />
            <div
              className="relative w-64 h-64 rounded-[3rem] flex flex-col items-center justify-center border-8 border-white bg-white shadow-premium z-10"
            >
              <div className="text-8xl font-heading font-black text-brand-navy leading-none">B</div>
              <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mt-2">Certified</div>
              <div className="text-[10px] text-gray-300 uppercase tracking-widest">Corporation</div>
              <div className="mt-6 bg-brand-green/10 px-4 py-1.5 rounded-full text-[10px] font-black text-brand-green uppercase tracking-widest">Score: 108.4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">Our B Impact <span className="text-brand-green">Assessment</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto mb-8">Scored across five categories by independent B Lab auditors. Minimum passing score is 80.</p>
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-[2rem] shadow-sm border border-gray-100">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Overall Score</span>
              <span className="text-3xl font-heading font-black text-brand-green leading-none">108.4</span>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">/ 200</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-gray-50 group hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <h3 className="font-heading font-black text-brand-navy text-xl uppercase tracking-tight">{p.title}</h3>
                  </div>
                  <div className="text-[10px] font-black px-4 py-2 rounded-xl bg-brand-green/5 text-brand-green uppercase tracking-widest">{p.score}</div>
                </div>
                <p className="text-gray-400 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this means */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">What This <span className="text-brand-green">Means for You</span></h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              'Recommendations on this site are never influenced by paid placement',
              'A percentage of affiliate revenue goes to Vermont nonprofits',
              'Our environmental practices are independently verified, not self-reported',
              'We can\'t be acquired by a buyer whose practices don\'t meet B-Corp standards without disclosure',
              'Our team is treated fairly, paid fairly, and included in major business decisions',
            ].map((item) => (
              <div key={item} className="flex items-center gap-6 bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 group hover:border-brand-green/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-brand-navy font-bold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">B Corp <span className="text-brand-green">FAQ</span></h2>
          </div>
          <div className="flex flex-col gap-8">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">{faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-brand-navy rounded-[4rem] py-16 px-10 border border-brand-navy shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight uppercase relative z-10">Learn More About <span className="text-brand-green">Our Mission</span></h2>
          <p className="text-white/60 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
            Discover how we're working to protect the Green Mountains and support the local Killington community.
          </p>
          <div className="flex gap-6 justify-center flex-wrap relative z-10">
            <Link href="/giving-back" className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-sm">
              Giving Back
            </Link>
            <Link href="/our-story" className="bg-white text-brand-navy font-black px-12 py-5 rounded-full hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest text-sm">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
