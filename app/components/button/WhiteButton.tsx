import React from 'react'

export default function WhiteButton({text}:{text:string}) {
  return (
    <button className="cursor-pointer bg-white text-black p-3 rounded-full text-sm font-semibold outline-none focus:outline-none focus:ring-0 hover:bg-brand-500 hover:text-white hover:shadow-xl hover:shadow-brand-500/80 transition-all duration-300 hover:translate-y-[-10px]">
    {text}
  </button>
  )
}

