'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="bg-white border-b border-gray-100 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-gray-600 text-sm leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Killington Getaway (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit killingtongetaway.com (the &quot;Site&quot;).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, such as when you submit a contact form, sign up for our newsletter, or submit a business listing. This may include:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-gray-500">
              <li>Name and email address</li>
              <li>Phone number (if provided)</li>
              <li>Business name and address (for listing submissions)</li>
              <li>Any other information you choose to include in your messages to us</li>
            </ul>
            <p className="mt-3">We also automatically collect certain information when you visit the Site, including your IP address, browser type, operating system, referring URLs, and pages visited.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 text-gray-500">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you newsletters and updates (only if you opt in)</li>
              <li>Improve and personalize the Site experience</li>
              <li>Analyze usage trends and monitor Site performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to collect information about how you use the Site. Cookies are small data files stored on your browser. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of the Site may not function properly.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>Our Site may contain links to third-party websites, including affiliate partners such as Backcountry.com, and embedded content from Airbnb. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Affiliate Disclosure</h2>
            <p>Killington Getaway participates in affiliate marketing programs. Some links on this Site are affiliate links — if you make a purchase through one of these links, we may earn a small commission at no additional cost to you. We only recommend products and services we genuinely believe in.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing of your data. To exercise these rights, please contact us at <a href="mailto:hello@killingtongetaway.com" className="font-semibold hover:opacity-70" style={{ color: '#00B4D8' }}>hello@killingtongetaway.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@killingtongetaway.com" className="font-semibold hover:opacity-70" style={{ color: '#00B4D8' }}>hello@killingtongetaway.com</a> or by mail at Killington Getaway, Killington, Vermont 05751.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
