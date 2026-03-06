import React from 'react'

export default function BlackButton({text}:{text:string}) {
  return (
    <button className="cursor-pointer border border-[#3D3D3D] text-white bg-[linear-gradient(to_bottom,#292929_0%,black_50%,#292929_100%)] hover:bg-[linear-gradient(to_bottom,#331057_0%,black_50%,#331057_100%)] hover:border-[#531A8F] hover:translate-y-[-10px]  transition-all duration-300 p-3 rounded-full ">
    {text}
  </button>
  )
}
