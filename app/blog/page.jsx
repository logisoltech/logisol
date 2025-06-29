"use client";
import React, { useCallback } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../Components/Data/blogs";
import Collaborate from "../Components/UI/Collaborate";

export default function BlogPage() {
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
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="text-lg font-semibold text-[#283A64] hover:underline flex items-center gap-2"
            >
              Home{" "}
              <span className="text-cyan-400">
                <span className="text-2xl">*</span> Blog
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* --- Blog Card Grid --- */}
      <section className="bg-white relative z-20 w-full mx-auto py-16 px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <Link href={`/blog/${blog.id}`} className="group">
                <div className="overflow-hidden rounded-3xl mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-6 leading-tight">
                  {blog.title}
                </h2>
                <span className="text-cyan-400 font-bold text-lg flex items-center gap-2 group-hover:underline">
                  Read More
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
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Collaborate />
      <Footer />
    </div>
  );
}
