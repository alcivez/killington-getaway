'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Terms of Service</h1>
          <p className="text-gray-400">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-gray-600 text-sm leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using killingtongetaway.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site. We reserve the right to modify these Terms at any time, and your continued use of the Site constitutes acceptance of those changes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of the Site</h2>
            <p className="mb-3">You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-gray-500">
              <li>Use the Site in any way that violates applicable local, state, national, or international law</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or any systems connected to the Site</li>
              <li>Use automated means to scrape, crawl, or index the Site without our prior written consent</li>
              <li>Submit false, misleading, or fraudulent listing information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>All content on the Site — including text, images, logos, graphics, and software — is the property of Killington Getaway or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our express written permission.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Listings and Content</h2>
            <p>The Site includes listings and information about third-party businesses. Killington Getaway does not endorse, warrant, or guarantee any third-party business, product, or service listed on the Site. We are not responsible for the accuracy, completeness, or quality of information provided by third-party businesses. Always verify hours, pricing, and availability directly with the business before your visit.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Affiliate Links</h2>
            <p>Some links on the Site are affiliate links. When you click an affiliate link and make a purchase, we may receive a commission. This does not affect the price you pay. We only include affiliate links for products and services we genuinely recommend.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
            <p>The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Killington Getaway does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Killington Getaway shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or any information obtained from the Site, even if we have been advised of the possibility of such damages.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. User-Submitted Content</h2>
            <p>If you submit content to the Site (such as a listing, review, or contact form message), you grant Killington Getaway a non-exclusive, royalty-free, perpetual, worldwide license to use, reproduce, modify, and display that content in connection with the Site. You represent that you have the right to submit such content and that it does not violate any third-party rights.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Vermont, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Rutland County, Vermont.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:hello@killingtongetaway.com" className="font-semibold hover:opacity-70" style={{ color: '#00B4D8' }}>hello@killingtongetaway.com</a>.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
