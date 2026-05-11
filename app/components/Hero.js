import Link from 'next/link'

export default function Hero({ title, subtitle, image = "/images/hero/killington-k1.jpg" }) {
  return (
    <div className="relative w-full pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/60 to-brand-blue/40 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-brand-navy/40 z-0" />
      
      <div className="relative max-w-4xl mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.95] tracking-tight drop-shadow-xl mb-6 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-xl md:text-2xl font-medium tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
