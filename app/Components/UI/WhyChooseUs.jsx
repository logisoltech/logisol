'use client'
import React from 'react'
import { font } from '../Font/font'
import { 
  FaStar, 
  FaUsers,
  FaLightbulb,
  FaUserFriends,
  FaTrophy,
  FaArrowRight,
  FaCode,
  FaMobile,
  FaChartBar,
  FaPalette,
  FaVideo,
  FaSearch
} from 'react-icons/fa'

const WhyChooseUs = () => {
  return (
    <section className={`${font.className} py-16 lg:py-24 bg-white relative z-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaStar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium uppercase tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#283a64]">
              Your <span className="text-cyan-400">Trusted</span> Digital Partner
            </h2>
          </div>
          
          <div className="hidden lg:flex items-center space-x-3">
            <button className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium">
              Contact Us
            </button>
            <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

                {/* Main Content */}
        <div className="relative min-h-[700px] flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Central circular background with man's image */}
            <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
              {/* Rotating Circle Background */}
              <img 
                src="/why-choose-circle.png" 
                alt="Rotating circle background"
                className="w-full h-full animate-spin absolute inset-0"
                style={{ animationDuration: '20s' }}
              />
              
              {/* Central Image - Man */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-[#283a64] flex items-center justify-center">
                  <img 
                    src="/why-choose-us.webp" 
                    alt="Digital partner professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature Points positioned around the circle */}
            {/* Expert Team - Top Left */}
            <div className="absolute -top-16 -left-80 lg:-left-[350px]">
              <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <FaUsers className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-[#283a64] text-base">Expert Team</h3>
                </div>
                <p className="text-sm text-gray-600">A dedicated team of professionals.</p>
              </div>
            </div>

            {/* Client-Centric Approach - Top Right */}
            <div className="absolute -top-16 -right-80 lg:-right-[350px]">
              <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <FaUserFriends className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-[#283a64] text-base">Client-Centric Approach</h3>
                </div>
                <p className="text-sm text-gray-600">Solutions tailored to your needs.</p>
              </div>
            </div>

            {/* Innovative Strategies - Bottom Left */}
            <div className="absolute -bottom-16 -left-80 lg:-left-[350px]">
              <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <FaLightbulb className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-[#283a64] text-base">Innovative Strategies</h3>
                </div>
                <p className="text-sm text-gray-600">Staying ahead with the latest technologies.</p>
              </div>
            </div>

            {/* Proven Results - Bottom Right */}
            <div className="absolute -bottom-16 -right-80 lg:-right-[350px]">
              <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <FaTrophy className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-[#283a64] text-base">Proven Results</h3>
                </div>
                <p className="text-sm text-gray-600">Track record of successful projects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
              Contact Us
            </button>
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs