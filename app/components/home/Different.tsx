import React from 'react'
import DifferentCard from '../card/DifferentCard'

export default function Different() {
    const differents_1 = [
        {
            title: 'Saudi Ecosystem Awareness',
            description: 'Deep specialization in Saudi football culture, league dynamics, and the unique environment of the region.',
            image:'/different/saudi.png',
            width: 377,
            height: 369,
            pixelSnowcolor: '#9A35FF',
            hoverColor: '#331057',
            borderColor: '#1D1D1D',
            hoverBorderColor: '#8000FF',
            hoverShadowColor: '#8000FF',
            className:'flex-2'

        },
    
        {
            title: 'Context-First Analysis',
            description: 'Every evaluation starts with context — league, role, team system — before metrics are applied.',
            image:'/different/context.png',
            width: 390,
            height: 343,
            pixelSnowcolor: '#9A35FF',
            hoverColor: '#331057',
            borderColor: '#1D1D1D',
            hoverBorderColor: '#8000FF',
            hoverShadowColor: '#8000FF',
            className:'flex-1'
        },        
       

    ]
    const differents_2 = [
        {
            title: 'Multi-Dimensional Intelligence',
            description: 'Combining performance, tactical, physical, and psychological data into one coherent intelligence layer.',
            image:'/home/different/multi.png',
            width: 322,
            height: 239,
            pixelSnowcolor: '#D4A843',
            hoverColor: '#463C0B',
            borderColor: '#1D1D1D',
            hoverBorderColor: '#D4A843',
            hoverShadowColor: '#D4A843',
            className:'flex-1'
        },

    
        {
            title: 'Speed vs Traditional Scouting',
            description: 'Quickly delivered structured intelligence to support modern transfer and match-prep windows.',
            image:'/home/different/speed.png',
            width: 692,
            height: 332,
            pixelSnowcolor: '#D4A843',
            hoverColor: '#463C0B',
            borderColor: '#1D1D1D',
            hoverBorderColor: '#D4A843',
            hoverShadowColor: '#D4A843',
            className:'flex-2'
        },
    ]
  return (
    <section className='container '>
      <div className='flex flex-col gap-8 md:gap-12'>
        <h2 className='text-white'>
           What makes us <br/> different
        </h2>
        <div className='flex flex-col xl:flex-row gap-8 xl:gap-6'>
            {differents_1.map((different, index) => (
                <DifferentCard key={index}
                image={different.image}
                title={different.title}
                description={different.description}
                width={different.width}
                height={different.height}
                pixelSnowcolor={different.pixelSnowcolor}
                hoverColor={different.hoverColor}
                borderColor={different.borderColor}
                hoverBorderColor={different.hoverBorderColor}
                hoverShadowColor={different.hoverShadowColor}
                className={different.className}
                />
            ))}
        </div>
        <div className='flex flex-col xl:flex-row gap-8 xl:gap-6'>
            {differents_2.map((different, index) => (
                <DifferentCard key={index}
                image={different.image}
                title={different.title}
                description={different.description}
                width={different.width}
                height={different.height}
                pixelSnowcolor={different.pixelSnowcolor}
                hoverColor={different.hoverColor}
                borderColor={different.borderColor}
                hoverBorderColor={different.hoverBorderColor}
                hoverShadowColor={different.hoverShadowColor}
                className={different.className}
                />
            ))}
        </div>
      </div>
    </section>
  )
}
