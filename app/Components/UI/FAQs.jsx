'use client'
import React, { useState } from 'react'
import { font } from '../Font/font'

const faqs = [
  {
    question: 'How do you develop a mobile app?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Understanding your requirements</li>
        <li>Creating wireframes and UI/UX design</li>
        <li>Developing the app using the right technology</li>
        <li>Testing thoroughly for bugs and performance</li>
        <li>Deploying on App Stores (iOS & Android)</li>
        <li>We also offer post-launch support and updates.</li>
      </ul>
    ),
  },
  {
    question: 'What is an SEO service?',
    answer: 'SEO (Search Engine Optimization) is the process of improving your website to increase its visibility in search engines, helping you attract more organic traffic.',
  },
  {
    question: 'How much does it cost to develop a website?',
    answer: 'The cost depends on your requirements, features, and design. Contact us for a tailored quote based on your project needs.',
  },
  {
    question: 'What are the top 3 social media platforms?',
    answer: 'The top 3 platforms for most businesses are Facebook, Instagram, and LinkedIn, but the best choice depends on your audience and goals.',
  },
]

const avatars = ['/avatar-liam.webp', '/avatar-olivia.webp', '/avatar-emma.webp']

const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className={`${font.className} relative z-20 max-w-7xl mx-auto px-4 py-16`}>
      <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
        <span className="text-cyan-400 text-lg">*</span> FAQs
      </span>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Heading and Trust Score */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#283A64] leading-tight mb-2">
            Answers to your common<br />
            <span className="text-cyan-400">questions</span>
          </h2>
          <p className="text-gray-700 text-base mb-8 max-w-lg">
            Find clear and concise answers to the most frequently asked questions about our services.
          </p>
          <div className="bg-gray-200 border border-gray-400 rounded-2xl flex items-center px-8 py-6 gap-6 w-full max-w-xl">
            <span className="text-5xl font-bold text-[#283A64]">4.9</span>
            <span className="text-cyan-400">
              <svg className="w-8 h-8 inline-block" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            </span>
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="avatar" className="w-10 h-10 rounded-full border-2 border-white shadow" style={{zIndex: 10-i}} />
              ))}
            </div>
            <div className="border-l border-gray-400 h-10 mx-4"></div>
            <div>
              <div className="font-semibold text-gray-800">Explore our trust score Customer Reviews</div>
            </div>
          </div>
        </div>
        {/* Right: Accordion */}
        <div className="flex-1 w-full max-w-2xl flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const open = openIdx === idx
            return (
              <div key={idx} className={`border border-gray-400 rounded-2xl bg-white transition-all duration-300 ${open ? 'shadow-lg' : ''}`}> 
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpenIdx(open ? null : idx)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-bold text-lg md:text-xl text-[#283A64]">{faq.question}</span>
                  <span className="ml-4">
                    {open ? (
                      <svg className="w-7 h-7 text-[#283A64]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    ) : (
                      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" /></svg>
                    )}
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`px-6 pb-5 text-gray-800 text-base transition-all duration-300 ${open ? 'block' : 'hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQs 