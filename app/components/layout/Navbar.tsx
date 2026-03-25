'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhiteButton from '../button/WhiteButton'
import { usePathname } from 'next/navigation'
const links = [
  { name: 'Player intelligence', href: '/Player_intelligence' },
  { name: 'Team & Tactical', href: '/Team_Tactical' },
  { name: 'Scouting intelligence', href: '/Scouting_intelligence' },
  { name: 'WhatsApp Intelligence', href: '/Whatsapp_intelligence' },
  { name: 'About', href: '/About' },
  { name: 'Contact', href: '/Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="container  rounded-[20px] p-4 bg-[radial-gradient(circle_at_top_left,#292929_0%,black_50%,#292929_100%)] fixed right-1/2 transform translate-x-1/2 top-4 z-50 backdrop-blur-3xl flex items-center justify-between overflow-visible">

      {/* Logo */}
      <Link href="/">
        <Image src="/layout/nav/logo.png" alt="logo" width={40} height={40} />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`text-primary-400 text-[14px] font-semibold hover:text-white transition ${pathname === link.href ? 'text-white' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <Link href="/" className="hidden lg:block">
        <WhiteButton text="Request Analysis" />
      </Link>

      {/* Mobile Menu Button + Menu */}
      <div className="relative lg:hidden">
        <button
          className="cursor-pointer bg-primary-50 p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <Image src="/layout/nav/menu.png" alt="menu" width={20} height={20} />
        </button>

        {/* Mobile Menu - animated */}
        <div
          className={`absolute top-full right-0 mt-5 min-w-[200px] rounded-[20px] bg-[radial-gradient(circle_at_top_left,#292929_0%,black_50%,#292929_100%)] p-6 flex flex-col items-start gap-6 shadow-lg backdrop-blur-3xl transition-all duration-300 ease-out ${
            isOpen
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none invisible'
          }`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-start text-primary-400 text-[16px] font-semibold hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <WhiteButton text="Request Analysis" />
        </div>
      </div>

    </nav>
  )
}