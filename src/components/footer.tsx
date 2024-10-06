'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // 当滚动到距离底部100px时显示页脚
      if (documentHeight - (scrollTop + windowHeight) < 100) {
        setShowFooter(true)
      } else {
        setShowFooter(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 px-6 sm:px-16 py-8 shadow-lg"
        >
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="hidden sm:block sm:w-1/3"></div>
            <p className="text-sm text-gray-600 w-full sm:w-1/3 text-center mb-4 sm:mb-0">&copy; 2024 OsGa</p>
        <div className="w-1/3 flex justify-end sm:justify-end">
                    <button 
                    onClick={scrollToTop} 
                    className="bg-blue-500 hover:bg-blue-700 rounded-md px-6 py-2 text-white transition-colors duration-300"
                    >
                    回到頂部
                    </button>
            </div>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  )
}