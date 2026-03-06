import React from 'react'
import Image from 'next/image'
export default function WhatsappButton() {
  return (
    <button className=' w-fit cursor-pointer bg-success-600 hover:shadow-xl hover:shadow-success-600 hover:-translate-y-1 transition-all duration-300 ease-in-out text-black p-3 flex items-center justify-center gap-2 rounded-full text-[14px] font-semibold'>
    <Image src='/home/whats/whatsapp.svg' alt='whatsapp' width={20} height={20} />
    Start on WhatsApp
  </button>
  )
}
