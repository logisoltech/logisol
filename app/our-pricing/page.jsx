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
import {
  FaArrowRight,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

export default function OurPricingPage() {
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
            Our <span className="text-cyan-400">Pricing</span>
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="text-lg font-semibold text-[#283A64] hover:underline flex items-center gap-2"
            >
              Home{" "}
              <span className="text-cyan-400">
                <span className="text-2xl">*</span> Our Pricing
              </span>
            </a>
          </div>
        </div>
      </section>

      <Slider />

      {/* --- Pricing Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-24">
        <div className="p-6 mb-6 w-full border-b border-[#d4d8e0]">
          <p className="text-gray-900 text-base md:text-lg">
            At Logisol Tech, we don't just build websites or write code—we build
            scalable digital solutions that help businesses compete, grow, and
            lead in the modern world. We are a results-driven software house
            offering a wide range of services that include Web Development, App
            Development, SEO, Social Media Marketing, Graphic Design, and Video
            Editing—each tailored to suit your industry and business goals.
          </p>
        </div>
      </section>

      {/* --- Website Development Pricing Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-4 md:px-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] mb-12">
            Website Development Pricing
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              {/* Starter Site Card */}
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Starter Site
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Perfect for small businesses looking to establish an online
                  presence.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">499</span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Up to 5
                    Informational Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Mobile Responsive
                    Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Contact Form &
                    Google Map
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Basic SEO
                    Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 1 Revision Round
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: 1–2 Weeks
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg , #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />

              {/* Business Pro Card */}
              <div className="rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative">
                {/* Popular Ribbon */}
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                    POPULAR
                  </span>
                </div>
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Business Pro
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Ideal for small to mid-sized e-commerce businesses.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">999</span>
                </div>
                <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Up to 12 Pages +
                    Product Catalog
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Shopping Cart &
                    Payment Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Mobile Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Newsletter Signup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Basic Inventory
                    Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: 3–4 Weeks
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              {/* Custom Development Card */}
              <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Custom Development
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  For mid-to-large businesses needing fully customized web apps.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">1999+</span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Custom CMS / Admin
                    Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> React / Node.js
                    Tech Stack
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Advanced Features &
                    APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> SEO, Analytics,
                    Security Layers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: 4–6 Weeks
                    (Based on Scope)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- App Development Pricing Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-4 md:px-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] mb-12">
            App Development Pricing
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {/* MVP Package Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="12"
                      height="20"
                      rx="3"
                      stroke="currentColor"
                    />
                    <rect
                      x="10"
                      y="18"
                      width="4"
                      height="2"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  MVP Package
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Single platform app for small businesses or MVPs.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">2,499</span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Up to 5 Screens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Android or iOS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Simple UI/UX
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Contact Form & Push
                    Notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: 3–4 Weeks
                  </li>
                </ul>
              </div>
            </div>
            {/* Cross-Platform App Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                {/* Popular Ribbon */}
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                    POPULAR
                  </span>
                </div>
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="12"
                      height="20"
                      rx="3"
                      stroke="currentColor"
                    />
                    <rect
                      x="10"
                      y="18"
                      width="4"
                      height="2"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Cross-Platform App
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Cross-platform mobile solution for growing brands.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">5,999</span>
                </div>
                <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Up to 15 Screens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> React Native or
                    Flutter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> User Authentication
                    + Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> API Integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: 5–7 Weeks
                  </li>
                </ul>
              </div>
            </div>
            {/* Enterprise App Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="12"
                      height="20"
                      rx="3"
                      stroke="currentColor"
                    />
                    <rect
                      x="10"
                      y="18"
                      width="4"
                      height="2"
                      rx="1"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Enterprise App
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Fully scalable app tailored to your business logic.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">12,000+</span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Unlimited Screens
                    (Per Scope)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Native or
                    Cross-Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Custom Backend
                    (Node.js, Firebase, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Real-Time Features,
                    Admin Roles, Payment Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Delivery: Based on
                    Requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO Packages Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-4 md:px-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] mb-12">
            SEO Packages
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {/* Starter SEO Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                    <path d="M12 8v4l2 2" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Starter SEO
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  For businesses starting with local or basic organic
                  visibility.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">399</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 5 Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> On-Page
                    Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 1 Blog Post / Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Basic Link Building
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Monthly Reports
                  </li>
                </ul>
              </div>
            </div>
            {/* Basic Growth SEO Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                {/* Popular Ribbon */}
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                    POPULAR
                  </span>
                </div>
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                    <path d="M12 8v4l2 2" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Basic Growth SEO
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  More keywords, better content, deeper analysis.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">799</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 15 Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Competitor Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Technical SEO Fixes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 2 Blogs / Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Schema Markup +
                    Monthly Strategy Call
                  </li>
                </ul>
              </div>
            </div>
            {/* Enterprise SEO Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                    <path d="M12 8v4l2 2" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Enterprise SEO
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Advanced SEO strategy for national reach & long-term growth.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">1,499+</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 30+ Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> High Authority
                    Backlinks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 4 SEO Blogs / Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Conversion
                    Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Dedicated SEO
                    Manager + Dashboard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Social Media Marketing Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-4 md:px-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] mb-12">
            Social Media Marketing
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {/* Starter Social Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <circle cx="8" cy="10" r="2" stroke="currentColor" />
                    <circle cx="16" cy="10" r="2" stroke="currentColor" />
                    <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Starter Social
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Consistent, quality content for growing a basic social
                  presence.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">399</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 2 Platforms (e.g.,
                    Facebook + Instagram)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 8 Posts/Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Basic Design &
                    Hashtags
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Monthly Reporting
                  </li>
                </ul>
              </div>
            </div>
            {/* Growth Social Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                {/* Popular Ribbon */}
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                    POPULAR
                  </span>
                </div>
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <circle cx="8" cy="10" r="2" stroke="currentColor" />
                    <circle cx="16" cy="10" r="2" stroke="currentColor" />
                    <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Growth Social
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Elevated content, light ads, and strategic engagement.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">799</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 3 Platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 16 Posts + 4 Reels
                    / Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Comments & DMs
                    Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Ad Campaign Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Monthly Strategy
                    Call
                  </li>
                </ul>
              </div>
            </div>
            {/* Pro Social Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" />
                    <circle cx="8" cy="10" r="2" stroke="currentColor" />
                    <circle cx="16" cy="10" r="2" stroke="currentColor" />
                    <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Pro Social
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  High-volume, data-driven content management for growing
                  brands.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">1,499</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> All Major Platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 30+ Posts / Month +
                    8 Reels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Community
                    Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Paid Campaign
                    Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Competitor Research
                    + Reporting Dashboard
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Design & Video Editing Section --- */}
      <section className="w-full bg-white relative z-20 flex justify-center items-center py-12 px-4 md:px-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283A64] mb-12">
            Design & Video Editing
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {/* Creative Starter Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="16"
                      width="16"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="8"
                      y="4"
                      width="8"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Creative Starter
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  Simple, clean designs and videos for startups.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">299</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 10 Graphic Posts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 2 Reels or Short
                    Videos (30s)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 2 Revisions Each
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Turnaround: 3-5
                    Days
                  </li>
                </ul>
              </div>
            </div>
            {/* Growth Creative Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                {/* Popular Ribbon */}
                <div className="absolute top-0 right-0">
                  <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                    POPULAR
                  </span>
                </div>
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="16"
                      width="16"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="8"
                      y="4"
                      width="8"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Growth Creative
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  A full content design service for active social or digital
                  campaigns.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">599</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 20 Graphics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 4 Edited Videos (up
                    to 60s)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Motion Graphics +
                    Brand Templates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Strategy Support
                  </li>
                </ul>
              </div>
            </div>
            {/* Pro Visual Suite Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="16"
                      width="16"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="8"
                      y="4"
                      width="8"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Pro Visual Suite
                </h3>
                <p className="text-gray-700 text-base mb-4 text-center">
                  A full design & video editing partner for content-heavy
                  operations.
                </p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  $<span className="text-5xl">1,299+</span>{" "}
                  <span className="text-lg font-normal text-[#283A64]">
                    /month
                  </span>
                </div>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Unlimited* Graphic
                    Requests (Fair Use)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> 8+ Edited Videos /
                    Month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Product Videos,
                    Animations, Promo Visuals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Dedicated Manager +
                    Weekly Delivery Cycle
                  </li>
                </ul>
              </div>
            </div>
            {/* Pro Visual Suite Card */}
            <div className="relative">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px]">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="16"
                      width="16"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="12"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                    <rect
                      x="8"
                      y="4"
                      width="8"
                      height="4"
                      rx="2"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                  Add-Ons (Available Across Services):
                </h3>
                <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer">
                  Get Started
                </button>
                <ul className="w-full text-left text-gray-700 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Logo Design: $149
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Brand Kit: $199
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Explainer Video
                    (with Voiceover): $299
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Local SEO Boost:
                    $200/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> eCommerce SEO:
                    $300/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">○</span> Social Ads
                    Management: $299/month
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
        </div>
      </section>

      <Footer />
    </div>
  );
}
