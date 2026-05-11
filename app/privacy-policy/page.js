'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero title="Privacy Policy" subtitle="Last updated: January 1, 2026" />

      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-3xl mx-auto flex flex-col gap-16 text-gray-400 font-medium leading-relaxed">

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">1. Introduction</h2>
            <p>Killington Getaway (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit killingtongetaway.com (the &quot;Site&quot;).</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">2. Information We Collect</h2>
            <p className="mb-6">We collect information you provide directly to us, such as when you submit a contact form, sign up for our newsletter, or submit a business listing. This may include:</p>
            <ul className="space-y-4">
              {[
                'Name and email address',
                'Phone number (if provided)',
                'Business name and address (for listing submissions)',
                'Any other information you choose to include in your messages to us'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-[10px] font-black mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8">We also automatically collect certain information when you visit the Site, including your IP address, browser type, operating system, referring URLs, and pages visited.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">3. How We Use Your Information</h2>
            <p className="mb-6">We use the information we collect to:</p>
            <ul className="space-y-4">
              {[
                'Respond to your inquiries and provide customer support',
                'Send you newsletters and updates (only if you opt in)',
                'Improve and personalize the Site experience',
                'Analyze usage trends and monitor Site performance',
                'Comply with legal obligations'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-[10px] font-black mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">4. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to collect information about how you use the Site. Cookies are small data files stored on your browser. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of the Site may not function properly.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">5. Third-Party Services</h2>
            <p>Our Site may contain links to third-party websites, including affiliate partners such as Backcountry.com, and embedded content from Airbnb. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm border-brand-green/20">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">6. Affiliate Disclosure</h2>
            <p>Killington Getaway participates in affiliate marketing programs. Some links on this Site are affiliate links — if you make a purchase through one of these links, we may earn a small commission at no additional cost to you. We only recommend products and services we genuinely believe in.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">7. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing of your data. To exercise these rights, please contact us at <a href="mailto:hello@killingtongetaway.com" className="text-brand-green font-black uppercase tracking-widest text-xs ml-1 hover:underline">hello@killingtongetaway.com</a>.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">9. Children&apos;s Privacy</h2>
            <p>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised policy.</p>
          </div>

          <div className="bg-brand-navy p-10 md:p-12 rounded-[3rem] border border-brand-navy shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16" />
            <h2 className="text-2xl font-heading font-black text-white mb-6 uppercase tracking-tight relative z-10">11. Contact Us</h2>
            <p className="text-white/40 relative z-10 mb-8">If you have questions about this Privacy Policy, please contact us:</p>
            <div className="flex flex-col gap-4 relative z-10">
              <a href="mailto:hello@killingtongetaway.com" className="flex items-center gap-4 text-white font-black text-sm hover:text-brand-green transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 text-white/40 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="uppercase tracking-widest text-xs">hello@killingtongetaway.com</span>
              </a>
              <div className="flex items-center gap-4 text-white/40 font-black text-sm">
                <div className="w-10 h-10 rounded-full bg-white/5 text-white/40 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <span className="uppercase tracking-widest text-xs">Killington, Vermont 05751</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
