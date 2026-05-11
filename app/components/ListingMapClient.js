'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./ListingMap'), { 
  ssr: false,
  loading: () => (
    <div className="mt-12">
      <div className="inline-flex items-center gap-3 mb-8">
        <span className="w-12 h-1 bg-brand-green rounded-full" />
        <h2 className="text-3xl font-heading font-black text-brand-navy tracking-tight uppercase">Location Map</h2>
      </div>
      <div className="w-full h-80 rounded-[2rem] bg-gray-100 animate-pulse flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-xs">
        Loading Terrain...
      </div>
    </div>
  )
})

export default function ListingMapClient({ listing }) {
  return <Map listing={listing} />
}
