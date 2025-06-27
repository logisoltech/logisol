'use client'
import React from 'react'
import { font } from '../Font/font'

const Footer = () => {
  return (
    <footer className={`${font.className} bg-white pt-12 pb-4 px-4 border-t border-gray-200`}> 
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col justify-start">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">Let's achieve <span className="text-cyan-400">excellence</span></h2>
          <p className="text-cyan-400 font-semibold mt-6 mb-2 text-lg">Subscribe to our newsletter</p>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-full border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button type="submit" className="-ml-8 z-10 bg-cyan-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
              </svg>
            </button>
          </form>
          <div className="flex items-center space-x-4 mb-4">
            <img src="/trust-plot-placeholder.png" alt="Trust Plot" className="w-6 h-6" />
            <span className="text-gray-700 text-sm">Trust Plot</span>
            <img src="/google-partner-placeholder.png" alt="Google Partner" className="w-6 h-6 ml-4" />
            <span className="text-gray-700 text-sm">Google Partner</span>
          </div>
          <div className="mt-4">
            <img src="/clutch-logo-placeholder.png" alt="Clutch" className="w-32 h-10 object-contain" />
            <div className="text-gray-700 text-sm mt-1 flex items-center">
              4.9/5.0
              <span className="ml-2 text-yellow-400 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">About us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Website Development</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Mobile App Development</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Social Media Marketing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">SEO</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Graphic Design</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Video Editing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Help</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Term's & Condition</a></li>
            <li><a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Contact & Social Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-gray-400 to-cyan-200 flex flex-col md:flex-row items-center justify-between px-8 py-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logisol-logo-nav.png" alt="Logisol Logo" className="w-40 h-14 object-contain" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="flex items-center text-lg font-semibold text-gray-800 mb-2 md:mb-0">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5A1.75 1.75 0 0121 5.75v12.5A1.75 1.75 0 0119.25 20H4.75A1.75 1.75 0 013 18.25V5.75z" /></svg>
              (626)-671-6483
            </div>
            <span className="hidden md:block border-l border-gray-400 h-6 mx-4"></span>
            <div className="flex items-center text-lg font-semibold text-gray-800">
              <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
              info@logisol.tech
            </div>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8">
        <p className="text-gray-700 text-sm mb-4 md:mb-0">Copyright © 2021-2025 All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center border border-gray-700 rounded-full px-4 py-2 text-gray-700 hover:bg-cyan-400 hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
            Facebook
          </a>
          <a href="#" className="flex items-center border border-gray-700 rounded-full px-4 py-2 text-gray-700 hover:bg-cyan-400 hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094m0-2.163C8.741-.069 8.332-.058 7.052.002 5.782.062 4.515.334 3.541 1.308 2.567 2.282 2.295 3.55 2.233 4.816c-.06 1.28-.071 1.689-.071 5.184s.012 3.904.07 5.184c.062 1.266.334 2.534 1.308 3.508.974.974 2.242 1.246 3.508 1.308 1.28.06 1.689.071 5.184.071s3.904-.012 5.184-.07c1.266-.062 2.534-.334 3.508-1.308.974-.974 1.246-2.242 1.308-3.508.058-1.28.069-1.689.069-5.184s-.012-3.904-.07-5.184c-.062-1.266-.334-2.534-1.308-3.508-.974-.974-2.242-1.246-3.508-1.308C15.647.175 15.267.163 12 .163z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
            Instagram
          </a>
          <a href="#" className="flex items-center border border-gray-700 rounded-full px-4 py-2 text-gray-700 hover:bg-cyan-400 hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z"/></svg>
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 