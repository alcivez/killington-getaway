import Link from 'next/link'

export default function Unauthorized() {
  return (
    <main className="min-h-screen bg-brand-navy font-body flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full -mr-64 -mt-64 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full -ml-64 -mb-64 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="w-32 h-32 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-6xl mx-auto mb-10 border border-white/10 shadow-2xl animate-bounce duration-[2000ms]">
          🎫
        </div>
        <h1 className="text-7xl md:text-9xl font-heading font-black text-white mb-4 tracking-tight uppercase leading-none">401</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-green mb-8 tracking-tight uppercase">Ticket <span className="text-white">Required</span></h2>
        <p className="text-white/40 text-xl font-medium mb-12 leading-relaxed max-w-lg mx-auto">
          You need to be signed in to access this area. Grab your lift ticket — log in and we&apos;ll get you back on the mountain in no time.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-xs"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="bg-transparent text-white border-2 border-white/20 font-black px-12 py-5 rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs"
          >
            Get Help
          </Link>
        </div>
      </div>
    </main>
  )
}
