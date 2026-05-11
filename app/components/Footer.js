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
      <div style={{ backgroundColor: '#121D21' }} className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">

          <div className="flex flex-col gap-6 items-center md:items-start">
            <Link href="/">
              <img src="/logo-white.png" alt="Killington Getaway" style={{ width: '130px' }} className="hover:opacity-80 transition-opacity cursor-pointer" />
            </Link>
            <div className="flex gap-4 items-center">
              <a href="https://facebook.com/killingtongetaway" className="text-gray-500 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://instagram.com/official_killingtongetaway" className="text-gray-500 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://x.com/visitkillington" className="text-gray-500 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">Explore</p>
            <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
            <a href="/affiliates" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Affiliates</a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">Community</p>
            <a href="/local-contractors" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Local Contractors</a>
            <a href="https://www.indeed.com/l-Killington,-VT-jobs.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Careers</a>
            <a href="https://www.pinkbike.com/buysell/list/?region=3&q=Vermont" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Buy / Sell Gear</a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">Support</p>
            <a href="/our-team" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Meet the Team</a>
            <a href="/contact-us" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact Support</a>
            <a href="mailto:hello@killingtongetaway.com" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Email Us</a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-10 flex flex-col items-center gap-4">
        <div className="flex gap-6 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <a href="https://www.trustpilot.com/review/killingtongetaway.com">
            <img src="https://killingtongetaway.com/wp-content/uploads/2023/08/trustpilot-logo-e1693295134401.png" alt="Trustpilot" style={{ height: '24px' }} />
          </a>
        </div>
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-4">Made in Vermont with ❤️ + ❄️</p>
        <p className="text-gray-700 text-[9px] font-medium opacity-50 uppercase tracking-widest">© 2026 Killington Getaway. All Rights Reserved.</p>
      </div>

    </footer>
  )
}
