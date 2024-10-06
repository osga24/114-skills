import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Main from '@/components/main'
import About from '@/components/about'
export default function Home() {
  return (
    <div className="relative">
            <div className="fixed bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-300 to-white z-[-1]"></div>
            <Navbar/> 
            <Main/>
            <About/>
            <Footer/>
    </div>
  )
}
