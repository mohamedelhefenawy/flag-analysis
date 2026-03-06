import TacticalCard from '../components/card/TacticalCard'
import Title_sectoin from '../components/section/Title_sectoin'
import React from 'react'
import Image from 'next/image'
export const metadata = ['High Press','Direct','Low Block','Counter-heavy','Possession-based']
const tacticalCards = [
    {
        title: '58%',
        description: 'Possession %',
        color: 'bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)]',
        hoverColor: '#000000',
        borderColor: 'border-secondary-800',
        hoverBorderColor: '#D4A843',
        pixelSnowcolor: '#D4A843',
    },
    {
        title: '7.2',
        description: 'Verticality Index',
        color: 'bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)]',
        hoverColor: '#000000',
        borderColor: 'border-secondary-800',
        hoverBorderColor: '#D4A843',
        pixelSnowcolor: '#D4A843',
    },
    {
        title: '4.1',
        description: 'Fast Breaks / Match',
        color: 'bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)]',
        hoverColor: '#000000',
        borderColor: 'border-secondary-800',
        hoverBorderColor: '#D4A843',
        pixelSnowcolor: '#D4A843',
    },
    {
        title: '22%',
        description: 'Set-piece Dependency',
        color: 'bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)]',
        hoverColor: '#000000',
        borderColor: 'border-secondary-800',
        hoverBorderColor: '#D4A843',
        pixelSnowcolor: '#D4A843',
    }]

const counterCards = [
    {
        title: 'Counter-Attack Metrics',
        title_1: 'Counter attacks / match',
        description_1: '3.8',
        title_2: 'Fast breaks leading to shots',
        description_2: '1.4',
        title_3: 'xThreat from transitions',
        description_3: '0.32',
        title_4: 'Direct attacks',
        description_4: '6.1',
   
    },
    {
        title: 'Progression Metrics',
        title_1: 'Progressive passes',
        description_1: '42.3',
        title_2: 'Entries to final third',
        description_2: '28.7',
        title_3: 'Carries into box',
        description_3: '5.2',
        title_4: 'Long balls accuracy',
        description_4: '61%',
   
    },
]

const strengthsCards = ['High pressing intensity in opponent half',
    'Quick transition to attack after recovery','Set-piece threat from wide delivery',
    'Central overloads in build-up phase','Strong aerial dominance in both boxes']
    const weaknessCards = ['Vulnerable to long balls over high defensive line','Low compactness during defensive transitions',
    'Over-reliance on left flank for chance creation','Inconsistent pressing triggers in midfield','Slow recovery after set-piece corners']

export default function page() {
  return (
    <main className='flex flex-col xl:gap-[160px] md:gap-[120px] gap-20 mt-20  '>
      <Title_sectoin
        subtitle="TEAM INTELLIGENCE"
        title="Team Tactical Analysis"
        description="Tactical identity and evidence-based patterns — built for coaches, clubs, and media."
        color="brand-200"
      >
        <div className='hidden md:flex items-start justify-start gap-2 mb-4'>
          {metadata.map((item, index) => (
            <div key={index} className='flex items-center justify-center gap-2 bg-[#9A35FF33] px-4 py-2 rounded-[20px]'>
              <p className='text-brand-200 font-normal'>{item}</p>
            </div>
          ))}
        </div>
        <Image src='/tactical/team.png' alt='team_tactical' width={1160} height={420} className='w-full h-full' />
      </Title_sectoin>
      <Title_sectoin
        subtitle="Possession vs Transition"
        title="Team Tactical Analysis"
        description="Our proprietary index system evaluates players across four key dimensions, calibrated by position."
        color="secondary-500"
      >
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {tacticalCards.map((item, index) => (
            <TacticalCard key={index} title={item.title} description={item.description} color={item.color} hoverColor={item.hoverColor} borderColor={item.borderColor} hoverBorderColor={item.hoverBorderColor}  />
          ))}
        </div>
        <Image src='/tactical/position_2.png' alt='position_tactical' width={1152} height={719} className='object-contain w-full rounded-[24px]' />
      </Title_sectoin>
      <Title_sectoin
        subtitle="TRANSITION INTELLIGENCE"
        title="Counter-Attack & Progression"
        description="Measuring how the team transitions into dangerous areas and creates threat."
        color="brand-200"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {counterCards.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 rounded-[16px] border border-brand-500 py-8 px-6 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#220a3a_75%,#220a3a_100%)]'>
                     <h3 className='text-[#F0F0F0] text-[24px] font-semibold'>{item.title}</h3>
                     <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between border-b border-brand-900 py-3 gap-2'>
                                <h4 className='text-[#F0F0F0] text-[16px] font-semibold'>{item.title_1}</h4>
                                <p className='text-brand-200 text-[16px] font-semibold'>{item.description_1}</p>
                            </div>
                            <div className='flex items-center justify-between border-b border-brand-900 py-3 gap-2'>
                                <h4 className='text-[#F0F0F0] text-[16px] font-semibold'>{item.title_2}</h4>
                                <p className='text-brand-200 text-[16px] font-semibold'>{item.description_2}</p>
                            </div>
                            <div className='flex items-center justify-between border-b border-brand-900 py-3 gap-2'>
                                <h4 className='text-[#F0F0F0] text-[16px] font-semibold'>{item.title_3}</h4>
                                <p className='text-brand-200 text-[16px] font-semibold'>{item.description_3}</p>
                            </div>
                            <div className='flex items-center justify-between border-b border-brand-900 py-3 gap-2'>
                                <h4 className='text-[#F0F0F0] text-[16px] font-semibold'>{item.title_4}</h4>
                                <p className='text-brand-200 text-[16px] font-semibold'>{item.description_4}</p>
                            </div>
                     </div>
                     </div>
                    ))}

            </div>
      </Title_sectoin>
      <Title_sectoin
        subtitle="TACTICAL PROFILE"
        title="Tactical Strengths & Weaknesses"
        description=" "
        color="secondary-500"
      >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
               {
                ['Strengths','Weaknesses'].map((item, index) => (
                    <div key={index} className='flex flex-col gap-8 '>
                     <h3 className="text-[16px] font-semibold" style={{ color: item === 'Strengths' ? '#4ADE80' : '#F04438' }}>{item}</h3>
                     <div className='flex flex-col gap-6'>
                        {item === 'Strengths' ? strengthsCards.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 justify-start'>
                                <span className='text-success-600 font-semibold'>✔</span>
                                <p className='text-[#BBF1D0] text-[16px] font-semibold'>{item}</p>
                            </div>
                        )) : weaknessCards.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 justify-start'>
                                <span className='text-error-600 font-semibold'>✗</span>
                                <p className='text-error-400 text-[16px] font-semibold'>{item}</p>
                            </div>
                        ))}
                     </div>
                     </div>
                    ))}

            </div>
      </Title_sectoin>
    </main>
  )
}
