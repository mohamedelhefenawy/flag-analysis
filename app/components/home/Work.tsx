import React from 'react'
import WorkCard from '../card/WorkCard'
const works = [
  {
    image: '/home/work/club.png',
    title: 'Clubs',
    description: 'Technical departments and sporting directors seeking structured intelligence.',
    width: 400,
    height: 400,
  },
  {
    image: '/home/work/coach.png',
    title: 'Coaches',
    description: 'Match preparation, opponentanalysis, and player evaluation support.',
    width: 400,
    height: 400,
  },
  {
    image: '/home/work/analytics.png',
    title: 'Analysts',
    description: 'Data frameworks and intelligence products for professional workflows.',
    width: 400,
    height: 400,
  },
  {
    image: '/home/work/tv.png',
    title: 'Media',
    description: 'Evidence-based insights and visuals for football media and broadcast.',
    width: 400,
    height: 400,
  },
]

export default function Work() {
  return (
    <section className='container'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <div className='flex flex-col gap-5'>
        <h3 className='text-brand-500'>Our Audience</h3>
        <h2 className='text-white '>
        Who We Work <br/> With
        </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-8'>
          {works.map((work, index) => (
            <WorkCard key={index}
              image={work.image}
              title={work.title}
              description={work.description}
              width={work.width}
              height={work.height}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
