'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const TEAM = [
  { 
    name: 'Jonas Adler', 
    role: 'Founder', 
    img: '/images/team/jonas-headshot.png',
    bio: "Jonas is an entrepreneur and a lover of all things snow. He attended college in Vermont, and ever since 2006, has owned a cozy ski house in Killington. After years of exploring the slopes at countless ski resorts around the world, he couldn't help but notice there was a real need for a website that could simplify the lives of out-of-town skiers and riders. KillingtonGetaway.com was born. His mission is simple yet powerful: to create an online platform that not only connects fellow skiers and riders with businesses but also provides them with all the essential information they need to have an unforgettable skiing experience - less time searching and more time skiing!"
  },
  { 
    name: 'Paul Savage', 
    role: 'Advisor', 
    img: '/images/team/paul-headshot.png',
    bio: "Meet Paul Savage who hails from the mighty mountains of Ireland and learned to snowboard in the German and Austrian alps. He is proud \"honorary Vermonter\" who owns a ski home in Vermont and aims for 30+ days on the slopes. He is a beer aficionado and loves all things Apre' and tech. Paul has helped to run and advise a good number of tech start-ups in Boston and cooks an amazing eggs benedict."
  },
  { 
    name: 'Marc Sullivan', 
    role: 'Ambassador', 
    img: '/images/team/marc-headshot.png',
    bio: "Marc (aka “Sully”) is seasoned skier, proud Vermonter, and number-crunching aficionado. When he is not busy ripp’n trees at Killington or Pico you can find him mountain biking with his family or spending time with his dogs. Over the years, Marc has had the incredible opportunity to work at some of Vermont's top-ranked resorts. From managing budgets to ensuring financial stability, he thrives on helping businesses reach their full potential. His precision is unmatched - whether it's analyzing financial data or crafting the perfect slope strategy."
  },
  { 
    name: 'Jorge Jaramillo', 
    role: 'Web Developer', 
    img: '/images/team/jorge-headshot.png',
    bio: "Jorge is a web developer extraordinaire with a knack for quick thinking and cutting-edge tech skills. Admittedly he has never really strapped on a pair of skis or hopped on a snowboard, but that hasn't stopped him from carving his own path in the digital world. As a founding team member of Killington Getaway, he has been instrumental in bringing our vision to life and earned a spot on the team."
  },
  { 
    name: 'John Eidson', 
    role: 'Public Relations', 
    img: '/images/team/john-headshot.png',
    bio: "John is a content editor, media manager, and public relations guru, with a passion for helping startups find their voice and make an impact. When he is not busy shaping brands, you can find him at his family ski house nestled in the picturesque mountains of Vermont. John thrives on helping businesses better define their mission on a deeper level and of course always looking for those deeper powder stashes."
  },
]

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      <Hero 
        title="Our Team" 
        subtitle="The dedicated locals behind Killington Getaway."
      />

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy tracking-tight uppercase mb-6">The People Behind the Guide</h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-3xl mx-auto">
              At Killington Getaway, we take immense pride in our roots as Vermonters — a place where our love for skiing and the thrill of adventure runs deep in our veins. We&apos;re not just enthusiasts; we&apos;re dedicated adventurers who cherish every moment spent in this beautiful state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-[3rem] p-10 shadow-premium border border-gray-50 group hover:border-brand-green/30 transition-all flex flex-col items-center text-center h-full">
                <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-8 border-gray-50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-tight mb-2">{member.name}</h3>
                <p className="text-brand-green font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>
                <div className="w-10 h-1 bg-gray-100 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
                <p className="text-gray-400 font-medium leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy border-t border-white/10 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight uppercase mb-8">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-medium">
            Our mission is to share the magic of Vermont, encouraging and assisting fellow travelers to savor its boundless wonders. With a profound appreciation for our state&apos;s natural beauty and insatiable wanderlust, we&apos;re on a journey to help you discover Vermont at its absolute best. Whether you&apos;re a seasoned skier or a novice, an outdoor enthusiast, or a leisurely explorer — we&apos;re here to guide and inspire your travels, making every experience in this picturesque state truly unforgettable.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
