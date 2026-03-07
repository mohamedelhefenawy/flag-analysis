// 'use client'
// import React, { useState, useRef, useEffect } from 'react'
// import Title_sectoin from '../components/section/Title_sectoin'
// import Image from 'next/image'
// import Link from 'next/link'
// const requestTypes = [
//   'Clubs & Category',
//   'Media & Research',
//   'Custom Projects',
// ]

// export default function Contact() {
//   const [requestType, setRequestType] = useState('')
//   const [isOpen, setIsOpen] = useState(false)
//   const dropdownRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])
//   return (
//     <main className='container mt-6 md:mt-10'>
//         <Title_sectoin
//             subtitle="GET IN TOUCH"
//             title="Contact / Request Analysis"
//             description="Significantly reduce the time and effort required to identify talents. Process large volumes of player data to generate automated reports and shortlists based on your requirements."
//             color="brand-200"
//         >
//             <div className='flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8'>
//                 <div className='w-full lg:flex-[2] min-w-0 border border-brand-500 rounded-[12px] md:rounded-[16px] p-4 md:p-6 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#331057_75%,#331057_100%)]'>
//                   <form className='w-full flex flex-col items-start justify-start gap-3 md:gap-4'>
//                     <div className='w-full flex flex-col items-start justify-start gap-1.5 md:gap-2'>
//                       <label htmlFor="name" className='text-brand-200 text-[12px] md:text-[14px] font-semibold'>Name</label>
//                       <input type="text" id="name" name="name" placeholder='Enter your name' className='bg-brand-900 border border-brand-200 w-full p-2.5 md:p-3 rounded-[8px] text-primary-400 text-[13px] md:text-[14px] font-semibold min-w-0' />
//                     </div>
//                     <div className='relative w-full flex flex-col items-start justify-start gap-1.5 md:gap-2'>
//                       <label htmlFor="email" className='text-brand-200 text-[12px] md:text-[14px] font-semibold'>Email</label>
//                       <input type="email" id="email" name="email" placeholder='Enter your email' className='bg-brand-900 border border-brand-200 w-full p-2.5 md:p-3 rounded-[8px] text-primary-400 text-[13px] md:text-[14px] font-semibold min-w-0' />
//                     </div> 
//                     <div className='w-full flex flex-col items-start justify-start gap-1.5 md:gap-2'>
//                       <label htmlFor="request-type" className='text-brand-200 text-[12px] md:text-[14px] font-semibold'>Request Type</label>
//                       <div ref={dropdownRef} className='relative w-full'>
//                         <button
//                           type="button"
//                           id="request-type"
//                           onClick={() => setIsOpen(!isOpen)}
//                           className='w-full flex items-center justify-between gap-2 bg-brand-900 border border-brand-200 p-2.5 md:p-3 rounded-[8px] text-brand-200 text-[13px] md:text-[14px] font-semibold text-left hover:border-brand-400 transition-colors cursor-pointer min-w-0'
//                         >
//                           <span className={'text-brand-200'}>{requestType || 'Select Category'}</span>
//                           <Image
//                             src="/contact/arrow.png"
//                             alt="arrow"
//                             width={14}
//                             height={14}
//                             className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
//                           />
//                         </button>
//                         <div
//                           className={`absolute left-0 right-0 top-full mt-1 rounded-[8px] overflow-hidden border border-brand-200 bg-brand-900 shadow-lg z-10 transition-all duration-300 ease-out origin-top ${
//                             isOpen
//                               ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
//                               : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
//                           }`}
//                         >
//                           {requestTypes.map((type) => (
//                             <button
//                               key={type}
//                               type="button"
//                               onClick={() => {
//                                 setRequestType(type)
//                                 setIsOpen(false)
//                               }}
//                               className={`cursor-pointer w-full px-3 md:px-4 py-2.5 md:py-3 text-left text-[13px] md:text-[14px] font-semibold transition-colors hover:bg-brand-800 ${
//                                 requestType === type ? 'text-brand-200 bg-brand-800/50' : 'text-primary-400'
//                               }`}
//                             >
//                               {type}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>                   
//                     <div className='w-full flex flex-col items-start justify-start gap-1.5 md:gap-2'>
//                       <label htmlFor="message" className='text-brand-200 text-[12px] md:text-[14px] font-semibold'>message</label>
//                       <textarea id="message" name="message" placeholder='Enter your message' className='min-h-[100px] md:min-h-[120px] resize-none bg-brand-900 border border-brand-200 w-full p-2.5 md:p-3 rounded-[8px] text-primary-400 text-[13px] md:text-[14px] font-semibold min-w-0' />
//                     </div>
//                     <button type='submit' className='w-full cursor-pointer bg-white text-black p-2.5 md:p-3 rounded-full text-[13px] md:text-sm font-semibold outline-none focus:outline-none focus:ring-0 hover:bg-brand-500 hover:text-white transition-all duration-300'>Submit</button>
//                   </form>
//                 </div>
//                 <div className='w-full lg:flex-1 min-w-0 flex flex-col items-stretch gap-4 md:gap-6'>
//                   <div className='flex flex-col items-start justify-start gap-3 md:gap-5 border border-brand-500 rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#331057_75%,#331057_100%)]'>
//                     <div className='flex items-center justify-between gap-2'>
//                       <Image src="/contact/whatsapp.png" alt="whatsapp" width={18} height={18} className='md:w-5 md:h-5' />
//                       <h4 className='text-[#F0F0F0] text-[16px] md:text-[18px] font-semibold'>WhatsApp</h4>
//                     </div>
//                     <p className='text-primary-400 text-[12px] md:text-[14px] font-semibold leading-relaxed'>Prefer a faster channel? Start a conversation on WhatsApp for quick analysis requests.</p>
//                     <button className='w-full cursor-pointer bg-[#25D366] hover:bg-[#25D366]/80 text-black p-2.5 md:p-3 rounded-full text-[13px] md:text-sm font-semibold outline-none focus:outline-none focus:ring-0 transition-all duration-300'>Send Request</button>
//                   </div>
//                   <div className='flex flex-col items-start justify-start gap-3 md:gap-5 border border-brand-500 rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#331057_75%,#331057_100%)]'>
//                     <div className='flex items-center justify-between gap-2'>
//                       <Image src="/contact/mail.png" alt="mail" width={18} height={18} className='md:w-5 md:h-5' />
//                       <h4 className='text-[#F0F0F0] text-[16px] md:text-[18px] font-semibold'>Email</h4>
//                     </div>
//                     <p className='text-primary-400 text-[12px] md:text-[14px] font-semibold leading-relaxed'>For formal inquiries, partnerships, or media requests.</p>
//                     <Link href='mailto:info@flaganalysis.com' className='text-brand-200 text-[12px] md:text-[14px] font-semibold break-all'>CANTACT@FLAGANALYSIS.COM</Link>
//                   </div>
//                   <div className='flex flex-col items-start justify-start gap-3 md:gap-5 border border-brand-500 rounded-[12px] md:rounded-[16px] p-4 md:p-5 bg-[radial-gradient(circle_at_50%_50%,#000000_0%,#05020a_15%,#140622_35%,#220a3a_55%,#331057_75%,#331057_100%)]'>
//                     <div className='flex items-center justify-between gap-2'>
//                       <Image src="/contact/cover.png" alt="cover" width={18} height={18} className='md:w-5 md:h-5' />
//                       <h4 className='text-[#F0F0F0] text-[16px] md:text-[18px] font-semibold'>coverage</h4>
//                     </div>
//                     <p className='text-primary-400 text-[12px] md:text-[14px] font-semibold leading-relaxed'>Saudi Premier League, Yelo League, and international comparison datasets. Based in Saudi Arabia.</p>
//                   </div>
//                 </div>
//             </div>
//         </Title_sectoin>
      
//     </main>
//   )
// }
