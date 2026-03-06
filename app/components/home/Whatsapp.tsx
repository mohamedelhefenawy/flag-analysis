import React from 'react'
import WhatsappCard from '../card/WhatsappCard'
export default function Whatsapp() {
  return (
    <section className='container'>
      <WhatsappCard
        image='/home/whats/whats.png'
        title='Get Intelligence via '
        description='Technical departments and sporting directors seeking structured intelligence.'
        borderColor='#0D4A24'
        hoverBorderColor='#25D366'
        hoverColor='linear-gradient(
  to bottom,
  #051a0a 0%,
  #000000 45%,
  #000000 60%,
  #051a0a 100%
)'
        width={64}
        height={64}
        pixelSnowcolor='#25D366'
      />
    </section>
  )
}
