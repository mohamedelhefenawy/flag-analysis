// import React from 'react'
// import Title_sectoin from '../components/section/Title_sectoin'
// import Image from 'next/image'
// import WhiteButton from '../components/button/WhiteButton'
// import BlackButton from '../components/button/BlackButton'
// const about=[
//   {
//     image:"/about/photo_1.jpg",
//     title:"About Flag Analysis",
//     description:"Flag Analysis exists to bring structured, context-driven football intelligence to the Saudi football ecosystem and beyond. Our mission is to support clubs, coaches, analysts, and media with evidence- based insights that go beyond surface-level statistics. We believe football intelligence should be accessible, multi-dimensional, and actionable — designed for the pace and complexity of modern football operations."
//   },
//   {
//     image:"/about/photo_2.jpg",
//     title:"Philosophy",
//     description:"Our approach is context-first. Every analysis begins with understanding the environment — the league, the team system, the role, and the moment — before applying data and metrics. This philosophy ensures our intelligence is relevant, not just accurate.Flag Analysis is Saudi-developed, built with deep awareness of the Saudi football culture, league dynamics, and the unique challenges of the region's football landscape."
//   },
//   {
//     image:"/about/photo_3.jpg",
//     title:"Who We Work With",
//     description:"We serve a range of football professionals, from club technical departments and sporting directors to coaches preparing for their next match. Our intelligence products are also used by professional analysts integrating data into their workflows and media outlets seeking evidence-based storytelling."
//   },

// ]

// export default function page() {
//   return (
//     <main className=' container mt-10 flex flex-col xl:gap-[160px] md:gap-[120px] gap-20   '>
//       <Title_sectoin
//         subtitle="ABOUT US"
//         title="About Flag Analysis"
//         color="brand-200"

//       >
//         <Image src='/about/about.jpg' alt='about' width={1160} height={420} className='w-full max-h-[420px] object-cover rounded-[24px] ' />
//       </Title_sectoin>
//       {
//         about.map((item,index)=>(

//             <div key={index} className='flex flex-col lg:flex-row items-center justify-between gap-10 '>
//                 <div className=' flex flex-col gap-3'>
//                     <h2 className='text-white font-semibold'>
//                         {item.title}
//                     </h2>
//                     <p className='text-primary-400 max-w-[800px] text-[20px] font-semibold '>
//                         {item.description}
//                     </p>
//                 </div>
//                 <Image src={item.image} alt={item.title} width={500} height={500} className='w-full max-w-[500px] max-h-[420px] object-cover rounded-[24px] ' />
//             </div>
//         ))
//       }
//           <section className='container flex justify-center items-center'>
//     <div className="relative flex items-center justify-center">
  
//   {/* Circle */}
//   <Image
//     src="/about/circle.png"
//     alt="circle"
//     width={981}
//     height={981}
//     className="animate-spin-slow"
//   />

//   {/* Player centered relative to circle */}
//   <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
//     {/* <Image
//       src="/scout/ready.png"
//       alt="player"
//       width={318}
//       height={316}
//     /> */}
//     <div className='flex flex-col items-center justify-center text-center gap-4'>
//       <h2 className='text-white'>
//       Want to work with us?
//       </h2>
//       <h4 className='text-primary-400'>
//       Reach out to discuss how Flag Analysis can support
//       your football operations.
//           </h4>
//     </div>
//     <div className='flex items-center justify-center gap-2'>
//       <WhiteButton text='Request Access' />
//       <BlackButton text='View All Services' />
//     </div>
//   </div>

// </div>
//     </section>
//     </main>
//   )
// }
import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
