'use client'
import React from 'react'
import { font } from '../Font/font'

const Collaborate = () => {
  return (
    <section className={`${font.className} w-full flex flex-col items-center justify-center py-24 relative bg-white`}>
      <div className="text-center mb-6">
        <span className="uppercase tracking-widest text-base font-semibold text-[#283A64]">LET'S COLLABORATE</span>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center">
        <h1 className="text-[#18345A] font-extrabold text-[8rem] max-sm:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] leading-none text-center select-none">
          LET'S WORK
        </h1>
        {/* Centered Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <a href="#contact" className="flex flex-col items-center justify-center w-32 h-32 md:w-38 md:h-38 rounded-full bg-[#86d8eb] shadow-lg hover:bg-[#18345A] hover:text-black transition-all duration-200 text-white text-lg md:text-xl font-semibold relative group">
            <span className="flex flex-col items-center justify-center h-full">
              <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Get In Touch
            </span>
          </a>
        </div>
        <h1 className="text-[#18345A] font-extrabold text-[8rem] max-sm:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] leading-none text-center select-none mt-4">
          TOGETHER
        </h1>6r
      </div>
    </section>
  )
}

export default Collaborate 