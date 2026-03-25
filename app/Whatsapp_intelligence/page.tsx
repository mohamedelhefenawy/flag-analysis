import React from 'react'
import Title_sectoin from '../components/section/Title_sectoin'
import WhatsappButton from '../components/button/WhatsappButton'
import Card from '../components/card/Card'

const cards=[
    {
        image:'/whats/camera.png',
        title:'Player Comparison',
        description:'Compare two or more players across key intelligence dimensions.',
    },
    {
        image:'/whats/snap.png',
        title:'Tactical Snapshot',
        description:'Quick tactical overview of a team&apos;s style,strengths, and patterns.',
    },{
        image:'/whats/custom.png',
        title:'Custom Request',
        description:'Submit any football intelligence question — we&apos;ll scope and deliver.',
    }
    
]

const workscards=[
    {
        id:1,
        title:'Insert Data',
        description:'Enter your scouting enquiry with specific requirements.',
    },
    {
        id:2,
        title:'Specify Characteristics',
        description:'Define age range, budget, playing attributes, and more.',
    },
    {
        id:3,
        title:'Generate Report',
        description:'AI processes requirements and generates matching profiles.',
    },


]
export default function page() {
  return (
    <main className='flex flex-col xl:gap-[160px] md:gap-[120px] gap-20 mt-20   '>
      <Title_sectoin
        subtitle="WHATSAPP INTELLIGENCE"
        title="Get Intelligence via "
        span="WhatsApp"
        spanColor="success-600"
        description="Significantly reduce the time and effort required to identify talents. Process large volumes of player data to generate automated reports and shortlists based on your requirements."
        color="success-600"
      >
        <WhatsappButton/>
      </Title_sectoin>
      <Title_sectoin
        subtitle="HOW IT WORKS"
        title="Three Simple Steps "
        description="Measuring how the team transitions into dangerous areas and creates threat."
        color="success-600"
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {workscards.map((item,index)=>(
                <div key={index} className='group/card cursor-pointer relative flex flex-col items-start justify-start gap-3 border border-success-600 rounded-[16px] p-4 overflow-hidden'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#000000_10%,#051a0a_40%,#0a2510_80%,#0d3315_100%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-in-out' aria-hidden />
                    <span className='relative z-10 text-[20px] font-semibold text-success-600 border-2 border-success-600 rounded-full p-2 w-14 h-14 flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#000000_15%,#051a0a_55%,#0a2510_80%,#0d3315_100%)]'>{item.id}</span>
                    <h3 className='relative z-10 text-success-600 text-[16px] font-semibold'>{item.title}</h3>
                    <p className='relative z-10 text-primary-300 text-[16px] font-semibold'>{item.description}</p>
                </div>
            ))}
            
        </div>
    </Title_sectoin>
    <Title_sectoin
        subtitle="MENU OPTION"
        title="What You Can Request"
        description="Measuring how the team transitions into dangerous areas and creates threat."
        color="success-600"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {cards.map((item,index)=>(
            <Card key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                color="#000000"
                hoverColor="radial-gradient(circle at 50% 50%, #000000 0%, #000000 15%, #051a0a 55%, #0a2510 80%, #0d3315 100%)"
                borderColor="#115F2E"
                hoverBorderColor="#115F2E"
                pixelSnowcolor="#25D366"
                width={210}
                height={122}    
                hoverShadowColor="#115F2E"
                IsImage={true}
                textClass="text-white text-[24px] font-semibold"
                titleText={item.title}
            />
           ))} 
        </div>
        <WhatsappButton/>
    </Title_sectoin>
    </main>
  )
}

