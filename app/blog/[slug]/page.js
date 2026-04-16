'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const BLOG_POSTS = {
  'the-downhill-mountain-bike-thrill': {
    title: 'The Downhill Mountain Bike Thrill',
    category: 'Adventure',
    date: 'May 14, 2025',
    author: 'KG Reporter',
    img: '/images/blog/mountain-bike-thrill.webp',
    content: [
      { type: 'p', text: "Killington isn't just a winter destination. When the snow melts and the trails dry out, the Beast of the East transforms into one of New England's premier mountain bike destinations — and if you haven't ridden here in summer, you're missing out on half the mountain's magic." },
      { type: 'h2', text: 'The Bike Park Experience' },
      { type: 'p', text: "Killington Bike Park opens each June and runs through October, offering over 40 miles of singletrack and lift-served downhill. Whether you're a first-time rider or a seasoned gravity enthusiast, there's something here for every skill level. The blue-rated runs are buttery smooth — perfect for building speed and confidence — while the black and double-black lines will test even the most experienced shredders." },
      { type: 'p', text: "The K-1 Gondola serves as the primary uplift, whisking riders to the summit where views of the Green Mountains stretch endlessly in every direction. From up top, you can drop into Juggernaut, a long flowing descent that weaves through the forest, or hit the jump lines and technical rock gardens if you're looking for a challenge." },
      { type: 'h2', text: 'Best Trails for Beginners' },
      { type: 'p', text: "New to mountain biking? Don't be intimidated. Killington's bike school offers lessons for all ages, and the green trails near the base area give you plenty of space to learn bike handling before committing to anything steep. Instructors are patient, knowledgeable, and genuinely passionate about getting more people hooked on the sport." },
      { type: 'h2', text: 'Gear Up Before You Go' },
      { type: 'p', text: "Rentals are available at the base lodge — everything from trail bikes to full-suspension enduro rigs. A full-face helmet is highly recommended for lift-served riding. Northern Ski Works and Surefoot on the access road also carry gear and can help with any last-minute needs." },
      { type: 'h2', text: 'After the Ride' },
      { type: 'p', text: "Post-ride, the Killington access road has no shortage of cold beer and hearty food. The Foundry at Summit Pond is a local favorite for outdoor dining with views of the pond. The Rivershed offers Nashville-inspired comfort food that hits just right after a full day on the bike." },
      { type: 'p', text: "Whether you're a Vermont local looking for a weekend mission or a destination traveler building a summer itinerary, Killington's bike park belongs on your list." },
    ],
  },

  'the-allure-of-exclusivity-exploring-private-ski-areas': {
    title: 'The Allure of Exclusivity: Exploring Private Ski Areas',
    category: 'Skiing',
    date: 'January 12, 2025',
    author: 'KG Reporter',
    img: '/images/blog/private-ski-areas.webp',
    content: [
      { type: 'p', text: 'Private ski areas offer a distinctive and exclusive skiing experience, catering to those who seek a more personalized and secluded winter adventure. The article explores what distinguishes these resorts and their enduring appeal to enthusiasts who want more than a crowded weekend on a mega-resort.' },
      { type: 'h2', text: 'Intimate Atmosphere' },
      { type: 'p', text: 'Limited memberships create secluded, personalized environments that foster exclusivity and genuine tranquility. When you arrive at the base lodge and know everyone by name, the mountain feels entirely different.' },
      { type: 'h2', text: 'Customized Experiences' },
      { type: 'p', text: 'Members enjoy personalized services such as customized lesson plans, guided tours, and exclusive events. Instead of queuing for a group lesson, your instructor is already waiting for you at the lift.' },
      { type: 'h2', text: 'Unspoiled Terrain' },
      { type: 'p', text: 'Limited access maintains superior snow quality and grooming standards. With fewer bodies on the slopes, the mountain stays in better shape longer — a compelling reason to seek out private access even if you\'d rather ski a big public resort.' },
      { type: 'h2', text: 'Membership Benefits' },
      { type: 'p', text: 'Tailored membership packages include priority facility access, special events, and discounts on accommodation and dining. Some resorts extend benefits beyond winter, offering summer activities and exclusive year-round access to members and their families.' },
      { type: 'h2', text: 'Diverse Recreational Opportunities' },
      { type: 'p', text: 'Beyond skiing, members often access spa facilities, gourmet dining, and other winter sports. The experience extends well beyond runs and lifts — it\'s a full mountain lifestyle.' },
      { type: 'h2', text: 'Is It Worth It?' },
      { type: 'p', text: 'For those who crave the social energy of a big resort — the après scene, the crowds, the bustle — private areas will feel too quiet. But for skiers who measure a perfect day by the quality of snow under their skis and the absence of anyone else on the trail, there is no substitute. The exclusivity isn\'t just about status. It\'s about an entirely different relationship with the mountain.' },
    ],
  },

  'classic-general-stores-vermont': {
    title: "Vermont's Timeless Charm: Classic General Stores",
    category: 'Culture',
    date: 'January 11, 2025',
    author: 'KG Reporter',
    img: '/images/blog/general-stores-vermont.webp',
    content: [
      { type: 'p', text: "Nestled within the rolling hills and quaint villages of Vermont, the classic general store endures as a cornerstone of community life. These establishments are more than just retail spaces; they are living artifacts that have stood the test of time." },
      { type: 'h2', text: 'The Vermont Country Store — Weston' },
      { type: 'p', text: 'Founded in 1946, this institution captures nostalgia through vintage products, old-fashioned candies, and a remarkable collection of Vermont-made goods. The creaky floorboards and the aroma of homemade fudge create an ambiance that transports visitors to a bygone era.' },
      { type: 'h2', text: "Dan & Whit's General Store — Norwich" },
      { type: 'p', text: "Operating since 1891, this is one of America's oldest continuously operating general stores — a community hub where locals gather for coffee, conversation, and a sense of camaraderie." },
      { type: 'h2', text: 'Warren Store — Warren' },
      { type: 'p', text: 'Situated in the Mad River Valley, this establishment features a deli and locally-sourced products that reflect the character of the region. Stop in for a sandwich before hitting the slopes.' },
      { type: 'h2', text: 'Plymouth Artisan Cheese Country Store — Plymouth' },
      { type: 'p', text: "Located at President Calvin Coolidge's birthplace, this store merges historical significance with cheese sampling. Sample award-winning regional cheeses and explore nearly 250 years of Vermont heritage." },
      { type: 'h2', text: 'Rochester Café & Country Store — Rochester' },
      { type: 'p', text: 'This hybrid venue merges café and retail, featuring rustic décor, Vermont-made crafts, and a menu of local ingredients. A worthy detour off Route 100.' },
      { type: 'h2', text: 'Pierce\'s Store — Shrewsbury' },
      { type: 'p', text: "Operating since 1787, Pierce's remains a gathering place showcasing enduring community values. It's one of the oldest stores in New England and still very much in business." },
      { type: 'h2', text: 'Putney General Store — Putney' },
      { type: 'p', text: "Established in 1796, this historic store survived two fires in 2008–2009 and reopened in 2011. Its persistence is a testament to Vermont's refusal to let go of things worth keeping." },
      { type: 'p', text: "Vermont's general stores are places where time seems to slow down and the genuine hospitality of Vermonters shines through. Next time you're passing through a small town on your way to the mountain, pull over." },
    ],
  },

  'plan-your-perfect-ski-weekend-in-killington': {
    title: 'Plan Your Perfect Ski Weekend in Killington',
    category: 'Travel',
    date: 'January 3, 2025',
    author: 'KG Reporter',
    img: '/images/blog/ski-weekend-killington.webp',
    content: [
      { type: 'p', text: "Killington provides everything necessary for an unforgettable ski weekend — thrilling slopes, cozy après-ski establishments, and off-mountain activities for when you need a break from the hill. The destination caters to both experienced skiers and beginners seeking their first real winter getaway." },
      { type: 'h2', text: 'Day 1: Arrival and Warm-Up' },
      { type: 'p', text: "Begin your trip at Snowshed Lodge, where beginners can enjoy wide, forgiving trails perfect for building confidence. Killington Sports offers equipment rentals for all skill levels. In the afternoon, the Ramshead area provides a family-friendly vibe with green and blue trails ideal for easing back into ski legs after the drive." },
      { type: 'p', text: "Evening: Head to the Wobbly Barn Steakhouse for legendary steaks and Killington's most storied après-ski scene. Killington Road also offers Italian, pub fare, and plenty of other options." },
      { type: 'h2', text: 'Day 2: Peak Adventure' },
      { type: 'p', text: "Killington Peak is the highest lift-served point in Vermont. Ride up early, catch views that stretch to New Hampshire on a clear day, and work your way across the mountain. Advanced skiers drop into black diamond runs; intermediates carve the wide blue cruisers. Bear Mountain offers challenging expert terrain and terrain parks in the afternoon." },
      { type: 'p', text: "Evening: The Pickle Barrel Nightclub features live music most nights. Long Trail Brewing Co. is the quieter, craft-focused alternative if you'd rather end the night with a good pint." },
      { type: 'h2', text: 'Day 3: Off-Mountain Adventures' },
      { type: 'p', text: "Save your knees and explore beyond the mountain. Snowmobile Vermont offers guided excursions through pristine trails — a completely different way to see the landscape. Woodstock presents a quintessential New England village experience with historic streets, boutiques, and the Billings Farm & Museum." },
      { type: 'p', text: "Evening: The Foundry at Summit Pond offers lakeside dining with live music on select evenings. A perfect final-night dinner before heading home." },
      { type: 'h2', text: 'Quick Tips' },
      { type: 'p', text: "Purchase lift tickets online ahead of time for the best deals. Midweek visits avoid peak crowds but require planning around work schedules. Accommodations along Killington Road give you the best slope access and nightlife proximity. A vehicle is helpful for exploring neighboring areas like Woodstock and Rutland." },
      { type: 'p', text: "Killington operates as The Beast of the East — the largest ski resort in the eastern United States, with over 1,500 skiable acres, 73 miles of trails, and a peak elevation of 4,241 feet. The variety, combined with its vibrant après-ski culture and proximity to charming Vermont towns, makes it a comprehensive winter destination." },
    ],
  },

  'toughest-ski-runs-in-vermont': {
    title: 'Toughest Ski Runs in Vermont',
    category: 'Skiing',
    date: 'February 6, 2025',
    author: 'KG Reporter',
    img: '/images/blog/toughest-ski-runs.webp',
    content: [
      { type: 'p', text: "Vermont is a snowy paradise for folks who love to ski — but if you think the Green Mountains are all gentle rollers and beginner terrain, you haven't been on the right trails. These mountains have teeth." },
      { type: 'h2', text: 'Outer Limits — Killington' },
      { type: 'p', text: "Known as one of the steepest mogul trails in the East, Outer Limits at Killington is a rite of passage. The bumps can grow to car-hood height after a good snow cycle, and the pitch is steep enough to make you question your life choices at the top. Get here early on a powder day if you want to find anything resembling a smooth line." },
      { type: 'h2', text: "Devil's Fiddle — Killington" },
      { type: 'p', text: "Classified as a double-black diamond, Devil's Fiddle presents steep terrain, narrow passages, and wooded sections that require precise navigation and technical skill. It's not on the tourist trail — which is exactly the point." },
      { type: 'h2', text: 'The Superstar Glade — Killington' },
      { type: 'p', text: "This tree-lined descent combines speed with technical turning ability. The run demands both skiing proficiency and problem-solving skills while navigating through dense forest terrain. Famous for hosting FIS World Cup races, Superstar combines speed and technicality in ways that remind you why you fell in love with skiing." },
      { type: 'h2', text: 'Tips for Tackling the Hardest Runs' },
      { type: 'p', text: "Practice mogul skiing before you commit to Outer Limits. Master your turning technique on groomed blue runs first. Develop awareness of terrain variations — what looks like a standard pitch at the top of Vermont's hardest trails often gets much steeper 50 feet in. Most importantly, get appropriate equipment: a stiff boot and a shorter, more maneuverable ski makes a real difference on steep technical terrain." },
      { type: 'p', text: "Killington's challenging trails provide experienced skiers the opportunity to genuinely test their abilities while enjoying adventure on Vermont's premier mountain. The Beast of the East earned its nickname." },
    ],
  },

  'killington-resort-2024-25': {
    title: "What's New at Killington Resort for Winter 2024–25",
    category: 'News',
    date: 'December 3, 2024',
    author: 'KG Reporter',
    img: '/images/blog/killington-resort-2024.webp',
    content: [
      { type: 'p', text: "Killington Resort, known as The Beast of the East, is entering the 2024–25 winter season with significant changes — a new era of independence, expanded snowmaking, and major event programming that puts the mountain back on the global stage." },
      { type: 'h2', text: 'A New Era of Independence' },
      { type: 'p', text: "For the first time in its history, the resort is operating independently after separating from POWDR Corp. This transition enables the facility to concentrate on visitor needs while expanding its service offerings and implementing innovations designed specifically for the Killington community." },
      { type: 'h2', text: 'Opening Dates and Early Skiing' },
      { type: 'p', text: "The season launched November 14, 2024, with exclusive access for Killington, Beast 365, and Ikon passholders. Public skiing began November 15. Early-season terrain emphasized advanced runs supported by the resort's advanced snowmaking infrastructure, ensuring reliable coverage during unpredictable early-winter weather." },
      { type: 'h2', text: 'Stifel Killington Cup' },
      { type: 'p', text: "The highlight event returned during Thanksgiving weekend — an FIS Ski World Cup competition on the Superstar trail. The celebration included elite competitive racing, live entertainment, and family-friendly programming that drew tens of thousands of spectators to the mountain." },
      { type: 'h2', text: 'Expanded Snowmaking & Sustainability' },
      { type: 'p', text: "The facility invested in energy-efficient snow guns that decrease environmental impact while enabling earlier trail openings. The resort maintains a commitment to sustainability through recycling initiatives and waste reduction efforts across all operations." },
      { type: 'h2', text: 'Great Gulf Village' },
      { type: 'p', text: "This emerging residential, retail, and entertainment development at the base of the mountain reflects the facility's vision of becoming a true year-round destination — not just a ski resort, but a mountain community with diverse activities in every season." },
      { type: 'h2', text: 'Dining, Lodging, and Leisure' },
      { type: 'p', text: "On-mountain restaurants at K-1 Lodge and Peak Lodge feature enhanced menus for the new season. The Subie Shack returns with popular beverages and snacks. Lodging enhancements include improved shuttle access and family-friendly amenities throughout the resort area." },
    ],
  },

  'top-ski-trails-killington': {
    title: 'Top Skiing & Snowboarding Trails at Killington for Every Skill Level',
    category: 'Skiing',
    date: 'December 17, 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-trails-killington.webp',
    content: [
      { type: 'p', text: "Killington Resort offers a wide variety of trails that cater to skiers and snowboarders of all abilities, from first-timers to seasoned experts. With 73 miles of trails spread across six interconnected peaks, navigating the mountain for the first time can feel overwhelming. Here's the breakdown." },
      { type: 'h2', text: 'Beginner Trails' },
      { type: 'p', text: "Easy Street on Ramshead Mountain presents a wide and mellow trail offering an unintimidating slope ideal for practicing turns. Great Eastern spans multiple peaks as one of Killington's longest trails — great for beginners who want to enjoy the scenery while building confidence. Snowshed Slope features forgiving terrain and access to the Snowshed Express Quad." },
      { type: 'h2', text: 'Intermediate Trails' },
      { type: 'p', text: "Cruise Control delivers a wide and smooth run perfect for intermediate skiers looking for longer turns and high-speed carving. Ramshead Express combines groomed snow and natural features, offering a step up for progressing riders. Skyeburst attracts intermediate enthusiasts with great flow and is serviced by a high-speed lift for quick repeats." },
      { type: 'h2', text: 'Advanced Trails' },
      { type: 'p', text: "Outer Limits is known as the steepest mogul trail in the East — period. Cascade provides a fast, steep descent with breathtaking views of the Vermont valley. Superstar, famous for hosting FIS World Cup races, combines speed and technicality and serves as the benchmark run for serious skiers at Killington." },
      { type: 'h2', text: 'Freestyle and Terrain Parks' },
      { type: 'p', text: "The Stash is a natural-feature terrain park with log rails, wooden ramps, and creative obstacles built into the trees. Dream Maker suits intermediate and advanced freestylers, while Mouse Run Park gives beginners their first taste of freestyle terrain." },
      { type: 'h2', text: 'Planning Your Visit' },
      { type: 'p', text: "Review the Killington trail map before you arrive and stay updated on weather conditions and trail openings. Beginners should focus their first day on Ramshead and Snowshed. Intermediate riders will find the most variety on Bear Mountain and Skye Peak. Advanced skiers should head straight for Killington Peak and Bear Mountain." },
    ],
  },

  'park-city-ski-patrol-approves-strike': {
    title: 'Park City Ski Patrol Approves Strike Amid Contract Disputes',
    category: 'News',
    date: 'December 19, 2024',
    author: 'KG Reporter',
    img: '/images/blog/park-city-strike.webp',
    content: [
      { type: 'p', text: "Park City Mountain's ski patrol voted to authorize a strike during the peak holiday season amid ongoing contract negotiations with resort management. The vote represented a significant escalation in a labor dispute that has drawn attention across the ski industry." },
      { type: 'h2', text: 'Background' },
      { type: 'p', text: "The strike authorization vote came after months of failed negotiations between the Park City Professional Ski Patrol Association and Vail Resorts management. Key sticking points included wage increases, scheduling practices, and working conditions for patrol staff." },
      { type: 'h2', text: 'Industry Implications' },
      { type: 'p', text: "The dispute highlights broader tensions at large corporate-owned ski resorts, where frontline workers — the people most responsible for guest safety on the mountain — have increasingly pushed back against compensation structures that haven't kept pace with rising costs of living in resort communities." },
      { type: 'h2', text: 'What This Means for Visitors' },
      { type: 'p', text: "A ski patrol strike at a major resort during the holidays would have significant implications for operations. Ski patrol handles avalanche control, emergency response, and trail safety checks. Without adequate patrol coverage, resorts face difficult decisions about which terrain to keep open and how to maintain safety standards." },
      { type: 'h2', text: 'The Killington Perspective' },
      { type: 'p', text: "Killington, which operates independently following its separation from POWDR Corp, has emphasized its relationship with local staff as a key differentiator. Labor stability at a resort matters enormously for the guest experience — something the Park City situation makes clear." },
    ],
  },

  '2024-powder-pursuits': {
    title: '2024 Powder Pursuits: Ski & Snowboard Travel Trends in the Northeast',
    category: 'Research',
    date: 'January 17, 2024',
    author: 'John Eidson',
    img: '/images/blog/powder-pursuits-2024.webp',
    content: [
      { type: 'p', text: "A survey of 1,000 northeastern skiers and snowboarders paints a detailed picture of how winter sports enthusiasts plan their trips, where they stay, what they spend, and what they want from a ski destination. The report aims to help property owners and resort operators understand market dynamics in ski regions." },
      { type: 'h2', text: 'How Often They Ski' },
      { type: 'p', text: "43% of respondents ski or snowboard 2–5 times annually. 27% participate more than five times yearly. Frequent participants drive demand for premium services and advanced terrain — and represent a disproportionately high share of lift ticket and gear revenue." },
      { type: 'h2', text: 'Gear Investment' },
      { type: 'p', text: "22% of respondents purchase new gear seasonally. Among those skiing 5+ times per year, 35% upgrade their equipment annually. Customers really care about having the latest and greatest in gear tech — a finding that supports robust affiliate and gear retail opportunities in ski markets." },
      { type: 'h2', text: 'Vacation Property Trends' },
      { type: 'p', text: "32% of respondents already own vacation homes in ski areas, and another 33% are actively considering purchases. New Hampshire (28%), Vermont (25%), Maine (19%), and Massachusetts (18%) lead as target destinations. 48% plan to rent properties 2–5 weekends per year; 31% target 5+ weekends." },
      { type: 'h2', text: 'Lodging Preferences' },
      { type: 'p', text: "35% of respondents favor Airbnb or VRBO over traditional hotel stays — rising to 44% among frequent skiers. They desire home-like environments with personal touches: a well-equipped kitchen, a fireplace, a hot tub. 63% prefer overnight stays, making accommodation quality a key driver of destination choice." },
      { type: 'h2', text: 'Top Decision Factors' },
      { type: 'p', text: "Quality slopes rank first. Affordability ranks second. Season pass pricing ranks third. Vermont and Killington emerge consistently as top destinations when respondents are asked to name their preferred skiing regions in the Northeast." },
      { type: 'h2', text: 'Community and Economic Impact' },
      { type: 'p', text: "52% of respondents believe short-term rentals boost local economies. Only 22% expressed concerns about housing impacts in resort communities — a finding that may surprise observers who've followed the broader housing debate in ski towns like Stowe and Killington." },
    ],
  },

  'top-5-summer-ski-and-snowboard-camps': {
    title: 'Top 5 Summer Ski and Snowboard Camps',
    category: 'Training',
    date: 'April 2024',
    author: 'KG Reporter',
    img: '/images/blog/ski-snowboard-camp.webp',
    content: [
      { type: 'p', text: "Summer camp season is here. Whether you're chasing progression, want to lock in fundamentals before next winter, or simply can't go five months without being on snow, summer ski and snowboard camps offer a legitimate path to improvement. These are the top programs worth knowing about." },
      { type: 'h2', text: '1. Windells Camp — Oregon' },
      { type: 'p', text: "Windells has been a fixture in the ski and snowboard camp world for decades, running sessions on Mt. Hood's Palmer Snowfield through the summer. The combination of on-snow coaching, skate parks, BMX tracks, and a genuine youth culture makes this one of the best all-around summer programs." },
      { type: 'h2', text: '2. High Cascade Snowboard Camp — Oregon' },
      { type: 'p', text: "Also on Mt. Hood, High Cascade is the original summer snowboard camp and still among the best. World-class coaches, excellent park features, and a tight-knit community. The alumni list reads like a who's who of professional snowboarding." },
      { type: 'h2', text: '3. Momentum Ski Camps — Canada' },
      { type: 'p', text: "Run on the Horstman Glacier at Whistler Blackcomb, Momentum is widely considered the premier summer ski camp in North America. A mix of freeski, alpine, and mogul training makes it a destination for competitive and recreational skiers alike." },
      { type: 'h2', text: '4. USST Development Camps — Various' },
      { type: 'p', text: "The U.S. Ski and Snowboard Team runs development camps throughout the summer for competitive athletes. These are rigorous, technical, and focused on athletes who are serious about racing or freestyle progression." },
      { type: 'h2', text: '5. Killington Summer Camps' },
      { type: 'p', text: "Closer to home, Killington runs summer training programs on its glacier terrain park. Not the biggest program on this list, but the convenience for Northeast athletes and the quality of coaching make it a legitimate option for anyone who wants to stay sharp without crossing the country." },
    ],
  },

  'become-a-curated-expert': {
    title: 'Become a "Curated" Expert',
    category: 'Gear',
    date: 'February 2024',
    author: 'KG Reporter',
    img: '/images/blog/curated-expert.webp',
    content: [
      { type: 'p', text: "Curated.com is a platform that connects shoppers with real outdoor experts for personalized gear advice — and they're looking for knowledgeable skiers, snowboarders, and outdoor enthusiasts to join their network of paid experts." },
      { type: 'h2', text: 'How Curated Works' },
      { type: 'p', text: "Shoppers visit Curated looking for gear recommendations. Instead of reading anonymous reviews, they're matched with a real expert who asks questions, understands their needs, and makes personalized recommendations. Experts earn commissions on sales made through their recommendations." },
      { type: 'h2', text: 'Who Makes a Good Expert' },
      { type: 'p', text: "If you've been skiing or snowboarding for years, understand the difference between a 90mm and 110mm waist width, know what makes a boot stiff or soft, and can talk someone through the buying decision they're trying to make — you're a strong candidate. You don't need to be a professional athlete. You need to be genuinely helpful." },
      { type: 'h2', text: 'The Earning Potential' },
      { type: 'p', text: "Commission rates vary by category and product, but ski gear — with its high average order values — makes this a meaningful income stream for serious experts who build a following on the platform. Experts who consistently deliver good advice and high satisfaction ratings tend to receive more matches over time." },
      { type: 'h2', text: 'How to Apply' },
      { type: 'p', text: "Visit Curated.com and apply as an expert in your relevant category. The application process includes a brief assessment of your knowledge and experience. Accepted experts receive training on the platform, tools for managing customer conversations, and access to Curated's product catalog." },
      { type: 'p', text: "If you're already the person your friends call before buying skis, you might as well get paid for it." },
    ],
  },
}

const CATEGORY_COLORS = {
  'Adventure': '#00B4D8',
  'Skiing': '#0077A8',
  'Culture': '#6B7280',
  'Travel': '#059669',
  'News': '#DC2626',
  'Research': '#7C3AED',
  'Training': '#D97706',
  'Gear': '#EA580C',
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white font-sans">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-6xl mb-6">📝</p>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="inline-block text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00B4D8' }}>
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <div className="relative w-full" style={{ height: '440px' }}>
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-4xl mx-auto">
          <span
            className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: CATEGORY_COLORS[post.category] || '#00B4D8' }}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2">{post.title}</h1>
          <p className="text-gray-300 text-sm">By {post.author} &middot; {post.date}</p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-10 hover:opacity-70 transition-opacity" style={{ color: '#00B4D8' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </Link>

        <div>
          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.text}</h2>
            }
            return <p key={i} className="text-gray-600 leading-relaxed mb-5 text-base">{block.text}</p>
          })}
        </div>
      </article>

      <Footer />
    </main>
  )
}
