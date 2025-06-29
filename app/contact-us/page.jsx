"use client";
import React, { useCallback, useState } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import Collaborate from "../Components/UI/Collaborate";

export default function ContactUsPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Track hovered column: 0=email, 1=phone, 2=location
  const [activeIdx, setActiveIdx] = useState(0);
  const columns = [
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <rect
            width="20"
            height="14"
            x="2"
            y="5"
            rx="2"
            stroke="currentColor"
          />
          <path d="M22 7l-10 6L2 7" stroke="currentColor" />
        </svg>
      ),
      content: (
        <a
          href="mailto:info@logisol.tech"
          className="text-2xl md:text-2xl font-bold underline text-white hover:text-cyan-400 transition text-center"
        >
          info@logisol.tech
        </a>
      ),
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
          />
        </svg>
      ),
      content: (
        <a
          href="tel:(626)-671-6483"
          className="text-2xl md:text-2xl font-bold underline text-white hover:text-cyan-400 transition text-center"
        >
          (626)-671-6483
        </a>
      ),
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
            stroke="currentColor"
          />
        </svg>
      ),
      content: (
        <div className="text-2xl md:text-2xl font-bold underline text-white text-center">
          1001 S Main St Kalispell,
          <br />
          Montana, 59901, USA
        </div>
      ),
    },
  ];

  return (
    <div className={font.className}>
      <Navbar />
      {/* Hero/Main Section */}
      <section className="relative h-[32rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        {/* Particles.js Background */}
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className={`${headingFont.className} text-6xl md:text-7xl font-extrabold text-[#283A64] text-center mb-6`}
          >
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="text-lg font-semibold text-[#283A64] hover:underline flex items-center gap-2"
            > 
              Home <span className="text-cyan-400"><span className="text-2xl">*</span> Contact Us</span> 
            </a>
          </div>
        </div>
      </section>

      <Slider />

      {/* --- Contact Info Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 bg-transparent px-24">
        <div
          className="w-full max-w-7xl flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden border border-gray-300 bg-gradient-to-b from-[#25395a] to-[#5fa2b8] shadow-lg"
          onMouseLeave={() => {}}
        >
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`flex-1 flex flex-col items-center justify-center rounded-3xl pt-12 pb-6 mb-16 transition-colors duration-700 ${
                activeIdx === idx
                  ? "bg-gradient-to-b from-[#25395a] to-[#344e6e] animate-gradient-flow"
                  : ""
              } ${idx === 0 ? "md:rounded-none" : ""}`}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <div className="w-36 h-36 bg-[#7ee0f6] flex items-center justify-center rounded-full mb-6">
                {col.icon}
              </div>
              {col.content}
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Form Section --- */}
      <section className="w-full bg-white relative z-20 mx-auto px-24 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex-1 min-w-[320px]">
            <span className="uppercase tracking-widest text-base font-semibold text-[#283A64] flex items-center gap-2 mb-2">
              <span className="text-cyan-400 text-lg">*</span> CONTACT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] leading-tight mb-2">
              Get in <span className="text-cyan-400">touch</span> with us
            </h2>
          </div>
          <div className="flex-1 flex justify-end min-w-[320px]">
            <p className="text-gray-700 text-base md:text-lg max-w-md mt-4 md:mt-0">
              Connect with our team for tailored solutions that elevate your business, engage your audience, and drive results.
            </p>
          </div>
        </div>
        <hr className="mb-8 border-gray-300" />
        <div className="w-full flex justify-center">
          <form className="w-full max-w-4xl bg-white border border-gray-400 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="First name" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
              <input type="text" placeholder="Last name" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Enter your mobile no." className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
              <input type="email" placeholder="Enter your e-mail" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
            </div>
            <textarea placeholder="Write message..." rows={4} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none" />
            <div className="flex flex-col md:flex-row items-center gap-4 max-md:items-start">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="not-robot" className="w-5 h-5 border-gray-300 rounded" />
                <label htmlFor="not-robot" className="text-gray-700">I'm not a robot</label>
              </div>
              <div className="flex-1 flex justify-center max-md:justify-start">
                {/* Placeholder for reCAPTCHA */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center min-w-[180px] min-h-[56px]">
                  <span className="text-xs text-gray-500">reCAPTCHA</span>
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <button type="submit" className="bg-[#25395a] hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full transition-all">Submit Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="w-full bg-white relative z-20 mx-auto px-24 pb-20 flex justify-center">
        <div className="w-full max-w-7xl">
          <iframe
            title="Logisol Technologies Location"
            src="https://www.google.com/maps?q=W38P%2B2P%20Block%2013D%2C%20Block%2013%20D%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Pakistan&output=embed"
            width="100%"
            height="450"
            style={{ border: '1px solid #e5e7eb', borderRadius: '2rem', width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Collaborate />
      <Footer />
    </div>
  );
}
