'use client'
import React from 'react'
import { font } from '../Font/font'

const AboutUs = () => {
  return (
    <section className={`${font.className} bg-white relative z-20 w-full mx-auto px-4 py-24`}>
      <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
        {/* Left: Image */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <img
            src="/about-us.webp"
            alt="About Us"
            className="rounded-3xl object-cover w-full max-w-lg h-[480px] md:h-[600px] shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start mt-12 md:mt-0">
          <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
            <span className="text-cyan-400 text-lg">*</span> About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Empowering Your <br />
            <span className="text-cyan-400">Digital Journey</span>
          </h2>
          <div className="bg-cyan-300/90 rounded-xl p-6 mb-6 w-full">
            <p className="text-gray-900 text-base md:text-lg">
              At Logisol Technologies, we specialize in delivering innovative digital solutions tailored to your business needs. Our expertise spans web and app development, digital marketing, SEO, graphic design, and video editing. We are committed to transforming your ideas into impactful digital experiences.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition">Read More</button>
            <button className="bg-cyan-300 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Overlapping Full-width Card */}
      <div className="absolute bottom-10 left-0 right-0 w-full px-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-4 bg-gradient-to-r from-[#283A64] to-[#b2eaf6] rounded-2xl px-6 py-6 shadow-lg">
          {/* Experience Block */}
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md min-w-[180px] text-center md:text-left">
            <span className="text-5xl font-bold text-cyan-400">10+</span>
            <div className="text-gray-700 text-base mt-1">Years of experience in</div>
            <div className="text-cyan-700 text-sm underline cursor-pointer">Software Development</div>
          </div>

          {/* Features */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-center md:items-start text-left border-b md:border-b-0 md:border-r border-gray-400 md:pr-6">
              <svg className="w-7 h-7 text-[#283A64] mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span className="font-bold text-base text-[#283A64] leading-tight">Tailored Business<br />Solutions</span>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center md:items-start text-left md:border-r border-gray-400 md:px-6">
              <svg className="w-7 h-7 text-[#283A64] mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-base text-[#283A64] leading-tight">Proactive Trends<br />Tracking</span>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center md:items-start text-left md:pl-6">
              <svg className="w-7 h-7 text-[#283A64] mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z" />
              </svg>
              <span className="font-bold text-base text-[#283A64] leading-tight">Affordable<br />Packages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
