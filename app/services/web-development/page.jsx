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
import ServicesCategory from "../../Components/UI/ServicesCategory";
import TestimonialsSection from "../../Components/UI/TestimonialsSection";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WebDevelopmentServices() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
      },
    }),
  };

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
                  At{" "}
                  <a
                    href="/"
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    Logisol Technologies
                  </a>
                  , we create websites that don't just look good they help your
                  business work better. Whether you're just starting or already
                  running a large company, we build websites that match your
                  business goals.
                </p>
                <p className="mb-4">
                  We don't use pre-made templates. Every website is made from
                  the ground up, using modern tools and a smart approach. You
                  get a secure, mobile-friendly, SEO-ready website that grows
                  with your business.
                </p>
              </div>
            </div>
            {/* Why Our Web Development Services Stand Out */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Our{" "}
                <span className="text-cyan-400">
                  Web Development
                  <br className="hidden md:inline" /> Services
                </span>{" "}
                <span className="text-[#283A64]">Stand Out</span>
              </h2>
              <ul className="list-disc ml-6 mb-6 text-lg text-[#222]">
                <li>
                  We take time to learn about your business and your customers.
                  That's how we build the right website for your needs.
                  Everything we design and develop has a purpose and is made
                  with care.
                </li>
              </ul>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Custom Design Made for Your Brand
                  </h3>
                  <p className="text-base md:text-lg">
                    Each website starts from a blank page. No copied designs. We
                    create layouts and experiences that fit your brand, connect
                    with your audience and support your business goals.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Google-Friendly Website Structure
                  </h3>
                  <p className="text-base md:text-lg">
                    From day one, we build your website with a Google-friendly
                    SEO structure that improves visibility and organic traffic.
                    We focus on fast loading speed, clean coding, proper use of
                    headings and page titles, and clear web addresses.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Works on All Screens
                  </h3>
                  <p className="text-base md:text-lg">
                    Your website will look great and work well on any device.
                    Whether someone uses a phone, tablet or computer, the
                    experience will be smooth and consistent.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Easy to Grow and Expand
                  </h3>
                  <p className="text-base md:text-lg">
                    We use scalable tools that make it simple to add new
                    features—or even integrate with custom-designed mobile apps
                    down the line. Your website can grow as your business grows
                    without needing to start over.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Strong Built-In Security
                  </h3>
                  <p className="text-base md:text-lg">
                    We take your website's security seriously, and apply best
                    practices whether you need a portfolio site or a secure
                    graphic design showcase. We use safe data storage, protected
                    login systems, secure forms and HTTPS connections to help
                    guard against online threats.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">
                    Connects with Other Business Tools
                  </h3>
                  <p className="text-base md:text-lg">
                    Whether you use CRM tools, payment gateways, or video
                    marketing platforms, we ensure seamless integration across
                    systems. Everything works together smoothly.
                  </p>
                </div>
              </div>
            </div>
            {/* Who Do We Work With */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Who Do We <span className="text-cyan-400">Work With</span>
              </h2>
              <ul className="list-disc ml-6 mb-6 text-lg text-[#222]">
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Startups
                  </span>{" "}
                  - Quick setup and first product launches
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Small Businesses
                  </span>{" "}
                  - Creating online presence and attracting customers
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Medium Businesses
                  </span>{" "}
                  - and first product launches
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Enterprises
                  </span>{" "}
                  - Building smart systems and automated solutions
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Agencies
                  </span>{" "}
                  - Providing white-label development support
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    E-Commerce Brands
                  </span>{" "}
                  - Creating and managing strong online stores
                </li>
              </ul>
            </div>
            {/* What Clients Are Saying - Testimonials Section */}
            <TestimonialsSection />
            {/* Why Our Web Development Services Stand Out */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-3 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our{" "}
                <span className="text-cyan-400">
                  Web Development
                  <br className="hidden md:inline" /> Services
                </span>{" "}
                <span className="text-[#283A64]">Include</span>
              </h2>
            </div>
            {/* --- Web Development Services Cards --- */}
            <div className="w-full">
              <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 1: Custom Business Websites */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center min-h-[65px]">
                        Custom Business Websites
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We create websites that match your industry and speak to
                        your audience. Whether you need a company website,
                        personal brand site or niche platform, we build it to be
                        both useful and attractive.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Startups, small businesses, service providers
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 2: Performance & Speed Optimization */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Performance & Speed Optimization
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        Slow websites push people away. We improve loading speed
                        using tools like image compression, lazy loading, server
                        caching and smaller file sizes. This also helps your
                        SEO.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Higher rankings and fewer lost visitors and better
                          user experience
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 3: E-Commerce Development */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        E-Commerce Development
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We build online stores using Shopify, WooCommerce or
                        custom systems—fast, secure and designed to convert
                        visitors into customers.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Online brands, fashion, electronics, retail
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 4: CMS Integration */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center min-h-[65px]">
                        CMS Integration
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        A CMS helps you update your website without coding. We
                        integrate WordPress, Strapi or build custom dashboards
                        for easy content management.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Businesses that update content often and regularly
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 5: Landing Pages & Sales Funnels */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Landing Pages & Sales Funnels
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We build landing pages and multi-step funnels for lead
                        generation and sales—especially for ad campaigns and
                        seasonal offers.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          SaaS, courses, campaigns, local services
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  {/* Card 6: Website Maintenance & Support */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Website Maintenance & Support
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We keep your site secure and up-to-date—fixing bugs,
                        updating plugins, backups, and running regular security
                        checks.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Companies needing long-term support and regular
                          updates
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* FAQ Section for Web Development */}
            <WebDevFAQ />
            {/* Why Choose Logisol Technologies */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Choose{" "}
                <span className="text-cyan-400">Logisol Technologies?</span>
              </h2>
              <ul className="list-disc ml-6 mb-6 text-lg text-[#222]">
                <li>100% custom designs made for your business</li>
                <li>Websites built for speed, SEO and performance</li>
                <li>Strong security built from the start</li>
                <li>Skilled and experienced developers</li>
                <li>We focus on results that help your business grow</li>
              </ul>
            </div>
            {/* Why Choose Logisol Technologies */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                LET’S <span className="text-cyan-400">COLLABORATE</span>
              </h2>
              <p>
                We’re here to build a website that not only looks good but helps
                your business succeed online. Whether you’re starting fresh,
                redesigning your current site or need something more advanced,
                we’re ready to help.
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Ready to Start?
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

function WebDevFAQ() {
  const faqs = [
    {
      question: "What is the average cost of web development services?",
      answer:
        "It varies based on project type. A basic business website may start around $1,000, while large-scale platforms can go up to $10,000+. Contact us for a detailed quote.",
    },
    {
      question: "How long does a web development project take?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Small websites: 2–4 weeks</li>
          <li>E-Commerce sites: 4–6 weeks</li>
          <li>Custom applications: 6–12+ weeks</li>
        </ul>
      ),
    },
    {
      question: "Which technologies do you use?",
      answer: (
        <div className="space-y-1">
          <div>Our stack includes:</div>
          <ul className="list-disc pl-5">
            <li>Frontend: React.js, Next.js, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>CMS: WordPress, Strapi, Sanity, Wix</li>
            <li>Databases: SQL Server, PostgreSQL, MongoDB</li>
            <li>Other: Cloudinary, Azure, Vercel</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Absolutely. We build all websites with mobile responsiveness as a top priority.",
    },
    {
      question: "Do I get admin access to update my content?",
      answer:
        "Yes, we integrate a CMS or custom dashboard to give you full control.",
    },
    {
      question: "Is SEO included in your development process?",
      answer:
        "Yes. From clean URLs to meta tags and fast performance — we implement all technical SEO best practices.",
    },
    {
      question: "Can you maintain our site post-launch?",
      answer:
        "Yes. We offer flexible maintenance plans with regular updates, backups, and support.",
    },
  ];
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#283A64] mb-8 text-center">
        Frequently Asked Questions (<span className="text-cyan-400">FAQs</span>)
      </h2>
      <div className="flex flex-col gap-5">
        {faqs.map((faq, idx) => {
          const open = openIdx === idx;
          return (
            <div
              key={idx}
              className={`border border-gray-300 rounded-2xl bg-white transition-all duration-300 ${
                open ? "shadow-lg" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIdx(open ? null : idx)}
                aria-expanded={open}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-bold text-lg md:text-xl text-[#283A64]">
                  {faq.question}
                </span>
                <span className="ml-4">
                  {open ? (
                    <FaMinusCircle className="text-[#283A64] text-2xl" />
                  ) : (
                    <FaPlusCircle className="text-cyan-400 text-2xl" />
                  )}
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-5 text-gray-800 text-base transition-all duration-300 ${
                  open ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
