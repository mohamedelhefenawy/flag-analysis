import React from 'react'
import Image from 'next/image'
import PixelSnow from '@/components/PixelSnow'

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
}
export default function WorkCard({ image, title, description, width, height }: WorkCardProps) {
  return (
    <div className='cursor-pointer group relative w-full h-full  rounded-[16px] px-6 py-7 md:px-10 md:py-8 border border-brand-900 hover:border-brand-400 overflow-hidden transition-[background,border-color,box-shadow] duration-300 ease-in-out hover:bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#331057_75%,#331057_100%)]'>
        <div className='absolute w-full h-full inset-0 z-10 pointer-events-none'>
            <PixelSnow
                color={'#8000FF'}
                flakeSize={0.01}
                minFlakeSize={0.8}
                pixelResolution={4000}
                speed={1.25}
                density={0.3}
                direction={200}
                brightness={1}
                depthFade={8}
                farPlane={200}
                gamma={0.4545}
                variant="round"
                className="h-full w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out "
                style={{ transition: 'opacity 0.3s ease' }}
            />
        </div>
      <div className="flex flex-col items-start justify-start gap-6">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="object-cover  self-center relative z-10"
        />
      <h3 className='text-white text-[24px] font-semibold z-20'>{title}</h3>
      <p className='text-primary-300 text-[16px] font-semibold z-20'>{description}</p>
      </div>
    </div>
  )
}
