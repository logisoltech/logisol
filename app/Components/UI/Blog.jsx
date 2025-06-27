import React from 'react'
import { font } from '../Font/font'
import { FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Web Development Trends in...",
      image: "/blog.webp"
    },
    {
      id: 2,
      title: "How to Choose the Right Social...",
      image: "/blog.webp"
    },
    {
      id: 3,
      title: "Navigating the Digital Landscape Tips for...",
      image: "/blog.webp"
    }
  ]

  return (
    <section className={`py-20 px-4 md:px-8 lg:px-16 bg-white relative z-20 ${font.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div>
            {/* Latest Blog Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-cyan-400 text-sm">✦</span>
              <span className="text-gray-600 text-sm font-medium">LATEST BLOG</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#283a64]">
              Insights from our <span className="text-cyan-400">experts</span>
            </h2>
          </div>
          
          {/* See All Post Button */}
          <button className="hidden md:flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 px-6 py-3 rounded-full text-[#283a64] font-medium">
            See All Post
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#283a64] mb-4 leading-tight">
                  {post.title}
                </h3>
                
                {/* Read More Link */}
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors duration-300 font-medium">
                  Read More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See All Post Button */}
        <div className="md:hidden flex justify-center mt-12">
          <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 px-6 py-3 rounded-full text-[#283a64] font-medium">
            See All Post
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog