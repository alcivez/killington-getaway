const fetch = require('node-fetch');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const listings = JSON.parse(fs.readFileSync('listings.json'));
const outputDir = path.join('public', 'images', 'listings');
fs.mkdirSync(outputDir, { recursive: true });

async function downloadAndOptimize(listing) {
  if (!listing.image) return listing;
  const ext = path.extname(new URL(listing.image).pathname) || '.jpg';
  const slug = listing.url.replace('https://killingtongetaway.com/listing/', '').replace('/', '');
  const filename = `${slug}.webp`;
  const outputPath = path.join(outputDir, filename);

  try {
    const res = await fetch(listing.image, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const buffer = await res.buffer();
    await sharp(buffer)
      .resize(800, 600, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ ${slug}`);
    return { ...listing, localImage: `/images/listings/${filename}` };
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
    return listing;
  }
}

async function run() {
  const updated = [];
  for (const listing of listings) {
    const result = await downloadAndOptimize(listing);
    updated.push(result);
    await new Promise(r => setTimeout(r, 200));
  }
  fs.writeFileSync('listings.json', JSON.stringify(updated, null, 2));
  console.log('\nAll images downloaded and optimized → public/images/listings/');
}

run();