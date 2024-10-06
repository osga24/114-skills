"use client"
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // 當組件加載後，設置可見狀態為 true
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 延遲時間可以根據需要調整

    return () => clearTimeout(timer); // 清理計時器
  }, []);

  const handleClick = () => {
    controls.start({ y: [-20, 0, -20] });
    smoothScrollTo('#about');
  };

  const smoothScrollTo = (targetSelector: string) => {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const startY = window.pageYOffset;
      const targetY = targetElement.getBoundingClientRect().top + startY;

      const duration = 1000; // 毫秒
      const startTime = performance.now();

      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + (targetY - startY + 100) * easedProgress);
        // 這裡可以透過 + 改變後移的位置 ex +50
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          controls.start({ y: 0 });
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className='relative z-1 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
      <h1 className={` md:text-7xl sm:text-6xl text-4xl mt-20 font-extrabold md:py-6 py-2 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        114 技優甄審社群
      </h1>
      <p className={`flex flex-row justify-center font-bold sm:text-2xl md:text-3xl transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        你說得對 我整個重寫第二次
      </p>
      
      {/* 按鈕區域 */}
      <div className={`absolute bottom-10 left-0 right-0 flex justify-center transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a href="#about" onClick={handleClick}>
          <motion.img
            src='images/down_arrow.svg'
            alt='arrow-down'
            className='w-[52px] h-[52px] object-contain'
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </a>
      </div>
    </div>
  );
}
