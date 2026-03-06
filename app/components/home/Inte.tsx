'use client';

import React from 'react';
import Card from '../card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const cards = [
  {
    image: '/home/inte/card_4.png',
    title: 'Player Intelligence',
    description:
      'Position-specific indexes combining performance, physical, tactical, and psychological metrics for recruitment and development decisions.',
    hoverColor:
      'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    hoverBorderColor: '#8000FF',
    pixelSnowcolor: '#9A35FF',
    width: 153,
    height: 169,
    hoverShadowColor: '#8000FF',
  },
  {
    image: '/home/inte/card_2.png',
    title: 'Context & Sentiment Intelligence',
    description:
      'Psychological indicators, media sentiment tracking, and contextual awareness that goes beyond numbers to inform smarter decisions.',
    hoverColor:
      'radial-gradient(circle at 50% 50%,#000000 0%,#0d0b02 15%,#1f1a05 35%,#332b08 60%,#463C0B 85%,#463C0B 100%)',
    hoverBorderColor: '#D4A843',
    pixelSnowcolor: '#D4A843',
    width: 169,
    height: 162,
    hoverShadowColor: '#D4A843',
  },
  {
    image: '/home/inte/card_3.png',
    title: 'Team & Tactical Intelligence',
    description:
      'Evidence-based tactical profiling of team identity, style of play, and strategic patterns across phases of possession and transition.',
    hoverColor:
      'radial-gradient(circle at 50% 50%,#000000 0%,#05020a 15%,#140622 35%,#220a3a 55%,#331057 75%,#331057 100%)',
    hoverBorderColor: '#8000FF',
    pixelSnowcolor: '#9A35FF',
    width: 280,
    height: 191,
    hoverShadowColor: '#8000FF',
  },
];

export default function Inte() {
  return (
    <section className="container ">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-5">
          <h3 className="text-secondary-500">What we do</h3>
          <h2 className="text-white">
            Intelligence Across Three <br /> Dimensions
          </h2>

          <Swiper
            modules={[Navigation, Pagination]}
            grabCursor
            speed={700}
            watchOverflow
            slidesPerView={1.08}
            spaceBetween={14}
            navigation={false}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            pagination={false}
            // navigation={false}
            className="inte-swiper w-full pb-12"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={`${card.title}-${index}`} className="!h-auto w-full">
                <div className="mx-auto flex h-full max-w-[360px]">
                  <Card
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    color="#000000"
                    hoverColor={card.hoverColor}
                    borderColor="#1D1D1D"
                    hoverBorderColor={card.hoverBorderColor}
                    pixelSnowcolor={card.pixelSnowcolor}
                    width={card.width}
                    height={card.height}
                    hoverShadowColor={card.hoverShadowColor}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .inte-swiper .swiper-pagination-bullet {
          background: #787878;
          opacity: 0.55;
          transition: all 0.3s ease;
        }

        .inte-swiper .swiper-pagination-bullet-active {
          background: #8000ff;
          opacity: 1;
        }

        .inte-swiper .swiper-button-prev,
        .inte-swiper .swiper-button-next {
          color: #ffffff;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          border: 1px solid #2a2a2a;
          background: rgba(13, 13, 13, 0.7);
          backdrop-filter: blur(4px);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .inte-swiper .swiper-button-prev:hover,
        .inte-swiper .swiper-button-next:hover {
          border-color: #8000ff;
          transform: translateY(-1px);
        }

        .inte-swiper .swiper-button-prev::after,
        .inte-swiper .swiper-button-next::after {
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 767px) {
          .inte-swiper .swiper-button-prev,
          .inte-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
