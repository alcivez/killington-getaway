import sharp from 'sharp'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import https from 'https'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/images/blog')

const IMAGES = [
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Donwhill-Mountain-Bike.jpeg',
    name: 'mountain-bike-thrill',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/01/private-ski-areas.jpeg',
    name: 'private-ski-areas',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/01/Putney-GS-1400x1050.jpeg',
    name: 'general-stores-vermont',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/12/pexels-photo-19459816-19459816.jpg',
    name: 'ski-weekend-killington',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/01/tough-ski-run-1400x866.png',
    name: 'toughest-ski-runs',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/12/Killington-Lodge-1962.webp',
    name: 'killington-resort-2024',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/12/pexels-photo-13356970-13356970.jpg',
    name: 'ski-trails-killington',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/12/Park-City-Strike.jpeg',
    name: 'park-city-strike',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/01/2024-Powder-Pursuits-In-Depth-Analysis-of-Ski-and-Snowboard-Travel-and-Accommodation-Trends-in-the-Northeast.png',
    name: 'powder-pursuits-2024',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/04/Ski-and-Snowboard-Camp.jpeg',
    name: 'ski-snowboard-camp',
  },
  {
    url: 'https://killingtongetaway.com/wp-content/uploads/2024/02/Screen-Shot-2024-02-26-at-11.00.52-AM.png',
    name: 'curated-expert',
  },
]

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
  })
}

async function processImage(img) {
  const outPath = path.join(OUT_DIR, `${img.name}.webp`)
  console.log(`Downloading: ${img.name}...`)
  try {
    const buf = await fetchBuffer(img.url)
    await sharp(buf)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath)
    console.log(`  ✓ Saved → public/images/blog/${img.name}.webp`)
  } catch (err) {
    console.error(`  ✗ Failed ${img.name}: ${err.message}`)
  }
}

for (const img of IMAGES) {
  await processImage(img)
}
console.log('\nAll done.')
