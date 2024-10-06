'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500); // 延遲 500ms 後顯示
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    smoothScrollTo('#about');
  };

  const smoothScrollTo = (targetSelector: string) => {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const startY = window.pageYOffset;
      const targetY = targetElement.getBoundingClientRect().top + startY;

      const duration = 1000;
      const startTime = performance.now();

      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutCubic = (t: number): number => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + (targetY - startY) * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`relative z-10 transition-all duration-500 ease-in-out transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <nav className="bg-gray-800 relative z-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-auto w-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjg4ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNDcuMSAyMTUuNGMxMS43LTMyLjYgNDUuNC0xMjYuOSA0NS40LTE1Ny4xYzAtMjYuNi0xNS43LTQ4LjktNDMuNy00OC45Yy00NC42IDAtODQuNiAxMzEuNy05Ny4xIDE2My4xQzI0MiAxNDQgMTk2LjYgMCAxNTYuNiAwYy0zMS4xIDAtNDUuNyAyMi45LTQ1LjcgNTEuN2MwIDM1LjMgMzQuMiAxMjYuOCA0Ni42IDE2MmMtNi4zLTIuMy0xMy4xLTQuMy0yMC00LjNjLTIzLjQgMC00OC4zIDI5LjEtNDguMyA1Mi42YzAgOC45IDQuOSAyMS40IDggMjkuN2MtMzYuOSAxMC01MS4xIDM0LjYtNTEuMSA3MS43QzQ2IDQzNS42IDExNC40IDUxMiAyMTAuNiA1MTJjMTE4IDAgMTkxLjQtODguNiAxOTEuNC0yMDIuOWMwLTQzLjEtNi45LTgyLTU0LjktOTMuN00zMTEuNyAxMDhjNC0xMi4zIDIxLjEtNjQuMyAzNy4xLTY0LjNjOC42IDAgMTAuOSA4LjkgMTAuOSAxNmMwIDE5LjEtMzguNiAxMjQuNi00Ny4xIDE0OGwtMzQtNnpNMTQyLjMgNDguM2MwLTExLjkgMTQuNS00NS43IDQ2LjMgNDcuMWwzNC42IDEwMC4zYy0xNS42LTEuMy0yNy43LTMtMzUuNCAxLjRjLTEwLjktMjguOC00NS41LTExOS43LTQ1LjUtMTQ4LjhNMTQwIDI0NGMyOS4zIDAgNjcuMSA5NC42IDY3LjEgMTA3LjRjMCA1LjEtNC45IDExLjQtMTAuNiAxMS40Yy0yMC45IDAtNzYuOS03Ni45LTc2LjktOTcuN2MuMS03LjcgMTIuNy0yMS4xIDIwLjQtMjEuMW0xODQuMyAxODYuM2MtMjkuMSAzMi02Ni4zIDQ4LjYtMTA5LjcgNDguNmMtNTkuNCAwLTEwNi4zLTMyLjYtMTI4LjktODguM2MtMTcuMS00My40IDMuOC02OC4zIDIwLjYtNjguM2MxMS40IDAgNTQuMyA2MC4zIDU0LjMgNzMuMWMwIDQuOS03LjcgOC4zLTExLjcgOC4zYy0xNi4xIDAtMjIuNC0xNS41LTUxLjEtNTEuNGMtMjkuNyAyOS43IDIwLjUgODYuOSA1OC4zIDg2LjljMjYuMSAwIDQzLjEtMjQuMiAzOC00MmMzLjcgMCA4LjMuMyAxMS43LS42YzEuMSAyNy4xIDkuMSA1OS40IDQxLjcgNjEuN2MwLS45IDItNy4xIDItNy40YzAtMTcuNC0xMC42LTMyLjYtMTAuNi01MC4zYzAtMjguMyAyMS43LTU1LjcgNDMuNy03MS43YzgtNiAxNy43LTkuNyAyNy4xLTEzLjFjOS43LTMuNyAyMC04IDI3LjQtMTUuNGMtMS4xLTExLjItNS43LTIxLjEtMTYuOS0yMS4xYy0yNy43IDAtMTIwLjYgNC0xMjAuNi0zOS43YzAtNi43LjEtMTMuMSAxNy40LTEzLjFjMzIuMyAwIDExNC4zIDggMTM4LjMgMjkuMWMxOC4xIDE2LjEgMjQuMyAxMTMuMi0zMSAxNzQuN20tOTguNi0xMjZjOS43IDMuMSAxOS43IDQgMjkuNyA2Yy03LjQgNS40LTE0IDEyLTIwLjMgMTkuMWMtMi44LTguNS02LjItMTYuOC05LjQtMjUuMSIvPjwvc3ZnPg==" alt="Logo" />
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a href="#home" className="text-xl text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">首頁</a>
                  <a href="#about" onClick={handleClick} className="text-xl text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">關於</a>
                  <a href="#" className="text-xl text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">歷屆資料</a>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded hidden md:block">
                  <a href="https://line.me/ti/g2/StIeyzM_9apJ3yugTlInMPfhlxheD2X2-_xwyg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">加入 Line 社群</a>
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">首頁</a>
            <a href="#about" onClick={(e) => { handleClick(e); toggleMenu(); }} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">關於</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">歷屆資料</a>
            <a href="https://line.me/ti/g2/StIeyzM_9apJ3yugTlInMPfhlxheD2X2-_xwyg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" className="text-green-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">加入 Line 社群</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
