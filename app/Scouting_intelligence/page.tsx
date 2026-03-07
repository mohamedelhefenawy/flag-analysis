import React from 'react'
import Image from 'next/image'
import Title_sectoin from '../components/section/Title_sectoin'
import Card from '../components/card/Card'
import WhiteButton from '../components/button/WhiteButton'
import BlackButton from '../components/button/BlackButton'
import WhatsappButton from '../components/button/WhatsappButton'
const cards = [
    {
        image: '/scout/streamline.png',
        title: 'Streamline Your Process',
        description: 'Technical departments and sporting directors seeking structured intelligence.',
        width: 210,
        height: 122,
    },
    {
        image: '/scout/stad.png',
        title: 'Smarter Investments',
        description: 'Match preparation, opponent analysis, and player evaluation support.',
        width: 210,
        height: 122,
    },
    {
        image: '/scout/perfect.png',
        title: 'Perfect Alignment',
        description: 'Data frameworks and intelligence products for professional workflows.',
        width: 210,
        height: 122,
    },]

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
        {
            id:4,
            title:'Receive Shortlist',
            description:'Get a detailed scouting report with player recommendations.',
        },

    ]

export default function page() {
  return (
    <main className='mt-20 flex flex-col xl:gap-[160px] md:gap-[120px] gap-20'>
      <Title_sectoin
        subtitle="SCOUTING INTELLIGENCE"
        title="AI-Driven Scouting"
        description="Significantly reduce the time and effort required to identify talents. Process large volumes of player data to generate automated reports and shortlists based on your requirements."
        color="secondary-500"
      >
        <Image src='/scout/player.png' alt='scouting' width={1160} height={420} className='w-full max-h-[420px] rounded-[24px]' />
      </Title_sectoin>
      <Title_sectoin
        subtitle="CAPABILITIES"
        title="Scouting Support Tool"
        description="An advanced scouting support tool, driven by Generative AI, capable of
processing large volumes of information."
        color="brand-200"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {cards.map((item,index)=>(
            <Card key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                color="#000000"
                hoverColor="radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)"
                borderColor="#1D1D1D"
                hoverBorderColor="#8000FF"
                pixelSnowcolor="#8000FF"
                width={item.width}
                height={item.height}    
                hoverShadowColor="#8000FF"
                IsImage={true}
                textClass="text-white text-[24px] font-semibold"
                titleText={item.title}
            />
           ))} 
        </div>
      </Title_sectoin>
      <Title_sectoin
      subtitle="PROCESS"
      title="How It Works"
      description="Measuring how the team transitions into dangerous areas and creates threat."
      color="secondary-500"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
            {workscards.map((item,index)=>(
                <div key={index} className='group/card cursor-pointer relative flex flex-col items-start justify-start gap-3 border border-secondary-900 rounded-[16px] p-4 overflow-hidden'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-in-out' aria-hidden />
                    <span className='relative z-10 text-[20px] font-semibold text-secondary-500 border-2 border-secondary-900 rounded-full p-2 w-14 h-14 flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#0d0b02_15%,#1f1a05_35%,#332b08_60%,#463C0B_85%,#463C0B_100%)]'>{item.id}</span>
                    <h3 className='relative z-10 text-secondary-500 text-[16px] font-semibold'>{item.title}</h3>
                    <p className='relative z-10 text-primary-300 text-[16px] font-semibold'>{item.description}</p>
                </div>
            ))}
            
        </div>


      </Title_sectoin>
      <section className='container flex lg:flex-row flex-col items-start justify-between gap-10 '>
      <div className='flex  flex-col items-start justify-start gap-8'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <h4 className='text-brand-200 text-[16px] font-semibold'>
          DESIGNED FOR
          </h4>
          <h2 className='text-white'>
          Scouting Support <br className='lg:block hidden' /> Tool
          </h2>
        </div>
        <div className='flex flex-col items-start justify-start gap-[20px]'>
          <h4 className='text-primary-400 lg:max-w-[600px]'>
          An advanced scouting support tool, driven by Generative AI, capable of processing large volumes of information and creating automated reports and shortlists of ideal profiles based on requirements.          </h4>
          <h4 className='text-white'>
          Main added values:
          </h4>

          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Streamline your scouting process
            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Ensure smarter investments in talent
            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Discover players that perfectly align with your need
            </p>
          </div>

        </div>
        <div className='flex items-center justify-center gap-2'>
          <WhiteButton text='Request Access' />
          <BlackButton text='Contact Us' />

        </div>

      </div>
      <Image src='/scout/support.png' alt='player_intelligence' width={554} height={554} className='w-full lg:max-w-[554px] max-h-[554px] ' />
    </section>
    <section className='container flex justify-center items-center'>
    <div className="relative flex items-center justify-center">
  
  {/* Circle */}
  <Image
    src="/scout/circle.png"
    alt="circle"
    width={981}
    height={981}
    className="animate-spin-slow"
  />

  {/* Player centered relative to circle */}
  <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
    <Image
      src="/scout/ready_4.png"
      alt="player"
      width={240}
      height={240}
      className='max-h-[150px] max-w-[150px] md:max-h-[200px] md:max-w-[200px] lg:max-h-[250px] lg:max-w-[250px] '
    />
    <div className='flex flex-col items-center justify-center text-center gap-4'>
      <h2 className='text-white'>
      Ready to streamline your scouting?
    </h2>
      <h4 className='text-primary-400'>
      Get access to AI-driven scouting intelligence for your recruitment needs.      </h4>
    </div>
    <div className='flex items-center justify-center gap-2'>
      <WhiteButton text='Request Access' />
      <BlackButton text='View All Services' />
    </div>
  </div>

</div>
    </section>
    </main>
  )
}
