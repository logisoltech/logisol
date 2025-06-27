'use client'
import React from 'react'
import { font } from '../Font/font'

const Facts = () => {
  return (
    <section className={`${font.className} relative z-20 max-w-7xl mx-auto px-4 py-12`}>
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg bg-white">
        {/* Left: Image */}
        <div className="flex-1 min-w-[260px] bg-gray-100">
          <img
            src="/facts.webp"
            alt="Key Facts"
            className="object-cover w-full h-full"
            style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
          />
        </div>
        {/* Right: Facts Card */}
        <div className="flex-1 bg-gradient-to-br from-[#9aa3b3] to-[#a8a9ab] p-8 md:p-12 flex flex-col justify-center rounded-none md:rounded-tr-3xl md:rounded-br-3xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl text-[#283A64] leading-tight">
              Key <span className="text-cyan-400">facts</span> about our<br />success
            </h2>
            {/* Circular Arrow */}
            <div className="hidden md:flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="30" fill="none" stroke="#b2c3d6" strokeWidth="2" />
                </svg>
                <svg className="w-6 h-6 text-[#283A64]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
                </svg>
                <span className="absolute text-xs text-gray-400 w-24 text-center left-1/2 -translate-x-1/2 top-0 rotate-[-25deg]" style={{fontSize:'0.65rem'}}>
                  Get Free Consultation
                </span>
              </div>
            </div>
          </div>
          {/* Facts Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 md:gap-8 bg-transparent">
            {/* Fact 1 */}
            <div className="border-b border-r border-gray-300 pb-6 pr-6">
              <div className="text-3xl md:text-4xl text-[#283A64] mb-2">150+</div>
              <div className="text-white text-sm md:text-base font-medium">Demonstrating a proven track record of delivering diverse digital solutions.</div>
            </div>
            {/* Fact 2 */}
            <div className="border-b pb-6 pl-6 border-gray-300">
              <div className="text-3xl md:text-4xl text-[#283A64] mb-2">50+</div>
              <div className="text-white text-sm md:text-base font-medium">A dedicated team of skilled professionals.</div>
            </div>
            {/* Fact 3 */}
            <div className="border-r pt-6 pr-6 border-gray-300">
              <div className="text-3xl md:text-4xl text-[#283A64] mb-2">99%</div>
              <div className="text-white text-sm md:text-base font-medium">Maintaining long-term partnerships with repeat clients.</div>
            </div>
            {/* Fact 4 */}
            <div className="pt-6 pl-6">
              <div className="text-3xl md:text-4xl text-[#283A64] mb-2">100+</div>
              <div className="text-white text-sm md:text-base font-medium">Building lasting relationships through customer-centric solutions.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts 