import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-navy font-body flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full -mr-64 -mt-64 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full -ml-64 -mb-64 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="w-32 h-32 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-6xl mx-auto mb-10 border border-white/10 shadow-2xl animate-bounce duration-[2000ms]">
          🏔️
        </div>
        <h1 className="text-7xl md:text-9xl font-heading font-black text-white mb-4 tracking-tight uppercase leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-green mb-8 tracking-tight uppercase">Lost on the <span className="text-white">Mountain?</span></h2>
        <p className="text-white/40 text-xl font-medium mb-12 leading-relaxed max-w-lg mx-auto">
          Looks like this trail doesn&apos;t exist. The page you&apos;re looking for may have moved, or never existed — much like that powder day everyone keeps talking about.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-brand-green text-white font-black px-12 py-5 rounded-full hover:bg-brand-green/90 transition-all shadow-xl uppercase tracking-widest text-xs"
          >
            Back to Base Camp
          </Link>
          <Link
            href="/listings"
            className="bg-transparent text-white border-2 border-white/20 font-black px-12 py-5 rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs"
          >
            Browse Listings
          </Link>
        </div>
      </div>
    </main>
  )
}
