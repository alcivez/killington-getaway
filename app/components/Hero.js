import Link from 'next/link'

export default function Hero({ 
  title, 
  subtitle, 
  image = "/images/hero/killington-k1.jpg",
  opacity = 1 // 1 is standard (50% navy, 20% blue, 20% multiply)
}) {
  const baseNavy = 50 * opacity;
  const baseBlue = 20 * opacity;
  const baseMultiply = 20 * opacity;

  return (
    <div className="relative w-full pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      {/* Overlay: Reduced opacity and enhanced blue emphasis */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `linear-gradient(to top right, rgba(10, 31, 56, ${baseNavy / 100}), rgba(45, 148, 227, ${baseBlue / 100}), transparent)`
        }}
      />
      <div 
        className="absolute inset-0 z-0 mix-blend-multiply" 
        style={{ backgroundColor: `rgba(10, 31, 56, ${baseMultiply / 100})` }}
      />
      
      <div className="relative max-w-4xl mx-auto px-6 z-10 text-center">
        <div className="inline-block w-12 h-1 bg-brand-blue mb-8 rounded-full shadow-[0_0_15px_rgba(45,148,227,0.5)]" />
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.95] tracking-tight drop-shadow-2xl mb-6 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide drop-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
