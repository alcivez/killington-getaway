'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#121D21' }} className="text-white text-center">

      {/* Brand Partners */}
      <div className="py-8 border-b border-gray-700 px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">Ski Brand Partners</p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <a href="https://www.stio.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/stio-logo-1.png" alt="Stio" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <a href="https://www.smithoptics.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/Smith-Optics-logo.png" alt="Smith" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <a href="https://www.hellyhansen.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/helly-hansen.png" alt="Helly Hansen" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <a href="https://www.dakine.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/2560px-Dakine.png" alt="Dakine" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
          <a href="https://www.clifbar.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/09/bar-clif-logo-1-e1694093311566.png" alt="Clif Bar" style={{ height: '40px', width: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div style={{ backgroundColor: '#121D21' }} className="px-6 py-12 border-b border-gray-700">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

          <div className="flex flex-col gap-3 items-center md:items-start">
            <Link href="/">
              <img src="/logo-white.png" alt="Killington Getaway" style={{ width: '120px', marginTop: '-30px' }} className="hover:opacity-80 transition-opacity cursor-pointer" />
            </Link>
            <div className="flex gap-3 items-center" style={{ marginTop: '-5px' }}>
              <a href="https://facebook.com/killingtongetaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://instagram.com/official_killingtongetaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://x.com/visitkillington" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://www.linkedin.com/company/killington-getaway" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            </div>
            <a href="https://www.trustpilot.com/review/killingtongetaway.com" target="_blank" rel="noopener noreferrer">
              <img src="https://killingtongetaway.com/wp-content/uploads/2023/08/trustpilot-logo-e1693295134401.png" alt="Trustpilot" style={{ height: '31px' }} />
            </a>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">More Info</p>
            <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="/terms-of-use" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="/affiliates" className="text-gray-400 hover:text-white text-sm">Affiliates</a>
            <a href="/certified-b-corp" className="text-gray-400 hover:text-white text-sm">Sustainability</a>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">For Locals</p>
            <a href="/local-contractors" className="text-gray-400 hover:text-white text-sm">Find A Contractor</a>
            <a href="https://www.indeed.com/l-Killington,-VT-jobs.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">Jobs</a>
            <a href="/press-inquiries" className="text-gray-400 hover:text-white text-sm">Press</a>
            <a href="https://www.pinkbike.com/buysell/list/?region=3&q=Vermont" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">Buy / Sell</a>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">Company</p>
            <a href="/our-team" className="text-gray-400 hover:text-white text-sm">Our Team</a>
            <a href="/contact-us" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
            <a href="tel:+19494366769" className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (949) 436-SNOW
            </a>
            <a href="mailto:hello@killingtongetaway.com" className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              hello@killingtongetaway.com
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 flex flex-col items-center gap-2">
        <p className="text-gray-400 text-sm">Made in VT with ❤️ + ❄️</p>
        <p className="text-gray-500 text-xs">© 2026 Killington Getaway. All Rights Reserved.</p>
      </div>

    </footer>
  )
}
