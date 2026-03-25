import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className=' mt-20 border-t border-primary-700 pt-10 '>
        <div className='container '>

        <div className='flex flex-wrap items-start justify-between gap-10'>
            <div className='flex flex-col items-start justify-start gap-6'>
                <Link href='/'>
                <div className='flex items-center justify-center gap-2'>
                    <Image src='/layout/footer/logo.png' alt='logo' width={40} height={40} />
                    <h5 className='text-white text-[20px] font-semibold'>
                        Flag Analysis
                    </h5>
                </div>
                </Link>
                <p className='text-primary-400 max-w-[300px] '>
                Professional football intelligence platform
                focused on player, team, and tactical
                analysis with strong contextual awareness
                of Saudi football.
                </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-6'>
                <h5 className='text-white text-[20px] font-semibold'>
                    Platform
                </h5>
                <div className='flex flex-col items-start justify-start gap-3'>
                    <Link href='/'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        Player Intelligence
                        </p>
                    </Link>
                    <Link href='/Team_Tactical'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        Team & Tactics
                        </p>
                    </Link>
                    <Link href='/Scouting_intelligence'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        Scouting Intelligence
                        </p>
                    </Link>
                    <Link href='/Whatsapp_intelligence'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        WhatsApp Intelligence
                        </p>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-6'>
                <h5 className='text-white text-[20px] font-semibold'>
                    Company
                </h5>
                <div className='flex flex-col items-start justify-start gap-3'>
                    <Link href='/About'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        About
                        </p>
                    </Link>
                    <Link href='/Contact'>
                        <p className='text-primary-400 hover:text-white transition-all duration-300 text-[16px] font-semibold'>
                        Contact
                        </p>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-6'>
                <h5 className='text-white text-[20px] font-semibold'>
                    Follow Us
                </h5>
                <div className='flex items-center justify-start gap-3'>
                    <Link href='/' className='bg-brand-900 p-2 rounded-full'>
                        <Image src='/layout/footer/linkedin.png' alt='linkedin' width={20} height={20} />
                    </Link>
                    <Link href='/' className='bg-brand-900 p-2 rounded-full'>
                        <Image src='/layout/footer/instagram.png' alt='instagram' width={20} height={20} />
                    </Link>
                    <Link href='/' className='bg-brand-900 p-2 rounded-full'>
                        <Image src='/layout/footer/twitter.png' alt='twitter' width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
        </div>
        <div className=' border-t border-primary-700 container flex items-center justify-between'>
                <p className='text-primary-400 text-[16px] font-semibold'>
                    &copy; 2026 Flag Analysis. All rights reserved.
                </p>
                <p className='text-primary-400 text-[16px] font-semibold'>
                    Privacy Policy
                </p>
            </div>
    </footer>
  )
}
