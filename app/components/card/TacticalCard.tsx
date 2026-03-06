'use client';

import React, { useState } from 'react';

type TacticalCardProps = {
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  borderColor: string;
  hoverBorderColor: string;
};

export default function TacticalCard({ title, description, color, hoverColor, borderColor, hoverBorderColor }: TacticalCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const bg = isHovered ? hoverColor : color;
  const bgStyle = bg.startsWith('bg-') ? {} : { background: bg };
  const bgClass = bg.startsWith('bg-') ? bg : '';
  const border = isHovered ? hoverBorderColor : borderColor;
  const borderStyle = border.startsWith('border-') ? {} : { borderColor: border };
  const borderClass = border.startsWith('border-') ? border : '';

  return (
    <div
      className={`cursor-pointer group relative w-full rounded-[10px] px-4 py-6 border overflow-hidden transition-all duration-300 ease-out ${borderClass} ${bgClass} ${
        isHovered ? 'scale-[1.03] -translate-y-1 shadow-lg shadow-secondary-500/20' : 'scale-100 translate-y-0 shadow-none'
      }`}
      style={{ ...bgStyle, ...borderStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute inset-0 z-10 pointer-events-none'>
        {/* <PixelSnow
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
          className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out "
          style={{ transition: 'opacity 0.3s ease' }}
        /> */}
      </div>
      <div className='flex flex-col items-center self-center justify-center gap-2 z-20'>
        <h3 className='text-secondary-500 text-[24px] font-semibold text-center'>{title}</h3>
        <p className='text-secondary-500 text-[14px] font-semibold text-center'>{description}</p>
      </div>
    </div>
  )
}
