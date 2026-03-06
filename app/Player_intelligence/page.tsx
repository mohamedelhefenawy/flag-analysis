'use client';
import React from 'react'
import Image from 'next/image'
import Multi from '../components/player/Multi';
import Title_sectoin from '../components/section/Title_sectoin';
import WhatsappButton from '../components/button/WhatsappButton';
import WhiteButton from '../components/button/WhiteButton';
import BlackButton from '../components/button/BlackButton';
export default function page() {
  return (
    <main className='flex flex-col xl:gap-[160px] md:gap-[120px] gap-20 mt-20  '>
      <Title_sectoin
        subtitle="PLAYER INTELLIGENCE"
        title="Automated Player Reporting"
        description="Analyze historical performance with in-depth reports on positional changes, playing time, and key contributions. Explore detailed metrics, charts, and role effectiveness across all aspects of play."
        color="secondary-500"
      >
        <Image src='/player/auto.png' alt='auto' width={1160} height={419} className='w-full max-h-[419px] object-cover rounded-[24px]' />
      </Title_sectoin>
    <Multi />
    <section className='container flex lg:flex-row flex-col items-start justify-between gap-10 '>
      <div className='flex  flex-col items-start justify-start gap-8'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <h4 className='text-secondary-500 text-[16px] font-semibold'>
          PREMIUM PRODUCT
          </h4>
          <h2 className='text-white'>
          Player Intelligence <br className='lg:block hidden' /> Cards
          </h2>
        </div>
        <div className='flex flex-col items-start justify-start gap-[20px]'>
          <h4 className='text-primary-400 lg:max-w-[400px]'>
          A professional, ID-card style intelligence summary — not a basic stats panel. Each card combines performance profiling, tactical fit analysis, psychological indicators, and media sentiment.
          </h4>
          <h4 className='text-white'>
          Main added values:
          </h4>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Gain a holistic understanding of player&apos;s function and impact on the team            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Assess a player&apos;s adaptability and consistency            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Enable targeted development plans and tactical adjustments
            </p>
          </div>

        </div>
        <div className='flex items-center justify-center gap-2'>
          <WhiteButton text='Request Custom Analysis' />
          <BlackButton text='Explore Player Intelligence' />

        </div>

      </div>
      <Image src='/player/card.png' alt='player_intelligence' width={500} height={500} className='w-full lg:max-w-[500px] max-h-[880px] ' />
    </section>
    <section className='container flex lg:flex-row flex-col-reverse items-start justify-between gap-10 '>
    <Image src='/player/analysis.png' alt='Analysis' width={527} height={418} className='w-full lg:max-w-[527px] max-h-[418px] ' />
      <div className='flex  flex-col items-start justify-start gap-8'>
        <div className='flex flex-col items-start justify-start gap-3'>
          <h4 className='text-success-600 text-[16px] font-semibold'>
          CONTEXT LAYER
          </h4>
          <h2 className='text-white'>
          Player Sentiment  Analysis
          </h2>
        </div>
        <div className='flex flex-col items-start justify-start gap-[20px]'>
          <h4 className='text-primary-400 lg:max-w-[600px]'>
          Go beyond statistics with our AI-powered sentiment analysis. We track Arabic and English media coverage to understand public perception, fan sentiment, and contextual factors that pure data misses.
          Each sentiment report includes:
          </h4>
          <h4 className='text-white'>
          Main added values:
          </h4>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Overall sentiment score with confidence level
            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Aspect-based breakdown (build-up, aerial, speed, etc.)
            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Evidence feed with source transparency
            </p>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-success-600'>✔</span>
            <p className='text-primary-300'>
            Arabic → English translation with context
            </p>
          </div>

        </div>
        <div className='flex items-center justify-center gap-2'>
          <WhiteButton text='Request Player Card' />
          <BlackButton text='Contact Us' />

        </div>

      </div>
    </section>
    <section className='container flex justify-center items-center'>
    <div className="relative flex items-center justify-center">
  
  {/* Circle */}
  <Image
    src="/player/circle.png"
    alt="circle"
    width={909}
    height={909}
    className="animate-spin-slow"
  />

  {/* Player centered relative to circle */}
  <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
    <Image
      src="/player/player_2.png"
      alt="player"
      width={62}
      height={144}
    />
    <div className='flex flex-col items-center justify-center text-center gap-4'>
      <h2 className='text-white'>
      Need a player analysis?
      </h2>
      <h4 className='text-primary-400'>
        Request a full player intelligence report or custom evaluation.
      </h4>
    </div>
    <div className='flex items-center justify-center gap-2'>
      <WhatsappButton/>
      <WhiteButton text='Request Analysis' />
    </div>
  </div>

</div>
    </section>

    </main>
  )
}
