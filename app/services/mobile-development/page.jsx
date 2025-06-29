"use client";

import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Navbar from "../../Components/UI/Navbar";
import Footer from "../../Components/UI/Footer";
import { font } from "../../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../../Components/Font/headingFont";
import Slider from "../../Components/UI/Slider";
import TestimonialsSection from "../../Components/UI/TestimonialsSection";
import ServicesCategory from "../../Components/UI/ServicesCategory";
import Collaborate from "../../Components/UI/Collaborate";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileDevelopmentServices() {
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
            Mobile App Development That{" "}
            <span className="text-cyan-400">Drives Business Success</span>
          </h1>
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
                  src="/services/mobile-development.webp"
                  alt="Mobile Development Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-base md:text-lg text-gray-900 leading-relaxed">
                <p className="mb-4">
                  In today’s mobile-first world, having a high-performance app
                  isn’t a luxury—it’s a necessity. At{" "}
                  <a
                    href="/"
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    Logisol Technologies
                  </a>
                  , we develop custom mobile applications that are intuitive,
                  visually appealing, and built for long-term success. Whether
                  you’re launching a new startup or enhancing enterprise
                  processes. We turn ideas into fully functioning apps your
                  users will love — or even expand them into custom web
                  platforms designed for scalability and speed.
                </p>
                <p className="mb-4">
                  We don't use pre-made templates. Every website is made from
                  the ground up, using modern tools and a smart approach. You
                  get a secure, mobile-friendly, SEO-ready website that grows
                  with your business.
                </p>
                <div className="flex flex-row gap-4 mt-4">
                  <button
                    href="/contact-us"
                    className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                  >
                    Get Your Free Call Scheduled
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
                  <button
                    href="/contact-us"
                    className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                  >
                    Get a Custom Quote in 24 Hours
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
            {/* Why Leading Businesses Trust */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Leading Businesses Trust{" "}
                <span className="text-cyan-400">Logisol Technologies</span>
              </h2>
              <p className="text-sm mb-3">
                In today’s fast-paced digital economy, success depends on speed,
                scalability, and user experience. Here’s how we help you stay
                ahead:
              </p>
              <div className="space-y-6">
                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Rapid Development & MVP Launches</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Accelerate your go-to-market journey with a fast MVP
                    rollout. Launch, test, and validate your product in record
                    time.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Budget-Friendly Solutions</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Save up to 40% on development costs with smart architecture,
                    reusable components, and cross-platform frameworks.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Tailored UI/UX for Better Engagement</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Our designers craft intuitive, brand-aligned interfaces that
                    drive user interaction, reduce churn, and boost retention.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Multi-Platform Expertise Under One Roof</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Whether it’s Android, iOS, or hybrid development, we build
                    high-performance apps for every screen.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Post-Launch Support & Maintenance</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We’re here long after launch — offering upgrades, feature
                    enhancements, and performance optimizations.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Business-Focused Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We align technical decisions with your business goals,
                    ensuring the solution is optimized for ROI, scalability, and
                    market differentiation.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Transparent Collaboration</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    You are involved in every step. With real-time dashboards,
                    milestone reviews, and sprint planning, you’re never left in
                    the dark.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Free Consultation
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
            {/* Why Leading Businesses Trust */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Leading Businesses Trust{" "}
                <span className="text-cyan-400">Logisol Technologies</span>
              </h2>
              <p className="text-sm mb-3">
                In today’s fast-paced digital economy, success depends on speed,
                scalability, and user experience. Here’s how we help you stay
                ahead:
              </p>
              <div className="space-y-6">
                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Android App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Native Android applications built using Kotlin, Java, and
                    Jetpack Compose. We focus on compatibility, performance, and
                    robust back-end integration to ensure your app delivers
                    value across Android smartphones and tablets. <br /> <br />{" "}
                    Whether it’s a consumer-facing app or a B2B solution, our
                    Android experts bring your vision to life with sleek UI,
                    robust architecture, and seamless integration with
                    third-party APIs and hardware.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>iOS App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We create secure and sleek iOS apps using Swift and
                    Objective-C. Whether you’re targeting consumers or internal
                    enterprise users, we deliver high-performance applications
                    optimized for Apple devices. <br /> <br /> From enterprise
                    tools to interactive entertainment, our iOS apps deliver
                    polished experiences that comply with Apple’s rigorous
                    standards, ensuring a smooth approval and launch process.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Cross-Platform App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Cut development time and costs by building once and
                    deploying everywhere. Our cross-platform solutions in
                    Flutter and React Native offer native-like performance
                    across platforms, ideal for startups and fast-growing
                    businesses. <br /> <br /> This approach is ideal for
                    businesses that want consistency across platforms while
                    maintaining a rapid development lifecycle and cost savings.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Web to Mobile App Conversion</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Already have a responsive web platform? We convert it into a
                    mobile app using native wrappers or frameworks, optimizing
                    touch interactions, offline usage, and mobile-specific
                    features. <br /> <br /> We not only port your app but also
                    optimize its performance, design, and responsiveness for a
                    truly native user experience.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>E-commerce & On-Demand App Solutions</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We build high-performance apps for food delivery, grocery,
                    taxi services, home services, and marketplaces. Integrated
                    features include real-time tracking, secure payments,
                    customer dashboards, and admin analytics. <br /> <br /> Our
                    scalable e-commerce platforms come with smart features like
                    loyalty programs, dynamic pricing, real-time inventory sync,
                    and advanced search — all optimized with SEO strategies that
                    drive organic mobile traffic.
                  </p>
                </div>

                <div>
                  <ul className="font-bold text-xl mb-1 list-disc">
                    <li>Mobile App Development for Startups</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    From idea validation to launch, we guide startups through
                    MVP development with lean architecture and modular
                    codebases. We prioritize speed and cost-efficiency, allowing
                    you to test, iterate, and grow fast. <br /> <br /> We also
                    help startups with pitch decks and demos while integrating
                    social media marketing tactics that drive pre-launch buzz
                    and user interest.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Free Consultation
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

            {/* Mobile App Development Process Section */}
            <section className="w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64] text-center">
                Our <span className="text-cyan-400">App Development</span>{" "}
                Process
              </h2>
              <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          Discovery & Idea Validation
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We understand your users, study competitors, define MVP
                        scope, and evaluate feasibility through workshops and
                        research — aligning product ideas with market needs.
                      </p>
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
                  {/* Card 2: UI/UX Design & Prototyping */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          UI/UX Design & Prototyping
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        Using Figma and InVision, we design branded interfaces
                        with wireframes, prototypes, and mockups — built around
                        user feedback and strong design thinking principles.
                      </p>
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
                  {/* Card 3: Agile App Development */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          Agile App Development
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We develop in sprints and share progress regularly. Our
                        scalable code is clean, modular, and CI/CD-ready with
                        automated testing baked in.
                      </p>
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
                  {/* Card 4: Testing & Quality Assurance */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          Testing & Quality Assurance
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        From UAT to regression, we test every module thoroughly.
                        Load testing ensures stability under peak traffic, while
                        security and performance remain top priorities.
                      </p>
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
                  {/* Card 5: Deployment & Launch */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          Deployment & Launch
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We handle App Store & Play Store submissions, metadata,
                        ASO, and launch assets. Zero-downtime deployment ensures
                        a smooth go-live.
                      </p>
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
                  {/* Card 6: Post-Launch Support */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <h3 className="text-2xl font-bold mb-2 text-center min-h-[90px]">
                          Post-Launch Support
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        After launch, we monitor app health, push regular
                        updates, analyze usage behavior, and scale
                        infrastructure as your user base grows.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Industries We Serve */}
            <section>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Industries We <span className="text-cyan-400">Serve</span>
              </h2>
              <p className="text-sm md:text-md mb-6 text-[#222]">
                Our industry-specific solutions help businesses stand out and
                deliver personalized mobile experiences.
              </p>
              <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Healthcare & Wellness
                  </span>{" "}
                  – Telemedicine, appointment scheduling, fitness tracking
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    E-commerce & Retail
                  </span>{" "}
                  – Catalog management, personalized shopping, mobile checkout
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Education & E-Learning
                  </span>{" "}
                  – Online courses, student tracking, interactive quizzes
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Finance & Fintech
                  </span>{" "}
                  – Mobile banking, budgeting, investment tracking
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Transportation & Logistics
                  </span>{" "}
                  – Delivery routing, live GPS, fleet tracking
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Entertainment & OTT
                  </span>{" "}
                  – Content streaming, subscriptions, user profiles
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Real Estate & PropTech
                  </span>{" "}
                  – Property listings, 3D tours, lead capture forms
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Manufacturing & Field Services
                  </span>{" "}
                  – Workflow apps, inventory tracking, job assignments
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Travel & Hospitality
                  </span>{" "}
                  – Booking apps, travel guides, location-based services
                </li>
              </ul>
              <p className="text-sm md:text-md text-[#222]">
                Have a unique concept? Let us custom-build your app while
                aligning it with digital marketing strategies focused on user
                acquisition and retention.
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Free Consultation
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
            </section>

            {/* Technology Stack Section */}
            <section>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our <span className="text-cyan-400">Technology Stack</span>
              </h2>
              <p className="text-sm md:text-md mb-6 text-[#222]">
                We work with a robust and modern stack to power scalable,
                future-proof apps:
              </p>

              <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Frontend:
                  </span>{" "}
                  Flutter, React Native, Kotlin, Swift
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Backend:
                  </span>{" "}
                  Node.js, Express, Firebase
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Database:
                  </span>{" "}
                  MongoDB, MySQL, PostgreSQL
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Cloud/Hosting:
                  </span>{" "}
                  AWS, Azure, Docker, Vercel
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    DevOps & Tools:
                  </span>{" "}
                  GitHub, Postman, Jira, Figma, Notion
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    CI/CD:
                  </span>{" "}
                  GitHub Actions, Bitbucket Pipelines, Jenkins
                </li>
                <li>
                  <span className="text-cyan-400 hover:text-[#283A64]">
                    Security:
                  </span>{" "}
                  OAuth 2.0, SSL, JWT, GDPR Compliance
                </li>
              </ul>

              <p className="text-sm md:text-md text-[#222]">
                We help you choose the right stack based on performance needs,
                development timelines, and long-term support.
              </p>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Ready to Build Your Mobile App? */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Ready to{" "}
                <span className="text-cyan-400">Build Your Mobile App?</span>
              </h2>
              <p>
                Whether you’re a startup founder, enterprise team, or digital
                agency looking for a white-label partner — Logisol Technologies
                is here to bring your vision to life.
              </p>
              <div className="flex flex-row gap-4 mt-4">
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Free Consult & Cost Quote
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
                <button
                  href="/contact-us"
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
                >
                  Claim Free Cost Estimate
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
      question: "How do I develop a mobile app?",
      answer:
        "It starts with defining your goals and audience. Next, you’ll need wireframes, a tech stack (like React Native or Kotlin), and a development team. With Logisol, you get a full-cycle partner who handles everything from strategy to launch.",
    },
    {
      question: "What is the mobile app development process?",
      answer: (
        <ul className="list-decimal pl-5 space-y-1">
          <li>Planning and Discovery</li>
          <li>Design (UI/UX)</li>
          <li>Development (Front-end and Back-end)</li>
          <li>Testing and QA</li>
          <li>Deployment</li>
          <li>Launch</li>
          <li>Post-launch Support</li>
        </ul>
      ),
    },
    {
      question: "What are the 7 stages of app development?",
      answer: (
        <ul className="list-decimal pl-5 space-y-1">
          <li>Idea Validation</li>
          <li>Market Research</li>
          <li>Wireframing & UI Design</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Launch</li>
          <li>Maintenance & Scaling</li>
        </ul>
      ),
    },
    {
      question: "How do I plan an app?",
      answer:
        "Start with user research, define core features, and outline a monetization strategy. Sketch wireframes or prototypes and work with experts to translate your vision into an actionable roadmap.",
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
