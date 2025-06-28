"use client";
import React, { useCallback } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import AboutUs from "../Components/UI/AboutUs";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import {
  FaArrowRight,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

export default function AboutPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

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
            About <span className="text-cyan-400">Us</span>
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="text-lg font-semibold text-cyan-400 hover:underline flex items-center gap-2"
            >
              Home <span className="text-cyan-400 text-2xl">*</span> About Us
            </a>
          </div>
        </div>
      </section>

      <Slider />

      {/* About Us Section */}
      <section
        className={`${font.className} bg-white items-center justify-center relative z-20 w-full mx-auto px-24 py-24`}
      >
        <div className="flex gap-x-6 lg:flex-row md:flex-col-reverse max-sm:flex-col-reverse sm:flex-col-reverse relative">
          {/* Left: Image */}
          <div className="flex-1 flex flex-col w-full">
            <img
              src="/about-us-about-sec.webp"
              alt="About Us"
              className="rounded-3xl object-cover h-auto w-full h-[480px] md:h-[600px] shadow-lg"
            />
            <div className="max-w-7xl flex flex-col md:flex-row items-center md:items-stretch gap-4 px-6 py-6">
              {/* Satisfied Customers */}
              <div className="flex px-6 py-4 rounded-2xl shadow-md text-center md:text-left">
                <span className="text-5xl font-bold text-cyan-400">150+</span>
                <div className="text-gray-700 text-base mt-1">
                  Satisfied <br /> Customers
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col items-start mt-12 sm:mb-6 md:mb-3 max-sm:mb-3 md:mt-0">
            <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
              <span className="text-cyan-400 text-lg">*</span> About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              Empowering Business <br />
              <span className="text-cyan-400">
                Through Code, Creativity & Strategy.
              </span>
            </h2>
            <div className="bg-cyan-300/90 rounded-xl p-6 mb-6 w-full">
              <p className="text-gray-900 text-base md:text-lg">
                At Logisol Tech, we don't just build websites or write code—we
                build scalable digital solutions that help businesses compete,
                grow, and lead in the modern world. We are a results-driven
                software house offering a wide range of services that include
                Web Development, App Development, SEO, Social Media Marketing,
                Graphic Design, and Video Editing—each tailored to suit your
                industry and business goals.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition">
                Read More
              </button>
              <button className="bg-cyan-300 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Approach Section --- */}
      <section className="w-full bg-white relative z-20 mx-auto px-24 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[320px]">
          <span className="uppercase tracking-widest text-base font-semibold text-[#283A64] flex items-center gap-2 mb-4">
            <span className="text-cyan-400 text-lg">*</span> OUR APPROACH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] leading-tight mb-4">
            Strategic <span className="text-cyan-400">approach</span>
            <span className="text-[#283A64]"> to</span>
            <br />
            innovative solutions
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-xl mb-2">
            Founded by a team of tech-savvy innovators and digital strategists,
            Logisol Tech was born out of a simple idea: to bridge the gap
            between business vision and technology. With our roots in innovation
            and a stronghold in execution, we deliver real-world solutions
            powered by strategy, design, and code.
          </p>
        </div>
        {/* Right: Image Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 relative min-w-[320px]">
          <img
            src="/about-us-approach-1.webp"
            alt="Team using tablet"
            className="rounded-2xl object-cover w-full h-48 md:h-56"
          />
          <img
            src="/about-us-approach-2.webp"
            alt="Business strategy"
            className="rounded-2xl object-cover w-full h-48 md:h-56"
          />
          <img
            src="/about-us-approach-3.webp"
            alt="Team collaboration"
            className="rounded-2xl object-cover w-full h-48 md:h-56 col-span-2"
          />
          {/* Circular Badge */}
          {/* <div className="absolute -translate-x-52/55 -translate-y-1/2 md:left-auto md:top-auto md:-right-16 md:bottom-16 z-10">
                        <div className="w-36 h-36 bg-cyan-100 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-lg relative">
                            <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-2">
                                <span className="text-3xl">😊</span>
                            </div>
                            <span className="text-xs text-[#283A64] font-semibold text-center px-2">Business development and solutions Since 2021</span>
                        </div>
                    </div> */}
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className={`${font.className} w-full py-16 lg:py-24 bg-white relative z-20 overflow-hidden px-24`}
      >
        <div className="mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium uppercase tracking-wide">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#283a64]">
                Experienced <span className="text-cyan-400">Professionals</span>
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

          <p className="text-gray-700 text-lg md:text-xl my-4">
            We design intelligent systems, scalable platforms, and
            performance-optimized digital assets that turn visitors into
            customers and clicks into conversions. Whether you need a
            custom-built app or a multi-platform marketing campaign, we bring
            together creativity, strategy, and technology to elevate your brand.
          </p>

          {/* Main Content */}
          <div className="relative min-h-[700px] flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Central circular background with man's image */}
              <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
                {/* Rotating Circle Background */}
                <img
                  src="/why-choose-circle.png"
                  alt="Rotating circle background"
                  className="w-full h-full animate-spin absolute inset-0 max-sm:mt-15"
                  style={{ animationDuration: "20s" }}
                />

                {/* Central Image - Man */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-[#283a64] flex items-center justify-center max-sm:mt-30">
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
              <div className="absolute -top-16 lg:-left-[300px] md:-left-[200px] md:-top-[150px] sm:-top-[150px] sm:-left-[150px] max-sm:top-[-200px]">
                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaUsers className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-[#283a64] text-base">
                      Custom Solutions
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    No cookie-cutter code. Every project is built uniquely for
                    your needs.
                  </p>
                </div>
              </div>

              {/* Client-Centric Approach - Top Right */}
              <div className="absolute -top-16 -right-80 lg:-right-[300px] md:-right-[200px] md:-top-[150px] sm:-top-[150px] sm:-right-[200px] max-sm:right-[0px]">
                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaUserFriends className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-[#283a64] text-base">
                      Business-Oriented Strategy
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    We align every technical detail with your business
                    objectives.
                  </p>
                </div>
              </div>

              {/* Innovative Strategies - Bottom Left */}
              <div className="absolute -bottom-16 -left-80 lg:-left-[300px] md:-left-[200px] md:-bottom-[150px] sm:-bottom-[150px] sm:-left-[150px] max-sm:left-[0px] max-sm:bottom-[-200px]">
                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaLightbulb className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-[#283a64] text-base">
                      Performance First
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    From SEO to app speed, we optimize for real-world success.
                  </p>
                </div>
              </div>

              {/* Proven Results - Bottom Right */}
              <div className="absolute -bottom-16 -right-80 lg:-right-[300px] md:-right-[200px] md:-bottom-[150px] sm:-bottom-[150px] sm:-right-[200px] max-sm:right-[0px] max-sm:bottom-[-325px]">
                <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <FaTrophy className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-[#283a64] text-base">
                      Transparency
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    No hidden costs. No jargon. Just clear communication and
                    reliable delivery.
                  </p>
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

      {/* --- Connect With Us Section --- */}
      <section className="w-full bg-white relative z-20 mx-auto px-24 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[320px]">
          <span className="uppercase tracking-widest text-base font-semibold text-[#283A64] flex items-center gap-2 mb-4">
            <span className="text-cyan-400 text-lg">*</span> CONNECT WITH US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] leading-tight mb-4">
            Find and Connect With Us on{" "}
            <span className="text-cyan-400">social media</span> Platforms
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/avatar1.webp"
              alt="Avatar 1"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
            <img
              src="/avatar2.webp"
              alt="Avatar 2"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <img
              src="/avatar3.webp"
              alt="Avatar 3"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <span className="ml-2 text-gray-700 text-base">
              Join and share your experiences, Ideas with Logisol. We are here
              to listen and help your business grow.
            </span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <button className="bg-gray-200 text-[#283A64] font-bold px-8 py-2 rounded-full shadow hover:bg-gray-300 transition">
              Get Started
            </button>
            <span className="w-12 h-12 bg-cyan-300 rounded-full flex items-center justify-center text-white text-2xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
          {/* Card */}
          <div className="border rounded-2xl p-6 flex items-center gap-6 bg-white shadow-sm">
            <img
              src="/what-we-social-image.jpg.webp"
              alt="Social Media"
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#283A64] mb-2">
                Empowering Businesses to Unmatched Growth Through Innovative
                Strategies
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="flex items-center border border-[#283A64] rounded-full px-4 py-2 text-[#283A64] hover:bg-cyan-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center border border-[#283A64] rounded-full px-4 py-2 text-[#283A64] hover:bg-cyan-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-7 19h-3v-7h3v7zm-1.5-8.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 8.25h-3v-4c0-1.104-.896-2-2-2s-2 .896-2 2v4h-3v-7h3v1.25c.414-.586 1.09-1.25 2-1.25 1.654 0 3 1.346 3 3v4zm-7-8.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75z" />
                  </svg>
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Main Image and Badge */}
        <div className="flex-1 flex flex-col items-center relative min-w-[320px]">
          <img
            src="/connect-with-us.webp"
            alt="Connect with us"
            className="rounded-3xl object-cover w-full h-[400px] md:h-[500px] shadow-lg"
          />
          {/* Circular Badge */}
          {/* <div className="absolute left-1/2 bottom-0 translate-x-1/2 md:left-auto md:bottom-8 md:-right-16 z-10">
            <div className="w-36 h-36 bg-cyan-100 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-lg relative rotate-12">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mb-2 rotate-[-12deg]">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <span className="text-xs text-cyan-600 font-semibold text-center px-2 rotate-[-12deg]">
                Let us help you grow & step ahead of the rest
              </span>
            </div>
          </div> */}
        </div>
      </section>

      {/* --- Lets Work Together Section --- */}
      <section
        className={`${font.className} w-full flex flex-col items-center justify-center py-24 relative bg-white`}
      >
        <div className="text-center mb-6">
          <span className="uppercase tracking-widest text-base font-semibold text-[#283A64]">
            LET'S COLLABORATE
          </span>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center">
          <h1 className="text-[#18345A] font-extrabold text-[8rem] max-sm:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] leading-none text-center select-none">
            LET'S WORK
          </h1>
          {/* Centered Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#contact"
              className="flex flex-col items-center justify-center w-32 h-32 md:w-38 md:h-38 rounded-full bg-[#86d8eb] shadow-lg hover:bg-[#18345A] hover:text-black transition-all duration-200 text-white text-lg md:text-xl font-semibold relative group"
            >
              <span className="flex flex-col items-center justify-center h-full">
                <svg
                  className="w-7 h-7 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                Get In Touch
              </span>
            </a>
          </div>
          <h1 className="text-[#18345A] font-extrabold text-[8rem] max-sm:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] leading-none text-center select-none mt-4">
            TOGETHER
          </h1>
          6r
        </div>
      </section>

      <Footer />
    </div>
  );
}
