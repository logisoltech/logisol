"use client";

import { useCallback } from "react";
import Navbar from "../../Components/UI/Navbar";
import Footer from "../../Components/UI/Footer";
import { font } from "../../Components/Font/font";
import { headingFont } from "../../Components/Font/headingFont";
import { blogs } from "../../Components/Data/blogs";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../../Components/Data/particlesConfig";
import Image from "next/image";
import Collaborate from "../../Components/UI/Collaborate";
import { FaCalendarDay, FaTags } from "react-icons/fa";

export default function BlogPostPage({ params }) {
  const { id } = params;
  const blog = blogs?.find((blog) => blog.id === parseInt(id));

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
        <div className="px-24 relative z-10 flex flex-col items-center justify-center w-full h-full max-md:px-16 max-sm:px-8">
          <h1
            className={`${headingFont.className} text-6xl font-extrabold text-[#283A64] text-center mb-6 max-md:text-4xl`}
          >
            <span className="text-cyan-400">{blog.title}</span>
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="flex flew-row gap-x-6 text-lg font-semibold hover:underline flex items-center gap-2"
            >
              <span className="flex flex-row items-center gap-2">
                <FaCalendarDay /> May 7, 2025
              </span>
              <span className="flex flex-row items-center gap-2">
                <FaTags /> Uncategorized
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white relative z-20 px-24 py-16 max-md:px-16 max-md:py-8 max-sm:px-8">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={500}
          className="w-full h-auto rounded-3xl"
        />
      </section>
      {blog.id == 1 && (
        <section className="w-full bg-white relative z-20 flex justify-center items-center px-24 max-md:px-16 max-sm:px-8">
          <div className="py-6 mb-6 w-full border-b border-[#d4d8e0]">
            <p className="text-gray-900 text-base md:text-lg">
              Welcome to WordPress. This is your first post. Edit or delete it,
              then start writing!
            </p>
          </div>
        </section>
      )}
      {blog.id >= 2 && (
        <section className="w-full bg-white relative z-20 flex justify-center items-center pt-12 px-24 max-md:px-16 max-sm:px-8">
          <div className="p-6 mb-6 w-full border-b border-[#d4d8e0]">
            <p className="text-gray-900 text-base md:text-lg">
              In today’s digital age, having a mobile-optimized website is no
              longer optional—it’s essential for the success of your business.
              With over half of global web traffic coming from mobile devices,
              consumers expect fast, seamless, and user-friendly experiences
              when browsing on their smartphones or tablets.
              <br />
              <br />A mobile-optimized website ensures that your site is
              responsive and adapts to any screen size, providing easy
              navigation, readable content, and fast loading times. This not
              only improves user experience but also boosts your site’s search
              engine rankings, as search engines like Google prioritize
              mobile-friendly websites in their results. Furthermore, a
              mobile-optimized site enhances brand credibility, builds customer
              trust, and increases the likelihood of conversions, as users are
              more likely to engage with a site that functions smoothly on their
              devices.
              <br />
              <br />
              <div className="flex gap-2 bg-[#a6a9af] rounded-2xl p-4">
                <span className="text-cyan-400">
                  <Image
                    src="/blog/icon-blockquote.svg"
                    alt="quote"
                    width={20}
                    height={20}
                    className="w-50 h-auto"
                  />
                </span>
                <p className="text-[#283A64] text-xl">
                  Unlock the Full Potential of Your Business with a
                  Mobile-Optimized Website: Enhance User Experience, Boost SEO
                  Rankings, and Increase Conversions to Stay Competitive in the
                  Mobile-First Digital Landscape of Tomorrow.
                </p>
              </div>
              <br />
              <br />
              Mobile optimization also opens the door for more opportunities to
              reach your target audience, especially as mobile commerce
              (m-commerce) continues to grow. Whether your business focuses on
              e-commerce, lead generation, or brand awareness, ensuring your
              website performs. Mobile optimization also opens the door for more
              opportunities to reach your target audience, especially as mobile
              commerce (m-commerce) continues to grow. Whether your business
              focuses on e-commerce, lead generation, or brand awareness,
              ensuring your website performs.
            </p>
            <br />
            <h2 className="text-4xl font-bold text-[#283A64] mb-1">
              Maximize success with mobile optimization
            </h2>
            <br />
            <p className="text-gray-900 text-base md:text-lg">
              A mobile-optimized website is crucial for delivering a seamless
              user experience across all devices. It enhances your site’s
              functionality, improves search engine rankings, and boosts
              conversions by catering to the growing number of mobile users.
            </p>
            <br />
            <ul className="text-xl text-[#2e3f68] list-disc pl-4 space-y-2">
              <li>
                Enhance user experience across devices with mobile optimization
              </li>
              <li>
                Stay competitive in the mobile-first era: the importance of
                mobile optimization
              </li>
              <li>
                How mobile optimization improves engagement and reduces bounce
                rates
              </li>
              <li>
                Improve load times and performance with mobile-optimized
                websites
              </li>
              <li>
                Future-proof your business with a mobile-optimized digital
                presence
              </li>
            </ul>
            <br />
            <p className="text-gray-900 text-base md:text-lg">
              Maximizing your business success starts with optimizing your
              website for mobile devices. A mobile-optimized site provides users
              with a smooth, responsive experience, improving navigation,
              readability, and speed. It boosts your search engine rankings,
              increases user engagement, and enhances conversions by catering to
              the growing mobile audience. In today’s mobile-first world, having
              a site that performs flawlessly across all devices is essential
              for staying competitive, driving traffic, and building customer
              trust. Let mobile optimization take your business to new heights.
            </p>
          </div>
        </section>
      )}

      {/* Social Icons */}
      <section className="w-full bg-white relative z-20 flex justify-between px-24 max-md:px-16 max-sm:px-8">
        {blog.id >= 2 && (
          <div className="flex flex-row gap-2 flex flex-wrap items-center">
            <h2 className="text-2xl font-bold text-[#283A64]">Tags:</h2>
            <div className="text-white bg-[#86D8EB] rounded-full px-4 py-2 flex flex-wrap items-center hover:bg-[#283A64]">
              Creative
            </div>
            <div className="text-white bg-[#86D8EB] rounded-full px-4 py-2 flex flex-wrap items-center hover:bg-[#283A64]">
              Digital
            </div>
            <div className="text-white bg-[#86D8EB] rounded-full px-4 py-2 flex flex-wrap items-center hover:bg-[#283A64]">
              Optimize
            </div>
          </div>
        )}
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center rounded-full hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094m0-2.163C8.741-.069 8.332-.058 7.052.002 5.782.062 4.515.334 3.541 1.308 2.567 2.282 2.295 3.55 2.233 4.816c-.06 1.28-.071 1.689-.071 5.184s.012 3.904.07 5.184c.062 1.266.334 2.534 1.308 3.508.974.974 2.242 1.246 3.508 1.308 1.28.06 1.689.071 5.184.071s3.904-.012 5.184-.07c1.266-.062 2.534-.334 3.508-1.308.974-.974 1.246-2.242 1.308-3.508.058-1.28.069-1.689.069-5.184s-.012-3.904-.07-5.184c-.062-1.266-.334-2.534-1.308-3.508-.974-.974-2.242-1.246-3.508-1.308C15.647.175 15.267.163 12 .163z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-700 rounded-full hover:bg-cyan-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* --- Leave a Reply Section --- */}
      <div className="bg-white relative z-20 w-full mx-auto px-24 py-10 max-md:px-16 max-sm:px-8">
        <h2 className="text-4xl font-bold text-[#283A64] mb-3">
          Leave a Reply
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="comment"
              className="block text-lg font-medium text-[#222] mb-1"
            >
              Comment *
            </label>
            <textarea
              id="comment"
              required
              rows={4}
              className="w-full rounded-2xl bg-[#232938] text-white text-lg p-6 focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#222] mb-1"
              >
                Name *
              </label>
              <input
                id="name"
                required
                type="text"
                className="w-full rounded-2xl bg-[#232938] text-white text-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#222] mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                required
                type="email"
                className="w-full rounded-2xl bg-[#232938] text-white text-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="website"
                className="block text-lg font-medium text-[#222] mb-1"
              >
                Website
              </label>
              <input
                id="website"
                type="text"
                className="w-full rounded-2xl bg-[#232938] text-white text-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="saveinfo"
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300"
            />
            <label htmlFor="saveinfo" className="text-gray-700 text-base">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button
            type="submit"
            className="mt-2 bg-cyan-300 hover:bg-cyan-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all"
          >
            Post Comment
          </button>
        </form>
      </div>
      <Collaborate />
      <Footer />
    </div>
  );
}
