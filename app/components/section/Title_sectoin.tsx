import React from 'react'
interface Title_sectoinProps {
    subtitle: string
    title: string
    description?: string
    color: string
    children: React.ReactNode
    span?: string
    spanColor?: string
}
export default function Title_sectoin({subtitle, title, description, color, children, span, spanColor}: Title_sectoinProps) {
  return (
    <section className='container flex flex-col gap-8 '>
    <div className='flex flex-col gap-[20px]'>
        <h4 className={`text-${color} text-[16px] font-semibold`}>
            {subtitle} 
        </h4>
        <h2 className='text-white'>
            {title} 
            {span && <span className={`text-${spanColor}`}>{span}</span>}
        </h2>
        <h4 className='text-primary-400'>
            {description}
        </h4>
    </div>
    {children}
    </section>
  )
}
