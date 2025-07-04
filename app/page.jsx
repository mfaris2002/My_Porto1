'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatICreate from '@/components/WhatICreate'
import Quote from '@/components/Quote'
import Tools from '@/components/Tools'
//import SplashCursor from '@/components/SplashCursor'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatICreate />
      <Tools />
    </main>
  )
}
