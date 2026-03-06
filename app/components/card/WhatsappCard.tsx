'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PixelSnow from '@/components/PixelSnow';
import WhatsappButton from '../button/WhatsappButton';
type DifferentCardProps = {
  image: string;
  title: string;
  description: string;
  /** CSS background value: hex, rgb, or gradient */
  color?: string;
  /** CSS background value for hover */
  hoverColor?: string;
  /** CSS border-color value */
  borderColor?: string;
  /** CSS border-color value for hover */
  hoverBorderColor?: string;
  /** PixelSnow color (hex) */
  pixelSnowcolor?: string;
  // width of the image
  width?: number;
  // height of the image
  height?: number;
  // shadow color
  hoverShadowColor?: string;
  /** Optional link URL - makes card clickable */
  href?: string;
  className?: string;
};

export default function DifferentCard({
  image,
  title,
  description,
  color = '#000000',
  hoverColor = '#331057',
  borderColor = '#1D1D1D',
  hoverBorderColor = '#8000FF',
  pixelSnowcolor = '#8000FF',
  width = 153,
  height = 169,
  hoverShadowColor = '#8000FF',
  href,
  className,
}: DifferentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const border = isHovered ? hoverBorderColor : borderColor;

  const content = (
    <>
      {/* Base background + gradient overlay for smooth transition */}
      <div className="absolute inset-0 z-0 rounded-[16px]" style={{ background: color }} />
      <div
        className="absolute inset-0 z-0 rounded-[16px] pointer-events-none transition-opacity duration-300 ease-in-out"
        style={{
          background: hoverColor,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PixelSnow
          color={pixelSnowcolor}
          flakeSize={0.01}
          minFlakeSize={0.8}
          pixelResolution={4000}
          speed={1.25}
          density={0.3}
          direction={315}
          brightness={1}
          depthFade={8}
          farPlane={40}
          gamma={0.4545}
          variant="round"
          className={isHovered ? 'opacity-100' : 'opacity-0'}
          style={{ transition: 'opacity 0.3s ease' }}
        />
      </div>
      <div className="relative z-20 flex flex-col items-start justify-between gap-6">
      <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="object-cover "
        />
      <div className="flex flex-col items-start justify-between gap-6">
      <div className='flex flex-col items-start justify-start gap-4'>
      <h2 className="text-white">{title}<br/>
      <span className='text-success-600 '>WhatsApp</span>
      </h2>
      <h4 className="text-primary-300 ">{description}</h4>
      </div>
      <WhatsappButton />
      </div>

      </div>
    </>
  );

  const shared = {
    className:
      `${className} cursor-pointer group relative w-full rounded-[16px] px-6 py-7 md:px-10 md:py-8 border overflow-hidden transition-[border-color,box-shadow] duration-300 ease-in-out`,
    style: {
      borderColor: border,
      // boxShadow: isHovered ? `0 20px 25px -5px ${hoverShadowColor}33` : '0 20px 25px -5px transparent',
    } as React.CSSProperties,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <a href={href} {...shared}>
        {content}
      </a>
    );
  }

  return <div {...shared}>{content}</div>;
}

