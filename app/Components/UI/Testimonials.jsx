'use client'
import React from 'react'
import { font } from '../Font/font'

const testimonials = [
  {
    title: 'Logisol brought our app vision to life—smooth, polished, and on schedule.',
    body: `We partnered with Logisol to build a cross-platform mobile app from a rough MVP concept. From wireframes to final deployment, their team (led by Olivia) delivered a sleek, intuitive UI and rock-solid backend. They managed timelines flawlessly, and post-launch metrics showed a 4.8 ★ average rating, 10k+ downloads in the first month, and daily active users doubling our target. Exceptional work all around.`,
    name: 'Liam Carter',
    role: 'Liam Carter, Co-Founder & CTO, FitWave',
    avatar: '/avatar-liam.webp',
  },
  {
    title: 'Our website relaunch doubled our traffic—and sales followed.',
    body: `Logisol redesigned our outdated site with a fast, responsive, SEO-Optimized platform that now feels modern and engaging. Under Emma's project leadership, load times dropped 60%, bounce rate decreased by 45%, and organic traffic nearly doubled within three months. Best part? Online sales increased by 35% during that time. True professionals—on time, on budget, and beyond expectations.`,
    name: 'Olivia Ramirez',
    role: 'Owner, PureBliss Skin Care',
    avatar: '/avatar-olivia.webp',
  },
  {
    title: 'Strategic marketing that actually moves the needle.',
    body: `Logisol crafted a smart, multi-channel campaign including social reels, content strategy, and targeted ad spend. Under Liam's coordination, our organic engagement soared 55%, qualified leads rose by 42%, and cost-per-lead dropped 28% in just 90 days. Their transparent reporting and hands-on creativity made them feel like part of our team. Highly recommend!`,
    name: 'Emma Walker',
    role: 'Director of Growth, UrbanHome Furnishings',
    avatar: '/avatar-emma.webp',
  },
]

const Testimonials = () => {
  return (
    <div className='w-full mx-auto bg-white relative z-20'>
    <section className={`${font.className} relative z-20 max-w-7xl mx-auto px-4 py-16`}>
      <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
        <span className="text-cyan-400 text-lg">*</span> Testimonials
      </span>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#283A64] leading-tight">
          What <span className="text-cyan-400">clients</span> are saying
        </h2>
        <a href="#about" className="flex items-center gap-2 bg-gray-100 hover:bg-cyan-400 hover:text-white text-gray-800 px-6 py-2 rounded-full font-medium shadow transition">
          About Us
          <span className="bg-cyan-400 text-white rounded-full p-2 ml-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col bg-gradient-to-br from-[##76787a] to-[#d9dbdd] justify-between border border-gray-400 rounded-2xl shadow-md bg-gray-50 px-6 py-6 h-full">
            {/* Stars */}
            <div className="flex items-center justify-center mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </div>
            {/* Title */}
            <div className="font-bold text-md md:text-lg text-gray-900 mb-2">{t.title}</div>
            {/* Body */}
            <div className="text-gray-700 text-sm mb-6 flex-1">{t.body}</div>
            {/* Avatar and Name */}
            <div className="flex items-center gap-3 mt-4">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
              <div>
                <div className="font-bold text-cyan-700 text-base leading-tight">{t.name}</div>
                <div className="text-xs text-gray-500 leading-tight">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Testimonials 