const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const listings = JSON.parse(fs.readFileSync('listings.json'));

async function scrapeListingPage(listing) {
  try {
    const res = await fetch(listing.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const $ = cheerio.load(html);

    // Remove nav, header, footer from consideration
    $('nav, header, footer, .site-header, .site-footer, .main-navigation').remove();

    // Image — skip the logo, get the first real upload image
    let image = '';
    $('img[src*="uploads"]').each((i, el) => {
      const src = $(el).attr('src') || '';
      if (!src.includes('logo') && !src.includes('cropped') && !image) {
        image = src;
      }
    });

    // Categories — from the listing tags section only
    const categories = [];
    $('.listing-tags a, .tags a, [class*="tag"] a, [class*="category"] a').each((i, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 40 && !categories.includes(text)) {
        categories.push(text);
      }
    });

    // Get the full page text for regex extraction
    const fullText = $('body').text();

    // Address — look for the Contact Info block
    let address = '';
    const addressMatch = fullText.match(/Location\s+([\w\s,\.#]+(?:VT|Vermont|NH|MA|NY|United States)[\w\s,\.]*\d{5})/i);
    if (addressMatch) address = addressMatch[1].trim();

    // Phone — clean number pattern
    let phone = '';
    const phoneMatch = fullText.match(/Phone\s+(\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4})/i);
    if (phoneMatch) phone = phoneMatch[1].trim();

    // Email
    let email = '';
    const emailMatch = fullText.match(/Email\s+([\w.\-]+@[\w.\-]+\.\w+)/i);
    if (emailMatch) email = emailMatch[1].trim();

    // Website — from Contact Info block only
    let website = '';
    const websiteMatch = fullText.match(/Website\s+(https?:\/\/[\w.\-\/]+)/i);
    if (websiteMatch) website = websiteMatch[1].trim();

    // Hours — first clean hours pattern found
    let hours = '';
    const hoursMatch = fullText.match(/((?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Daily|Mon|Tue|Wed|Thu|Fri|Sat|Sun)[^\n]{5,80}(?:AM|PM|am|pm))/);
    if (hoursMatch) hours = hoursMatch[1].trim();

    // Description — first real paragraph
    let description = '';
    $('p').each((i, el) => {
      const text = $(el).text().trim();
      if (!description && text.length > 40 && !text.includes('Claim') && !text.includes('navigation')) {
        description = text;
      }
    });

    console.log(`  ✓ ${listing.name}`);
    return { ...listing, image, categories, address, phone, email, website, hours, description };

  } catch (e) {
    console.log(`  ✗ Error on ${listing.url}: ${e.message}`);
    return listing;
  }
}

async function run() {
  const enriched = [];
  for (let i = 0; i < listings.length; i++) {
    process.stdout.write(`[${i + 1}/${listings.length}] `);
    const result = await scrapeListingPage(listings[i]);
    enriched.push(result);
    await new Promise(r => setTimeout(r, 400));
  }
  fs.writeFileSync('listings.json', JSON.stringify(enriched, null, 2));
  console.log(`\nDone! ${enriched.length} listings saved.`);
}

run();