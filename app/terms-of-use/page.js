'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero title="Terms of Service" subtitle="Last updated: January 1, 2026" />

      <section className="py-24 px-6 bg-gray-50/30">
        <div className="max-w-3xl mx-auto flex flex-col gap-16 text-gray-400 font-medium leading-relaxed">

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">1. Acceptance</h2>
            <p>By accessing or using killingtongetaway.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site. We reserve the right to modify these Terms at any time, and your continued use of the Site constitutes acceptance of those changes.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">2. Use of the Site</h2>
            <p className="mb-6">You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
            <ul className="space-y-4">
              {[
                'Use the Site in any way that violates applicable local, state, national, or international law',
                'Transmit any unsolicited or unauthorized advertising or promotional material',
                'Attempt to gain unauthorized access to any portion of the Site or any systems connected to the Site',
                'Use automated means to scrape, crawl, or index the Site without our prior written consent',
                'Submit false, misleading, or fraudulent listing information'
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-[10px] font-black mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">3. Intellectual Property</h2>
            <p>All content on the Site — including text, images, logos, graphics, and software — is the property of Killington Getaway or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our express written permission.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">4. Third-Party Content</h2>
            <p>The Site includes listings and information about third-party businesses. Killington Getaway does not endorse, warrant, or guarantee any third-party business, product, or service listed on the Site. We are not responsible for the accuracy, completeness, or quality of information provided by third-party businesses. Always verify hours, pricing, and availability directly with the business before your visit.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm border-brand-green/20">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">5. Affiliate Links</h2>
            <p>Some links on the Site are affiliate links. When you click an affiliate link and make a purchase, we may receive a commission. This does not affect the price you pay. We only include affiliate links for products and services we genuinely recommend.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">6. Warranties</h2>
            <p>The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Killington Getaway does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">7. Liability</h2>
            <p>To the fullest extent permitted by law, Killington Getaway shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or any information obtained from the Site, even if we have been advised of the possibility of such damages.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">8. Submissions</h2>
            <p>If you submit content to the Site (such as a listing, review, or contact form message), you grant Killington Getaway a non-exclusive, royalty-free, perpetual, worldwide license to use, reproduce, modify, and display that content in connection with the Site. You represent that you have the right to submit such content and that it does not violate any third-party rights.</p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Vermont, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Rutland County, Vermont.</p>
          </div>

          <div className="bg-brand-navy p-10 md:p-12 rounded-[3rem] border border-brand-navy shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16" />
            <h2 className="text-2xl font-heading font-black text-white mb-6 uppercase tracking-tight relative z-10">10. Contact Us</h2>
            <p className="text-white/40 relative z-10 mb-8">Questions about these Terms? Contact us at:</p>
            <div className="flex flex-col gap-4 relative z-10">
              <a href="mailto:hello@killingtongetaway.com" className="flex items-center gap-4 text-white font-black text-sm hover:text-brand-green transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 text-white/40 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="uppercase tracking-widest text-xs">hello@killingtongetaway.com</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
