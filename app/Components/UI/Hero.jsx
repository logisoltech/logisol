'use client'
import React, { useCallback, useMemo } from 'react'
import { font } from '../Font/font'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { particlesConfig } from '../Data/particlesConfig'
import { headingFont } from '../Font/headingFont'

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])
  
  const particlesLoaded = useCallback(async container => {
    console.log(container)
  }, [])

  return (
    <section className={`${font.className} relative h-[44rem] bg-white overflow-hidden`}>
      {/* Particles.js Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className={`${headingFont.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#283a64] leading-tight`}>
                <span className='text-cyan-400'>Log</span>ic<br />
                <span className='text-cyan-400'>I</span>nnovation<br />
                <span className='text-cyan-400'>Sol</span>utions<br />
                
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md">
                Turning Logic into Innovative Solutions
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-8 py-2 rounded-full transition-colors duration-200 font-medium text-lg flex items-center space-x-2">
                <span>Let's Discuss</span>
              </button>
              <div className="w-12 h-12 custom-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main circular background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full transform scale-110 opacity-30"></div>
              <div className="absolute inset-0 bg-[#283a64] rounded-full transform scale-95 opacity-10"></div>
              
              {/* Main Hero Image */}
              <img 
                src="/hero.webp" 
                alt="Professional working on laptop representing Logic Innovation Solutions" 
                className="relative z-10 w-full h-auto max-w-xs mx-auto lg:max-w-md rounded-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 z-20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 z-20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>

              {/* Additional decorative dots */}
              <div className="absolute top-1/4 -left-8 hidden lg:block z-20">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/2 -left-4 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
              </div>
              <div className="absolute bottom-1/4 -left-6 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero