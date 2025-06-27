'use client'
import React from 'react'
import { font } from '../Font/font'
import { 
  FaStar, 
  FaCheck,
  FaDesktop,
  FaMobile,
  FaGlobe
} from 'react-icons/fa'

const Pricing = () => {
  const starterSiteFeatures = [
    "Up to 5 Informational Pages",
    "Mobile Responsive Design",
    "Contact Form & Google Map",
    "Basic SEO Optimization",
    "1 Revision Round",
    "Delivery: 1–2 Weeks"
  ]

  const starterAppFeatures = [
    "Up to 5 Screens",
    "Android or iOS",
    "Simple UI/UX",
    "Contact Form & Push Notifications",
    "Delivery: 3–4 Weeks"
  ]

  return (
    <section className={`${font.className} py-16 lg:py-24 bg-gray-50 relative z-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium uppercase tracking-wide">PRICING PLAN</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#283a64] leading-tight">
                Affordable <span className="text-cyan-400">plans</span> for<br />
                every business
              </h2>
            </div>

            {/* Feature Sections */}
            <div className="space-y-8">
              {/* Customizable Packages */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaCheck className="w-3 h-3 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#283a64]">Customizable Packages</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-9">
                  We offer flexible packages tailored to your specific marketing needs, 
                  whether you're launching a startup or scaling your business.
                </p>
              </div>

              {/* Flexible Options */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                    <FaCheck className="w-3 h-3 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#283a64]">Flexible Options</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-9">
                  We offer adaptable packages designed to fit the unique needs of 
                  each client.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Starter Site Card */}
            <div className="h-[600px] bg-gradient-to-b from-[#283a64] to-[#3b4d6b] backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-white relative overflow-hidden flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <FaDesktop className="w-6 h-6 text-[#283a64]" />
              </div>
              
              {/* Title & Description */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <FaGlobe className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xl font-bold">Starter Site</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Perfect for small businesses looking to establish an online presence.
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-cyan-400 text-lg font-medium">$</span>
                  <span className="text-4xl font-bold text-cyan-400">499</span>
                </div>
              </div>

              {/* Get Started Button */}
              <button className="w-full bg-gray-600/80 backdrop-blur-sm hover:bg-gray-700/80 text-white py-3 rounded-full font-medium transition-all duration-200 mb-6">
                Get Started
              </button>

              {/* Features */}
              <div className="space-y-3 flex-grow">
                {starterSiteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 pb-2 border-b border-gray-600/30">
                    <FaCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Starter App Card */}
            <div className="h-[600px] bg-gradient-to-b from-[#283a64] to-cyan-600 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-white relative overflow-hidden flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <FaMobile className="w-6 h-6 text-[#283a64]" />
              </div>
              
              {/* Title & Description */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold">Starter App</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Single platform app for small businesses or MVPs.
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-cyan-400 text-lg font-medium">$</span>
                  <span className="text-4xl font-bold text-cyan-400">2,499</span>
                </div>
              </div>

              {/* Get Started Button */}
              <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-[#283a64] py-3 rounded-full font-medium transition-all duration-200 mb-6">
                Get Started
              </button>

              {/* Features */}
              <div className="space-y-3 flex-grow">
                {starterAppFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 pb-2 border-b border-white/20">
                    <FaCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing