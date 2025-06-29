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
  FaArrowLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Collaborate from "../Components/UI/Collaborate";

export default function OurProjectsPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Gallery images
  const images = [
    { id: '1', src: '/our-projects/project-1.webp' },
    { id: '2', src: '/our-projects/project-2.webp' },
    { id: '3', src: '/our-projects/project-3.webp' },
    { id: '4', src: '/our-projects/project-4.webp' },
    { id: '5', src: '/our-projects/project-5.png' },
    { id: '6', src: '/our-projects/project-6.webp' },
  ];
  const [selectedId, setSelectedId] = useState(null);

  // Helper to get current index
  const currentIdx = selectedId ? images.findIndex(img => img.id === selectedId) : -1;
  const goLeft = (e) => {
    e.stopPropagation();
    if (currentIdx > -1) {
      setSelectedId(images[(currentIdx - 1 + images.length) % images.length].id);
    }
  };
  const goRight = (e) => {
    e.stopPropagation();
    if (currentIdx > -1) {
      setSelectedId(images[(currentIdx + 1) % images.length].id);
    }
  };

  // Blur/dim effect for background when modal is open
  const blurClass = selectedId ? 'filter blur-md brightness-75 transition-all duration-300' : '';

  return (
    <div className={font.className}>
      <div className={blurClass}>
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
              Our <span className="text-cyan-400">Projects</span>
            </h1>
            <div className="flex items-center justify-center mt-2">
              <a
                href="/"
                className="text-lg font-semibold text-[#283A64] hover:underline flex items-center gap-2"
              >
                Home{" "}
                <span className="text-cyan-400">
                  <span className="text-2xl">*</span> Our Projects
                </span>
              </a>
            </div>
          </div>
        </section>

        <Slider />

        {/* --- Animated Project Gallery --- */}
        <section className="bg-white relative z-20 w-full mx-auto py-16 px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img) => (
              <motion.div
                key={img.id}
                layoutId={img.id}
                onClick={() => setSelectedId(img.id)}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src={img.src}
                  alt={`Project ${img.id}`}
                  width={200}
                  height={100}
                  className="w-full h-auto object-cover"
                  priority={img.id === '1'}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <Collaborate />
        <Footer />
      </div>
      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedId}
              className="w-[90vw] max-w-4xl overflow-hidden flex justify-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button
                onClick={goLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyan-200 text-[#283A64] rounded-full p-3 z-10 shadow-lg"
                aria-label="Previous image"
              >
                <FaArrowLeft size={24} />
              </button>
              <Image
                src={images.find((img) => img.id === selectedId)?.src}
                alt="Expanded Project"
                width={200}
                height={100}
                className="w-3/4 h-auto object-cover"
              />
              {/* Right Arrow */}
              <button
                onClick={goRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyan-200 text-[#283A64] rounded-full p-3 z-10 shadow-lg"
                aria-label="Next image"
              >
                <FaArrowRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
