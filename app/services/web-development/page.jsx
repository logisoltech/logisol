"use client";

import Navbar from "../../Components/UI/Navbar";
import Footer from "../../Components/UI/Footer";
import Collaborate from "../../Components/UI/Collaborate";
import { font } from "../../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../../Components/Font/headingFont";
import Slider from "../../Components/UI/Slider";
import { FaArrowRight } from "react-icons/fa";
import ServicesCategory from "../../Components/UI/ServicesCategory";

export default function WebDevelopmentServices() {
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
            Custom <span className="text-cyan-400">Web Development</span>{" "}
            Services
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="text-lg font-semibold text-[#283A64] hover:underline flex items-center gap-2"
            >
              Home{" "}
              <span className="text-cyan-400">
                <span className="text-2xl">*</span> Web Development
              </span>
            </a>
          </div>
        </div>
      </section>
      <Slider />
      <section className="relative w-full bg-white flex flex-col md:flex-row items-start justify-center py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Main Content (Image/Intro + Why Stand Out) */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Image and Description */}
            <div>
              <div className="rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="/services/web-development/hero.webp"
                  alt="Web Development Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-base md:text-lg text-gray-900 leading-relaxed">
                <p className="mb-4">
                  At <a href="/" className="text-cyan-400 font-semibold hover:underline">Logisol Technologies</a>, we create websites that don't just look good they help your business work better. Whether you're just starting or already running a large company, we build websites that match your business goals.
                </p>
                <p className="mb-4">
                  We don't use pre-made templates. Every website is made from the ground up, using modern tools and a smart approach. You get a secure, mobile-friendly, SEO-ready website that grows with your business.
                </p>
              </div>
            </div>
            {/* Why Our Web Development Services Stand Out */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{lineHeight:'1.15'}}>
                Why Our <span className="text-cyan-400">Web Development<br className="hidden md:inline"/> Services</span> <span className="text-[#283A64]">Stand Out</span>
              </h2>
              <ul className="list-disc ml-6 mb-6 text-lg text-[#222]">
                <li>We take time to learn about your business and your customers. That's how we build the right website for your needs. Everything we design and develop has a purpose and is made with care.</li>
              </ul>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-1">Custom Design Made for Your Brand</h3>
                  <p className="text-base md:text-lg">Each website starts from a blank page. No copied designs. We create layouts and experiences that fit your brand, connect with your audience and support your business goals.</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">Google-Friendly Website Structure</h3>
                  <p className="text-base md:text-lg">From day one, we build your website with a Google-friendly SEO structure that improves visibility and organic traffic. We focus on fast loading speed, clean coding, proper use of headings and page titles, and clear web addresses.</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">Works on All Screens</h3>
                  <p className="text-base md:text-lg">Your website will look great and work well on any device. Whether someone uses a phone, tablet or computer, the experience will be smooth and consistent.</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">Easy to Grow and Expand</h3>
                  <p className="text-base md:text-lg">We use scalable tools that make it simple to add new features—or even integrate with custom-designed mobile apps down the line. Your website can grow as your business grows without needing to start over.</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">Strong Built-In Security</h3>
                  <p className="text-base md:text-lg">We take your website's security seriously, and apply best practices whether you need a portfolio site or a secure graphic design showcase. We use safe data storage, protected login systems, secure forms and HTTPS connections to help guard against online threats.</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">Connects with Other Business Tools</h3>
                  <p className="text-base md:text-lg">Whether you use CRM tools, payment gateways, or video marketing platforms, we ensure seamless integration across systems. Everything works together smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden md:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="block md:hidden w-full px-8 md:px-16 lg:px-24 mt-8">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />
    </div>
  );
}
