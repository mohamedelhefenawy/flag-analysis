'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Card from '../card/Card';
const cards=[
  {
    titleText:"PERF",
    title:"Performance Index",
    description:"Technical departments and sporting directors seeking structured intelligence.",
    textClass:"text-brand-600 text-center self-center text-[64px] font-semibold",
    color:"#000000",
    hoverColor:'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    borderColor:"#1D1D1D",
    hoverBorderColor:"#8000FF",
    pixelSnowcolor:"#8000FF",
    IsImage:false,
  },
  {
    titleText:"PHY",
    title:"Physical Index",
    description:"Match preparation, opponent analysis, and player evaluation support.",
    textClass:"text-brand-400 text-center self-center text-[64px] font-semibold",
    color:"#000000",
    hoverColor:'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    borderColor:"#1D1D1D",
    hoverBorderColor:"#8000FF",
    pixelSnowcolor:"#8000FF",
    IsImage:false,
  },
  {
    titleText:"TAC",
    title:"Tactical Index",
    description:"Data frameworks and intelligence products for professional workflows.",
    textClass:"text-brand-300 text-center self-center text-[64px] font-semibold",
    color:"#000000",
    hoverColor:'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    borderColor:"#1D1D1D",
    hoverBorderColor:"#8000FF",
    pixelSnowcolor:"#8000FF",
    IsImage:false,
  },
  {
    titleText:"PSY",
    title:"Psychological Index",
    description:"Evidence-based insights and visuals for football media and broadcast.",
    textClass:"text-brand-200 text-center self-center text-[64px] font-semibold",
    color:"#000000",
    hoverColor:'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    borderColor:"#1D1D1D",
    hoverBorderColor:"#8000FF",
    pixelSnowcolor:"#8000FF",
    IsImage:false,
  },
]

export default function Multi() {
  return (
    <section className='container flex flex-col gap-8 '>
    <div className='flex flex-col gap-[20px]'>
      <div className='flex flex-col gap-3'>
        <h4 className='text-brand-200 text-[16px] font-semibold'> 
          THE FLAG INDEX
        </h4>
        <h2 className='text-white'>
        Multi-Dimensional Player Evaluation
        </h2>
      </div>
      <h4 className='text-primary-400'>
        Our proprietary index system evaluates players across four key dimensions,
        calibrated by position.         
      </h4>
    </div>
    <Swiper
      modules={[Navigation, Pagination]}
      grabCursor
      speed={700}
      watchOverflow
      slidesPerView={1.08}
      navigation={false}
      className='player-swiper w-full'
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={`${card.titleText}-${index}`} className=" !h-auto">
          <div className="flex h-full w-full">
          <Card
            titleText={card.titleText}
            title={card.title}
            description={card.description}
            textClass={card.textClass}
            color={card.color}
            hoverColor={card.hoverColor}
            borderColor={card.borderColor}
            hoverBorderColor={card.hoverBorderColor}
            pixelSnowcolor={card.pixelSnowcolor}
            IsImage={card.IsImage}
          />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>  
  </section>
  )
}
