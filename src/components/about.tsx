import React from 'react';

export default function About() {
  return (
    <div id='about' className='w-full h-screen flex flex-col justify-center'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='rounded-xl w-[80%] h-auto mx-auto my-4' src='/images/header.png' alt="/" />
        <div className="flex-[0.75] flex justify-center flex-col">
          <div className='flex flex-col justify-center max-lg:px-10'>
            <h1 className='md:text-6xl sm:text-2xl text-4xl font-bold py-1'>我是 OsGa</h1>         
            <div className='font-bold text-gray-700 md:text-xl sm:text-lg '>
                <p>你說得對 這是我第二次寫這個網頁</p>
                <p>我只是練習一下 Next.js 和 tailwindcss</p>
                <p>然後 gihutb 搞我哈哈。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
