'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PixelSnow from '@/components/PixelSnow';

type CardProps = {
  image?: string;
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
  // text class
  textClass?: string;
  // is image
  IsImage?: boolean;
  // title text
  titleText?: string;
};

export default function Card({
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
  IsImage = true,
  textClass = 'text-white text-[24px] font-semibold',
  titleText = title,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const bg = isHovered ? hoverColor : color;
  const border = isHovered ? hoverBorderColor : borderColor;

  const content = (
    <>
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
      <div className="relative z-20 flex flex-col items-start justify-between gap-[10px]">
        {IsImage ?<Image
          src={image || ''}
          alt={title}
          width={width}
          height={height}
          className="object-cover self-center"
        />:
        <h2 className={`${textClass}`}>
          {titleText}
        </h2>
        }
        <h3 className="text-white text-[24px] font-semibold">{title}</h3>
        <p className="text-primary-300 text-[16px] font-semibold">{description}</p>
      </div>
    </>
  );

  const shared = {
    className:
      `cursor-pointer group relative w-full ${IsImage ? '' : ''} rounded-[16px] px-6 py-7 md:px-10 md:py-8 border overflow-hidden transition-[background,border-color,box-shadow] duration-300 ease-in-out`,
    style: {
      background: bg,
      borderColor: border,
      boxShadow: isHovered ? `0 20px 25px -5px ${hoverShadowColor} / 0.2` : undefined,
    } as React.CSSProperties,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };


  return <div {...shared}>{content}</div>;
}

